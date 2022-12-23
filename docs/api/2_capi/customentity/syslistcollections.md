# SysListCollections
## Overview
Lists the custom entity collections configured for the application.

<PartialServop service_name="customEntity" operation_name="SYS_LIST_COLLECTIONS" / >

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
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.sysListCollections();
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
	"operation": "SYS_LIST_COLLECTIONS",
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

```r
{
  "service": "customEntity",
  "operation": "SYS_INCREMENT_DATA_SHARDED",
  "data":
  {
    "entityType": "athletes",
    "entityId": "aaaa-bbbb-cccc-dddd",
    "fieldsJson": {
      "goals": 3,
      "assists": 5
    },
    "shardKeyJson": {
      "ownerId": "profileIdOfEntityOwner"
    }
  }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The type of custom entity being updated.
entityId | The id of custom entity being updated.
fieldsJson | Specific fields, as JSON, within entity's custom data, with respective increment amount.
shardKeyJson | The shard key field(s) and value(s), as JSON, applicable to the entity being updated. If entity is owned, ownerId must be specified in the shardKeyJson info; otherwise, shardKeyJson must indicate values for all fields in the applicable shard key index.


