# SysIncrementData
## Overview
:::tip
This method is not sharding safe - and thus is not recommended for custom entities that you may want to shard for greater performance and scalability in the future. 
Consider using <strong>SysIncrementDataSharded()</strong> version of this method instead.
:::

Increments the specified fields by the specified amount within custom entity data on the server, bypassing ownership/ACL permissions checks.

<PartialServop service_name="customEntity" operation_name="SYS_INCREMENT_DATA" / >

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
var fieldsJson = { 
    "goals": 3, 
    "assists": 5 
};
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.sysIncrementData(entityType, entityId, fieldsJson);
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
	"operation": "SYS_INCREMENT_DATA",
	"data": {
		"entityType": "athletes",
		"entityId": "aaaa-bbbb-cccc-dddd",
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
  "data": {
    "entityId": "aaaa-bbbb-cccc-dddd",
    "version": 2,
    "acl": {
      "other": 2
    },
    "ownerId": null,
    "expiresAt": null,
    "timeToLive": null,
    "createdAt": 1586047449214,
    "updatedAt": 1591290232477,
    "data": {
        "goals": 3, 
        "assists": 5 
    },
    "entityType": "athletes"
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The type of custom entity being updated. 
entityId | The id of custom entity being updated. 
fieldsJson | Specific fields, as JSON, within entity's custom data, with respective increment amount.


