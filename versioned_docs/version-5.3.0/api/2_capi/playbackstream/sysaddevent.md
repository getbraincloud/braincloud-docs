# SysAddEvent

Add event to stream.

<PartialServop service_name="playbackStream" operation_name="SYS_ADD_EVENT" />

## Method Parameters

| Parameter        | Description                            |
| ---------------- | -------------------------------------- |
| profileId        | The player adding an event.            |
| playbackStreamId | Identifies the stream to read.         |
| eventData        | Describes the event.                   |
| summary          | Current summary data as of this event. |

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
var playbackStreamId = "stream";
var eventData = {
    "value": 1
};
var summary = {
    "total": 5
};
var playbackStreamProxy = bridge.getPlaybackStreamServiceProxy();

var postResult = playbackStreamProxy.sysAddEvent(profileId, playbackStreamId, eventData, summary);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"playbackStream",
    "operation":"SYS_ADD_EVENT",
    "data":{
        "profileId":"player",
        "playbackStreamId":"stream",
        "eventData":{
            "value":1
        },
        "summary":{
            "total":5
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
    "status": 200,
    "data": null
}
```

</details>
