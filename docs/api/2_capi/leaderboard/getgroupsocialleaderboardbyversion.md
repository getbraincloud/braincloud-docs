# GetGroupSocialLeaderboardByVersion
## Overview
Retrieve the social leaderboard by version, for a group.

<PartialServop service_name="leaderboard" operation_name="GET_GROUP_SOCIAL_LEADERBOARD_BY_VERSION" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string leaderboardId = "default";
string groupId = "a-group-id";
int versionId = 1;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LeaderboardService.GetGroupSocialLeaderboardByVersion(leaderboardId, groupId, versionId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *leaderboardId = "default";
const char *groupId = "a-group-id";
int versionId = 1;
<%= data.branding.codePrefix %>->getLeaderboardService()->getGroupSocialLeaderboardByVersion(leaderboardId, groupId, versionId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *leaderboardId = @"default";
NSString *groupId = @"a-group-id";
int versionId = 1;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> leaderboardService] getGroupSocialLeaderboardByVersion:leaderboardId
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
String groupId = "a-group-id";
int versionId = 1;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLeaderboardService().getGroupSocialLeaderboardByVersion(leaderboardId, groupId, versionId, this);

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
var groupId = "a-group-id";
var versionId = 1;

<%= data.branding.codePrefix %>.leaderboard.getGroupSocialLeaderboardByVersion(leaderboardId, groupId, versionId, result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var leaderboardId = "default";
var groupId = "a-group-id";
var versionId = 1;
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.getGroupSocialLeaderboardByVersion(leaderboardId, groupId, versionId);
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
	"operation": "GET_GROUP_SOCIAL_LEADERBOARD_BY_VERSION",
	"data": {
		"leaderboardId": "default",
		"groupId": "a-group-id",
		"versionId": 1
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
	"status": 200,
	"data": {
		"leaderboardId": "general",
		"timeBeforeReset": 3358262,
		"leaderboard": [{
			"updatedAt": 1462825797845,
			"pictureUrl": null,
			"playerName": "Peter",
			"playerId": "ee8cad26-16f2-4ef8-9045-3aab84ce6362",
			"createdAt": 1462825797845,
			"data": {
				"nickname": "pete"
			},
			"score": 100,
			"summaryFriendData": null
		}, {
			"updatedAt": 1462825730011,
			"pictureUrl": null,
			"playerName": "Billy",
			"playerId": "295c510f-507f-4bcf-80e1-ebc73708ec3c",
			"createdAt": 1462825730011,
			"data": {
				"nickname": "bill"
			},
			"score": 10,
			"summaryFriendData": null
		}],
		"server_time": 1462825845567
	}
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | The ID of the leaderboard
groupId | The ID of the group
version | Leaderboard version to get


