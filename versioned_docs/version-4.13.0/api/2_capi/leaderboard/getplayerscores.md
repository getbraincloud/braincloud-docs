# GetPlayerScores
## Overview
Retrieves up to maxResults scores data for user for arcade-style leaderboard.

<PartialServop service_name="leaderboard" operation_name="GET_PLAYER_SCORES" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string leaderboardId = "anArcadeLeaderboardId";
int versionId = -1;
int maxResults = 10;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LeaderboardService.GetPlayerScores(leaderboardId, versionId, maxResults, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *leaderboardId = "anArcadeLeaderboardId";
int versionId = -1;
int maxResults = 10;
<%= data.branding.codePrefix %>->getLeaderboardService()->getPlayerScores(leaderboardId, versionId, maxResults, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *leaderboardId = @"anArcadeLeaderboardId";
int versionId = -1;
int maxResults = 10;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> leaderboardService] getPlayerScores:leaderboardId
                  versionId:versionId
				 maxResults:maxResults
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String leaderboardId = "anArcadeLeaderboardId";
int versionId = -1;
int maxResults = 10;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLeaderboardService().getPlayerScores(leaderboardId, versionId, maxResults, this);

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
var leaderboardId = "anArcadeLeaderboardId";
var versionId = -1;
var maxResults = 10;
<%= data.branding.codePrefix %>.leaderboard.getPlayerScores(leaderboardId, versionId, maxResults, result =>
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
var leaderboardId = "anArcadeLeaderboardId";
var versionId = -1;
var maxResults = 10;
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.getPlayerScores(leaderboardId, versionId, maxResults);
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
	"operation": "GET_PLAYER_SCORES",
	"data": {
		"leaderboardId": "anArcadeLeaderboardId",
		"versionId": -1,
		"maxResults": 10
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
    "versionId": 1,
    "scores": [
      {
        "score": 10101,
        "data": {
          "nickname": "batman"
        },
        "createdAt": 1613678944374,
        "updatedAt": 1613678944374
      },
      {
        "score": 101,
        "data": {
          "nickname": "batman"
        },
        "createdAt": 1613678939147,
        "updatedAt": 1613678939147
      },
      {
        "score": 10,
        "data": {
          "nickname": "batman"
        },
        "createdAt": 1613678933679,
        "updatedAt": 1613678933679
      }
    ],
    "leaderboardId": "anArcadeLeaderboardId"
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | The leaderboard to retrieve the score from.
versionId | The version of the leaderboard. Use -1 to specify the currently active leaderboard version.
maxResults | The maximum number of player scores to retrieve.


