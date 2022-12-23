# GetTournamentStatus
## Overview
Get tournament status associated with a leaderboard.

<PartialServop service_name="tournament" operation_name="GET_TOURNAMENT_STATUS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string leaderboardId = "leaderboardId1";
int versionId = 1;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.TournamentService.GetTournamentStatus(leaderboardId, versionId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *leaderboardId = "leaderboardId1";
int versionId = 1;
<%= data.branding.codePrefix %>->getTournamentService()->getTournamentStatus(leaderboardId, versionId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *leaderboardId = @"leaderboardId1";
int versionId = 1;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> tournamentService] getTournamentStatus:leaderboardId
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
int versionId = 1;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getTournamentService().getTournamentStatus(leaderboardId, versionId, this);

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
var versionId = 1;

<%= data.branding.codePrefix %>.tournament.getTournamentStatus(leaderboardId, versionId, result =>
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
var versionId = 1;
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.getTournamentStatus(leaderboardId, versionId);
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
	"operation": "GET_TOURNAMENT_STATUS",
	"data": {
		"leaderboardId": "the-leaderboard-id",
		"versionId": 1
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
		"enrolled": true,
		"versionId": 4,
		"server_time": 1483719062011,
		"tournamentTimetable": {
			"tRegistrationStart": 1483704035003,
			"tRegistrationEnd": 1483790435003,
			"tState": "ACTIVE",
			"tPlayEnd": 1483790435003,
			"tPlayStart": 1483704035003
		},
		"tournamentConfigs": [{
			"tournamentCode": "testTournament",
			"description": {
				"name": {
					"en": "Test Tournament"
				},
				"desc": {
					"en": "Test Tournament"
				}
			},
			"customJson": {},
			"payoutRules": [{
				"reward": {
					"currency": {
						"credits": 1
					}
				},
				"rank": {
					"rankAbs": 1
				}
			}, {
				"reward": {},
				"rank": {
					"rankRemainder": -1
				}
			}],
			"entryFee": {}
		}],
		"leaderboardEnrollment": {
			"score": 989,
			"data": null,
			"createdAt": 1483719061830,
			"updatedAt": 1483719061830,
			"tCode": "testTournament",
			"tRank": 0,
			"tClaimedAt": 0
		}
	}
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | The leaderboard for the tournament
versionId | Version of the tournament, use -1 for the latest version


