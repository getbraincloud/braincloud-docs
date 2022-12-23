# GetUserStatus
## Overview
Retrieve the specified user status effect. If `statusName` parameter is empty string returns all active status effects.

<PartialServop service_name="playerState" operation_name="GET_USER_STATUS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string statusName = "a-status-name";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PlayerStateService.GetUserStatus(statusName, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *statusName = "a-status-name";
<%= data.branding.codePrefix %>->getPlayerStateService()->getUserStatus(statusName, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *statusName = @"a-status-name";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> playerStateService] getUserStatus:statusName
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String statusName = "a-status-name";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPlayerStateService().getUserStatus(statusName, this);

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
var statusName = "a-status-name";

<%= data.branding.codePrefix %>.playerState.getUserStatus(statusName, result =>
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
var statusName = "a-status-name";
var playerStateProxy = bridge.getPlayerStateServiceProxy();

var postResult = playerStateProxy.getUserStatus(statusName);
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
	"operation": "GET_USER_STATUS",
	"data": {
		"statusName": "a-status-name"
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
  "data": {
    "rapidFire": {
      "activeStart": 1567537263623,
      "statusName": "rapidFire",
      "details": {},
      "activeUntil": 1567537323623
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
statusName | Name of the status to retrieve. Retrieve all if empty string.


