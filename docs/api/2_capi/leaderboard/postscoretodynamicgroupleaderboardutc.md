# PostScoreToDynamicGroupLeaderboardUTC
## Overview
Post the group score to the given group leaderboard and dynamically create if necessary. LeaderboardType, rotationType, rotationReset, and retainedCount are required.

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
RotationType rotationType = "WEEKLY";
Int64 rotationResetTime = 15346346346;
int retainedCount = 2;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LeaderboardService.PostScoreToDynamicGroupLeaderboardUTC(leaderboardId, groupId, score, data, leaderboardType, rotationType, rotationResetTime, retainedCount, successCallback, failureCallback);
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
const char *rotationType = "WEEKLY";
int64_t rotationResetTime = 15243457543;
int32_t retainedCount = 2;

<%= data.branding.codePrefix %>->getLeaderboardService()->postScoreToDynamicGroupLeaderboardUTC(leaderboardId, groupId, score, data, leaderboardType, rotationType, rotationResetTime, retainedCount, this);
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
NSString *rotationType = @"WEEKLY";
NSDate *rotationReset = [NSDate date];
int retainedCount = 2;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> leaderboardService] postScoreToDynamicGroupLeaderboardUTC:leaderboardId
                    groupId:groupId
                      score:score
                       data:data
            leaderboardType:leaderboardType
               rotationType:rotationType
          rotationResetTime:rotationResetTime
              retainedCount:retainedCount
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
String rotationType = "WEEKLY";
long rotationResetTime = 15623462346;
int retainedCount = 2;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLeaderboardService().postScoreToDynamicGroupLeaderboardUTC(leaderboardId, groupId, score, data, leaderboardType, rotationType, rotationResetTime, retainedCount, this);

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
var rotationType = "WEEKLY";
var rotationResetTime = 158778236487;
var retainedCount = 2;

<%= data.branding.codePrefix %>.leaderboard.postScoreToGroupLeaderboardUTC(leaderboardId, groupId, score, data, leaderboardType, rotationType, rotationResetTime, retainedCount, result =>
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
var rotationType = "WEEKLY";
var rotationResetTime = 1572450892830;
var retainedCount = 2;
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.postScoreToDynamicGroupLeaderboardUTC(leaderboardId, groupId, score, data, leaderboardType, rotationType, rotationResetTime, retainedCount);
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
        "rotationType": "WEEKLY",
        "rotationResetTime": 1572454461001,
        "retainedCount": 2
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


