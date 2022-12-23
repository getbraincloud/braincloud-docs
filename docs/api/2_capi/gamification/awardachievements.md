# AwardAchievements
## Overview
Method will award the achievements specified. On success, this will call AwardThirdPartyAchievement to hook into the client-side Achievement service (ie GameCentre, Facebook etc).

<PartialServop service_name="gamification" operation_name="AWARD_ACHIEVEMENTS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string[] achievements = { "EGG_ACH09", "EGG_ACH10" };
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GamificationService.AwardAchievements(achievements, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
std::vector<std::string> achievements;
achievements.push_back("EGG_ACH09");
achievements.push_back("EGG_ACH10");
<%= data.branding.codePrefix %>->getGamificationService()->awardAchievements(achievements, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSArray *achievements = @[ @"EGG_ACH09", @"EGG_ACH10" ];
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> gamificationService] awardAchievements:achievements
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String[] achievements = { "EGG_ACH09", "EGG_ACH10" };
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGamificationService().awardAchievements(achievements, this);

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
var achievements = [ "EGG_ACH09", "EGG_ACH10" ];

<%= data.branding.codePrefix %>.gamification.awardAchievements(achievements, result =>
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
var achievements = [ "EGG_ACH09", "EGG_ACH10" ];
var gamificationProxy = bridge.getGamificationServiceProxy();

//includeMetaData Whether to return meta data as well, Boolean
var includeMetaData = false;
var postResult = gamificationProxy.awardAchievements(achievements, includeMetaData);
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
	"operation": "AWARD_ACHIEVEMENTS",
	"data": {
		"achievements": [
			"EGG_ACH09",
			"EGG_ACH10"
		]
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
    "data": null
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
achievementIds | A list of achievement ids to award


