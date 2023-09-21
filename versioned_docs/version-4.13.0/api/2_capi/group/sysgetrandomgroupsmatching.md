# SysGetRandomGroupsMatching
## Overview
Gets a list of up to maxReturn randomly selected groups from the server based on the where condition, bypassing ownership/ACL checks.

<PartialServop service_name="group" operation_name="SYS_GET_RANDOM_GROUPS_MATCHING" / >

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
var where = {
  "groupType": "BLUE"
};
var maxReturn = 20;
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.sysGetRandomGroupsMatching(where, maxReturn);
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
  "operation": "SYS_GET_RANDOM_GROUPS_MATCHING",
  "data":
  {
    "where": {
      "groupType": "BLUE"
    },
    "maxReturn": 20
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
    "count": 1,
    "groups": [
      {
        "gameId": "23782",
        "groupId": "2bf538d1-19ea-4e14-9862-f979215e09b7",
        "ownerId": "7f06ee4d-bc40-48ea-aa27-d3b73059491b",
        "name": "gname1",
        "groupType": "group1",
        "createdAt": 1594906094270,
        "updatedAt": 1594906094270,
        "members": {
          "10b6d6fa-0aa6-43b0-a7b3-48aff2d13312": {
            "role": "MEMBER",
            "attributes": {}
          },
          "7f06ee4d-bc40-48ea-aa27-d3b73059491b": {
            "role": "OWNER",
            "attributes": {}
          }
        },
        "pendingMembers": {
          "10b6d6fa-0aa6-43b0-a7b3-48aff2d13312": {
            "role": "MEMBER",
            "attributes": {},
            "pendingReason": "INVITED_TO_JOIN"
          }
        },
        "version": 1,
        "data": {},
        "summaryData": {},
        "isOpenGroup": true,
        "defaultMemberAttributes": {},
        "memberCount": 2,
        "invitedPendingMemberCount": 1,
        "requestingPendingMemberCount": 0,
        "acl": {
          "member": 2,
          "other": 2
        }
      }
    ]
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
where | A mongo style query string.
maxReturn | The max count of groups to randomly select.


