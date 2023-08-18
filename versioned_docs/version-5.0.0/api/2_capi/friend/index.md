# Friend
## Overview



Friends in <%= data.branding.productName %> are other users (i.e. players) that you want to
share your user experience with. Friends may be existing connections
from a social network (i.e. Facebook), or social connections that you make
that are specific to the app and managed by <%= data.branding.productName %>.

<%= data.branding.productName %> can help to manage these friends - and use them for the basis
of higher-level features such as social leaderboards.

The methods of this service fall into the following categories:

* Friend management - for directly managing the list of <%= data.branding.productName %> friends
* Friend lookup - for looking up new friend candidates
* Friend data access - for accessing data associated with a friend


### API Summary


### Friend Management

* [AddFriends](/api/capi/friend/addfriends) - Adds <%= data.branding.productName %> profile IDs to local friends.
* [ListFriends](/api/capi/friend/listfriends) - Retrieves the friend summary data associated with the logged in user. Optional parameters: includeNetworkFriends and includeSummaryData
* [RemoveFriends](/api/capi/friend/removefriends) - Removes <%= data.branding.productName %> profile IDs from local friends.

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

### Friend Data Access

* [ReadFriendEntity](/api/capi/friend/readfriendentity) - Reads entity data of friend.
* [ReadFriendsEntities](/api/capi/friend/readfriendsentities) - Reads entities data of friends.
* [ReadFriendUserState](/api/capi/friend/readfrienduserstate) - Updates the friend summary data associated with the logged in user.

**Summary Friend Data** (also referred to as simply **Friend Data**) is special game summary data that is made available to a user's friends.
This is normally used to provide additional information for use in social leaderboards and/or neighbor displays.
Common examples of friend data include experience level, player level title, etc. Summary Friend data is updated via the
[<code>UpdateSummaryFriendData</code>](/api/capi/playerstate/updatesummaryfrienddata) method.

:::caution
Any app that relies on access to the user's Facebook friends will require the "user_friends" permission when authenticating with Facebook. See the Facebook API documentation for how to request the "user_friends" permission.
:::


<DocCardList />