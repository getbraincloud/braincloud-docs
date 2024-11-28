# ProtectStreamUntil

Protects a playback stream from being purged (but not deleted) for the given number of days (from now). If the number of days given is less than the normal purge interval days (from createdAt), the longer protection date is applied. Can only be called by users involved in the playback stream.

<PartialServop service_name="playbackStream" operation_name="PROTECT_STREAM_UNTIL" />

## Method Parameters

| Parameter        | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| playbackStreamId | Identifies the stream to protect.                            |
| numDays          | The number of days the stream is to be protected (from now). |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string playbackStreamId = "streamId";
int numDays = 365;

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PlaybackstreamService.ProtectStreamUntil(playbackStreamId, numDays, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *playbackStreamId = "streamId";
int numDays = 365;
<%= data.branding.codePrefix %>.getPlaybackstreamService().protectStreamUntil(playbackStreamId, numDays, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *playbackStreamId = @"streamId";
int numDays = 365;
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> playbackStreamService] protectStreamUntil:
             playbackStreamId:playbackStreamId
                      numDays:numDays
              completionBlock:successBlock
         errorCompletionBlock:failureBlock
                     cbObject:nil]
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String playbackStreamId = "streamId";
int numDays = 365;
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getPlaybackstreamService.protectStreamUntil(playbackStreamId, numDays, this);

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
var numDays = 365;
<%= data.branding.codePrefix %>.playbackStream.protectStreamUntil(playbackStreamId, numDays, result =>
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
var numDays = 365;
var playbackStreamProxy = bridge.getPlaybackStreamServiceProxy();

var postResult = playbackStreamProxy.protectStreamUntil(playbackStreamId, numDays);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"playbackStream",
    "operation":"PROTECT_STREAM_UNTIL",
    "data":{
        "playbackStreamId":"streamId",
        "numDays":365
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
        "protectedUntil": "2025-10-15 19:46:20"
    },
    "status": 200
}
```

</details>
