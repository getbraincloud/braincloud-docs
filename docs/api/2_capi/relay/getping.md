# GetPing
## Overview
Get the current ping for our user. Note: Pings are not distributed among other members. Your game will have to bundle it inside a packet and distribute to other peers.

<PartialServop service_name="globalGameStatistics" operation_name="READ_SUBSET" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
<%= data.branding.codePrefix %>.RelayService.GetPing();
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->getPing();
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->getPing();
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->getPing();
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->getPing();
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

<details>
<summary>JSON Response</summary>

```cfscript
// N/A
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
connectionType | The connection type. INVALID, WEBSOCKET, TCP, UDP, MAX
options | Options sent in the connection


