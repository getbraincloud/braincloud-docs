/**
 * Transform a raw .md source file into a per-language plain-markdown block.
 *
 * The transform is intentionally line-based and regex-driven rather than
 * AST-based:
 *  - Source files are well-formed markdown with a very rigid `<Tabs>` pattern.
 *  - We never need to round-trip through MDX — we just need to filter content.
 *  - Heavy deps (remark, mdx parser) aren't worth the cost here.
 *
 * Rules implemented:
 *  1. Branding token interpolation (<%= data.branding.X %>)
 *  2. Tab extraction (keep only the matching <TabItem value="L">)
 *  3. MDX component handling (BrowserWindow, PartialServop, DocCardList, etc.)
 *  4. Admonitions → blockquote callouts
 *  5. Frontmatter strip
 *  6. Code fence languages preserved
 *
 * Exported: `transformFile(content, language, options)`
 */

const ADMONITION_LABELS = {
    note: "Note",
    tip: "Tip",
    info: "Info",
    caution: "Caution",
    warning: "Warning",
    success: "Note",
};

/**
 * Convert a dotted key path like `data.example.appChildId` to a SNAKE_CASE
 * placeholder like `APP_CHILD_ID`. Used for unknown branding tokens so the
 * LLM sees a clean placeholder rather than a Docusaurus template literal.
 */
function keyToPlaceholder(key) {
    const last = key.split(".").pop() || key;
    return last
        .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
        .replace(/[^A-Za-z0-9]+/g, "_")
        .toUpperCase();
}

/**
 * Replace `<%= key %>` tokens using the provided replacement map. Unknown
 * tokens are converted to `<PLACEHOLDER>` style markers so LLM consumers
 * see a clean signal instead of a raw template.
 */
function interpolateBranding(content, replacements) {
    return content.replace(/<%=\s*([^%]+?)\s*%>/g, (match, rawKey) => {
        const key = String(rawKey).trim();
        if (Object.prototype.hasOwnProperty.call(replacements, key)) {
            return String(replacements[key]);
        }
        return `<${keyToPlaceholder(key)}>`;
    });
}

/** Strip YAML frontmatter (--- ... ---) at the top of the file. */
function stripFrontmatter(content) {
    if (!content.startsWith("---\n")) return content;
    const end = content.indexOf("\n---", 4);
    if (end === -1) return content;
    return content.slice(end + 4).replace(/^\n+/, "");
}

/**
 * Strip ```mdx-code-block ... ``` fences, keeping the content between them.
 *
 * In source, these fences exist solely so MDX 3 doesn't try to parse JSX as
 * markdown — they have no semantic meaning. Removing them leaves the JSX
 * tags as bare text, which the tab filter then processes.
 */
function stripMdxCodeBlocks(content) {
    const lines = content.split("\n");
    const out = [];
    let inBlock = false;
    for (const line of lines) {
        if (!inBlock && /^```mdx-code-block\s*$/.test(line)) {
            inBlock = true;
            continue;
        }
        if (inBlock && /^```\s*$/.test(line)) {
            inBlock = false;
            continue;
        }
        out.push(line);
    }
    return out.join("\n");
}

/**
 * Flatten `<Tabs>` blocks: keep ALL tabs in source order, replacing each
 * `<TabItem value="x" label="Y">` with a bold inline label (e.g. `**C#:**`)
 * so an LLM consumer can tell which language each code block belongs to.
 *
 * Structural tags (`<Tabs>`, `<BrowserWindow>`, closing tags) are dropped.
 */
function flattenTabs(content) {
    const lines = content.split("\n");
    const out = [];

    for (const line of lines) {
        const trimmed = line.trim();

        if (/^<BrowserWindow\b[^>]*>/.test(trimmed) || trimmed === "<BrowserWindow>") continue;
        if (/^<\/BrowserWindow>/.test(trimmed)) continue;
        if (/^<Tabs\b[^>]*>/.test(trimmed) || trimmed === "<Tabs>") continue;
        if (/^<\/Tabs>/.test(trimmed)) continue;
        if (/^<TabItem\b/.test(trimmed)) {
            const labelMatch = trimmed.match(/label=["']([^"']+)["']/);
            const valueMatch = trimmed.match(/value=["']([^"']+)["']/);
            const label = (labelMatch && labelMatch[1]) || (valueMatch && valueMatch[1]) || "Example";
            out.push("");
            out.push(`**${label}:**`);
            out.push("");
            continue;
        }
        if (/^<\/TabItem>/.test(trimmed)) continue;

        out.push(line);
    }

    return out.join("\n");
}

/**
 * Replace <PartialServop service_name="X" operation_name="Y" /> with a
 * compact markdown table.
 */
function replacePartialServop(content) {
    return content.replace(
        /<PartialServop\s+([^/>]*?)\s*\/\s*>/g,
        (match, attrs) => {
            const service = (attrs.match(/service_name=["']([^"']+)["']/) || [])[1] || "";
            const operation = (attrs.match(/operation_name=["']([^"']+)["']/) || [])[1] || "";
            return [
                "",
                "| Service | Operation |",
                "| ------- | --------- |",
                `| ${service} | ${operation} |`,
                "",
            ].join("\n");
        }
    );
}

/**
 * Replace <LiteYouTubeEmbed ... /> (possibly multi-line) with a text link.
 */
function replaceLiteYouTubeEmbed(content) {
    return content.replace(
        /<LiteYouTubeEmbed\b[\s\S]*?\/>/g,
        (match) => {
            const id = (match.match(/id=["']([^"']+)["']/) || [])[1] || "";
            return id ? `*[Video: https://youtu.be/${id}]*` : "";
        }
    );
}

/** Drop <DocCardList /> (and self-closing variants). */
function dropDocCardList(content) {
    return content.replace(/<DocCardList\s*\/?>/g, "");
}

/**
 * Convert Docusaurus admonitions (`:::tip` ... `:::`) into blockquote
 * callouts. Multi-line bodies become multi-line blockquotes.
 *
 * Admonition syntax:
 *   :::tip [optional title]
 *   body lines
 *   :::
 */
function convertAdmonitions(content) {
    const lines = content.split("\n");
    const out = [];
    let inAdmonition = false;
    let label = "";
    let bodyBuf = [];

    const flush = () => {
        if (bodyBuf.length === 0) {
            out.push(`> **${label}:**`);
        } else {
            const first = bodyBuf[0].trim();
            out.push(`> **${label}:** ${first}`);
            for (let j = 1; j < bodyBuf.length; j++) {
                out.push(`> ${bodyBuf[j]}`);
            }
        }
        out.push("");
        bodyBuf = [];
    };

    for (const line of lines) {
        if (!inAdmonition) {
            const m = line.match(/^:::(note|tip|info|caution|warning|success)\b/);
            if (m) {
                inAdmonition = true;
                label = ADMONITION_LABELS[m[1]];
                bodyBuf = [];
                continue;
            }
            out.push(line);
        } else {
            if (/^:::\s*$/.test(line)) {
                inAdmonition = false;
                flush();
                continue;
            }
            bodyBuf.push(line);
        }
    }

    // Unterminated admonition — flush what we have.
    if (inAdmonition) flush();

    return out.join("\n");
}

/**
 * Final pass: collapse runs of 3+ blank lines to 2, since aggressive
 * stripping can leave gaps.
 */
function collapseBlankLines(content) {
    return content.replace(/\n{3,}/g, "\n\n");
}

/**
 * Main entry point.
 *
 * @param {string} content - raw file contents
 * @param {object} options
 * @param {object} options.replacements - branding token map
 * @returns {string} transformed markdown
 */
function transformFile(content, options) {
    const replacements = (options && options.replacements) || {};
    let out = content;
    out = stripFrontmatter(out);
    out = interpolateBranding(out, replacements);
    out = stripMdxCodeBlocks(out);
    out = flattenTabs(out);
    out = replacePartialServop(out);
    out = replaceLiteYouTubeEmbed(out);
    out = dropDocCardList(out);
    out = convertAdmonitions(out);
    out = collapseBlankLines(out);
    return out.trim() + "\n";
}

module.exports = { transformFile };
