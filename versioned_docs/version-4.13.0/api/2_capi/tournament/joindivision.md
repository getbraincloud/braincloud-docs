# JoinDivision
## Overview
Similar to <code>[JoinTournament](/api/capi/tournament/jointournament)</code>, except that you specify the *division set id* instead of the *leaderboard id*. 

Returns the *division instance id* (i.e. `leaderboardId`) upon success. If joining the tournament requires a fee, it is possible to fail (if the user doesn't have enough currency).

<PartialServop service_name="tournament" operation_name="JOIN_DIVISION" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string divSetId = "exampleDivSetId";
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

<%= data.branding.codePrefix %>.TournamentService.JoinDivision(divSetId, tournamentCode, initialScore, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *divSetId = "exampleDivSetId";
const char *tournamentCode = "exampleTournamentCode1";
int initialScore = 0;
<%= data.branding.codePrefix %>->getTournamentService()->joinDivision(divSetId, tournamentCode, initialScore, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *divSetId = @"exampleDivSetId";
NSString *tournamentCode = @"exampleTournamentCode1";
int initialScore = 0;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> tournamentService] joinDivision:divSetId
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
String divSetId = "exampleDivSetId";
String tournamentCode = "exampleTournamentCode1";
int initialScore = 0;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getTournamentService().joinDivision(divSetId, tournamentCode, initialScore, this);

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
var divSetId = "exampleDivSetId";
var tournamentCode = "exampleTournamentCode1";
var initialScore = 0;

<%= data.branding.codePrefix %>.tournament.joinDivision(divSetId, tournamentCode, initialScore, result =>
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
var divSetId = "exampleDivSetId";
var tournamentCode = "exampleTournamentCode1";
var initialScore = 0;
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.joinDivision(divSetId, tournamentCode, initialScore);
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
	"operation": "JOIN_DIVISION",
	"data": {
		"divSetId": "exampleDivSetId",
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
    "data": {
        "entryFee": {},
        "createdAt": 1654717860000,
        "balance": {
            "currency": {
                "coin": {
                    "consumed": 0,
                    "balance": 25000,
                    "purchased": 25000,
                    "awarded": 0
                }
            }
        },
        "leaderboardId": "^D^weekly^2",
        "enrolled": true
    },
    "status": 200
}
```
</details>

## Method Parameters
#### Method Parameters
Parameter | Description
--------- | -----------
divSetId | Division set id.
tournamentCode | The code for the tournament to join (eg. free vs. premium, etc.)
initialScore | The initial score to give the player on the leaderboard.


