# SysPostChatMessage
## Overview
Send a message on behalf of the system to the specified users.

<PartialServop service_name="chat" operation_name="SYS_POST_CHAT_MESSAGE" / >

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
var content = {
  "text": "Hello world",
  "custom": {
    "somethingCustom": "wow"
  }
};
var recordInHistory = true;
var from = {
  "name": "Homer",
  "pic": "http://www.simpsons.test/homer.jpg"
};
var chatProxy = bridge.getChatServiceProxy();

var postResult = chatProxy.sysPostChatMessage(channelId, content, recordInHistory, from);
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
	"operation": "SYS_POST_CHAT_MESSAGE",
	"data": {
		"channelId": "55555:gl:bcDev",
		"content": {
			"text": "Hello world",
			"custom": {
				"somethingCustom": "wow"
			}
		},
		"recordInHistory": true,
		"from": {
			"name": "Homer",
			"pic": "http://www.simpsons.test/homer.jpg"
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
channelId | The id of the channel to post to. 
content | The content to post. 
recordInHistory | Should the message be recorded in history? Using 'false' is useful for sending non-conversational messages, like when users join a room, etc. 
from | Details of the user posting the message. 


