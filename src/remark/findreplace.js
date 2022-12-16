const visit = require('unist-util-visit');
const escapeStringRegexp = require('escape-string-regexp');

let replacements = {
    COMPANY: 'My Company',
    COPYRIGHT: `Copyright ${new Date().getFullYear()} My Company`,
}

let prefix = '%'


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
        // Attaches prefix to the start of the string.
        const attachPrefix = str => (options.prefix || '') + str

        // Removes prefix from the start of the string.
        const stripPrefix = str =>
            options.prefix ? str.replace(RegExp(`^${options.prefix}`), '') : str

        // RegExp to find any replacement keys.
        const regexp = RegExp(
            '(' +
            Object.keys(options.replacements)
                .map(key => escapeStringRegexp(attachPrefix(key)))
                .join('|') +
            ')',
            'g',
        )

        const replacer = (_match, name) => options.replacements[stripPrefix(name)]

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