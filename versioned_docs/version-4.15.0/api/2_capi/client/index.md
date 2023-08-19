# Client
## Overview


The <%= data.branding.codeClient %> class is the core of the <%= data.branding.productName %> API.  From the <%= data.branding.codeClient %> you can access all of <%= data.branding.productName %>'s services (Authentication, Entity, etc) and from there the individual API's they contain.

The Client also contains many setup and configuration methods for timeouts, global callbacks, and more.

### API Summary

### Critical
Functions that are necessary to use the brianCloud library.

* [Initialize](/api/capi/client/initialize)
* [InitializeIdentity](/api/capi/client/initializeidentity)
* [RunCallbacks](/api/capi/client/runcallbacks)
* [Update](/api/capi/client/update)

### Callbacks
Functions to register and deregister callbacks for specific events.

* [RegisterEventCallback](/api/capi/client/registereventcallback)
* [DeregisterEventCallback](/api/capi/client/deregistereventcallback)
* [RegisterRewardCallback](/api/capi/client/registerrewardcallback)
* [DeregisterRewardCallback](/api/capi/client/deregisterrewardcallback)

### Timeouts
Functions to configure network timeouts.

* [SetPacketTimeoutsToDefault](/api/capi/client/setpackettimeoutstodefault)
* [GetPacketTimeouts](/api/capi/client/getpackettimeouts)
* [SetPacketTimeouts](/api/capi/client/setpackettimeouts)
* [GetAuthenticationPacketTimeout](/api/capi/client/getauthenticationpackettimeout)
* [SetAuthenticationPacketTimeout](/api/capi/client/setauthenticationpackettimeout)

### Status
Functions to query the client state or reset network communications.

* [IsAuthenticated](/api/capi/client/isauthenticated)
* [IsInitialized](/api/capi/client/isinitialized)
* [GetSessionId](/api/capi/client/getsessionid)
* [ResetCommunication](/api/capi/client/resetcommunication)
* [InsertEndOfMessageBundleMarker](/api/capi/client/insertendofmessagebundlemarker)
* [OverrideCountryCode](/api/capi/client/overridecountrycode)
* [OverrideLanguageCode](/api/capi/client/overridelanguagecode)
* [EnableLogging](/api/capi/client/enablelogging)

### File Upload
Functions to register for file upload callbacks and configure upload specific timeouts.

* [RegisterFileUploadCallback](/api/capi/client/registerfileuploadcallback)
* [DeregisterFileUploadCallback](/api/capi/client/deregisterfileuploadcallback)
* [GetUploadLowTransferRateThreshold](/api/capi/client/getuploadlowtransferratethreshold)
* [SetUploadLowTransferRateThreshold](/api/capi/client/setuploadlowtransferratethreshold)
* [GetUploadLowTransferRateTimeout](/api/capi/client/getuploadlowtransferratetimeout)
* [SetUploadLowTransferRateTimeout](/api/capi/client/setuploadlowtransferratetimeout)

### Network Error Caching
Functions to enable and manage network error message caching.

* [EnableNetworkErrorMessageCaching](/api/capi/client/enablenetworkerrormessagecaching)
* [RegisterNetworkErrorCallback](/api/capi/client/registernetworkerrorcallback)
* [RetryCachedMessages](/api/capi/client/retrycachedmessages)
* [FlushCachedMessages](/api/capi/client/flushcachedmessages)

### Global Error Logging
Functions to register and deregister callbacks for all error events.

* [RegisterGlobalErrorCallback](/api/capi/client/registerglobalerrorcallback)
* [DeregisterGlobalErrorCallback](/api/capi/client/deregisterglobalerrorcallback)

### Compatibility
Compatibility settings for older <%= data.branding.productName %> versions.

* [SetErrorCallbackOn202Status](/api/capi/client/seterrorcallbackon202status)
* [SetOldStyleStatusMessageErrorCallback](/api/capi/client/setoldstylestatusmessageerrorcallback)



<DocCardList />