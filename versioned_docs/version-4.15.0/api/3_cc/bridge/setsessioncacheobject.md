# SetSessionCacheObject
## Overview
Stores a JSON object temporarily within the current session. Note that the data will be lost when the session expires.

Field | Description
-------------- | -----------
key            | The storage-name for the object
cacheObject    | The JSON object to store

:::tip
*Apps are limited to 5 cached objects per session, with each restricted to 512 characters of stringified JSON data.*
:::

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

var addressJson = {};
addressJson.city = "Ottawa";
addressJson.province = "Ontario";

bridge.setSessionCacheObject( "address", addressJson );
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript

var addressJson = {};
addressJson.city = "Ottawa";
addressJson.province = "Ontario";

bridge.setSessionCacheObject( "address", addressJson );
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

