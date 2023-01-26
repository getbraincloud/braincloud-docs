# JoinTournament
## Overview
Join the specified tournament. Any entry fees will be automatically collected.

<PartialServop service_name="tournament" operation_name="JOIN_TOURNAMENT" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string leaderboardId = "leaderboardId1";
string tournamentCode = "exampleTournamentCode1";
int initialScore = 0;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.TournamentService.JoinTournament(leaderboardId, tournamentCode, initialScore, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *leaderboardId = "leaderboardId1";
const char *tournamentCode = "exampleTournamentCode1";
int initialScore = 0;
<%= data.branding.codePrefix %>->getTournamentService()->joinTournament(leaderboardId, tournamentCode, initialScore, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *leaderboardId = @"leaderboardId1";
NSString *tournamentCode = @"exampleTournamentCode1";
int initialScore = 0;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> tournamentService] joinTournament:leaderboardId
             tournamentCode:tournamentCode
               initialScore:initialScore
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
String tournamentCode = "exampleTournamentCode1";
int initialScore = 0;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getTournamentService().joinTournament(leaderboardId, tournamentCode, initialScore, this);

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
var tournamentCode = "exampleTournamentCode1";
var initialScore = 0;

<%= data.branding.codePrefix %>.tournament.joinTournament(leaderboardId, tournamentCode, initialScore, result =>
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
var tournamentCode = "exampleTournamentCode1";
var initialScore = 0;
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.joinTournament(leaderboardId, tournamentCode, initialScore);
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
	"operation": "JOIN_TOURNAMENT",
	"data": {
		"leaderboardId": "the-leaderboard-id",
		"tournamentCode": "exampleTournamentCode1",
		"initialScore": 0
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
		"balance": {
			"currency": {
				"test": {
					"purchased": 0,
					"balance": 0,
					"consumed": 0,
					"awarded": 0
				},
				"credits": {
					"purchased": 0,
					"balance": 2434,
					"consumed": 0,
					"awarded": 2434
				}
			}
		},
		"enrolled": true,
		"entryFee": {}
	}
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | The leaderboard for the tournament
tournamentCode | Tournament to join
initialScore | Initial score for the user


