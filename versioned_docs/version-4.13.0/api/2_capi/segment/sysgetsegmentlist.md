# SysGetSegmentList
## Overview
Returns a list of all segments with basic meta-data. i.e. does not include the criteria details.

<PartialServop service_name="segment" operation_name="SYS_GET_SEGMENT_LIST" / >

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
var segmentProxy = bridge.getSegmentServiceProxy();

var postResult = segmentProxy.sysGetSegmentList();
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
	"service": "segment",
	"operation": "SYS_GET_SEGMENT_LIST",
	"data": {}
}
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

<details>
<summary>JSON Response</summary>

```json
{
	"data": {
		"segments": [
		  {
			"segmentId": 1,
			"name": "segmentname",
			"description": "a/b test id less than 30",
			"testersOnly": false,
			"createdAt": 1591891097875,
			"updatedAt": 1591891108642,
			"version": 2
		  },
		  {
			"segmentId": 2,
			"name": "another segment",
			"description": "xp level great than 2",
			"testersOnly": false,
			"createdAt": 1591891221983,
			"updatedAt": 1591891227208,
			"version": 2
		  }
		]
	  },
	  "status": 200
}
```
</details>

