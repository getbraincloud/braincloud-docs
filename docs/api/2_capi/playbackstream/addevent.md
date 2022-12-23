# AddEvent
## Overview
Adds a stream event.

<PartialServop service_name="playbackStream" operation_name="ADD_EVENT" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string playbackStreamId = "stream";
string jsonEventData = "{\"value\":1}";
string jsonSummary = "{\"total\":5}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PlaybackStreamService.AddEvent(playbackStreamId, jsonEventData, jsonSummary, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *playbackStreamId = "stream";
const char *jsonEventData = "{\"value\":1}";
const char *jsonSummary = "{\"total\":5}";

<%= data.branding.codePrefix %>->getPlaybackStreamService()->addEvent(playbackStreamId, jsonEventData, jsonSummary, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *playbackStreamId = @"stream";
NSString *jsonEventData = @"{\"value\":1}";
NSString *jsonSummary = @"{\"total\":5}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> playbackStreamService] addEvent:playbackStreamId
              jsonEventData:jsonEventData
                jsonSummary:jsonSummary
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
String jsonEventData = "{\"value\":1}";
String jsonSummary = "{\"total\":5}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPlaybackStreamService().addEvent(playbackStreamId, jsonEventData, jsonSummary, this);

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
var jsonEventData = {
    "value": 1
};
var jsonSummary = {
    "total": 5
};

<%= data.branding.codePrefix %>.playbackStream.addEvent(playbackStreamId, jsonEventData, jsonSummary, result =>
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
var jsonEventData = {
    "value": 1
};
var jsonSummary = {
    "total": 5
};
var playbackStreamProxy = bridge.getPlaybackStreamServiceProxy();

var postResult = playbackStreamProxy.addEvent(playbackStreamId, jsonEventData, jsonSummary);
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
	"operation": "ADD_EVENT",
	"data": {
		"playbackStreamId": "stream",
		"eventData": {
			"value": 1
		},
		"summary": {
			"total": 5
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
    "status" : 200,
    "data" : null
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
playbackStreamId | Identifies the stream to read
eventData | Describes the event
summary | Current summary data as of this event


