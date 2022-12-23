# UpdateMatchSummaryData
## Overview
Allows the current player (only) to update Summary data without having to submit a whole turn.

<PartialServop service_name="asyncMatch" operation_name="UPDATE_SUMMARY" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string ownerId = "internalPlayerId";
string matchId = "matchId";
string jsonSummary = "{\"Address\":\"North America\"}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.AsyncMatchService.UpdateMatchSummaryData(ownerId, matchId, version, jsonSummary, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *ownerId = "internalPlayerId";
const char *matchId = "matchId";
const char *jsonSummary = "{\"Address\":\"North America\"}";
<%= data.branding.codePrefix %>->getAsyncMatchService()->updateMatchSummaryData(ownerId, matchId, version, jsonSummary, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *ownerId = @"internalPlayerId";
NSString *matchId = @"matchId";
NSString *jsonSummary = @"{\"Address\":\"North America\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> asyncMatchService] updateMatchSummaryData:ownerId
                    matchId:matchId
                    version:version
                jsonSummary:jsonSummary
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
String jsonSummary = "{\"Address\":\"North America\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getAsyncMatchService().updateMatchSummaryData(ownerId, matchId, version, jsonSummary, this);

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
var jsonSummary = {
    "Address": "North America"
};

<%= data.branding.codePrefix %>.asyncMatch.updateMatchSummaryData(ownerId, matchId, version, jsonSummary, result =>
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
var jsonSummary = {
    "Address": "North America"
};
var asyncMatchProxy = bridge.getAsyncMatchServiceProxy();

var postResult = asyncMatchProxy.updateMatchSummaryData(ownerId, matchId, version, jsonSummary);
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
	"operation": "UPDATE_SUMMARY",
	"data": {
		"ownerId": "the-owner-id",
		"matchId": "the-match-id",
		"version": 1,
		"summary": {
			"Address": "North America"
		},
		"pushContent": "The async-match has been updated!"
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
        "gameId": "145677",
        "ownerId": "2bd723c6-c2ec-4946-a1a8-02b7a38540ad",
        "matchId": "1aac24b2-7976-4fd7-b7c6-44d7ae6d26a4",
        "version": 2,
        "players": [
            {
                "playerId": "2bd723c6-c2ec-4946-a1a8-02b7a38540ad",
                "playerName": "UserA",
                "pictureUrl": null,
                "summaryFriendData": null
            },
            {
                "playerId": "11c2dd4d-9ed1-416d-bd04-5228c1efafac",
                "playerName": "UserB",
                "pictureUrl": null,
                "summaryFriendData": null
            }
        ],
        "status": {
            "status": "PENDING",
            "currentPlayer": "11c2dd4d-9ed1-416d-bd04-5228c1efafac"
        },
        "summary": {
            "resources": 2564
        },
        "createdAt": 1442507219609,
        "updatedAt": 1442507550372
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
ownerId | Match owner identifier
matchId | Match identifier
version | Game state version to ensure turns are submitted once and in order
jsonSummary | JSON string provided by the caller that other players will see as a summary of the game when listing their games


