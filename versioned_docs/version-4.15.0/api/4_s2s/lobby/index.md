# Lobby
## Overview





For a full overview of the Lobby Service, see the [Lobby Service Client API](/api/capi/lobby).


### API Summary

### LobbyService

* [GetLobbyData](/api/s2s/lobby/getlobbydata) - Gets data for the given lobby instance.
* [GetLobbyInstances](/api/capi/lobby/getlobbyinstances) - Gets a map keyed by rating of the visible lobby instances matching the given type and rating range.
* [GetLobbyInstancesWithPingData](/api/capi/lobby/getlobbyinstanceswithpingdata) - Gets a map keyed by rating of the lobby instances matching the given type, rating range, and ping threshold.
* [SysRoomReady](/api/s2s/lobby/sysroomready) - Indicates that a room is ready for use by the members of the given lobby.
* [SysRoomCancelled](/api/s2s/lobby/sysroomcancelled) - Indicates that the room allocation process has been cancelled for the given lobby.
* [SysSendSignal](/api/s2s/lobby/syssendsignal) - Send the given data to all members of the given lobby.
* [SysDisbandLobby](/api/s2s/lobby/sysdisbandlobby) - Disbands the given lobby.
* [SysRoomStopped](/api/capi/lobby/sysroomstopped) - Indicates that the gameplay for the room associated with the given lobby has completed. The lobby can be returned to the 'setup' state.
* [SysMemberLeft](/api/capi/lobby/sysmemberleft) - Informs brainCloud that the specified user has left the specified lobby.
* [SysGetLobbyMember](/api/capi/lobby/sysgetlobbymember) - Retrieves lobby membership details for the specified user.

:::tip
All the client APIs that the names beigin with <strong>"Sys"</strong> <em>are</em> also available to S2S. 
For the usages of the S2S lobby APIs (if they are not listed at this section below),
refer to <%= data.branding.productName %> client [lobby](/api/capi/lobby) APIs.
:::

<DocCardList />