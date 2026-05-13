/**
 * Quick smoke test for the transform module. Run with:
 *   node src/plugins/llms-txt/test-transform.js
 *
 * Not a real test suite — just a sanity check that runs the transform
 * against a real source file and prints summaries.
 */

const fs = require("fs");
const path = require("path");
const { transformFile } = require("./transform");

const siteDir = path.resolve(__dirname, "../../..");
const sampleFile = path.join(
    siteDir,
    "docs/api/2_capi/authentication/authenticateemailpassword.md"
);
const ccBridgeFile = path.join(
    siteDir,
    "docs/api/3_cc/bridge/deletesessioncacheobject.md"
);

const replacements = {
    PRODUCT: "brainCloud",
    "data.branding.codePrefix": "_bc",
    "data.branding.codeWrapper": "BrainCloudWrapper",
    "data.branding.codeClient": "BrainCloudClient",
    "data.branding.productName": "brainCloud",
};

function summarise(name, output) {
    console.log("=".repeat(80));
    console.log(name);
    console.log("=".repeat(80));
    console.log(`length: ${output.length} chars`);
    const survived = {
        TabItem: /<TabItem/.test(output),
        Tabs: /<Tabs[\s>]/.test(output),
        BrowserWindow: /<BrowserWindow/.test(output),
        mdxCodeBlock: /```mdx-code-block/.test(output),
        rawBranding: /<%=/.test(output),
        admonition: /^:::/m.test(output),
        PartialServop: /<PartialServop/.test(output),
    };
    console.log("survivors (should all be false):", survived);
    console.log("---");
    console.log(output.slice(0, 1200));
    console.log("...");
    console.log(output.slice(-400));
}

const raw1 = fs.readFileSync(sampleFile, "utf8");
console.log("\n\n### authenticateemailpassword.md → csharp ###");
summarise("csharp", transformFile(raw1, "csharp", { replacements }));

console.log("\n\n### authenticateemailpassword.md → cfs ###");
summarise("cfs", transformFile(raw1, "cfs", { replacements }));

const raw2 = fs.readFileSync(ccBridgeFile, "utf8");
console.log("\n\n### deletesessioncacheobject.md → cfs ###");
summarise("cfs", transformFile(raw2, "cfs", { replacements }));

console.log("\n\n### deletesessioncacheobject.md → cpp ###");
summarise("cpp", transformFile(raw2, "cpp", { replacements }));
