# PostTournamentScoreUTC
## Overview
Post the users score to the tournament leaderboard.

tRank will always be zero in the response of this API call. The value generates after the tournament is complete or on <code>[ViewCurrentReward](/api/capi/tournament/viewcurrentreward)</code>.

<PartialServop service_name="tournament" operation_name="POST_TOURNAMENT_SCORE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string leaderboardId = "leaderboardId1";
int score = 0;
string jsonData = "{\"nickname\":\"batman\"}";
DateTime roundStartedTime = DateTime.Now;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.TournamentService.PostTournamentScoreUTC(leaderboardId, score, jsonData, roundStartedTime, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *leaderboardId = "leaderboardId1";
int score = 0;
const char *jsonData = "{\"nickname\":\"batman\"}";
time_t t = time(0);
const struct *roundStartedTime = gmtime(&t);
<%= data.branding.codePrefix %>->getTournamentService()->postTournamentScoreUTC(leaderboardId, score, jsonData, roundStartedTime, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *leaderboardId = @"leaderboardId1";
int score = 0;
NSString *jsonData = @"{\"nickname\":\"batman\"}";
NSDate *roundStartedTime = [NSDate date];
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> tournamentService] postTournamentScoreUTC:leaderboardId
                      score:score
                   jsonData:jsonData
           roundStartedTime:roundStartedTime
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
String jsonData = "{\"nickname\":\"batman\"}";
Date roundStartedTime = new Date(System.currentTimeMillis());
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getTournamentService().postTournamentScoreUTC(leaderboardId, score, jsonData, roundStartedTime, this);

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
    "nickname": "batman"
};
var roundStartedTime = Date.now();

<%= data.branding.codePrefix %>.tournament.postTournamentScoreUTC(leaderboardId, score, jsonData, roundStartedTime, result =>
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
    "nickname": "batman"
};
var roundStartedTime = Date.now();
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.postTournamentScoreUTC(leaderboardId, score, jsonData, roundStartedTime);
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
	"operation": "POST_TOURNAMENT_SCORE",
	"data": {
		"leaderboardId": "the-leaderboard-id",
		"score": 0,
		"data": {
			"nickname": "batman"
		},
		"roundStartedEpoch": "[[#ts]]"
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
      "leaderboardId": <%= data.example.leaderboardId %>,
      "versionId": <%= data.example.returnedVersionId %>,
      "playerId": <%= data.example.playerId %>,
      "score": <%= data.example.score %>,
      "data": <%= data.example.leaderboardExtraData_js %>,
      "createdAt": <%= data.example.createdAt %>,
      "updatedAt": <%= data.example.updatedAt %>,
      "tCode": <%= data.example.tournamentCode %>,
      "tRank": 0,
      "tClaimedAt": 0
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
roundStartedTime | Time the user started the match resulting in the score being posted. (date in millis UTC)


