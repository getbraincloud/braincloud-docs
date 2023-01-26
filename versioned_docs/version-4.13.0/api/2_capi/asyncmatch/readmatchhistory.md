# ReadMatchHistory
## Overview
Returns the match history of the given match.

<PartialServop service_name="asyncMatch" operation_name="READ_MATCH_HISTORY" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string ownerId = "internalPlayerId";
string matchId = "matchId";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.AsyncMatchService.ReadMatchHistory(ownerId, matchId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *ownerId = "internalPlayerId";
const char *matchId = "matchId";
<%= data.branding.codePrefix %>->getAsyncMatchService()->readMatchHistory(ownerId, matchId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *ownerId = @"internalPlayerId";
NSString *matchId = @"matchId";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> asyncMatchService] readMatchHistory:ownerId
                    matchId:matchId
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String ownerId = "internalPlayerId";
String matchId = "matchId";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getAsyncMatchService().readMatchHistory(ownerId, matchId, this);

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
var ownerId = "internalPlayerId";
var matchId = "matchId";

<%= data.branding.codePrefix %>.asyncMatch.readMatchHistory(ownerId, matchId, result =>
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
var ownerId = "internalPlayerId";
var matchId = "matchId";
var asyncMatchProxy = bridge.getAsyncMatchServiceProxy();

var postResult = asyncMatchProxy.readMatchHistory(ownerId, matchId);
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
	"service": "asyncMatch",
	"operation": "READ_MATCH_HISTORY",
	"data": {
		"ownerId": "the-owner-id",
		"matchId": "the-match-id"
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
        "gameId": "14577",
        "ownerId": "2bd32bc6-c2ec-4916-a1a8-02b7a38540ad",
        "matchId": "1aac24b2-7976-4fd7-b7c6-44d32e6d26a4",
        "turns": [
            {
                "playerId": "2bd32bc6-c2ec-4916-a1a8-02b7a38540ad",
                "matchState": {
                    "color": "red"
                },
                "createdAt": 1442507319697
            },
            {
                "playerId": "11c9324d-9ed1-416d-b124-5228c1efafac",
                "matchState": {},
                "createdAt": 1442507703667
            }
        ]
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
ownerId | Match owner identifier
matchId | Match identifier


