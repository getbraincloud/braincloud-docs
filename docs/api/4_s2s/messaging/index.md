# Messaging
## Overview


### API Summary

### Messaging
* [SysGetMessagesPage](/api/s2s/messaging/sysgetmessagespage) - Gets the page of system messages from the server based on the encoded context.
* [SysGetMessagesPageOffset](/api/s2s/messaging/sysgetmessagespageoffset) - Gets the page of system messages from the server based on the encoded context and specified page offset.
* [SysGetMessages](/api/s2s/messaging/sysgetmessages) - Retrieves list of specified system messages.
* [SysUpdateMessage](/api/s2s/messaging/sysupdatemessage) - Updates a system message.
* [SysDeleteMessage](/api/s2s/messaging/sysdeletemessage) - Deletes specified system message on the server. Note, if a regular message, deletes all references to it.
* [SysSendMessageSimple](/api/s2s/messaging/syssendmessagesimple) - Sends a simple string-based message on behalf of the system (i.e. app) to the specified users.
* [SysSendMessage](/api/s2s/messaging/syssendmessage) - Sends a message on behalf of the system (i.e. app) to the specified users.
* [SysGetMessagesForOwnerPage](/api/capi/messaging/sysgetmessagesforownerpage) - Retrieves the page of messages, owned by specified ownerId, from the server based on the encoded context.
* [SysGetMessagesForOwnerPageOffset](/api/capi/messaging/sysgetmessagesforownerpageoffset) - Retrieves the page of messages, owned by specified ownerId, from the server based on the encoded context and specified page offset.

:::tip
All the client APIs that the names beigin with <strong>"Sys"</strong> <em>are</em> also available to S2S. 
For the usages of the S2S messaging APIs (if they are not listed at this section below),
refer to <%= data.branding.productName %> client [messaging](/api/capi/messaging) APIs.
:::

<DocCardList />