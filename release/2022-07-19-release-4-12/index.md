---
title: "Release 4.12 is live!"
date: "2022-07-19"
tags: 
  - "release-history"
---

brainCloud 4.12 is a targeted release to get Nintendo Switch Authentication support in place before our summer holidays!

## Release Highlights

### Nintendo Switch Authentication

brainCloud now supports native Nintendo Switch authentication.

There are now Nintendo variants of all the standard _Authentication_ and _Identity_ calls – see the _API Changes_ section for more details.

Note that so far these calls have been added to the **Unity Client** library only. The Unreal Client libs will be added soon!

### Miscellaneous changes

- **Bridge-based DEBUG log messages are now free when not debugging!**  
    Calling the `bridge.logDebug()` and `bridge.logDebugJson()` calls have been heavily optimized to do nothing (when not called from the API Explorer or Script Editor) - so we no longer record API counts for these calls. Note that we _do_ still count API counts for debug log calls made from the `Logging` service itself ← since those calls still go through our full Dispatcher and DispatchHandler systems. So don’t do that – use the `bridge` methods instead!
- **GetUserItemsPage() performance has been improved**  
    The `GetUserItemsPage()` / `GetUserItemsPageOffset()` calls have been refactored to only refresh the items that are being returned by that page call… (instead of unnecessarily refreshing all items during the initial call).
- **Improved RTT WebSocket Disconnect Handling in Unreal**  
    In addition to triggering on websocket disconnects, our Unreal libraries now also use a heartbeat timeout to detect disconnects (useful in platforms like IOS where the disconnect notification can take a while to arrive).
- **Improved Country Code, Language Code, and TimeZoneOffset handling**  
    Both the Unity and Unreal client libraries have been enhanced to detect country code, language code, and timezone offset on more platforms (and we'll be making more improvements in the future).

* * *

## Portal Changes

We have made the following portal changes:

### Design Section

- **Core App Info | Platforms**
    - Added _Nintendo_ to the platforms list

### Monitoring

- **Global Monitoring | Custom Entities**
    - Added sortable _Updated At_ column to custom entity list screens
- **User Monitoring | Select User**
    - Added ability to search by _Nintendo_ (Network Services Account) ID
- **User Monitoring | User Summary**
    - A user’s _Nintendo ID_ will now be shown in the Credentials section of this screen
- **User Monitoring | Custom Entities**
    - Added sortable _Updated At_ column to custom entity list screens

### Reporting

- **Analytics**
    - Enhanced to show _Nintendo_ platform players  
        

* * *

## API Changes

The following changes/additions have affected the brainCloud API:

- **BrainCloudWrapper**
    - Added `AuthenticateNintendo()` and `SmartSwitchAuthenticateNintendo()` calls
- **Authentication Service**
    - Added `AuthenticateNintendo()` call
- **Identity Service**
    - Added `AttachNintendoIdentity()`, `DetachNintendoIdentity()` and `MergeNintendoIdentity()` calls

* * *

## Miscellaneous Changes / Fixes

- Updated libraries
    - 4.12 version of all client libs are available.
    - The Unity and Unreal libs in particular have significant features and improvements in this release - go grab 'em!
- Documentation updates
    - The latest APIs have been added to the API Reference.
- Important Fixes
    - BCLOUD-2298 - [Runstate erroneously set to disabled when executing one of the import/export tasks](https://playbrains.atlassian.net/wiki/spaces/BD/pages/2916188161/brainCloud+4.12+is+coming#)
    - BCLOUD-2191 - Cache ItemDef collection in app cache
- Plus miscellaneous fixes and performance enhancements..
