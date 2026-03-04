# PostGroupTournamentScoreWithResults
Posts the given score for member's group to the group leaderboard and returns leaderboard results. Group's score is updated, if applicable, based on leaderboard type (best score, latest score, cumulative score).

<PartialServop service_name="tournament" operation_name="POST_GROUP_TOURNAMENT_SCORE_WITH_RESULTS" />

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | The leaderboard for the tournament.
groupId | Member's group id.
score | The score to post for group.
data | Optional data attached to the group leaderboard entry, if updated.
roundStartedEpoch | UTC timestamp the member started the match resulting in the score being posted. (date in millis.)
sort | Sort key for sort order of page.  ("HIGH_TO_LOW" or "LOW_TO_HIGH")
beforeCount | The count of groups to include before the current group.
afterCount | The count of groups to include after the current group.
initialScore | The initial score for group on first joining a tournament, applicable to this call if auto-join supported. Usually 0, unless leaderboard is LOW_VALUE.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string leaderboardId = "the-leaderboard-id";
string groupId = "the-group-id";
int score = 0;
string data = "{\"memberNickname\": \"batman\"}";
int roundStartedEpoch = [[#ts]];
string sort = "HIGH_TO_LOW";
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

<%= data.branding.codePrefix %>.TournamentService.PostGroupTournamentScoreWithResults(leaderboardId, groupId, score, data, roundStartedEpoch, sort, beforeCount, afterCount, initialScore, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *leaderboardId = "the-leaderboard-id";
const char *groupId = "the-group-id";
int score = 0;
const char *data = "{\"memberNickname\": \"batman\"}";
int roundStartedEpoch = [[#ts]];
const char *sort = "HIGH_TO_LOW";
int beforeCount = 3;
int afterCount = 4;
int initialScore = 0;
<%= data.branding.codePrefix %>.getTournamentService().postGroupTournamentScoreWithResults(leaderboardId, groupId, score, data, roundStartedEpoch, sort, beforeCount, afterCount, initialScore, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *leaderboardId = @"the-leaderboard-id";
NSString *groupId = @"the-group-id";
int score = 0;
NSString *data = @"{\"memberNickname\": \"batman\"}";
int roundStartedEpoch = [[#ts]];
NSString *sort = @"HIGH_TO_LOW";
int beforeCount = 3;
int afterCount = 4;
int initialScore = 0;
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> tournamentService] postGroupTournamentScoreWithResults:
                leaderboardId:leaderboardId
                      groupId:groupId
                        score:score
                         data:data
            roundStartedEpoch:roundStartedEpoch
                         sort:sort
                  beforeCount:beforeCount
                   afterCount:afterCount
                 initialScore:initialScore
              completionBlock:successBlock
         errorCompletionBlock:failureBlock
                     cbObject:nil]
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String leaderboardId = "the-leaderboard-id";
String groupId = "the-group-id";
int score = 0;
String data = "{\"memberNickname\": \"batman\"}";
int roundStartedEpoch = [[#ts]];
String sort = "HIGH_TO_LOW";
int beforeCount = 3;
int afterCount = 4;
int initialScore = 0;
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getTournamentService.postGroupTournamentScoreWithResults(leaderboardId, groupId, score, data, roundStartedEpoch, sort, beforeCount, afterCount, initialScore, this);

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
var leaderboardId = "the-leaderboard-id";
var groupId = "the-group-id";
var score = 0;
var data = {
    "memberNickname": "batman"
};
var roundStartedEpoch = [[#ts]];
var sort = "HIGH_TO_LOW";
var beforeCount = 3;
var afterCount = 4;
var initialScore = 0;
<%= data.branding.codePrefix %>.tournament.postGroupTournamentScoreWithResults(leaderboardId, groupId, score, data, roundStartedEpoch, sort, beforeCount, afterCount, initialScore, result =>
{
  var status = result.status;
  console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
var leaderboardId = "the-leaderboard-id";
var groupId = "the-group-id";
var score = 0;
var data = {
    "memberNickname": "batman"
};
var roundStartedEpoch = [[#ts]];
var sort = "HIGH_TO_LOW";
var beforeCount = 3;
var afterCount = 4;
var initialScore = 0;
ServerResponse result = await <%= data.branding.codePrefix %>.tournamentService.postGroupTournamentScoreWithResults(leaderboardId:leaderboardId, groupId:groupId, score:score, data:data, roundStartedEpoch:roundStartedEpoch, sort:sort, beforeCount:beforeCount, afterCount:afterCount, initialScore:initialScore);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="lua" label="Roblox">
```

```lua
local leaderboardId = "the-leaderboard-id"
local groupId = "the-group-id"
local score = 0
local data = {
    memberNickname= "batman"
}
local roundStartedEpoch = [[#ts]]
local sort = "HIGH_TO_LOW"
local beforeCount = 3
local afterCount = 4
local initialScore = 0
local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end
<%= data.branding.codePrefix %>:getTournamentService():postGroupTournamentScoreWithResults(leaderboardId, groupId, score, data, roundStartedEpoch, sort, beforeCount, afterCount, initialScore, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var leaderboardId = "the-leaderboard-id";
var groupId = "the-group-id";
var score = 0;
var data = {
    "memberNickname": "batman"
};
var roundStartedEpoch = [[#ts]];
var sort = "HIGH_TO_LOW";
var beforeCount = 3;
var afterCount = 4;
var initialScore = 0;
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.postGroupTournamentScoreWithResults(leaderboardId, groupId, score, data, roundStartedEpoch, sort, beforeCount, afterCount, initialScore);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"tournament",
    "operation":"POST_GROUP_TOURNAMENT_SCORE_WITH_RESULTS",
    "data":{
        "leaderboardId":"the-leaderboard-id",
        "groupId":"the-group-id",
        "score":0,
        "data":{
            "memberNickname":"batman"
        },
        "roundStartedEpoch":"[[#ts]]",
        "sort":"HIGH_TO_LOW",
        "beforeCount":3,
        "afterCount":4,
        "initialScore":0
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
    "postScore": {
      "leaderboardId": "lbg",
      "versionId": 513,
      "groupId": "55e701b7-6230-4536-9dfb-47f74524a09e",
      "score": 30,
      "data": {
        "memberNickname": "batman"
      },
      "createdAt": 1772654392327,
      "updatedAt": 1772654840839,
      "tCode": "myGroupTournamentCode",
      "isInitialTScore": false,
      "tRank": 0,
      "previousScore": 20,
      "rank": 1
    },
    "scores": [
      {
        "groupId": "55e701b7-6230-4536-9dfb-47f74524a09e",
        "score": 30,
        "data": {
          "memberNickname": "batman"
        },
        "createdAt": 1772654392327,
        "updatedAt": 1772654840839,
        "tCode": "myGroupTournamentCode",
        "isInitialTScore": false,
        "tRank": 0,
        "index": 0,
        "rank": 1,
        "groupName": "myGroupName",
        "groupSummaryData": {},
        "scoreUpdatedAt": 1768422184370
      }
    ]
  },
  "status": 200
}
```

</details>
