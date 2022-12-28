# SendRawPushNotificationToGroup
## Overview
Sends a notification to a "group" of user consisting of raw message content.

See the Portal documentation for more info.

<PartialServop service_name="pushNotification" operation_name="SEND_RAW_TO_GROUP" / >

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
var groupId = "group1";
var senderId = "playerId";
var fcmContent = {
	"notification": {
		"body": "content of message",
		"title": "message title"
	},
	"data": {
		"customfield1": "customValue1",
		"customfield2": "customValue2"
	},
	"priority": "normal"
};
var iosContent = {
	"aps": {
		"alert": {
			"body": "content of message",
			"title": "message title"
		},
		"badge": 0,
		"sound": "gggg"
	}
};
var facebookContent = {
	"template": "content of message"
};
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.sendRawPushNotificationToGroup(groupId, senderId, fcmContent, iosContent, facebookContent);
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
	"service": "pushNotification",
	"operation": "SEND_RAW_TO_GROUP",
	"data": {
		"groupId": "group1",
		"senderId": "playerId",
		"fcmContent": {
			"notification": {
				"body": "content of message",
				"title": "message title"
			},
			"data": {
				"customfield1": "customValue1",
				"customfield2": "customValue2"
			},
			"priority": "normal"
		},
		"iosContent": {
			"aps": {
				"alert": {
					"body": "content of message",
					"title": "message title"
				},
				"badge": 0,
				"sound": "gggg"
			}
		},
		"facebookContent": {
			"template": "content of message"
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
    "packetId": 1,
    "messageResponses": [
        {
            "status": 200,
            "data": null
        }
    ]
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
groupId | The target group. 
senderId | Optional id of sender. 
fcmContent | FCM dependent message content. 
iosContent | IOS dependent message content. 
facebookContent | Facebook dependent message content. 


