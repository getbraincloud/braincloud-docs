# LeaveGroupTournament
Allows a group member to remove the group's score from the tournament leaderboard

<PartialServop service_name="tournament" operation_name="LEAVE_GROUP_TOURNAMENT" />

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | The leaderboard for the tournament.
groupId | Member's group id.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string leaderboardId = "the-leaderboard-id";
string groupId = "the-group-id";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.TournamentService.LeaveGroupTournament(leaderboardId, groupId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *leaderboardId = "the-leaderboard-id";
const char *groupId = "the-group-id";
<%= data.branding.codePrefix %>.getTournamentService().leaveGroupTournament(leaderboardId, groupId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *leaderboardId = @"the-leaderboard-id";
NSString *groupId = @"the-group-id";
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> tournamentService] leaveGroupTournament:
                leaderboardId:leaderboardId
                      groupId:groupId
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
String groupId = "the-group-id";
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getTournamentService.leaveGroupTournament(leaderboardId, groupId, this);

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
var groupId = "the-group-id";
<%= data.branding.codePrefix %>.tournament.leaveGroupTournament(leaderboardId, groupId, result =>
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
var groupId = "the-group-id";
ServerResponse result = await <%= data.branding.codePrefix %>.tournamentService.leaveGroupTournament(leaderboardId:leaderboardId, groupId:groupId);

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
local groupId = "the-group-id"
local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end
<%= data.branding.codePrefix %>:getTournamentService():leaveGroupTournament(leaderboardId, groupId, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var leaderboardId = "the-leaderboard-id";
var groupId = "the-group-id";
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.leaveGroupTournament(leaderboardId, groupId);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"tournament",
    "operation":"LEAVE_GROUP_TOURNAMENT",
    "data":{
        "leaderboardId":"the-leaderboard-id",
        "groupId":"the-group-id"
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
    "numScoresRemoved": 1
  },
  "status": 200
}
```

</details>
