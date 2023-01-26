# SysCreateFolder
## Overview
Creates a new Global File folder. Returns the updated directory tree and version.

<PartialServop service_name="globalFileV3" operation_name="SYS_CREATE_FOLDER" / >

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

var folderPath = "";
var treeVersion = 2;
var name = "audio";
var desc = "For audio files";
var createInterimDirectories = true;

var postResult = globalFileProxy.sysCreateFolder(
    folderPath, treeVersion, name, desc, createInterimDirectories );

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
	"operation": "SYS_CREATE_FOLDER",
	"data": {
        "folderPath": "",
        "treeVersion": 2,
        "name": "audio",
        "desc": "For audio files",
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
folderPath | Parent directory path. Can include additional directories in path to quickly build a nested structure.
treeVersion | Current tree version
name | Name of the new directory
desc | Directory description; will be displayed in Design Portal UI (when available)
createInterimDirectories | Allows for creating multiple levels of a tree at once


