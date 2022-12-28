# ScheduleRunScriptUTC
## Overview
Schedules a script to run at given UTC time.

<PartialServop service_name="script" operation_name="SCHEDULE_CLOUD_SCRIPT" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// Currently cloud-code only
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// Currently cloud-code only
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// Currently cloud-code only
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// Currently cloud-code only
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// Currently cloud-code only
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
var startDateInUTC = 1437579786000;
var scriptProxy = bridge.getScriptServiceProxy();

var postResult = scriptProxy.scheduleRunScriptUTC(scriptName, scriptData, startDateInUTC);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var scriptName = "path/to/script1";
var scriptData = {
    "parm": "value"
};
var startDateInUTC = 1437579786000;
var scriptProxy = bridge.getScriptServiceProxy();

var postResult = scriptProxy.scheduleRunScriptUTC(scriptName, scriptData, startDateInUTC);
if (postResult.status == 200) {
    // Success!
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
  "data": {
    "gameId": "13229",
    "description": null,
    "result": {},
    "jobId": "8a39b713-afbe-499b-9b03-e135031582fc",
    "localTime": null,
    "createdAt": 1624990277998,
    "runStartTime": 0,
    "runEndTime": 0,
    "playerSessionId": null,
    "scheduledStartTime": 1624990337998,
    "scriptName": "folder/getProperties",
    "jobType": "CloudCode",
    "runState": "Scheduled",
    "parameters": {
      "parm": "value"
    },
    "updatedAt": 1624990277998
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
scriptName | The name of the script with its path to be run.
scriptData | Data to be sent to the script in JSON format.
startDateInUTC | The start date. (date in millis UTC)


