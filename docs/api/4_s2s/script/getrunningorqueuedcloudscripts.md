# GetRunningOrQueuedCloudScripts
## Overview
Retrieves scripts currently running or queued.

<PartialServop service_name="script" operation_name="GET_RUNNING_OR_QUEUED_CLOUD_SCRIPTS" / >

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
var _script = bridge.getScriptServiceProxy();

// Find currently running scripts
var result = _script.getRunningOrQueuedCloudScripts();

if ((result.status == 200) && (result.data !== null)) {
    // Found some
    for (var i = 0; i < result.data.runningOrQueuedJobs.length; i++) {
        // take action

    }
}

```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var _script = bridge.getScriptServiceProxy();

// Find currently running scripts
var result = _script.getRunningOrQueuedCloudScripts();

if ((result.status == 200) && (result.data !== null)) {
    // Found some
    for (var i = 0; i < result.data.runningOrQueuedJobs.length; i++) {
        // take action

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
 "data": {
  "runningOrQueuedJobs": [
   {
    "gameId": "20005",
    "description": null,
    "jobId": "5fbc8729-5123-4dca-8644-d78edcb7f712",
    "localTime": null,
    "createdAt": 1512750600574,
    "runStartTime": 0,
    "playerSessionId": null,
    "scheduledStartTime": 1512754200552,
    "scriptName": "emptyScript",
    "jobType": "CloudCode",
    "parameters": null,
    "updatedAt": 1512750600574
   },
   {
    "gameId": "20005",
    "description": null,
    "jobId": "8267199b-5567-4771-91ca-c25b61f83ccd",
    "localTime": null,
    "createdAt": 1512750610258,
    "runStartTime": 0,
    "playerSessionId": null,
    "scheduledStartTime": 1512754210258,
    "scriptName": "emptyScript",
    "jobType": "CloudCode",
    "parameters": null,
    "updatedAt": 1512750610258
   },
   {
    "gameId": "20005",
    "description": null,
    "jobId": "4c9d06bf-48e4-4308-8734-9f74993f8e4f",
    "localTime": null,
    "createdAt": 1512750683157,
    "runStartTime": 0,
    "playerSessionId": null,
    "scheduledStartTime": 1512754283157,
    "scriptName": "emptyScript",
    "jobType": "CloudCode",
    "parameters": null,
    "updatedAt": 1512750683157
   }
  ]
 },
 "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
n/a | No parameters.


