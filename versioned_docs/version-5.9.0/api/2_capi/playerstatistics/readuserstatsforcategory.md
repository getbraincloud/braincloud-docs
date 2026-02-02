# ReadUserStatsForCategory

Method retrieves the user statistics for the given category.

<PartialServop service_name="playerStatistics" operation_name="READ_FOR_CATEGORY" />

## Method Parameters
Parameter | Description
--------- | -----------
category | The user statistics category

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string category = "alert counts";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PlayerStatisticsService.ReadUserStatsForCategory(category, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *category = "alert counts";

<%= data.branding.codePrefix %>->getPlayerStatisticsService()->readUserStatsForCategory(category, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *category = @"alert counts";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> playerStatisticsService] readUserStatsForCategory:category
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String category = "alert counts";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPlayerStatisticsService().readUserStatsForCategory(category, this);

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
var category = "alert counts";

<%= data.branding.codePrefix %>.playerStatistics.readUserStatsForCategory(category, result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
var  category = "alert counts";

ServerResponse result = await <%= data.branding.codePrefix %>.playerStatisticsService.readUserStatsForCategory(category:category);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var category = "alert counts";
var playerStatisticsProxy = bridge.getPlayerStatisticsServiceProxy();

var postResult = playerStatisticsProxy.readUserStatsForCategory(category);
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
	"operation": "READ_FOR_CATEGORY",
	"data": {
		"category": "alert counts"
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
	"data": {
		"statistics": {
			"cus_RoundsWon": 0,
			"cus_RoundsLost": 0,
			"cus_DifficultyChanges": 0,
			"cus_RoundsFinished": 0
		}
	},
	"status": 200
}
```
</details>

