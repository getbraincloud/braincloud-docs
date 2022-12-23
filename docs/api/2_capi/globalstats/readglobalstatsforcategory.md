# ReadGlobalStatsForCategory
## Overview
Method retrieves the global statistics for the given category.

<PartialServop service_name="globalGameStatistics" operation_name="READ_FOR_CATEGORY" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string category = "generated";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GlobalStatisticsService.ReadGlobalStatsForCategory(category, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *category = "generated";

<%= data.branding.codePrefix %>->getGlobalStatisticsService()->readGlobalStatsForCategory(category, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *category = @"generated";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> globalStatisticsService] readGlobalStatsForCategory:category
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String category = "generated";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGlobalStatisticsService().readGlobalStatsForCategory(category, this);

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
var category = "generated";

<%= data.branding.codePrefix %>.globalStatistics.readGlobalStatsForCategory(category, result =>
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
var category = "generated";
var globalStatisticsProxy = bridge.getGlobalStatisticsServiceProxy();

var postResult = globalStatisticsProxy.readGlobalStatsForCategory(category);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var category = "generated";
var globalStatisticsProxy = bridge.getGlobalStatisticsServiceProxy();

var postResult = globalStatisticsProxy.readGlobalStatsForCategory(category);
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
      "ESTIMATE": 5,
      "HIGHESTHR": 4,
      "INNING": 2,
      "INNINGSREM": 0,
      "INNINGnew": 1,
      "OUTS": 0,
      "PLAYERS": 8,
      "PLAYER_COUNT": 4,
      "PLAYER_COUNTa": 1,
      "POINT": 1,
      "POINTS": 11,
      "otherstat": 0
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
category | The global statistics category


