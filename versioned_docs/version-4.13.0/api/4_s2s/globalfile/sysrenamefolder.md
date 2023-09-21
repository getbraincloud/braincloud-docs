# SysRenameFolder
## Overview
Rename the specified folder.

<PartialServop service_name="globalFileV3" operation_name="SYS_RENAME_FOLDER" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var globalFileProxy = bridge.getGlobalFileV3ServiceProxy();

var treeId = "56b1c593-92d2-4e49-a997-0e493111d7b2";
var treeVersion = 5;
var updatedName = "tempdir2";

var postResult = globalFileProxy.sysRenameFolder(
    treeId, treeVersion, updatedName );

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
	"operation": "SYS_RENAME_FOLDER",
	"data": {
        "treeId": "56b1c593-92d2-4e49-a997-0e493111d7b2",
        "treeVersion": 5,
        "updatedName": "tempdir2"
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
                                    "name": "tempdir2",
                                    "type": "Folder",
                                    "desc": "Seeing how multilevel works",
                                    "children": null
                                }
                            ]
                        }
                    ]
                }
            ],
            "treeVersion": 6
        }
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
treeId | The id of the folder to rename
treeVersion | The current tree version
updatedName | The updated name of the folder


