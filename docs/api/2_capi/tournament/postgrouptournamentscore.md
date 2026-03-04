# PostGroupTournamentScore
Posts the given score for member's group to the group leaderboard. Group's score is updated, if applicable, based on leaderboard type (best score, latest score, cumulative score).

<PartialServop service_name="tournament" operation_name="POST_GROUP_TOURNAMENT_SCORE" />

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | The leaderboard for the tournament.
groupId | Member's group id.
score | The score to post for group.
data | Optional data attached to the group leaderboard entry, if updated.
roundStartedEpoch | UTC timestamp the member started the match resulting in the score being posted. (date in millis.)

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
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.TournamentService.PostGroupTournamentScore(leaderboardId, groupId, score, data, roundStartedEpoch, successCallback, failureCallback);
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
<%= data.branding.codePrefix %>.getTournamentService().postGroupTournamentScore(leaderboardId, groupId, score, data, roundStartedEpoch, this);
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
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> tournamentService] postGroupTournamentScore:
                leaderboardId:leaderboardId
                      groupId:groupId
                        score:score
                         data:data
            roundStartedEpoch:roundStartedEpoch
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
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getTournamentService.postGroupTournamentScore(leaderboardId, groupId, score, data, roundStartedEpoch, this);

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
<%= data.branding.codePrefix %>.tournament.postGroupTournamentScore(leaderboardId, groupId, score, data, roundStartedEpoch, result =>
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
ServerResponse result = await <%= data.branding.codePrefix %>.tournamentService.postGroupTournamentScore(leaderboardId:leaderboardId, groupId:groupId, score:score, data:data, roundStartedEpoch:roundStartedEpoch);

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
local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end
<%= data.branding.codePrefix %>:getTournamentService():postGroupTournamentScore(leaderboardId, groupId, score, data, roundStartedEpoch, callback)
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
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.postGroupTournamentScore(leaderboardId, groupId, score, data, roundStartedEpoch);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"tournament",
    "operation":"POST_GROUP_TOURNAMENT_SCORE",
    "data":{
        "leaderboardId":"the-leaderboard-id",
        "groupId":"the-group-id",
        "score":0,
        "data":{
            "memberNickname":"batman"
        },
        "roundStartedEpoch":"[[#ts]]"
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
    "leaderboardId": "lbg",
    "versionId": 513,
    "groupId": "55e701b7-6230-4536-9dfb-47f74524a09e",
    "score": 20,
    "data": {
      "memberNickname": "batman"
    },
    "createdAt": 1772654392327,
    "updatedAt": 1772654759855,
    "tCode": "myGroupTournamentCode",
    "isInitialTScore": false,
    "tRank": 0,
    "previousScore": 10
  },
  "status": 200
}
```

</details>
