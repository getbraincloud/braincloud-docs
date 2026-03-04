# Player State

The **Player State** service provides session management operations for use by server-side scripts. These system calls allow invalidating active sessions for users, useful for implementing forced logout or security enforcement workflows.

### API Summary

### Session Management

* [SysInvalidateSessionForUser](/api/capi/playerstate/sysinvalidatesessionforuser) - Invalidates a specific session for a user.
* [SysInvalidateAllSessionsForUser](/api/capi/playerstate/sysinvalidateallsessionsforuser) - Invalidates all sessions for a user.
* [SysInvalidateAllSessionsForUserExcept](/api/capi/playerstate/sysinvalidateallsessionsforuserexcept) - Invalidates all sessions for a user except a specific session.

:::tip
All client APIs whose names begin with <strong>"Sys"</strong> <em>are</em> also available to S2S.
For the usages of the S2S player state APIs (if they are not listed in this section),
refer to <%= data.branding.productName %> client [playerstate](/api/capi/playerstate) APIs.
:::

<DocCardList />
