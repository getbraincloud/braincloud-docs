# ReadStream
## Overview
Reads a stream.

<PartialServop service_name="playbackStream" operation_name="READ_STREAM" / >

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

<%= data.branding.codePrefix %>.PlaybackStreamService.ReadStream(playbackStreamId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *playbackStreamId = "stream";

<%= data.branding.codePrefix %>->getPlaybackStreamService()->readStream(playbackStreamId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *playbackStreamId = @"stream";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> playbackStreamService] readStream:playbackStreamId
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

<%= data.branding.codePrefix %>.getPlaybackStreamService().readStream(playbackStreamId, this);

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

<%= data.branding.codePrefix %>.playbackStream.readStream(playbackStreamId, result =>
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

var postResult = playbackStreamProxy.readStream(playbackStreamId);
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
	"operation": "READ_STREAM",
	"data": {
		"playbackStreamId": "a-stream-id"
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
   "data":{
      "playbackStreamId":"6620a4e8-c4a8-4979-b827-0efa6a4a7435",
      "gameId":"10228",
      "initiatingPlayerId":"38ae8a44-1b24-4ad9-9bb4-a016bdfc6644",
      "targetPlayerId":"38ae8a44-1b24-4ad9-9bb4-a016bdfc6644",
      "status":"IN_PROGRESS",
      "summary":{
         "SUMMARY":"User moved back and spent coins on a potion.",
         "POINTS":5
      },
      "initialSharedData":{
         "entities":[

         ],
         "statistics":{

         }
      },
      "events":[
         {
            "MOVE":"FORWARD",
            "EVENT":"FOUND_COINS"
         },
         {
            "MOVE":"BACK",
            "EVENT":"SPENT_COINS",
            "ITEM_AQUIRED":"POTION"
         }
      ],
      "expiryTime":null,
      "createdAt":1526580974204,
      "updatedAt":1526581097133
   },
   "status":200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
playbackStreamId | Identifies the stream to read


