# SysReadStream

Read a playback stream.

<PartialServop service_name="playbackStream" operation_name="SYS_READ_STREAM" />

## Method Parameters

| Parameter        | Description                    |
| ---------------- | ------------------------------ |
| playbackStreamId | Identifies the stream to read. |

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
var playbackStreamId = "a-stream-id";
var playbackStreamProxy = bridge.getPlaybackStreamServiceProxy();

var postResult = playbackStreamProxy.sysReadStream(playbackStreamId);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"playbackStream",
    "operation":"SYS_READ_STREAM",
    "data":{
        "playbackStreamId":"a-stream-id"
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
        "playbackStreamId": "3f9799c1-67db-46bf-87b1-ff3d6ef54090",
        "initiatingPlayerId": "c5ecdbda-5f91-41a9-96aa-174f412f7657",
        "targetPlayerId": "c5ecdbda-5f91-41a9-96aa-174f412f7657",
        "status": "IN_PROGRESS",
        "summary": {
            "total": 5
        },
        "initialSharedData": {
            "entities": [],
            "statistics": {}
        },
        "events": [
            {
                "value": 1
            }
        ],
        "expiryTime": null,
        "createdAt": 1717016614483,
        "updatedAt": 1717016652518
    },
    "status": 200
}
```

</details>
