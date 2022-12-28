# GetScheduledCloudScripts
## Overview
Retrieves scripts scheduled to run up to and including the specified start time (UTC in ms).

<PartialServop service_name="script" operation_name="GET_SCHEDULED_CLOUD_SCRIPTS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var startDateUTC = 1512750683157;
var scriptProxy = bridge.getScriptServiceProxy();

var postResult = scriptProxy.getScheduledCloudScripts(startDateUTC);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "script",
	"operation": "GET_SCHEDULED_CLOUD_SCRIPTS",
	"data": {
		"startDateUTC": "[[#ts+60000]]"
	}
}
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

## Method Parameters
Parameter | Description
--------- | -----------
startDateUTC | If scheduling at a set time. The start date in UTC in Unix millis timestamp format. 


