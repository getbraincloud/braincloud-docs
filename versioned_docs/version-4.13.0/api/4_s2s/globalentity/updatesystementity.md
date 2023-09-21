# UpdateSystemEntity
## Overview
Method updates the data of an exisiting system entity on the server.

<PartialServop service_name="globalEntity" operation_name="UPDATE_SYSTEM_ENTITY" / >

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
var version = 1;
var data = {
  "street": "1309 Carling"
};
var globalEntityProxy = bridge.getGlobalEntityServiceProxy();

var postResult = globalEntityProxy.updateSystemEntity(entityId, version, data);
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
	"operation": "UPDATE_SYSTEM_ENTITY",
	"data": {
		"entityId": "the-entity-id",
		"version": 1,
		"data": {
			"street": "1309 Carling"
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
 "data": {
  "response": {
   "data": {
    "gameId": "22198",
    "entityIndexedId": null,
    "timeToLive": 0,
    "createdAt": 1498850247510,
    "entityType": "address",
    "entityId": "4b2f1cba-cc52-4d3c-8663-ff540ee48a38",
    "acl": {
     "other": 2
    },
    "ownerId": null,
    "version": 2,
    "expiresAt": 9223372036854776000,
    "updatedAt": 1498850536733
   },
   "status": 200
  },
  "success": true
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
data | The entity's data object. 


