# SysCreateFolder
## Overview
Create a folder in the global file tree.

<PartialServop service_name="groupFile" operation_name="SYS_CREATE_FOLDER" />

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
var groupId = "dfsfsffsd";
var folderPath = "xxxx";
var treeVersion = 1;
var name = "fname";
var desc = "desc";
var createInterimDirectories = true;
var groupFolderAcl = {
  "member": 2,
  "other": 0
};
var groupFileProxy = bridge.getGroupFileServiceProxy();

var postResult = groupFileProxy.sysCreateFolder(groupId, folderPath, treeVersion, name, desc, createInterimDirectories, groupFolderAcl);
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
  "operation": "SYS_CREATE_FOLDER",
  "data":
  {
    "groupId": "dfsfsffsd",
    "folderPath": "xxxx",
    "treeVersion": 1,
    "name": "fname",
    "desc": "desc",
    "createInterimDirectories": true,
    "groupFolderAcl": {
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
    "groupId": "2bf538d1-19ea-4e14-9862-f979215e09b7",
    "groupFileTree": {
      "treeVersion": 3,
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
          "children": [
            {
              "treeId": "fb3431cd-6e2f-47f1-8100-8941abf6bb4f",
              "children": null,
              "name": "gpathcopy",
              "acl": {
                "member": 2,
                "other": 0
              },
              "type": "Folder",
              "ownerId": null,
              "desc": "desc"
            }
          ],
          "name": "gpathcopy",
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
      }
    },
    "createdTreeId": "fb3431cd-6e2f-47f1-8100-8941abf6bb4f"
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
groupId | The id of the group.
folderPath | The folder path.
treeVersion | The target version of the folder tree.
name | The new folder name.
desc | The new folder description.
createInterimDirectories | Whether to automatically create folders if needed.
groupFolderAcl | The acl of the new group folder.


