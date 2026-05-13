/**
 * Docusaurus plugin: emits per-client-language `llms.txt` bundles.
 *
 * On every site build, walks `docs/` (current version only) and produces:
 *   - <outDir>/llms.txt            — llmstxt.org-style index
 *   - <outDir>/llms/cloudcode.md   — full docs tree, Cloud Code samples
 *   - <outDir>/llms/<lang>.md      — docs/api only, language samples
 *
 * Spec: ../../../SPEC-llms-txt.md
 *
 * Options (passed from docusaurus.config.js):
 *   - replacements: branding token map shared with the findreplace plugin
 *   - docsDir:      absolute path to the docs root (default: <siteDir>/docs)
 *   - siteUrl:      base URL for live links (default: site config `url`)
 *   - languages:    array of language descriptors; see DEFAULT_LANGUAGES below
 */

const fs = require("fs");
const path = require("path");
const { transformFile } = require("./transform");

/**
 * Mapping of `<TabItem value="X">` values to output bundle metadata.
 * Order in this array drives order in the generated `llms.txt` index.
 *
 * `apiOnly: false` means the bundle includes the full `docs/` tree;
 * `apiOnly: true` restricts it to `docs/api/`.
 */
const DEFAULT_LANGUAGES = [
    { tab: "cfs",        file: "cloudcode.md",   label: "Cloud Code (full)",        description: "all docs (api, learn, overview), Cloud Code (cfscript) examples", apiOnly: false },
    { tab: "csharp",     file: "csharp.md",      label: "C# / Unity",                description: "API reference with C# examples",                                   apiOnly: true  },
    { tab: "cpp",        file: "cpp.md",         label: "C++",                       description: "API reference with C++ examples",                                  apiOnly: true  },
    { tab: "objectivec", file: "objectivec.md",  label: "Objective-C",               description: "API reference with Objective-C examples",                          apiOnly: true  },
    { tab: "java",       file: "java.md",        label: "Java / Android",            description: "API reference with Java examples",                                 apiOnly: true  },
    { tab: "js",         file: "javascript.md",  label: "JavaScript (client)",       description: "API reference with client-side JavaScript examples — distinct from Cloud Code", apiOnly: true },
    { tab: "dart",       file: "dart.md",        label: "Dart / Flutter",            description: "API reference with Dart examples",                                 apiOnly: true  },
    { tab: "r",          file: "raw.md",         label: "Raw (REST)",                description: "API reference with raw REST examples",                             apiOnly: true  },
];

/**
 * Walk a directory recursively and return all `.md` / `.mdx` files,
 * sorted by path so the numeric prefixes in directory and file names drive
 * the output order.
 *
 * Skips files/directories whose name starts with `_` (partials, conventions).
 */
function walkDocs(rootDir) {
    const results = [];
    if (!fs.existsSync(rootDir)) return results;

    const stack = [rootDir];
    while (stack.length) {
        const dir = stack.pop();
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            if (entry.name.startsWith("_")) continue;
            const full = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                stack.push(full);
            } else if (entry.isFile() && /\.(md|mdx)$/.test(entry.name)) {
                results.push(full);
            }
        }
    }
    results.sort();
    return results;
}

/**
 * Convert a source filesystem path to a public URL on the docs site.
 *
 *   docs/api/2_capi/authentication/authenticateemailpassword.md
 *       → <siteUrl>/api/capi/authentication/authenticateemailpassword
 *
 * Rules:
 *   - strip leading numeric prefix `N_` from each path segment
 *   - drop `.md` / `.mdx` extension
 *   - drop trailing `/index`
 */
function sourceToUrl(absPath, docsDir, siteUrl) {
    const rel = path.relative(docsDir, absPath);
    const parts = rel.split(path.sep).map((seg) => seg.replace(/^\d+_/, ""));
    let last = parts[parts.length - 1];
    last = last.replace(/\.(md|mdx)$/, "");
    parts[parts.length - 1] = last;
    if (last === "index") parts.pop();
    return siteUrl.replace(/\/+$/, "") + "/" + parts.join("/");
}

/**
 * Build the per-bundle markdown by concatenating each transformed source
 * file with a small header comment.
 */
function buildBundle(files, lang, docsDir, siteUrl, options) {
    const chunks = [];
    for (const absPath of files) {
        const raw = fs.readFileSync(absPath, "utf8");
        const transformed = transformFile(raw, lang.tab, options);
        // Skip files that turned out to be effectively empty after stripping
        // (e.g. an index page with only <DocCardList />).
        if (!transformed.trim()) continue;

        const relPath = path.relative(docsDir, absPath).split(path.sep).join("/");
        const url = sourceToUrl(absPath, docsDir, siteUrl);
        chunks.push(
            `<!-- source: docs/${relPath} -->\n` +
            `<!-- url: ${url} -->\n\n` +
            transformed
        );
    }
    return chunks.join("\n\n---\n\n");
}

/**
 * Build the top-level llms.txt index.
 */
function buildIndex(languages, siteUrl) {
    const lines = [
        "# brainCloud Docs",
        "",
        "> Reference documentation for brainCloud, a backend-as-a-service for games",
        "> and apps. Each bundle below is a single concatenated markdown file",
        "> representing the brainCloud documentation filtered for one client",
        "> language.",
        "",
        "## Bundles",
        "",
    ];
    for (const lang of languages) {
        const url = `${siteUrl.replace(/\/+$/, "")}/llms/${lang.file}`;
        lines.push(`- [${lang.label}](${url}): ${lang.description}`);
    }
    lines.push("");
    return lines.join("\n");
}

/**
 * Plugin entry point.
 */
function llmsTxtPlugin(context, opts) {
    const options = opts || {};
    const siteDir = context.siteDir;
    const siteUrl = options.siteUrl || context.siteConfig.url || "";
    const docsDir = options.docsDir || path.join(siteDir, "docs");
    const replacements = options.replacements || {};
    const languages = options.languages || DEFAULT_LANGUAGES;

    return {
        name: "llms-txt",

        async postBuild({ outDir }) {
            const allFiles = walkDocs(docsDir);
            const apiDir = path.join(docsDir, "api");
            const apiFiles = allFiles.filter((f) => f.startsWith(apiDir + path.sep));

            const llmsDir = path.join(outDir, "llms");
            fs.mkdirSync(llmsDir, { recursive: true });

            let totalBytes = 0;
            for (const lang of languages) {
                const files = lang.apiOnly ? apiFiles : allFiles;
                const bundle = buildBundle(files, lang, docsDir, siteUrl, { replacements });
                const dest = path.join(llmsDir, lang.file);
                fs.writeFileSync(dest, bundle);
                totalBytes += Buffer.byteLength(bundle, "utf8");
                console.log(
                    `[llms-txt] wrote ${path.relative(outDir, dest)} ` +
                    `(${files.length} sources, ${(Buffer.byteLength(bundle, "utf8") / 1024).toFixed(1)} KB)`
                );
            }

            const indexPath = path.join(outDir, "llms.txt");
            fs.writeFileSync(indexPath, buildIndex(languages, siteUrl));
            console.log(`[llms-txt] wrote llms.txt — ${languages.length} bundles, ${(totalBytes / 1024).toFixed(1)} KB total`);
        },
    };
}

module.exports = llmsTxtPlugin;
module.exports.DEFAULT_LANGUAGES = DEFAULT_LANGUAGES;
