# CreateSystemEntity
## Overview
Method creates a new system entity on the server.

<PartialServop service_name="globalEntity" operation_name="CREATE_SYSTEM_ENTITY" / >

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
var entityType = "address";
var timeToLive = -1;
var jsonEntityAcl = {
    "other": 1
};
var jsonEntityData = {
    "street": "1309 Carling"
};
var globalEntityProxy = bridge.getGlobalEntityServiceProxy();

var postResult = globalEntityProxy.createSystemEntity(entityType, timeToLive, jsonEntityAcl, jsonEntityData);
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
	"operation": "CREATE_SYSTEM_ENTITY",
	"data": {
		"entityType": "address",
		"timeToLive": null,
		"acl": {
			"other": 1
		},
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
    "version": 1,
    "expiresAt": 9223372036854776000,
    "updatedAt": 1499276273151
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
entityType | The entity type as defined by the user
timeToLive | Sets expiry time for entity in milliseconds if > 0
jsonEntityAcl | The entity's [Access Control List](/api/appendix/acl) as object. A null ACL implies default permissions which make the entity readable/writeable by only the user.
jsonEntityData | The entity's data object


