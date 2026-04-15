# SysUpdateRoomServerImage
Updates the Docker image for the specified room server configuration. Automatically increments the server config version.

<PartialServop service_name="roomServer" operation_name="SYS_UPDATE_ROOM_SERVER_IMAGE" />

## Method Parameters
Parameter | Description
--------- | -----------
serverName | The name of the room server config to update, as defined in App > Design > Servers > My Servers.
dockerRepository | The new Docker repository string (e.g. 'myorg/my-game-server:v1.2.3').

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
<TabItem value="lua" label="Roblox">
```

```lua
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var serverName = "my-server-type";
var dockerRepository = "myorg/my-game-server:v1.2.3";
var roomServerProxy = bridge.getRoomServerServiceProxy();

var postResult = roomServerProxy.sysUpdateRoomServerImage(serverName, dockerRepository);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"roomServer",
    "operation":"SYS_UPDATE_ROOM_SERVER_IMAGE",
    "data":{
        "serverName":"my-server-type",
        "dockerRepository":"myorg/my-game-server:v1.2.3"
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
    "dockerRepository": "braincloud/warstone-server:4.5.0",
    "serverName": "RoomServer",
    "version": 3
  },
  "status": 200
}
```

</details>
