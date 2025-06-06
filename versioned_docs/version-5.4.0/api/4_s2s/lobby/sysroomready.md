# SysRoomReady

Tells the lobby system that a room server is ready to go.

<PartialServop service_name="lobby" operation_name="SYS_ROOM_READY" />

## Method Parameters

| Parameter   | Description                                               |
| ----------- | --------------------------------------------------------- |
| lobbyId     | The id of lobby that this room server is associated with. |
| connectInfo | Info the clients will use to connect to the room server.  |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var lobbyId = "55555:4v4:19";
var connectInfo = {};
var lobbyProxy = bridge.getLobbyServiceProxy();

var postResult = lobbyProxy.sysRoomReady(lobbyId, connectInfo);
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
	"service": "lobby",
	"operation": "SYS_ROOM_READY",
	"data": {
		"lobbyId": "55555:4v4:19",
		"connectInfo": {}
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
    "data": {}
}
```

</details>

<details>
<summary>Common Error Code</summary>

### Status Codes

| Code  | Name            | Description                          |
| ----- | --------------- | ------------------------------------ |
| 40601 | RTT_NOT_ENABLED | RTT must be enabled for this feature |

</details>
