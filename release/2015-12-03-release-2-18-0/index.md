---
title: "Release 2.18.0"
date: "2015-12-03"
tags: 
  - "release-history"
---

## Release Highlights

This release marks the debut appearance of a key roadmap item for brainCloud - our **DataStream Architecture**. Currently in _beta_, the concept behind DataStream is to enable a meaningful flow of data and events from your apps to value-added tools. And to do this as painlessly as possible - i.e. little to no client code - leveraging the data and server-side interactions that brainCloud already knows about.

[![brainCloud DataStream Architecture](images/brainCloud_datastream_architecture-1024x654.png)](/apidocs/wp-content/uploads/2015/12/brainCloud_datastream_architecture.png)

 

DataStream is being implemented with the concept of _extensible channels_ - which will be used to enable a great variety of integrations.

Our first channel is a doozy - [Segment.com](https://segment.com/overview).  Connecting to Segment instantly gives us [over 100 service integrations](https://segment.com/integrations) - including [MixPanel](https://segment.com/docs/integrations/mixpanel/), [Google Analytics](https://segment.com/docs/integrations/google-analytics/), [Heap](https://heapanalytics.com), [Treasure Data](https://segment.com/docs/integrations/treasure-data/) and more.  There's even support for [generic webhooks](https://segment.com/docs/integrations/webhooks/).

Trying out DataStream is very simple. To do so:

- Register for a free [Segment](http://www.segment.com) Developer account, and create a project to use
- Go to the brainCloud portal, and enter the Segment project information in the new **Design | Integration** section
- Optionally connect another service to Segment - like _MixPanel_, _Google Analytics_, etc.

That's it - once you do this brainCloud will immediately begin sending the following events:

- _Identify_ - contains base information (like profile id, name, e-mail etc) about a user interacting with Segment. Sent before we send any other events associated with that user.
- _Login_ - triggered when a user logs in (via the Authenticate API)
- _Register_ - triggered when a new user account is created (via the Authenticate API)
- _RecordedScore_ - triggered when a user posts a score to a leaderboard
- _LevelledUp_ - triggered when a user gains an experience level
- _AwardedAchievement_ - triggered when a user is awarded an achievement
- _AwardedMilestone_ - triggered when a user is awarded a milestone
- _AwardedQuest_ - triggered when a user is awarded a quest
- _WasSentNotification_ - triggered when a remote push notification was sent to the user
- _CompletedOrder_ - triggered when a user completes an IAP purchase

In addition, your app can send custom events of it's own (from the client or via Cloud Code).  There is a new DataStream service with three methods to support this:

- _CustomTrackEvent_ - used to track custom user behaviours throughout your app - for example, a puzzle game might record "RoundStarted" with information on what round the user is playing, and what boosts they've selected for the round, together with a "RoundCompleted" event that summarizes the results. _CustomTrackEvent()_ takes as parameters the name of the event, and set of custom key+value pairs for attributes.
- _CustomScreenEvent_ - used to record that the user i
- _CustomPageEvent_ - same as the above, but oriented toward web pages

_Billing note - in addition to the regular tracking of API calls, each event sent out on a DataStream Channel counts as an additional API count._

We are very excited about the new possibilities that DataStream opens up for brainCloud apps - give it a try and send us feedback!

 

## Additional Highlights

Additional features of this release include:

- **Push Notification refactoring** - we've refactored our push notification support to make it more efficient and reliable. Although none of the existing Client APIs have changed, you'll notice:
    - **_Device tokens now expire_** after a settable period of time. This helps to keep all tokens recent and reliable, and also to ensure you're not wasting API counts sending notifications to long-gone users.
    - **_Invalid Device Tokens_** (flagged by iOS and Android servers) are now _automatically removed_ from profiles
    - _**Devices will no longer receive notifications from multiple users**_ - if your app allows users to log in and out, it was possible to end up with multiple users with the same hardware device token. This is no longer possible - a token can now be associated with one and only one user.  That said, if you allow users to log out, you will call the new _RemoveDeviceToken()_ call just before the logout, to ensure that the user's profile no longer refers to the device.
    - There is a new **Delete All Tokens** menu option in the **Design | Notifications | Settings** screen, which allows you to clear all tokens of specific type (iOS, Android, etc.).  This is useful for when you switch between Sandbox and Production certificates on iOS, and you want to delete all the old tokens.
- **Redemption Code Improvements** - we've made some changes under the covers to make our implementation more efficient at high volumes of codes. The biggest change is that scan codes are no longer local to a code type, but are now global across all code types for an app id. This saves us a bunch of index space, and in practice better matches the datasets of our customers anyway.
- **API Pre- and Post- Hook Improvements** - we've improved the capabilities of **API Pre- and Post- Hooks**. As you may or may not know, Pre- and Post- hooks allow you to change the behaviours of brainCloud's API calls themselves - inserting code to be run before and/or after the API call completes. Pre-hooks can now have the ability to change the parameters being sent into the API call.  And Post-hooks can now access the original parameters sent to the API (providing useful context).
- **Updated Unreal plug-in** - Finally, we've made improvements to our _Online Subsystem_ portion of our Unreal 4 libraries.

 

## Portal Changes

Changes to the portal:

- **Moved Email Authentication section** - we've moved the _Email Authentication_ settings from the _Advanced Settings_ page to their own page under **Design | Authentication**.
- **New Integrations section** - we've added a new **Design | Integrations** section, which currently contains only the Segment integration from our new DataStream feature
- **Revamped Notification Settings** - the settings dialogs have been revamped to be clearer, and we've added an expiry drop-down.  You can also choose to delete existing iOS or Android device tokens.
- **Get Test Redemption Codes** - you can now search your datafill for a redemption code to use during testing.  You the Type and State of the code, and brainCloud will display the first one that matches. Available from the **Global Monitoring | Redemption Codes** screen.
- **Reset Universal Authentication passwords** - you may now reset the password of Universal Authentication users via the design portal. Simply choose the _Set Password_ option in the new action menu displayed in the _Credentials_ section of the **User Monitoring | User Summary** page.
- **Managing Device Tokens** - device tokens are used to push notifications to iOS and Android devices. The device tokens section of the **User Summary** page has been updated to display when the token was last registered (note - brainCloud only applies the first registration within a 24-hour period), and has a new **\[Reset Device Tokens\]** button to delete all the existing tokens for this user.

 

## API Changes / Additions

Changes and additions to the API:

- **Push Notification Tokens** - two methods have been added to allow client apps greater control over the device tokens associated with user accounts.  DeregisterPushNotificationDeviceToken() will delete the associated device token from the user profile (), and DeregisterAllPushNotificationDeviceTokens() will delete all tokens associated with the user... (useful if you app contains a global toggle to disable all notifications to the user - as it will delete all notification tokens for this user, not just the token associated with the current device).
- **DataStream Events** - as mentioned in the highlights section above, new API calls have been added for custom DataStream events

 

## Miscellaneous Changes / Fixes

Additional improvements to this release:

- Adjusted S2S Explorer so that it returns results in alignment with the API Explorer
- Added GlobalApp proxy to Cloud Code bridge
- Refactored C++ Comms to push common code into a single class
- Fixes to API Hook error handling - more descriptive error messages
- Miscellaneous fixes and performance improvements
