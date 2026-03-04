# GetGroupDivisions
Returns a list of the member's group's recently active divisions, organized by simplified tournament state: ACTIVE, PENDING, COMPLETE.

<PartialServop service_name="tournament" operation_name="GET_GROUP_DIVISIONS" />

## Method Parameters
Parameter | Description
--------- | -----------
groupId | Member's group id.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string groupId = "the-group-id";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.TournamentService.GetGroupDivisions(groupId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *groupId = "the-group-id";
<%= data.branding.codePrefix %>.getTournamentService().getGroupDivisions(groupId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *groupId = @"the-group-id";
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> tournamentService] getGroupDivisions:
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
String groupId = "the-group-id";
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getTournamentService.getGroupDivisions(groupId, this);

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
var groupId = "the-group-id";
<%= data.branding.codePrefix %>.tournament.getGroupDivisions(groupId, result =>
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
var groupId = "the-group-id";
ServerResponse result = await <%= data.branding.codePrefix %>.tournamentService.getGroupDivisions(groupId:groupId);

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
local groupId = "the-group-id"
local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end
<%= data.branding.codePrefix %>:getTournamentService():getGroupDivisions(groupId, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var groupId = "the-group-id";
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.getGroupDivisions(groupId);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"tournament",
    "operation":"GET_GROUP_DIVISIONS",
    "data":{
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
    "ACTIVE": {
      "uniqueDivSetId2": [
        "^D^uniqueDivSetId2^1"
      ]
    },
    "PENDING": {},
    "COMPLETE": {}
  },
  "status": 200
}
```

</details>
