---
title: "Release 3.7.0"
date: "2018-03-08"
tags: 
  - "release-history"
---

We are happy to present Release 3.7.0. It's a mid-sized update that satisfies some key customer requests and incorporates some foundational changes that we will be leveraging in upcoming releases!

## Release Highlights

### Inherited Friends!

The [Shared Accounts](/apidocs/api-modules/authentication/shared-accounts/) feature in brainCloud allows developers to build relationships between apps - so that users can log into a single master account (i.e. parent profile), and utilize that account (and data) across a suite of related apps. The user data from each app is still stored independently (allowing independent save state, achievements, scores/leaderboards, etc.) in a separate sub-account (i.e. child profile).

We have now extended this mechanism to better support social relationships between users. So, instead of having to manage a set of friends individually for each app, child apps can now _inherit_ friends from their parents. This is a great boon for social leaderboards - and means that new entrants in a suite of apps can easily extend the social graph of related apps.

If you are already using _Shared Accounts_, you can enable _Inherited Friends_ by going to the **Design | Authentication | Shared Accounts** page and checking the _\[x\] Include Friends of Parents_ option.

The [ListFriends()](/apidocs/apiref/?csharp#capi-friend-listfriends), [GetSocialLeaderboard()](/apidocs/apiref/?csharp#capi-leaderboard-getsocialleaderboard), [GetPlayersSocialLeaderboard()](/apidocs/apiref/?csharp#capi-leaderboard-getplayerssocialleaderboard) and [GetMultiSocialLeaderboard()](/apidocs/apiref/?csharp#capi-leaderboard-getmultisocialleaderboard) APIs have all been enhanced to utilize inherited friends.

 

### More Flexible Matchmaking

Our matchmaking service has been enhanced to offer more flexibility - namely support for overriding the player's ranking that is the basis of the search, and the ability to substitute in a different matchmaking filter.

The new API methods are: [FindPlayersUsingScript()](/apidocs/apiref/?cloudcode#capi-matchmaking-findplayersusingscript) and [FindPlayersWithAttributesUsingScript()](/apidocs/apiref/?cloudcode#capi-matchmaking-findplayerswithattributesusingscript).

_Note - for security purposes, these new calls are cloud-code only._

 

### Updated Developer Roles / Permissions

We have tweaked the permissions associated with the default development roles of the system to incorporate customer feedback.

The following changes have been applied:

- _Support_ role
    - Removed write access to all of **Global Monitoring**, except for **Leaderboards**. 
    - Removed access to **Reporting | API Usage** - leaving only access to **Reporting | Error Analytics**
    - Full read+write access to **User Monitoring** remains
    - Limited read+write access to **Design** remains as is

- _Read-only_ role 
    - Removed access to **Design | Core App Info** (all sections) and **Design | Integrations** 

 

### Change E-mail Identity

We've added a new api that allows you to change the email address associated with a user's EmailIdentity.

The new [ChangeEmailIdentity()](/apidocs/apiref/?csharp#capi-identity-changeemailidentity) call takes as parameters the existing email and password (for security purposes), and the new email address to use. You can also optionally tell the method to update the user's contact email as well (recommended).

_Note - this method does not currently support our email verification system, so no verification email (with link to confirm) is sent. We plan to add that support in a future release._

 

* * *

## Portal Changes

We've made the following portal changes:

### Design

- **Authentication | Shared Accounts**
    - Added the new _\[x\] Include Friends of Parents_ option
- **Leaderboard | Leaderboard Configs**
    - You can no longer add Tournaments to the active rotation of a leaderboard if it already has scores. The tournament will be queued to activate on the next rotation

### Monitoring

- **Global Monitoring | Leaderboards**
    - Now showing the status of the Tournament auto-claim and auto-join settings per leaderboard rotation

### Team

- **Home | Audit Log**
    - We now log any password reset requests for security purposes...

 

* * *

## API Changes

The following changes/additions have affected the brainCloud API:

- **Identity**
    - New [ChangeIdentityEmail()](/apidocs/apiref/#capi-identity-changeemailidentity) method for changing the email address that a user uses to login.
- **Matchmaking**
    - Two new cloud code APIs allow you to override the player rating and filter script used in matchmaking - [FindPlayersUsingScript()](/apidocs/apiref/#capi-matchmaking-findplayersusingscript) and [FindPlayersWithAttributesUsingScript()](/apidocs/apiref/#capi-matchmaking-findplayerswithattributesusingscript)

_Plus the [ReadProperties()](/apidocs/apiref/#capi-globalapp-readproperties) method is now available from the S2S API._

 

* * *

## Miscellaneous Changes / Fixes

- Updated libraries
    - All libraries have been updated with the new APIs. We recommend that all apps upgrade!
- Documentation updates
    - We have updated the docs to reflect the new API calls
- Important Fixes
    - BCLD-2777 - Portal: when adding to the \[Job Queue\], the "Save" button becomes available without selecting a script
        
    - BCLD-2783 - Changing apps while on the script page causes the Peer Script Service not to update in the API Explorer
    - BCLD-2790 - Portal: \[Monitoring\] --> \[Group Entities\]: the data for a group entity is shown as an escaped JSON string, not nicely printed
        
    - BCLD-2904 - User Attributes don't reset on reset
        
    - BCLD-2927 - fixed duplicate HTML ids across all pages
    - BCLD-2985 - User Monitoring | Friends - need space between friend name and email
        
    - BCLD-3003 - Team Select Screen - When the User adds a new team it does not appear in the select team drop down
        
- Plus miscellaneous fixes and performance enhancements…
