# RoomServer

**RoomServer** service allows devs to directly launch hosted servers without going through lobby matchmaking.

### API Summary

-   [SysGetRoomMember](/api/capi/roomserver/sysgetroommember) - Used to retrieve the details of the given room member.
-   [SysLaunchServer](/api/capi/roomserver/syslaunchserver) - Launch a hosted server directly. Allows for the bypassing of brainCloud lobby matchmaking.
-   [SysRoomEvent](/api/capi/roomserver/sysroomevent) - Arbitrary method for calling the script associated with a directly launched hosted server instance.
-   [SysRoomReady](/api/capi/roomserver/sysroomready) - Indicates that a room is ready for use by the members.
-   [SysRoomSessionEnded](/api/capi/roomserver/sysroomsessionended) - Indicates that the given server instance has ended.
-   [SysRoomSessionStarted](/api/capi/roomserver/sysroomsessionstarted) - Indicates that the given server instance has started.


<DocCardList />
