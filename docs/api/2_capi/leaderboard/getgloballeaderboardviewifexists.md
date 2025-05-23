# GetGlobalLeaderboardViewIfExists

Retrieve a view of the global leaderboard, if it exists, surrounding the current player. Silently fails, if leaderboard does not exist, just returns null and success, instead of an error.

Leaderboards entries contain the player's score and optionally, some user-defined data associated with the score.

:::tip
Pro Tip: The best way to get just the current player's score is to use GetGlobalLeaderboardView and pass in 0 to 'beforeCount' and 'afterCount'
:::

<PartialServop service_name="leaderboard" operation_name="GET_GLOBAL_LEADERBOARD_VIEW_IF_EXISTS" />

## Method Parameters

| Parameter     | Description                                                          |
| ------------- | -------------------------------------------------------------------- |
| leaderboardId | The id of the leaderboard.                                           |
| sortOrder     | Sort order of page. ("HIGH_TO_LOW" or "LOW_TO_HIGH")                 |
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
SortOrder sortOrder = <%= data.branding.productNameCaptial %>SocialLeaderboard.SortOrder.HIGH_TO_LOW;
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

<%= data.branding.codePrefix %>.LeaderboardService.GetGlobalLeaderboardViewIfExists(leaderboardId, sortOrder, beforeCount, afterCount, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *leaderboardId = "default";
SortOrder sortOrder = HIGH_TO_LOW;
int beforeCount = 3;
int afterCount = 4;
<%= data.branding.codePrefix %>->getLeaderboardService()->getGlobalLeaderboardViewIfExists(leaderboardId, sortOrder, beforeCount, afterCount, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *leaderboardId = @"default";
SortOrder sortOrder = HIGH_TO_LOW;
int beforeCount = 3;
int afterCount = 4;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> leaderboardService] getGlobalLeaderboardViewIfExists:leaderboardId
                  sortOrder:sortOrder
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
SortOrder sortOrder = <%= data.branding.productNameCaptial %>SocialLeaderboardService.SortOrder.HIGH_TO_LOW;
int beforeCount = 3;
int afterCount = 4;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLeaderboardService().getGlobalLeaderboardViewIfExists(leaderboardId, sortOrder, beforeCount, afterCount, this);

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
var sortOrder = "HIGH_TO_LOW";
var beforeCount = 3;
var afterCount = 4;

<%= data.branding.codePrefix %>.leaderboard.getGlobalLeaderboardViewIfExists(leaderboardId, sortOrder, beforeCount, afterCount, result =>
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
var  sortOrder = SortOrder.HIGH_TO_LOW;
var  beforeCount = 3;
var  afterCount = 4;

ServerResponse result = await <%= data.branding.codePrefix %>.leaderboardService.getGlobalLeaderboardViewIfExists(leaderboardId:leaderboardId, sortOrder:sortOrder, beforeCount:beforeCount, afterCount:afterCount);

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
var sortOrder = "HIGH_TO_LOW";
var beforeCount = 3;
var afterCount = 4;
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.getGlobalLeaderboardViewIfExists(leaderboardId, sortOrder, beforeCount, afterCount);
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
	"operation": "GET_GLOBAL_LEADERBOARD_VIEW_IF_EXISTS",
	"data": {
		"leaderboardId": "default",
		"sort": "HIGH_TO_LOW",
		"beforeCount": 3,
		"afterCount": 4,
		"versionId": -1
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
        "leaderboardId": "abc",
        "moreBefore": false,
        "timeBeforeReset": 48085996,
        "leaderboard": [
            {
                "playerId": "8c86f306-73ea-4536-9c92-aba086064d2c",
                "score": 10,
                "data": {
                    "nickname": "batman"
                },
                "createdAt": 1433863814394,
                "updatedAt": 1433863814394,
                "index": 0,
                "rank": 1,
                "name": "",
                "summaryFriendData": {
                    "xp": 12,
                    "favColour": "red"
                },
                "pictureUrl": null
            },
            {
                "playerId": "ab21c0af-9d3e-4a81-b3c8-ddc1fb77d9a1",
                "score": 8,
                "data": {
                    "nickname": "robin"
                },
                "createdAt": 1433864253221,
                "updatedAt": 1433864253221,
                "index": 1,
                "rank": 2,
                "name": "",
                "summaryFriendData": null,
                "pictureUrl": null
            }
        ],
        "server_time": 1433864314004,
        "moreAfter": false
    }
}
```

</details>
