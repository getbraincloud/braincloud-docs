# JoinGroupTournament
Enrolls a member's group in the group tournament and assigns an initial score

<PartialServop service_name="tournament" operation_name="JOIN_GROUP_TOURNAMENT" />

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | The leaderboard for the group tournament.
tournamentCode | Group tournament to join.
groupId | Member's group id.
initialScore | Initial score for the user.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string leaderboardId = "the-leaderboard-id";
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

<%= data.branding.codePrefix %>.TournamentService.JoinGroupTournament(leaderboardId, tournamentCode, groupId, initialScore, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *leaderboardId = "the-leaderboard-id";
const char *tournamentCode = "exampleTournamentCode1";
const char *groupId = "the-group-id";
int initialScore = 0;
<%= data.branding.codePrefix %>.getTournamentService().joinGroupTournament(leaderboardId, tournamentCode, groupId, initialScore, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *leaderboardId = @"the-leaderboard-id";
NSString *tournamentCode = @"exampleTournamentCode1";
NSString *groupId = @"the-group-id";
int initialScore = 0;
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> tournamentService] joinGroupTournament:
                leaderboardId:leaderboardId
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
String leaderboardId = "the-leaderboard-id";
String tournamentCode = "exampleTournamentCode1";
String groupId = "the-group-id";
int initialScore = 0;
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getTournamentService.joinGroupTournament(leaderboardId, tournamentCode, groupId, initialScore, this);

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
var leaderboardId = "the-leaderboard-id";
var tournamentCode = "exampleTournamentCode1";
var groupId = "the-group-id";
var initialScore = 0;
<%= data.branding.codePrefix %>.tournament.joinGroupTournament(leaderboardId, tournamentCode, groupId, initialScore, result =>
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
var leaderboardId = "the-leaderboard-id";
var tournamentCode = "exampleTournamentCode1";
var groupId = "the-group-id";
var initialScore = 0;
ServerResponse result = await <%= data.branding.codePrefix %>.tournamentService.joinGroupTournament(leaderboardId:leaderboardId, tournamentCode:tournamentCode, groupId:groupId, initialScore:initialScore);

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
local leaderboardId = "the-leaderboard-id"
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
<%= data.branding.codePrefix %>:getTournamentService():joinGroupTournament(leaderboardId, tournamentCode, groupId, initialScore, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var leaderboardId = "the-leaderboard-id";
var tournamentCode = "exampleTournamentCode1";
var groupId = "the-group-id";
var initialScore = 0;
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.joinGroupTournament(leaderboardId, tournamentCode, groupId, initialScore);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"tournament",
    "operation":"JOIN_GROUP_TOURNAMENT",
    "data":{
        "leaderboardId":"the-leaderboard-id",
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
    "enrolled": true
  },
  "status": 200
}
```

</details>
