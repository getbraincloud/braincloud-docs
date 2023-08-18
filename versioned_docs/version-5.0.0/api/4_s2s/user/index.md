# User
## Overview







The **User** service, introduced in 4.3, can be used to iterate through the users of an app. It can also be used to create new users. Note that this service is only available via cloud-code.



### API Summary

#### Create Users
* [SysCreateUserEmailPassword](/api/capi/user/syscreateuseremailpassword) - Create a user with an email identity
* [SysCreateUserUniversalId](/api/capi/user/syscreateuseruniversalid) - Create a user with a univeralId identity
* [SysCreateUserExternalAuth](/api/capi/user/syscreateuserexternalauth) - Create a user with an external auth identity 

#### Retreive Users Info
* [SysGetUserInfo](/api/capi/user/sysgetuserinfo) - Retrieves user information for a single profile ID

#### Paging
* [SysGetPage](/api/capi/user/sysgetpage) - Get a page of users 
* [SysGetPageOffset](/api/capi/user/sysgetpageoffset) - Get the next/prev page of users 

#### Reset Password
* [SysSendPasswordResetEmailWith](/api/capi/user/syssendpasswordresetemail) - Reset the password associated with the users email login
* [SysSendPasswordResetEmailAdvanced](/api/capi/user/syssendpasswordresetemailadvanced) - Reset the password associated with the users email login
* [SysSendPasswordResetEmailWithExpiry](/api/capi/user/syssendpasswordresetemailwithexpiry) - Reset the password associated with the users email login
* [SysSendPasswordResetEmailAdvancedWithExpiry](/api/capi/user/syssendpasswordresetemailadvancedwithexpiry) - Reset the password associated with the users email login _using a custom email template_
* [SysSendPasswordResetUniversalId](/api/capi/user/syssendpasswordresetuniversalid) - Reset users password
* [SysSendPasswordResetUniversalIdAdvanced](/api/capi/user/syssendpasswordresetuniversalidadvanced) - Reset users password using templates
* [SysSendPasswordResetUniversalIdWithExpiry](/api/capi/user/syssendpasswordresetuniversalidwithexpiry) - Reset the password associated with the users universalId login
* [SysSendPasswordResetUniversalIdAdvancedWithExpiry](/api/capi/user/syssendpasswordresetuniversalidadvancedwithexpiry) - Reset the password associated with the users universalId login _using a custom email template_
* [SysSetPasswordUniversalId](/api/capi/user/syssetpassworduniversalid) - Set the password associated with the universal id of the given profile.

:::tip
All the client APIs that the names beigin with <strong>"Sys"</strong> <em>are</em> also available to S2S. 
For the usages of the S2S user APIs (if they are not listed at this section),
refer to <%= data.branding.productName %> client [user](/api/capi/user) APIs.
:::

<DocCardList />