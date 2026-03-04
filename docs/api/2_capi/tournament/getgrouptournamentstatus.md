# GetGroupTournamentStatus
Get tournament status associated with a leaderboard. Option parameter: leaderboard version id 'versionId'. If -1, defaults to current version.

<PartialServop service_name="tournament" operation_name="GET_GROUP_TOURNAMENT_STATUS" />

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | The leaderboard for the group tournament.
groupId | Member's group id.
versionId | Version of the tournament, use -1 for the latest version.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string leaderboardId = "the-leaderboard-id";
string groupId = "the-group-id";
int versionId = 1;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.TournamentService.GetGroupTournamentStatus(leaderboardId, groupId, versionId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *leaderboardId = "the-leaderboard-id";
const char *groupId = "the-group-id";
int versionId = 1;
<%= data.branding.codePrefix %>.getTournamentService().getGroupTournamentStatus(leaderboardId, groupId, versionId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *leaderboardId = @"the-leaderboard-id";
NSString *groupId = @"the-group-id";
int versionId = 1;
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> tournamentService] getGroupTournamentStatus:
                leaderboardId:leaderboardId
                      groupId:groupId
                    versionId:versionId
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
int versionId = 1;
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getTournamentService.getGroupTournamentStatus(leaderboardId, groupId, versionId, this);

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
var versionId = 1;
<%= data.branding.codePrefix %>.tournament.getGroupTournamentStatus(leaderboardId, groupId, versionId, result =>
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
var versionId = 1;
ServerResponse result = await <%= data.branding.codePrefix %>.tournamentService.getGroupTournamentStatus(leaderboardId:leaderboardId, groupId:groupId, versionId:versionId);

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
local versionId = 1
local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end
<%= data.branding.codePrefix %>:getTournamentService():getGroupTournamentStatus(leaderboardId, groupId, versionId, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var leaderboardId = "the-leaderboard-id";
var groupId = "the-group-id";
var versionId = 1;
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.getGroupTournamentStatus(leaderboardId, groupId, versionId);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"tournament",
    "operation":"GET_GROUP_TOURNAMENT_STATUS",
    "data":{
        "leaderboardId":"the-leaderboard-id",
        "groupId":"the-group-id",
        "versionId":1
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
    "server_time": 1772654500074,
    "leaderboardEnrollment": {
      "score": 10,
      "data": null,
      "createdAt": 1772654392327,
      "updatedAt": 1772654392327,
      "tCode": "myGroupTournamentCode",
      "isInitialTScore": true,
      "tRank": 0,
      "tClaimedAt": 0,
      "tNotifiedAt": 0
    },
    "versionId": 3,
    "tournamentTimetable": {
      "tRegistrationStart": 1772637600000,
      "tState": "ACTIVE",
      "tPlayEnd": 1772724000000,
      "tRegistrationEnd": 1772724000000,
      "tPlayStart": 1772637600000
    },
    "tournamentConfigs": [
      {
        "tournamentCode": "myGroupTournamentCode",
        "entryType": "GROUP",
        "description": {
          "name": {
            "en": "Group Tournament"
          },
          "desc": {
            "en": "Tournament for groups."
          }
        },
        "customJson": {},
        "excludeInitialScoresFromRewards": false
      }
    ],
    "enrolled": true
  },
  "status": 200
}
```

</details>
