# GetGlobalProperty
## Overview
This is basically a shortcut method for retrieving a specified global property which is predefined on <%= data.branding.productName %> portal.
It is equivalent to:

var proxy = bridge.getGlobalAppServiceProxy();
var props = proxy.readProperties();
var prop = props['a-name-of-global-property']

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var propname = "a-name-of-global-property"
var prop = bridge.getGlobalProperty(propname);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var propname = "a-name-of-global-property"
var prop = bridge.getGlobalProperty(propname);
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

## Method Parameters
Parameter | Description
--------- | -----------
propname | The name of a global property to retrive


