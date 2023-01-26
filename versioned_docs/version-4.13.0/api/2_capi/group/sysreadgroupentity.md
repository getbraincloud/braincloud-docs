# SysReadGroupEntity
## Overview
Read an entity in the group, bypassing ownership/ACL checks.

<PartialServop service_name="group" operation_name="SYS_READ_GROUP_ENTITY" / >

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
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.sysReadGroupEntity(groupId, entityId);
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
	"operation": "SYS_READ_GROUP_ENTITY",
	"data": {
		"groupId": "a-group-id",
		"entityId": "a-group-entity-id"
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
        "gameId": "20595",
        "groupId": "fee55a37-5e86-43e8-942e-06bcbe1b701e",
        "entityId": "91cfece7-debb-4698-ba6b-cd2cb432458d",
        "ownerId": null,
        "entityType": "BLUE",
        "createdAt": 1462812680359,
        "updatedAt": 1462812680359,
        "version": 1,
        "data": {},
        "acl": {
            "member": 2,
            "other": 1
        },
        "_serverTime": 1637946319239
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
groupId | ID of the group
entityId | ID of the entity


