/**
 * Docusaurus plugin: emits per-service `llms.txt` bundles.
 *
 * On every site build, walks `docs/` (current version only) and produces:
 *   - <outDir>/llms.txt                    — llmstxt.org-style index
 *   - <outDir>/llms/<service>.md           — one file per brainCloud service
 *                                              (2_capi/<svc>/ + 4_s2s/<svc>/),
 *                                              all language tabs preserved
 *   - <outDir>/llms/cloud-code-bridge.md   — 3_cc/bridge/
 *   - <outDir>/llms/cloud-code-peerbridge.md — 3_cc/peerbridge/ (if present)
 *   - <outDir>/llms/writing-scripts.md     — 3_cc/0_writingscripts/
 *   - <outDir>/llms/wrapper.md             — api/1_wrapper/
 *   - <outDir>/llms/appendix.md            — api/5_appendix/
 *   - <outDir>/llms/learn.md               — learn/
 *   - <outDir>/llms/overview.md            — overview/
 *
 * Spec: ../../../SPEC-llms-txt.md
 */

const fs = require("fs");
const path = require("path");
const { transformFile } = require("./transform");

/**
 * Section names used to group bundles in the index. Order here drives
 * order in `llms.txt`.
 */
const SECTIONS = {
    services: "Services",
    "cloud-code": "Cloud Code",
    reference: "Reference",
    guides: "Guides",
};

/**
 * Recursively walk a directory and return all `.md` / `.mdx` files,
 * sorted by path. Underscore-prefixed entries (partials) are skipped.
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
 *   docs/api/2_capi/authentication/foo.md
 *       → <siteUrl>/api/capi/authentication/foo
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
 * Capitalize first letter; used as fallback when a section has no index.md.
 */
function titleCase(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * Extract a title (from H1) and short description from a section's index.md.
 * Returns { label, description } with sensible fallbacks.
 */
function readSectionMeta(indexPath, fallbackName, replacements) {
    const fallback = { label: titleCase(fallbackName), description: `${titleCase(fallbackName)} reference` };
    if (!indexPath || !fs.existsSync(indexPath)) return fallback;

    let content = fs.readFileSync(indexPath, "utf8");
    // Strip frontmatter.
    content = content.replace(/^---\n[\s\S]*?\n---\n/, "");

    // Title from first H1.
    const titleMatch = content.match(/^#\s+(.+?)\s*$/m);
    const label = titleMatch ? titleMatch[1].trim() : fallback.label;

    // Description: first paragraph after the H1 that looks like prose.
    const afterTitle = titleMatch
        ? content.slice(content.indexOf(titleMatch[0]) + titleMatch[0].length)
        : content;
    const description = extractFirstParagraph(afterTitle, replacements) || fallback.description;

    return { label, description };
}

/**
 * Pull out the first prose paragraph from markdown source for use as an
 * index description. Skips images, admonitions, headings, lists.
 */
function extractFirstParagraph(markdown, replacements) {
    const lines = markdown.split("\n");
    const buf = [];
    for (const raw of lines) {
        const line = raw.trim();
        if (!line) {
            if (buf.length) break;
            continue;
        }
        if (line.startsWith("#")) continue;       // heading
        if (line.startsWith(":::")) continue;     // admonition fence
        if (line.startsWith("!")) continue;       // image
        if (line.startsWith("|")) break;          // table
        if (line.startsWith("```")) break;        // code fence
        if (/^[-*]\s/.test(line)) continue;       // list item
        if (/^<[A-Z][^>]*\/?>$/.test(line)) continue;  // JSX component like <DocCardList />
        buf.push(line);
        // Cap so we don't slurp huge paragraphs.
        if (buf.join(" ").length > 400) break;
    }
    if (!buf.length) return null;

    let desc = buf.join(" ");
    // Resolve known branding tokens; strip unknown ones cleanly.
    desc = desc.replace(/<%=\s*([^%]+?)\s*%>/g, (_m, k) => {
        const key = k.trim();
        return replacements && Object.prototype.hasOwnProperty.call(replacements, key)
            ? String(replacements[key])
            : "";
    });
    // Strip markdown links: [text](url) -> text.
    desc = desc.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
    // Strip inline html-ish tags (bold/em/code emphasis).
    desc = desc.replace(/<\/?(?:b|i|em|strong|code|br|p)\b[^>]*>/g, "");
    // Collapse whitespace.
    desc = desc.replace(/\s+/g, " ").trim();
    // Trim to one sentence if it's longer than ~120 chars.
    if (desc.length > 120) {
        const period = desc.indexOf(". ");
        if (period > 40 && period < 240) desc = desc.slice(0, period + 1);
    }
    if (desc.length > 280) desc = desc.slice(0, 277).trimEnd() + "…";
    return desc;
}

/**
 * Discover the set of service names by unioning subdirectories of
 * docs/api/2_capi/ and docs/api/4_s2s/.
 */
function discoverServices(docsDir) {
    const services = new Set();
    for (const sub of ["api/2_capi", "api/4_s2s"]) {
        const dir = path.join(docsDir, sub);
        if (!fs.existsSync(dir)) continue;
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            if (entry.isDirectory() && !entry.name.startsWith("_")) {
                services.add(entry.name);
            }
        }
    }
    return Array.from(services).sort();
}

/**
 * Build the array of bundle descriptors for this docs tree.
 *
 * Each descriptor has: slug, label, description, section, files[].
 */
function buildBundles(docsDir, replacements) {
    const bundles = [];

    // Per-service bundles: 2_capi/<svc>/ + 4_s2s/<svc>/.
    for (const svc of discoverServices(docsDir)) {
        const capiDir = path.join(docsDir, "api/2_capi", svc);
        const s2sDir = path.join(docsDir, "api/4_s2s", svc);
        const files = [...walkDocs(capiDir), ...walkDocs(s2sDir)];
        if (!files.length) continue;
        // Prefer the 2_capi/<svc>/index.md for label/description.
        const indexPath =
            (fs.existsSync(path.join(capiDir, "index.md")) && path.join(capiDir, "index.md")) ||
            (fs.existsSync(path.join(s2sDir, "index.md")) && path.join(s2sDir, "index.md")) ||
            null;
        const meta = readSectionMeta(indexPath, svc, replacements);
        bundles.push({
            slug: svc,
            label: meta.label,
            description: meta.description,
            section: "services",
            files,
        });
    }

    // Cloud Code bundles.
    addBundleFromDir(bundles, docsDir, replacements, {
        slug: "cloud-code-bridge",
        dir: "api/3_cc/bridge",
        section: "cloud-code",
        fallbackLabel: "Cloud Code Bridge",
        fallbackDescription:
            "Cloud Code bridge API — invoke brainCloud services and access script context from server-side scripts",
    });
    addBundleFromDir(bundles, docsDir, replacements, {
        slug: "cloud-code-peerbridge",
        dir: "api/3_cc/peerbridge",
        section: "cloud-code",
        fallbackLabel: "Cloud Code Peer Bridge",
        fallbackDescription: "Cloud Code peer bridge API",
    });
    addBundleFromDir(bundles, docsDir, replacements, {
        slug: "writing-scripts",
        dir: "api/3_cc/0_writingscripts",
        section: "cloud-code",
        fallbackLabel: "Writing Cloud Code Scripts",
        fallbackDescription:
            "How to write Cloud Code scripts — basic structure, parameters, hooks, scheduled scripts, etc.",
    });

    // Reference bundles.
    addBundleFromDir(bundles, docsDir, replacements, {
        slug: "wrapper",
        dir: "api/1_wrapper",
        section: "reference",
        fallbackLabel: "Wrapper API",
        fallbackDescription: "BrainCloudWrapper convenience API (auth + reconnect helpers)",
    });
    addBundleFromDir(bundles, docsDir, replacements, {
        slug: "appendix",
        dir: "api/5_appendix",
        section: "reference",
        fallbackLabel: "Appendix",
        fallbackDescription: "Reason codes, ACL syntax, JSON queries, platform IDs, and other reference data",
    });

    // Guides.
    addBundleFromDir(bundles, docsDir, replacements, {
        slug: "learn",
        dir: "learn",
        section: "guides",
        fallbackLabel: "Learn",
        fallbackDescription: "Tutorials, getting-started guides, and key concepts",
    });
    addBundleFromDir(bundles, docsDir, replacements, {
        slug: "overview",
        dir: "overview",
        section: "guides",
        fallbackLabel: "Overview",
        fallbackDescription: "Introduction to brainCloud",
    });

    return bundles;
}

function addBundleFromDir(bundles, docsDir, replacements, opts) {
    const absDir = path.join(docsDir, opts.dir);
    if (!fs.existsSync(absDir)) return;
    const files = walkDocs(absDir);
    if (!files.length) return;
    const indexPath = fs.existsSync(path.join(absDir, "index.md")) ? path.join(absDir, "index.md") : null;
    const meta = readSectionMeta(indexPath, opts.slug, replacements);
    bundles.push({
        slug: opts.slug,
        label: meta.label !== titleCase(opts.slug) ? meta.label : opts.fallbackLabel,
        description: meta.description !== `${titleCase(opts.slug)} reference` ? meta.description : opts.fallbackDescription,
        section: opts.section,
        files,
    });
}

/**
 * Concatenate the transformed source files into one bundle string.
 */
function buildBundleBody(bundle, docsDir, siteUrl, replacements) {
    const chunks = [];
    for (const absPath of bundle.files) {
        const raw = fs.readFileSync(absPath, "utf8");
        const transformed = transformFile(raw, { replacements });
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
 * Build the llms.txt index, grouped by section.
 */
function buildIndex(bundles, siteUrl) {
    const base = siteUrl.replace(/\/+$/, "");
    const lines = [
        "# brainCloud Docs",
        "",
        "> Reference documentation for brainCloud, a backend-as-a-service for games and apps.",
        "> Each file below covers one brainCloud service or general topic, with all client",
        "> language code samples preserved inline.",
        "",
    ];

    // Group bundles by section in the declared SECTIONS order.
    const bySection = {};
    for (const b of bundles) {
        (bySection[b.section] = bySection[b.section] || []).push(b);
    }
    for (const sectionKey of Object.keys(SECTIONS)) {
        const items = bySection[sectionKey];
        if (!items || !items.length) continue;
        lines.push(`## ${SECTIONS[sectionKey]}`);
        lines.push("");
        for (const b of items) {
            lines.push(`- [${b.label}](${base}/llms/${b.slug}.md): ${b.description}`);
        }
        lines.push("");
    }

    return lines.join("\n");
}

function llmsTxtPlugin(context, opts) {
    const options = opts || {};
    const siteDir = context.siteDir;
    const siteUrl = options.siteUrl || context.siteConfig.url || "";
    const docsDir = options.docsDir || path.join(siteDir, "docs");
    const replacements = options.replacements || {};

    return {
        name: "llms-txt",

        async postBuild({ outDir }) {
            const bundles = buildBundles(docsDir, replacements);
            const llmsDir = path.join(outDir, "llms");
            fs.mkdirSync(llmsDir, { recursive: true });

            let totalBytes = 0;
            for (const bundle of bundles) {
                const body = buildBundleBody(bundle, docsDir, siteUrl, replacements);
                const dest = path.join(llmsDir, `${bundle.slug}.md`);
                fs.writeFileSync(dest, body);
                totalBytes += Buffer.byteLength(body, "utf8");
                console.log(
                    `[llms-txt] wrote llms/${bundle.slug}.md ` +
                    `(${bundle.files.length} sources, ${(Buffer.byteLength(body, "utf8") / 1024).toFixed(1)} KB)`
                );
            }

            fs.writeFileSync(path.join(outDir, "llms.txt"), buildIndex(bundles, siteUrl));
            console.log(
                `[llms-txt] wrote llms.txt — ${bundles.length} bundles, ` +
                `${(totalBytes / 1024).toFixed(1)} KB total`
            );
        },
    };
}

module.exports = llmsTxtPlugin;
