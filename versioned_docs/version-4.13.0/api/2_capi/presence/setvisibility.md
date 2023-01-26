# SetVisibility
## Overview
Update the presence data `visible` field for the caller. An RTT event will be sent to any registered listeners of the caller with their updated presence info.

<PartialServop service_name="presence" operation_name="SET_VISIBILITY" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
bool visible = true;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};
    
<%= data.branding.codePrefix %>.PresenceService.SetVisibility(visible, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
bool visible = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>->getPresenceService()->setVisibility(visible, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
bool visible = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> presenceService] setVisibility:visible
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
boolean visible = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPresenceService().setVisibility(visible, this);

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
var visible = true;

<%= data.branding.codePrefix %>.presence.setVisibility(visible, result =>
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
var presenceProxy = bridge.getPresenceServiceProxy();
var visible = true;

var postResult = presenceProxy.setVisibility(visible);
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
	"service": "presence",
	"operation": "SET_VISIBILITY",
	"data": {
		"visible": true
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
 "data": null,
 "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
visible | Should user appear in presence? True by default.


