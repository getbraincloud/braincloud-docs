# SysCopyGlobalFile
## Overview
Makes a copy of the specified file.

<PartialServop service_name="globalFileV3" operation_name="SYS_COPY_GLOBAL_FILE" / >

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
var fileId = "hjvfsghguhuhrtghgh";
var version = 1;
var newTreeId = "guid";
var treeVersion = 1;
var newFileName = "gfileName";
var globalFileProxy = bridge.getGlobalFileV3ServiceProxy();

var postResult = globalFileProxy.sysCopyGlobalFile(fileId, version, newTreeId, treeVersion, newFileName);
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
	"operation": "SYS_COPY_GLOBAL_FILE",
	"data": {
        "fileId": "8d2e30b0-6308-4aeb-ac6a-68e4a458365b",
        "version": 1,
        "newTreeId": "",
        "treeVersion": 1,
        "newFilename": "gfile",
        "overwriteIfPresent": true
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
        "fileDetails": {
            "fileId": "8d2e30b0-6308-4aeb-ac6a-68e4a458365b",
            "treeId": "",
            "fileName": "testFile3.txt",
            "contentMd5": "ruSnJhFo5VpcvrWdweyeaw==",
            "fileSize": 19,
            "dateUploaded": 1587692400000,
            "etag": "aee4a7261168e55a5cbeb59dc1ec9e6b",
            "version": 1,
            "url": "https://api.braincloudservers.com/files/bc/g/21774/f/8d2e30b0-6308-4aeb-ac6a-68e4a458365b/V1/testFile3.txt"
        }
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
fileId | The file id 
version | The current version of the file 
newTreeId | The location in the tree for the new file. Use emptystring for root.
treeVersion | The current version of the tree
newFilename | The filename to use for the copied file
overwriteIfPresent | Set to true to overwrite an existing file if present.


