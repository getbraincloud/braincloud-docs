# GetGlobalLeaderboardPage
## Overview
> NOTE: The friend summary data is returned for each record in the leaderboard.

> NOTE: "timeBeforeReset" is only returned when the requested version is also the active version.



Method returns a page of global leaderboard results.

Leaderboards entries contain the player's score and optionally, some user-defined data associated with the score.


:::tip
This method allows the client to retrieve pages from within the global leaderboard list
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
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LeaderboardService.GetGlobalLeaderboardPage(leaderboardId, sortOrder, startIndex, endIndex, successCallback, failureCallback);
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
<%= data.branding.codePrefix %>->getLeaderboardService()->getGlobalLeaderboardPage(leaderboardId, sortOrder, startIndex, endIndex, this);
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
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> leaderboardService] getGlobalLeaderboardPage:leaderboardId
                  sortOrder:sortOrder
                 startIndex:startIndex
                   endIndex:endIndex
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
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLeaderboardService().getGlobalLeaderboardPage(leaderboardId, sortOrder, startIndex, endIndex, this);

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

<%= data.branding.codePrefix %>.leaderboard.getGlobalLeaderboardPage(leaderboardId, sortOrder, startIndex, endIndex, result =>
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
var sortOrder = "HIGH_TO_LOW";
var startIndex = 0;
var endIndex = 9;
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.getGlobalLeaderboardPage(leaderboardId, sortOrder, startIndex, endIndex);
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


