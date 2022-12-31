---
title: "Release 2.6.0"
date: "2015-03-13"
tags: 
  - "release-history"
---

Fresh from GDC - it's release 2.6 - Con Plague edition!

_(Just kidding - other than lack of sleep, we're good.)_

In addition to the GDC rush of new game devs, _over the past few months, we've had a surprising number of developers sign-up to use brainCloud for apps \*other\* than games._ They've wisely recognized that gaming (and brainCloud in particular) is ahead-of-the-curve in terms of engaging and monetizing users - and want to take advantage of brainCloud's advanced features (like push notifications, pricing controls, receipt validation and promotions) in a non-gaming context.

Hey, who are we to argue - the more the merrier!  So, to make them feel more welcome, we've combined some work we were already doing (to better standardize our usage of terms throughout the portal) with the ability to hide confusing gaming-related features from the non-initiated.  We hope you agree that the result is more consistent, and more welcoming to developers of all types of apps.

For the full details on this week's update, keep reading! :)

### Highlights

- **New Global Leaderboard APIs** - quickly view the leaderboard around the player's score, plus paging support
- **Portal Polish** - we've taken a pass over the terminology used in the portal to make it more consistent, as well as more understandable by all types of developers

### Portal Changes

- **Show/hide Game Features** - To make things less confusing for the folks building non-game apps on top of brainCloud, we've added an ability to hide the gaming features (such as Leaderboards, Achievements, Multiplayer, etc.)
- **Create app flow** - improved flow for creating new apps, with more consistent usage of terms throughout the portal.
- **Consistent terms** - more consistent usage of terms throughout the portal.
- **End-User Forgotten Password** - You can now trigger the _Forgotten Password_ feature for any end user that is using E-mail authentication.  Just click the \[envelope\] icon next to any Email-authentication type credential at the bottom of the **User Summary** page.
- The **Versioning** page has been renamed to **Platforms**

### API Changes / Additions

- **(New) Paged Leaderboards** - call **GetGlobalLeaderboardPage()** to get a subset of the leaderboard, starting at a specified entry
- **(New) Relative Leaderboards** - call **GetGlobalLeaderboardView()** to get a view of the leaderboard centered around a player
- **(Updated) Authenticate\*() API methods** - now return complete Player State information - eliminating the need for a redundant ReadPlayerState() call when apps first start

### Misc Changes

- You can now send Events from the S2S interface
- Exporting and Importing of metadata files now uses consistent, lower-case filename extensions
- Improvements / updates to the API docs
- Mix fixes and performance updates
