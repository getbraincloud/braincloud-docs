# ReadGlobalStatsSubset
## Overview
Reads a subset of global statistics.

<PartialServop service_name="globalGameStatistics" operation_name="READ_SUBSET" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string[] statistics = { "ESTIMATE", "POINTS" };
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GlobalStatisticsService.ReadGlobalStatsSubset(statistics, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
std::vector<std::string> statistics;
statistics.push_back("ESTIMATE", "POINTS");

<%= data.branding.codePrefix %>->getGlobalStatisticsService()->readGlobalStatsSubset(statistics, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSArray *statistics = @[ @"ESTIMATE", @"POINTS" ];
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> globalStatisticsService] readGlobalStatsSubset:statistics
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String[] statistics = { "ESTIMATE", "POINTS" };
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGlobalStatisticsService().readGlobalStatsSubset(statistics, this);

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
var statistics = [ "ESTIMATE", "POINTS" ];

<%= data.branding.codePrefix %>.globalStatistics.readGlobalStatsSubset(statistics, result =>
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
var statistics = [ "ESTIMATE", "POINTS" ];
var globalStatisticsProxy = bridge.getGlobalStatisticsServiceProxy();

var postResult = globalStatisticsProxy.readGlobalStatsSubset(statistics);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var statistics = [ "ESTIMATE", "POINTS" ];
var globalStatisticsProxy = bridge.getGlobalStatisticsServiceProxy();

var postResult = globalStatisticsProxy.readGlobalStatsSubset(statistics);
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
  "data": {
    "statistics": {
      "POINTS": 11,
      "ESTIMATE": 5
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
statistics | A collection containing the statistics to read


