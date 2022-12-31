---
title: "Release 2.11.0"
date: "2015-06-30"
tags: 
  - "release-history"
---

We've got a bunch of fixes and tweaks for you this week, plus a game to play with your family on the holiday week-end!

[![Icon_BCBombers](images/Icon_BCBombers-150x150.png)](/apidocs/wp-content/uploads/2015/06/Icon_BCBombers.png)

## Release Highlights

Highlights of this release include:

- **brainCloud Bombers** - we're pleased to announce the availability of our new example game, **brainCloud Bombers!** Bombers is intended to show how well brainCloud works with other multiplayer tech, like Exit Games Photon. The source for the game is available here, and we've written several posts that talk about how the game was built and what features it uses. [Check it out!](/apidocs/tutorials/unity-tutorials/braincloud-bombers-example-game/)

- **Leaderboard changes** - we've made some changes to the way that leaderboard versioning / retention works. We used to version leaderboards based on a fixed start date + rotation period - which seemed pretty logical, but caused problems if you wanted to adjust the ration period/date+time, and \*didn't\* want to lose all your old leaderboards - d'oh! So we've changed that. Now if you adjust your leaderboard settings, they affect the leaderboard behaviour going forward, but do \*not\* affect the old leaderboard data at all. We've also fixed some inconsistencies in our display of leaderboard date+time settings. Finally, to top it all off, we've added new APIs to request data from old leaderboards.

 

## Portal Changes

Minor changes to the portal:

- **Design | Leaderboards** - fixed the leaderboard rotation date/time display to focus on when the next leaderboard rotation occurs, and to clarify UTC vs. local time settings. We've also changed how the "Retained Leaderboards" setting works. It used to include the "current" leaderboard in the count - so you'd have to set it to "2" to retain "1" leaderboard in addition to the current one.  This was confusing, so we fixed it. _Don't worry - we're retaining your previous setting - so if you had it set to "2" before, it will now show "1" - but the two are equivalent._
- **Global Monitoring | Leaderboards** - leaderboard entries now show the exact date+time of the entry.
- **Design | Multiplayer | Offline Match-Making** - the _Match Expiry Timeout_ is now configurable on a per-game basis
- **Global Monitoring** - the tabs have been reordered slightly.
- **Authentication | External Identities** - minor changes to the screen

 

## API Changes / Additions

Minor additions and behavioural changes to the APIs:

- **(New) Historical Leaderboard calls** - we've added the ability to retrieve old leaderboards results.
    - To retrieve a list of older versions of the leaderboard, call **`GetGlobalLeaderboardVersions()`**.
    - To retrieve the entries for a specific version, call **`GetGlobalLeaderboardPageByVersion()`**.
- **(New) Looking up friends** - we're adding support for looking up friends. More methods will be added next release.
    - **`GetFriendProfileInfoFromExternalId()`** to look up other users based on their external id (returns the friend's summary data).
- **(Change) User Entity Version exception handling**
    - All variations of Update and Delete for user entities now throw an exception if the provided version is incorrect.  \[Used to simply return a null object\]
- **(Change) Cloud Code changes**
    - Added the missing ServiceProxy for accessing **Global Properties** from cloud code
    - **Script return format** has been updated to include separate status + data, to better align with the Client API.
    - The old behaviour is preserved if _**\[x\] Use Legacy Script Result Format**_ is checked under _Compatibility Settings_ in **Design | Core App Info | Advanced Settings**. The old behaviour will be preserved by default for existing apps (though it is highly recommended that developers migrate to the new format when convenient).

 

## Misc. Changes / Fixes

Addressed in this release:

- **Change to XP level processing** - you can now configure rewards for Experience Level 1, and assuming the level's XP requirement is set to 0 points, the player will automatically receive the rewards upon creation. _This is very useful for setting initial virtual currency balances._
- **Global Stats Synchronization** - fixed issue with Global Stats not being synchronized across app servers (and in the portal) in some circumstances
- **brainCloud now _requires_ encrypted (HTTPs) connections** for all new apps moving forward (_this was optional before_).
- **C++ and C# Client Libs** - now retrieve heartbeat configuration settings from the server, and dynamically determine if a heartbeat needs to be sent. This should result in fewer API calls to keep your app sessions alive.
- **Unity Toolbar** - An Enable logging option has been added
- The old **`GetGlobalLeaderboard()`** API call has been deprecated (and removed from the API explorer and the documentation). It will still work for now, but you should use one of the newer methods, like **`GetGlobalLeaderboardPage()`** instead.
- **API Explorer** - **`Gamification.UpdateRewards()`** method was missing - has been added Javascript client lib - Improved handling of optional parameters.
- **brainCloud Support Chat** has been added to the API docs site - just click on the Chat button for help!
- **Database optimization** - Improved sharding of Global Entities
- **Attributes** - Fixed an issue where attempting to remove user attributes would fail.
- Miscellaneous fixes and performance improvements
