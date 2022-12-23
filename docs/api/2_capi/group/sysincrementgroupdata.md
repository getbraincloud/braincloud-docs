# SysIncrementGroupData
## Overview
Partial increment of group data field items. Partial set of items incremented as specified. Bypasses ownership/ACL checks.

<PartialServop service_name="group" operation_name="SYS_INCREMENT_GROUP_DATA" / >

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
var groupId = "a-group-id";
var jsonData = {
    "field1": -1.5,
    "field2": {
        "field2-1": 6,
        "field2-new": 63.6
    },
    "field3-new": 3
};
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.sysIncrementGroupData(groupId, jsonData);
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
	"service": "group",
	"operation": "SYS_INCREMENT_GROUP_DATA",
	"data": {
		"groupId": "a-group-id",
		"data": {
			"field1": -1.5,
			"field2": {
				"field2-1": 6,
				"field2-new": 63.6
			},
			"field3-new": 3
		}
	}
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
    "status": 200,
    "data": null
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
groupId | ID of the group
jsonData | Partial data map with incremental values


