# GetListCount
## Overview
Method gets a count of entities based on the where clause.

Fields available for use in the 'where' clause are:

 - entityType
 - entityIndexedId
 - createdAt
 - updatedAt
 - ownerId
 - timeToLive

 Along with all custom data (using `data.`).  For more information on the query syntax see [here](/api/appendix/mongodbwherequeries).

<PartialServop service_name="globalEntity" operation_name="GET_LIST_COUNT" / >

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
var where = {
  "entityType": "address"
};
var globalEntityProxy = bridge.getGlobalEntityServiceProxy();

var postResult = globalEntityProxy.getListCount(where);
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
	"service": "globalEntity",
	"operation": "GET_LIST_COUNT",
	"data": {
		"where": {
			"entityType": "address"
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
    "status":200,
    "data":
    {
        "entityListCount":5
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
where | A mongo style query string. 


