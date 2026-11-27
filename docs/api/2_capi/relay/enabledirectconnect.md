# EnableDirectConnect

Opts this player in to lobby direct connect. When a lobby whose type has direct connect turned on starts, its players first try to connect to each other peer to peer. If every player reaches every other, the match runs without a relay server; if not, the lobby launches its server as usual. Off by default.

:::info
Direct connect is available in the C# client library from 6.2.
:::

## Method Parameters

| Parameter | Description |
| --------- | ----------- |
| enable | `true` to take part in direct connect, `false` to always use the lobby's server. |

:::note

- While it is on, each RTT connection tests the player's network and reports to <%= data.branding.productName %> whether the player can be reached directly. A lobby tries direct connect only when every member has opted in and can be reached.
- The setting lasts through RTT reconnects and logins, until the wrapper is initialized again.
- Players connected directly can see each other's IP addresses. To let players choose, tie this to a player setting and set it again after each login. Turning it off withdraws the player's report, so their lobbies use the server.
- It has no effect on WebGL, which can't connect peer to peer.
- Direct connect is set up per lobby type, under **Design > Multiplayer > Lobbies**, and lobbies connect from their `ROOM_READY` event with [ConnectFromRoomReady](/api/capi/relay/connectfromroomready).

:::

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// Once, after initializing <%= data.branding.productName %> and before enabling RTT
<%= data.branding.codePrefix %>.RelayService.EnableDirectConnect(true);
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
