# ConnectFromRoomReady

Connects to a lobby's match from its `ROOM_READY` event, whatever kind of server the lobby launched, or peer to peer when the lobby connected its members directly. It reads the address, port, passcode and lobby id from the event, so the game doesn't have to.

This is the way to connect for a lobby type that uses [direct connect](/api/capi/relay/enabledirectconnect): a direct lobby's `ROOM_READY` has no server address, and no `ROOM_ASSIGNED` event comes before it.

:::info
Direct connect is available in the C# client library from 6.2.
:::

## Method Parameters

| Parameter | Description |
| --------- | ----------- |
| preferredType | `WEBSOCKET`, `TCP` or `UDP`: the transport to use where the server offers a choice. |
| useSsl | Use a secure WebSocket (wss) when connecting over WebSocket. |
| roomReady | The `ROOM_READY` event as the lobby callback received it: the JSON string, or the parsed event (or its `data` object) as a `Dictionary<string, object>`. |
| success | Called once connected, as for [Connect](/api/capi/relay/connect). |
| failure | Called if the connection fails, as for [Connect](/api/capi/relay/connect), and also when the event can't be used. |

:::note

How it connects depends on the kind of server the lobby used:

- **Direct** (`connectData.type` is `"direct"`): peer to peer, as `RelayConnectionType.DIRECT`, over the connection the lobby's direct connect attempt set up. `preferredType` and `useSsl` don't apply: the traffic is always protected with the lobby's cipher.
- **<%= data.branding.productName %> relay servers and Edgegap**: the port for `preferredType` (`WEBSOCKET`, `TCP` or `UDP`). There is no fallback to another type: if the server doesn't offer that port, the connect fails. With `useSsl` and `WEBSOCKET`, the server's secure WebSocket URL is used.
- **GameLift and i3D**: their one port, over WebSocket, whatever type was preferred.

`useSsl` only applies to WebSocket, and never falls back to an insecure connection: the connect fails if the server offers no secure WebSocket (Edgegap, GameLift, i3D, or a relay server without secure connections enabled).

An event that can't be used is reported to `failure` (status 403, reason code `RS_CLIENT_ERROR`) before this call returns.

:::

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Connected | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

// From the lobby callback (RegisterRTTLobbyCallback)
void OnLobbyEvent(string json)
{
    var message = JsonReader.Deserialize<Dictionary<string, object>>(json);
    if ((string)message["operation"] == "ROOM_READY")
    {
        <%= data.branding.codePrefix %>.RelayService.ConnectFromRoomReady(RelayConnectionType.UDP, false, json, successCallback, failureCallback);
    }
}
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Obj-C">
```

```objectivec
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
-- N/A
```

```mdx-code-block
</TabItem>
<TabItem value="gdscript" label="GDScript">
```

```gdscript
N/A
```

```mdx-code-block
</TabItem>
<TabItem value="lua" label="Lua">
```

```lua
-- N/A
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
// N/A
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```
