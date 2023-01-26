# ReadUserStatsSubset
## Overview
Reads a subset of user statistics.

<PartialServop service_name="playerStatistics" operation_name="READ_SUBSET" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string[] userStats = { "LIVES" };
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PlayerStatisticsService.ReadUserStatsSubset(userStats, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
std::vector<std::string> userStats;
userStats.push_back("LIVES");

<%= data.branding.codePrefix %>->getPlayerStatisticsService()->readUserStatsSubset(userStats, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSArray *userStats = @[ @"LIVES" ];
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> playerStatisticsService] readUserStatsSubset:userStats
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String[] userStats = { "LIVES" };
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPlayerStatisticsService().readUserStatsSubset(userStats, this);

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
var userStats = [ "LIVES" ];

<%= data.branding.codePrefix %>.playerStatistics.readUserStatsSubset(userStats, result =>
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
var userStats = [ "LIVES" ];
var playerStatisticsProxy = bridge.getPlayerStatisticsServiceProxy();

var postResult = playerStatisticsProxy.readUserStatsSubset(userStats);
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
	"operation": "READ_SUBSET",
	"data": {
		"statistics": ["LIVES"]
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
        "statistics": {
            "LIVES": 7
        }
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
userStats | A collection containing the statistics to read


