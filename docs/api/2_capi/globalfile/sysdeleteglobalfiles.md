# SysDeleteGlobalFiles
## Overview
Delete all the files in the specified directory. Returns a list of the files that were deleted.

<PartialServop service_name="globalFileV3" operation_name="SYS_DELETE_GLOBAL_FILES" / >

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

var treeId = "";
var folderPath = "/";
var treeVersion = 2;
var recurse = false;

var postResult = globalFileProxy.sysDeleteGlobalFiles(
    fileId, folderPath, treeVersion, recurse );

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
	"operation": "SYS_DELETE_GLOBAL_FILES",
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
        "deletedFiles": [
            {
                "treeId": "",
                "fileName": "testFile3.txt",
                "version": 1,
                "fileId": "34abacc5-c048-4bcc-a3ce-8eb751a718a6"
            },
            {
                "treeId": "",
                "fileName": "testFile2.txt",
                "version": 1,
                "fileId": "d77122cc-f87b-4f98-801f-e49568d7061f"
            },
            {
                "treeId": "",
                "fileName": "testFile1.txt",
                "version": 1,
                "fileId": "ed126aaa-27de-48c7-b650-18e7af52ccb9"
            }
        ]
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
treeId | Tree location to delete all files
folderPath | Path of that tree location (as an intention check)
treeVersion | Current tree version
recurse | Delete files in subdirectories as well?


