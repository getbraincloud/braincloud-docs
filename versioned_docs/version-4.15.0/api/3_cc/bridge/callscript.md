# CallScript
## Overview
This is a shortcut method for calling scripts within scripts.

It is equivalent to:

```
var proxy = bridge.getScriptServiceProxy();
var res = proxy.runScript("scriptName", scriptdata);
```

Field | Description
-------------- | -----------
scriptname | The name of the script to call
scriptdata | The json parameters to send to the script

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
// Construct the parameters
var scriptdata = {};
var scriptdata.score = 1000000;

// Call the script
var res = bridge.callScript("PostToAllLeaderboards", scriptdata);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
// Construct the parameters
var scriptdata = {};
var scriptdata.score = 1000000;

// Call the script
var res = bridge.callScript("PostToAllLeaderboards", scriptdata);
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

