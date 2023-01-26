# Presence
## Overview






Online Presence allows an app's users to know which of their friends are currently online, what they are doing, and whether they are available to interact.

The Presence Service enables the tracking of this live user activity. In order for any of these calls to be functional, the Presence feature must be enabled for your app. *<%= data.branding.productName %> RTT is also required.*

See **Design | Messaging | Presence** in the portal.
### API Summary

### Basic Presence
The user's online status is automatically registered when they connect to <%= data.branding.productName %> RTT. From there, the following API calls can be used to update the user's presence state and activity.

* [UpdateActivity](/api/capi/presence/updateactivity) - update the user's rich activity data
* [SetVisibility](/api/capi/presence/setvisibility) - hide the user's online state
 
### Getting Presence Status
The following API calls are used to directly request the presence status of other users:

* [GetPresenceOfFriends](/api/capi/presence/getpresenceoffriends) - get presence of friends
* [GetPresenceOfGroup](/api/capi/presence/getpresenceofgroup) - get presence of specified group
* [GetPresenceOfUsers](/api/capi/presence/getpresenceofusers) - get presence of specified set of users

### Real-time Presence
Use these API calls to configure real-time presence updates:

* [RegisterListenersForFriends](/api/capi/presence/registerlistenersforfriends) - register listeners with all friends
* [RegisterListenersForGroup](/api/capi/presence/registerlistenersforgroup) - register listeners with the specified group
* [RegisterListenersForProfiles](/api/capi/presence/registerlistenersforprofiles) - register listeners with the specified list of users (profiles)
* [StopListening](/api/capi/presence/stoplistening) - deregisters are listeners
* [ForcePush](/api/capi/presence/forcepush) - force an update to all listeners

### System calls
The system API calls can be used to register presence for users who are not currently connected via RTT. Useful for Internet-of-Things use cases. Callable by cloud-code only.

* [SysInitializePresence](/api/capi/presence/sysinitializepresence) - initialize presence for the specified user 
* [SysExtendPxExpiry](/api/capi/presence/sysextendpxexpiry) - extend the presence state
* [SysTerminatePresence](/api/capi/presence/systerminatepresence) - terminate presence for the specified user


<DocCardList />