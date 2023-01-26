# CreateMatch
## Overview
Creates an instance of an asynchronous match.

Opponents is a JSON array containing objects with a Platform and player ID. Platforms are identified as:

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
string jsonOpponentIds = "[{\"platform\":\"BC\",\"id\":\"profile ID-1\"},{\"platform\":\"FB\",\"id\":\"Facebook ID-1\"},{\"platform\":\"FB\",\"id\":\"Facebook ID-2\"}]";
string pushNotificationMessage = "You have been entered into an async-match!";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.AsyncMatchService.CreateMatch(jsonOpponentIds, pushNotificationMessage, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *jsonOpponentIds = "[{\"platform\":\"BC\",\"id\":\"profile ID-1\"},{\"platform\":\"FB\",\"id\":\"Facebook ID-1\"},{\"platform\":\"FB\",\"id\":\"Facebook ID-2\"}]";
const char *pushNotificationMessage = "You have been entered into an async-match!";
<%= data.branding.codePrefix %>->getAsyncMatchService()->createMatch(jsonOpponentIds, pushNotificationMessage, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *jsonOpponentIds = @"[{\"platform\":\"BC\",\"id\":\"profile ID-1\"},{\"platform\":\"FB\",\"id\":\"Facebook ID-1\"},{\"platform\":\"FB\",\"id\":\"Facebook ID-2\"}]";
NSString *pushNotificationMessage = @"You have been entered into an async-match!";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> asyncMatchService] createMatch:jsonOpponentIds
    pushNotificationMessage:pushNotificationMessage
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String jsonOpponentIds = "[{\"platform\":\"BC\",\"id\":\"profile ID-1\"},{\"platform\":\"FB\",\"id\":\"Facebook ID-1\"},{\"platform\":\"FB\",\"id\":\"Facebook ID-2\"}]";
String pushNotificationMessage = "You have been entered into an async-match!";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getAsyncMatchService().createMatch(jsonOpponentIds, pushNotificationMessage, this);

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
    },
    {
        "platform": "FB",
        "id": "Facebook ID-2"
    }
];
var pushNotificationMessage = "You have been entered into an async-match!";

<%= data.branding.codePrefix %>.asyncMatch.createMatch(jsonOpponentIds, pushNotificationMessage, result =>
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
    },
    {
        "platform": "FB",
        "id": "Facebook ID-2"
    }
];
var pushNotificationMessage = "You have been entered into an async-match!";
var asyncMatchProxy = bridge.getAsyncMatchServiceProxy();

var postResult = asyncMatchProxy.createMatch(jsonOpponentIds, pushNotificationMessage);
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
    "status" : 200,
    "data" :
    {
        "gameId": "com.dnadpk.football",
        "ownerId": "0df9f282-183b-4d67-866e-670fb35a2376",
        "matchId": "match1",
        "version": 0,
        "players": [
            {
                "playerId": "0df9f282-183b-4d67-866e-670fb35a2376",
                "playerName": "",
                "pictureUrl": null,
                "summaryFriendData": null
            },
            {
                "playerId": "4693ec75-3a99-4577-aef7-0f41d299339c",
                "playerName": "Presto1",
                "pictureUrl": null,
                "summaryFriendData": null
            }
        ],
        "status": {
            "status": "NOT_STARTED",
            "currentPlayer": "0df9f282-183b-4d67-866e-670fb35a2376"
        },
        "summary": null,
        "createdAt": 1415641372974,
        "updatedAt": 1415641372974
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
jsonOpponentIds | List of objects identifying the opponent platform and id for this match.
pushNotificationMessage | Optional push notification message to send to the other party. Refer to the Push Notification functions for the syntax required.


