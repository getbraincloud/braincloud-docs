# SysUpdateEntityFields
## Overview
:::tip
This method is not sharding safe - and thus is not recommended for custom entities that you may want to shard for greater performance and scalability in the future. 
Consider using <strong>SysUpdateEntityFieldsSharded()</strong> version of this method instead.
:::

Used to update only a specific set of fields with the custom `data` section of the custom entity object. Ignores ownership/ACL checks.



The outer "data" portion of the field name is implied, and should not be included. 

`fieldsJson` example:

```
{
  "age": 30,
  "homeAddress": {
    "street": Breakwater Street",
    "number": "11",
    "city": "Souris",
    "state": "PEI",
    "country": "CA",
    "phone": "555-555-1234"
  },
  "workAddress.phone": "555-555-5555"
}
```

For the above example: 

* the `data.age` field will be set to 30
* the `data.homeAddress` field will be set to the full JSON address provided
* just the `phone` sub-field of the `data.workAddress` object will be set to "555-555-5555"

<PartialServop service_name="customEntity" operation_name="SYS_UPDATE_ENTITY_FIELDS" / >

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
var entityId = "aaaa-bbbb-cccc-dddd";
var version = 1;
var fieldsJson = {
  "goals": 3,
  "assists": 5
};
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.sysUpdateEntityFields(entityType, entityId, version, fieldsJson);
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
	"operation": "SYS_UPDATE_ENTITY_FIELDS",
	"data": {
		"entityType": "athletes",
		"entityId": "aaaa-bbbb-cccc-dddd",
		"version": 1,
		"fieldsJson": {
			"goals": 3,
			"assists": 5
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
  "status": 200,
  "data": {
    "entityId": "1497cc7e-66cb-4682-xxxx-c755523369a8",
    "version": 2,
    "acl": {
      "other": 1
    },
    "ownerId": null,
    "expiresAt": null,
    "timeToLive": null,
    "createdAt": 1573540122600,
    "updatedAt": 1573540445332
  }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The type of custom entity being updated. 
entityId | The id of custom entity being updated. 
version | Version of the custom entity being updated. 
fieldsJson | Specific fields, as JSON, to set within entity's custom data. 


