# CompleteMatchWithSummaryData
## Overview
Marks the given match as complete.


:::caution
Only a match whose current status is PENDING (at least one turn has occurred) or COMPLETE can be marked as COMPLETE
:::

<PartialServop service_name="asyncMatch" operation_name="COMPLETE_MATCH_WITH_SUMMARY_DATA" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string ownerId = "the-owner-id";
string matchId = "the-match-id";
string pushContent = "An async-match has been completed!";
string summary = "{\"completedBy\":{\"display\":\"John Doe wins!\",\"player\":2,\"reason\":\"victory\"}}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.AsyncMatchService.CompleteMatchWithSummaryData(ownerId, matchId, pushContent, summary, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *ownerId = "the-owner-id";
const char *matchId = "the-match-id";
const char *pushContent = "An async-match has been completed!";
const char *summary = "{\"completedBy\":{\"display\":\"John Doe wins!\",\"player\":2,\"reason\":\"victory\"}}";
<%= data.branding.codePrefix %>->getAsyncMatchService()->completeMatchWithSummaryData(ownerId, matchId, pushContent, summary, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *ownerId = @"the-owner-id";
NSString *matchId = @"the-match-id";
NSString *pushContent = @"An async-match has been completed!";
NSString *summary = "{\"completedBy\":{\"display\":\"John Doe wins!\",\"player\":2,\"reason\":\"victory\"}}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> asyncMatchService] completeMatchWithSummaryData:ownerId
                    matchId:matchId
                pushContent:pushContent
                    summary:summary
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String ownerId = "the-owner-id";
String matchId = "the-match-id";
String pushContent = "An async-match has been completed!";
String summary = "{\"completedBy\":{\"display\":\"John Doe wins!\",\"player\":2,\"reason\":\"victory\"}}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getAsyncMatchService().completeMatchWithSummaryData(ownerId, matchId, pushContent, summary, this);

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
var ownerId = "the-owner-id";
var matchId = "the-match-id";
var pushContent = "An async-match has been completed!";
var summary = {
  "completedBy": {
    "display": "John Doe wins!",
    "player": 2,
    "reason": "victory"
  }
};

<%= data.branding.codePrefix %>.asyncMatch.completeMatchWithSummaryData(ownerId, matchId, pushContent, summary, result =>
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
var ownerId = "the-owner-id";
var matchId = "the-match-id";
var pushContent = "An async-match has been completed!";
var summary = {
  "completedBy": {
    "display": "John Doe wins!",
    "player": 2,
    "reason": "victory"
  }
};
var asyncMatchProxy = bridge.getAsyncMatchServiceProxy();

var postResult = asyncMatchProxy.completeMatchWithSummaryData(ownerId, matchId, pushContent, summary);
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
	"service": "asyncMatch",
	"operation": "COMPLETE_MATCH_WITH_SUMMARY_DATA",
	"data": {
		"ownerId": "the-owner-id",
		"matchId": "the-match-id",
		"pushContent": "An async-match has been completed!",
		"summary": {
			"completedBy": {
				"display": "John Doe wins!",
				"player": 2,
				"reason": "victory"
			}
		}
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
ownerId | The match owner id. 
matchId | The match id. 
pushContent | Optional push notification message to send to the other party. Refer to the Push Notification functions for the syntax required. 
summary | Optional JSON string defining what the other player will see as a summary of the game when listing their games. 


