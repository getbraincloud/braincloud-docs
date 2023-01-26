# SysMoveGlobalFile
## Overview
Move or rename the specified file.

<PartialServop service_name="globalFileV3" operation_name="SYS_MOVE_GLOBAL_FILE" / >

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

var fileId = "742f46ad-cab2-4f62-9ac4-c7c5b6f0e13b";
var version = 1;
var newTreeId = "2188e9cf-27fa-4a33-8d06-3306f9a74bf8";
var treeVersion = 2;
var newFilename = "testFile1.txt";
var overwriteIfPresent = true;

var postResult = globalFileProxy.sysMoveGlobalFile(
    fileId, version, newTreeId, treeVersion, newFilename, overwriteIfPresent );

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
	"operation": "SYS_MOVE_GLOBAL_FILE",
	"data": {
        "fileId": "742f46ad-cab2-4f62-9ac4-c7c5b6f0e13b",
        "version": 1,
        "newTreeId": "2188e9cf-27fa-4a33-8d06-3306f9a74bf8",
        "treeVersion": 2,
        "newFilename": "testFile1.txt",
        "overwriteIfPresent": true,
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
        "fileId": "b0cc8e28-ab5d-4a6c-94c3-476549128eaa",
        "treeId": "2188e9cf-27fa-4a33-8d06-3306f9a74bf8",
        "fileName": "testFile1.txt",
        "contentMd5": "ruSnJhFo5VpcvrWdweyeaw==",
        "fileSize": 19,
        "dateUploaded": 1587694790000,
        "etag": "aee4a7261168e55a5cbeb59dc1ec9e6b",
        "version": 1,
        "url": "https://api.braincloudservers.com/files/bc/g/21774/f/2188e9cf-27fa-4a33-8d06-3306f9a74bf8/b0cc8e28-ab5d-4a6c-94c3-476549128eaa/V1/testFile1.txt"
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
fileId | File ID
version | File version
newTreeId | Id of the new location for the file
treeVersion | Current tree version (used to prevent concurrency errors)
newFilename | New name for the file
overwriteIfPresent | If a file of that name already exists at that location, overwrite it?


