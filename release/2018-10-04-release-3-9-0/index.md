---
title: "Release 3.9.0"
date: "2018-10-04"
tags: 
  - "release-history"
---

_brainCloud 3.9 is here! Check out the new hotness!_

 

## Release Highlights

### Online Presence

Online Presence allows an app's users to know which of their friends are currently online and available for collaboration.

Presence builds upon brainCloud RTT to deliver a rich solution which communicates:

- _online status_ - which users (friends, group members) are currently online
- _activity_ - customizable, rich activity data

In addition, presence supports:

- _real-time_ notification of status changes
- ability of subjects to _appear invisible (i.e. offline)_

For more information, see the [Presence Service API Reference](https://getbraincloud.com/apidocs/apiref/#capi-presence).

_Note - Online Presence requires brainCloud RTT._

### Tournament Divisions

brainCloud already allows games to increase player engagement through global tournaments, which reward prizes (currency, xp, etc.) to users for their play in recurring and/or adhoc tournaments.

Unfortunately, the lure of tournaments diminish as the number of participants grow and the player's chance of winning decreases. It is tough to motivate players when they need to rank at the top of a leaderboard with thousands of players.

That is where _Divisions_ come in. Divisions horizontally divide your players into separate leaderboards (which we call division instances) of a set size - say 100 players each.

The advantages are significant:

- _Greater engagement_ - players are playing against a smaller set of opponents, and are more motivated because they have a greater chance of winning
- _Greater control_ - there is a greater ability to tune the risk / reward structure of the contest, since the numbers are constrained
- _Greater liquidity_ - divisions hide the actual size of your tournament pool, which can be advantageous when your app is still growing

For more information, see the new _Division_ APIs in the [Tournament Service API Reference](https://getbraincloud.com/apidocs/apiref/#capi-tournament).

_Note - Divisions are available to Business Plan customers and above._

 

### Refactored Currency and In-App Purchase APIs

We have completely refactored the Currency, Purchase, and Product / Pricing / Promotions APIs that were previously jammed together in our old Product Service.

We've created two shiny new services to contain the new goodness:

- **AppStore Service** \- houses the new purchase and Product / Pricing / Promotions APIs. The Purchase APIs have been completely re-designed for the new service.
- **VirtualCurrency Service** \- handles all the currency APIs (other than the move, the APIs are barely changed).

_Have no worries - we will ensure that the legacy **Product Service** continues to work until **July 1, 2020**, but we strongly suggest that new apps move to the new APIs now, and older apps migrate when they can._

For more information, see the new [AppStore Service](https://getbraincloud.com/apidocs/apiref/#capi) and [VirtualCurrency Service](https://getbraincloud.com/apidocs/apiref/#capi-virtualcurrency) API References.

 

### Customer Requests

We have also added a handful of features to satisfy key customer requests. Hopefully you'll find yours here!

- _**Global Pre-hooks**_
    - You can now set up a single pre-hook that gets invoked before any API call - which is especially useful if you want to significantly restrict the calls that can be made from the client, without having to individually configure the hook for each service + operation combination.
- _**Global Properties**_
    - **New JSON support** \- you can now directly add/edit JSON in your properties!
    - **Deployment Enhancements** \- you can now preserve the values of select Global Properties though deploys. This is especially useful if you need to accomodate alternate property values in development vs. production, for example. _(Admittedly, using a JSON structure for the value, indexed by AppId is a decent solution for that as well!)_ 
- **_Facebook_**
    - We've updated our Facebook libraries to support **Graph API v 2.8**
- **_Improved Script Engine_**
    - Turns out our cloud code implementation had an issue where objects being passed and returned from scripts were being set to _read-only_ - even though they were copies. This resulted in issues invoking certain methods on the objects, and of course not being able to modify them without performing another deep-copy within your script. This has been resolved. This result is fully back-wards compatible.

 

### Miscellaneous

Last but not least, we have a few more improvements under-the-hood:

- Improved Cloud Code performance
    - we've improved the caching of cloud code scripts for even better performance!
- Improved Leaderboard caching
    - as part of our Tournament Division work, we improved the caching of leaderboard configuration data. The improvement will be most noticeable for apps with lots of leaderboards.
- Improved Design Portal performance
    - We've been reworking our core Design Portal tech. You should notice improved zippiness all around when using the portal!

 

## Portal Changes

We have made the following portal changes:

### Design

- **Core App Info | Application IDs**
    - Added a new _Bundle Id_ field in Apple platform settings, which if filled in, is used to perform additional receipt validation in the new **AppStore Service.**
- **Core App Info | Advanced Settings**
    - A new compatibility flag, _\[x\] Enable legacy Purchase Collection support,_ has been added. It defaults to _enabled_ for both new and existing apps.
        - Apps with existing purchases should keep this enabled - it will allow the new purchase APIs and old purchase APIs to coexist nicely
        - New apps can feel free to disable this and use the new APIs only.
- **Cloud Code | API Hooks**
    - We have added new _Dispatcher_ and _S2SDispatcher_ support for pre-hooks.
    - Configuring a pre-hook against those services will cause the pre-hook script to run before any _client_ or _S2S_ call respectively.
- **Custom Config | Global Properties**
    - When creating / editing a property, you can now configure the editor for _String_ or _JSON_ editing. Note that the underlying value is still stored as a _String_.
    - You can also choose whether the property value should be protected from being overwritten during deploys. This is useful for values that are set uniquely per brainCloud app instance (i.e. the profileId of a system user, a to tell the client that this is a prod vs. debug instance, that sort of thing).
    - Note that during deployment, the deploy process obeys the configuration specified in the _source_ app, not the _target_ app.
- **Leaderboards | Leaderboard Configs**
    - You can now flag tournament-enabled leaderboards to act as _templates_ for Divisions. Template tournament/leaderboards do not appear in the regular leaderboard lists, and cannot be joined.
    - You can also now quickly clone leaderboards by choosing the _Duplicate_ option from the action menu.
- **Loaderboards | Tournament Templates**
    - Quickly clone tournament templates by choosing the _Duplicate_ option from the action menu.
- **Leaderboards | Division Sets**
    - Jump into our new _Tournament Divisions_ feature by defining _Division Sets_!
    - _Division Sets_ allow you to break tournaments into random sub-tournaments for greater engagement.
    - To configure a division:
        1. First create a tournament-enabled Leaderboard to act as a template (setting the template flag to enabled)
        2. Then create the division set, selecting the Leaderboard template and configuring the maximum # of players per division instance
        3. Use the new [Tournament Division APIs](https://getbraincloud.com/apidocs/apiref/#capi-tournament) to join the tournament!
- **Marketplace | Products**
    - We have made a bunch of under-the-hood changes to allow for easier integration of new AppStores in the future
    - The screen should work largely as before - let us know if you experience any issues!
- **Messaging | Presence**
    - New screen for configuring the new _**Presence**_ service
    - Once enabled, any RTT connection established by a client will contain basic presence info (i.e. online/offline) as well
    - From there, rich activity and real-time updates can be enabled as well

### Monitoring

- **Global Monitoring | Leaderboards**
    - We have added a "Choose a division..." option to the Leaderboard selection menu (for apps that are using Divisions). Use it to view the leaderboard results for a Division instance.
    - Rationale - division instances are hidden from the Leaderboard lists (because there may be hundreds of them).
    - Pro-tip - You can use the API explorer to find the division instances related to a particular player
        - Go to **Monitoring | User Monitoring**, and find the player in question
        - If the _Live Lock_ banner is showing, click the lock to unlock it
        - Click on **\[Login as User\]** to login as this user in the API explorer
        - Choose the _Tournament service_, and the _GetMyDivisions() operation,_ and click _**\[Run\]**._
        - Voila - a list of the division ids instances for that player. Note that each id contains both the division set code, and the instance id (a number).
- **User Monitoring**
    - We've added a new **Recent Users** tab to make it easier to find users that have recently logged into your app
    - Note that this is a log, so you may see the same user listed multiple times (only really noticeable at low activity counts)
- **User Monitoring | Transactions**
    - Updated to support the new purchase services and transaction formats
    - You can now view purchase receipts, and even _delete_ purchases if you would like (useful during testing)

### General

- **Improved Portal Tech**
    - We've been doing some work under-the-covers to improve our Portal technology
    - The first thing you should notice is a performance boost - yay!
    - You may also notice a few CSS-related bugs. Feel free to report those so that we can stamp them out!

* * *

## API Changes

The following changes/additions have affected the brainCloud API:

- **AppStore Service**
    - New [AppStore Service](https://getbraincloud.com/apidocs/apiref/?csharp#capi-appstore) for querying products / pricing / promotions, and performing in-app purchases.
    - The product / pricing / promotions APIs are identical to the Product Service versions - but the IAP APIs are all new!
- **Group Service**
    - Users can now call [RejectGroupJoinRequest()](https://getbraincloud.com/apidocs/apiref/?csharp#capi-group-rejectgroupjoinrequest) to reject a join request that they have made
    - New APIs for managing groups: [SetGroupOpen()](https://getbraincloud.com/apidocs/apiref/?csharp#capi-group-setgroupopen) and [UpdateGroupACL()](https://getbraincloud.com/apidocs/apiref/?csharp#capi-group-updategroupacl)
- **Leaderboard Service**
    - New versioned social leaderboard calls - [GetSocialLeaderboardByVersion()](https://getbraincloud.com/apidocs/apiref/?csharp#capi-leaderboard-getsocialleaderboardbyversion), [GetPlayersSocialLeaderboardByVersion()](https://getbraincloud.com/apidocs/apiref/?csharp#capi-leaderboard-getplayerssocialleaderboardbyversion)
- **Product Service**
    - _Important: The Product Service is being **deprecated** in favour of the new AppStore and VirtualCurrency services._
    - The service and its APIs will continue to work until **July 1st, 2020**.
    - There is a new compatibility flag in the portal under **Design | Core App Info | Advanced Settings**, which controls how purchase transactions are written to the database. Keep \[x\] Enable legacy Purchase Collection support checked if your app uses the old Product APIs, or a mixture of the old **Product**and new **AppStore**APIs. New apps that will only use the new AppStore APIs can feel free to clear that flag.
    - Although deprecated, we did add the missing cloud-code version of the [VerifyItunesReceipt()](https://getbraincloud.com/apidocs/apiref/?cloudcode#capi-product-verifyitunesreceipt) back to the service (for those who need it!)
- **Presence Service**
    - There is an all-new [Presence](https://getbraincloud.com/apidocs/apiref/?csharp#capi-presence) service. Check it out!
- **Tournament Service**
    - New Division Set calls have been added - mostly used when querying and joining a Division Set instance.
    - The new calls are: [GetDivisionInfo()](https://getbraincloud.com/apidocs/apiref/?csharp#capi-tournament-getdivisioninfo), [GetMyDivisions()](https://getbraincloud.com/apidocs/apiref/?csharp#capi-tournament-getmydivisions), [JoinDivision()](https://getbraincloud.com/apidocs/apiref/?csharp#capi-tournament-joindivision) and [LeaveDivisionInstance()](https://getbraincloud.com/apidocs/apiref/?csharp#capi-tournament-leavedivisioninstance)
- **VirtualCurrency Service**
    - New [VirtualCurrency Service](https://getbraincloud.com/apidocs/apiref/?csharp#capi-virtualcurrency) for currency operations. The operations are largely the same, with a bit of clean-up.

* * *

## Miscellaneous Changes / Fixes

- Updated libraries
    - All libraries have been updated with the latest API enhancements (with a few exceptions). Go get 'em!
        - C# / Unity - fully up-to-date for 3.9
        - Unreal - fully up-to-date for 3.9
        - C++ - fully up-to-date for 3.9 (though UWP and Nuget packages are outstanding)
        - Java - fully up-to-date for 3.9
        - JavaScript - fully up-to-date for 3.9
        - Objective-C / Swift - fully up-to-date for 3.9
        - AS3 - does not include RTT or RTT-related features (Chat, Presence, Lobbies) but otherwise supports all 3.9 APIs
- Documentation updates
    - API references have been updated for 3.9
- Important Fixes
    - BCLD-3513 - Calling RemoveMember on a lobby instance that only has 1 member causes a null pointer exception
    - BCLD-3388 - When receiving a peer currency reward from an xp upgrade, the peer currency balances were not being returned
    - BCLD-3321 - Wrong error code returned for invalid lobby id
    - BCLD-3265 - Unreal and objective-C - fix set profileId after merge call
    - BCLD-3348 - 'View tutorials' link in Portal was broken
    - BCLD-3217 - Improved RETRY and PACKET\_IN\_PROGRESS handling for Unity client library
    - BCLD-3211 - Improved RETRY and PACKET\_IN\_PROGRESS handling for JavaScript client library
- Plus miscellaneous fixes and performance enhancements...
