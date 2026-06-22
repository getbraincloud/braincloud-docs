# Identity




### API Summary

* [SysChangeEmailIdentity](/api/s2s/identity/syschangeemailidentity) - Changes email address associated with specified user's email identity.
* [SysDeleteMyChildProfile](/api/capi/identity/sysdeletemychildprofile) - Deletes the current user's child profile in the specified child app. Cloud Code only.
* [SysDeleteChildProfile](/api/capi/identity/sysdeletechildprofile) - Deletes a specified user's child profile in the given child app. Invalidates active sessions and deletes any descendant profiles.
* [VerifyOktaJWT](/api/capi/identity/verifyoktajwt) - Used in an External Authentication script to validate an OKTA login.
* [VerifySignedJwt](/api/capi/identity/verifysignedjwt) - Verifies a signed JWT provided as a string.

:::tip
All the client APIs that the names beigin with <strong>"Sys"</strong> <em>are</em> also available to S2S. 
For the usages of the S2S identity APIs (if they are not listed at this section below),
refer to <%= data.branding.productName %> client [identity](/api/capi/identity) APIs.
:::


<DocCardList />