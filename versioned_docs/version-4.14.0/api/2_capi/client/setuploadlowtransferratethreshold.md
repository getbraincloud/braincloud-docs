# SetUploadLowTransferRateThreshold
## Overview
Sets the low transfer rate threshold of an upload in bytes/sec.

If the transfer rate dips below the given threshold longer than the specified timeout, the transfer will fail.

By default this is set to 50 bytes/sec.

:::tip
This timeout method does not work on Unity mobile platforms.
:::

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
int minTransferRate = 1500;
<%= data.branding.codePrefix %>.SetUploadLowTransferRateThreshold(minTransferRate);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
int minTransferRate = 1500;
<%= data.branding.codePrefix %>->setUploadLowTransferRateThreshold(minTransferRate);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
int minTransferRate = 1500;
[<%= data.branding.codePrefix %> setUploadLowTransferRateThreshold:minTransferRate];
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
<TabItem value="cfs" label="Cloud Code">
```

```javascript
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
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
bytesPerSec | The low transfer rate threshold in bytes/sec


