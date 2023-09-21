# ScheduleNormalizedPushNotifications
## Overview
Schedules normalized notifications based on user local time.





### Results
Name | Description
--------- | -----------
notificationJobs | Number of notification jobs/time zones targeted

<PartialServop service_name="pushNotification" operation_name="SCHEDULE_NORMALIZED_NOTIFICATIONS" / >

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
var alertContent = {
	"body": "content of message",
	"title": "message title"
};
var customData = {
	"field1": "value1",
	"field2": "value2"
};
var segmentIdList = [
	1,
	2
];
var localTime = "15:00";
var minimizeJobs = true;
var startDateUTC = 1437579786000;
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.scheduleNormalizedPushNotifications(alertContent, customData, segmentIdList, localTime, minimizeJobs, startDateUTC);
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
	"operation": "SCHEDULE_NORMALIZED_NOTIFICATIONS",
	"data": {
		"alertContent": {
			"body": "content of message",
			"title": "message title"
		},
		"customData": {
			"field1": "value1",
			"field2": "value2"
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
                "notificationJobs": 3
            }
        }
    ]
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
alertContent | Body and title of message in JSON format. 
customData | Custom attributes of message. 
segmentIdList | List of target segments. Omit to send to all users. 
localTime | The scheduled local arrival time. 
minimizeJobs | Optional flag to cause the server to scan players time zones to reduce scope. 
startDateUTC | Optional base date for local time calculation. 


