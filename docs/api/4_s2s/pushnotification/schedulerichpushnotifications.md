# ScheduleRichPushNotifications
## Overview
Schedules rich notifications based on user local time.

Example of substitution usage:

Message could be `You have won a {2} for entering the {1} contest`.

Substitutions parameter would be `{ "1" : "User Appreciation", "2", "User Appreciation Prize" }`





### Results
Name | Description
--------- | -----------
notificationJobs | Number of notification jobs/time zones targeted

<PartialServop service_name="pushNotification" operation_name="SCHEDULE_RICH_NOTIFICATIONS" / >

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
var notificationTemplateId = 1;
var substitutions = {
	"0": "value0",
	"1": "value1"
};
var segmentIdList = [
	1,
	2
];
var localTime = "15:00";
var minimizeJobs = true;
var startDateUTC = 1437579786000;
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.scheduleRichPushNotifications(notificationTemplateId, segmentIdList, substitutions, startDateUTC, localTime, minimizeJobs);
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
	"operation": "SCHEDULE_RICH_NOTIFICATIONS",
	"data": {
		"notificationTemplateId": 1,
		"segmentIdList": [
			1,
			2
		],
		"substitutions": {
			"0": "value0",
			"1": "value1"
		},
		"startDateUTC": 1437579786000,
		"localTime": "15:00",
		"minimizeJobs": true
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
                "notificationJobs": 4
            }
        }
    ]
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
notificationTemplateId | Identifies the template that will determine the message content. 
segmentIdList | List of target segments. Omit to send to all users. 
substitutions | Positional message substitution values. 
startDateUTC | Optional base date for local time calculation. 
localTime | The scheduled local arrival time. 
minimizeJobs | Optional flag to cause the server to scan players time zones to reduce scope. 


