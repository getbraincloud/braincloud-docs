# RemoveGroupScore

Removes the group's score data from the specified group leaderboard. Optional parameters: versionId

<PartialServop service_name="leaderboard" operation_name="REMOVE_GROUP_SCORE" />

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | The id of the leaderboard.
groupId | The id of the group. 
versionId | The version of the leaderboard. Use -1 to specify the currently active leaderboard version.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string leaderboardId = "default";
string groupId = "actual_group_id";
int versionId = -1;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LeaderboardService.RemoveGroupScore(leaderboardId, groupId, versionId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *leaderboardId = "default";
const char *groupId = "actual_group_id";
int versionId = -1;
<%= data.branding.codePrefix %>->getLeaderboardService()->removeGroupScore(leaderboardId, groupId, versionId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *leaderboardId = @"default";
NSString *groupId = @"actual_group_id";
int versionId = -1;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> leaderboardService] removeGroupScore:leaderboardId
                    groupId:groupId
                  versionId:versionId
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String leaderboardId = "default";
String groupId = "actual_group_id";
int versionId = -1;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLeaderboardService().removeGroupScore(leaderboardId, groupId, versionId, this);

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
var leaderboardId = "default";
var groupId = "actual_group_id";
var versionId = -1;

<%= data.branding.codePrefix %>.leaderboard.removeGroupScore(leaderboardId, groupId, versionId, result =>
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
var  leaderboardId = "default";
var  groupId = "actual_group_id";
var  versionId = -1;

ServerResponse result = await <%= data.branding.codePrefix %>.leaderboardService.removeGroupScore(leaderboardId:leaderboardId, groupId:groupId, versionId:versionId);

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
var leaderboardId = "default";
var groupId = "actual_group_id";
var versionId = -1;
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.removeGroupScore(leaderboardId, groupId, versionId);
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
	"service": "leaderboard",
	"operation": "REMOVE_GROUP_SCORE",
	"data": {
		"leaderboardId": "default",
		"groupId": "actual_group_id",
		"versionId": -1
	}
}
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

