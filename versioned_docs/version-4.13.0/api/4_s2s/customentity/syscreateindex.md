# SysCreateIndex
## Overview
Creates a new index on a custom entity collection.

<PartialServop service_name="customEntity" operation_name="SYS_CREATE_INDEX" / >

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
var entityType = "athletes";
var indexName = "penalties_1";
var indexKeysJson = {
  "data.penalties": 1
};
var indexOptsJson = {
  "sparse": true
};
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.sysCreateIndex(entityType, indexName, indexKeysJson, indexOptsJson);
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
	"service": "customEntity",
	"operation": "SYS_CREATE_INDEX",
	"data": {
		"entityType": "athletes",
		"indexName": "penalties_1",
		"indexKeysJson": {
			"data.penalties": 1
		},
		"indexOptsJson": {
			"sparse": true
		}
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
entityType | The entity type identifying the applicable custom entity collection. 
indexName | The name to assign to the new index. 
indexKeysJson | The field index keys, as JSON object. 
indexOptsJson | The index options, as JSON object. 


