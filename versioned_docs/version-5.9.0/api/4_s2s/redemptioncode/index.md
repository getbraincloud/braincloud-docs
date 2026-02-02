# Redemption Codes

This service allows you to manage your redemption code inventory

See the description [<code>here</code>](/api/capi/redemptioncode) for more information.

### API Summary

### RedemptionCode

* [AddCode](/api/s2s/redemptioncode/addcode) - Add a redemption code.
* [ActivateCode](/api/s2s/redemptioncode/activatecode) - Activate a redemption code.
* [GenerateCodes](/api/s2s/redemptioncode/generatecodes) - Generates specified quantity of redemption codes.
* [GenerateCodesInline](/api/s2s/redemptioncode/generatecodesinline) - Generates specified quantity of redemption codes inline.
* [InvalidateCode](/api/s2s/redemptioncode/invalidatecode) - Invalidate a redemption code.
* [UpdateCustomInfo](/api/s2s/redemptioncode/updatecustominfo) - Update the custom information for a redemption code.
* [SysAddMultiUseCodeType](/api/capi/redemptioncode/sysaddmultiusecodetype) - Add a new, multi-use redemption code type configuration.
* [SysGetCodeTypePage](/api/capi/redemptioncode/sysgetcodetypepage) - Gets the page of redemption code type configuration information from the server based on the specified context.
* [SysGetCodeTypePageOffset](/api/capi/redemptioncode/sysgetcodetypepageoffset) - Gets the page of redemption code type configuration information from the server based on the encoded context and specified page offset.

:::tip
All the client APIs that the names beigin with <strong>"Sys"</strong> <em>are</em> also available to S2S.
For the usages of the S2S redemptionCode APIs (if they are not listed at this section),
refer to <%= data.branding.productName %> client [redemptionCode](/api/capi/redemptioncode) APIs.
:::

<DocCardList />
