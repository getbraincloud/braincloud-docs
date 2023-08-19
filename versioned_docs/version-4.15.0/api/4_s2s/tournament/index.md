# Tournament
## Overview





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

:::tip
All the client APIs that the names beigin with <strong>"Sys"</strong> <em>are</em> also available to S2S. 
For the usages of the S2S tournament APIs (if they are not listed at this section below),
refer to <%= data.branding.productName %> client [tournament](/api/capi/tournament) APIs.
:::

<DocCardList />