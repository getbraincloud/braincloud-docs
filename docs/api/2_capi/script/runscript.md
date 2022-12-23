# RunScript
## Overview
Executes a script on the server.


:::tip
Note that the data object will contain anything returned from the script.
:::

:::success
Pro-tip: If a script path is not specified in scriptName field, it will default to cloud code scripts root folder. 
:::


### Status Codes
Code | Name | Description
---- | ---- | -----------
40363 | MISSING_SCRIPT | The script not found in specified folder.

<PartialServop service_name="script" operation_name="RUN" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string scriptName = "path/to/script1";
string scriptData = "{\"arg1\":42,\"arg2\":true,\"arg3\":\"example\"}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.ScriptService.RunScript(scriptName, scriptData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *scriptName = "path/to/script1";
const char *scriptData = "{\"arg1\":42,\"arg2\":true,\"arg3\":\"example\"}";
<%= data.branding.codePrefix %>->getScriptService()->runScript(scriptName, scriptData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *scriptName = @"path/to/script1";
NSString *scriptData = @"{\"arg1\":42,\"arg2\":true,\"arg3\":\"example\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> scriptService] runScript:scriptName
             scriptData:scriptData
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
String scriptData = "{\"arg1\":42,\"arg2\":true,\"arg3\":\"example\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getScriptService().runScript(scriptName, scriptData, this);

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
    "arg1": 42,
    "arg2": true,
    "arg3": "example"
};

<%= data.branding.codePrefix %>.script.runScript(scriptName, scriptData, result =>
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
    "arg1": 42,
    "arg2": true,
    "arg3": "example"
};
var scriptProxy = bridge.getScriptServiceProxy();

var postResult = scriptProxy.runScript(scriptName, scriptData);
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
	"operation": "RUN",
	"data": {
		"scriptName": "path/to/script1",
		"scriptData": {
			"parm": "value"
		}
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
        "success": true
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
scriptName | The name of the script with its path to be run
scriptData | Data to be sent to the script in JSON format


