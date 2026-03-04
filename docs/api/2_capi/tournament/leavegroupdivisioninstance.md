# LeaveGroupDivisionInstance
Similar to LeaveGroupTournament(), but removes member's group from division instance and also ensures that the division instance is removed from the group's division list.

<PartialServop service_name="tournament" operation_name="LEAVE_GROUP_DIVISION_INSTANCE" />

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | Id of the division leaderboard the member's group is in.
groupId | Member's group id.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string leaderboardId = "^D^exampleDivSetId^1";
string groupId = "the-group-id";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.TournamentService.LeaveGroupDivisionInstance(leaderboardId, groupId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *leaderboardId = "^D^exampleDivSetId^1";
const char *groupId = "the-group-id";
<%= data.branding.codePrefix %>.getTournamentService().leaveGroupDivisionInstance(leaderboardId, groupId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *leaderboardId = @"^D^exampleDivSetId^1";
NSString *groupId = @"the-group-id";
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> tournamentService] leaveGroupDivisionInstance:
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
String leaderboardId = "^D^exampleDivSetId^1";
String groupId = "the-group-id";
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getTournamentService.leaveGroupDivisionInstance(leaderboardId, groupId, this);

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
var leaderboardId = "^D^exampleDivSetId^1";
var groupId = "the-group-id";
<%= data.branding.codePrefix %>.tournament.leaveGroupDivisionInstance(leaderboardId, groupId, result =>
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
var leaderboardId = "^D^exampleDivSetId^1";
var groupId = "the-group-id";
ServerResponse result = await <%= data.branding.codePrefix %>.tournamentService.leaveGroupDivisionInstance(leaderboardId:leaderboardId, groupId:groupId);

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
local leaderboardId = "^D^exampleDivSetId^1"
local groupId = "the-group-id"
local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end
<%= data.branding.codePrefix %>:getTournamentService():leaveGroupDivisionInstance(leaderboardId, groupId, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var leaderboardId = "^D^exampleDivSetId^1";
var groupId = "the-group-id";
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.leaveGroupDivisionInstance(leaderboardId, groupId);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"tournament",
    "operation":"LEAVE_GROUP_DIVISION_INSTANCE",
    "data":{
        "leaderboardId":"^D^exampleDivSetId^1",
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
