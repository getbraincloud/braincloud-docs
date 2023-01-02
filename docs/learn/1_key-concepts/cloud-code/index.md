---
title: "Cloud Code"
date: "2014-09-09"
---

brainCloud allows developers to write custom [Cloud Code](/apidocs/apiref/#cc) routines in JavaScript, that reside and run on the brainCloud servers, allowing execution of code more securely and efficiently than if it were run client-side.

Advantages of Cloud Code scripts include:

- Better performance when calling multiple API calls in a row
- Lower brainCloud costs (the first 3 API calls are free, and each one after is 1/2 a count)
- More secure
- Ability to change logic server-side without a client update
- Ability to call out to [external web services](/apidocs/apiref/#cc-httpclient)
- Ability to perform certain operations that are not enabled in the client API

Cloud Code scripts can be called from:

- client apps - via the [Script Service](/apidocs/apiref/#capi-script) APIs
- developer-operated servers - via the [Server-to-Server](/apidocs/apiref/#s2s) API
- third-party services - via brainCloud's [WebHooks](/apidocs/apiref/#cc-ccscripts-webhooks) interface
- triggered via other operations ([API Hooks](/apidocs/apiref/#cc-ccscripts-apihooks)) - scripts can be configured to be triggered automatically as pre- or post- conditions for other API operations
- scheduled - scripts [scheduled](/apidocs/apiref/#cc-ccscripts-scheduledscripts) to execute in the future

Cloud Code scripts are written using brainCloud's web-based script editor, located in the Portal under **Design | Cloud Code | Scripts**.

For more information, check out:

- [Writing Scripts](/apidocs/apiref/#cc-ccscripts) section of the API Reference
- [Cloud Code Tutorials](/apidocs/tutorials/cloud-code-tutorials/) section of SDK Tutorials
