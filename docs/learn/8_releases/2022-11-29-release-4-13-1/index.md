---
title: "Release 4.13.1 is live!"
date: "2022-11-29"
categories: 
  - "release-history"
---

This is a small, targeted release with a few key improvements. This is also our last planned release before the December holiday season.

_Note that this is a server-only release. There are no changes to the client libraries._

* * *

## Release Highlights

### Client API Blocking

We have added a new feature that makes it easier to secure your app from mischievous players.

Devs have always been able to add an API Pre-hook to block specific calls from the client - but this is painful to set up - and results in additional API counts for the app.

Configuring the new **API Blocking** feature is as simple as going to the new **Design | Cloud API | API Blocking** page, and selecting the _Services_ + _API Calls_ to block. Hit SAVE and you are done! (Or more likely, you are once you deploy those changes to your production app.)

We hope this new feature helps our customers to keep ahead of their most competitive (and ill-mannered) players.

_Note that this feature requires a Plus plan to activate._

_Note also that certain calls, like the_ `Award()`, `Consume()` and `Reset()` currency _calls, may already be blocked from the client depending based on the compatibility settings on the **Design | Core App Info | Advanced Settings** page._

### Leaderboard “Days” rotation increase

This is a small change - but apps using the arbitrary “Days” rotation for their leaderboards can now set the rotation as high as 28 days…. ← the previous limit was 14 days.

* * *

## Portal Changes

We've made the following portal changes:

### **Design**

- **Cloud Code | API Blocking**
    - A new screen that allows devs to block specified APIs from being callable from the client.

![](images/2022-11-24_16-13-31-1024x442.png)

- **Leaderboards |** 
    - Leaderboards can now be configured with a 28 day rotation.

* * *

## API Changes

There are no changes to individual API calls, but the new API Blocking feature means that any client API call can now return the following error:

```
{
  "status_message": "Processing exception (message): Call blocked from client.",
  "reason_code": 40346,
  "status": 403
}
```

* * *

## Miscellaneous Changes / Fixes

- Additional Fixes
    - BCLOUD-3305 and BCLOUD-3331 - Improvements to resetting of end-user passwords. Now preventing double-clicks, and waiting until code has been successfully changed to remove the link code.
    - BCLOUD-3109 - Improvements to json response exception reporting from scripts
    - BCLOUD-3295 - Corrected permissions check on app passwords feature
    - BCLOUD-1518 - Fix to lobby screen - disband on start no longer automatically selected
    - BCLOUD-3362 - Fix to serialization issue for cloud code version of `LobbyService.GetLobbyInstances()`
- Plus miscellaneous fixes and performance enhancements...
