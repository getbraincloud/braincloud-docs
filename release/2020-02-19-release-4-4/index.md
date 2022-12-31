---
title: "Release 4.4"
date: "2020-02-19"
tags: 
  - "release-history"
---

brainCloud 4.4 kicks off a year of big updates to brainCloud. We hope you like where we’re headed!

## Release Highlights

### Custom Entities

Release 4.4 brings the _full power_ of **Custom Entities** to brainCloud. As you may recall, Custom Entities are like Global Entities + User Entities combined, and then super-charged! You get all the features of our standard entity systems (with ownership, ACL, time-to-live, and concurrency versioning) - plus support for _Custom Indexes_ (i.e. much faster!) and _Deployment Migration_ (i.e. more convenient!). 

New features in 4.4 include:

- New **Custom Entity Editor** available under **Global Monitoring**
    - With full searching and Import/Export functionality
- _Bonus_ **Custom Entity Editor** available under **User Monitoring**
    - Easily view/edit the entities owned by a specific user!

In addition, you’ll find the Custom Entity configuration screens have moved. We have created a new section called **Cloud Data** for them under **Design** - to give them better overall visibility.

_Note - in the future Custom Entities will be a Plus Plan feature - but for now, Custom Entities are available to everyone!_

### Cloud Code Improvements

We have big plans for Cloud Code in 2020 - but to start things off, we have a few small improvements:

- _**Upgraded JavaScript Engine**_ - we’ve updated to Rhino Engine 1.7.12 for additional features, performance, and stability.
- _**EcmaScript 6 Support**_ \- the updated Rhino engine enables new language features. Rhino isn’t fully ES6 compliant, but it’s miles ahead of the level of support that we had before. 

Note - for compatibility reasons, the new ES6 support is disabled by default for existing apps. You can enable this feature by going to the new _Cloud Code_ settings section of the **Design | Core App Info** page.

### Sign in with Apple

![](images/2020-02-20_11-05-38.png)

We have added **Sign in with Apple** support to brainCloud. This works similarly to all of our other authentication types.

To take advantage of this feature, be sure to grab the latest brainCloud 4.4 Client Libs.

### Faster API Reference

This one is a big quality-of-life improvement.

As you know, as the brainCloud API has grown (over 400+ API calls and counting!) - the time to load our API Reference had gotten slower and slower.

We put the devs on it - and they were able to optimize it for a huge performance improvement. Now instead of taking 60+ seconds to load - it opens in 5-10 seconds from cold - even faster if you have it cached.

Check it out - you’ll find it in the usual location [here](https://getbraincloud.com/apidocs/apiref). 

### Misc

As usual, a few additional requests have made it into this release:

- _Google OpenID Support_ - we have added support for Google’s new (modern) OpenID authentication system
- _Item Catalog Deployment Option_ - you can now _opt-out_ of updating your Item Catalog during an app deployment. This feature allows you to maintain a more dynamic marketplace where your Item Catalog is managed directly in your live app, instead of strictly publishing updates from dev → prod.
- _New and fixed API calls_ - we have fulfilled a bunch of customer requests for specific API calls. Check the API Changes sections - we hope your favorites are there!

* * *

## Portal Changes

We've made the following portal changes:

### Design

- **Core App Info | Advanced Settings**
    - We have added a new _Cloud Code_ section, where you can enable the new ES6-level JavaScript support
    - We have also added a new compatibility flag, _Return legacy-format Multi Social Leaderboard results,_ to preserve the old behavior for the `GetMultiSocialLeaderboard()` call for existing apps.
- **Cloud Data | Custom Entities**
    - We’ve moved the _Custom Entities_ configuration screen out from under _Custom Config_.
    - You can now specify an _identifier_ field to use to label your objects when viewing them in the Entity Editor lists.
    - There is also a new _Monitor_ option on the _Action_ menu, that jumps you into Global Monitoring to view the entities of that type.

### Monitoring

- **Global Monitoring | Custom Entities**
    - The new _Custom Entity Editor_ screens in _Global Monitoring_ allow you to view and edit all of the custom entities of your application.
    - You can _search_ for entities using the _Filter_ dropdown.
    - You can _import_ and _export_ entities from JSON files.
- **User Monitoring | Custom Entities**
    - We also allow you to view _Custom Entities_ at the _user_ level
    - In this view, you only see _owned_ collections - and specifically, only entities that are _owned_ by the _selected user_.

### General

- We have re-ordered the screens under **Global Monitoring** to be _alphabetical_.   
    

* * *

## API Changes

The following calls have been added to the brainCloud API:

- **Authentication**
    - New `AuthenticateApple()` call for Sign in with Apple support.
    - New `AuthenticateGoogleOpenId()` call for Google’s OpenID authentication.
    - Improved Password Reset calls (with control over when the URL links expire)
        - `ResetEmailPasswordWithExpiry()`
        - `ResetEmailPasswordAdvancedWithExpiry()`
        - `ResetUniversalIdPasswordWithExpiry()`
        - `ResetUniversalIdPasswordAdvancedWithExpiry()`
    - _Note that we have deprecated the older password reset calls where you do not explicitly set an expiry._
- **CustomEntity**
    - Added `SysUpdateEntityOwner()` call to migrate custom entities between users. 
- **GlobalApp**
    - `SysUpdatePropertyString()` and `SysUpdatePropertyJSON()` have been added to both Client and S2S Cloud Code interfaces for devs building offboard tools.
- **GlobalEntity**
    - Added S2S _Cloud Code_ implementations for the following missing calls
        - `DeleteEntity()`
        - `GetRandomEntitiesMatching()`
        - IncrementGlobalEntityData()
        - `MakeSystemEntity()`
        - `UpdateEntity()`
        - `UpdateEntityAcl()`
        - `UpdateEntityOwnerAndAcl()`
        - `UpdateEntityTimeToLive()`
- **Identity**
    - New `AttachAppleIdentity()`, `DetachAppleIdentity()` and `MergeAppleIdentity()` calls
    - New `AttachGoogleOpenId()`, `DetachGoogleOpenId()` and `MergeGoogleOpenId()` calls
- **Leaderboard**
    - Fixed `GetMultiSocialLeaderboard()` so that it doesn’t return friends that haven’t played on any of the leaderboards requested. _There is a new compatibility flag to preserve the old behaviour._
    - Added `SysResetNeverLeaderboard()` to arbitrarily reset/rotate leaderboards. 
- **PlayerState**
    - New `UpdateTimeZoneOffset()` and `UpdateLanguageCode()` calls - useful in certain scenarios. 
- **PushNotifications**
    - Added the following missing methods to the S2S Cloud Code proxy:
        - `DeregisterPushNotificationDeviceToken()`
        - `ScheduleNormalizedPushNotificationUTC()`
        - `ScheduleNormalizedPushNotificationMinutes()`
        - `ScheduleRawPushNotificationUTC()`
        - `ScheduleRawPushNotificationMinutes()`
        - `ScheduleRichPushNotificationUTC()`
        - `ScheduleRichPushNotificationMinutes()`
        - `SendNormalizedPushNotification()`
        - `SendRawPushNotification()`
        - `SendRichPushNotification()`
        - `SendRichPushNotificationWithParams()`
- **Script**
    - Added `GetScheduledCloudScripts()` to the Client libs - it was previously Cloud Code only. 
    - Added `GetRunningOrQueuedCloudScripts()` call (to both Client and Cloud Code) 
- **User**
    - New password reset calls with better control over when the URLs expire:
        - `SysSendPasswordResetEmailWithExpiry()`
        - `SysSendPasswordResetEmailAdvancedWithExpiry()`
        - `SysSendPasswordResetUniversalIdWithExpiry()` 
        - `SysSendPasswordResetUniversalIdAdvancedWithExpiry()`

### Bonus API

In addition, we’ve added a new Cloud Code Utility method that can be used to efficiently create RSA signatures (since doing so through raw Javascript is pretty slow).

The new method can be found in the Bridge Utility service - i.e. `bridge.utils().signRSASha256()`. See the APIRef for more info!

* * *

## Miscellaneous Changes / Fixes

- Updated libraries
    - We’ve been busy adding our Relay Comms APIs to all the missing libraries. Unity/C#, Unreal, Java, and JavaScript are now good. C++ / Objective-C / Swift support is still outstanding, but coming soon.
    - The libraries have otherwise been updated with the latest 4.4 APIs. Grab them while they’re hot! 
- Documentation updates
    - New Faster API Reference!
    - Plus we’ve documented all the latest APIs
- Important Fixes
    - To-be-compiled
- Plus miscellaneous fixes and performance enhancements...
