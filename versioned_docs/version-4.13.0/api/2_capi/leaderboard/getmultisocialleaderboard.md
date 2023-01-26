# GetMultiSocialLeaderboard
## Overview
Reads multiple social leaderboards.

<PartialServop service_name="leaderboard" operation_name="GET_MULTI_SOCIAL_LEADERBOARD" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string[] leaderboardIds = { "default" };
int leaderboardResultCount = 1;
bool replaceName = false;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LeaderboardService.GetMultiSocialLeaderboard(leaderboardIds, leaderboardResultCount, replaceName, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
std::vector<std::string> leaderboardIds;
leaderboardIds.push_back("default");
int leaderboardResultCount = 1;
bool replaceName = false;
<%= data.branding.codePrefix %>->getLeaderboardService()->getMultiSocialLeaderboard(leaderboardIds, leaderboardResultCount, replaceName, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSArray *leaderboardIds = @[ @"default" ];
int leaderboardResultCount = 1;
bool replaceName = false;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> leaderboardService] getMultiSocialLeaderboard:leaderboardIds
     leaderboardResultCount:leaderboardResultCount
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
String[] leaderboardIds = { "default" };
int leaderboardResultCount = 1;
boolean replaceName = false;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLeaderboardService().getMultiSocialLeaderboard(leaderboardIds, leaderboardResultCount, replaceName, this);

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
var leaderboardIds = [ "default" ];
var leaderboardResultCount = 1;
var replaceName = false;

<%= data.branding.codePrefix %>.leaderboard.getMultiSocialLeaderboard(leaderboardIds, leaderboardResultCount, replaceName, result =>
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
var leaderboardIds = [ "default" ];
var leaderboardResultCount = 1;
var replaceName = false;
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.getMultiSocialLeaderboard(leaderboardIds, leaderboardResultCount, replaceName);
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
	"operation": "GET_MULTI_SOCIAL_LEADERBOARD",
	"data": {
		"leaderboardIds": [
			"default"
		],
		"leaderboardResultCount": 1,
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
    "status": 200,
    "data": {
        "server_time": 1445952203123,
        "leaderboards": [
            {
                "leaderboardId": "default",
                "leaderboard": [
                    {
                        "externalId": "pacer5",
                        "name": "Rollo",
                        "pictureUrl": "http://localhost:8080/gameserver/s3/portal/g/eggies/metadata/pacers/pacer5.png",
                        "playerId": "pacer5",
                        "authenticationType": null,
                        "score": 100000,
                        "data": {
                            "pacerTag": null,
                            "pacerLeaderboardTag": {}
                        },
                        "createdAt": null,
                        "updatedAt": null
                    },
                    {
                        "externalId": "pacer4",
                        "name": "Chirp",
                        "pictureUrl": "http://localhost:8080/gameserver/s3/portal/g/eggies/metadata/pacers/pacer4.png",
                        "playerId": "pacer4",
                        "authenticationType": null,
                        "score": 80000,
                        "data": {
                            "pacerTag": null,
                            "pacerLeaderboardTag": {}
                        },
                        "createdAt": null,
                        "updatedAt": null
                    }
                ],
                "self": {
                    "externalId": null,
                    "name": null,
                    "pictureUrl": null,
                    "playerId": "49390659-33bd-4812-b0c4-ab04e614ec98",
                    "authenticationType": null,
                    "score": 10,
                    "data": {
                        "nickname": "batman"
                    },
                    "createdAt": 1445952060607,
                    "updatedAt": 1445952060607,
                    "summaryFriendData": null
                },
                "selfIndex": 5
            }
        ]
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardIds | Collection of leaderboard IDs
leaderboardResultCount | Maximum count of entries to return for each leaderboard.
replaceName | If true, the currently logged in player's name will be replaced by the string "You"


