# Presence
## Overview


<%# TODO Write Desc %>
### API Summary

### Presence
* [SysExtendPxExpiry](/api/s2s/presence/sysextendpxexpiry) - Extends the presence TTL for \<profileId\> by \<seconds\>.
* [SysGetPresenceOfUsers](/api/s2s/presence/sysgetpresenceofusers) - Gets the presence data for the given \<profileIds\>. Will not include offline profiles unless \<includeOffline\> is set to true.
* [SysInitializePresence](/api/s2s/presence/sysinitializepresence) - Creates or updates the presence of \<profileId\>. \<visible\> is optional (defaults to true). \<activity\> is optional. \<expirySecs\> is optional (defaults to <%= data.branding.productName %> property \<presPxExpirySecs\>).
* [SysTerminatePresence](/api/s2s/presence/systerminatepresence) - Terminates the presence of \<profileId\>.

<DocCardList />