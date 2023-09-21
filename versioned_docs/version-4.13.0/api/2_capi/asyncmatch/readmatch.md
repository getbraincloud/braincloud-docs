# ReadMatch
## Overview
Returns the current state of the given match.

<PartialServop service_name="asyncMatch" operation_name="READ_MATCH" / >

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

<%= data.branding.codePrefix %>.AsyncMatchService.ReadMatch(ownerId, matchId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *ownerId = "internalPlayerId";
const char *matchId = "matchId";
<%= data.branding.codePrefix %>->getAsyncMatchService()->readMatch(ownerId, matchId, this);
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

[[<%= data.branding.codePrefix %> asyncMatchService] readMatch:ownerId
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

<%= data.branding.codePrefix %>.getAsyncMatchService().readMatch(ownerId, matchId, this);

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

<%= data.branding.codePrefix %>.asyncMatch.readMatch(ownerId, matchId, result =>
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

var postResult = asyncMatchProxy.readMatch(ownerId, matchId);
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
	"operation": "READ_MATCH",
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
		"gameId": "11004",
		"ownerId": "35e8698f-b14d-48ae-a37c-4b2962308b8d",
		"matchId": "cfa752d6-d408-4671-9603-b22bf55d5379",
		"version": 1,
		"players": [{
			"playerId": "35e8698f-b14d-48ae-a37c-4b2962308b8d",
			"playerName": "",
			"pictureUrl": null,
			"summaryFriendData": null
		}, {
			"playerId": "e84c16ea-bd62-4307-83f9-d32f8ac18bca",
			"playerName": "",
			"pictureUrl": null,
			"summaryFriendData": null
		}],
		"status": {
			"status": "PENDING",
			"currentPlayer": "e84c16ea-bd62-4307-83f9-d32f8ac18bca"
		},
		"summary": null,
		"statistics": {},
		"matchState": {
			"testKey": "testValue"
		},
		"createdAt": 1472293357985,
		"updatedAt": 1472293357996
	}
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
ownerId | Match owner identifier
matchId | Match identifier


