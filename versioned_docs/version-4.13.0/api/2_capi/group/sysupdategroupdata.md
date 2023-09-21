# SysUpdateGroupData
## Overview
Update a group's data, bypassing ownership/ACL checks.

This method is affected by versioning. See the [versioning documentation](/api/appendix/version) for more information.


:::tip
There is a special index on a field called "indexedId" in the group data for effiicent group searching.
:::

<PartialServop service_name="group" operation_name="SYS_UPDATE_GROUP_DATA" / >

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
var jsonData = {
	"indexedId": "a-group-index"
};
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.sysUpdateGroupData(groupId, version, jsonData);
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
	"operation": "SYS_UPDATE_GROUP_DATA",
	"data": {
		"groupId": "a-group-id",
		"version": 3,
		"data": {
			"indexedId": "a-group-index"
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
    "gameId": "13229",
    "groupId": "d373ff92-3327-4176-85ed-3565a09c43fa",
    "ownerId": "ec52d988-3515-4032-a8fd-acc48e985792",
    "name": "agroup",
    "groupType": "group11",
    "createdAt": 1605155742940,
    "updatedAt": 1671123804120,
    "members": {
      "79ab573d-459e-42ce-ac65-c2fe8e81a3ae": {
        "role": "MEMBER",
        "attributes": {
          "groupatt": "groupattvalue"
        }
      },
      "32902825-37a1-43e2-89b7-47e849b1ec4b": {
        "role": "MEMBER",
        "attributes": {}
      },
      "ec52d988-3515-4032-a8fd-acc48e985792": {
        "role": "OWNER",
        "attributes": {}
      },
      "cd0356bd-ab7f-4fd7-bc58-9422cd3a2a59": {
        "role": "MEMBER",
        "attributes": {}
      },
      "8f9f8269-ad3e-4e3d-bc2a-3dd31afb0b17": {
        "role": "MEMBER",
        "attributes": {}
      },
      "8bd564a7-3f91-4a98-a4b3-43cd7d266133": {
        "role": "MEMBER",
        "attributes": {}
      },
      "336f36be-da11-4457-bda6-ccecd47b63e3": {
        "role": "MEMBER",
        "attributes": {}
      },
      "1e8c17bf-ede9-4976-b147-b44bd2da6817": {
        "role": "MEMBER",
        "attributes": {}
      }
    },
    "pendingMembers": {},
    "version": 5,
    "summaryData": {},
    "isOpenGroup": true,
    "defaultMemberAttributes": {},
    "memberCount": 8,
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
jsonData | Data to apply


