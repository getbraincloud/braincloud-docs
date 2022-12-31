---
title: "Release 2.22.0"
date: "2016-04-14"
tags: 
  - "release-history"
---

 

## Release Highlights

There are a ton of small enhancements and fixes in 2.22 - plus these three big things:

 

### brainCloud Friends

Until now, brainCloud has relied solely upon Facebook for managing a user's friend relationships. Apps that didn't want to connect to Facebook were left to implement their own system (via Cloud Code and User Entities). It's work-able, and some of brainCloud's best apps have taken this approach - but we thought brainCloud should do more for you.

Release 2.22 adds a new built-in friends system that is directly manageable by the app - while also dynamically merged with network sources (i.e. Facebook and others in the future) if available. This enables apps without Facebook integration to still have friends, and leverage friend-dependent features such as Social Leaderboards.

You'll find the new API methods in the Friend service, as well as a new Monitoring screen for viewing a list of a user's friends.

 

### Parse Integration

Last month we delivered our Parse import feature. This release we've added the ability to connect to Parse Servers from live brainCloud apps - facilitating the gradual migration of functionality and user data from Parse to brainCloud.

Configuring the Parse connection is simple - go to **Design | Integrations | Manage Integrations**, and enter your Parse App ID and Reset API Key. You can even enter a custom Parse Server URL if you've already migrated from Parse's servers.

From there, there are two key APIs to integrate into your app:

- [AuthenticateParse()](/apidocs/apiref/#capi-auth-authenticateparse) - used to authenticate with brainCloud via a Parse identity.
- [ParseRequest()](/apidocs/apiref/#cc-httpclient-parserequest) - makes a web request from brainCloud from Parse

We've even built a small sample app to show how these APIs can work together to dynamically migrate your users to brainCloud.

### CloudCode Editor Run Tab

We think our CloudCoders will like this one. We've added a new Run tab to the editor, so that you can do the full develop, run, debug cycle from within the Cloud Code editor dialog. No more saving and exiting to the API Explorer - only to have to go right back to editor once the system hits that pesky defect!

Now edit, test and debug your code all from the same editor!

[![Run Tab](images/Run_Tab.png)](/apidocs/wp-content/uploads/2016/04/Run_Tab.png)

_Pro tip: The session and log for the Run tab are shared with the API Explorer. This allows you to set up custom scenarios for testing._

 

## Portal Changes

The following changes have been made to the design portal:

- **Design | Core App Info | Advanced Settings**
    - Two new _**Compatibility Settings**_ have been added that allow developers to preserve the old behaviour of the API where user entities and friends relationships are concerned (see API changes, below)
    - The settings default to ON for existing apps (so that nothing breaks), but OFF for new apps.
    - _It is recommended that developers test their app, and move the settings to OFF if possible to ensure best compatibility with future updates to the platform going forward._
- **Design | Integrations**
    - New Parse integration options have been added to the **Manage Integrations** page
- **Design | Cloud Code | API Explorer**
    - You can now easily copy the json results from any API call by clicking on the ellipsis {...} button at the top of the response.
    - API Explorer calls are now added to the user's request/response logs (can aid debugging in some scenarios)
- **Design | Cloud Code | Script Editor**
    - New **Run** tab added to allow easy testing and debugging of scripts
    - Click **\[Quick Authenticate\]** to create a session with default options
    - Edit the parameters, and then click **\[Run\]** to execute the script
    - Note - brainCloud only runs the saved version of a script. If a script has changed and has not yet been saved, it will show an asterix ("\*") in the Editor tab title.
- **Monitoring | Global Monitoring | Recent logs**
    - Clicking on a _profile id_ in a log entry now brings you to the **Log** page of that user in **User Monitoring**
- **Monitoring | User Monitoring, Select User, Search**
    - We've expanded the user search to support all of our identity types, including GameCenter ID (note, it's the numeric ID that Apple provides), Twitter ID, Steam ID, Parse ID, and more.
- **Monitoring | User Monitoring | Friends**
    - We've added a new screen to display the friends that a user has. The screen offers a filterable list of both the user's Facebook friends who also have your app, along with any local brainCloud friends that the app may have added.
- **Monitoring | User Monitoring | Recent Logs**
    - Added the script name to the Run Script entries
    - API Explorer initiated calls now appear in the logs
- **Live Lock**
    - Better keyboard support for unlocking apps. Clicking the banner now puts the cursor into the password field automatically, and password entry is confirmed by hitting the \[Enter\] key
    - More buttons are now \*disabled\* when an app is locked, instead of hidden. This is so that locked features remain discoverable.
- **Server Status**
    - You can now easily look up the status of brainCloud's servers via our new ServerStatus page.  You'll find the link by the version number in the Portal under the left-hand navigation bar - or just bookmark [braincloud.statuspage.io](http://braincloud.statuspage.io).

 

## API Changes

The following changes have been made to the brainCloud API:

- **Authentication** and **ReadPlayerState**
    - [Authenticate()](/apidocs/apiref/#capi-auth) and [ReadPlayerState()](/apidocs/apiref/#capi-playerstate-readplayerstate) methods now return the users' `pictureUrl` property if available
    - [Authenticate()](/apidocs/apiref/#capi-auth) and [ReadPlayerState()](/apidocs/apiref/#capi-playerstate-readplayerstate) no longer return the user's entities by default \[see _User Entities_\] section below
-  **BrainCloudWrapper**
    - [BrainCloudWrapper](/apidocs/apiref/#wrapper) wraps the authentication and identity portions of the API, simplifying authentication for your apps.
    - Because the wrapper isn't a core component of the library (and apps aren't required to use it), it was only available on a few platforms, and wasn't really documented.
    - It is very useful however, and eliminates some common programming mistakes - so we are now providing it across all platforms (except AS3), and have documented it in [its own section](/apidocs/apiref/#wrapper) of the API documentation.
- **Friends**
    - The new friends management methods are: [AddFriends()](/apidocs/apiref/#capi-friend-addfriends) and [RemoveFriends()](/apidocs/apiref/#capi-friend-removefriends). They are plural because they allow you to add multiple friends in a batch.
    - A new method, [FindPlayerByUniversalId()](/apidocs/apiref/#capi-friend-findplayerbyuniversalid) has been added to facilitate looking up potential friends
- **Matchmaking**
    - New [DisableMatchmaking()](/apidocs/apiref/#capi-matchmaking-disablematchmaking) api method has been added to all clients
- **Parse Integration**
    - You can now authenticate brainCloud users via the [AuthenticateParse()](/apidocs/apiref/#capi-auth-authenticateparse) method. _Pro tip: Once the brainCloud account has been created, you can attach a brainCloud identity (i.e. Universal or Email) via the AttachIdentity() methods._
    - Once authenticated, you can make calls to Parse to retrieve data via the Cloud Code [ParseRequest()](/apidocs/apiref/#cc-httpclient-parserequest) method.
    - You configure parse configuration from the **Design | Integrations | Manage Integrations** screen.
- **User Entities**
    - **Behaviour Change:** UserEntities are no longer returned during Authenticate() and ReadPlayerState() calls by default. This is because some apps are actually storing thousands of entities per user, not all of which should be retrieved at once.
    - Apps can preserve the legacy behaviour by enabling the "Return user entites during authenticate and player state methods" flag in the **Compatiblity** section of the **Design | Core App Info | Advanced Settings** screen. This setting defaults to "on" for existing apps to preserve compatibility.
    - New [GetList()](/apidocs/apiref/#capi-entity-getlist) and [GetListCount()](/apidocs/apiref/#capi-entity-getlistcount) methods have been added. These methods allow for more complex queries of user entities.
    - [GetSharedEntityForPlayerId()](/apidocs/apiref/#capi-entity-getsharedentityforplayerid) method added - previously you could only retrieve \*all\* shared entities in a list.

 

## Miscellaneous Changes / Fixes

- Infrastructure updates
    - Improvements to Push Notifications architecture for increased performance and reliability
    - Upgraded our TLS libraries to use 1.1+ for improved security when connecting to our billing system.
- Removed methods - the following previously-deprecated methods have been removed from the 2.22 client libraries:
    - Removed ReadFriendsWithApplication() - use [ListFriends()](/apidocs/apiref/#capi-friend-listfriends) instead
    - Removed GetGlobalLeaderboard() - use [GetGlobalLeaderboardPage()](/apidocs/apiref/#capi-leaderboard-getgloballeaderboardpage) instead
    - Removed GetLeaderboard() - use [GetSocialLeaderboard()](/apidocs/apiref/#capi-leaderboard-getsocialleaderboard) instead
    - Removed RegisterPushNotificationDeviceToken with string device parameter - use version with Platform object instead
    - Removed ReadPlayerStatsSubset() with string parameter - use version that takes collection instead
    - Removed ReadAttributes() with string parameter - use version that takes collection instead
    - Removed ReadGlobalStatsSubset() with string parameter - use version that takes collection instead
    - Removed AwardAchievements() with string parameter - use version that takes collection instead
    - Removed UpdateSummaryFriendData() from BrainCloudFriend - use BrainCloudPlayerState version instead
    - Removed GetOneWayPlayers() and GetOneWayPlayersWithFilter() - use the [FindPlayers()](/apidocs/apiref/#capi-matchmaking-findplayers) methods instead
- Javascript library
    - Added FileUpload capabilities to the Javascript libs - tutorial [here](/apidocs/tutorials/javascript-tutorials/js-file-upload/)
    - Added [GenerateGUID()](/apidocs/apiref/#capi-auth-generateguid) and [GenerateNewAnonymousId()](/apidocs/apiref/#capi-auth-generatenewanonymousid) to the Javascript libs
- Unreal libs
    - Updated to support Unreal 4.11
- Miscellaneous changes, fixes and performance improvements, including:
    - Manually Triggering the forgot password feature for users or other team member's now bcc's the Team Member that requested it.
    - ReadFriendPlayerState() method was returning too much information - fixed
    - AB Test ID behaviour has been fixed. The value now remains constant after creation, as intended.
    - Should you _want_ to change the AB Test ID value for testing purposes, however, you now can - via the User Summary screen. Just click the Tester button first.
    - The Global Entities screen has been enhanced to allow you to scroll through an unlimited number of entities
- Documentation
    - Stats grammar documentation added to the new site
    - C++ examples to the new site
    - BrainCloudWrapper section added to the new site
