# SysProtectStreamUntil

Protects a playback stream from being purged (but not deleted) for the given number of days (from now). If the number of days given is less than the normal purge interval days (from createdAt), the longer protection date is applied.

<PartialServop service_name="playbackStream" operation_name="SYS_PROTECT_STREAM_UNTIL" />

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
var playbackStreamId = "streamId";
var numDays = 365;
var playbackStreamProxy = bridge.getPlaybackstreamServiceProxy();

var postResult = playbackStreamProxy.sysProtectStreamUntil(playbackStreamId, numDays);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"playbackStream",
    "operation":"SYS_PROTECT_STREAM_UNTIL",
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
