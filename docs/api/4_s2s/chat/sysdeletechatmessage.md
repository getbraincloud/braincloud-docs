# SysDeleteChatMessage
## Overview
Delete the specified chat message. Message can be from any user (or the system). Version must match (or pass -1 to bypass version enforcement).

Returns the number of messages that were deleted. Since the history rolls over, it is possible that the message had already expired before the deletion attempt - in that case, the value of the `deleted` field will be `0`.

### Status Codes
Code | Name | Description
---- | ---- | -----------
40346 | CHAT_INVALID_CHANNEL_ID | The channel id provided is invalid.
40601 | RTT_NOT_ENABLED | RTT must be enabled for this feature
40616 | CLOUD_CODE_ONLY | Method only available via cloud code

<PartialServop service_name="chat" operation_name="SYS_DELETE_CHAT_MESSAGE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var channelId = "55555:gl:bcDev";
var msgId = "the-message-id";
var version = 1;
var chatProxy = bridge.getChatServiceProxy();

var postResult = chatProxy.sysDeleteChatMessage(channelId, msgId, version);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "chat",
	"operation": "SYS_DELETE_CHAT_MESSAGE",
	"data": {
		"channelId": "55555:gl:bcDev",
		"msgId": "the-message-id",
		"version": 1
	}
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
        "deleted": 1
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
channelId | The channel id of the message. 
msgId | The id of the message to delete. 
version | The version of the message. Pass it -1 to bypass version checking. 


