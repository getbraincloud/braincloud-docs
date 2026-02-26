# SysDeleteFolder

Delete a folder.

<PartialServop service_name="groupFile" operation_name="SYS_DELETE_FOLDER" />

## Method Parameters
Parameter | Description
--------- | -----------
groupId | The id of the group.
treeId | The id of the folder to delete.
folderPath | The folder path.
treeVersion | The target version of the folder tree.
force | Whether to delete non-empty folders, sub-folders and their files.

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
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var groupId = "dfsfsffsd";
var treeId = "xxxx";
var folderPath = "fname";
var treeVersion = 1;
var force = true;
var groupFileProxy = bridge.getGroupFileServiceProxy();

var postResult = groupFileProxy.sysDeleteFolder(groupId, treeId, folderPath, treeVersion, force);
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
  "service": "groupFile",
  "operation": "SYS_DELETE_FOLDER",
  "data":
  {
    "groupId": "dfsfsffsd",
    "treeId": "xxxx",
    "folderPath": "fname",
    "treeVersion": 1,
    "force": true
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
        "deletedFiles": [
            {
                "treeId": "fb3431cd-6e2f-47f1-8100-8941abf6bb4f",
                "fileName": "glogcopy.json",
                "version": 2,
                "fileId": "6d938c22-3b8c-4b99-a913-2edafed71a83"
            },
            {
                "treeId": "fb3431cd-6e2f-47f1-8100-8941abf6bb4f",
                "fileName": "glogcopy1.json",
                "version": 1,
                "fileId": "4fde0d32-c866-473b-bee1-a4565f8d289b"
            }
        ],
        "groupId": "2bf538d1-19ea-4e14-9862-f979215e09b7",
        "groupFileTree": {
            "treeVersion": 6,
            "tree": [
                {
                    "treeId": "59533e64-abc0-4f04-976b-8f395073ea2e",
                    "children": [
                        {
                            "treeId": "d9e937cc-750f-4414-962c-838f1af3f34a",
                            "children": null,
                            "name": "gpath",
                            "acl": {
                                "member": 2,
                                "other": 0
                            },
                            "type": "Folder",
                            "ownerId": null,
                            "desc": "desc"
                        }
                    ],
                    "name": "gpath",
                    "acl": {
                        "member": 2,
                        "other": 0
                    },
                    "type": "Folder",
                    "ownerId": null,
                    "desc": ""
                },
                {
                    "treeId": "40479c72-b46b-4c05-902c-239ada116acd",
                    "children": null,
                    "name": "gpathcopy",
                    "acl": {
                        "member": 2,
                        "other": 0
                    },
                    "type": "Folder",
                    "ownerId": null,
                    "desc": ""
                },
                {
                    "treeId": "97446e50-4e02-49f6-8c86-807137620249",
                    "children": [
                        {
                            "treeId": "625ab492-fad9-4aa6-b174-50ac4344de81",
                            "children": null,
                            "name": "subfoldername",
                            "acl": {
                                "member": 2,
                                "other": 0
                            },
                            "type": "Folder",
                            "ownerId": null,
                            "desc": "subfolderdesc"
                        }
                    ],
                    "name": "foldername",
                    "acl": {
                        "member": 2,
                        "other": 0
                    },
                    "type": "Folder",
                    "ownerId": null,
                    "desc": "folderdesc"
                }
            ],
            "acl": {
                "member": 2,
                "other": 0
            }
        }
    },
    "status": 200
}
```
</details>

