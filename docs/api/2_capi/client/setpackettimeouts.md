# SetPacketTimeouts
## Overview
Sets the packet timeouts using a list of integers that represent timeout values in seconds for each packet retry. The first item in the list represents the timeout for the first packet attempt, the second for the second packet attempt, and so on.

The number of entries in this array determines how many packet retries will occur. By default, the packet timeout array is {15, 20, 35, 50}

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
var packetTimeouts = new List<int> { 15, 20, 35, 50 };
<%= data.branding.codePrefix %>.SetPacketTimeouts(packetTimeouts);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
std::vector<int> packetTimeouts;
packetTimeouts.push_back(15);
packetTimeouts.push_back(20);
packetTimeouts.push_back(35);
packetTimeouts.push_back(50);

<%= data.branding.codePrefix %>->setPacketTimeouts(packetTimeouts);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSArray* packetTimeouts = @[@15, @20, @35, @50];
[<%= data.branding.codePrefix %> setPacketTimeouts:packetTimeouts];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
ArrayList<Integer> packetTimeouts = new ArrayList<Integer>(
    Arrays.asList(15, 20, 35, 50));
<%= data.branding.codePrefix %>.setPacketTimeouts(packetTimeouts);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.brainCloudManager._packetTimeouts = [15,20,35,50];
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```javascript
<%= data.branding.codePrefix %>.brainCloudManager._packetTimeouts = [15,20,35,50];
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
<%= data.branding.codePrefix %>.brainCloudManager._packetTimeouts = [15,20,35,50];
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

## Method Parameters
Parameter | Description
--------- | -----------
intervalInSeconds | The time between heartbeats in milliseconds


