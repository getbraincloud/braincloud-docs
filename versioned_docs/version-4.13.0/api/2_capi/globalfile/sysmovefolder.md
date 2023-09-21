# SysMoveFolder
## Overview
Move a folder (and its contents). Returns the updated directory tree.

<PartialServop service_name="globalFileV3" operation_name="SYS_MOVE_FOLDER" / >

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
var globalFileProxy = bridge.getGlobalFileV3ServiceProxy();

var treeId = "56b1c593-92d2-4e49-a997-0e493111d7b2";
var treeVersion = 4;
var newCloudPath = "xaudio/yyy";
var updatedName = "tempdir";
var createInterimDirectories = true;

var postResult = globalFileProxy.sysMoveFolder(
    treeId, treeVersion, newCloudPath, updatedName, createInterimDirectories );

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
	"service": "globalFileV3",
	"operation": "SYS_GET_GLOBAL_CDN_URL",
	"data": {
        "treeId": "56b1c593-92d2-4e49-a997-0e493111d7b2",
        "treeVersion": 4,
        "newCloudPath": "xaudio/yyy",
        "updatedName": "tempdir",
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
    "status": 200,
    "data": {
        "globalTree": {
            "tree": [
                {
                    "treeId": "2188e9cf-27fa-4a33-8d06-3306f9a74bf8",
                    "name": "art",
                    "type": "Folder",
                    "desc": "Folder for art assets",
                    "children": null
                },
                {
                    "treeId": "146cce63-da7a-40c7-bd57-5b5f81607523",
                    "name": "audio",
                    "type": "Folder",
                    "desc": "For audio files",
                    "children": [
                        {
                            "treeId": "1330b5c1-5af4-46d9-820e-c0de1c109366",
                            "name": "xxx",
                            "type": "Folder",
                            "desc": null,
                            "children": null
                        }
                    ]
                },
                {
                    "treeId": "4a98c288-e1ab-4cb8-bdf4-66f7d4ea0739",
                    "name": "xaudio",
                    "type": "Folder",
                    "desc": "",
                    "children": [
                        {
                            "treeId": "02888d60-3caa-4b9a-b9b0-9d8eac5d410d",
                            "name": "yyy",
                            "type": "Folder",
                            "desc": "",
                            "children": [
                                {
                                    "treeId": "56b1c593-92d2-4e49-a997-0e493111d7b2",
                                    "name": "tempdir",
                                    "type": "Folder",
                                    "desc": "Seeing how multilevel works",
                                    "children": null
                                }
                            ]
                        }
                    ]
                }
            ],
            "treeVersion": 5
        }
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
treeId | The id of the folder to move
treeVersion | Current tree version
newCloudPath | New path to move the folder to
updatedName | Updated name for the folder
createInterimDirectories | Create any sub-folders that don't already exist in `newCloudPath` ?


