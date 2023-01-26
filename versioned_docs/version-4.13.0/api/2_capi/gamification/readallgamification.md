# ReadAllGamification
## Overview
Method retrieves all gamification data for the player.

<PartialServop service_name="gamification" operation_name="READ" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
bool includeMetaData = false;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GamificationService.ReadAllGamification(includeMetaData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
bool includeMetaData = false;
<%= data.branding.codePrefix %>->getGamificationService()->readAllGamification(includeMetaData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
bool includeMetaData = false;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> gamificationService] readAllGamification:includeMetaData
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
boolean includeMetaData = false;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGamificationService().readAllGamification(includeMetaData, this);

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
var includeMetaData = false;

<%= data.branding.codePrefix %>.gamification.readAllGamification(includeMetaData, result =>
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
var includeMetaData = false;
var gamificationProxy = bridge.getGamificationServiceProxy();

var postResult = gamificationProxy.readAllGamification(includeMetaData);
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
	"service": "gamification",
	"operation": "READ",
	"data": {
		"includeMetaData": false
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
        "milestones": [
            {
                "id": "milestone01",
                "category": "general",
                "title": "Level 2 milestone",
                "status": "SATISFIED",
                "description": "Awarded when you get to level 2",
                "gameId": "10068",
                "rewards": {
                    "currency": {
                        "gold": 1000
                    }
                },
                "extraData": null,
                "questId": null
            }
        ],
        "achievements": [
            {
                "fbEnabled": true,
                "imageUrl": null,
                "status": "NOT_AWARDED",
                "gameId": "10068",
                "steamEnabled": false,
                "extraData": null,
                "achievementId": "ach01",
                "invisibleUntilEarned": false,
                "steamAchievementId": "",
                "id": "ach01",
                "appleEnabled": false,
                "title": "Finish Tutorial",
                "fbGamePoints": 10,
                "description": "Achievement awarded when you finish the tutorial",
                "appleAchievementId": ""
            }
        ],
        "quests": [],
        "xp": {
            "xpCapped": false,
            "experiencePoints": 0,
            "xpLevel": {
                "gameId": "10068",
                "level": 0,
                "statusTitle": "Lesser",
                "experience": 0,
                "fbAction": ""
            },
            "experienceLevel": 0
        }
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
includeMetaData | Whether to return meta data as well


