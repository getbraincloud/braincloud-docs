# SetOldStyleStatusMessageErrorCallback
## Overview
Sets the error callback to return the status message instead of the error JSON string. This flag is used to conform to pre-2.17 client
behavior.

:::caution
This flag is only intended for backward compatibility and is NOT recommended to be enabled otherwise.
:::

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
<%= data.branding.codePrefix %>.SetOldStyleStatusMessageErrorCallback(false);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->setOldStyleStatusMessageErrorCallback(false);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
[<%= data.branding.codePrefix %> setOldStyleStatusMessageErrorCallback:false];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
<%= data.branding.codePrefix %>.setOldStyleStatusMessageErrorCallback(false);
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
enabled | If set to true, enable legacy error message format


