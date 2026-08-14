# Tournament






This service allows you to retrieve tournament config information

### API Summary

### Tournaments

* [GetTournamentConfigs](/api/s2s/tournament/gettournamentconfigs) - Creates a new tournament template.
* [PostTournamentScoreOnBehalfOf](/api/s2s/tournament/posttournamentscoreonbehalfof) - Post score to another user.
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
* [SysGetGroupDivisions](/api/capi/tournament/sysgetgroupdivisions) - Returns a list of the group's recently active divisions, organized by simplified tournament state: ACTIVE, PENDING, COMPLETE. Unlike GetGroupDivisions, this sys call does not require the caller to be a member of the group.
* [SysJoinGroupTournament](/api/capi/tournament/sysjoingrouptournament) - Enrolls a member's group in the group tournament and assigns an initial score. Unlike JoinGroupTournament, this sys call does not require the caller to be a member of the group.
* [SysLeaveGroupTournament](/api/capi/tournament/sysleavegrouptournament) - Removes a group from a group tournament. Unlike LeaveGroupTournament, this sys call does not require the caller to be a member of the group.
* [SysJoinGroupDivision](/api/capi/tournament/sysjoingroupdivision) - Enrolls a group in a division set and assigns an initial score. Unlike JoinGroupDivision, this sys call does not require the caller to be a member of the group.
* [SysLeaveGroupDivisionInstance](/api/capi/tournament/sysleavegroupdivisioninstance) - Removes a group from a division instance. Unlike LeaveGroupDivisionInstance, this sys call does not require the caller to be a member of the group.

:::tip
All the client APIs that the names beigin with <strong>"Sys"</strong> <em>are</em> also available to S2S. 
For the usages of the S2S tournament APIs (if they are not listed at this section below),
refer to <%= data.branding.productName %> client [tournament](/api/capi/tournament) APIs.
:::

<DocCardList />