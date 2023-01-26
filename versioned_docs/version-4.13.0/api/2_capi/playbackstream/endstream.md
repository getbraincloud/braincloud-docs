# EndStream
## Overview
Ends a stream.

<PartialServop service_name="playbackStream" operation_name="END_STREAM" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string playbackStreamId = "stream";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PlaybackStreamService.EndStream(playbackStreamId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *playbackStreamId = "stream";

<%= data.branding.codePrefix %>->getPlaybackStreamService()->endStream(playbackStreamId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *playbackStreamId = @"stream";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> playbackStreamService] endStream:playbackStreamId
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String playbackStreamId = "stream";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPlaybackStreamService().endStream(playbackStreamId, this);

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
var playbackStreamId = "stream";

<%= data.branding.codePrefix %>.playbackStream.endStream(playbackStreamId, result =>
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
var playbackStreamId = "stream";
var playbackStreamProxy = bridge.getPlaybackStreamServiceProxy();

var postResult = playbackStreamProxy.endStream(playbackStreamId);
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
	"service": "playbackStream",
	"operation": "END_STREAM",
	"data": {
		"playbackStreamId": "stream"
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
playbackStreamId | Identifies the stream to end


