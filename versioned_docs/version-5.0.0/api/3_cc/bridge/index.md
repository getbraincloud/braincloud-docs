# Bridge
## Overview



```cfscript

// Example of making an call from the context of another user

// First we need the profileId
var profileIdToUse = opponentProfileId;

// Second, retrieve a session for that profile
var otherSession = bridge.getSessionForProfile( profileIdToUse )

// Third, get a service proxy for that session
var lbProxy = bridge.getLeaderboardServiceParty( otherSession );

// Finally, make the API call
var score = opponentScore;
var extraData = {};
var res = lbProxy.postScoreToLeaderboard( "standard", score, extraData );

```

The primary function of the bridge is to provide a mechanism to access all of <%= data.branding.productName %>'s services within Cloud Code scripts.

Its important to note that the usage of these services changes depending on whether you call them within the context of a *client session*. For example, calling RunScript from a client executes the script within the context of that users client session, with full access to that user's profile data, entities, etc.

If there is no client session context when the script is executed (i.e. if script is executed via s2s, scheduled cloud code, etc), the bridge `get*ServiceProxy()` methods must be provided with a client session directly.


In these specific cases a client session may be retrieved using the <code>[GetSessionForProfile](/api/cc/bridge/getsessionforprofile)</code> method, and passed in to the appropriate `get*ServiceProxy()` methods.

### Helper Methods

The bridge also provides some additional helper methods for convenience:

* [CallScript](/api/cc/bridge/callscript) - call a script from within the current script
* [Include](/api/cc/bridge/include) - import the contents of another script into the current script
* [IsClientBridge](/api/cc/bridge/isclientbridge) - is this a client session?
* [IsServerBridge](/api/cc/bridge/isserverbridge) - is this a server/s2s session?
* [IsPeerBridge](/api/cc/bridge/ispeerbridge) - is this a peer session?
* [Sleep](/api/cc/bridge/sleep) - wait on the current thread for a specified time.

Team configuration:

* [GetTeamInfo](/api/cc/bridge/getteaminfo) - Retrieves the team info for the current assocaited session as a JSON
* [GetClientTeamInfo](/api/cc/bridge/getClientTeamInfo) - Retrieves the team info for the current user as a JSON (It differenciates from GetTeamInfo when using for the Peer script.)

App configuration:

* [GetAppId](/api/cc/bridge/getappid) - returns the appId that the script is running under (can be useful for determining whether a script is running in developoment vs. production)
* [GetAppName](/api/cc/bridge/getappname) - returns the name of the app that the script is running under
* [GetAppVersion](/api/cc/bridge/getappversion) - returns the version of the client app
* [GetEnvironmentName](/api/cc/bridge/getenvironmentname) - returns the name of the deployment environment that the app is running within
* [GetGlobalProperty](/api/cc/bridge/getglobalproperty) - retrieve a global property
* [GetScriptName](/api/cc/bridge/getscriptname) - returns the name of the currently running script

Information about the current user:

* [GetProfileId](/api/cc/bridge/getprofileid) - return the profileId of the user associated with the current session
* [GetName](/api/cc/bridge/getname) - retrieves the name property of the user associated with the current session
* [GetEmail](/api/cc/bridge/getemail) - returns the contact email address of the user associated with the current session (*note - may not be the same as their email login*)

Retrieving a session for another user:

* [GetSessionForCredential](/api/cc/bridge/getsessionforcredential) - retrieves a session for the specified credentials
* [GetSessionForProfile](/api/cc/bridge/getsessionforprofile) - retrieves a session for the specified profileId
* [GetSessionForSessionIdAndProfileId](/api/cc/bridge/getsessionforsessionidandprofileid) - confirms that a given sessionId and profileId are legitimate. Normally used in validating sessions from remote/custom servers.
* [InvalidateSession](/api/cc/bridge/invalidatesession) - invalidates the current session to disconnect the current user from <%= data.branding.productName %>.

Caching objects:

* [SetSessionCacheObject](/api/cc/bridge/setsessioncacheobject) - stores a JSON object to the session's cache
* [GetSessionCacheObject](/api/cc/bridge/getsessioncacheobject) - retrieves a cached object

Logging methods:

* [LogDebug](/api/cc/bridge/logdebug) - Logs a debug message with string-based context.
* [LogDebugJson](/api/cc/bridge/logdebugjson) - Logs a debug message with json context.
* [LogInfo](/api/cc/bridge/loginfo) - Logs an info message with string-based context.
* [LogInfoJson](/api/cc/bridge/loginfojson) - Logs an info message with string-based context.
* [LogWarning](/api/cc/bridge/logwarning) - Logs an warning with string-based context.
* [LogWarningJson](/api/cc/bridge/logwarningjson) - Logs an warning with json context.
* [LogError](/api/cc/bridge/logerror) - Logs an error with string-based context.
* [LogErrorJson](/api/cc/bridge/logerrorjson) - Logs an error with json context.

Useful utility methods:

* [GenerateGuid](/api/cc/bridge/getcurrenttimezoneoffset) - generates a random GUID
* [GetCurrentTimeZoneOffset](/api/cc/bridge/getcurrenttimezoneoffset) - returns the current time zone offset (in hours) for a given timezone string. (e.g. "Europe/Oslo")
* [SignRSASha256](/api/cc/bridge/signrsasha256) - generates and returns an SHA256 with RSA signature for a string

Raw API access:

* [CallAPI](/api/cc/bridge/callapi) - calls the named API 
* [CallAPIForSession](/api/cc/bridge/callapiforsession) - calls the named api on behalf of the specified session

Proxy methods retrieve the service proxies. Pass in a session as a parameter if you want to retrieve a proxy for a *different* session:

* [GetAppStoreServiceProxy](/api/cc/bridge/getappstoreserviceproxy)
* [GetAsyncMatchServiceProxy](/api/cc/bridge/getasyncmatchserviceproxy)
* [GetBlockchainServiceProxy](/api/cc/bridge/getblockchainserviceproxy) 
* [GetCustomEntityServiceProxy](/api/cc/bridge/getcustomentityserviceproxy)
* [GetDataStreamServiceProxy](/api/cc/bridge/getdatastreamserviceproxy)
* [GetEntityServiceProxy](/api/cc/bridge/getentityserviceproxy) - retrieves the proxy for *user* entities
* [GetEventServiceProxy](/api/cc/bridge/geteventserviceproxy)
* [GetFileServiceProxy](/api/cc/bridge/getfileserviceproxy) - retrieves the proxy for *user* files
* [GetFriendServiceProxy](/api/cc/bridge/getfriendserviceproxy)
* [GetGamificationServiceProxy](/api/cc/bridge/getgamificationserviceproxy)
* [GetGlobalAppServiceProxy](/api/cc/bridge/getglobalappserviceproxy)
* [GetGlobalEntityServiceProxy](/api/cc/bridge/getglobalentityserviceproxy)
* [GetGlobalFileV3ServiceProxy](/api/cc/bridge/getglobalfilev3serviceproxy)
* [GetGlobalStatisticsServiceProxy](/api/cc/bridge/getGlobalStatisticsServiceProxy)
* [GetGroupServiceProxy](/api/cc/bridge/getgroupserviceproxy)
* [GetHttpClientServiceProxy](/api/cc/bridge/gethttpclientserviceproxy)
* [GetIdentityServiceProxy](/api/cc/bridge/getidentityserviceproxy)
* [GetItemCatalogServiceProxy](/api/cc/bridge/getitemcatalogserviceproxy)
* [GetLeaderboardServiceProxy](/api/cc/bridge/getleaderboardserviceproxy)
* [GetLobbyServiceProxy](/api/cc/bridge/getlobbyserviceproxy)
* [GetLogServiceProxy](/api/cc/bridge/getlogserviceproxy)
* [GetMailServiceProxy](/api/cc/bridge/getmailserviceproxy)
* [GetMatchMakingServiceProxy](/api/cc/bridge/getmatchmakingserviceproxy)
* [GetMessagingServiceProxy](/api/cc/bridge/getmessagingserviceproxy)
* [GetOnewayMatchServiceProxy](/api/cc/bridge/getonewaymatchserviceproxy)
* [GetPlaybackStreamServiceProxy](/api/cc/bridge/getplaybackstreamserviceproxy)
* [GetPlayerStateServiceProxy](/api/cc/bridge/getplayerstateserviceproxy)
* [GetPlayerStatisticsEventServiceProxy](/api/cc/bridge/getplayerstatisticseventserviceproxy)
* [GetPlayerStatisticsServiceProxy](/api/cc/bridge/getplayerstatisticsserviceproxy)
* [GetPresenceServiceProxy](/api/cc/bridge/getpresenceserviceproxy)
* [GetProductMgmtServiceProxy](/api/cc/bridge/getproductmgmtserviceproxy)
* [GetProductServiceProxy](/api/cc/bridge/getproductserviceproxy)
* [GetProfanityServiceProxy](/api/cc/bridge/getprofanityserviceproxy)
* [GetPromotionsServiceProxy](/api/cc/bridge/getpromotionsserviceproxy)
* [GetPushNotificationServiceProxy](/api/cc/bridge/getpushnotificationserviceproxy)
* [GetRedemptionCodeServiceProxy](/api/cc/bridge/getredemptioncodeserviceproxy)
* [GetS3HandlingServiceProxy](/api/cc/bridge/gets3handlingserviceproxy) - retrieves the proxy for *global* files
* [GetScriptServiceProxy](/api/cc/bridge/getscriptserviceproxy)
* [GetSegmentServiceProxy](/api/cc/bridge/getsegmentserviceproxy)
* [GetTimeServiceProxy](/api/cc/bridge/gettimeserviceproxy)
* [GetTournamentServiceProxy](/api/cc/bridge/gettournamentserviceproxy)
* [GetUserItemsServiceProxy](/api/cc/bridge/getuseritemsserviceproxy)
* [GetUserServiceProxy](/api/cc/bridge/getuserserviceproxy)
* [GetVirtualCurrencyServiceProxy](/api/cc/bridge/getvirtualcurrencyserviceproxy)


<DocCardList />