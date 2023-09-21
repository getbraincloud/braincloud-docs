# SysUpdateGroupSummaryData
## Overview
Update a group's summary data, bypassing ownership/ACL checks.

<PartialServop service_name="group" operation_name="SYS_UPDATE_GROUP_SUMMARY_DATA" / >

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
var version = 3;
var summaryData = { "faction": "warlords" };
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.sysUpdateGroupSummaryData(groupId, version, summaryData);
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
	"operation": "SYS_UPDATE_GROUP_SUMMARY_DATA",
	"data": {
		"groupId": "a-group-id",
		"version": 3,
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
    "gameId": "12345",
    "groupId": "b7b590e0-0e27-47ef-8bf5-03a3b4e34475",
    "ownerId": "77ce8889-20b7-4d01-b248-e0beb747f1b4",
    "name": "myGroupName",
    "groupType": "newGroupType",
    "createdAt": 1561472696504,
    "updatedAt": 1561472926006,
    "members": {
      "77ce8889-20b7-4d01-b248-e0beb747f1b4": {
        "role": "OWNER",
        "attributes": {}
      }
    },
    "pendingMembers": {},
    "version": 4,
    "summaryData": {
      "new": "data"
    },
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
groupId | ID of the group 
version | Version to verify 
summaryData | Public summary data for the group that is viewable even by non-members 


