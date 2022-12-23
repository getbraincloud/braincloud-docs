# PostScoreToDynamicLeaderboardUTC
## Overview
Post the players score to the given social leaderboard. You can optionally send a user-defined json string of data with the posted score. This string could include information relevant to the posted score.

The passed in leaderboard config data is to dynamically create the leaderboard if it does not exist already.

<PartialServop service_name="leaderboard" operation_name="POST_SCORE_DYNAMIC" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string leaderboardId = "default";
int score = 10;
string jsonData = "{\"nickname\":\"batman\"}";
var leaderboardType = BrainCloudSocialLeaderboard.SocialLeaderboardType.HIGH_VALUE;
var rotationType = BrainCloudSocialLeaderboard.RotationType.DAILY;
ulong rotationReset = (ulong)TimeUtil.UTCDateTimeToUTCMillis(TimeUtil.LocalTimeToUTCTime(System.DateTime.Now.AddDays(1)));
int retainedCount = 2;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LeaderboardService.PostScoreToDynamicLeaderboardUTC(leaderboardId, score, jsonData, leaderboardType, rotationType, rotationReset, retainedCount, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *leaderboardId = "default";
int score = 10;
const char *jsonData = "{\"nickname\":\"batman\"}";
const char *leaderboardType = "HIGH_VALUE";
const char *rotationType = "DAILY";
time_t t = time(0);
const struct *rotationReset = gmtime(&t);
int retainedCount = 2;
<%= data.branding.codePrefix %>->getLeaderboardService()->postScoreToDynamicLeaderboardUTC(leaderboardId, score, jsonData, leaderboardType, rotationType, rotationReset, retainedCount, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *leaderboardId = @"default";
int score = 10;
NSString *jsonData = @"{\"nickname\":\"batman\"}";
NSString *leaderboardType = @"HIGH_VALUE";
NSString *rotationType = @"DAILY";
NSDate *rotationReset = [NSDate date];
int retainedCount = 2;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> leaderboardService] postScoreToDynamicLeaderboardUTC:leaderboardId
                      score:score
                   jsonData:jsonData
            leaderboardType:leaderboardType
               rotationType:rotationType
              rotationReset:rotationReset
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
int score = 10;
String jsonData = "{\"nickname\":\"batman\"}";
String leaderboardType = "HIGH_VALUE";
String rotationType = "DAILY";
Date rotationReset = new Date(System.currentTimeMillis());
int retainedCount = 2;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLeaderboardService().postScoreToDynamicLeaderboardUTC(leaderboardId, score, jsonData, leaderboardType, rotationType, rotationReset, retainedCount, this);

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
var jsonData = {
    "nickname": "batman"
};
var leaderboardType = "HIGH_VALUE";
var rotationType = "DAILY";
var rotationReset = Date.now();
var retainedCount = 2;

<%= data.branding.codePrefix %>.leaderboard.postScoreToDynamicLeaderboardUTC(leaderboardId, score, jsonData, leaderboardType, rotationType, rotationReset, retainedCount, result =>
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
var jsonData = {
    "nickname": "batman"
};
var leaderboardType = "HIGH_VALUE";
var rotationType = "DAILY";
var d = new Date();
var rotationReset = d.setDate(d.getDate() + 1);
var retainedCount = 2;
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.postScoreToDynamicLeaderboardUTC(leaderboardId, score, jsonData, leaderboardType, rotationType, rotationReset, retainedCount);
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
	"operation": "POST_SCORE_DYNAMIC",
	"data": {
		"leaderboardId": "default",
		"score": 10,
		"data": {
			"nickname": "batman"
		},
		"leaderboardType": "HIGH_VALUE",
		"rotationType": "DAILY",
		"rotationResetTime": "[[#ts+60000]]",
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
leaderboardId | The leaderboard to post to
score | The score to post
data | Optional user-defined data to post with the score
leaderboardType | Leaderboard type
rotationType | Type of rotation
rotationReset | Date to next rotate rotation (date in millis UTC)
retainedCount | How many previous rotations to keep


