# AbandonMatchWithSummaryData
## Overview
Marks the given match as abandoned and sets the matchState to EXPIRED.


:::caution
Only a match whose current status is NOT_STARTED, PENDING or EXPIRED can be abandoned (status set to EXPIRED)
:::

<PartialServop service_name="asyncMatch" operation_name="ABANDON_MATCH_WITH_SUMMARY_DATA" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string ownerId = "the-owner-id";
string matchId = "the-match-id";
string pushContent = "An async-match has been abandoned!";
string summary = "{\"abandonBy\":{\"display\":\"Match abandoned by John Doe.\",\"player\":2,\"reason\":\"forfeit\"}}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.AsyncMatchService.AbandonMatchWithSummaryData(ownerId, matchId, pushContent, summary, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *ownerId = "the-owner-id";
const char *matchId = "the-match-id";
const char *pushContent = "An async-match has been abandoned!";
const char *summary = "{\"abandonBy\":{\"display\":\"Match abandoned by John Doe.\",\"player\":2,\"reason\":\"forfeit\"}}";
<%= data.branding.codePrefix %>->getAsyncMatchService()->abandonMatchWithSummaryData(ownerId, matchId, pushContent, summary, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *ownerId = @"the-owner-id";
NSString *matchId = @"the-match-id";
NSString *pushContent = @"An async-match has been abandoned!";
NSString *summary = "{\"abandonBy\":{\"display\":\"Match abandoned by John Doe.\",\"player\":2,\"reason\":\"forfeit\"}}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> asyncMatchService] abandonMatchWithSummaryData:ownerId
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
String pushContent = "An async-match has been abandoned!";
String summary = "{\"abandonBy\":{\"display\":\"Match abandoned by John Doe.\",\"player\":2,\"reason\":\"forfeit\"}}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getAsyncMatchService().abandonMatchWithSummaryData(ownerId, matchId, pushContent, summary, this);

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
var pushContent = "An async-match has been abandoned!";
var summary = {
  "abandonBy": {
    "display": "Match abandoned by John Doe.",
    "player": 2,
    "reason": "forfeit"
  }
};

<%= data.branding.codePrefix %>.asyncMatch.abandonMatchWithSummaryData(ownerId, matchId, pushContent, summary, result =>
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
var pushContent = "An async-match has been abandoned!";
var summary = {
  "abandonBy": {
    "display": "Match abandoned by John Doe.",
    "player": 2,
    "reason": "forfeit"
  }
};
var asyncMatchProxy = bridge.getAsyncMatchServiceProxy();

var postResult = asyncMatchProxy.abandonMatchWithSummaryData(ownerId, matchId, pushContent, summary);
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
	"operation": "ABANDON_MATCH_WITH_SUMMARY_DATA",
	"data": {
		"ownerId": "the-owner-id",
		"matchId": "the-match-id",
		"pushContent": "An async-match has been abandoned!",
		"summary": {
			"abandonBy": {
				"display": "Match abandoned by John Doe.",
				"player": 2,
				"reason": "forfeit"
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


