# GetGroupLeaderboardViewByVersion

Method returns a view of group leaderboard results that centers on the current group. By using a non-current version id, the user can retrieve a historical group leaderboard.

<PartialServop service_name="leaderboard" operation_name="GET_GROUP_LEADERBOARD_VIEW" />

## Method Parameters

| Parameter     | Description                                                          |
| ------------- | -------------------------------------------------------------------- |
| leaderboardId | The id of the leaderboard.                                           |
| groupId       | The id of the group.                                                 |
| versionId     | The historical version to retrieve.                                  |
| sort          | Sort order of page. ("HIGH_TO_LOW" or "LOW_TO_HIGH")                 |
| beforeCount   | The count of number of players before the current player to include. |
| afterCount    | The count of number of players after the current player to include.  |

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
SortOrder sort = <%= data.branding.productNameCaptial %>SocialLeaderboard.SortOrder.HIGH_TO_LOW;
int beforeCount = 3;
int afterCount = 4;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LeaderboardService.GetGroupLeaderboardViewByVersion(leaderboardId, groupId, versionId, sort, beforeCount, afterCount, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *leaderboardId = "default";
const char *groupId = "actual_group_id";
int versionId = -1;
SortOrder sort = HIGH_TO_LOW;
int beforeCount = 3;
int afterCount = 4;
<%= data.branding.codePrefix %>->getLeaderboardService()->getGroupLeaderboardViewByVersion(leaderboardId, groupId, versionId, sort, beforeCount, afterCount, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *leaderboardId = @"default";
NSString *groupId = @"actual_group_id";
int versionId = -1;
SortOrder sort = HIGH_TO_LOW;
int beforeCount = 3;
int afterCount = 4;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> leaderboardService] getGroupLeaderboardViewByVersion:leaderboardId
                    groupId:groupId
                  versionId:versionId
                       sort:sort
                beforeCount:beforeCount
                 afterCount:afterCount
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
SortOrder sort = SocialLeaderboardService.SortOrder.HIGH_TO_LOW;
int beforeCount = 3;
int afterCount = 4;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLeaderboardService().getGroupLeaderboardViewByVersion(leaderboardId, groupId, versionId, sort, beforeCount, afterCount, this);

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
var sort = "HIGH_TO_LOW";
var beforeCount = 3;
var afterCount = 4;

<%= data.branding.codePrefix %>.leaderboard.getGroupLeaderboardViewByVersion(leaderboardId, groupId, versionId, sort, beforeCount, afterCount, result =>
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
var  sortOrder = SortOrder.HIGH_TO_LOW;
var  beforeCount = 3;
var  afterCount = 4;

ServerResponse result = await <%= data.branding.codePrefix %>.leaderboardService.getGroupLeaderboardViewByVersion(leaderboardId:leaderboardId, groupId:groupId, versionId:versionId,  sortOrder:sortOrder, beforeCount:beforeCount, afterCount:afterCount);

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
var sort = "HIGH_TO_LOW";
var beforeCount = 3;
var afterCount = 4;
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.getGroupLeaderboardViewByVersion(leaderboardId, groupId, versionId, sort, beforeCount, afterCount);
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
	"operation": "GET_GROUP_LEADERBOARD_VIEW",
	"data": {
		"leaderboardId": "default",
		"groupId": "actual_group_id",
   		"versionId": -1,
		"sort": "HIGH_TO_LOW",
		"beforeCount": 3,
		"afterCount": 4
	}
}
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```
