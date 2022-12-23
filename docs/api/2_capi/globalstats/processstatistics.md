# ProcessStatistics
## Overview
Apply statistics grammar to a partial set of statistics. Global statistics are defined through the <%= data.branding.productName %> portal.

The operations available are much richer than the standard *increment* operation available via `IncrementGlobalStats()`.

For example:
```
{
    "INNING": "INC#1",              // Increment by one
    "INNINGSREM": "DEC#1",          // Decrement by one
    "OUTS": "RESET",                // Reset to the defined initial value
    "POINTS": "INC_TO_LIMIT#5#30",  // Increment by 5, but to a max of 30
    "PLAYERS": "SET#8",             // Set to the specified value
    "HIGHESTHR": "MAX#3",           // Set to the specified value if larger
    "ESTIMATE": "MIN#5",            // Set to the specified value if smaller
    "GAME" : "5"                    // Missing stat grammar will treat the operation as an increment
}
```

The above example would:

* Increment `INNING` by `1`
* Decrement `INNINGSREM` by `1`
* Reset `OUTS` to its pre-defined initial value
* Increment `POINTS` by `5`, but to a maximum of `30`
* Set `PLAYERS` to `8`
* Set `HIGHESTHR` to `3`, or remain at current higher value
* Set `ESTIMATE` to `5`, or remain at current lower value
* Increment `GAME` by `5`


For the full statistics grammar see the [statistics grammar section](/api/appendix/statisticsgrammar).

<PartialServop service_name="globalGameStatistics" operation_name="PROCESS_STATISTICS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string statistics = "{\"INNING\":\"INC#1\",\"INNINGSREM\":\"DEC#1\",\"OUTS\":\"RESET\",\"POINTS\":\"INC_TO_LIMIT#5#30\",\"PLAYERS\":\"SET#8\",\"HIGHESTHR\":\"MAX#3\",\"ESTIMATE\":\"MIN#5\"}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GlobalGameStatisticsService.ProcessStatistics(statistics, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *statistics = "{\"INNING\":\"INC#1\",\"INNINGSREM\":\"DEC#1\",\"OUTS\":\"RESET\",\"POINTS\":\"INC_TO_LIMIT#5#30\",\"PLAYERS\":\"SET#8\",\"HIGHESTHR\":\"MAX#3\",\"ESTIMATE\":\"MIN#5\"}";
<%= data.branding.codePrefix %>->getGlobalGameStatisticsService()->processStatistics(statistics, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *statistics = @"{\"INNING\":\"INC#1\",\"INNINGSREM\":\"DEC#1\",\"OUTS\":\"RESET\",\"POINTS\":\"INC_TO_LIMIT#5#30\",\"PLAYERS\":\"SET#8\",\"HIGHESTHR\":\"MAX#3\",\"ESTIMATE\":\"MIN#5\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> globalGameStatisticsService] processStatistics:statistics
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String statistics = "{\"INNING\":\"INC#1\",\"INNINGSREM\":\"DEC#1\",\"OUTS\":\"RESET\",\"POINTS\":\"INC_TO_LIMIT#5#30\",\"PLAYERS\":\"SET#8\",\"HIGHESTHR\":\"MAX#3\",\"ESTIMATE\":\"MIN#5\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGlobalGameStatisticsService().processStatistics(statistics, this);

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
    "INNING": "INC#1",
    "INNINGSREM": "DEC#1",
    "OUTS": "RESET",
    "POINTS": "INC_TO_LIMIT#5#30",
    "PLAYERS": "SET#8",
    "HIGHESTHR": "MAX#3",
    "ESTIMATE": "MIN#5"
};

<%= data.branding.codePrefix %>.globalGameStatistics.processStatistics(statistics, result =>
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
    "INNING": "INC#1",
    "INNINGSREM": "DEC#1",
    "OUTS": "RESET",
    "POINTS": "INC_TO_LIMIT#5#30",
    "PLAYERS": "SET#8",
    "HIGHESTHR": "MAX#3",
    "ESTIMATE": "MIN#5"
};
var globalStatisticsProxy = bridge.getGlobalStatisticsServiceProxy();

var postResult = globalStatisticsProxy.processStatistics(statistics);
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
    "INNING": "INC#1",
    "INNINGSREM": "DEC#1",
    "OUTS": "RESET",
    "POINTS": "INC_TO_LIMIT#5#30",
    "PLAYERS": "SET#8",
    "HIGHESTHR": "MAX#3",
    "ESTIMATE": "MIN#5"
};
var globalStatisticsProxy = bridge.getGlobalStatisticsServiceProxy();

var postResult = globalStatisticsProxy.processStatistics(statistics);
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
    "statisticsExceptions": {
      "INNINGSREM": "minApplied"
    },
    "statistics": {
      "OUTS": 0,
      "HIGHESTHR": 4,
      "PLAYERS": 8,
      "INNINGSREM": 0,
      "INNING": 2,
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
statistics | A collection containing the statistics to process


