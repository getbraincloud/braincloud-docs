# GetPlayersSocialLeaderboardByVersionIfExists

Retrieve a sorted, social leaderboard of the specified list of players by version, if leaderboard exists. Silently fails, if leaderboard does not exist, just returns null and success, instead of an error.

<PartialServop service_name="leaderboard" operation_name="GET_PLAYERS_SOCIAL_LEADERBOARD_BY_VERSION_IF_EXISTS" />

## Method Parameters

| Parameter     | Description                    |
| ------------- | ------------------------------ |
| leaderboardId | The ID of the leaderboard      |
| profileIds    | The IDs of the players         |
| versionId     | The version of the leaderboard |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string leaderboardId = "default";
string[] profileIds = { "profile-id", "another-profile-id" };
int versionId = 1;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LeaderboardService.GetPlayersSocialLeaderboardByVersionIfExists(leaderboardId, profileIds, versionId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *leaderboardId = "default";
std::vector<std::string> profileIds;
profileIds.push_back("profile-id");
profileIds.push_back("another-profile-id");
int versionId = 1;
<%= data.branding.codePrefix %>->getLeaderboardService()->getPlayersSocialLeaderboardByVersionIfExists(leaderboardId, profileIds, versionId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *leaderboardId = @"default";
NSArray *profileIds = @[ @"profile-id", @"another-profile-id" ];
int versionId = 1;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> leaderboardService] getPlayersSocialLeaderboardByVersionIfExists:leaderboardId
                 profileIds:profileIds
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
String[] profileIds = { "profile-id", "another-profile-id" };
int versionId = 1;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLeaderboardService().getPlayersSocialLeaderboardByVersionIfExists(leaderboardId, profileIds, versionId, this);

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
var profileIds = [ "profile-id", "another-profile-id" ];
var versionId = 1;

<%= data.branding.codePrefix %>.leaderboard.getPlayersSocialLeaderboardByVersionIfExists(leaderboardId, profileIds, versionId, result =>
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
var  profileIds = [ "profile-id", "another-profile-id" ];
var  versionId = 1;

ServerResponse result = await <%= data.branding.codePrefix %>.leaderboardService.getPlayersSocialLeaderboardByVersionIfExists(leaderboardId:leaderboardId, profileIds:profileIds, versionId:versionId);

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
var profileIds = [ "profile-id", "another-profile-id" ];
var versionId = 1;
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.getPlayersSocialLeaderboardByVersionIfExists(leaderboardId, profileIds, versionId);
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
	"operation": "GET_PLAYERS_SOCIAL_LEADERBOARD_BY_VERSION_IF_EXISTS",
	"data": {
		"leaderboardId": "default",
		"profileIds": [
			"profile-id",
			"another-profile-id"
		],
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
        "leaderboard": [
            {
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
            },
            {
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
            }
        ],
        "server_time": 1462825845567
    }
}
```

</details>
