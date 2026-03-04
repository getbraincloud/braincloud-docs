# Player State




User state contains methods for accessing user-specific information like name and contact email.

It also provides access to the User Attributes APIs allowing you to assign key+value pairs to a user.
These are primarily used in defining and filtering segments for Promotions.

New in 4.2, we've added our *Timed Status Effects* API. These API calls allow developers to associated a "status" with a user for a specified amount of time. The status will automatically be removed when it expires.

Active status effects are returned automatically during Authentication and via ReadUserState. They can also be retrieved directly via GetUserStatus.

### API Summary

### User Information
* [ReadUserState](/api/capi/playerstate/readuserstate) - Read the state of the currently logged in user. Optional parameter: entityTypeFilter
* [UpdateUserName](/api/capi/playerstate/updateusername) - Update User name.
* [UpdateContactEmail](/api/capi/playerstate/updatecontactemail) - Update contact email.
* [UpdateUserPictureUrl](/api/capi/playerstate/updateuserpictureurl) - Update user picture URL.
* [UpdateLanguageCode](/api/capi/playerstate/updatelanguagecode) - Update's user language preference.
* [UpdateTimeZoneOffset](/api/capi/playerstate/updatetimezoneoffset) - Update's user timezone offset.
* [UpdateSummaryFriendData](/api/capi/playerstate/updatesummaryfrienddata) - Update summary friend data.
* [UpdateCountryCode](/api/capi/playerstate/updatecountrycode) - Update user's country code preference on their profile.
* [UpdateIsTester](/api/capi/playerstate/updateistester) - Update flag indicating player is a tester or not.

### Attributes
* [GetAttributes](/api/capi/playerstate/getattributes) - Get player attributes.
* [UpdateAttributes](/api/capi/playerstate/updateattributes) - Update player attributes.
* [RemoveAttributes](/api/capi/playerstate/removeattributes) - Remove player attributes.

### Status
* [SetUserStatus](/api/capi/playerstate/setuserstatus) - Set timed status for a user
* [GetUserStatus](/api/capi/playerstate/getuserstatus) - Get user status
* [ExtendUserStatus](/api/capi/playerstate/extenduserstatus) - Extend user's status
* [ExtendUserStatusWithMax](/api/capi/playerstate/extenduserstatuswithmax) - Stack user's status times with optional maximum active duration
* [ClearUserStatus](/api/capi/playerstate/clearuserstatus) - Deletes the specified status

### Management
* [Logout](/api/capi/playerstate/logout) - Logs player out of the server.
* [ResetUser](/api/capi/playerstate/resetuser) - Deletes the data owned by the user but does not delete the user itself.
* [DeleteUser](/api/capi/playerstate/deleteuser) - Deletes the user and data owned by the user.
* [ResendValidationEmail](/api/capi/playerstate/resendvalidationemail) - Resend validation email.

### System calls
* [SysInvalidateCurrentSession](/api/capi/playerstate/sysinvalidatecurrentsession) - Invalidates the current user's session.
* [SysInvalidateAllSessions](/api/capi/playerstate/sysinvalidateallsessions) - Invalidates all sessions for the current user, including the current session.
* [SysInvalidateAllButCurrentSession](/api/capi/playerstate/sysinvalidateallbutcurrentsession) - Invalidates all sessions for the current user except the current session.
* [SysInvalidateSessionForUser](/api/capi/playerstate/sysinvalidatesessionforuser) - Invalidates a specific session for a user.
* [SysInvalidateAllSessionsForUser](/api/capi/playerstate/sysinvalidateallsessionsforuser) - Invalidates all sessions for a user.
* [SysInvalidateAllSessionsForUserExcept](/api/capi/playerstate/sysinvalidateallsessionsforuserexcept) - Invalidates all sessions for a user except a specific session.

<DocCardList />