# PostTournamentScoreWithResultsUTC
## Overview
Post the users score to the tournament leaderboard, and returns updated standings.

tRank will always be zero in the response of this API call. The value generates after the tournament is complete or on <code>[ViewCurrentReward](/api/capi/tournament/viewcurrentreward)</code>.

<PartialServop service_name="tournament" operation_name="POST_TOURNAMENT_SCORE_WITH_RESULTS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string leaderboardId = "leaderboardId1";
int score = 0;
string jsonData = "{\"nickname\":\"withResults\"}";
DateTime roundStartedTime = DateTime.Now;
SortOrder sortOrder = SortOrder.HIGH_TO_LOW;
int beforeCount = 3;
int afterCount = 4;
int initialScore = 0;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.TournamentService.PostTournamentScoreWithResultsUTC(leaderboardId, score, jsonData, roundStartedTime, sortOrder, beforeCount, afterCount, initialScore, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *leaderboardId = "leaderboardId1";
int score = 0;
const char *jsonData = "{\"nickname\":\"withResults\"}";
time_t t = time(0);
const struct *roundStartedTime = gmtime(&t);
SortOrder sortOrder = HIGH_TO_LOW;
int beforeCount = 3;
int afterCount = 4;
int initialScore = 0;
<%= data.branding.codePrefix %>->getTournamentService()->postTournamentScoreWithResultsUTC(leaderboardId, score, jsonData, roundStartedTime, sortOrder, beforeCount, afterCount, initialScore, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *leaderboardId = @"leaderboardId1";
int score = 0;
NSString *jsonData = @"{\"nickname\":\"withResults\"}";
NSDate *roundStartedTime = [NSDate date];
SortOrder sortOrder = HIGH_TO_LOW;
int beforeCount = 3;
int afterCount = 4;
int initialScore = 0;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> tournamentService] postTournamentScoreWithResultsUTC:leaderboardId
                      score:score
                   jsonData:jsonData
           roundStartedTime:roundStartedTime
                  sortOrder:sortOrder
                beforeCount:beforeCount
                 afterCount:afterCount
               initialScore:initialScore
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String leaderboardId = "leaderboardId1";
int score = 0;
String jsonData = "{\"nickname\":\"withResults\"}";
Date roundStartedTime = new Date(System.currentTimeMillis());
SortOrder sortOrder = SortOrder.HIGH_TO_LOW;
int beforeCount = 3;
int afterCount = 4;
int initialScore = 0;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getTournamentService().postTournamentScoreWithResults(leaderboardId, score, jsonData, roundStartedTime, sortOrder, beforeCount, afterCount, initialScore, this);

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
var leaderboardId = "leaderboardId1";
var score = 0;
var jsonData = {
    "nickname": "withResults"
};
var roundStartedTime = Date.now();
var sortOrder = SortOrder.HIGH_TO_LOW;
var beforeCount = 3;
var afterCount = 4;
var initialScore = 0;

<%= data.branding.codePrefix %>.tournament.postTournamentScoreWithResultsUTC(leaderboardId, score, jsonData, roundStartedTime, sortOrder, beforeCount, afterCount, initialScore, result =>
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
var leaderboardId = "leaderboardId1";
var score = 0;
var jsonData = {
    "nickname": "withResults"
};
var roundStartedTime = Date.now();
var sortOrder = SortOrder.HIGH_TO_LOW;
var beforeCount = 3;
var afterCount = 4;
var initialScore = 0;
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.postTournamentScoreWithResultsUTC(leaderboardId, score, jsonData, roundStartedTime, sortOrder, beforeCount, afterCount, initialScore);
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
	"service": "tournament",
	"operation": "POST_TOURNAMENT_SCORE_WITH_RESULTS",
	"data": {
		"leaderboardId": "the-leaderboard-id",
		"score": 0,
		"data": {
			"nickname": "withResults"
		},
		"roundStartedEpoch": "[[#ts-10000]]",
		"sort": "HIGH_TO_LOW",
		"beforeCount": 3,
		"afterCount": 4,
		"initialScore": 0
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
		"postScore": {
			"createdAt": 1484937347793,
			"data": null,
			"leaderboardId": "testTournamentLeaderboard",
			"playerId": "d271327b-0c33-45cf-8f5f-a62904aae5fb",
			"previousLeaderboard": {
				"createdAt": 1484937347793,
				"data": null,
				"index": 0,
				"name": "UserA_CPP_23167710",
				"pictureUrl": "https://some.domain.com/mypicture.jpg",
				"playerId": "d271327b-0c33-45cf-8f5f-a62904aae5fb",
				"rank": 1,
				"score": 100,
				"summaryFriendData": {
					"field": "value"
				},
				"tCode": "testTournament",
				"tNotifiedAt": 0,
				"tRank": 0,
				"updatedAt": 1484937347793
			},
			"previousScore": 100,
			"score": 100,
			"tClaimedAt": 0,
			"tCode": "testTournament",
			"tNotifiedAt": 0,
			"tRank": 0,
			"updatedAt": 1484937348565,
			"versionId": 18
		},
		"scores": [{
			"createdAt": 1484937347793,
			"data": null,
			"index": 0,
			"name": "UserA_CPP_23167710",
			"pictureUrl": "https://some.domain.com/mypicture.jpg",
			"playerId": "d271327b-0c33-45cf-8f5f-a62904aae5fb",
			"rank": 1,
			"score": 100,
			"summaryFriendData": {
				"field": "value"
			},
			"tCode": "testTournament",
			"tNotifiedAt": 0,
			"tRank": 0,
			"updatedAt": 1484937348565
		}]
	}
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | The leaderboard for the tournament
score | The score to post
jsonData | Optional data attached to the leaderboard entry
roundStartedTime | Time the user started the match resulting in the score being posted (in millis UTC)
sort | Sort key Sort order of page.  ("HIGH_TO_LOW" or "LOW_TO_HIGH")
beforeCount | The count of number of players before the current player to include.
afterCount | The count of number of players after the current player to include.
initialScore | The initial score for players first joining a tournament. Usually 0, unless leaderboard is LOW_VALUE.


