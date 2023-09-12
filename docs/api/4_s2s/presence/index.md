# Presence
## Overview

Online Presence allows an app's users to know which of their friends are currently online, what they are doing, and whether they are available to interact.

The Presence Service enables the tracking of this live user activity. In order for any of these calls to be functional, the Presence feature must be enabled for your app. *<%= data.branding.productName %> RTT is also required.*

See **Design | Messaging | Presence** in the portal.

### API Summary

### Presence
* [SysExtendPxExpiry](/api/s2s/presence/sysextendpxexpiry) - Extends the presence TTL for &lt;profileId&gt; by &lt;seconds&gt;.
* [SysGetPresenceOfUsers](/api/s2s/presence/sysgetpresenceofusers) - Gets the presence data for the given \<profileIds\>. Will not include offline profiles unless \<includeOffline\> is set to true.
* [SysInitializePresence](/api/s2s/presence/sysinitializepresence) - Creates or updates the presence of \<profileId\>. \<visible\> is optional (defaults to true). \<activity\> is optional. \<expirySecs\> is optional (defaults to <%= data.branding.productName %> property \<presPxExpirySecs\>).
* [SysTerminatePresence](/api/s2s/presence/systerminatepresence) - Terminates the presence of \<profileId\>.

<DocCardList />