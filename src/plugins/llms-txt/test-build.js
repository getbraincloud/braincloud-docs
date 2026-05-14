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

console.log(`Running plugin postBuild → ${outDir}\n`);

plugin
    .postBuild({ outDir })
    .then(() => {
        const llmsDir = path.join(outDir, "llms");
        const files = fs.readdirSync(llmsDir).sort();

        console.log(`\n=== ${files.length} bundle files ===\n`);

        // Print sizes, sorted.
        const sizes = files.map((f) => ({
            name: f,
            size: fs.statSync(path.join(llmsDir, f)).size,
        }));
        sizes.sort((a, b) => b.size - a.size);
        let total = 0;
        for (const { name, size } of sizes) {
            total += size;
            console.log(`  ${(size / 1024).toFixed(1).padStart(8)} KB  ${name}`);
        }
        console.log(`  ${"─".repeat(8)} ─────`);
        console.log(`  ${(total / 1024).toFixed(1).padStart(8)} KB  total\n`);

        // Survivor scan.
        console.log(`=== sanity scan ===\n`);
        let totalFails = 0;
        for (const f of files) {
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
                console.log(`  ${f.padEnd(30)} ✗`, fails.map(([k, n]) => `${k}×${n}`).join(" "));
            }
        }
        if (!totalFails) console.log("  all bundles clean ✓");

        // Show the index.
        console.log(`\n=== llms.txt ===\n`);
        console.log(fs.readFileSync(path.join(outDir, "llms.txt"), "utf8"));

        // Show a sample service file's opening.
        const sample = files.find((f) => f === "authentication.md");
        if (sample) {
            console.log(`\n=== ${sample} (first 1500 chars) ===\n`);
            console.log(fs.readFileSync(path.join(llmsDir, sample), "utf8").slice(0, 1500));
        }

        console.log(`\n\nOutput at: ${outDir}`);
    })
    .catch((err) => {
        console.error("FAIL:", err);
        process.exit(1);
    });
