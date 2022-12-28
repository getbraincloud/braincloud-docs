# SysGetRecentChatMessages
## Overview
Returns a list of max \<n\> messages from history.

### Status Codes
Code | Name | Description
---- | ---- | -----------
40601 | RTT_NOT_ENABLED | RTT must be enabled for this feature
40603 | CHAT_UNRECOGNIZED_CHANNEL | The specified channel is invalid
40616 | CLOUD_CODE_ONLY | Method only available via cloud code

<PartialServop service_name="chat" operation_name="SYS_GET_RECENT_CHAT_MESSAGES" / >

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
var maxReturn = 25;
var chatProxy = bridge.getChatServiceProxy();

var postResult = chatProxy.sysGetRecentChatMessages(channelId, maxReturn);
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
	"operation": "SYS_GET_RECENT_CHAT_MESSAGES",
	"data": {
		"channelId": "55555:gl:bcDev",
		"maxReturn": 25
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
        "messages": [
            {
                "date": 1529947494687,
                "ver": 1,
                "msgId": "783333117279792",
                "from": {
                    "id": "f0bdf734-f5ed-4617-8f40-62795dc82932",
                    "name": "Paul Winterhalder",
                    "pic": null
                },
                "chId": "55555:gl:<%= data.branding.productName %>Dev",
                "content": {
                    "text": "This is a test"
                }
            },
            {
                "date": 1529948166604,
                "ver": 1,
                "msgId": "783333461301297",
                "from": {
                    "id": "3b87aaa8-b47a-4096-9809-ce0da77ae60d",
                    "name": "",
                    "pic": null
                },
                "chId": "55555:gl:<%= data.branding.productName %>Dev",
                "content": {
                    "text": "Hello world"
                }
            }
        ]
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
channelId | The id of the channel. 
maxReturn | Max channel messages to return. 


