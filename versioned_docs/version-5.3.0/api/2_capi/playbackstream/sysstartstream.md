# SysStartStream

Start a playback stream.

<PartialServop service_name="playbackStream" operation_name="SYS_START_STREAM" />

## Method Parameters

| Parameter         | Description                                   |
| ----------------- | --------------------------------------------- |
| profileId         | The player starting the stream.               |
| targetProfileId   | The player to start a stream with.            |
| includeSharedData | Whether to include shared data in the stream. |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var profileId = "player";
var targetProfileId = "player";
var includeSharedData = False;
var playbackStreamProxy = bridge.getPlaybackStreamServiceProxy();

var postResult = playbackStreamProxy.sysStartStream(profileId, targetProfileId, includeSharedData);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"playbackStream",
    "operation":"SYS_START_STREAM",
    "data":{
        "profileId":"player",
        "targetProfileId":"player",
        "includeSharedData":false
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
