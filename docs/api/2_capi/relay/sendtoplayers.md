# SendToPlayers

Send a packet to any players by using a mask.

## Method Parameters

| Parameter  | Description                                                                                                                                                                                                                                                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data       | Byte array for the data to send                                                                                                                                                                                                                                                       |
| size       | Size of data in bytes                                                                                                                                                                                                                                                                 |
| playerMask | Mask of the players to send to. 0001 = netId 0, 0010 = netId 1, etc. If you pass ALL_PLAYER_MASK you will be included and you will get an echo for your message. Use sendToAll instead, you will be filtered out. You can manually filter out by : `ALL_PLAYER_MASK &= ~(1 &lt;&lt; myNetId)` |
| reliable   | Send this reliably or not                                                                                                                                                                                                                                                             |
| ordered    | Received this ordered or not                                                                                                                                                                                                                                                          |
| channel    | One of: (CHANNEL_HIGH_PRIORITY_1, CHANNEL_HIGH_PRIORITY_2, CHANNEL_NORMAL_PRIORITY, CHANNEL_LOW_PRIORITY)                                                                                                                                                                             |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
RSDataCallback rsDataCallback = (response) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};

<%= data.branding.codePrefix %>.RelayService.SendToPlayers(data, size, playerMask, reliable, ordered, channel);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->sendToPlayers(const uint8_t* in_data, int in_size, uint64_t in_playerMask, bool in_reliable, bool in_ordered, eRelayChannel in_channel);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->sendToPlayers(const uint8_t* in_data, int in_size, uint64_t in_playerMask, bool in_reliable, bool in_ordered, eRelayChannel in_channel);
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->sendToPlayers(const uint8_t* in_data, int in_size, uint64_t in_playerMask, bool in_reliable, bool in_ordered, eRelayChannel in_channel);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.relay.sendToPlayers(const uint8_t* in_data, int in_size, uint64_t in_playerMask, bool in_reliable, bool in_ordered, eRelayChannel in_channel);
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
Uint8List bytes = utf8.encode("Some Data here");
int mask = 0;
// Send only to NetID 0, 2 and 5
for (var netId in [0,2,5]) {
  mask += (1 << netId);
}
​
_bc.relayService.sendToPlayers(bytes, playerMask:mask,
          reliable: true,
          ordered: true,
          channel: BrainCloudRelay.channelLowPriority);
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
local bytes = "Some Data here"  -- byte encoded
local mask = 0
-- Send only to NetID 0, 2 and 5
for _, netId in ipairs({0, 2, 5}) do
    mask = mask + (1 << netId)
end

<%= data.branding.codePrefix %>:getRelayService():sendToPlayers(bytes, mask, true, true, BrainCloudRelay.channelLowPriority)
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

```cfscript
// N/A
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```
