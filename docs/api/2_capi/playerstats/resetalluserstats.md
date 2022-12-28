# ResetAllUserStats
## Overview
Reset all of the statistics for this user back to their initial value.

<PartialServop service_name="playerStatistics" operation_name="RESET" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PlayerStatisticsService.ResetAllUserStats(successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->getPlayerStatisticsService()->resetAllUserStats(this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> playerStatisticsService] resetAllUserStats:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPlayerStatisticsService().resetAllUserStats(this);

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
<%= data.branding.codePrefix %>.playerStatistics.resetAllUserStats(result =>
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
var playerStatisticsProxy = bridge.getPlayerStatisticsServiceProxy();

var postResult = playerStatisticsProxy.resetAllUserStats();
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
	"service": "playerStatistics",
	"operation": "RESET",
	"data": {}
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
		"milestones": {
			"1": "UNLOCKED",
			"2": "UNLOCKED"
		},
		"xpCapped": false,
		"experiencePoints": 0,
		"quests": {
			"Test Quest 2": "UNLOCKED",
			"Test Quest 1": "UNLOCKED"
		},
		"playerAchievements": [],
		"experienceLevel": 0,
		"statistics": {
			"RoundsWon": 0,
			"RoundsLost": 0,
			"DifficultyChanges": 0,
			"RoundsFinished": 0
		}
	}
}
```
</details>

