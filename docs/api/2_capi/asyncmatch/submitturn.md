# SubmitTurn
## Overview
Submits a turn for the given match.

<PartialServop service_name="asyncMatch" operation_name="SUBMIT_TURN" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string ownerId = "internalPlayerId";
string matchId = "matchId";
string jsonMatchState = "{}";
string pushNotificationMessage = "You have been entered into an async-match!";
string nextPlayer = "player2Id";
string jsonSummary = "{\"Address\":\"South Africa\"}";
string jsonStatistics = "{\"statsName\":\"statValue\"}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.AsyncMatchService.SubmitTurn(ownerId, matchId, version, jsonMatchState, pushNotificationMessage, nextPlayer, jsonSummary, jsonStatistics, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *ownerId = "internalPlayerId";
const char *matchId = "matchId";
const char *jsonMatchState = "{}";
const char *pushNotificationMessage = "You have been entered into an async-match!";
const char *nextPlayer = "player2Id";
const char *jsonSummary = "{\"Address\":\"South Africa\"}";
const char *jsonStatistics = "{\"statsName\":\"statValue\"}";
<%= data.branding.codePrefix %>->getAsyncMatchService()->submitTurn(ownerId, matchId, version, jsonMatchState, pushNotificationMessage, nextPlayer, jsonSummary, jsonStatistics, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *ownerId = @"internalPlayerId";
NSString *matchId = @"matchId";
NSString *jsonMatchState = @"{}";
NSString *pushNotificationMessage = @"You have been entered into an async-match!";
NSString *nextPlayer = @"player2Id";
NSString *jsonSummary = @"{\"Address\":\"South Africa\"}";
NSString *jsonStatistics = @"{\"statsName\":\"statValue\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> asyncMatchService] submitTurn:ownerId
                    matchId:matchId
                    version:version
             jsonMatchState:jsonMatchState
    pushNotificationMessage:pushNotificationMessage
                 nextPlayer:nextPlayer
                jsonSummary:jsonSummary
             jsonStatistics:jsonStatistics
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
String jsonMatchState = "{}";
String pushNotificationMessage = "You have been entered into an async-match!";
String nextPlayer = "player2Id";
String jsonSummary = "{\"Address\":\"South Africa\"}";
String jsonStatistics = "{\"statsName\":\"statValue\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getAsyncMatchService().submitTurn(ownerId, matchId, version, jsonMatchState, pushNotificationMessage, nextPlayer, jsonSummary, jsonStatistics, this);

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
var jsonMatchState = {};
var pushNotificationMessage = "You have been entered into an async-match!";
var nextPlayer = "player2Id";
var jsonSummary = {
    "Address": "South Africa"
};
var jsonStatistics = {
    "statsName": "statValue"
};

<%= data.branding.codePrefix %>.asyncMatch.submitTurn(ownerId, matchId, version, jsonMatchState, pushNotificationMessage, nextPlayer, jsonSummary, jsonStatistics, result =>
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
var jsonMatchState = {};
var pushNotificationMessage = "You have been entered into an async-match!";
var nextPlayer = "player2Id";
var jsonSummary = {
    "Address": "South Africa"
};
var jsonStatistics = {
    "statsName": "statValue"
};
var asyncMatchProxy = bridge.getAsyncMatchServiceProxy();

var postResult = asyncMatchProxy.submitTurn(ownerId, matchId, version, jsonMatchState, pushNotificationMessage, nextPlayer, jsonSummary, jsonStatistics);
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
	"operation": "SUBMIT_TURN",
	"data": {
		"ownerId": "the-owner-id",
		"matchId": "the-match-id",
		"version": 1,
		"matchState": {},
		"pushContent": "It's your turn!",
		"currentPlayer": "2nd-profle-id",
		"summary": {
			"Address": "South Africa"
		},
		"statistics": {
			"statsName": "statValue"
		}
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
    "data" : {
        "createdAt" : 1449737412088,
        "gameId" : "102345",
        "matchId" : "af876cc7-1dd1-4fbe-959d-a9awdsab9a1c",
        "ownerId" : "c76009c3-ea92-41c5-8560-e1dwasc07ce6b",
        "players" : [
            {
                "pictureUrl" : null,
                "playerId" : "c76009c3-ea92-41c5-8560-e1dwasc07ce6b",
                "playerName" : "UserA_CPP_96764398",
                "summaryFriendData": null
            },
            {
                "pictureUrl" : null,
                "playerId" : "3bb9dwasdd-9c9a-454f-ae17-9703a66973c8",
                "playerName" : "UserB_CPP_80148460",
                "summaryFriendData": null
            }
        ],
        "status" : {
            "currentPlayer" : "3bb9dwasdd-9c9a-454f-ae17-9703a66973c8",
            "status" : "PENDING"
        },
        "summary" : {
            "map" : "level01"
        },
        "updatedAt" : 1449737412092,
        "version" : 1
    },
    "status" : 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
ownerId | Match owner identifier
matchId | Match identifier
version | Game state version to ensure turns are submitted once and in order
jsonMatchState | JSON string blob provided by the caller
pushNotificationMessage | Optional push notification message to send to the other party. Refer to the Push Notification functions for the syntax required.
nextPlayer | Optionally, force the next player player to be a specific player
jsonSummary | Optional JSON string defining what the other player will see as a summary of the game when listing their games
jsonStatistics | Optional JSON string blob provided by the caller


