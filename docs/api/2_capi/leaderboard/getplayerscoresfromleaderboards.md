# GetPlayerScoresFromLeaderboards
## Overview
Gets a player's score from multiple leaderboards. Will only return scores if they exist.

<PartialServop service_name="leaderboard" operation_name="GET_PLAYER_SCORES_FROM_LEADERBOARDS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string[] leaderboardIds = { "leaderboardId1", "leaderboardId2" };
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LeaderboardService.GetPlayerScoresFromLeaderboards(leaderboardIds, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
std::vector<std::string> leaderboardIds;
leaderboardIds.push_back("leaderboardId1");
leaderboardIds.push_back("leaderboardId2");
<%= data.branding.codePrefix %>->getLeaderboardService()->getPlayerScoresFromLeaderboards(leaderboardIds, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSArray *leaderboardIds = @[ @"leaderboardId1", @"leaderboardId2" ];
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> leaderboardService] getPlayerScoresFromLeaderboards:leaderboardIds
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String[] leaderboardIds = { "leaderboardId1", "leaderboardId2" };
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLeaderboardService().getPlayerScoresFromLeaderboards(leaderboardIds, this);

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
var leaderboardIds = [ "leaderboardId1", "leaderboardId2" ];

<%= data.branding.codePrefix %>.leaderboard.getPlayerScoresFromLeaderboards(leaderboardIds, result =>
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
var leaderboardIds = [ "leaderboardId1", "leaderboardId2" ];
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.getPlayerScoresFromLeaderboards(leaderboardIds);
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
	"service": "leaderboard",
	"operation": "GET_PLAYER_SCORES_FROM_LEADERBOARDS",
	"data": {
		"leaderboardIds": [
			"1st-leaderboard-id",
			"2nd-leaderboard-id"
		]
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
		"scores": [{
			"score": 100,
			"data": {
				"test": "testdata"
			},
			"createdAt": 1484933569566,
			"updatedAt": 1484933569566,
			"leaderboardId": "testLeaderboard",
			"versionId": 150
		}, {
			"score": 10,
			"data": null,
			"createdAt": 1484933681216,
			"updatedAt": 1484933681216,
			"leaderboardId": "testLeaderboard2",
			"versionId": 3
		}]
	}
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardIds | Collection of leaderboard IDs


