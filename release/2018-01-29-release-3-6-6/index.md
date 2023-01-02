---
title: "Release 3.6.6"
date: "2018-01-29"
tags: 
  - "release-history"
---

This release is a minor update with some key optimizations and defect fixes.

## Feature Highlights

### Faster Leaderboards and Tournaments

We've spent considerable time profiling and optimizing key tournament and leaderboard APIs - we think you'll like the results:

- [GetGlobalLeaderboardView()](/api/capi/leaderboard/getgloballeaderboardview) is now up to **25X faster!** This is especially apparent for leaderboards of 50K or more users where the player doing the retrieval is near the end of the leaderboard
- PostTournamentScoreWithResults() is also up to **50X faster!** We had recently pulled that call out-of-service due to performance issues - we hope to reinstate it in a few days after we've got more real-world data

### Miscellaneous Fixes

The following defects have been addressed in 3.6.6:

- BCLD-2782 - Portal: Trying to "View Team" from Super > Users switches to random team instead of the selected team
- BCLD-2777 - Portal: When adding to the Job Queue, the "Save" button becomes available without selecting a script
- BCLD-2793 - Portal: Super - System Properties' Categories drop-down does not function properly once a category is selected
- BCLD-2847 - Portal: Part of WebHook URL changes to "null" after saving and re-opening it
- BCLD-2821 - Portal: User Monitoring | Statistics - always shows "0 records"
- BCLD-2802 - Portal: dropdown/context menu on Design | Custom Config | Files appears partly off the right side of screen
- BCLD-2861 - Portal: Core App Info | Admin Tools - Deployment: Checkbox of second option gets checked while clicking on the text of the third option.
- BCLD-2786 - Portal: Mouse-over texgt is either missing or incorrect (multiple locations)
- BCLD-2856 - API: In some cases, non-shareable files can be downloaded without a session
- BCLD-2826 - API: Leaderboard: GetGlobalLeaderboardView ranges now working properly with duplicate scores
- BCLD-2830 - API: PostTournamentScoreWithResults reports the wrong error if a player is not registered
- BCLD-2813 - Portal: Super user cannot perform "Sys Enable" action to enable an app that has been previously disabled
- BCLD-2824 - Portal: Design | Integrations - the first three fields for SendGrid integration should have \* next to titles to indicate required
- BCLD-2825 - API: PostScoreToLeaderboard fails on any leaderboard that _ever_ had a tournament attached

* * *

## Portal Changes

There are no changes to the portal in this release.

* * *

## API Changes

The following changes/additions have affected the brainCloud API:

- **Tournament**
    - `PostTournamentScoreWithResults()` - we have removed the `previousLeaderboard` section of the returned JSON. It was debugging information that mistakenly got left in the response during initial development.
- **Client Library**
    - We have added a new `IGNORE_SSL_CHECK` compiler directive to the C# library. Useful for when connecting an app to a developer-deployed brainCloud instance.

* * *

## Miscellaneous Changes / Fixes

- Updated libraries
    - All libraries have been updated with the refactoring and latest API enhancements. We recommend that all apps upgrade!
- Important Fixes
    - See the list in the Feature section
- Plus miscellaneous fixes and performance enhancements...
