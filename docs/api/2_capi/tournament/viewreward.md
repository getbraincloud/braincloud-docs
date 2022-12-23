# ViewReward
## Overview
Returns the user's reward from a finished tournament.

<PartialServop service_name="tournament" operation_name="VIEW_REWARD" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string leaderboardId = "leaderboardId1";
int versionId = 10;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.TournamentService.ViewReward(leaderboardId, versionId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *leaderboardId = "leaderboardId1";
int versionId = 10;
<%= data.branding.codePrefix %>->getTournamentService()->viewReward(leaderboardId, versionId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *leaderboardId = @"leaderboardId1";
int versionId = 10;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> tournamentService] viewReward:leaderboardId
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
String leaderboardId = "leaderboardId1";
int versionId = 10;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getTournamentService().viewReward(leaderboardId, versionId, this);

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
var leaderboardId = "leaderboardId1";
var versionId = 10;

<%= data.branding.codePrefix %>.tournament.viewReward(leaderboardId, versionId, result =>
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
var leaderboardId = "leaderboardId1";
var versionId = 10;
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.viewReward(leaderboardId, versionId);
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
	"service": "tournament",
	"operation": "VIEW_REWARD",
	"data": {
		"leaderboardId": "the-leaderboard-id",
		"versionId": 10
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
		"updatedAt": 1483719066661,
		"tRank": 1,
		"createdAt": 1483719066661,
		"rewards": {
			"currency": {
				"credits": 100
			}
		},
		"tCode": "testTournament",
		"data": null,
		"score": 879,
		"tClaimedAt": 0
	}
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | The leaderboard for the tournament
versionId | Version of the tournament, use -1 for the latest version


