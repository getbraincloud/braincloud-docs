# CreateSystemEntityWithIndexedId

Create a new system entity on the server with an indexed id.

<PartialServop service_name="globalEntity" operation_name="CREATE_SYSTEM_ENTITY_WITH_INDEXED_ID" />

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The entity type as defined by the user 
entityIndexedId | Id used to index the entity
timeToLive | Sets expiry time for entity in milliseconds if > 0 
acl | The entity's [Access Control List](/api/appendix/acl) as object. A null ACL implies default permissions which make the entity readable/writeable by only the user. 
data | The entity's data object 

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
<TabItem value="dart" label="Dart">
```

```dart
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var entityType = "address";
var entityIndexedId = "entityId1";
var timeToLive = null;
var data = {
  "street": "1309 Carling"
};
var acl = {
  "other": 1
};
var globalEntityProxy = bridge.getGlobalEntityServiceProxy();

var postResult = globalEntityProxy.createSystemEntityWithIndexedId(entityType, entityIndexedId, timeToLive, acl, data);
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
	"operation": "CREATE_SYSTEM_ENTITY_WITH_INDEXED_ID",
	"data": {
		"entityType": "address",
		"entityIndexedId": "entityId1",
		"timeToLive": -1,
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
   "data":{  
      "gameId":"12270",
      "entityId":"b2a2bbdf-084b-41c8-802a-05de9c37b20c",
      "ownerId":null,
      "entityType":"address",
      "entityIndexedId":"entityId1",
      "version":1,
      "acl":{  
         "other":1
      },
      "expiresAt":9223372036854776000,
      "timeToLive":-1,
      "createdAt":1550852309251,
      "updatedAt":1550852309251
   },
   "status":200
}
```
</details>

