# PostScoreToDynamicGroupLeaderboardUsingConfig

Post the group's score to the given social leaderboard, dynamically creating the group leaderboard if it does not exist yet. To create new leaderboard, configJson must specify leaderboardType, rotationType, resetAt, and retainedCount, at a minimum, with support to optionally specify an expiry in minutes.

<PartialServop service_name="leaderboard" operation_name="POST_GROUP_SCORE_DYNAMIC_USING_CONFIG" />

:::info
This new API call has been added to provide increased flexibility compared to the previous methods. It enables the developer to set a parameter of <strong>expireInMins</strong>, which queues the leaderboard for deletion after the designated number of minutes.
:::

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string leaderboardId = "aLeaderboardId";
string groupId = "a-group-id";
int score = 10;
string scoreData = "{\"nickname\": \"batman\"}";
string configJson = "{\"leaderboardType\": \"HIGH_VALUE\", \"rotationType\": \"DAYS\", \"numDaysToRotate\": 4, \"resetAt\": \"[[#ts+60000]]\", \"retainedCount\": 2, \"expireInMins\": None}";

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LeaderboardService.PostScoreToDynamicGroupLeaderboardUsingConfig(leaderboardId, groupId, score, scoreData, configJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *leaderboardId = "aLeaderboardId";
const char *groupId = "a-group-id";
int score = 10;
const char *scoreData = "{\"nickname\": \"batman\"}";
const char *configJson = "{\"leaderboardType\": \"HIGH_VALUE\", \"rotationType\": \"DAYS\", \"numDaysToRotate\": 4, \"resetAt\": \"[[#ts+60000]]\", \"retainedCount\": 2, \"expireInMins\": None}";
<%= data.branding.codePrefix %>.getLeaderboardService().postScoreToDynamicGroupLeaderboardUsingConfig(leaderboardId, groupId, score, scoreData, configJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *leaderboardId = @"aLeaderboardId";
NSString *groupId = @"a-group-id";
int score = 10;
NSString *scoreData = @"{\"nickname\": \"batman\"}";
NSString *configJson = @"{\"leaderboardType\": \"HIGH_VALUE\", \"rotationType\": \"DAYS\", \"numDaysToRotate\": 4, \"resetAt\": \"[[#ts+60000]]\", \"retainedCount\": 2, \"expireInMins\": None}";
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> leaderboardService] PostScoreToDynamicGroupLeaderboardUsingConfig:
                leaderboardId:leaderboardId
                      groupId:groupId
                        score:score
                    scoreData:scoreData
                   configJson:configJson
              completionBlock:successBlock
         errorCompletionBlock:failureBlock
                     cbObject:nil]
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String leaderboardId = "aLeaderboardId";
String groupId = "a-group-id";
int score = 10;
String scoreData = "{\"nickname\": \"batman\"}";
String configJson = "{\"leaderboardType\": \"HIGH_VALUE\", \"rotationType\": \"DAYS\", \"numDaysToRotate\": 4, \"resetAt\": \"[[#ts+60000]]\", \"retainedCount\": 2, \"expireInMins\": None}";
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getLeaderboardService.PostScoreToDynamicGroupLeaderboardUsingConfig(leaderboardId, groupId, score, scoreData, configJson, this);

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
var leaderboardId = "aLeaderboardId";
var groupId = "a-group-id";
var score = 10;
var scoreData = {
    "nickname": "batman"
};
var configJson = {
    "leaderboardType": "HIGH_VALUE",
    "rotationType": "DAYS",
    "numDaysToRotate": 4,
    "resetAt": "[[#ts+60000]]",
    "retainedCount": 2,
    "expireInMins": null
};
<%= data.branding.codePrefix %>.leaderboard.PostScoreToDynamicGroupLeaderboardUsingConfig(leaderboardId, groupId, score, scoreData, configJson, result =>
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
var leaderboardId = "aLeaderboardId";
var groupId = "a-group-id";
var score = 10;
var scoreData = {
    "nickname": "batman"
};
var configJson = {
    "leaderboardType": "HIGH_VALUE",
    "rotationType": "DAYS",
    "numDaysToRotate": 4,
    "resetAt": "[[#ts+60000]]",
    "retainedCount": 2,
    "expireInMins": null
};
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.PostScoreToDynamicGroupLeaderboardUsingConfig(leaderboardId, groupId, score, scoreData, configJson);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"leaderboard",
    "operation":"POST_GROUP_SCORE_DYNAMIC_USING_CONFIG",
    "data":{
        "leaderboardId":"aLeaderboardId",
        "groupId":"a-group-id",
        "score":10,
        "scoreData":{
            "nickname":"batman"
        },
        "configJson":{
            "leaderboardType":"HIGH_VALUE",
            "rotationType":"DAYS",
            "numDaysToRotate":4,
            "resetAt":"[[#ts+60000]]",
            "retainedCount":2,
            "expireInMins":null
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
  "data" : null
}
```

</details>

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | The leaderboard to post to.
groupId | The id of the group.
score | A score to post.
scoreData | Optional user-defined data to post with the score.
configJson | Configuration for the group leaderboard if it does not exist yet, specified as JSON object. Configuration fields supported are: leaderboardType': Required. Type of leaderboard. Valid values are 'LAST_VALUE', 'HIGH_VALUE', 'LOW_VALUE', 'CUMULATIVE', 'ARCADE_HIGH', 'ARCADE_LOW';  'rotationType': Required. Type of rotation. Valid values are 'NEVER', 'DAILY', 'DAYS', 'WEEKLY', 'MONTHLY', 'YEARLY';  'numDaysToRotate': Required if 'DAYS' rotation type, with valid values between 2 and 14; otherwise, null;  'resetAt': UTC timestamp, in milliseconds, at which to rotate the period. Always null if 'NEVER' rotation type;  'retainedCount': Required. Number of rotations (versions) of the leaderboard to retain; 'expireInMins': Optional. Duration, in minutes, before the leaderboard is to automatically expire.
