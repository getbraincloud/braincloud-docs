# SysUpdateGroupEntityAcl
## Overview
Update the acl settings for a group entity, bypassing ownership/ACL checks.

<PartialServop service_name="group" operation_name="SYS_UPDATE_GROUP_ENTITY_ACL" / >

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
var groupId = "a-group-id";
var entityId = "a-group-entity-id";
var acl = {
  "member": 1,
  "other": 0
};
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.sysUpdateGroupEntityAcl(groupId, entityId, acl);
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
  "service": "group",
  "operation": "SYS_UPDATE_GROUP_ENTITY_ACL",
  "data":
  {
    "groupId": "a-group-id",
    "entityId": "a-group-entity-id",
    "acl": {
      "member": 1,
      "other": 0
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
    "createdAt": 1666994425075,
    "entityType": "myEntityType",
    "groupId": "2bf538d1-19ea-4e14-9862-f979215e09b7",
    "entityId": "e62dfe16-e6ec-4ebf-b044-2bb3626027e8",
    "acl": {
      "member": 1,
      "other": 0
    },
    "ownerId": null,
    "version": 2,
    "updatedAt": 1666994963444
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
groupId | The id of the group.
entityId | The id of the entity to update.
acl | Access control list for the group entity.


