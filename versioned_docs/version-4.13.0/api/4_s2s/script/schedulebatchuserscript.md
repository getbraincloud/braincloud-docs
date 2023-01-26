# ScheduleBatchUserScript
## Overview
Schedules a script to run on the server at a later date.

<PartialServop service_name="script" operation_name="SCHEDULE_BATCH_USER_SCRIPT" / >

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
var segmentIdList = [
	1,
	2
];
var startDateUTC = 1512750683157;
var minutesFromNow = 1;
var scriptProxy = bridge.getScriptServiceProxy();

var postResult = scriptProxy.scheduleBatchUserScript(scriptName, scriptData, segmentIdList, startDateUTC, minutesFromNow);
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
	"operation": "SCHEDULE_BATCH_USER_SCRIPT",
	"data": {
		"scriptName": "path/to/script1",
		"scriptData": {
			"parm": "value"
		},
		"segmentIdList": [
			1,
			2
		],
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

## Method Parameters
Parameter | Description
--------- | -----------
scriptName | The name of the script with its path to be run. 
scriptData | Data to be sent to the script in JSON format. 
segmentIdList | List of target segments. 
startDateUTC | If scheduling at a set time. The start date in UTC in Unix millis timestamp format. 
minutesFromNow | If scheduling in minutes from the current time.  Number of minutes from now to run the script. 


