# Client API

This is the standard, user-oriented API for working with <%= data.branding.productName %>.

Note that the client is normally managed via the [<code><%= data.branding.codeWrapper %></code>](/api/wrapper) class described in the section above. The wrapper makes Authentication and Identity Management in <%= data.branding.productName %> a lot simpler. _It is highly recommmended that all applications use the wrapper_.

:::warning
The following services still function, but are deprecated and should not be used for new applications:
-   [Product](/api/capi/product)
:::

The Client API is organized into the following services:

<DocCardList />
