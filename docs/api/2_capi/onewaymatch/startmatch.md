# StartMatch
## Overview
Starts a match.

<PartialServop service_name="onewayMatch" operation_name="START_MATCH" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string playerId = "player";
int rangeDelta = 10;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.OnewayMatchService.StartMatch(playerId, rangeDelta, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *playerId = "player";
int rangeDelta = 10;
<%= data.branding.codePrefix %>->getOnewayMatchService()->startMatch(playerId, rangeDelta, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *playerId = @"player";
int rangeDelta = 10;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> onewayMatchService] startMatch:playerId
                 rangeDelta:rangeDelta
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
int rangeDelta = 10;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getOnewayMatchService().startMatch(playerId, rangeDelta, this);

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
var rangeDelta = 10;

<%= data.branding.codePrefix %>.onewayMatch.startMatch(playerId, rangeDelta, result =>
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
var rangeDelta = 10;
var onewayMatchProxy = bridge.getOnewayMatchServiceProxy();

var postResult = onewayMatchProxy.startMatch(playerId, rangeDelta);
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
	"service": "onewayMatch",
	"operation": "START_MATCH",
	"data": {
		"playerId": "player",
		"rangeDelta": 10
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
        "playbackStreamId": "860e3009-c7e7-4fd1-8c5c-cc932fd4ec4a",
        "initiatingPlayerId": "b67b2d73-1e8c-42e9-9be5-9c1879a48555",
        "targetPlayerId": "0da5ad24-2341-42f8-acb5-57aa2dd4ae94",
        "status": "STARTED",
        "summary": {},
        "initialSharedData": {
            "entities": [],
            "statistics": {}
        },
        "events": [],
        "expiryTime": 1472743059453,
        "createdAt": 1472742459459,
        "updatedAt": 1472742459459
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
otherPlayerId | The player to start a match with
rangeDelta | The player rating range delta required for the match to start. If otherPlayerId has too high or low of a rating compared to the current player and range delta, a MATCH_RANGE_ERROR (40334) will be returned


