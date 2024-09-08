# SysMoveFolder

Move a folder in the global file tree.

<PartialServop service_name="groupFile" operation_name="SYS_MOVE_FOLDER" />

## Method Parameters
Parameter | Description
--------- | -----------
groupId | The id of the group.
treeId | The id of the source folder.
treeVersion | The target version of the folder tree.
newFolderPath | The destination folder path.
updatedName | The optional new name of the folder.
createInterimDirectories | Whether to automatically create folders if needed.

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
var treeId = "guid";
var treeVersion = 1;
var newFolderPath = "xxxx";
var updatedName = "fname";
var createInterimDirectories = true;
var groupFileProxy = bridge.getGroupFileServiceProxy();

var postResult = groupFileProxy.sysMoveFolder(groupId, treeId, treeVersion, newFolderPath, updatedName, createInterimDirectories);
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
  "operation": "SYS_MOVE_FOLDER",
  "data":
  {
    "groupId": "dfsfsffsd",
    "treeId": "guid",
    "treeVersion": 1,
    "newFolderPath": "xxxx",
    "updatedName": "fname",
    "createInterimDirectories": true
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
      "treeVersion": 7,
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
        },
        {
          "treeId": "4baff7ed-c5ce-4058-b4d9-2ef04a662ceb",
          "children": [
            {
              "treeId": "40479c72-b46b-4c05-902c-239ada116acd",
              "children": null,
              "name": "movedfolder",
              "acl": {
                "member": 2,
                "other": 0
              },
              "type": "Folder",
              "ownerId": null,
              "desc": ""
            }
          ],
          "name": "subfoldername",
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
    }
  },
  "status": 200
}
```
</details>

