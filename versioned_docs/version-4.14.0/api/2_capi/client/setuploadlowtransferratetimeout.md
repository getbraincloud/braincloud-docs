# SetUploadLowTransferRateTimeout
## Overview
Sets the timeout in seconds of a low speed upload (ie transfer rate which is underneath the low transfer rate threshold).

By default this is set to 120 seconds. Setting this value to 0 will turn off the timeout.

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
int timeoutSecs = 60;
<%= data.branding.codePrefix %>.SetUploadLowTransferRateTimeout(timeoutSecs);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
int timeoutSecs = 60;
<%= data.branding.codePrefix %>->setUploadLowTransferRateTimeout(timeoutSecs);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
int timeoutSecs = 60;
[<%= data.branding.codePrefix %> setUploadLowTransferRateTimeout:timeoutSecs];
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
timeoutSecs | The timeout in seconds


