# PostScoreToDynamicLeaderboardDaysUTC
## Overview
Post the players score to the given social leaderboard with a rotation type of DAYS. You can optionally send a user-defined JSON string of data with the posted score. This string could include information relevant to the posted score.

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
string leaderboardType = "HIGH_VALUE";
string rotationType = "DAYS";
Int64 rotationReset = DateTime.Now;
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

<%= data.branding.codePrefix %>.LeaderboardService.PostScoreToDynamicLeaderboardDaysUTC(leaderboardId, score, jsonData, leaderboardType, rotationType, rotationReset, retainedCount, numDaysToRotate, successCallback, failureCallback);
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
const char *rotationType = "DAYS";
time_t t = time(0);
const struct *rotationReset = gmtime(&t);
int retainedCount = 2;
int numDaysToRotate = 4;
<%= data.branding.codePrefix %>->getLeaderboardService()->postScoreToDynamicLeaderboardDaysUTC(leaderboardId, score, jsonData, leaderboardType, rotationType, rotationReset, retainedCount, numDaysToRotate, this);
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
NSString *rotationType = @"DAYS";
NSDate *rotationReset = [NSDate date];
int retainedCount = 2;
int numDaysToRotate = 4;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> leaderboardService] postScoreToDynamicLeaderboardDaysUTC:leaderboardId
                      score:score
                   jsonData:jsonData
            leaderboardType:leaderboardType
               rotationType:rotationType
              rotationReset:rotationReset
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
int score = 10;
String jsonData = "{\"nickname\":\"batman\"}";
String leaderboardType = "HIGH_VALUE";
String rotationType = "DAYS";
Date rotationReset = new Date(System.currentTimeMillis());
int retainedCount = 2;
int numDaysToRotate = 4;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLeaderboardService().postScoreToDynamicLeaderboardDaysUTC(leaderboardId, score, jsonData, leaderboardType, rotationType, rotationReset, retainedCount, numDaysToRotate, this);

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
var rotationType = "DAYS";
var rotationReset = Date.now();
var retainedCount = 2;
var numDaysToRotate = 4;

<%= data.branding.codePrefix %>.leaderboard.postScoreToDynamicLeaderboardDaysUTC(leaderboardId, score, jsonData, leaderboardType, rotationType, rotationReset, retainedCount, numDaysToRotate, result =>
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
var rotationType = "DAYS";
var rotationReset = Date.now();
var retainedCount = 2;
var numDaysToRotate = 4;
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.postScoreToDynamicLeaderboardDaysUTC(leaderboardId, score, jsonData, leaderboardType, rotationType, rotationReset, retainedCount, numDaysToRotate);
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
		"rotationType": "DAYS",
		"rotationResetTime": "[[#ts+60000]]",
		"retainedCount": 2,
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
leaderboardId | The leaderboard to post to
score | The score to post
data | Optional user-defined data to post with the score
leaderboardType | Leaderboard type
rotationType | Type of rotation
rotationReset | Date to start the rotation (date in millis UTC)
retainedCount | How many previous rotations to keep
numDaysToRotate | How many days between each rotation


