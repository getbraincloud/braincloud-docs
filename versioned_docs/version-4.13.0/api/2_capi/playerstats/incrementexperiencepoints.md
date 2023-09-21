# IncrementExperiencePoints
## Overview
Increments the user's experience. If the player goes up a level, the new level details will be returned along with a list of rewards.

<PartialServop service_name="playerStatistics" operation_name="UPDATE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
int xpValue = 1;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PlayerStatisticsService.IncrementExperiencePoints(xpValue, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
int xpValue = 1;

<%= data.branding.codePrefix %>->getPlayerStatisticsService()->incrementExperiencePoints(xpValue, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
int xpValue = 1;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> playerStatisticsService] incrementExperiencePoints:xpValue
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
int xpValue = 1;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPlayerStatisticsService().incrementExperiencePoints(xpValue, this);

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
var xpValue = 1;

<%= data.branding.codePrefix %>.playerStatistics.incrementExperiencePoints(xpValue, result =>
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
var xpValue = 1;
var playerStatisticsProxy = bridge.getPlayerStatisticsServiceProxy();

var postResult = playerStatisticsProxy.incrementExperiencePoints(xpValue);
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
	"operation": "UPDATE",
	"data": {
        "xp_points": 1
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
    "statisticsExceptions": {},
    "milestones": {},
    "experiencePoints": 110,
    "quests": {},
    "experienceLevel": 1,
    "statistics": {
        "LIVES": 7
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
xpValue | The amount to increase the user's experience by


