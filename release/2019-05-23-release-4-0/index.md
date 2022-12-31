---
title: "Release 4.0 is live!"
date: "2019-05-23"
tags: 
  - "release-history"
---

# Release Highlights

## RTT Official Launch!

With 4.0, we _officially_ take the _beta_ label off of RTT, and release it to the world!

As you know, RTT adds a bi-directional channel for **real-time communications** to the brainCloud platform, greatly expanding the types of experiences that can be delivered without additional tech.

![](images/rtt_architecture.png)

The list of great new features that RTT has already enabled includes:

- **Real-time Events**
- **Online Chat**
- **Real-time Messaging**
- **Online Matchmaking**
- **Lobbies**

For 4.0 we are pleased to add:

- **Async Matches**
    - we've RTT-enabled Async Matches. So now you can use the Async API in real-time! (Don't worry, you can still use it offline if you would like).
    - Oh, and while we were at it, we've made async matches automatically delete themselves after 90 days. So your apps no longer have to do the cleanup manually if they don't want to.
- **Integrated Hosting**
    - we have integrated our new Hosting features with our RTT Lobby service

Plus we have officially launched our RTT-enabled _**Plus**_ subscription plans that make these great features available at all usage levels.

## Hosting (beta)

Did we mention hosting?

In brainCloud 3.8, we introduced support for custom **Room Servers** (i.e. game or experience servers) that integrate with our Lobby Service for matching up users.

The cool thing is that you have full freedom to custom code your Room Server yourself, in any technology. The not-as-cool thing was that you had to host (or arrange for hosting) of the servers yourself, plus you also had to code up a Room Server Manager, for us to integrate with (it was responsible for spinning up your servers and managing them). Suffice to say, that's a bit more complicated than most people want.

So for 4.0 we're pleased to announce that we can host your custom **Room Servers** for you - all managed by our built-in _Room Server Manager_. It's truly as simple as giving us the name of the Docker image to use for your service. We handle the rest, spinning up servers and containers as needed - and charging you for the server cycles used.

## Relay Servers (beta)

Even simpler than hosting a custom-built Room Server, is hosting our new built-in **Relay Servers**!

We have used our new RTT + Hosting infrastructure to add built-in **Relay Server** support to brainCloud.

Now building a real-time or near-real-time multiplayer experience on brainCloud is as simple as:

- Configure the relay servers on the new **Design | Cloud Code | My Servers** page
- Connect the relay server to your lobby via the **Design | Multiplayer | Lobbies** page
- Utilize our new **Relay Communications APIs** in your **Unity** apps!  (note - Unreal and other libraries will be supported soon!) 

## New Billing Plans

With all this new infrastructure, there has to be _some_ way to pay for them! Sorry! :)

But it's not all bad news. Not only have we launched new **_Plus_** plans that add support for RTT and Hosting, but we are also introducing new _lower-cost_ **_Lite_** plans! Plus we have significantly _lowered the API usage costs (as you scale up) across all plans!_

Also note that we have added a new _Development Plus_plan, which is a $5 / month plan that gives your apps in development access to Hosting features (i.e. hosted Room Servers and Relay Servers).

For full details on our updated billing plans, see our [billing announcement](https://getbraincloud.com/apidocs/braincloud-4-billing-plans/).

## And a bunch more!

And _that's_ not even all of it. brainCloud 4 also brings:

- **\[New!\] brainCloud Bombers RTT**
    - Our new example game fully demonstrates RTT and Relay Servers
    - Play it on Steam!
- **\[New!\] Forums!**
    - brainCloud now has forums for our development community. Check them out [here](https://forums.getbraincloud.com/)!
- **\[Updated!\] Tic-Tac-Toe example**
    - Now supports the new RTT-enabled Async Match API
- **DataStream Enhancements**
    - Our DataStream service now pushes more events, including:
        - Tournament events
        - Group events
        - Chat events
        - Lobby Events
- **Updated Facebook Integration**
    - We now support Graph API 2.9

And be sure to check the API Changes below for a smattering of new APIs.  

* * *

# Portal Changes

We've made the following updates to the portal:

## Team

- **Home | Start**
    - We've added a link to the new [brainCloud Forums!](http://forums.getbraincloud.com/)
- **Manage | Apps**
    - **Go Live!** reworked to support the new V4 billing plans
    - New **Change Plan** action menu item allows you to dynamically swap the plan for your app at any time
    - To terminate service for your app, just choose **Delete** from the action menu. The system will now automatically expire your subscription. You will be invoiced at the end of the month, on a pro-rated basis, for the amount of service your app used.
    - We have also added a new **Plan** column to the display to make it easier to tell exactly which plan your app is using

## Design

- **Core App Info | Advanced**
    - **Restore Checkpoints -** brainCloud creates a checkpoint each time you deploy to an app and/or import to it. This new feature allows you to easily restore an app's meta-data to a recent checkpoint.
- **Authentication | Email Authentication**
    - brainCloud can now send confirmations to users after they have successfully changed their passwords. Configure the emails here.  
- **Cloud Code | My Servers**
    - This is the screen formerly known as "S2S Config"
    - The screen has been expanded to support the configuration of multiple server types:
        - **Custom Servers** - these are the old **S2S Configs**\-style servers
        - **Relay Servers** - deploy your own set of brainCloud Relay Servers
        - **Room Servers** - configure brainCloud to host your custom Room Server images
        - **Room Server Managers** - for integrating with a custom-developed, externally-hosted Room Server Manager
- **Multiplayer | Lobbies**
    - Room Server selection updated to use the new **My Servers** configurations (instead of referring to servers from Web Services, which 3.X did) 

## Monitoring

- **User Monitoring | User Summary**
    - You can now trigger the sending of a password reset email to Universal Identity users (if they have a contact email stored against their profile). Click the mail button to send.
- **User Monitoring | Recent Users**
    - The New column has been replaced by a new "Logins" column - which shows the number of times that user had logged in. Much more informative!

## Reports

- **Reporting | Analytics**
    - We have added a new section that reports the # of Dormant Users in your app. Dormant Users are defined as users who have not logged into your app in 180 days.
- **Reporting | API Usage**
    - We have added new **RTT**and **Hosting** usage statatistics

## General

- **DOCS top menu**
    - We've added a [Forums](http://forums.getbraincloud.com/) link to the DOCS menu. Hmm, maybe we should rename the menu to HELP?

* * *

# API Changes

_Important: **The 4.0 libraries (especially Unity) contain changes that will be breaking for some apps.** See this [blog post](https://medium.com/@braincloudbaas/braincloud-v4-client-changes-7a3ff59ef44f?source=friends_link&sk=0f5d799a422c1f051b0b511dc911ee89) for migration instructions. As always, the older libs continue to work for existing apps. We recommend all devs upgrade at their earliest convenience._ 

The following changes/additions have affected the brainCloud API:

- **Authentication**
    - New [ResetUniversalIdPassword()](https://getbraincloud.com/apidocs/apiref/?csharp#capi-auth-resetuniversalidpassword) and [ResetUniversalIdPasswordAdvanced()](https://getbraincloud.com/apidocs/apiref/?csharp#capi-auth-resetuniversalidpasswordadvanced) calls allow users to reset the passwords for their Universal IDs (via an email sent to them). Note that the [contactEmail](https://getbraincloud.com/apidocs/apiref/?csharp#capi-playerstate-updatecontactemail) of the user must be set for this to work.
- **Cloud Code Bridge**
    - Added new [GetSessionCacheObject()](https://getbraincloud.com/apidocs/apiref/?cloudcode#cc-bridge-getsessioncacheobject) and [SetSessionCacheObject()](https://getbraincloud.com/apidocs/apiref/?cloudcode#cc-bridge-setsessioncacheobject) methods for saving custom objects in the user session. This is quite helpful if you want to cache frequently accessed data for use by multiple cloud code scripts.
- **Global Statistics**
    - Support for new MIN and MAX operations. Very useful for keeping track of the personal high scores of a player. For details, see the updated [Statistics Grammar](https://getbraincloud.com/apidocs/apiref/#appendix-statisticsgrammar) page.
- **Lobby**
    - New [CancelFindRequest()](https://getbraincloud.com/apidocs/apiref/?csharp#capi-lobby-cancelfindrequest) cancels an asynchronous FindLobby request.
    - New [JoinLobby()](https://getbraincloud.com/apidocs/apiref/?csharp#capi-lobby-joinlobby) call allows a user to skip matchmaking and immediately join the specified lobby instance (potentially with party members).
- **Player Statistics**
    - Support for new MIN and MAX operations. For details, see the updated [Statistics Grammar](https://getbraincloud.com/apidocs/apiref/#appendix-statisticsgrammar) page.
- **RTTService**
    - Migrated the RTT Initialization methods ([EnableRTT()](https://getbraincloud.com/apidocs/apiref/#capi-rtt-enablertt), [RegisterRTTChatCallback()](https://getbraincloud.com/apidocs/apiref/#capi-rtt-registerrttchatcallback), etc.) to the RTTService for better API coherency

We have also deprecated the following methods:

- **Wrapper**
    - Removed the deprecated _singleton_mode
    - Removed EnableRTT(), RegisterRTTChatCallback(), etc. - and moved them to the RTT Service
- **Client**
    - Removed EnableRTT(), RegisterRTTChatCallback(), etc. - and moved them to the RTT Service

Finally, a few miscellaneous changes have been made:

- We are now wrapping all 3rd party libraries in a brainCloud namespace in the Unity / C# libraries
- We have renamed the Settings plugin in the Unity library

For more details and migration steps, see the [V4 Client Changes](https://medium.com/@braincloudbaas/braincloud-v4-client-changes-7a3ff59ef44f?source=friends_link&sk=0f5d799a422c1f051b0b511dc911ee89) blog post.

* * *

# Miscellaneous Changes / Fixes

- Updated libraries
    - All libraries have been updated to include all 4.0 APIs, with the exception of the Relay Service
    - The new Relay Service APIs are currently available in the Unity / C# libraries only. Unreal + other libraries will follow soon.
- Documentation updates
    - TBC
- Important Fixes
    - BCLD-4679 - Duplicate leaderboard config issues (leaderboard Duplicate, new "MOCK" division set instance creation) if Enrol or Announcement minutes and called when rotation minutes remaining < (Enrol + Announce + Buffer) minutes
    - BCLD-4651 - Permissions issue with groups - ReadGroup() vs. ReadGroupData() with other=1
    - BCLD-4415 - \[Documentation\] - More documentation support for the parameter 'isOpenGroup' for the 'AutoJoin' operation
    - BCLD-4650 - Issue in the UpdateGroupACL cloud code proxy
    - BCLD-4645 - UK Area code is missing from Authy
    - BCLD-4494 - Add documentation for 'UpdateEntityIndexedId' call in both API and S2S Explorer in the API Reference Docs.
    - BCLD-4524 - Add Server Session support for Leaderboard Service operations that are currently only supported for Player Session
    - BCLD-4337 - Sending null match state on create Async Match should not clobber the summary!
    - BCLD-3192 - 'GetSharedEntityForProfileId' returns positive log response without entering the profileID
    - BCLD-4307 - Improve speed of ChildEntity - UpdateEntity using updateFields instead of update
    - BCLD-4293 - Operations are not alphabetized on the APIHooks screen - should be
    - BCLD-3250 - PostScoreToLeaderboard has wrong name in Javascript example
    - BCLD-3232 - Client API - 'ReadServerTime' Operation returns a definite response, despite entering incorrect app ID
    - BCLD-4483 - DataStream Push Notifications - new safe mode to reduce excessive DataStream-related usage charges
    - BCLD-4499 - PostTournamentScoreWithResults is missing in the Unreal Client
    - BCLD-4503 - resetCurrency is missing from the virtual currency service
    - BCLD-4448 - Defect being seen in async match profile urls
    - BCLD-4498 - If a company is in a Suspended state, they are unable to edit their billing information to get out of that state…
    - BCLD-4488 - User can create Leaderboards with spaces and special characters using the 'CreateLeaderboard' API call
    - BCLD-4449 - User can create Leaderboard with spaces and special characters using the 'PostScoreToDynamicLeaderboard' API call.
    - BCLD-4454 - StartTime matches Registration time for Monthly Tournament in 'GetTournamentStatus' call
    - BCLD-4228 - API: Updated player names and picture urls not reflected in turn-by-turn match summary
    - BCLD-4358 - Inconsistency between comms initialize parameter order and wrapper order for java android and desktop
    - BCLD-3200 - JSON error when saving a quest with an already existing name
    - BCLD-4268 - Attaching an email identity overwrites an exisiting contact email
    - BCLD-3470 - Monitoring -> Global Entities -> Bulk options -> Export should be disabled when there are no global entites for the app
    - BCLD-4294 - Missing data in the new AppStore VerifyPurchase() call…
    - BCLD-2788 - Portal: deleting an image in \[Achievements\] without saving the achievement causes a missing image
    - BCLD-3968 - Errors handing $and in Where clauses
    - BCLD-3969 - getRandomEntitiesMatching sometimes returns 0 items for max 1, even when items match
    - BCLD-3977 - Log processor is incorrectly attributing mongo log collection write failures (too to large log sizes) to a particular app
    - BCLD-3927 - Clicking on resetpassword email link twice gets user to a valid looking reset password screen
    - BCLD-4111 - Design Portal should not be able to configure invalid Steam product info
    - BCLD-4105 - Add the missing readUserStatsSubset() cloud code method
    - BCLD-4108 - Global Entities: allow filtering and sorting on `entityId`, `version`, and `expiresAt`
    - BCLD-3989 - File Storage being reported on the API Usage page appears to always show 0.0
    - BCLD-4118 - When we do a SwitchToChildProfile(), we should add a login log entry for the child profile
- Plus miscellaneous fixes and performance enhancements...
