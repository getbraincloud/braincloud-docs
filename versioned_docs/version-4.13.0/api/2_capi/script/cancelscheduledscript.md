# CancelScheduledScript
## Overview
Cancels a scheduled script

<PartialServop service_name="script" operation_name="CANCEL_SCHEDULED_SCRIPT" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string jobId = "idsfihihfuvhvuh";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.ScriptService.CancelScheduledScript(jobId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *jobId = "idsfihihfuvhvuh";

<%= data.branding.codePrefix %>->getScriptService()->cancelScheduledScript(jobId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *jobId = @"idsfihihfuvhvuh";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> scriptService] cancelScheduledScript:jobId
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String jobId = "idsfihihfuvhvuh";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getScriptService().cancelScheduledScript(jobId, this);

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
var jobId = "idsfihihfuvhvuh";

<%= data.branding.codePrefix %>.script.cancelScheduledScript(jobId, result =>
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
var jobId = "idsfihihfuvhvuh";
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

```cfscript
var jobId = "idsfihihfuvhvuh";
var scriptProxy = bridge.getScriptServiceProxy();

var postResult = scriptProxy.cancelScheduledScript(jobId);
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
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
jobId | Identifies script job to cancel


