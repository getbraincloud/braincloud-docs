# SwitchToParentProfile
## Overview
Switch to a Parent profile.

<PartialServop service_name="identity" operation_name="SWITCH_TO_PARENT_PROFILE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string levelName = "Master";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.IdentityService.SwitchToParentProfile(levelName, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *levelName = "Master";
<%= data.branding.codePrefix %>->getIdentityService()->switchToParentProfile(levelName, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *levelName = @"Master";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> identityService] switchToParentProfile:levelName
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String levelName = "Master";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getIdentityService().switchToParentProfile(levelName, this);

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
var levelName = "Master";

<%= data.branding.codePrefix %>.identity.switchToParentProfile(levelName, result =>
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
var levelName = "Master";
var identityProxy = bridge.getIdentityServiceProxy();

var postResult = identityProxy.switchToParentProfile(levelName);
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
	"service": "identity",
	"operation": "SWITCH_TO_PARENT_PROFILE",
	"data": {
		"levelName": "Master"
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
   "data":{  
      "gameId":"12335",
      "profileId":"08ae9b33-3e9d-43d5-835e-7915e0da0fca",
      "switchToAppId":"12335"
   },
   "status":200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
parentLevelName | The level of the parent to switch to


