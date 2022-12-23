# UpdateActivity
## Overview
Update the presence data activity field for the caller. Note that *Support rich activity* must be enabled in order for this API call to work (see Messaging > Presence in the portal). An RTT event will be sent to any registered listeners of the caller with their updated presence info.

<PartialServop service_name="presence" operation_name="UPDATE_ACTIVITY" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string activity = "{ \"LOCATION\": \"POKER_TABLE\", \"STATUS\": \"PLAYING_GAME\"}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};
    
<%= data.branding.codePrefix %>.PresenceService.UpdateActivity(activity, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* activity = "{ \"LOCATION\": \"POKER_TABLE\", \"STATUS\": \"PLAYING_GAME\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>->getPresenceService()->updateActivity(activity, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString* activity = @"{ \"LOCATION\": \"POKER_TABLE\", \"STATUS\": \"PLAYING_GAME\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> presenceService] updateActivity:activity
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String activity = "{ \"LOCATION\": \"POKER_TABLE\", \"STATUS\": \"PLAYING_GAME\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPresenceService().updateActivity(activity, this);

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
var activity = { "LOCATION": "POKER_TABLE", "STATUS": "PLAYING_GAME" };

<%= data.branding.codePrefix %>.presence.updateActivity(activity, result =>
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
var activity { "LOCATION": "POKER_TABLE", "STATUS": "PLAYING_GAME" };

var postResult = presenceProxy.getPresenceOfUsers(activity);
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
	"operation": "UPDATE_ACTIVITY",
	"data": {
		"activity": {}
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
activity | Presence activity record json. Size of the given activity must be equal to or less than the *Max content size (bytes)* app setting (see Messaging > Presence in the portal).


