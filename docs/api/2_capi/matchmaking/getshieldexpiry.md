# GetShieldExpiry
## Overview
Gets the shield expiry for the given player id. Passing in a null player id will return the shield expiry for the current player. The value returned is the time in UTC millis when the shield will expire.

<PartialServop service_name="matchMaking" operation_name="GET_SHIELD_EXPIRY" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string playerId = "player";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.MatchMakingService.GetShieldExpiry(playerId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *playerId = "player";
<%= data.branding.codePrefix %>->getMatchMakingService()->getShieldExpiry(playerId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *playerId = @"player";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> matchMakingService] getShieldExpiry:playerId
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String playerId = "player";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getMatchMakingService().getShieldExpiry(playerId, this);

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
var playerId = "player";

<%= data.branding.codePrefix %>.matchMaking.getShieldExpiry(playerId, result =>
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
var playerId = "player";
var matchMakingProxy = bridge.getMatchMakingServiceProxy();

var postResult = matchMakingProxy.getShieldExpiry(playerId);
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
  "playerId": "player"
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
        "shieldExpiry": 1433259734956
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
playerId | The player id or use null to retrieve for the current player


