# GetScheduledCloudScripts
## Overview
Retrieves list of scheduled cloud scripts having a scheduled start time 
less than or equal to the specified scheduledStartTime time (UTC time in milliseconds).

<PartialServop service_name="script" operation_name="GET_SCHEDULED_CLOUD_SCRIPTS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
int startDateInUTC = 1437579786000;

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

_bc.ScriptService.GetScheduledCloudScripts(startDateInUTC, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
int startDateInUTC = 1437579786000;

_bc->getScriptService()->getScheduledCloudScripts(startDateInUTC, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
int startDateInUTC = 1437579786000;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[_bc scriptService] getScheduledCloudScripts:startDateInUTC
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
int startDateInUTC = 1437579786000;
this; // implements IServerCallback

_bc.getScriptService().getScheduledCloudScripts(startDateInUTC, this);

public void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)
{
    System.out.print(String.format("Success | %s", jsonData.toString()));
}
public void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)
{
    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));
}
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var startDateInUTC = 1437579786000;

_bc.script.getScheduledCloudScripts(startDateInUTC, result =>
{
    var status = result.status;
    console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var _script = bridge.getScriptServiceProxy();

// Find scheduled jobs matching given script name
var dateTimeSixtyMinsFromNowInMillis = new Date().getTime() + (60 * 60 * 1000);
var result = _script.getScheduledCloudScripts(dateTimeSixtyMinsFromNowInMillis);

if ((result.status == 200) && (result.data !== null)) {
    // Find those that match script name want
    for (var i = 0; i < result.data.scheduledJobs.length; i++) {
        // delete any that match
        if (result.data.scheduledJobs[i].scriptName === "emptyScript") {
            _script.cancelScheduledScript(result.data.scheduledJobs[i].jobId);
         }
    }
}

// schedule single replacement 
var retVal = _script.scheduleRunScriptMinutes("emptyScript", null, 60);
retVal;
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var _script = bridge.getScriptServiceProxy();

// Find scheduled jobs matching given script name
var dateTimeSixtyMinsFromNowInMillis = new Date().getTime() + (60 * 60 * 1000);
var result = _script.getScheduledCloudScripts(dateTimeSixtyMinsFromNowInMillis);

if ((result.status == 200) && (result.data !== null)) {
    // Find those that match script name want
    for (var i = 0; i < result.data.scheduledJobs.length; i++) {
        // delete any that match
        if (result.data.scheduledJobs[i].scriptName === "emptyScript") {
            _script.cancelScheduledScript(result.data.scheduledJobs[i].jobId);
         }
    }
}

// schedule single replacement 
var retVal = _script.scheduleRunScriptMinutes("emptyScript", null, 60);
retVal;
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
  "scheduledJobs": [
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
startDateUTC | Return scripts that are scheduled to run before this specified time.


