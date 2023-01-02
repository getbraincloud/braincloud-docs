---
title: "Release 2.16.0"
date: "2015-10-09"
tags: 
  - "release-history"
---

## Release Highlights

Key features (and a fix) in this release:

- **Parent Currency Enhancements** - you can now link parent currencies to the IAP Products in child apps. This means that if you're implementing a meta-currency across all your apps, you can configure products in the child apps that award the parent currency. _This completes the currency enhancements to our **Shared Accounts** feature._
- **Parameterized Notification Templates** - by popular request, you can now include parameters in your notification templates, and invoke them using the new SendRichPushNotificationsWithParams() method. This is especially useful when you want to keep the definition of the notification text (with associated localizations) separate from the app code that invokes it.
- **Authentication Fix:**  We've made some key changes to how **Authentication Timeouts** are handled in all of the client libraries. The authentication timeout has been extended from 3 seconds to 15 seconds - and automatic retry has been disabled for Authentication requests. The app can still retry, but that's at the discretion of the app developer (and assumably the user).

Authentication Fix Background: _We were finding that a small minority of (mostly slower) clients were timing out before receiving the response for Anonymous Authentication calls, especially during new account creation. When this occurred, the automatic retry behaviour of the clients was accidentally causing duplicate accounts to be created. This only applies to Anonymous Authentication calls - the other Authentication methods were not impacted by this behaviour._

**We _strongly recommend_ that all developers upgrade to the 2.16 version of the brainCloud Client Libs.**

 

## Portal Changes

Changes to the portal:

- **Multiple Currencies in Products** - While we were already upgrading products, we decided to add an often-requested feature. You may now link multiple virtual currencies to your in-app-purchase products - so if you want to give 5 bonus elixer with every bundle of 1000 coins that a user purchases, you can now easily do so.  We applied some overall polish to the screen as well.
- **Push Button Deploy** - you can now deploy changes from the development versions of your apps, straight to the production versions, without going through the export -> import process! Quicker and more reliable. Available under **Design | Core App Info | Admin Tools**.
- **Improved Cloud Code Editor** - we've improved the layout of our Cloud Code Editor. We've moved the informational portion of the cloud code script (name, description, test parameters, etc.) onto a separate page - thus maximizing the editor space. And while we were at it, we improved the automatic sizing of the window itself.
- **Job Queue** - we've enhanced the Cloud Code Job Queue screen to show both the date+time that a job was _created_, as well as when the job is _scheduled to run_.  The list is sortable by either, of course.
- **Reset Device Tokens** - you can now clear the device tokens for a user from the User Summary screen. Device tokens are used when sending push notifications to a user.

[![Cloud_code_editor_two_pane](images/Cloud_code_editor_two_pane-1024x631.jpg)](images/Cloud_code_editor_two_pane.jpg)

 

## API Changes / Additions

Changes and additions to the API:

- **Paged User Entities** - we now have a paged API for User Entities, akin to the paged Global Entities API.  See the APIDOCs for info on GetPage() and GetPageOffset().
- **Matchmaking API** return results trimmed - turns out that there was a defect in our matchmaking APIs, and we were inadvertantly returning the _entire_ player object.  This has been trimmed back to return the appropriate data as designed.
- **Parameterized Notifications** - as mentioned in the highlights section, we now support passing dynamic parameters to rich notifications.  See the SendRichPushNotificationsWithParams() call.
- **Parent Currencies** - the Product APIs have been extended to accomodate parent currencies. To keep things compatible with current code, any parent currencies returned by these methods will be in their own `<parentCurrency>` json section, at a level peer to the current `<currency>` node.
- **BrainCloudFriend.UpdateSummaryFriendData()** method has now been moved to BrainCloudPlayerState.UpdateSummaryFriendData(). The method in the Friend class has been deprecated.
- **BrainCloudGamification.ReadGameStatisticsByCategory()** now moved to BrainCloudGlobalStatistics.ReadGlobalStatsByCategory()
- **BrainCloudGamification.ReadPlayerStatisticsByCategory()** now moved to BrainCloudPlayerStatistics.ReadPlayerStatsByCategory()
- **BrainCloudMatchMaking** methods **GetOneWayPlayers()** and **GetOneWayPlayersWithFilter()** have been renamed to **FindPlayers()** and **FindPlayersUsingFilter()** as these APIs can be used to find players for OneWay and Async matches.
- **Retries and timeouts** are now configurable using the BrainCloudClient.SetPacketTimeouts() method. By passing in an array of values you can set both the timeout for each attempt, and consequently the number of attempts. The default is 3 attempts with 10 second intervals between (e.g. {10, 10, 10}).

 

## Misc. Changes / Fixes

Additional improvements in this release:

- **New Client Library** - a Linux i386 library is now available
- Miscellaneous fixes and performance improvements.
