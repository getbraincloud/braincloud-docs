# SysUpdateChatMessage
## Overview
:::tip
This method is available in Cloud Code scripts only.
:::

Update the specified chat message. Message can have been from any user (or system). Version provided must match (or pass -1 to bypass version enforcement).




<PartialServop service_name="chat" operation_name="SYS_UPDATE_CHAT_MESSAGE" / >

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

var newContent = {};
newContent.text = "This is updated message text";

var updateResult = chatProxy.sysUpdateChatMessage(channelId, oldMsg.id, oldMsg.ver, newContent);
if (updateResult.status == 200) {
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
	"operation": "SYS_UPDATE_CHAT_MESSAGE",
	"data": {
		"channelId": "55555:gl:bcDev",
		"msgId": "the-message-id",
		"version": 1,
		"content": {
			"text": "New plain text message",
			"custom": {
				"somethingNew": "amazing"
			}
		}
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
    "data": {}
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40346 | INSUFFICIDENT_PERMISSIONS | The channel id provided is invalid.
40595 | CHAT_MESSASAGE_NOT_FOUND | The specified message cannot be found
40601 | RTT_NOT_ENABLED | RTT must be enabled for this feature
40603 | CHAT_UNRECOGNIZED_CHANNEL | The specified channel is invalid
40616 | CLOUD_CODE_ONLY | Method only available via cloud code

</details>


## Method Parameters
#### Method Parameters
Parameter | Description
--------- | -----------
channelId | The channel of the message
msgId | The message id
version | The version of the message. Pass it -1 to bypass version checking.
contentJson | Replacement content for the message


