# SysIncrementDataSharded
## Overview
Increments the specified fields by the specified amount within custom entity data on the server, bypassing ownership/ACL permissions.

<PartialServop service_name="customEntity" operation_name="SYS_INCREMENT_DATA_SHARDED" / >

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
var shardKeyJson = {
  "ownerId": "profileIdOfEntityOwner"
};
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.sysIncrementDataSharded(entityType, entityId, fieldsJson, shardKeyJson);
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
    "timeToLive": null,
    "createdAt": 1659108750204,
    "data": {
      "goals": 6,
      "assists": 10
    },
    "entityType": "athletes3",
    "entityId": "d40569f4-c3b6-4d9e-89b2-ad5dbe4ba580",
    "acl": {
      "other": 2
    },
    "ownerId": "b015eabb-b0e2-42fb-9ad2-76aa2d7492f8",
    "version": 2,
    "expiresAt": null,
    "updatedAt": 1659986804804
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
shardKeyJson | The shard key field(s) and value(s), as JSON, applicable to the entity being updated. If entity is owned, ownerId must be specified in the shardKeyJson info; otherwise, shardKeyJson must indicate values for all fields in the applicable shard key index.


