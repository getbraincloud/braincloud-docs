# SysDeleteEntities
## Overview
Deletes all applicable custom entities from the server based on the custom entity type, specified delete criteria and acrossAllUsers flag, bypassing ownership/ACL checks.

<PartialServop service_name="customEntity" operation_name="SYS_DELETE_ENTITIES" / >

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
var entityType = "athletes";
var deleteCriteria = {
    "entityId": { "$in":
        ["aaaa-bbbb-cccc-dddd", "ffff-gggg-hhhh-iiii", "jjjj-kkkk-llll-mmmm"]
    }
};
var acrossAllUsers = true;
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.sysDeleteEntities(entityType, deleteCriteria, acrossAllUsers);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
//ownerId(s) is needed to specify for the owned custom entities only. Or, setting acrossAllUsers to true
{
	"service": "customEntity",
	"operation": "SYS_DELETE_ENTITIES",
	"data": {
		"entityType": "athletes",
		"deleteCriteria": {
			"entityId": { "$in":
				["aaaa-bbbb-cccc-dddd", "ffff-gggg-hhhh-iiii", "jjjj-kkkk-llll-mmmm"]
			},
			"ownerId":"e7688d66-bf31-4d5c-a0f4-da97628531a3"//the ownerId is only needed for the owned custom entities. Or, set acrossAllUsers to true
		},
		"acrossAllUsers": false
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
  "data": {
    "deletedCount": 3
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The type of custom entity being deleted. 
deleteCriteria | The delete criteria to be applied. 
acrossAllUsers | Boolean indicating whether delete is to be applied to all users (true) or not (false), when custom entities are owned.


