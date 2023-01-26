# ScheduleRawPushNotifications
## Overview
Schedules raw notifications based on user local time.





### Results
Name | Description
--------- | -----------
notificationJobs | Number of notification jobs/time zones targeted

<PartialServop service_name="pushNotification" operation_name="SCHEDULE_RAW_NOTIFICATIONS" / >

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
var segments = [
  1,
  2
];
var localTime = "15:00";
var minimizeJobs = true;
var startDateUTC = 1437579786000;
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.scheduleRawPushNotifications(fcmContent, iosContent, facebookContent, localTime, minimizeJobs, startDateUTC, );
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
	"operation": "SCHEDULE_RAW_NOTIFICATIONS",
	"data": {
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
		},
		"segmentIdList": [
			1,
			2
		],
		"localTime": "15:00",
		"minimizeJobs": true,
		"startDateUTC": 1437579786000
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
                "notificationJobs": 5
            }
        }
    ]
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
fcmContent | FCM dependent message content. 
iosContent | IOS dependent message content. 
facebookContent | Facebook dependent message content. 
segmentIdList | List of target segments. Omit to send to all users. 
localTime | The scheduled local arrival time. 
minimizeJobs | Optional flag to cause the server to scan players time zones to reduce scope. 
startDateUTC | Optional base date for local time calculation. 


