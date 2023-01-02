---
title: "Release 4.7 is live!"
date: "2021-03-24"
tags: 
  - "release-history"
---

brainCloud 4.7 is a big release - with lots of new features and even more under-the-covers. Hold onto your hats!

## Release Highlights

### Cloud Code Folders

The big feature of 4.7 is cloud code folder management. Yes - you will finally be able to organize your cloud code scripts properly!

_We know - some of you have been waiting for this feature forever. To be fair - when we originally built brainCloud, with the rich API we had designed (now at > 500 API calls!), we expected custom scripts to be few (i.e. less than a dozen) and small (i.e. less than 100 lines). Let just say that some of you have **greatly exceeded** those expectations._ 🙂 _This feature is for you!_

Key components of this feature:

- _Folder Tree_ - Updated **Design | Cloud Code | Scripts** Screen with support for creating and navigating within folders
- _Enhanced Import & Export Support_ - Enhancements to **Import** and **Export** functions to allow importing/exports of the entire script collection (with folders intact), or optionally individual folders (with recursion, of course).
- _Deployment Support_ \- The **Deploy** features have been enhanced to support cloud code folders. The full script tree will be pushed when you deploy from one app to another. Note - using the new **Builder CLI**, you can even **push individual folders of scripts** from one app to another - great for _syncing common scripts_ between apps!
- _Rename Scripts_ \- Scripts now have scriptIds that help to preserve linkages to scripts as they are _moved_ or _renamed_. And hey, you can now _rename_ scripts!
- _Author History_ - We also now record the name of the team member who made script changes
- _Smart Updates_ - finally, before updating a script during a Deploy Push or Import, we first take a look to see if it really changed. If not, we skip the update without increasing the version - which makes the version history of scripts smaller and much more meaningful!

Information

Note that the new Scripts screen, with **Folder Support**, will **not be enabled** immediately upon release of 4.7. Out of an abundance of caution, we will wait a few days to ensure that there aren’t any unforeseen issues with the underlying schema changes before turning this feature on fully. 

### Arcade-style Leaderboards

Building a game with an old-school feel? brainCloud 4.7 adds support for arcade-style leaderboards - where users can have more than one entry in the leaderboard! Great for daily or weekly rotating high scores!

Characteristics of arcade-style leaderboards:

- Players can have _more than one entry_ in the leaderboard (unlimited)
- Arcade-style leaderboards are created by setting the _Leaderboard type_ to _Arcade High_ (i.e. higher scores are better) or _Arcade Low_ (i.e. lower scores are better). Note that the leaderboard type must be set at the time of leaderboard creation. You cannot change an existing leaderboard to/from Arcade-style - due to the differences in how the data is stored.
- Arcade-style leaderboards _must rotate_ at least _weekly_; otherwise, the stored data would grow at an uncontrollable rate.
- Arcade-style leaderboards do _not_ currently support _tournaments_ or _divisions_. _We will consider adding support in the future if demand warrants._
- The standard Leaderboard APIs work as-is for Arcade-style leaderboards, with the following adjustments:
    - RemovePlayerScore() removes all of a player’s scores(s) from the specified leaderboard
    - GetPlayerScore() returns only a single score (i.e. the player’s best score) from the specified leaderboard
    - A new method, GetPlayerScores(), returns all of a player’s scores (up to a max limit) from the specified leaderboard
    - GetPlayerScoresFromLeaderboards() returns only the best score per leaderboard specified

### Facebook Limited Login Mode

brainCloud adds support for the new **Facebook Limited Login** mode – which allows apps to utilize a Facebook Login while adhering to new Apple guidelines (and user preferences) that prohibit sharing of tracking data with 3rd parties.

For more information on this feature, see the blog post [here](/blog/2021/03/11/apple-ios-14-5-privacy-facebook-limited-login-mode/).

### Steam and Playstation Friend Support

brainCloud now has direct support for Steam and Playstation friends.

This means your apps can more easily create social features (including social leaderboards) on those platforms. Full Steam and Playstation support have been added to the Friend Service and Leaderboard Service APIs.

As a bonus, we have also reworked how the caching of friend data works. This should mean fewer calls to the 3rd party systems (i.e. Facebook, Steam, and Playstation) and faster responses to the social API calls - including `ListFriends()`, `GetSocialLeaderboard()`, etc.

### Improved Unity Plug-in

brainCloud has a new-and-improved Unity Plug-in. Redesigned and re-implemented from the ground up, the new plug-in:

- Has a cleaner User Interface
- Is more secure - no longer stores appIds, secrets, etc. in plain text. Now requires a re-login to change settings.
- Can now enable/disable logging from the Plug-in without code changes
- Refer to Github Documentation here: [https://github.com/getbraincloud/braincloud-csharp/tree/master](https://github.com/getbraincloud/braincloud-csharp/tree/master) for details on implementing the new plugin into your projects 

### [Beta] Builder CLI

brainCloud 4.7 marks the _beta release_ of our Builder CLI tool (and the underlying Builder API). 

The Builder API currently allows the following:

- App management
    - create, update and delete apps within a team
    - manage app lifecycle - enable/disable, etc.
- Deployment management
    - scriptable deployment of configuration meta-data (including files + scripts + unowned migrate-able custom entities) from app to app
    - deployment of scripts (independent of app metadata); support full script tree or individual folders
- Script management
    - create, update and delete scripts within an app 
- Super features
    - plus additional features for private licensees

Note that the Builder API does not fully duplicate or replace the SYS APIs available via Client APIs and S2S. Its primary purpose is to provide higher-level access to features that are not appropriate at the Client and S2S API levels.

Information

Access to the Beta Release of the Builder CLI is limited to approved customers only. _Contact support and/or your brainCloud Account Rep for access_.

### Additional Features

The following additional features are also included in this release:

- _Apple Push Notification HTTP/2 support_
    - brainCloud now supports Apple’s HTTP/2 based APNS protocol - which is important as support for their legacy protocol ends on **March 31st, 2021**.
    - Note that no changes are required to your clients or app configurations to support the new protocol
- _Automated Promotions Improvements_
    - We have added improvements to several common use-cases - including adding Automated Promotions to existing segments.
    - **_Update - we are delaying these improvements to a 4.7.1 patch that will be available shortly after the 4.7.0 release._**
- _Improved Custom Entity Sharding Support_
    - Horizontal Sharding allows you to spread your custom entity collection across our MongoDB cluster - improving read/write response times for large collections
    - Sharding a collection means a key must be chosen to use to distribute the data. This key must be backed by a custom index in the collection.
        - Owned collections are always sharded via the “ownerId” field. As of 4.7, brainCloud now automatically adds an { “ownerId”: “hashed” } index for this purpose.
        - Unowned collections are sharded on a custom basis based on the entity schema, and the usage patterns of the app. Once the key has been chosen, a custom index must be chosen (or created) to support that key - and must be marked as a shard key index. Indexes marked as a shard key index cannot be deleted via the Design Portal.
        - Note - once set, the shard key for a collection cannot be changed. So choose wisely!
    - Sharding must be enabled on a per-entity basis by brainCloud Support Personnel. Contact support via the Chat Widget if you would like to discuss sharding one or more of your collections. 
- _Improved Lobby Performance_
    - The underlying Lobby Processing code had been re-written to be much more efficient.
- _Inventory Catalog Image-handling overhaul_
    - We have improved how the system handles embedded images so that images are now properly copied when deployed from app-to-app.
- _MongoDB 4.0 Support_
    - brainCloud 4.7 now officially supports MongoDB 4.0
    - All Private brainCloud deployments will be moved to MongoDB 4.0 within the next month
- _Oculus authentication_ 
    - brainCloud has added direct support for Oculus authentication
- _Playstation Network authentication_
    - To facilitate PSN Friend Support, brainCloud has added support for direct PSN authentication; previously apps had to use the external authentication feature for PSN authentication

* * *

## Portal Changes

We have made changes to the following sections of the portal:

### Design

- **Core App Info | Application Ids**
    - Added new **PSN** and **Oculus** platform integration tabs
- **Core App Info | Platforms**
    - Added new Oculus platform
- **Core App Info | Advanced Settings**
    - Added new “Use Legacy Player Id” flag, which if true, causes the legacy playerId field to function and be returned in some APIs in _addition_ to the newer, proper profileId field. Note the fields are synonymous (and contain the same values).
    - Added new “Add custom paths for Item Catalog images in API” flag to determine whether the Item Catalog allows custom image paths in the image field. Going forward, this behaviour has been deprecated; developers are free to include custom image information in the JSON blob that can be attached to catalog items.
- **Cloud Code | Scripts (Legacy)**
    - The old cloud code scripts screen is still available (for a limited time) - but have been labeled with (Legacy). 
    - Note that you can only edit scripts present in the root script folder using this screen.
- **Cloud Code | Scripts**
    - The new Scripts service!
    - Allows full editing and management of scripts - including creating folders, moving scripts, exports and imports.
- **Cloud Data | Custom Entities**
    - We now indicate which entities are Sharded, and if un-owned, which Index is used to back up the Shard key.
    - Note that sharding a Custom Entity collection is done by brainCloud Support Personnel upon request
- **Leaderboards | Leaderboard Configs**
    - Added new **Arcade High** and **Arcade Low** leaderboard types.
- **Promotions | Automated**
    - Now properly enforces that an Automated Promotion must target at least one Segment.
    - You must now create and save an Automated Promotion before enabling it. This is because enabling an Automated Promotion now triggers a batch process against all the users of the configured segments – we want to encourage the developer to get the promotion configured properly _before_ enabling it. 

### Monitoring

- **Global Monitoring | Leaderboards**
    - Added support for new Arcade-style leaderboards
- **Global Monitoring | Server Logs**
    - Added new Elapsed time column to easily convey incoming S2S and webhook performance
- **User Monitoring | Select User**
    - Added PSN and Oculus IDs to the available search filters
- **User Monitoring | Friends**
    - Added support for Steam and PSN friends

* * *

## API Changes

The following changes/additions have affected the brainCloud core APIs:

### Client APIs:

- **BrainCloudWrapper**
    - Added new _authenticate_ and _smart-switch_ calls for _FacebookLimited_, _PlaystationNetwork,_ and Oculus.
- **Authentication**
    - Methods for the new authentication types - `AuthenticateFacebookLimited()`, `AuthenticatePlaystationNetwork()`, `AuthenticateOculus()`
- **CustomEntity**
    - The existing `sysDropIndex()` method has been deprecated and replaced with the new sysDropIndexName()method - which requires the index Name to be provided in addition to the keys of the index. This fixes an issue where it was unclear which index to delete in cases where multiple indexes have the same keys, but different collation settings.
- **Friend**
    - Added support for ”Steam” and ”PlaystationNetwork” to Friend APIs
    - Added new method, `GetMySocialInfo()` that returns social platform info for the current user
- **Identity**
    - Added new _Attach_, _Detach_ and Merge calls for the new FacebookLimited, PlaystationNetwork, and Oculus identity types.
- **ItemCatalog**
    - The Item Catalog service has been refactored to enable better image-file handling - especially when migrating items from app to app during deployment
    - To facilitate this, the service (by default) no longer allows for custom image paths (i.e. non-brainCloud anchored paths) to be set in the image field. Apps wanting to use custom image URLs can use the custom JSON section or resource data sections for this information.
    - There is a new compatibility flag, _Allow custom paths for Item Catalog images in API_, which controls the enforcement of this new behavior.
- **Leaderboard**
    - Added new method, GetPlayerScores(), for use with Arcade-style leaderboards
- **User**
    - SysGetPage() and SysGetPageOffset() calls updated to return profileId instead of playerId. New compatibility flag added (and defaults to true for existing apps) to preserve old behaviour.

### S2S APIs:

- **CustomEntity**
    - The new `sysDropIndexName()` call has been added to the available S2S APIs.
- **Presence**
    - The `getPresenceOfUsers()` call has been added to the S2S APIs.
    - Note that we have corrected the documentation to accurately reflect that only the “sys” calls, plus the `getPresenceOfUsers()` call, are available via S2S.

* * *

## Miscellaneous Changes / Fixes

- Updated libraries
    - All libraries have been updated with the latest API enhancements. Go get 'em!
    - Better RTT disconnect handling in libraries
- Documentation and Examples updates
    - API Reference updated with the latest API calls
    - All Unity Examples updated with the new Unity Plug-in
    - The Unity Space Shooter example now features an Arcade-style leaderboard
    - New Google IAP Unity Example and tutorial for integrating with brainCloud
    - Unreal S2S has a new c++/blueprint unreal project to demonstrate using brainCloud s2s calls
    - Miscellaneous doc + example updates
- Important Fixes
    - BCLD-7012 - Core App Info | Advanced Settings - The App Disabled reason needs to allow only JSON maps
    - BCLD-6932 - On deploy/import config, no longer drop Custom Entity indexes in target app if not in source app and record entity config indexes not applied
    - BCDL-6689 - User Service - GetSysPage/Offset returning profiled as “playerId”. Fixed, and compatibility flag added.
- Plus miscellaneous fixes and performance enhancements...
