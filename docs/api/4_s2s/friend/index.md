# Friend
## Overview


Friends in <%= data.branding.productName %> are other users (i.e. players) that you want to
share your user experience with. Friends may be existing connections
from a social network (i.e. Facebook), or social connections that you make
that are specific to the app and managed by <%= data.branding.productName %>.

### API Summary

### User Lookup

By Universal ID:

* [FindUserByExactUniversalId](/api/capi/friend/finduserbyexactuniversalid) - Retrieves profile information for the partial Universal ID matches of the specified text.
* [FindUsersByUniversalIdStartingWith](/api/capi/friend/findusersbyuniversalidstartingwith) - Retrieves profile information for users whose universal ID starts with search text. Optional parameter: maxResults

By Name (not recommended - slow!):

* [FindUsersByExactName](/api/capi/friend/findusersbyexactname) - Retrieves profile information for exactly matched user names. Optional parameter: maxResults
* [FindUsersBySubstrName](/api/capi/friend/findusersbysubstrname) - Retrieves profile information for partially matched user names. Optional parameter: maxResults
* [FindUsersByNameStartingWith](/api/capi/friend/findusersbynamestartingwith) - Retrieves profile information for users whose name starts with search text. Optional parameter: maxResults

By Other Identity:

* [GetProfileInfoForCredential](/api/capi/friend/getprofileinfoforcredential) - Retrieves profile information for the specified user.
* [GetProfileInfoForCredentialIfExists](/api/capi/friend/getprofileinfoforcredentialifexists) - Retrieves profile information for the specified user. Silently fails
* [GetProfileInfoForExternalAuthId](/api/capi/friend/getprofileinfoforexternalauthid) - Retrieves profile information for the specified user.
* [GetProfileInfoForExternalAuthIdIfExists](/api/capi/friend/getprofileinfoforexternalauthidifexists) - Retrieves profile information for the specified user. Silently fails

Misc:

* [FindUsersByUserSummary](/api/capi/friend/findusersbyusersummary) - Retrieves profile information based on the search criteria of the user summary data.
* [GetUsersOnlineStatus](/api/capi/friend/getusersonlinestatus) - Get users online status.
* [GetExternalIdForProfileId](/api/capi/friend/getexternalidforprofileid) - Retrieves the external ID for the specified user profile ID on the specified social platform.
* [GetSummaryDataForProfileId](/api/capi/friend/getsummarydataforprofileid) - Retrieves summary information for the specified user profile ID.


:::tip
Note that friends APIs in S2S are disigned for user retrival purpose, it does not require the calling user (S2S session) to be a friend of the retrieved users.
:::

<DocCardList />