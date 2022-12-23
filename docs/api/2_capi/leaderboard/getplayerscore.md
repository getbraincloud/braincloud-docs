# GetPlayerScore
## Overview
Gets a player's score from a leaderboard. If the player does not have a score in a leaderboard this method returns an error.

<PartialServop service_name="leaderboard" operation_name="GET_PLAYER_SCORE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string leaderboardId = "default";
int versionId = -1;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LeaderboardService.GetPlayerScore(leaderboardId, versionId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *leaderboardId = "default";
int versionId = -1;
<%= data.branding.codePrefix %>->getLeaderboardService()->getPlayerScore(leaderboardId, versionId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *leaderboardId = @"default";
int versionId = -1;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> leaderboardService] getPlayerScore:leaderboardId
                  versionId:versionId
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
int versionId = -1;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLeaderboardService().getPlayerScore(leaderboardId, versionId, this);

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
var versionId = -1;

<%= data.branding.codePrefix %>.leaderboard.getPlayerScore(leaderboardId, versionId, result =>
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
var versionId = -1;
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.getPlayerScore(leaderboardId, versionId);
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
	"operation": "GET_PLAYER_SCORE",
	"data": {
		"leaderboardId": "default",
		"versionId": -1
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
		"score": {
			"score": 100,
			"data": {
				"test": "testdata"
			},
			"createdAt": 1484933569566,
			"updatedAt": 1484933569566,
			"leaderboardId": "testLeaderboard",
			"versionId": 150
		}
	}
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | The leaderboard to retrieve the score from
versionId | The version of the leaderboard


