# SendRawToSegments
## Overview
This operation sends a raw message to targetted segments.





### Results
Name | Description
--------- | -----------
estimatedTargets | Estimate number of targeted users

<PartialServop service_name="pushNotification" operation_name="SEND_RAW_TO_SEGMENTS" / >

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
var segmentIdList = [
	1,
	2
];
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.sendRawToSegments(fcmContent, iosContent, facebookContent, segmentIdList);
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
	"operation": "SEND_RAW_TO_SEGMENTS",
	"data": {
		"segmentIdList": [
			1,
			2
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
            "data": {
                "estimatedTargets": 1234
            }
        }
    ]
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
segmentIdList | List of target segments. Omit to send to all users. 
fcmContent | FCM dependent message content. 
iosContent | IOS dependent message content. 
facebookContent | Facebook dependent message content. 


