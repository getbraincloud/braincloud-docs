# Sleep
## Overview
:::tip
Note that the max time you can sleep for is the timeout value of the script it is called from. 
If you ask to sleep for longer than that, it automatically caps the sleep time to the script timeout value.
:::

Wait for a current thread for a specified time. It makes the cloud code script sleep for the requested amount of time.

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
var waitingTime = 1000;
bridge.sleep(waitingTime);

```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var waitingTime = 1000;
bridge.sleep(waitingTime);

```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

## Method Parameters
Parameter | Description
--------- | -----------
waitingTime | Time in millis.


