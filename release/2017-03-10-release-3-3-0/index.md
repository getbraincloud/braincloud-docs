---
title: "Release 3.3.0"
date: "2017-03-10"
tags: 
  - "release-history"
---

A small but mighty release :)

## Release Highlights

### Leaderboard Rewards

In 3.2 we added [Global Tournaments](/blog/2017/01/30/introducing-global-tournaments/) - which build upon brainCloud leaderboards to add support for opt-in tournament play. Our tournament feature is extremely flexible - with support for paid tournaments, variable tournament durations, configurable tournament phases, push notifications, and more.

But what if you would like to simply add the reward capabilities from Tournaments to your game's _existing leaderboards_ - without all the code + presentation changes that go along with it?

We have good news. We are happy to present two new tournament features that work together to fulfill this mandate:

- _Auto Join_ - allows players to join a tournament simply by posting a score to the associated leaderboard. Note that Auto Join only works for _free_ tournaments, of course.
- _Auto Claim_ - automatically awards the player their prizes when a tournament completes.

For more information, see the _Auto Join_ and _Auto Claim_ features in our updated [Tournament](/api/capi/tournament/) documentation.

### **Deployment Improvements**

We have made several improvements to our _Push Button Deployment_ process - which allows you to easily push the configuration of your app (including scripts and global files) from your development app to your production app.

Improvements to this process include:

- Better support for large volumes of custom files
- More reliable versioning of the custom files
- New option to _Exclude Integration Settings_ during a deployment

As always, the Deployment tool is available in the portal under [**Design | Core App Info | Admin Tools**](https://portal.braincloudservers.com/admin/dashboard#/development/core-settings-tools).

 

### Notice Banners

We have updated our portal to allow us to display banners with information about upcoming events (release updates, scheduled maintenance, etc.). We will of course use these banners in conjunction with our email notices and the [brainCloud Service Status](http://braincloud.statuspage.io) page.

 

* * *

## Portal Changes

The following screens have been changed:

### Design section

- **Core App Info | Application Ids**
    - The _[x] Show Game Design Features_ toggle is back! (It was lost, but now it is found.)
- **Core App Info | Advanced Settings**
    - There are 3 new compatibility options - these first two default to "on" for existing apps, "off" for new apps
        - _Do not reprocess currencies for non-consumable IAP products in receipts_
        - _Send obsolete reward field content in XP level up rewards results_
    - But this flag only relates to _Auto Claim_, and thus is off for all apps by default
        - _Enable Tournament Auto Claim check at login_
- **Cloud Code | API Explorer**
    - We've added the ability to easily discover and invoke scripts from _Peer_ and _Parent_ services
    - Now you'll see an individual Service entry for each Peer or Parent service associated with your app
- **Custom Config | Files**
    - Added a new column to display the version of the file. We've also improved our handling of new file versions, to make updating files (with automatic propagation to the CDN) more reliable
- **Leaderboards | Leaderboard Configs**
    - Added the new _Auto Claim_ and _Auto Join_ feature settings to the Tournament tab page

 

* * *

## API Changes

The following changes/additions have affected the brainCloud API:

- **GlobalEntity**
    - Added a new Cloud-code only [UpdateSystemEntity()](/api/capi/globalentity/updatesystementity) method to allow updating of the contents of a system entity, regardless of its ACL permissions. This is especially useful for system entities that .  _[Reminder - SystemEntities are simply GlobalEntities that do not have an owner. The advantage being that they are not automatically deleted if the owner's profile is deleted.]_
    - Also added an [UpdateSystemEntityACL()](/api/capi/globalentity/updatesystementityacl) method that likewise, allows the developer to over-ride the ACL of a SystemEntity. This code is also Cloud-code only for security reasons.

 

* * *

## Miscellaneous Changes / Fixes

- Updated libraries
    - There are no new client APIs in this release - and thus, no new libs to download!
- Documentation updates
    - We have added error handling examples to the C# sections of the Authentication documentation
- Important Fixes and optimizations
    - We have improved the performance of the [UpdateAttributes()](/api/capi/playerstate/updateattributes) operation of the _PlayerState_ service
    - We have fixed a race condition that under certain circumstances could award double currencies for Facebook purchases
    - We have fixed the json outputted during reward handling for XP level-ups - the returned json no longer includes the redundant "reward" section. Note - the _[x] Send obsolete reward field content in XP level up rewards results_ compatibility flag preserves the old behaviour in case your app requires it.
- Plus miscellaneous fixes and performance enhancements...
