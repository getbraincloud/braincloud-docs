# RunPeerScript
## Overview
Run a cloud script in a peer app.



:::tip
Note that the data object will contain anything returned from the script
:::

<PartialServop service_name="script" operation_name="RUN_PEER_SCRIPT" / >

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

<%= data.branding.codePrefix %>.ScriptService.RunPeerScript(scriptName, scriptData, peer, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *scriptName = "path/to/script1";
const char *scriptData = "{\"parm\":\"value\"}";
const char *peer = "serviceCode";

<%= data.branding.codePrefix %>->getScriptService()->runPeerScript(scriptName, scriptData, peer, this);
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

[[<%= data.branding.codePrefix %> scriptService] runPeerScript:scriptName
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

<%= data.branding.codePrefix %>.getScriptService().runPeerScript(scriptName, scriptData, peer, this);

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

<%= data.branding.codePrefix %>.script.runPeerScript(scriptName, scriptData, peer, result =>
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
var scriptName = "path/to/script1";
var scriptData = {
    "parm": "value"
};
var peer = "serviceCode";
var scriptProxy = bridge.getScriptServiceProxy();

var postResult = scriptProxy.runPeerScript(scriptName, scriptData, peer);
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
var peer = "serviceCode";
var scriptProxy = bridge.getScriptServiceProxy();

var postResult = scriptProxy.runPeerScript(scriptName, scriptData, peer);
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
        "success": true
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
scriptName | The name of the script with its path to be run
scriptData | Data to be sent to the script in json format
peer | Identifies the peer app


