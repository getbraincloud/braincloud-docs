# SysUpdateGroupAcl

Set a group's access conditions, bypassing ownership/ACL checks.

<PartialServop service_name="group" operation_name="SYS_UPDATE_GROUP_ACL" />

## Method Parameters

| Parameter | Description                                                 |
| --------- | ----------------------------------------------------------- |
| groupId   | ID of the group                                             |
| acl       | The group's access control list. A null ACL implies default |

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
<TabItem value="dart" label="Dart">
```

```dart
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var groupId = "a-group-id";
var acl = {
    "member": 2,
    "other": 0
};
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.sysUpdateGroupAcl(groupId, acl);
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
	"operation": "SYS_UPDATE_GROUP_ACL",
	"data": {
		"groupId": "a-group-id",
		"acl": {
			"member": 2,
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
        "gameId": "13229",
        "groupId": "d373ff92-3327-4176-85ed-3565a09c43fa",
        "ownerId": "8bd564a7-3f91-4a98-a4b3-43cd7d266133",
        "name": "agroup",
        "groupType": "group11",
        "createdAt": 1605155742940,
        "updatedAt": 1737131845513,
        "members": {
            "8bd564a7-3f91-4a98-a4b3-43cd7d266133": {
                "role": "OWNER",
                "attributes": {}
            },
            "a50a9aae-65fc-4171-b3f9-c0054b7e2d6b": {
                "role": "MEMBER",
                "attributes": {}
            },
            "07ba7ab2-3505-4342-b91f-6500fa8f5585": {
                "role": "MEMBER",
                "attributes": {}
            }
        },
        "pendingMembers": {},
        "version": 8,
        "summaryData": {},
        "isOpenGroup": true,
        "defaultMemberAttributes": {},
        "memberCount": 3,
        "invitedPendingMemberCount": 0,
        "requestingPendingMemberCount": 0,
        "acl": {
            "member": 1,
            "other": 2
        },
        "groupFileTree": {
            "tree": [
                {
                    "treeId": "d4b65818-610b-4cf4-acf9-fa1f975234b0",
                    "children": [
                        {
                            "treeId": "401edb1c-bf82-4650-995d-c86be3eb78a5",
                            "children": null,
                            "name": "fname",
                            "acl": {
                                "member": 2,
                                "other": 0
                            },
                            "type": "Folder",
                            "ownerId": null,
                            "desc": "desc"
                        }
                    ],
                    "name": "test",
                    "acl": {
                        "member": 2,
                        "other": 0
                    },
                    "type": "Folder",
                    "ownerId": null,
                    "desc": ""
                }
            ],
            "acl": {
                "member": 2,
                "other": 0
            },
            "version": 2
        }
    },
    "status": 200
}
```

</details>
