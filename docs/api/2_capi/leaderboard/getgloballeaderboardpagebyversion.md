# GetGlobalLeaderboardPageByVersion
## Overview
> NOTE: The friend summary data is returned for each record in the leaderboard.

> NOTE: "timeBeforeReset" is only returned when the requested version is also the active version.



Method returns a page of global leaderboard results. By using a non-current version id, the user can retrieve a historical leaderboard.



:::tip
See GetGlobalLeaderboardVersions method to retrieve the version id.
:::

<PartialServop service_name="leaderboard" operation_name="GET_GLOBAL_LEADERBOARD_PAGE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string leaderboardId = "default";
SortOrder sortOrder = <%= data.branding.productNameCaptial %>SocialLeaderboard.SortOrder.HIGH_TO_LOW;
int startIndex = 0;
int endIndex = 9;
int versionId = -1;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LeaderboardService.GetGlobalLeaderboardPageByVersion(leaderboardId, sortOrder, startIndex, endIndex, versionId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *leaderboardId = "default";
SortOrder sortOrder = HIGH_TO_LOW;
int startIndex = 0;
int endIndex = 9;
int versionId = -1;
<%= data.branding.codePrefix %>->getLeaderboardService()->getGlobalLeaderboardPageByVersion(leaderboardId, sortOrder, startIndex, endIndex, versionId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *leaderboardId = @"default";
SortOrder sortOrder = HIGH_TO_LOW;
int startIndex = 0;
int endIndex = 9;
int versionId = -1;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> leaderboardService] getGlobalLeaderboardPageByVersion:leaderboardId
                  sortOrder:sortOrder
                 startIndex:startIndex
                   endIndex:endIndex
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
SortOrder sortOrder = <%= data.branding.productNameCaptial %>SocialLeaderboardService.SortOrder.HIGH_TO_LOW;
int startIndex = 0;
int endIndex = 9;
int versionId = -1;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLeaderboardService().getGlobalLeaderboardPageByVersion(leaderboardId, sortOrder, startIndex, endIndex, versionId, this);

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
var startIndex = 0;
var endIndex = 9;
var versionId = -1;

<%= data.branding.codePrefix %>.leaderboard.getGlobalLeaderboardPageByVersion(leaderboardId, sortOrder, startIndex, endIndex, versionId, result =>
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
var sort = "HIGH_TO_LOW";
var startIndex = 0;
var endIndex = 9;
var versionId = -1;
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.getGlobalLeaderboardPageByVersion(leaderboardId, sort, startIndex, endIndex, versionId);
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
	"operation": "GET_GLOBAL_LEADERBOARD_PAGE",
	"data": {
		"leaderboardId": "default",
		"sort": "HIGH_TO_LOW",
		"startIndex": 0,
		"endIndex": 9,
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
        "leaderboard": [
            {
                "playerId": "9073dff7-0df6-437e-9be6-39cd704dcoj4",
                "score": 100,
                "data": null,
                "createdAt": 1401385959596,
                "updatedAt": 1401385959596,
                "index": 0,
                "rank": 1,
                "name": "",
                "summaryFriendData": null,
        		"pictureUrl": null
            },
            {
                "playerId": "7c107e9f-ab48-492d-a000-defec6237700",
                "score": 10,
                "data": null,
                "rewarded": false,
                "createdAt": 1401385898407,
                "updatedAt": 1401385898407,
                "index": 1,
                "rank": 2,
                "name": "",
                "summaryFriendData": null,
        		"pictureUrl": null
            }
        ],
        "leaderboardSize": 31,
        "moreBefore": false,
        "moreAfter": true,
        "timeBeforeReset" : 588182412,
        "server_time": 1395840957588
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | The id of the leaderboard
sortOrder | Sort order of page. ("HIGH_TO_LOW" or "LOW_TO_HIGH")
startIndex | The rank at which to start the page.
endIndex | The rank at which to end the page.
versionId | The historical version to retrieve.


