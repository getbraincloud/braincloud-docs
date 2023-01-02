---
title: "Release 2.12.0"
date: "2015-07-24"
tags: 
  - "release-history"
---

## Release 2.12.0

Release 2.12.0 has gone public! There are some tasty goodies in this one - please read below for the highlights!

## Release Highlights

Highlights of this release include:

- **Scheduled Cloud Code** \- you can now schedule cloud code scripts to run at a specific time. This tool is very powerful and gives you the ability to defer task execution as benefits your game/app.  See [this page](/learn/cloud-code-central/handy-cloud-code-scripts/scriptscheduler-script/) for more information on how to use this great new feature.
- **Paged Global Entity Fetches** \- it is now possible to retrieve more than 100 Global Entities. We've created a new paging system that allows you to navigate a larger set of Global Entities. The paging APIs use a sophisticated query syntax which gives you search and ordering flexibility. The query syntax is described [here](/api/appendix/genericpagedqueries) and the API itself can be found [here](/api/capi/globalentity/getpage).
- **Support for "Lower Is Better" Leaderboards** \- You can now create Leaderboards where the best score kept will be the lowest score the user has posted.
- **S3 File Listing** - we've created a new API that makes it even easier to fetch the list of files uploaded to S3.

## Portal Changes

- **Global Monitoring | Job Queue** \- this is where you'll find details about scheduled cloud script jobs. We also keep a history of jobs that have run in the past which is useful when diagnosing issues with your scripts.
- **Design | Quests** - now include Unlock Criteria, and Rewards which can use any combination of user level/XP, player statistics or global statistics. Rewards can also pay out currency and/or achievements.
- **Misc Fixes**

## API Changes / Additions

### New APIs

- **Schedule Cloud Code** \- To schedule cloud code you can use one of these [APIs](/api/capi/script/schedulerunscriptminutes).
    - **BrainCloudScript.ScheduleRunScriptUTC()** for an absolute date.
    - **BrainCloudScript.ScheduleRunScriptMinutes()** for scheduling x minutes from now.
- **Global Entity Paged Fetches** \- To fetch global entities by Page
    - **BrainCloudGlobalEntity.GetPage()** \- Call this for the first fetch, specifying the fetch query
    - **BrainCloudGlobalEntity.GetPageOffset()** \- Call this for subsequent fetches passing in the returned context variable
- **BrainCloudFriend.FindPlayerByName()** \- This API allows you to search for a player by their player name (settable using "BrainCloudPlayerState.UpdatePlayerName)
- **Attach/Detach Google Identity** \- To allow you to attach and detach Google identities.
    - **BrainCloudIdentity.AttachGoogleIdentity()**
    - ****BrainCloudIdentity.MergeGoogleIdentity()****
    - **BrainCloudIdentity.DetachGoogleIdentity()**
- **BrainCloudS3Handling.GetFileList()** \- To retrieve the full list of S3 files stored on brainCloud

### Modified APIs

- **BrainCloudSocialLeaderboard** \- Calls to TriggerSocialLeaderboardTournamentReward now require the use of a leaderboardId to identify the leaderboard.

## Misc. Changes / Fixes

Addressed in this release:

- **Unity library IsAuthenticated** \- Session time outs will now cause this flag to be set to false.
- **Post score to dynamic leaderboard** \- APIs now take in the hour/minute to allow setting the rotation time.
