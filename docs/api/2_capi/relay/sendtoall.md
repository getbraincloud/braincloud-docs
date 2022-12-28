# SendToAll
## Overview
Send a packet to all except yourself.

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

<%= data.branding.codePrefix %>.RelayService.SendToAll(data, size, reliable, ordered, channel);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->sendToAll(const uint8_t* in_data, int in_size, bool in_reliable, bool in_ordered, eRelayChannel in_channel);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->sendToAll(const uint8_t* in_data, int in_size, bool in_reliable, bool in_ordered, eRelayChannel in_channel);
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->sendToAll(const uint8_t* in_data, int in_size, bool in_reliable, bool in_ordered, eRelayChannel in_channel);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->sendToAll(const uint8_t* in_data, int in_size, bool in_reliable, bool in_ordered, eRelayChannel in_channel);
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

## Method Parameters
Parameter | Description
--------- | -----------
data | Byte array for the data to send
size | Size of data in bytes
reliable | Send this reliably or not
ordered | Received this ordered or not
channel | One of: (CHANNEL_HIGH_PRIORITY_1, CHANNEL_HIGH_PRIORITY_2, CHANNEL_NORMAL_PRIORITY, CHANNEL_LOW_PRIORITY)


