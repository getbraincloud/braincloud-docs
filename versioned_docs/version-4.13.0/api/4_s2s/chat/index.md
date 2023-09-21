# Chat
## Overview





**Chat** is a new service that enables real-time communication between end-users. It is available to apps that have **<%= data.branding.productNameRTT %>** enabled.

This page describes the Chat Service S2S API methods. For the client api, go to [Chat Service - Client API](/api/capi/chat).

### Chat Service - S2s API

These API calls bypass channel membership / message ownership checks - and allow you to post messages from the *system* (i.e. app) instead of from another end-user:

* [GetChannelId](/api/s2s/chat/getchannelid)
* [SysDeleteChatMessage](/api/s2s/chat/sysdeletechatmessage)
* [SysGetChannelInfo](/api/s2s/chat/sysgetchannelinfo)
* [SysGetChatMessage](/api/s2s/chat/sysgetchatmessage)
* [SysGetRecentChatMessages](/api/s2s/chat/sysgetrecentchatmessages)
* [SysPostChatMessage](/api/s2s/chat/syspostchatmessage)
* [SysPostChatMessageSimple](/api/s2s/chat/syspostchatmessagesimple)
* [SysUpdateChatMessage](/api/s2s/chat/sysupdatechatmessage)


### API Summary

### ChatService

These API calls bypass channel membership / message ownership checks - and allow you to post messages from the *system* (i.e. app) instead of from another end-user:

* [GetChannelId](/api/s2s/chat/getchannelid) - Gets the channelId for the given \<channelType\> and \<channelSubId\>. Channel type must be one of "gl" or "gr".
* [SysCreateChannel](/api/s2s/chat/syscreatechannel) - Initializes a dynamic chat channel. Returns the channelId. Channel type must be "dy".
* [SysDeleteChannel](/api/s2s/chat/sysdeletechannel) - Deletes a dynamic chat channel. Channel type must be "dy". This will delete the chat history as well.
* [SysGetChannelInfo](/api/s2s/chat/sysgetchannelinfo) - Gets description info and activity stats for channel \<channelId\>. Note that numMsgs and listeners only returned for non-global groups. Only callable for channels the user is a member of.
* [SysGetChatMessage](/api/s2s/chat/sysgetchatmessage) - Gets a populated chat object (normally for editing).
* [SysGetRecentChatMessages](/api/s2s/chat/sysgetrecentchatmessages) - Get a list of \<maxReturn\> messages from history of channel \<channelId\>
* [SysPostChatMessage](/api/s2s/chat/syspostchatmessage) - Send a potentially rich chat message. \<recordInHistory\> is optional and true by default. \<fromJson\> is optional and can contain a "name" and/or "pic" entry.
* [SysPostChatMessageSimple](/api/s2s/chat/syspostchatmessagesimple) - Send a simple-text message. \<recordInHistory\> is optional and true by default. \<fromJson\> is optional and can contain a "name" and/or "pic" entry.
* [SysUpdateChatMessage](/api/s2s/chat/sysupdatechatmessage) - Update a chat message. \<version\> must match the latest or pass -1 to bypass version check.
* [SysDeleteChatMessage](/api/s2s/chat/sysdeletechatmessage) - Delete a chat message. \<version\> must match the latest or pass -1 to bypass version check.

<DocCardList />