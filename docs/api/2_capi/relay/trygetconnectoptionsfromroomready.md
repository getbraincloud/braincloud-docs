# TryGetConnectOptionsFromRoomReady

Works out what [ConnectFromRoomReady](/api/capi/relay/connectfromroomready) would connect with, without connecting. Use it to log the choice, or to adjust it before calling [Connect](/api/capi/relay/connect) yourself. The rules are the same as for ConnectFromRoomReady.

:::info
Direct connect is available in the C# client library from 6.2.
:::

## Method Parameters

| Parameter | Description |
| --------- | ----------- |
| preferredType | `WEBSOCKET`, `TCP` or `UDP`: the transport to use where the server offers a choice. |
| useSsl | Use a secure WebSocket (wss) when connecting over WebSocket. |
| roomReady | The `ROOM_READY` event as the lobby callback received it, as a JSON string or already parsed. |
| connectionType | Out: the transport to pass to Connect. `DIRECT` for a lobby that connected its members directly. |
| options | Out: the options to pass to Connect. |
| error | Out: why the event can't be used, or null. |

## Returns

`true` when the event can be used, and `false` otherwise, with the reason in `error`.

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

RelayConnectionType connectionType;
RelayConnectOptions options;
string error;

if (<%= data.branding.codePrefix %>.RelayService.TryGetConnectOptionsFromRoomReady(RelayConnectionType.UDP, false, roomReadyJson,
    out connectionType, out options, out error))
{
    Debug.Log("Connecting with " + connectionType);
    <%= data.branding.codePrefix %>.RelayService.Connect(connectionType, options, successCallback, failureCallback);
}
else
{
    Debug.Log("Can't connect: " + error);
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
