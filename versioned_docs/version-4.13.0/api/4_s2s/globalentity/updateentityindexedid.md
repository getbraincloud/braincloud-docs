# UpdateEntityIndexedId
## Overview
Updates an existing entity's IndexedId on the server.

<PartialServop service_name="globalEntity" operation_name="UPDATE_INDEXED_ID" / >

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
var entityId = "the-entity-id";
var version = 2;
var entityIndexedId = "entityId1";
var globalEntityProxy = bridge.getGlobalEntityServiceProxy();

var postResult = globalEntityProxy.updateEntityIndexedId(entityId, version, entityIndexedId);
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
	"operation": "UPDATE_INDEXED_ID",
	"data": {
		"entityId": "the-entity-id",
		"version": 2,
		"entityIndexedId": "entityId1"
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
    "gameId": "123456",
    "entityId": "218d19d1-cda9-48a7-a918-a796281219f1",
    "ownerId": "77ce8889-20b7-4d01-b248-e0beb747f1b4",
    "entityType": "address",
    "entityIndexedId": "entityId1",
    "version": 4,
    "acl": {
      "other": 1
    },
    "expiresAt": 9223372036854776000,
    "timeToLive": -1,
    "createdAt": 1557939144108,
    "updatedAt": 1557939241957
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityId | The id of the entity to update. 
version | The version of the entity to update. Use -1 to indicate the newest version. 
entityIndexedId | InxdexedId of the entity to update. 


