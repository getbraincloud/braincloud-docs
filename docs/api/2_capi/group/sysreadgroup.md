# SysReadGroup
## Overview
Retrieve information about the group, bypassing ownership/ACL checks.

<PartialServop service_name="group" operation_name="SYS_READ_GROUP" / >

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
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.sysReadGroup(groupId);
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
	"operation": "SYS_READ_GROUP",
	"data": {
		"groupId": "a-group-id"
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
        "gameId": "123456",
        "groupId": "69191b48-0cb1-4538-9758-e2f5ef4c524b",
        "ownerId": "b67b2d73-1e8c-42e9-9be5-9c1879a48555",
        "name": "test22",
        "groupType": "test",
        "createdAt": 1462462308991,
        "updatedAt": 1462462308991,
        "members": {
            "b67b2d73-1e8c-42e9-9be5-9c1879a48555": {
                "role": "OWNER",
                "attributes": {}
            }
        },
        "pendingMembers": {},
        "version": 1,
        "data": {},
        "isOpenGroup": false,
        "defaultMemberAttributes": {},
        "memberCount": 1,
        "invitedPendingMemberCount": 0,
        "requestingPendingMemberCount": 0,
        "acl": {
            "other": 1,
            "member": 1
        }
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
groupId | ID of the group


