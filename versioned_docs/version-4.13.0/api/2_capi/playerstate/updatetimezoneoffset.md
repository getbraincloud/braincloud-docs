# UpdateTimezoneOffset
## Overview
Sets the user's timezone offset.

<PartialServop service_name="playerState" operation_name="UPDATE_TIMEZONE_OFFSET" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
int timeZoneOffset = -2;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PlayerStateService.UpdateTimeZoneOffset(timeZoneOffset, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
int timeZoneOffset = -2;
<%= data.branding.codePrefix %>->getPlayerStateService()->updateTimeZoneOffset(timeZoneOffset, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
int timeZoneOffset = -2;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> playerStateService] updateTimeZoneOffset:timeZoneOffset
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
int timeZoneOffset = -2;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPlayerStateService().updateTimeZoneOffset(timeZoneOffset, this);

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
int timeZoneOffset = -2;

<%= data.branding.codePrefix %>.playerState.updateTimeZoneOffset(timeZoneOffset, result =>
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
int timeZoneOffset = -2;
var playerStateProxy = bridge.getPlayerStateServiceProxy();

var postResult = playerStateProxy.updateTimeZoneOffset(timeZoneOffset);
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
	"service": "playerState",
	"operation": "UPDATE_TIMEZONE_OFFSET",
	"data": {
		"timeZoneOffset": -2
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
    "status":200,
    "data":
    {
        "timeZoneOffset": -2
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
timeZoneOffset | The numeric timezone offset of the user


