# SendRawPushNotificationBatch
## Overview
Sends a notification to a list of users consisting of raw message content.

<PartialServop service_name="pushNotification" operation_name="SEND_RAW_BATCH" / >

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
var profileIds = [
	"the-profile-id",
	"another-profile-id"
];
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

var postResult = pushNotificationProxy.sendRawPushNotificationBatch(profileIds, fcmContent, iosContent, facebookContent);
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
	"operation": "SEND_RAW_BATCH",
	"data": {
		"profileIds": [
			"the-profile-id",
			"another-profile-id"
		],
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
profileIds | Target list of users. 
fcmContent | FCM dependent message content. 
iosContent | IOS dependent message content. 
facebookContent | Facebook dependent message content. 


