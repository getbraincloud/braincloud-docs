# GetSocialLeaderboard
## Overview
> Note that friend summary data is returned for each record in the leaderboard.



Method returns the social leaderboard. A player's social leaderboard is comprised of players who are recognized as being your friend. It includes 

* All external friends (Facebook, Steam, PlaystationNetwork)
* All internal friends (brainCloud)
* Plus “self”.

Leaderboards entries contain the player's score and optionally, some user-data associated with the score. The currently logged in player will also be returned in the social leaderboard.


:::caution
If no friends have played the game, the bestScore, createdAt, update will contain NULL.
:::

<PartialServop service_name="leaderboard" operation_name="GET_SOCIAL_LEADERBOARD" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string leaderboardId = "default";
bool replaceName = false;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LeaderboardService.GetSocialLeaderboard(leaderboardId, replaceName, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *leaderboardId = "default";
bool replaceName = false;
<%= data.branding.codePrefix %>->getLeaderboardService()->getSocialLeaderboard(leaderboardId, replaceName, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *leaderboardId = @"default";
bool replaceName = false;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> leaderboardService] getSocialLeaderboard:leaderboardId
                replaceName:replaceName
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
boolean replaceName = false;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLeaderboardService().getSocialLeaderboard(leaderboardId, replaceName, this);

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
var replaceName = false;

<%= data.branding.codePrefix %>.leaderboard.getSocialLeaderboard(leaderboardId, replaceName, result =>
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
var replaceName = false;
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.getSocialLeaderboard(leaderboardId, replaceName);
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
	"operation": "GET_SOCIAL_LEADERBOARD",
	"data": {
		"leaderboardId": "default",
		"replaceName": false
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
    "status" : 200,
    "data" :
    {
        "social_leaderboard": [
            {
                "updatedAt": 1395840936348,
                "pictureUrl": null,
                "playerId": "26f8bb07-3e94-458b-8485-f9031c3a6ef1",
                "createdAt": 1395840936348,
                "name": "You",
                "otherData": null,
                "authenticationType": null,
                "externalId": null,
                "summaryFriendData": null,
                "score": 20000
            },
            {
                "updatedAt": 1395840936351,
                "pictureUrl": null,
                "playerId": "3ad8bc09-4a34-e324-1231-3b2c1c3a6bc6",
                "createdAt": 1395840936351,
                "name": "Jenny Goldsmith",
                "otherData": null,
                "authenticationType": null,
                "externalId": null,
                "summaryFriendData": null,
                "score": 10000
            }
        ],
        "timeBeforeReset": 588182412,
        "server_time": 1395840957588
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | The id of the leaderboard to retrieve
replaceName | If true, the currently logged in player's name will be replaced by the string "You"


