---
title: "Cloud Code"
date: "2014-09-09"
---

brainCloud allows developers to write custom [Cloud Code](/api/cc) routines in JavaScript, that reside and run on the brainCloud servers, allowing execution of code more securely and efficiently than if it were run client-side.

Advantages of Cloud Code scripts include:

- Better performance when calling multiple API calls in a row
- Lower brainCloud costs (the first 3 API calls are free, and each one after is 1/2 a count)
- More secure
- Ability to change logic server-side without a client update
- Ability to call out to [external web services](/api/cc/httpclient)
- Ability to perform certain operations that are not enabled in the client API

Cloud Code scripts can be called from:

- client apps - via the [Script Service](/api/capi/script) APIs
- developer-operated servers - via the [Server-to-Server](/api/s2s) API
- third-party services - via brainCloud's [WebHooks](/api/cc/writingscript#webhooks) interface
- triggered via other operations ([API Hooks](/api/cc/writingscript#apihooks)) - scripts can be configured to be triggered automatically as pre- or post- conditions for other API operations
- scheduled - scripts [scheduled](/api/cc/writingscript#scheduled-scripts) to execute in the future

Cloud Code scripts are written using brainCloud's web-based script editor, located in the Portal under **Design | Cloud Code | Scripts**.

For more information, check out:

- [Writing Scripts](/api/cc/writingscript) section of the API Reference
- [Cloud Code Tutorials](/learn/cloud-code-central/cloud-code-tutorials/) section of SDK Tutorials
