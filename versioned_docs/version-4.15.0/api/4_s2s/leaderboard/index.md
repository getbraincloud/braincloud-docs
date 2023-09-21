# Leaderboard
## Overview



### API Summary

#### Leaderboard
* [DeleteLeaderboards](/api/s2s/leaderboard/deleteleaderboards) - Delete leaderboards.
* [CreateLeaderboard](/api/s2s/leaderboard/createleaderboard) - Create a leaderboard. Optional parameter,data, numDaysToRotate(but mandatory for 'DAYS' rotationType.
* [EditLeaderboard](/api/s2s/leaderboard/editleaderboard) - Edit a leaderboard. Optional parameter,data, numDaysToRotate(but mandatory for 'DAYS' rotationType.
* [ListAllLeaderboards](/api/s2s/leaderboard/listallleaderboards) - List all the leaderboards.
* [GetGlobalLeaderboardPage](/api/s2s/leaderboard/getgloballeaderboardpage) - Retrieve a page of the global leaderboard specified by the start and end indexes (0-based).
* [GetGlobalLeaderboardVersions](/api/s2s/leaderboard/getgloballeaderboardversions) - Retrieve information about the retained versions for the leaderboard (sorted newest to oldest).
* [GetGlobalLeaderboardEntryCount](/api/s2s/leaderboard/getgloballeaderboardentrycount) - Gets the number of entries in a global leaderboard.
* [PostScoreToLeaderboardOnBehalfOf](/api/s2s/leaderboard/postscoretoleaderboardonbehalfof) - Post score to another player's score.
* [SysCreateLeaderboard](/api/capi/leaderboard/syscreateleaderboard) - Create a new player or group entry leaderboard configuration.
* [SysEditLeaderboard](/api/capi/leaderboard/syseditleaderboard) - Edit a player or group entry leaderboard configuration.
* [SysResetNeverLeaderboard](/api/capi/leaderboard/sysresetneverleaderboard) - Resets a leaderboard configured with rotation strategy NEVER by incrementing its version.
* [SysCreateLeaderboardConfig](/api/capi/leaderboard/syscreateleaderboardconfig) - Creates a leaderboard configuration, with support for tournament leaderboards.
* [SysEditLeaderboardConfig](/api/capi/leaderboard/syseditleaderboardconfig) - Edits a leaderboard configuration, with support for tournament leaderboards.
* [SysGetLeaderboardConfig](/api/capi/leaderboard/sysgetleaderboardconfig) - Returns leaderboard configuration information, including tournament settings, for future and current (active) version of the specified leaderboard.
* [SysListLeaderboardConfigs](/api/capi/leaderboard/syslistleaderboardconfigs) - Returns list of applicable leaderboards, with summary leaderboard configuration information, including tournament flags, if applicable. Option 'filterType' defaults to 'standard', with additional supported filter types of 'all', 'tournament', 'divisions' and 'templates'.
* [SysEditTournamentSettingsForFuturePeriodsOnly](/api/capi/leaderboard/sysedittournamentsettingsforfutureperiodsonly) - Updates the tournament settings for the leaderboard configuration, for future recurring periods only (does not affect current rotation). Supported tSettingsJson settings include: 'tTournament' (with 'tConfigs' to configure tournament templates, 'tAutoJoin' flag, 'tAutoClaim' flag), and 'tPhases' (to schedule 'enrolMins', 'announcementMins', 'disallowMins' and 'bufferMins' minutes).
* [SysEditTournamentSettingsIncludingCurrentPeriod](/api/capi/leaderboard/sysedittournamentsettingsincludingcurrentperiod) - Updates the tournament settings for the leaderboard configuration, for the current period in progress, as well as the future periods if recurring periods (not ADHOC). Supported tSettingsJson settings include: 'tTournament' (with 'tConfigs' to configure tournament templates, 'tAutoJoin' flag, 'tAutoClaim' flag), and 'tPhases' (to schedule 'enrolMins', 'announcementMins', 'disallowMins' and 'bufferMins' minutes), and, if ADHOC tournament in progress, API also supports 'tPeriod' duration settings ('durationDays', 'durationDays', 'durationDays').
* [SysCreateAdhocTournamentPeriod](/api/capi/leaderboard/syscreateadhoctournamentperiod) - Schedules a new tournament period for the ADHOC leaderboard configuration. Tournament must be scheduled in the future. Tournament settings ('tSettingsJson') must include tournament period ('tPeriod'), tournament configs and associated flags ('tTournament') and tournament phases ('tPhases').
* [SysEditAdhocTournamentPeriod](/api/capi/leaderboard/syseditadhoctournamentperiod) - Updates a future ADHOC tournament period scheduled for the leaderboard configuration, identified by the existing period's UTC startingAt time, in milliseconds. Period being edited must be scheduled in the future, not in-progress. Tournament settings may include tournament period ('tPeriod'), tournament configs and associated flags ('tTournament') and tournament phases ('tPhases').
* [SysDeleteAdhocTournamentPeriod](/api/capi/leaderboard/sysdeleteadhoctournamentperiod) - Deletes a future ADHOC tournament period scheduled for the leaderboard configuration, identified by the existing period's UTC startingAt time, in milliseconds. Period being edited must be scheduled in the future, not in-progress. Tournament settings may include tournament period ('tPeriod'), tournament configs and associated flags ('tTournament') and tournament phases ('tPhases').

:::tip
All the client APIs that the names beigin with <strong>"Sys"</strong> <em>are</em> also available to S2S. 
For the usages of the S2S leaderboard APIs (if they are not listed at this section below),
refer to <%= data.branding.productName %> client [leaderboard](/api/capi/leaderboard) APIs.
:::

<DocCardList />