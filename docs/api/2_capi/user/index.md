# User

The **User** service, introduced in version 4.3, supports basic user CRUD operations and allows iteration over all users in an app. Note that this service is only accessible via Cloud Code.

### API Summary

#### Create Users
* [SysCreateUserEmailPassword](/api/capi/user/syscreateuseremailpassword) - Create a user with an email identity
* [SysCreateUserUniversalId](/api/capi/user/syscreateuseruniversalid) - Create a user with a univeralId identity
* [SysCreateUserExternalAuth](/api/capi/user/syscreateuserexternalauth) - Create a user with an external auth identity 

#### Retreive Users Info
* [SysGetUserInfo](/api/capi/user/sysgetuserinfo) - Retrieves user information for a single profile ID

##### Delete Users
* [SysDeleteUser](/api/capi/user/sysdeleteuser) - Delete a user

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

#### Self Service Delete Account
* [SysCreateSelfServiceDeletionUrlForUser](/api/capi/user/syscreateselfservicedeletionurlforuser) - Returns self-service delete account URL that can be used to delete the specified user.

<DocCardList />