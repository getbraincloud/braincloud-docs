# Runtime Architecture

<%= data.branding.productName %>'s Cloud Code service is implemented using an embedded [Mozilla Rhino](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino) Javascript engine.

Communications with the <%= data.branding.productName %> APIs is facilitated by a [<b>bridge</b>](/api/cc/bridge) object that is available from all scripts. The `bridge` allows you to retrieve references to *service proxies* that allow you to make API calls into <%= data.branding.productName %>. These *service proxies* are organized in alignment with <%= data.branding.productName %>'s API Modules.

The documentation and signatures of the available Cloud Code Callable APIs are found in this API Reference under the **Cloud Code** language tab.