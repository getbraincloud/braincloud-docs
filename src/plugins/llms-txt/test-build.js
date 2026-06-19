/**
 * End-to-end smoke test: invokes the plugin's postBuild() hook directly
 * against a temp directory, then prints stats and a few sample bundles.
 *
 *   node src/plugins/llms-txt/test-build.js
 *
 * Validates the full pipeline (discover + transform + emit + index) without
 * needing Docusaurus installed.
 */

const fs = require("fs");
const os = require("os");
const path = require("path");
const llmsTxtPlugin = require("./index");

const siteDir = path.resolve(__dirname, "../../..");
const outDir = fs.mkdtempSync(path.join(os.tmpdir(), "llms-txt-test-"));

// Replicate the replacements from docusaurus.config.js.
const replacements = {
    PRODUCT: "brainCloud",
    COPYRIGHT: `Copyright ${new Date().getFullYear()} bitHeads, Inc`,
    "data.branding.codePrefix": "_bc",
    "data.branding.codeWrapper": "BrainCloudWrapper",
    "data.branding.codeClient": "BrainCloudClient",
    "data.branding.serverUrl": "https://api.braincloudservers.com/dispatcherv2",
    "data.branding.productName": "brainCloud",
    "data.branding.productNameCaptial": "BrainCloud",
    "data.branding.productNameRTT": "brainCloud RTT",
    "data.branding.companyName": "bitHeads",
    "data.example.email": "email@bitheads.com",
    "data.example.password": "password",
    "data.example.userId": "userName",
};

const plugin = llmsTxtPlugin(
    {
        siteDir,
        siteConfig: { url: "https://docs-internal.braincloudservers.com" },
    },
    { replacements }
);

/**
 * Recursively collect every regular file under `dir`, returning their paths
 * relative to `dir` with POSIX separators.
 */
function collectFiles(dir) {
    const out = [];
    const stack = [{ abs: dir, rel: "" }];
    while (stack.length) {
        const { abs, rel } = stack.pop();
        for (const entry of fs.readdirSync(abs, { withFileTypes: true })) {
            const childAbs = path.join(abs, entry.name);
            const childRel = rel ? `${rel}/${entry.name}` : entry.name;
            if (entry.isDirectory()) {
                stack.push({ abs: childAbs, rel: childRel });
            } else if (entry.isFile()) {
                out.push(childRel);
            }
        }
    }
    out.sort();
    return out;
}

console.log(`Running plugin postBuild → ${outDir}\n`);

plugin
    .postBuild({ outDir })
    .then(() => {
        const llmsDir = path.join(outDir, "llms");
        const allFiles = collectFiles(llmsDir);
        const bundleFiles = allFiles.filter((f) => !f.includes("/") && f.endsWith(".md") && !f.endsWith(".index.md"));
        const indexFiles  = allFiles.filter((f) => !f.includes("/") && f.endsWith(".index.md"));
        const methodFiles = allFiles.filter((f) => f.includes("/"));

        console.log(`\n=== ${allFiles.length} files (${bundleFiles.length} bundles, ` +
                    `${indexFiles.length} service-indexes, ${methodFiles.length} per-method) ===\n`);

        // Print bundle sizes, sorted descending.
        console.log("Bundles:");
        const bundleSizes = bundleFiles.map((f) => ({
            name: f, size: fs.statSync(path.join(llmsDir, f)).size,
        }));
        bundleSizes.sort((a, b) => b.size - a.size);
        let totalBundle = 0;
        for (const { name, size } of bundleSizes) {
            totalBundle += size;
            console.log(`  ${(size / 1024).toFixed(1).padStart(8)} KB  ${name}`);
        }
        console.log(`  ${"─".repeat(8)} ─────`);
        console.log(`  ${(totalBundle / 1024).toFixed(1).padStart(8)} KB  bundles total\n`);

        // Per-service index file stats.
        const indexSizes = indexFiles.map((f) => ({
            name: f, size: fs.statSync(path.join(llmsDir, f)).size,
        }));
        const totalIndex = indexSizes.reduce((a, b) => a + b.size, 0);
        const avgIndex = indexSizes.length ? totalIndex / indexSizes.length : 0;
        console.log(`Service indexes: ${indexFiles.length} files, ` +
                    `total ${(totalIndex / 1024).toFixed(1)} KB, ` +
                    `avg ${(avgIndex / 1024).toFixed(1)} KB`);

        // Per-method file stats.
        const methodSizes = methodFiles.map((f) => fs.statSync(path.join(llmsDir, f)).size);
        const totalMethod = methodSizes.reduce((a, b) => a + b, 0);
        const avgMethod = methodSizes.length ? totalMethod / methodSizes.length : 0;
        const maxMethod = methodSizes.length ? Math.max(...methodSizes) : 0;
        console.log(`Per-method files: ${methodFiles.length} files, ` +
                    `total ${(totalMethod / 1024).toFixed(1)} KB, ` +
                    `avg ${(avgMethod / 1024).toFixed(1)} KB, ` +
                    `max ${(maxMethod / 1024).toFixed(1)} KB`);
        console.log("");

        // Survivor scan — every output file should be free of MDX scaffolding.
        console.log(`=== sanity scan ===\n`);
        let totalFails = 0;
        for (const f of allFiles) {
            const content = fs.readFileSync(path.join(llmsDir, f), "utf8");
            const checks = {
                "<TabItem": (content.match(/<TabItem/g) || []).length,
                "<Tabs>": (content.match(/<Tabs[\s>]/g) || []).length,
                "<BrowserWindow": (content.match(/<BrowserWindow/g) || []).length,
                "```mdx-code-block": (content.match(/```mdx-code-block/g) || []).length,
                "<%=": (content.match(/<%=/g) || []).length,
                "<PartialServop": (content.match(/<PartialServop/g) || []).length,
                "<DocCardList": (content.match(/<DocCardList/g) || []).length,
            };
            const fails = Object.entries(checks).filter(([, n]) => n > 0);
            if (fails.length) {
                totalFails += fails.length;
                console.log(`  ${f.padEnd(40)} ✗`, fails.map(([k, n]) => `${k}×${n}`).join(" "));
            }
        }
        if (!totalFails) console.log("  all files clean ✓");

        // Show the top-level index.
        console.log(`\n=== llms.txt ===\n`);
        console.log(fs.readFileSync(path.join(outDir, "llms.txt"), "utf8"));

        // Show a sample service index file.
        const sampleIndex = "authentication.index.md";
        if (allFiles.includes(sampleIndex)) {
            console.log(`\n=== ${sampleIndex} ===\n`);
            console.log(fs.readFileSync(path.join(llmsDir, sampleIndex), "utf8"));
        }

        // Show a sample per-method file (first few hundred chars).
        const sampleMethod = methodFiles.find((f) => f.startsWith("authentication/capi/"));
        if (sampleMethod) {
            console.log(`\n=== ${sampleMethod} (first 800 chars) ===\n`);
            console.log(fs.readFileSync(path.join(llmsDir, sampleMethod), "utf8").slice(0, 800));
        }

        console.log(`\n\nOutput at: ${outDir}`);
    })
    .catch((err) => {
        console.error("FAIL:", err);
        process.exit(1);
    });
