# SysUpdateEntityFieldsSharded
## Overview
For sharded custom collection entities. Sets the specified fields within custom entity data on the server, bypassing ACL permissions checks.

<PartialServop service_name="customEntity" operation_name="SYS_UPDATE_ENTITY_FIELDS_SHARDED" / >

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
  "stats.gamesPlayedTotal": 2,
  "stats.goalsTotal": 2,
  "games.played": [
    {
      "date": "2022-01-21",
      "goals": 1,
      "assists": 1,
      "penalties": 0
    },
    {
      "date": "2022-01-10",
      "goals": 1,
      "assists": 0,
      "penalties": 1
    }
  ]
};
var shardKeyJson = {
  "ownerId": "profileIdOfEntityOwner"
};
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.sysUpdateEntityFieldsSharded(entityType, entityId, version, fieldsJson, shardKeyJson);
if (postResult.status == 200) {
  // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
// Cloud Code only. To view example, switch to the Cloud Code tab
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
    "createdAt": 1643144091464,
    "entityType": "athletes",
    "entityId": "bc7ea530-c6bd-4a27-bb5d-ced287991c87",
    "acl": {
      "other": 2
    },
    "ownerId": "b85f195e-b65f-4220-b84f-260e42b01c5b",
    "version": 3,
    "expiresAt": null,
    "updatedAt": 1643213631138
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
version | Version of the custom entity being updated.
fieldsJson | Specific fields, as JSON, to set within entity's custom data.
shardKeyJson | The shard key field(s) and value(s), as JSON, applicable to the entity being updated.


