# ScheduleCloudScript
## Overview
Schedules a scheduled cloud code job.  Can be scheduled minutes from the current time or at a set time.

*Note - <%= data.branding.productName %> checks for schedule cloud code scripts every minute, so it is not recommended to run jobs that require only a 1-60 second delay.*

<PartialServop service_name="script" operation_name="SCHEDULE_CLOUD_SCRIPT" / >

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
var scriptName = "path/to/script1";
var scriptData = {
	"parm": "value"
};
var startDateUTC = 1512750683157;
var minutesFromNow = 1;
var scriptProxy = bridge.getScriptServiceProxy();

var postResult = scriptProxy.scheduleCloudScript(scriptName, scriptData, startDateUTC, minutesFromNow);
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
	"service": "script",
	"operation": "SCHEDULE_CLOUD_SCRIPT",
	"data": {
		"scriptName": "path/to/script1",
		"scriptData": {
			"parm": "value"
		},
		"startDateUTC": "[[#ts+60000]]",
		"minutesFromNow": 1
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
	"messageResponses": [{
		"status": 200,
		"data": {
			"result": {},
			"scriptName": "testScript",
			"jobId": "48266b95-d197-464d-bb6b-da70aa1e22a9",
			"runState": "Scheduled",
			"description": null,
			"gameId": "10170",
			"runEndTime": 0,
			"parameters": {
				"testParm1": 1
			},
			"runStartTime": 0,
			"scheduledStartTime": 1437576422378
		}
	}]
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
scriptName | The name of the script with its path to be run. 
scriptData | Data to be sent to the script in JSON format. 
startDateUTC | If scheduling at a set time. The start date in UTC in Unix millis timestamp format. 
minutesFromNow | If scheduling in minutes from the current time.  Number of minutes from now to run the script. 


