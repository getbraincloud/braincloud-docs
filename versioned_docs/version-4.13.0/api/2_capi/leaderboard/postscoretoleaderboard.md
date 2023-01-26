# PostScoreToLeaderboard
## Overview
Post the players score to the given social leaderboard.

You can optionally send a user-defined json string of data with the posted score. This string could include information relevant to the posted score.

Note that the behavior of posting a score can be modified in the <%= data.branding.productName %> portal. By default, the server will only keep the player's best score.

<PartialServop service_name="leaderboard" operation_name="POST_SCORE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string leaderboardId = "default";
int score = 10;
string jsonOtherData = "{\"nickname\":\"batman\"}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LeaderboardService.PostScoreToLeaderboard(leaderboardId, score, jsonOtherData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *leaderboardId = "default";
int score = 10;
const char *jsonOtherData = "{\"nickname\":\"batman\"}";
<%= data.branding.codePrefix %>->getLeaderboardService()->postScoreToLeaderboard(leaderboardId, score, jsonOtherData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *leaderboardId = @"default";
int score = 10;
NSString *jsonOtherData = @"{\"nickname\":\"batman\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> leaderboardService] postScoreToLeaderboard:leaderboardId
                      score:score
              jsonOtherData:jsonOtherData
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
int score = 10;
String jsonOtherData = "{\"nickname\":\"batman\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLeaderboardService().postScoreToLeaderboard(leaderboardId, score, jsonOtherData, this);

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
var score = 10;
var jsonOtherData = {
    "nickname": "batman"
};

<%= data.branding.codePrefix %>.leaderboard.postScoreToLeaderboard(leaderboardId, score, jsonOtherData, result =>
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
var score = 10;
var jsonOtherData = {
    "nickname": "batman"
};
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.postScoreToLeaderboard(leaderboardId, score, jsonOtherData);
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
	"operation": "POST_SCORE",
	"data": {
		"leaderboardId": "default",
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
leaderboardId | The leaderboard to post to.
score | The score to post.
data | Optional user-defined data to post with the score.


