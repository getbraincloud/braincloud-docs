# CompleteMatch
## Overview
Completes a match.

<PartialServop service_name="onewayMatch" operation_name="COMPLETE_MATCH" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string playbackStreamId = "streamId";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.OnewayMatchService.CompleteMatch(playbackStreamId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *playbackStreamId = "streamId";
<%= data.branding.codePrefix %>->getOnewayMatchService()->completeMatch(playbackStreamId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *playbackStreamId = @"streamId";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> onewayMatchService] completeMatch:playbackStreamId
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String playbackStreamId = "streamId";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getOnewayMatchService().completeMatch(playbackStreamId, this);

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
var playbackStreamId = "streamId";

<%= data.branding.codePrefix %>.onewayMatch.completeMatch(playbackStreamId, result =>
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
var playbackStreamId = "streamId";
var onewayMatchProxy = bridge.getOnewayMatchServiceProxy();

var postResult = onewayMatchProxy.completeMatch(playbackStreamId);
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
	"service": "onewayMatch",
	"operation": "COMPLETE_MATCH",
	"data": {
		"playbackStreamId": "streamId"
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
    "data" : null
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
playbackStreamId | The playback stream id returned in the start match


