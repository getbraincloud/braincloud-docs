# SysRoomSessionEnded
Indicates that the given server instance has ended.

<PartialServop service_name="roomServer" operation_name="SYS_ROOM_SESSION_ENDED" />

## Method Parameters
Parameter | Description
--------- | -----------
serverId | The room server instance id.
serverContext | JSON object containing server context data.

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
<TabItem value="dart" label="Dart">
```

```dart
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var serverId = "i-abcdef";
var serverContext = {
    "abc": "xyz"
};
var roomServerProxy = bridge.getRoomserverServiceProxy();

var postResult = roomServerProxy.sysRoomSessionEnded(serverId, serverContext);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"roomServer",
    "operation":"SYS_ROOM_SESSION_ENDED",
    "data":{
        "serverId":"i-abcdef",
        "serverContext":{
            "abc":"xyz"
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
  "data" : {}
}
```

</details>
