# Chat
## Overview





**Chat** is a new service that enables real-time communication between end-users. It is available to apps that have **<%= data.branding.productNameRTT %>** enabled.

### Key concepts

* Chat messages are directed to *channels*, not users
* Channels have two important relationships with users:
    * *members (subscribers)* -- persistent members of the channel. i.e. those who can access messages, and are *allowed* to listen to real-time chat
    * *listeners* -- online members who are listening *right now!* Chat messages are "pushed" only to active listeners
* There are different types of channels. Channel types determine by how members and listeners are managed. See *Channel Types* section below.
* A rolling history of chat messages is maintained per channel
* Chat messages are simple json objects (see format below)
* There are both member and system chat messages
    * Member chat messages are from an end-user who is a member of the channel. Member messages have the user's `profileId` in the `fromId` field
    * *System* chat messages are from the system (i.e. the app or game) itself. Those message will have `null` in the `fromId` field
* Every chat message is assigned an id. The message id (`msgId`) must be combined with the channel id (`chId`) to fully reference the message



**Chat message format**
```
{
    "chId": "<channel id>",
    "msgId": "<guid>",
    "date": 1530069895070,
    "ver": 1,
    "from": {
        "id": "<profileId>",
        "name": "<name>",
        "pic": "<pictureUrl>"
    },
    "content": {
        "text": "simple message",
        "rich": {}
    }
}
```

### Chat message fields

Field | Description
-------------- | -----------
chId | The channel id
msgId | The chat message id (used for editing / deleting posted messages)
date | The time the message was posted (in utc millis)
ver | The version of the message
from | Information about who the chat message is from. Includes name and picture url if available
content | The content of the chat message. Contents are up to the developer - but for visibility in tools, should have a `text` field for plain-text message content


### Channel Types

<%= data.branding.productName %> currently supports two types of channels:

Channel Type | Membership | Creation | Description
------------ | ---------- | --------- | -----------
global | All users of the app | Via portal | All users of an app can access global channels. By default, an app can have up to 10 channels. Contact us with your use case for more. The global channel id is formed as `appId:gl:channelCode`.
group | All members of a Group | Auto | A channel is automatically created for each group in the system. Any group member can access it. The group channel id is formed as `appId:gr:groupId`.


*Pro-tip - if you are interested in one-to-one chat, see our [Messaging](/api/capi/messaging) api...*


### API Summary

### Channel lookup and management

* [GetChannelId](/api/capi/chat/getchannelid)
* [GetChannelInfo](/api/capi/chat/getchannelinfo)
* [GetSubscribedChannels](/api/capi/chat/getsubscribedchannels)
* [ChannelConnect](/api/capi/chat/channelconnect)
* [ChannelDisconnect](/api/capi/chat/channeldisconnect)

### Retrieving chat messages

* [GetRecentChatMessages](/api/capi/chat/getrecentchatmessages)
* [GetChatMessage](/api/capi/chat/getchatmessage)

### Posting chat messages

* [PostChatMessageSimple](/api/capi/chat/postchatmessagesimple)
* [PostChatMessage](/api/capi/chat/postchatmessage)

### Updating chat messages

* [UpdateChatMessage](/api/capi/chat/updatechatmessage)
* [DeleteChatMessage](/api/capi/chat/deletechatmessage)

### System chat API (cloud-code only)

These API calls bypass channel membership / message ownership checks - and allow you to post messages from the *system* (i.e. app) instead of from another end-user:

* [SysCreateChannel](/api/capi/chat/syscreatechannel)
* [SysDeleteChannel](/api/capi/chat/sysdeletechannel)
* [SysDeleteChatMessage](/api/capi/chat/sysdeletechatmessage)
* [SysGetChannelInfo](/api/capi/chat/sysgetchannelinfo)
* [SysGetChatMessage](/api/capi/chat/sysgetchatmessage)
* [SysGetRecentChatMessages](/api/capi/chat/sysgetrecentchatmessages)
* [SysPostChatMessage](/api/capi/chat/syspostchatmessage)
* [SysPostChatMessageSimple](/api/capi/chat/syspostchatmessagesimple)
* [SysUpdateChatMessage](/api/capi/chat/sysupdatechatmessage)



<DocCardList />