# PostScoreToDynamicGroupLeaderboardDaysUTC
## Overview
Post the group score to the given group leaderboard with a rotation type of DAYS and dynamically create if necessary.

<PartialServop service_name="leaderboard" operation_name="POST_GROUP_SCORE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string leaderboardId = "default";
string groupId = "actual_group_id";
int score = 10;
string data = "{\"nickname\":\"batman\"}";
SocialLeaderboardType leaderboardType = "HIGH_VALUE";
RotationType rotationType = "DAYS";
Int64 rotationResetTime = 15346346346;
int retainedCount = 2;
int numDaysToRotate = 4;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LeaderboardService.PostScoreToDynamicGroupLeaderboardDaysUTC(leaderboardId, groupId, score, data, leaderboardType, rotationType, rotationResetTime, retainedCount, numDaysToRotate, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *leaderboardId = "default";
const char *groupId = "actual_group_id";
int score = 10;
const char *data = "{\"nickname\":\"batman\"}";
const char *leaderboardType = "HIGH_VALUE";
const char *rotationType = "DAYS";
int64_t rotationResetTime = 15243457543;
int32_t retainedCount = 2;
int32_t numDaysToRotate = 4;

<%= data.branding.codePrefix %>->getLeaderboardService()->postScoreToDynamicGroupLeaderboardDaysUTC(leaderboardId, groupId, score, data, leaderboardType, rotationType, rotationResetTime, retainedCount, numDaysToRotate, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *leaderboardId = @"default";
NSString *groupId = @"actual_group_id";
int score = 10;
NSString *data = @"{\"nickname\":\"batman\"}";
NSString *rotationType = @"DAYS";
NSDate *rotationReset = [NSDate date];
int retainedCount = 2;
int numDaysToRotate = 4;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> leaderboardService] postScoreToDynamicGroupLeaderboardDaysUTC:leaderboardId
                    groupId:groupId
                      score:score
                       data:data
            leaderboardType:leaderboardType
               rotationType:rotationType
          rotationResetTime:rotationResetTime
              retainedCount:retainedCount
            numDaysToRotate:numDaysToRotate
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String leaderboardId = "default";
String groupId = "actual_group_id";
int score = 10;
String data = "{\"nickname\":\"batman\"}";
String leaderboardType = "HIGH_VALUE";
String rotationType = "DAYS";
long rotationResetTime = 15623462346;
int retainedCount = 2;
int numDaysToRotate = 4;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLeaderboardService().postScoreToDynamicGroupLeaderboardDaysUTC(leaderboardId, groupId, score, data, leaderboardType, rotationType, rotationResetTime, retainedCount, numDaysToRotate, this);

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
var leaderboardId = "default";
var groupId = "actual_group_id";
var score = 10;
var data = {
    "nickname": "batman"
};
var leaderboardType = "HIGH_VALUE";
var rotationType = "DAYS";
var rotationResetTime = 158778236487;
var retainedCount = 2;
var numDaysToRotate = 4;

<%= data.branding.codePrefix %>.leaderboard.postScoreToGroupLeaderboardUTC(leaderboardId, groupId, score, data, leaderboardType, rotationType, rotationResetTime, retainedCount, numDaysToRotate, result =>
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
var leaderboardId = "default";
var groupId = "actual_group_id";
var score = 10;
var data = {
    "nickname": "batman"
};
var leaderboardType = "HIGH_VALUE";
var rotationType = "DAYS";
var rotationResetTime = 1572450892830;
var retainedCount = 2;
var numDaysToRotate = 4;
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.postScoreToDynamicGroupLeaderboardDaysUTC(leaderboardId, groupId, score, data, leaderboardType, rotationType, rotationResetTime, retainedCount, numDaysToRotate);
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
	"operation": "POST_GROUP_SCORE_DYNAMIC",
	"data": {
        "leaderboardId": "groupLeaderboardConfig",
        "groupId": "d25e3e1c-089f-4816-8534-f958ba3c9dac",
        "score": 10,
        "data": {
          "nickname": "batman"
        },
        "leaderboardType": "HIGH_VALUE",
        "rotationType": "DAYS",
        "rotationResetTime": 1572454461001,
        "retainedCount": 2
        "numDaysToRotate": 4
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
    "data": null
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | The id of the leaderboard.
groupId | The id of the group. 
score | The score to post.
data | Optional user-defined data to post with the score.
leaderboardType | the type of leaderboard
rotationType | daily, weekly, monthly
rotationResetTime | the date to reset the rotation in milliseconds UTC
retainedCount | times to retain the leaderboard
numDaysToRotate | How many days between each rotation


