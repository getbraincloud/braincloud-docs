# StartStream
## Overview
Starts a stream.

<PartialServop service_name="playbackStream" operation_name="START_STREAM" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string targetPlayerId = "player";
bool includeSharedData = false;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PlaybackStreamService.StartStream(targetPlayerId, includeSharedData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *targetPlayerId = "player";
bool includeSharedData = false;
<%= data.branding.codePrefix %>->getPlaybackStreamService()->startStream(targetPlayerId, includeSharedData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *targetPlayerId = @"player";
bool includeSharedData = false;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> playbackStreamService] startStream:targetPlayerId
          includeSharedData:includeSharedData
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String targetPlayerId = "player";
boolean includeSharedData = false;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPlaybackStreamService().startStream(targetPlayerId, includeSharedData, this);

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
var targetPlayerId = "player";
var includeSharedData = false;

<%= data.branding.codePrefix %>.playbackStream.startStream(targetPlayerId, includeSharedData, result =>
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
var targetPlayerId = "player";
var includeSharedData = false;
var playbackStreamProxy = bridge.getPlaybackStreamServiceProxy();

var postResult = playbackStreamProxy.startStream(targetPlayerId, includeSharedData);
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
	"operation": "START_STREAM",
	"data": {
		"targetPlayerId": "player",
		"includeSharedData": false
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
    "data": {
        "playbackStreamId": "b8da4619-2ddc-4184-b654-cd11d12a3275",
        "gameId": "10000",
        "initiatingPlayerId": "198bcafcd-6e84-4c30-9f6e-3f9f016440c6",
        "targetPlayerId": "a6943c74-6655-4245-8b2b-13bb908d3f88",
        "status": "STARTED",
        "summary": {},
        "initialSharedData": {
            "entities": [],
            "statistics": {}
        },
        "events": [],
        "createdAt": 1425481184200,
        "updatedAt": 1425481184200
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
targetPlayerId | The player to start a stream with
includeSharedData | Whether to include shared data in the stream


