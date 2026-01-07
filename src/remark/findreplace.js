// Default replacements - these will be overridden by options from docusaurus.config.js
let defaultReplacements = {
    COMPANY: 'My Company',
    COPYRIGHT: `Copyright ${new Date().getFullYear()} My Company`,
}


// let options = {
//     // List your find and replace values. Both values must be strings.
//     // This is required.
//     replacements: {
//         COMPANY: 'My Company',
//         COPYRIGHT: `Copyright ${new Date().getFullYear()} My Company`,
//     },
//     // By default, find values are prefixed to reduce the chances of
//     // conflicting with real content. You can change the prefix here.
//     // Set to `false` to disable the prefix.
//     prefix: '%',
// }

const plugin = (options) => {
    const transformer = async (ast) => {
        // Dynamic import for ES modules (unist-util-visit v5 and escape-string-regexp v5 are ES module only)
        const {visit} = await import('unist-util-visit');
        const escapeStringRegexpModule = await import('escape-string-regexp');
        const escapeStringRegexp = escapeStringRegexpModule.default || escapeStringRegexpModule;
        const prefix = typeof options?.prefix === 'string' ? options.prefix : '<%=';
        const suffix = typeof options?.suffix === 'string' ? options.suffix : '%>';

        // Match full legacy tokens: <%= KEY %>
        const replacements = options?.replacements ?? {};
        // Merge with defaults if no options provided
        const allReplacements = Object.keys(replacements).length > 0 ? replacements : defaultReplacements;
        const keys = Object.keys(allReplacements);
        if (keys.length === 0) return;

        const keysPattern = keys.map((k) => escapeStringRegexp(k)).join('|');
        const regexp = new RegExp(
          `${escapeStringRegexp(prefix)}\\s*(${keysPattern})\\s*${escapeStringRegexp(suffix)}`,
          'g',
        );

        const replacer = (_match, key) => allReplacements[key];

        // Go through all text, html, code, inline code, and links.
        visit(ast, ['text', 'html', 'code', 'inlineCode', 'link'], (node) => {
            if (node.type === 'link') {
                // For links, the text value is replaced by text node, so we change the
                // URL value.
                const processedText = node.url.replace(regexp, replacer)
                node.url = processedText
            } else {
                // For all other nodes, replace the node value.
                const processedText = node.value.replace(regexp, replacer)
                node.value = processedText
            }
        });
    };
    return transformer;
};

module.exports = plugin;