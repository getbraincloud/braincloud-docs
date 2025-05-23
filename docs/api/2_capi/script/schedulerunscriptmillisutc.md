# ScheduleRunScriptMillisUTC

Schedules a script to run at given UTC time.

<PartialServop service_name="script" operation_name="SCHEDULE_CLOUD_SCRIPT" />

## Method Parameters

| Parameter      | Description                                              |
| -------------- | -------------------------------------------------------- |
| scriptName     | The name of the script with its absolute path to be run. |
| scriptData     | Data to be sent to the script in JSON format.            |
| startDateInUTC | The start date. (date in millis UTC).                    |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string scriptName = "path/to/script1";
string scriptData = "{\"parm\":\"value\"}";
int startDateInUTC = 1437579786000;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.ScriptService.ScheduleRunScriptMillisUTC(scriptName, scriptData, startDateInUTC, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *scriptName = "path/to/script1";
const char *scriptData = "{\"parm\":\"value\"}";
int startDateInUTC = 1437579786000;

<%= data.branding.codePrefix %>->getScriptService()->scheduleRunScriptMillisUTC(scriptName, scriptData, startDateInUTC, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *scriptName = @"path/to/script1";
NSString *scriptData = @"{\"parm\":\"value\"}";
int startDateInUTC = 1437579786000;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> scriptService] scheduleRunScriptMillisUTC:scriptName
             scriptData:scriptData
             startDateInUTC:startDateInUTC
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String scriptName = "path/to/script1";
String scriptData = "{\"parm\":\"value\"}";
int startDateInUTC = 1437579786000;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getScriptService().scheduleRunScriptMillisUTC(scriptName, scriptData, startDateInUTC, this);

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
var scriptName = "path/to/script1";
var scriptData = {
    "parm": "value"
};
var startDateInUTC = 1437579786000;

<%= data.branding.codePrefix %>.script.scheduleRunScriptMillisUTC(scriptName, scriptData, startDateInUTC, result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
var  scriptName = "path/to/script1";
var  scriptData = {
    "parm": "value"
};
var  startDateInUTC = 1437579786000;

ServerResponse result = await <%= data.branding.codePrefix %>.scriptService.scheduleRunScriptMillisUTC(scriptName:scriptName, scriptData:scriptData, startDateUTC:startDateInUTC);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
// replaced with ScheduleRunScriptUTC() in cloud code script
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"script",
    "operation":"SCHEDULE_CLOUD_SCRIPT",
    "data":{
        "scriptName": "path/to/script1",
        "scriptData"  {
            "parm": "value"
        },
        "startDateInUTC": 1437579786000
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
}
```

</details>
