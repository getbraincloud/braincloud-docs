# SysCreateGroup
## Overview
Create a group.

The group ACL contains two elements defining access to the groups data for non-members (other) and members. Access is defined as:

- None = 0,
- ReadOnly = 1
- ReadWrite = 2

<PartialServop service_name="group" operation_name="SYS_CREATE_GROUP" / >

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
var name = "myGroupName";
var groupType = "myGroupType";
var isOpenGroup = false;
var acl = {
    "member": 2,
    "other": 0
}
var ownerId = "a-profile-id",
var ownerAttributes = {};
var defaultMemberAttributes = {};
var jsonData = {};
var summaryData = {};
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.sysCreateGroup(name, groupType, isOpenGroup, acl, ownerId, ownerAttributes, defaultMemberAttributes, jsonData, summaryData);
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
	"operation": "SYS_CREATE_GROUP",
	"data": {
		"name": "myGroupName",
		"groupType": "myGroupType",
		"isOpenGroup": true,
		"acl": {
			"member": 2,
			"other": 0
        },
        "ownerId": "a-profile-id",
		"ownerAttributes": {},
		"defaultMemberAttributes": {},
        "jsonData": {},
        "summaryData": {}
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
    "gameId": "23782",
    "groupId": "1c532e52-6a6c-4a34-bcad-a133a0448480",
    "ownerId": "7f06ee4d-bc40-48ea-aa27-d3b73059491b",
    "name": "groupName",
    "groupType": "group1",
    "createdAt": 1602706932034,
    "updatedAt": 1602706932034,
    "members": {
      "7f06ee4d-bc40-48ea-aa27-d3b73059491b": {
        "role": "OWNER",
        "attributes": {}
      }
    },
    "pendingMembers": {},
    "version": 1,
    "summaryData": {},
    "isOpenGroup": true,
    "defaultMemberAttributes": {},
    "memberCount": 1,
    "invitedPendingMemberCount": 0,
    "requestingPendingMemberCount": 0,
    "acl": {
      "member": 2,
      "other": 0
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
name | Name of the group
groupType | Name of the type of group
isOpenGroup | true if group is open; false if closed
acl | The group's access control list. A null ACL implies default
ownerId | Profile ID of user to be owner of group
ownerAttributes | Attributes for the group owner (current user)
defaultMemberAttributes | Default attributes for group members
jsonData | Custom application data
summaryData | Public summary data for the group that is viewable even by non-members. Optional.


