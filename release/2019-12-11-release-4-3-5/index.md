---
title: "Release 4.3.5"
date: "2019-12-11"
tags: 
  - "release-history"
---

This is a small release that addresses some specific customer requests.

## Release Highlights

### Quest Management API

We’ve added an API for managing Quests. The API is available directly via S2S, and also via cloud-code.

In doing this work, we cleaned up two aspects of Quests:

- We added a new `title` field to Quests - to make them easier to manage
- We have also made the new APIs return the embedded _milestones_ (which we call _tasks_) in an array field called `tasks` now instead of the old `milestones` field. 

To prevent issues with existing apps, a new _compatibility flag_ has been added to control this behavior (accessible from the **Design | Core App Info | Advanced Settings**) page. The compatibility flag defaults to _on_ for existing apps.

The Quest Management API methods are part of the `Gamification` service.

### Milestone Management API

And, if you can edit Quests, it only makes sense that you can edit Milestones as well! So there is now an API for that as well.

The Milestone Management API methods are part of the `Gamification` service.

### Reset Password APIs

We have added some new cloud-code accessible APIs for triggering password reset emails. These APIs are mostly useful if you are building a management portal for your app.

You'll find these new APIs in the `User` service.

### Custom Entity Paging

Finally, we’ve tweaked our Custom Entity paging APIs to be more consistent with the other Entity APIs. They now take a single context object instead of requiring each of the component parts to be sent in separately.

_Since Custom Entities are still in beta, we’re being more aggressive than usual about replacing those old methods. The old methods are being removed immediately from the 4.3.5 libraries. That said, moving to the new versions is super simple, and the old libs will continue to work for you for now._

* * *

## Portal Changes

There aren’t a lot of portal changes in this release.

### Design

- **Core App Info | Advanced Settings**
    - A new compatibility flag, _Return milestones field instead of tasks field for older client Quest APIs,_ has been added. As usual, this flag defaults to _enabled_ for _existing apps_, and _disabled_ for _new apps_.
- **Gamification | Quests**
    - Quests now have a separate _title_ from the _description_ field
    - When editing pre-existing Quests, the _title_ will default to the _questId_.

* * *

## API Changes

The following changes/additions have affected the brainCloud API:

- **CustomEntity**
    - New Paging calls - `GetEntityPage()`, `GetEntityPageOffset()`, `SysGetEntityPage()`, `SysGetEntityPageOffset()`
- **Gamification**
    - New _Quest Management_ API calls - `SysCreateQuest()`, `SysReadQuest()`, `SysUpdateQuest()`, `SysDeleteQuest()`, `SysAddQuestTask()`, `SysUpdateQuestTask()`, `SysDeleteQuestTask()`, `SysReorderQuestTasks()`, `SysGetQuestPage()`, `SysGetQuestPageOffset()`
    - New _Milestone Management_ APIs calls - `SysCreateMilestone()`, `SysReadMilestone()`, `SysUpdateMilestone()`, `SysDeleteMilestone()`, `SysGetMilestonePage()`, `SysGetMilestonePageOffset()`
- **User Service**
    - New APIs for _triggering Password Reset emails_ - `SysSendPasswordResetEmail()`, `SysSendPasswordResetEmailAdvanced()`, `SysSendPasswordResetUniversalId()`, `SysSendPasswordResetUniversalIdAdvanced()`

We have deprecated the following methods:

- **CustomEntity**
    - `GetPage()`, `GetPageOffset()`, `SysGetPage()`, `SysGetPageOffset()` - replaced with the new versions described above, which are more consistent with our other Entity APIs.

* * *

## Miscellaneous Changes / Fixes

- Updated libraries
    - There are only two new Client-library API calls - the new `GetEntityPage()` and `GetEntityPageOffset()` calls of the CustomEntity service. All other calls are cloud-code only.
- Documentation updates
    - The new API calls have been added to the APIRef
- Important Fixes
    - **Uploaded File Types** - we have enhanced brainCloud to automatically assign content types based on file extensions when uploaded via the portal, instead of blindly setting everything to the generic application/octet-stream content type. The old behavior was problematic for some devs when dealing with apps running in Internet Explorer. 
- Plus miscellaneous fixes and performance enhancements...
