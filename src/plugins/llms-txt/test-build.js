/**
 * End-to-end smoke test: invokes the plugin's postBuild() hook directly
 * against a temp directory, then prints stats and a few sample lines.
 *
 *   node src/plugins/llms-txt/test-build.js
 *
 * Validates the full pipeline (walk + transform + emit + index) without
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
        siteConfig: { url: "https://docs.getbraincloud.com" },
    },
    {
        replacements,
        siteUrl: "https://docs.getbraincloud.com",
    }
);

console.log(`Running plugin postBuild → ${outDir}\n`);

plugin
    .postBuild({ outDir })
    .then(() => {
        console.log(`\n=== llms.txt ===\n`);
        console.log(fs.readFileSync(path.join(outDir, "llms.txt"), "utf8"));

        const llmsDir = path.join(outDir, "llms");
        const files = fs.readdirSync(llmsDir);
        console.log(`\n=== file sizes ===\n`);
        for (const f of files.sort()) {
            const size = fs.statSync(path.join(llmsDir, f)).size;
            console.log(`  ${f.padEnd(20)} ${(size / 1024).toFixed(1).padStart(8)} KB`);
        }

        console.log(`\n=== sanity scan (these should all be 0) ===\n`);
        for (const f of files.sort()) {
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
            const fails = Object.entries(checks).filter(([_, n]) => n > 0);
            if (fails.length === 0) {
                console.log(`  ${f.padEnd(20)} ✓ clean`);
            } else {
                console.log(`  ${f.padEnd(20)} ✗ found:`, fails.map(([k, n]) => `${k}×${n}`).join(" "));
            }
        }

        console.log(`\n=== first cloudcode.md entry ===\n`);
        const cc = fs.readFileSync(path.join(llmsDir, "cloudcode.md"), "utf8");
        console.log(cc.slice(0, 1500));

        console.log(`\n\nOutput at: ${outDir}`);
    })
    .catch((err) => {
        console.error("FAIL:", err);
        process.exit(1);
    });
