# Send

Send a packet to peer(s).

## Method Parameters

| Parameter | Description                                                                                               |
| --------- | --------------------------------------------------------------------------------------------------------- |
| data      | Byte array for the data to send                                                                           |
| size      | Size of data in bytes                                                                                     |
| toNetId   | The net id to send to, TO_ALL_PLAYERS to relay to all                                                     |
| reliable  | Send this reliably or not                                                                                 |
| ordered   | Received this ordered or not                                                                              |
| channel   | One of: (CHANNEL_HIGH_PRIORITY_1, CHANNEL_HIGH_PRIORITY_2, CHANNEL_NORMAL_PRIORITY, CHANNEL_LOW_PRIORITY) |

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

<%= data.branding.codePrefix %>.RelayService.Send(data, size, toNetId, reliable, ordered, channel);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->send(const uint8_t* in_data, int in_size, uint64_t toNetId, bool in_reliable, bool in_ordered, eRelayChannel in_channel);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->send(const uint8_t* in_data, int in_size, uint64_t toNetId, bool in_reliable, bool in_ordered, eRelayChannel in_channel);
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->send(const uint8_t* in_data, int in_size, uint64_t toNetId, bool in_reliable, bool in_ordered, eRelayChannel in_channel);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.relay.send(const uint8_t* in_data, int in_size, uint64_t toNetId, bool in_reliable, bool in_ordered, eRelayChannel in_channel);
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
int aNetId = 2;
Uint8List bytes = utf8.encode("Some Data here");
​
_bc.relayService.send(bytes, aNetId,
          reliable: true,
          ordered: true,
          channel: BrainCloudRelay.channelHighPriority_1);
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
local aNetId = 2
local bytes = "Some Data here"  -- byte encoded

<%= data.branding.codePrefix %>:getRelayService():send(bytes, aNetId, true, true, BrainCloudRelay.channelHighPriority_1)
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
