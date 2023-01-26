# SysPostChatMessageSimple
## Overview
:::tip
This method is available in Cloud Code scripts only.
:::

Sends a simple-text member chat message. From is a json containing the message originator info - in this case normally "name" and potentially a "pic" url. Returns the id of the message created.



<PartialServop service_name="chat" operation_name="SYS_POST_CHAT_MESSAGE_SIMPLE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var chatProxy = bridge.getChatServiceProxy();

var text = "Hellooooo!";

var from = {};
from.name = "The Overseer";
from.pic = "https://myprofilepic.com?id=555"

var postResult = chatProxy.sysPostChatMessageSimple( channelId, text, true, from );
if (postResult.status == 200 ) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var chatProxy = bridge.getChatServiceProxy();

var text = "Hellooooo!";

var from = {};
from.name = "The Overseer";
from.pic = "https://myprofilepic.com?id=555"

var postResult = chatProxy.sysPostChatMessageSimple( channelId, text, true, from );
if (postResult.status == 200 ) {
    // Success!
}
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

<details>
<summary>JSON Response</summary>

```json
{
    "status": 200,
    "data": {
        "msgId": "783347769003570"
    }
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40601 | RTT_NOT_ENABLED | RTT must be enabled for this feature
40603 | CHAT_UNRECOGNIZED_CHANNEL | The specified channel is invalid
40616 | CLOUD_CODE_ONLY | Method only available via cloud code

</details>


## Method Parameters
Parameter | Description
--------- | -----------
channelId | The chat channel to post to
text | Text change message sent
recordInHistory | Set to `false` if the message shouldn't be recorded to history. Useful for sending non-conversational messages, like when users join a room, etc.
fromJson | the from information for message. Should not include `id`.


