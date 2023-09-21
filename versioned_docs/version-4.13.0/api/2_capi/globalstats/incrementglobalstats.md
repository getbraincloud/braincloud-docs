# IncrementGlobalStats
## Overview
Atomically increment (or decrement) global statistics. Global statistics are defined through the <%= data.branding.productName %> portal.

StatisticsData like

`{ "stat1" : 10, "stat2" : -5.5 }`

would increment stat1 by 10 and decrement stat2 by 5.5. For the full statistics grammar see the [statistics grammar section](/api/appendix/statisticsgrammar).

There are many more complex operations supported such as

`{ "stat1" : "INC_TO_LIMIT#9#30" }`

which increments stat1 by 9 up to a limit of 30.

<PartialServop service_name="globalGameStatistics" operation_name="UPDATE_INCREMENT" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string statistics = "{\"PLAYER_COUNT\":1}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GlobalStatisticsService.IncrementGlobalStats(statistics, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *statistics = "{\"PLAYER_COUNT\":1}";

<%= data.branding.codePrefix %>->getGlobalStatisticsService()->incrementGlobalStats(statistics, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *statistics = @"{\"PLAYER_COUNT\":1}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> globalStatisticsService] incrementGlobalStats:statistics
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String statistics = "{\"PLAYER_COUNT\":1}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGlobalStatisticsService().incrementGlobalStats(statistics, this);

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
var statistics = {
    "PLAYER_COUNT": 1
};

<%= data.branding.codePrefix %>.globalStatistics.incrementGlobalStats(statistics, result =>
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
var statistics = {
    "PLAYER_COUNT": 1
};
var globalStatisticsProxy = bridge.getGlobalStatisticsServiceProxy();

var postResult = globalStatisticsProxy.incrementGlobalStats(statistics);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var statistics = {
    "PLAYER_COUNT": 1
};
var globalStatisticsProxy = bridge.getGlobalStatisticsServiceProxy();

var postResult = globalStatisticsProxy.incrementGlobalStats(statistics);
if (postResult.status == 200) {
    // Success!
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
            "PLAYER_COUNT": 16
        }
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
statistics | A collection containing the statistics to increment


