# ReadMilestonesByCategory

Method returns milestones for the given category.

<PartialServop service_name="gamification" operation_name="READ_MILESTONES_BY_CATEGORY" />

## Method Parameters
Parameter | Description
--------- | -----------
category | The milestone category
includeMetaData | Whether to return meta data as well

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string category = "main";
bool includeMetaData = false;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GamificationService.ReadMilestonesByCategory(category, includeMetaData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *category = "main";
bool includeMetaData = false;
<%= data.branding.codePrefix %>->getGamificationService()->readMilestonesByCategory(category, includeMetaData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *category = @"main";
bool includeMetaData = false;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> gamificationService] readMilestonesByCategory:category
            includeMetaData:includeMetaData
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String category = "main";
boolean includeMetaData = false;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGamificationService().readMilestonesByCategory(category, includeMetaData, this);

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
var category = "main";
var includeMetaData = false;

<%= data.branding.codePrefix %>.gamification.readMilestonesByCategory(category, includeMetaData, result =>
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
var  category = "main";
var  includeMetaData = false;

ServerResponse result = await <%= data.branding.codePrefix %>.gamificationService.readMilestonesByCategory(category:category, includeMetaData:includeMetaData);

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
var category = "main";
var includeMetaData = false;
var gamificationProxy = bridge.getGamificationServiceProxy();

var postResult = gamificationProxy.readMilestonesByCategory(category, includeMetaData);
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
	"operation": "READ_MILESTONES_BY_CATEGORY",
	"data": {
		"category": "main",
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
    "status" : 200,
    "data" :
    {
        "milestones": []
    }
}
```
</details>

