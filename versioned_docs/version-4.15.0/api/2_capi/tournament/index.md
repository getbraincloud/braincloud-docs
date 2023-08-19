# Tournament
## Overview



> `SYSTEM_TOURNAMENT_COMPLETE` event

```json-doc
{
  "eventData": {
    "leaderboardId": "bronzeTourney",
    "versionId": 40
  },
  "createdAt": 1485634987425,
  "fromPlayerId": "",
  "toPlayerId": "06d7b728-b797-41cc-a872-00a3188e151e",
  "eventType": "SYSTEM_TOURNAMENT_COMPLETE",
  "evId": "588cfdab9911cc728ee21eae"
}
```

The **TournamentService** API allows apps to interact with <%= data.branding.productName %>'s *Global Tournaments* feature.

Tournaments allow developers to automatically reward players based on their performance in leaderboards. Rewards can be virtual currencies, XP, stats and more.

To create an instance of a Tournament, you first create a *Tournament Template* - and attach it to a Leaderboard via the Design Portal.

Once a Leaderboard has a Tournament attached its behavior changes (i.e., you need to [join](/api/capi/tournament/jointournament) the tournament before you can post scores, etc.)

At the end of a Tournament cycle (i.e. period), players are sent a `SYSTEM_TOURNAMENT_COMPLETE` event indicating that the tournament has completed. If there is a reward, the app should [claim it](/api/capi/tournament/claimtournamentreward).

For more information on how *Global Tournaments* work, see [Introducing Global Tournaments](http://getbraincloud.com/apidocs/introducing-global-tournaments/).

For more information on *Events*, see the [Events API](/api/capi/event).


:::tip
Pro-tip: There are two fields, <strong>tRank</strong> and <strong>rank</strong>, in our tournament system. The former repesents the tournament ranking for the score (with tied tournament scores will be having the same tRank), the latter
repesents the leaderboard ranking, it will be unique, so even tied scores will be given a different leaderboard <em>rank</em> (with the most recently posted "tied' score having a better rank).
:::

### Tournament Divisions

Tournaments with too many players can be less enticing to players because they have a smaller chance to win. *Divisions* solve this problem by arbitrarily breaking smaller groups - eg. 100 players each. We call each mini-competition a *Division Instance*.

*Divisions Instances* only exist for a single tournament period. Once the challenge period is complete, players are disbursed and will join new division instances as the next tournament cycle begins.

FYI - Division instances are essentially managed leaderboards, and are given special leaderboard ids to distinguish them. The ids, for example  `^D^weekly^55`, include an incrementing sequence number that identity the instance.

*Note - Divisions are not to be confused with Tiers. Tiers normally imply a ranking difference between players - eg. bronze, silver and gold. You can implement this notion in <%= data.branding.productName %> using a separate division set (or simply leaderboards+tournaments) for each tier - the management of ranking players up/down is up to the developer. Ask us for implementation suggestions if you are interested.*


### API Summary

### Tournaments

The following API calls are used for leaderboards with *Tournaments* attached:

* [GetTournamentStatus](/api/capi/tournament/gettournamentstatus) - view the state of a tournament
* [JoinTournament](/api/capi/tournament/jointournament) - join the specified tournament
* [LeaveTournament](/api/capi/tournament/leavetournament) - abandon the tournament
* [PostTournamentScoreUTC](/api/capi/tournament/posttournamentscoreutc) - post a score to the tournament
* [PostTournamentScoreWithResultsUTC](/api/capi/tournament/posttournamentscorewithresultsutc) - post a score to the tournament, and return the updated standings 
* [PostTournamentScoreOnBehalfOf](/api/capi/tournament/posttournamentscoreonbehalfof) - post another player's score to the tournament
* [ViewCurrentReward](/api/capi/tournament/viewcurrentreward) - preview the expected reward for the player based on their current rank in the tournament.
* [ViewReward](/api/capi/tournament/viewreward) - view the player's reward for a completed tournament. 
* [ClaimTournamentReward](/api/capi/tournament/claimtournamentreward) - claim the player's reward for a completed tournament.

Use the standard [Leaderboard Service](/api/capi/leaderboard) apis for retrieving player standings (i.e. [<code>GetGlobalLeaderboardPage</code>](/api/capi/leaderboard/getgloballeaderboardpage), [<code>GetGlobalLeaderboardView</code>](/api/capi/leaderboard/getgloballeaderboardview), etc.)


### Divisions
The following API calls are specific to *Divisions*:

* [GetDivisionInfo](/api/capi/tournament/getdivisioninfo) - get info about the specified division set. Call instead of `GetTournamentStatus()` to retrieve the prize rules and scheduling status of a division.
* [JoinDivision](/api/capi/tournament/joindivision) - join a division set (will be assigned to an instance). Call instead of `JoinTournament()`.
* [LeaveDivisionInstance](/api/capi/tournament/leavedivisioninstance) - leave a division instance. Call instead of `LeaveTournament()`.
* [GetMyDivisions](/api/capi/tournament/getmydivisions) - retrieves a list of the division instances that player is/has recently participated in

[PostTournamentScoreUTC](/api/capi/tournament/posttournamentscoreutc), [ViewCurrentReward](/api/capi/tournament/viewcurrentreward), [ViewReward](/api/capi/tournament/viewreward), and [ClaimTournamentReward](/api/capi/tournament/claimtournamentreward) all work as expected for divisions.


### System calls
* [SysCreateTournamentTemplate](/api/capi/tournament/syscreatetournamenttemplate) - Creates a new tournament template.
* [SysReadTournamentTemplate](/api/capi/tournament/sysreadtournamenttemplate) - Read a specific tournament template by tournament code and version.
* [SysEditTournamentTemplate](/api/capi/tournament/sysedittournamenttemplate) - Changes an existing tournament template.
* [SysListTournamentTemplates](/api/capi/tournament/syslisttournamenttemplates) - Lists all tournament templates.
* [SysDeleteTournamentTemplate](/api/capi/tournament/sysdeletetournamenttemplate) - Deletes the tournament template identified by the tournament code.
* [SysCreateDivisionSetConfig](/api/capi/tournament/syscreatedivisionsetconfig) - Creates a new division set configuration
* [SysDeleteDivisionSetConfig](/api/capi/tournament/sysdeletedivisionsetconfig) - Deletes the division set configuration uniquely identified by the division set id, with optional, additional enforcement.
* [SysEditDivisionSetConfig](/api/capi/tournament/syseditdivisionsetconfig) - Updates a division set configuration with specified changes.
* [SysListDivisionSetConfigs](/api/capi/tournament/syslistdivisionsetconfigs) - Lists all division set configurations for the app.
* [SysReadDivisionSetConfig](/api/capi/tournament/sysreaddivisionsetconfig) - Reads the current version of the division set configuration identified by the division set id.

<DocCardList />