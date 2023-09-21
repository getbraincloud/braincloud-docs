# UpdateSummaryFriendData
## Overview
Updates the "friend summary data" associated with the logged in user.

Some operations will return this summary data. For instance the social leaderboards will return the player's score in the leaderboard along with the friend summary data. Generally this data is used to provide a quick overview of the user without requiring a separate API call to read their public stats or entity data.

The friend summary data can also be requested with the [<code>GetSummaryDataForProfileId</code>](/api/capi/friend/getsummarydataforprofileid) api call.

<PartialServop service_name="playerState" operation_name="UPDATE_SUMMARY" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string summaryFriendData = "{\"xp\":12,\"attributeName\":\"value\"}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PlayerStateService.UpdateSummaryFriendData(summaryFriendData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *summaryFriendData = "{\"xp\":12,\"attributeName\":\"value\"}";
<%= data.branding.codePrefix %>->getPlayerStateService()->updateSummaryFriendData(summaryFriendData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *summaryFriendData = @"{\"xp\":12,\"attributeName\":\"value\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> playerStateService] updateSummaryFriendData:summaryFriendData
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String summaryFriendData = "{\"xp\":12,\"attributeName\":\"value\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPlayerStateService().updateSummaryFriendData(summaryFriendData, this);

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
var summaryFriendData = {
    "xp": 12,
    "attributeName": "value"
};

<%= data.branding.codePrefix %>.playerState.updateSummaryFriendData(summaryFriendData, result =>
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
var summaryFriendData = {
    "xp": 12,
    "attributeName": "value"
};
var playerStateProxy = bridge.getPlayerStateServiceProxy();

var postResult = playerStateProxy.updateSummaryFriendData(summaryFriendData);
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
	"service": "playerState",
	"operation": "UPDATE_SUMMARY",
	"data": {
		"summaryFriendData": {
			"xp": 12,
			"attributeName": "value"
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
    "status":200,
    "data": null
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
summaryFriendData | A JSON string defining the summary data. For example `{ "xp":123, "level":12, "highScore":45123 }`


