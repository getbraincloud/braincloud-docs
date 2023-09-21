# SysDeleteFolder
## Overview
Delete the specified folder (and optionally child files and subfolders). Return the updated directory tree.

<PartialServop service_name="globalFileV3" operation_name="SYS_DELETE_FOLDER" / >

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

var treeId = "";
var folderPath = "/";
var treeVersion = 2;
var recurse = false;

var postResult = globalFileProxy.sysDeleteFolder(
    treeId, folderPath, treeVersion, recurse );

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
	"operation": "SYS_DELETE_FOLDER",
	"data": {
        "treeId": "",
        "cloudPath": "/",
        "treeVersion": 2,
        "recurse": false
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
                    "children": null,
                    "name": "art",
                    "type": "Folder",
                    "desc": "Folder for art assets"
                },
                {
                    "treeId": "146cce63-da7a-40c7-bd57-5b5f81607523",
                    "children": null,
                    "name": "audio",
                    "type": "Folder",
                    "desc": "For audio files"
                }
            ],
            "treeVersion": 3
        }
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
treeId | Tree location of the folder to delete
folderPath | Path of that tree location (as an intention check)
treeVersion | Current tree version
recurse | Delete files and subfolders if not empty?


