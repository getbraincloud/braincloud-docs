# Leaderboard
## Overview



Leaderboards are key for building communities around your application.  A leaderboard is an aggregation of player scores.  Leaderboards are retrieved, assembled, and sorted on the server.  <%= data.branding.productName %> provides fast real-time access to leaderboards.

Multiple leaderboards can be configured for the application.  Leaderboards can be configured as to how posted scores will be handled (e.g. player's highest score only, accumulate player's score, current posting, …) and how the leaderboard resets (daily, weekly, monthly, yearly, or not at all).

Leaderboards can be viewed from a global perspective or a social perspective. The global perspective comprises the entire leaderboard with an order imposed on it.  Each posted score will have a zero-based index and a one-based rank based on the imposed order.  The social perspective comprises a subset of the overall leaderboard consisting of the player, the player's friends, and the pacers configured for the leaderboard.

Leaderboard tournaments are supported and are applied to the social perspective after the leaderboard resets.

Pacers provide a set of "pseudo-friends" with pre-defined scores for the social leaderboard perspective and are useful for motivating players at the beginning of the reset period (before enough new scores have been posted).

There are five categories of leaderboard APIs:

- those relating to leaderboard score postings
- those for retrieving a player's social leaderboard
- those for retrieving global leaderboard entries
- those for retrieving historical versions of global leaderboards
- those relating to tournaments

Note that <%= data.branding.productName %> also supports the concept of dynamically created leaderboards – which are leaderboards that are created on the fly via client code, instead of ahead-of-time via the design portal. Dynamic leaderboards can be useful if your game has a leaderboard for each level, and has so many levels that datafilling them via the tool would be cumbersome!

The leaderboard APIs are detailed below in order of the categories list above.

Valid sort keys for the retrieval APIs:

- "HIGH_TO_LOW" – returns leaderboard entries in standard order (high scores at the top, lower scores at the bottom)
- "LOW_TO_HIGH" – returns leaderboard entries in reverse order (lower scores at the top, higher scores at the bottom)

Keys for posting to dynamic leaderboards:

- Leaderboard type – defines how the leaderboard will behave and be interpreted.
  - "HIGH_VALUE" – player's score is posted only if it is higher than the player's previously posted score
  - "LOW_VALUE" – player's score is posted only if it is lower than the player's previously posted score
  - "CUMULATIVE" – player's score is added to the player's previously posted score
  - "LAST_VALUE" – player's score replaces the player's previously posted score
  - "ARCADE_LOW" – multiple player's scores are allowed to post and ranked in ascending order (i.e. lower scores are better) 
  - "ARCADE_HIGH" – multiple player's scores are allowed to post and ranked in descending order (i.e. higher scores are better)

- Rotation type – defines when the leaderboard will reset.  At reset, the leaderboard becomes the most recent retained version.
  - "NEVER" – leaderboard does not reset (i.e. perpetual)
  - "DAILY" – leaderboard resets once per day at the defined reset timestamp
  - "WEEKLY" – leaderboard resets once per week at the defined reset timestamp
  - "MONTHLY" – leaderboard resets once per month at the defined reset timestamp
  - "YEARLY" – leaderboard resets once per year at the defined reset timestamp
- Rotation reset – Timestamp at which the leaderboard will next reset.  The reset timestamp is applicable only to a leaderboard that has been configured to reset (i.e. rotation types other than "NEVER").  The timestamp is specified as a formatted - string and can be provided in either of two formats: "dd-MM-yyyy"  or "dd-MM-yyyy  HH:mm" (note: all numeric digits).
- Retained count – the number of leaderboard versions (including the current leaderboard) that will be retained (e.g. set to 1 will keep only the current period's leaderboard).  The maximum is 8, which will keep the current period's leaderboard, - plus the 7 previous periods' leaderboards.  Retained count is only applicable to a leaderboard that resets.

Notes regarding the data returned by the leaderboard calls:

- timeBeforeReset – returns the time until the next leaderboard reset in milliseconds.

### API Summary

### Global Leaderboard Views

* [GetGlobalLeaderboardView](/api/capi/leaderboard/getgloballeaderboardview) - view the global leaderboard centered around this user's score
* [GetGlobalLeaderboardPage](/api/capi/leaderboard/getgloballeaderboardpage) - view a page of the global leaderboard
* [GetGlobalLeaderboardEntryCount](/api/capi/leaderboard/getgloballeaderboardentrycount) - returns the # of entries in the leaderboard
* [GetGlobalLeaderboardVersions()](/api/capi/leaderboard/getgloballeaderboardversions) - Retrieve information about the retained versions for the leaderboard (sorted newest to oldest).


### Social Leaderboard Views

* [GetSocialLeaderboard](/api/capi/leaderboard/getsocialleaderboard) - retrieve a leaderboard filtered to this user's friends
* [GetMultiSocialLeaderboard](/api/capi/leaderboard/getmultisocialleaderboard) - retrieve the results of several leaderboards, filtered to this user's friends. Handy for Candy Crush-style maps.
* [GetGroupSocialLeaderboard](/api/capi/leaderboard/getgroupsocialleaderboard) - retrieve a leaderboard filtered to the specified group
* [GetPlayersSocialLeaderboard](/api/capi/leaderboard/getplayerssocialleaderboard) - retrieve a leaderboard filtered to a specific set of players
* [GetPlayersSocialLeaderboardByVersion()](/api/capi/leaderboard/getplayerssocialleaderboardbyversion) - Retrieve a sorted, social leaderboard of the specified list of players by version.


### Posting Scores

* [GetPlayerScore](/api/capi/leaderboard/getplayerscore) - retrieves the player's score in the leaderboard
* [GetPlayerScoresFromLeaderboards](/api/capi/leaderboard/getplayerscoresfromleaderboards) - retrieves the players score from multiple leaderboards
* [PostScoreToLeaderboard](/api/capi/leaderboard/postscoretoleaderboard) - post a score to the specified leaderboard
* [PostScoreToDynamicLeaderboardUTC](/api/capi/leaderboard/postscoretodynamicleaderboardutc) - post a score to a leaderboard (creating the leaderboard if it doesn't already exist)
* [PostScoreToDynamicLeaderboardDaysUTC](/api/capi/leaderboard/postscoretodynamicleaderboarddaysutc) - post a score to a leaderboard (creating the leaderboard if it doesn't already exist) based on an arbitrary number of days rotation
* [PostScoreToLeaderboardOnBehalfOf](/api/capi/leaderboard/postscoretoleaderboardonbehalfof) - post score to another player's score
* [RemovePlayerScore](/api/capi/leaderboard/removeplayerscore) - Remove the players


### Group Leaderboards

* [GetGroupLeaderboardView](/api/capi/leaderboard/getgroupleaderboardview) - leaderboard results (of version) that centers on the current group
* [GetGroupLeaderboardViewByVersion](/api/capi/leaderboard/getgroupleaderboardviewbyversion) - leaderboard results that centers on the current group
* [PostScoreToGroupLeaderboard](/api/capi/leaderboard/postscoretogroupleaderboard) - post the group score to the given group leaderboard
* [PostScoreToDynamicGroupLeaderboardUTC](/api/capi/leaderboard/postscoretodynamicgroupleaderboardutc) - post the group score to the given group leaderboard (creating the leaderboard if it doesn't already exist)
* [RemoveGroupScore](/api/capi/leaderboard/removegroupscore) - removes the group's score data from the specified group leaderboard

### Leaderboard Managerment

* [ListAllLeaderboards](/api/capi/leaderboard/listallleaderboards) - retrieves a list of all leaderboards
* [CreateLeaderboard](/api/capi/leaderboard/createleaderboard) - creates a leaderboard
* [EditLeaderboard](/api/capi/leaderboard/editleaderboard) - updates a leaderboard
* [DeleteLeaderboards](/api/capi/leaderboard/deleteleaderboards) - deletes a leaderboard
* [SysResetNeverLeaderboard](/api/capi/leaderboard/sysresetneverleaderboard) - manually reset a never-rotating leaderboard
* [SysCreateLeaderboard](/api/capi/leaderboard/syscreateleaderboard) - Create a new player or group entry leaderboard configuration.
* [SysEditLeaderboard](/api/capi/leaderboard/syseditleaderboard) - Edit a player or group entry leaderboard configuration.
* [SysCreateLeaderboardConfig](/api/capi/leaderboard/syscreateleaderboardconfig) - Creates a leaderboard configuration, with support for tournament leaderboards.
* [SysEditLeaderboardConfig](/api/capi/leaderboard/syseditleaderboardconfig) - Edits a leaderboard configuration, with support for tournament leaderboards.
* [SysGetLeaderboardConfig](/api/capi/leaderboard/sysgetleaderboardconfig) - Returns leaderboard configuration information, including tournament settings, for future and current (active) version of the specified leaderboard.
* [SysListLeaderboardConfigs](/api/capi/leaderboard/syslistleaderboardconfigs) - Returns list of applicable leaderboards, with summary leaderboard configuration information, including tournament flags, if applicable. Any supported optionsJson flag not specified will default to false.
* [SysEditTournamentSettingsForFuturePeriodsOnly](/api/capi/leaderboard/sysedittournamentsettingsforfutureperiodsonly) - Updates the tournament settings for the leaderboard configuration, for future recurring periods only (does not affect current rotation). Supported tSettingsJson settings include: 'tTournament' (with 'tConfigs' to configure tournament templates, 'tAutoJoin' flag, 'tAutoClaim' flag), and 'tPhases' (to schedule 'enrolMins', 'announcementMins', 'disallowMins' and 'bufferMins' minutes).
* [SysEditTournamentSettingsIncludingCurrentPeriod](/api/capi/leaderboard/sysedittournamentsettingsincludingcurrentperiod) - Updates the tournament settings for the leaderboard configuration, for the current period in progress, as well as the future periods if recurring periods (not ADHOC). Supported tSettingsJson settings include: 'tTournament' (with 'tConfigs' to configure tournament templates, 'tAutoJoin' flag, 'tAutoClaim' flag), and 'tPhases' (to schedule 'enrolMins', 'announcementMins', 'disallowMins' and 'bufferMins' minutes), and, if ADHOC tournament in progress, API also supports 'tPeriod' duration settings ('durationDays', 'durationDays', 'durationDays').
* [SysCreateAdhocTournamentPeriod](/api/capi/leaderboard/syscreateadhoctournamentperiod) - Schedules a new tournament period for the ADHOC leaderboard configuration. Tournament must be scheduled in the future. Tournament settings ('tSettingsJson') must include tournament period ('tPeriod'), tournament configs and associated flags ('tTournament') and tournament phases ('tPhases').
* [SysEditAdhocTournamentPeriod](/api/capi/leaderboard/syseditadhoctournamentperiod) - Updates a future ADHOC tournament period scheduled for the leaderboard configuration, identified by the existing period's UTC startingAt time, in milliseconds. Period being edited must be scheduled in the future, not in-progress. Tournament settings may include tournament period ('tPeriod'), tournament configs and associated flags ('tTournament') and tournament phases ('tPhases').
* [SysDeleteAdhocTournamentPeriod](/api/capi/leaderboard/sysdeleteadhoctournamentperiod) - Deletes a future ADHOC tournament period scheduled for the leaderboard configuration, identified by the existing period's UTC startingAt time, in milliseconds. Period being edited must be scheduled in the future, not in-progress. Tournament settings may include tournament period ('tPeriod'), tournament configs and associated flags ('tTournament') and tournament phases ('tPhases').
  

<DocCardList />