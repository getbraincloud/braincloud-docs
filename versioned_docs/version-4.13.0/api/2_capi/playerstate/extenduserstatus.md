# ExtendUserStatus
## Overview
Extends a user's status.

<PartialServop service_name="playerState" operation_name="EXTEND_USER_STATUS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string statusName = "a-status-name";
int additionalSecs = 1000;
string details = "{}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PlayerStateService.ExtendUserStatus(statusName, additionalSecs, details, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *statusName = "a-status-name";
int additionalSecs = 1000;
const char *details = "{}";
<%= data.branding.codePrefix %>->getPlayerStateService()->extendUserStatus(statusName, additionalSecs, details, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *statusName = @"a-status-name";
int additionalSecs = 1000;
NSString *details = "{}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> playerStateService] extendUserStatus:statusName
             additionalSecs:additionalSecs
                    details:details
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
int additionalSecs = 1000;
String details = "{}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPlayerStateService().extendUserStatus(statusName, additionalSecs, details, this);

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
var additionalSecs = 1000;
var details = {};

<%= data.branding.codePrefix %>.playerState.extendUserStatus(statusName, additionalSecs, details, result =>
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
var additionalSecs = 1000;
var details = {};
var playerStateProxy = bridge.getPlayerStateServiceProxy();

var postResult = playerStateProxy.extendUserStatus(statusName, additionalSecs, details);
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
	"operation": "EXTEND_USER_STATUS",
	"data": {
		"statusName": "a-status-name",
		"additionalSecs": 1000,
		"details": {}
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
    "activeStart": 1567537263623,
    "statusName": "rapidFire",
    "details": {},
    "activeUntil": 1567538323623
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
statusName | Name of the status.
additionalSecs | Add time to existing expiry time. 
details | Json String to add additional details.


