# DeleteSystemEntity
## Overview
Method deletes the given system entity on the server.

System entities are entities that can only be deleted via cloudCode, or the <%= data.branding.productName %> dashboard.
Use them for storing data that the users should not be able to delete.

This method is affected by versioning. See the [versioning documentation](/api/appendix/version) for more information.

<PartialServop service_name="entity" operation_name="DELETE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
//cloud code only
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
//cloud code only
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
//cloud code only
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
//cloud code only
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
//cloud code only
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var entityId = "a-entity-id";
var version = 2;
var globalEntityProxy = bridge.getGlobalEntityServiceProxy();

var postResult = globalEntityProxy.deleteSystemEntity(entityId, version);
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
	"service": "entity",
	"operation": "DELETE",
	"data": {
		"entityId": "someEntityId",
		"version": -1
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
    "data":null
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40344 | ENTITY_VERSION_MISMATCH | The version parameter does not match the current version on the server

</details>


## Method Parameters
Parameter | Description
--------- | -----------
entityId | The id of the entity to update
version | The entity's data object. -1 indicates current entity version
#
