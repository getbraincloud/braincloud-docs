# RunPeerScriptAsync

Run a cloud script asynchronously in a peer app.



:::tip
The result of the script run can be observed via the portal page for Queued Jobs.
:::

<PartialServop service_name="script" operation_name="RUN_PEER_SCRIPT_ASYNC" />

## Method Parameters
Parameter | Description
--------- | -----------
scriptName | The name of the script with its absolute path to be run.
scriptData | Data to be sent to the script in json format.
peer | Identifies the peer app.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string scriptName = "path/to/script1";
string scriptData = "{\"parm\":\"value\"}";
string peer = "serviceCode";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.ScriptService.RunPeerScriptAsync(scriptName, scriptData, peer, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *scriptName = "path/to/script1";
const char *scriptData = "{\"parm\":\"value\"}";
const char *peer = "serviceCode";

<%= data.branding.codePrefix %>->getScriptService()->runPeerScriptAsync(scriptName, scriptData, peer, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *scriptName = @"path/to/script1";
NSString *scriptData = @"{\"parm\":\"value\"}";
NSString *peer = @"serviceCode";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> scriptService] runPeerScriptAsync:scriptName
             scriptData:scriptData
                   peer:peer
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
String peer = "serviceCode";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getScriptService().runPeerScriptAsync(scriptName, scriptData, peer, this);

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
var peer = "serviceCode";

<%= data.branding.codePrefix %>.script.runPeerScriptAsync(scriptName, scriptData, peer, result =>
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
var  peer = "serviceCode";

ServerResponse result = await <%= data.branding.codePrefix %>.scriptService.runPeerScriptAsync(scriptName:scriptName, scriptData:scriptData, peer:peer);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
local scriptName = "path/to/script1"
local scriptData = {
    "parm": "value"
}
local peer = "serviceCode"

local callback = function(result)
	if result.statusCode == 200 then
		print("Success")
	else
		print("Failed | " .. tostring(result.status))
	end
end

<%= data.branding.codePrefix %>:getScriptService():runPeerScriptAsync(scriptName, scriptData, peer, callback)
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
var peer = "serviceCode";
var scriptProxy = bridge.getScriptServiceProxy();

var postResult = scriptProxy.runPeerScriptAsync(scriptName, scriptData, peer);
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
    "service":"script",
    "operation":"RUN_PEER_SCRIPT",
    "data":{
        "scriptName": "path/to/script1",
        "scriptData"  {
            "parm": "value" 
        },
        "peer": "serviceCode"
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

