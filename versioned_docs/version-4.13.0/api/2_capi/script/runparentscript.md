# RunParentScript
## Overview
Run a cloud script in a parent app.



:::tip
Note that the data object will contain anything returned from the script
:::

<PartialServop service_name="script" operation_name="RUN_PARENT_SCRIPT" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string scriptName = "path/to/script1";
string scriptData = "{\"parm\":\"value\"}";
string parentLevelName = "Master";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.ScriptService.RunParentScript(scriptName, scriptData, parentLevelName, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *scriptName = "path/to/script1";
const char *scriptData = "{\"parm\":\"value\"}";
const char *parentLevelName = "Master";

<%= data.branding.codePrefix %>->getScriptService()->runParentScript(scriptName, scriptData, parentLevelName, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *scriptName = @"path/to/script1";
NSString *scriptData = @"{\"parm\":\"value\"}";
NSString *parentLevelName = @"Master";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> scriptService] runParentScript:scriptName
             scriptData:scriptData
            parentLevelName:parentLevelName
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
String parentLevelName = "Master";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getScriptService().runParentScript(scriptName, scriptData, parentLevelName, this);

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
var parentLevelName = "Master";

<%= data.branding.codePrefix %>.script.runParentScript(scriptName, scriptData, parentLevelName, result =>
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
var parentLevelName = "Master";
var scriptProxy = bridge.getScriptServiceProxy();

var postResult = scriptProxy.runParentScript(scriptName, scriptData, parentLevelName);
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
var parentLevelName = "Master";
var scriptProxy = bridge.getScriptServiceProxy();

var postResult = scriptProxy.runParentScript(scriptName, scriptData, parentLevelName);
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
parentLevel | The level name of the parent to run the script from


