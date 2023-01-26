# CancelScheduledScript
## Overview
Cancels a scheduled cloud code job.

<PartialServop service_name="script" operation_name="CANCEL_SCHEDULED_SCRIPT" / >

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
var jobId = "the-job-id";
var scriptProxy = bridge.getScriptServiceProxy();

var postResult = scriptProxy.cancelScheduledScript(jobId);
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
	"operation": "CANCEL_SCHEDULED_SCRIPT",
	"data": {
		"jobId": "the-job-id"
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
			"jobType": "CloudCode",
			"scriptName": "testScript",
			"jobId": "3d3d4a7d-ad72-4bf1-9219-184f465e5c33",
			"gameId": "20001",
			"updatedAt": 1466579169118,
			"runState": "Cancelled",
			"description": null,
			"createdAt": 1466579169118,
			"runEndTime": 0,
			"localTime": null,
			"parameters": {
				"testParm1": 1
			},
			"scheduledStartTime": 1466582769118,
			"runStartTime": 0
		}
	}]
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
jobId | The id of the job to cancel. 


