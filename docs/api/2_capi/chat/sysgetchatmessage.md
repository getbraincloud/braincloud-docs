# SysGetChatMessage
## Overview
:::tip
This method is available in Cloud Code scripts only.
:::

Retrieves a chat message object from history. If the message cannot be found, that `data` section returned will be empty.



### Status Codes
Code | Name | Description
---- | ---- | -----------
40601 | RTT_NOT_ENABLED | RTT must be enabled for this feature
40603 | CHAT_UNRECOGNIZED_CHANNEL | The specified channel is invalid
40616 | CLOUD_CODE_ONLY | Method only available via cloud code

<PartialServop service_name="chat" operation_name="SYS_GET_CHAT_MESSAGE" / >

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
var channelId = "55555:gl:bcDev";
var msgId = "123456789";
var chatProxy = bridge.getChatServiceProxy();

var postResult = chatProxy.sysGetChatMessage(channelId, msgId);
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
	"operation": "SYS_GET_CHAT_MESSAGE",
	"data": {
		"channelId": "55555:gl:bcDev",
		"msgId": "the-message-id"
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
        "date": 1529978814276,
        "ver": 1,
        "msgId": "783349152909363",
        "from": {
            "id": "004a7d0c-4e96-474b-972b-7794e0eec8d5",
            "name": "",
            "pic": null
        },
        "chId": "22682:gl:<%= data.branding.productName %>Dev",
        "content": {
            "text": "Hello world",
            "rich": {
                "somethingCustom": "wow"
            }
        }
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
channelId | The channel of the message
msgId | The message id


