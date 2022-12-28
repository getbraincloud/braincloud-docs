# PostScoreToGroupLeaderboard
## Overview
Post the group score to the given group leaderboard. Optional parameters: data.

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
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LeaderboardService.PostScoreToGroupLeaderboard(leaderboardId, groupId, score, data, successCallback, failureCallback);
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
<%= data.branding.codePrefix %>->getLeaderboardService()->postScoreToGroupLeaderboard(leaderboardId, groupId, score, data, this);
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
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> leaderboardService] postScoreToGroupLeaderboard:leaderboardId
                    groupId:groupId
                      score:score
                       data:data
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
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLeaderboardService().postScoreToGroupLeaderboard(leaderboardId, groupId, score, data, this);

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

<%= data.branding.codePrefix %>.leaderboard.postScoreToGroupLeaderboard(leaderboardId, groupId, score, data, result =>
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
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.postScoreToGroupLeaderboard(leaderboardId, groupId, score, data);
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
	"operation": "POST_GROUP_SCORE",
	"data": {
		"leaderboardId": "default",
		"groupId": "actual_group_id",
		"score": 10,
		"data": {
			"nickname": "batman"
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


