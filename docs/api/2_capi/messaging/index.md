# Messaging

**Messaging** is a new service that enables rich communications between end-users. It is available to all _Plus_ plan subscriptions - and can optionally utilise **<%= data.branding.productNameRTT %>** to send messages in real-time.

Key concepts:

-   used for _directly_ addressed messages (via profileIds) - as opposed to [Chat](/api/capi/chat) messages, which are sent to _channels_
-   is not email (though it is modelled similarly)
    -   messages are sent _within_ <%= data.branding.productName %> only
    -   and only within a single app
-   three types of messages - _regular_, _system_ and _bulk_
    -   _regular messages_ - sent by end-users.
    -   _system messages_ - sent from the system (i.e. the app) - so the _from_ field is `null`
    -   _bulk messages_ - system messages sent to all users (**NOT YET SUPPORTED - COMING SOON!**)
-   sends real-time events to online users when messages are received (if **<%= data.branding.productNameRTT %>** is enabled)

> **Message content format**

```
{
    "msgbox": "inbox",
    "msgId": "<guidA>",
    "mbCr": 1530070436834,
    "mbUp": 1530070436834,
    "mbVer": 1,
    "message": {
        "from": {
            "id": "<profileIdA>",
            "name": "Holly Leung",
            "pic": "<optionalPicUrl>"
        },
        "to": [
            "<profIleIdB>"
        ],
        "sentAt": 1530070436834,
        "content": {
            "subject": "optional",
            "text": "This is a test message"
        }
    }
}
```

### Message fields

| Parameter | Description                                                       |
| --------- | ----------------------------------------------------------------- |
| msgbox    | The box (inbox, sent) that the message is stored in               |
| msgId     | The chat message id (used for editing / deleting posted messages) |
| mbCr      | Created at date+time in millis                                    |
| mbUp      | Last updated date+time in millis                                  |
| mbVer     | The version of the message                                        |
| from      | Information about the originating user                            |
| to        | Array of message recipients                                       |
| sentAt    | Time+date in millis at which the message was sent                 |
| content   | The message content. If plaintext, should contain a text field    |

### API Summary

### Retrieving messages

-   [GetMessageBoxes](/api/capi/messaging/getmessageboxes)
-   [GetMessageCounts](/api/capi/messaging/getmessagecounts)
-   [GetMessages](/api/capi/messaging/getmessages)
-   [GetMessagesPage](/api/capi/messaging/getmessagespage)
-   [GetMessagesPageOffset](/api/capi/messaging/getmessagespageoffset)

### Sending messages

-   [SendMessage](/api/capi/messaging/sendmessage)
-   [SendMessageSimple](/api/capi/messaging/sendmessagesimple)

### Updating messages

-   [DeleteMessages](/api/capi/messaging/deletemessages)
-   [MarkMessagesRead](/api/capi/messaging/markmessagesread)

### Sys API Calls

These APIs target the shared content portion of a message, and not the per-user messagebox metadata (which controls whether a message has been read, etc.). Can be used on user or system messages.

Available via cleint session cloud code, as well as S2S.

### Retrieving messages

-   [SysGetMessages](/api/capi/messaging/sysgetmessages)
-   [SysGetMessagesPage](/api/capi/messaging/sysgetmessagespage)
-   [SysGetMessagesPageOffset](/api/capi/messaging/sysgetmessagespageoffset)

### Sending messages

-   [SysSendMessage](/api/capi/messaging/syssendmessage)
-   [SysSendMessageSimple](/api/capi/messaging/syssendmessagesimple)

### Updating messages

-   [SysDeleteMessage](/api/capi/messaging/sysdeletemessage)
-   [SysDeleteMessages](/api/capi/messaging/sysdeletemessages)
-   [SysUpdateMessage](/api/capi/messaging/sysupdatemessage)

<DocCardList />
