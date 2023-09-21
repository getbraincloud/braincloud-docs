# CreateMatchWithInitialTurn
## Overview
Creates an instance of an asynchronous match with an initial turn.

Opponent IDs is a JSON array containing objects with a Platform and player ID. Platforms are identified as:

- BC - a <%= data.branding.productName %> profile id
- FB - a Facebook id
- STEAM - a Steam id
- PSN - a Playstation id

An example of this string would be:

```
[{
  "platform":"BC",
  "id": "some-braincloud-profile"
},
{
  "platform":"FB",
  "id": "some-facebook-id"
}]
```

<PartialServop service_name="asyncMatch" operation_name="CREATE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string jsonOpponentIds = "[{\"platform\":\"BC\",\"id\":\"profile ID-1\"},{\"platform\":\"FB\",\"id\":\"Facebook ID-1\"}]";
string jsonMatchState = "{}";
string pushNotificationMessage = "You have been entered into an async-match!";
string nextPlayer = "Facebook ID-1";
string jsonSummary = "{\"Address\": \"South Africa\"}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.AsyncMatchService.CreateMatchWithInitialTurn(jsonOpponentIds, jsonMatchState, pushNotificationMessage, nextPlayer, jsonSummary, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *jsonOpponentIds = "[{\"platform\":\"BC\",\"id\":\"profile ID-1\"},{\"platform\":\"FB\",\"id\":\"Facebook ID-1\"}]";
const char *jsonMatchState = "{}";
const char *pushNotificationMessage = "You have been entered into an async-match!";
const char *nextPlayer = "Facebook ID-1";
const char *jsonSummary = "{\"Address\": \"South Africa\"}";
<%= data.branding.codePrefix %>->getAsyncMatchService()->createMatchWithInitialTurn(jsonOpponentIds, jsonMatchState, pushNotificationMessage, nextPlayer, jsonSummary, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *jsonOpponentIds = @"[{\"platform\":\"BC\",\"id\":\"profile ID-1\"},{\"platform\":\"FB\",\"id\":\"Facebook ID-1\"}]";
NSString *jsonMatchState = @"{}";
NSString *pushNotificationMessage = @"You have been entered into an async-match!";
NSString *nextPlayer = @"Facebook ID-1";
NSString *jsonSummary = @"{\"Address\": \"South Africa\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> asyncMatchService] createMatchWithInitialTurn:jsonOpponentIds
             jsonMatchState:jsonMatchState
    pushNotificationMessage:pushNotificationMessage
                 nextPlayer:nextPlayer
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
String jsonOpponentIds = "[{\"platform\":\"BC\",\"id\":\"profile ID-1\"},{\"platform\":\"FB\",\"id\":\"Facebook ID-1\"}]";
String jsonMatchState = "{}";
String pushNotificationMessage = "You have been entered into an async-match!";
String nextPlayer = "Facebook ID-1";
String jsonSummary = "{\"Address\": \"South Africa\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getAsyncMatchService().createMatchWithInitialTurn(jsonOpponentIds, jsonMatchState, pushNotificationMessage, nextPlayer, jsonSummary, this);

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
var jsonOpponentIds = [
    {
        "platform": "BC",
        "id": "profile ID-1"
    },
    {
        "platform": "FB",
        "id": "Facebook ID-1"
    }
];
var jsonMatchState = {};
var pushNotificationMessage = "You have been entered into an async-match!";
var nextPlayer = "Facebook ID-1";
var jsonSummary = {
    "Address": "South Africa"
};

<%= data.branding.codePrefix %>.asyncMatch.createMatchWithInitialTurn(jsonOpponentIds, jsonMatchState, pushNotificationMessage, nextPlayer, jsonSummary, result =>
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
var jsonOpponentIds = [
    {
        "platform": "BC",
        "id": "profile ID-1"
    },
    {
        "platform": "FB",
        "id": "Facebook ID-1"
    }
];
var jsonMatchState = {};
var pushNotificationMessage = "You have been entered into an async-match!";
var nextPlayer = "Facebook ID-1";
var jsonSummary = {
    "Address": "South Africa"
};
var asyncMatchProxy = bridge.getAsyncMatchServiceProxy();

var postResult = asyncMatchProxy.createMatchWithInitialTurn(jsonOpponentIds, jsonMatchState, pushNotificationMessage, nextPlayer, jsonSummary);
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
	"operation": "CREATE",
	"data": {
		"players": [
			{
				"platform": "BC",
				"id": "1st-profile-id"
			},
			{
				"platform": "FB",
				"id": "2nd-profile-id"
			}
		],
		"matchState": {},
		"pushContent": "You have been entered into an async-match!",
		"currentPlayer": "2nd-profile-id",
		"summary": {
			"Address": "South Africa"
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
                "playerName" : "UserA_CPP_96764398"
            },
            {
                "pictureUrl" : null,
                "playerId" : "3bb9dwasdd-9c9a-454f-ae17-9703a66973c8",
                "playerName" : "UserB_CPP_80148460"
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
jsonOpponentIds | List of objects identifying the opponent platform and id for this match.
jsonMatchState | JSON string blob provided by the caller
pushNotificationMessage | Optional push notification message to send to the other party. Refer to the Push Notification functions for the syntax required.
nextPlayer | Optionally, force the next player player to be a specific player
jsonSummary | Optional JSON string defining what the other player will see as a summary of the game when listing their games


