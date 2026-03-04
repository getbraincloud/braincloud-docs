# JoinGroupDivision
Similar to JoinGroupTournament(), except requires the division set id instead of the leaderboard id.

<PartialServop service_name="tournament" operation_name="JOIN_GROUP_DIVISION" />

## Method Parameters
Parameter | Description
--------- | -----------
divSetId | Division set id.
tournamentCode | The code for the group tournament to join.
groupId | Member's group id.
initialScore | The initial score to give the group on the group leaderboard.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string divSetId = "exampleDivSetId";
string tournamentCode = "exampleTournamentCode1";
string groupId = "the-group-id";
int initialScore = 0;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.TournamentService.JoinGroupDivision(divSetId, tournamentCode, groupId, initialScore, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *divSetId = "exampleDivSetId";
const char *tournamentCode = "exampleTournamentCode1";
const char *groupId = "the-group-id";
int initialScore = 0;
<%= data.branding.codePrefix %>.getTournamentService().joinGroupDivision(divSetId, tournamentCode, groupId, initialScore, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *divSetId = @"exampleDivSetId";
NSString *tournamentCode = @"exampleTournamentCode1";
NSString *groupId = @"the-group-id";
int initialScore = 0;
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> tournamentService] joinGroupDivision:
                     divSetId:divSetId
               tournamentCode:tournamentCode
                      groupId:groupId
                 initialScore:initialScore
              completionBlock:successBlock
         errorCompletionBlock:failureBlock
                     cbObject:nil]
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String divSetId = "exampleDivSetId";
String tournamentCode = "exampleTournamentCode1";
String groupId = "the-group-id";
int initialScore = 0;
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getTournamentService.joinGroupDivision(divSetId, tournamentCode, groupId, initialScore, this);

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
var groupId = "the-group-id";
var initialScore = 0;
<%= data.branding.codePrefix %>.tournament.joinGroupDivision(divSetId, tournamentCode, groupId, initialScore, result =>
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
var divSetId = "exampleDivSetId";
var tournamentCode = "exampleTournamentCode1";
var groupId = "the-group-id";
var initialScore = 0;
ServerResponse result = await <%= data.branding.codePrefix %>.tournamentService.joinGroupDivision(divSetId:divSetId, tournamentCode:tournamentCode, groupId:groupId, initialScore:initialScore);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="lua" label="Roblox">
```

```lua
local divSetId = "exampleDivSetId"
local tournamentCode = "exampleTournamentCode1"
local groupId = "the-group-id"
local initialScore = 0
local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end
<%= data.branding.codePrefix %>:getTournamentService():joinGroupDivision(divSetId, tournamentCode, groupId, initialScore, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var divSetId = "exampleDivSetId";
var tournamentCode = "exampleTournamentCode1";
var groupId = "the-group-id";
var initialScore = 0;
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.joinGroupDivision(divSetId, tournamentCode, groupId, initialScore);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"tournament",
    "operation":"JOIN_GROUP_DIVISION",
    "data":{
        "divSetId":"exampleDivSetId",
        "tournamentCode":"exampleTournamentCode1",
        "groupId":"the-group-id",
        "initialScore":0
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
    "createdAt": 1772655480000,
    "leaderboardId": "^D^uniqueDivSetId2^1",
    "enrolled": true
  },
  "status": 200
}
```

</details>
