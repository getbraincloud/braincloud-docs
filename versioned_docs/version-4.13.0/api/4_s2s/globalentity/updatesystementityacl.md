# UpdateSystemEntityAcl
## Overview
Method updates the acl of an exisiting system entity on the server.

<PartialServop service_name="globalEntity" operation_name="UPDATE_SYSTEM_ENTITY_ACL" / >

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
var acl = {
  "other": 1
};
var globalEntityProxy = bridge.getGlobalEntityServiceProxy();

var postResult = globalEntityProxy.updateSystemEntityAcl(entityId, version, acl);
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
	"operation": "UPDATE_SYSTEM_ENTITY_ACL",
	"data": {
		"entityId": "the-entity-id",
		"version": 2,
		"acl": {
			"other": 1
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
    "gameId": "22232",
    "entityIndexedId": null,
    "timeToLive": -1,
    "createdAt": 1499276273151,
    "entityType": "address",
    "entityId": "5ae3644f-5306-4b24-8134-29b0c1fdf713",
    "acl": {
     "other": 2
    },
    "ownerId": null,
    "version": 2,
    "expiresAt": 9223372036854776000,
    "updatedAt": 1499276316486
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
acl | The entity's Access Control List as an object. A null ACL implies default permissions which make the entity readable/writeable by only the owner. 


