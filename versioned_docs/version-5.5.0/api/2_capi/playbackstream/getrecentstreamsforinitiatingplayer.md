# GetRecentStreamsForInitiatingPlayer

Get recent streams for initiating player, optional parameter: initiatingPlayerId.

<PartialServop service_name="playbackStream" operation_name="GET_RECENT_STREAMS_FOR_INITIATING_PLAYER" />

## Method Parameters

| Parameter          | Description                                        |
| ------------------ | -------------------------------------------------- |
| initiatingPlayerId | The player that started the stream                 |
| maxNumStreams      | The max number of stream to return in the response |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string initiatingPlayerId = "player";
int maxNumStreams = 5;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PlaybackStreamService.GetRecentStreamsForInitiatingPlayer(initiatingPlayerId, maxNumStreams, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *initiatingPlayerId = "player";
int maxNumStreams = 5;

<%= data.branding.codePrefix %>->getPlaybackStreamService()->getRecentStreamsForInitiatingPlayer(initiatingPlayerId, maxNumStreams, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *initiatingPlayerId = @"player";
int maxNumStreams = 5;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> playbackStreamService] getRecentStreamsForInitiatingPlayer:initiatingPlayerId
              maxNumStreams:maxNumStreams
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String initiatingPlayerId = "player";
int maxNumStreams = 5;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPlaybackStreamService().getRecentStreamsForInitiatingPlayer(initiatingPlayerId, maxNumStreams, this);

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
var initiatingPlayerId = "player";
var maxNumStreams = 5;

<%= data.branding.codePrefix %>.playbackStream.getRecentStreamsForInitiatingPlayer(initiatingPlayerId, maxNumStreams, result =>
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
var  initiatingPlayerId = "player";
var  maxNumStreams = 5;

ServerResponse result = await <%= data.branding.codePrefix %>.playbackStreamService.getRecentStreamsForInitiatingPlayer(initiatingPlayerId:initiatingPlayerId, maxNumStreams:maxNumStreams);

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
var initiatingPlayerId = "player";
var maxNumStreams = 5;
var playbackStreamProxy = bridge.getPlaybackStreamServiceProxy();

var postResult = playbackStreamProxy.getRecentStreamsForInitiatingPlayer(initiatingPlayerId, maxNumStreams);
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
	"operation": "GET_RECENT_STREAMS_FOR_INITIATING_PLAYER",
	"data": {
		"initiatingPlayerId": "player",
		"maxNumStreams": 5
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
        "streams": [
            {
                "playbackStreamId": "6620a4e8-c4a8-4979-b827-0efa6a4a7435",
                "gameId": "10228",
                "initiatingPlayerId": "38ae8a44-1b24-4ad9-9bb4-a016bdfc6644",
                "targetPlayerId": "38ae8a44-1b24-4ad9-9bb4-a016bdfc6644",
                "status": "COMPLETE",
                "summary": {
                    "total": 5
                },
                "expiryTime": null,
                "createdAt": 1526580974204,
                "updatedAt": 1526581097133
            },
            {
                "playbackStreamId": "90802401-806c-4621-afda-7e11ec910ec4",
                "gameId": "10228",
                "initiatingPlayerId": "38ae8a44-1b24-4ad9-9bb4-a016bdfc6644",
                "targetPlayerId": "38ae8a44-1b24-4ad9-9bb4-a016bdfc6644",
                "status": "COMPLETE",
                "summary": {},
                "expiryTime": null,
                "createdAt": 1526578312706,
                "updatedAt": 1526578312706
            }
        ]
    },
    "status": 200
}
```

</details>
