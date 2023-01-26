# ClaimTournamentReward
## Overview
Processes any outstanding rewards for the player.

<PartialServop service_name="tournament" operation_name="CLAIM_TOURNAMENT_REWARD" / >

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

<%= data.branding.codePrefix %>.TournamentService.ClaimTournamentReward(leaderboardId, versionId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *leaderboardId = "leaderboardId1";
int versionId = 10;
<%= data.branding.codePrefix %>->getTournamentService()->claimTournamentReward(leaderboardId, versionId, this);
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

[[<%= data.branding.codePrefix %> tournamentService] claimTournamentReward:leaderboardId
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

<%= data.branding.codePrefix %>.getTournamentService().claimTournamentReward(leaderboardId, versionId, this);

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

<%= data.branding.codePrefix %>.tournament.claimTournamentReward(leaderboardId, versionId, result =>
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

var postResult = tournamentProxy.claimTournamentReward(leaderboardId, versionId);
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
	"operation": "CLAIM_TOURNAMENT_REWARD",
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
		"rewards": {
			"experiencePoints": 1000,
			"experienceLevels": [2],
			"playerAchievements": ["achievement1"],
			"globalStatistics": {
				"allWorldMissions": 1
			},
			"statistics": {
				"missions": 1
			},
			"currency": {
				"coin": 10000
			}
		},
		"rewardDetails": {
			"tournaments": [{
				"leaderboardId": "xxx",
				"leaderboardVersion": 5,
				"tCode": "basic",
				"tCVersion": 3,
				"updatedAt": 1480371160082,
				"tRank": 5,
				"tClaimed": 1480437028561,
				"createdAt": 1480357557197,
				"data": {},
				"score": 818178,
				"rewards": {
					"experiencePoints": 1000,
					"achievement": "achievement1",
					"currency": {
						"coins": 500
					},
					"globalStatistics": {
						"allWorldMissions": 1
					},
					"statistics": {
						"missions": 1
					}
				}
			}],
			"milestones": [],
			"xp": {}
		},
		"experiencePoints": 1001,
		"experienceLevel": 2,
		"xpCapped": false,
		"currency": {
			"coin": {
				"purchased": 0,
				"balance": 64805,
				"consumed": 38655,
				"awarded": 103460
			}
		},
		"parentCurrency": {},
		"peerCurrency": {},
		"statistics": {
			"missions": 1,
			"kills": 1
		}
	}
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | The leaderboard for the tournament
versionId | Version of the completed tournament


