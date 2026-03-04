# GetGroupDivisionInfo
Essentially the same as GetGroupTournamentStatus(), but takes a division set id instead of a leaderboard id as its parameter. Would generally be called before JoinGroupDivision() in the case that there are multiple tournaments, or if the group member is shown information to make an informed choice as to whether to join group in tournament.

<PartialServop service_name="tournament" operation_name="GET_GROUP_DIVISION_INFO" />

## Method Parameters
Parameter | Description
--------- | -----------
divSetId | Division set id.
groupId | Member's group id.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string divSetId = "exampleDivSetId";
string groupId = "the-group-id";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.TournamentService.GetGroupDivisionInfo(divSetId, groupId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *divSetId = "exampleDivSetId";
const char *groupId = "the-group-id";
<%= data.branding.codePrefix %>.getTournamentService().getGroupDivisionInfo(divSetId, groupId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *divSetId = @"exampleDivSetId";
NSString *groupId = @"the-group-id";
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> tournamentService] getGroupDivisionInfo:
                     divSetId:divSetId
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
String divSetId = "exampleDivSetId";
String groupId = "the-group-id";
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getTournamentService.getGroupDivisionInfo(divSetId, groupId, this);

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
var groupId = "the-group-id";
<%= data.branding.codePrefix %>.tournament.getGroupDivisionInfo(divSetId, groupId, result =>
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
var groupId = "the-group-id";
ServerResponse result = await <%= data.branding.codePrefix %>.tournamentService.getGroupDivisionInfo(divSetId:divSetId, groupId:groupId);

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
local groupId = "the-group-id"
local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end
<%= data.branding.codePrefix %>:getTournamentService():getGroupDivisionInfo(divSetId, groupId, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var divSetId = "exampleDivSetId";
var groupId = "the-group-id";
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.getGroupDivisionInfo(divSetId, groupId);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"tournament",
    "operation":"GET_GROUP_DIVISION_INFO",
    "data":{
        "divSetId":"exampleDivSetId",
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
    "server_time": 1772650570254,
    "versionId": 1,
    "tournamentTimetable": {
      "tRegistrationStart": 1772650560000,
      "tState": "ACTIVE",
      "tPlayEnd": 1772724000000,
      "tRegistrationEnd": 1772724000000,
      "tPlayStart": 1772650560000
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
    "enrolled": false
  },
  "status": 200
}
```

</details>
