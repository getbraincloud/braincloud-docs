# LeaveDivisionInstance

Similar to <code>[LeaveTournament](/api/capi/tournament/leavetournament)</code>, but for a division instance. The player's score will be removed, and the instance will no longer appear in the player's division list.

<PartialServop service_name="tournament" operation_name="LEAVE_DIVISION_INSTANCE" />

## Method Parameters

#### Method Parameters

| Parameter     | Description                                    |
| ------------- | ---------------------------------------------- |
| leaderboardId | Id of the division leaderboard the user is in. |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string divisionSetInstance = "^D^exampleDivSetId^1";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.TournamentService.LeaveDivisionInstance(divisionSetInstance, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *divisionSetInstance = "^D^exampleDivSetId^1";
<%= data.branding.codePrefix %>->getTournamentService()->leaveDivisionInstance(divisionSetInstance, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *divisionSetInstance = @"^D^exampleDivSetId^1";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> tournamentService] leaveDivisionInstance:divisionSetInstance
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String divisionSetInstance = "^D^exampleDivSetId^1";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getTournamentService().leaveDivisionInstance(divisionSetInstance, this);

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
var divisionSetInstance = "^D^exampleDivSetId^1";

<%= data.branding.codePrefix %>.tournament.leaveDivisionInstance(divisionSetInstance, result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
var  divisionSetInstance = "^D^exampleDivSetId^1";

ServerResponse result = await <%= data.branding.codePrefix %>.tournamentService.leaveDivisionInstance(divisionSetInstance:divisionSetInstance);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var divisionSetInstance = "^D^exampleDivSetId^1";
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.leaveDivisionInstance(divisionSetInstance);
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
	"operation": "LEAVE_DIVISION_INSTANCE",
	"data": {
		"leaderboardId": "^D^exampleDivSetId^1"
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
    "numScoresRemoved": 1
}
```

</details>
