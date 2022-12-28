# SysGetGlobalFileList
## Overview
Retrieves the list of global files stored at the specified directory location.

<PartialServop service_name="globalFileV3" operation_name="SYS_GET_GLOBAL_FILE_LIST" / >

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
var folderPath = "";
var recurse = true;

var globalFileProxy = bridge.getGlobalFileV3ServiceProxy();

var postResult = globalFileProxy.sysGetGlobalFileList(folderPath, recurse);
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
	"operation": "SYS_GET_GLOBAL_FILE_LIST",
	"data": {}
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
        "treeVersion": 2,
        "fileList": {
            "treeId": "",
            "folderPath": "/",
            "name": "",
            "folders": {
                "art": {
                    "treeId": "2188e9cf-27fa-4a33-8d06-3306f9a74bf8",
                    "folderPath": "/art/",
                    "name": "art",
                    "folders": {},
                    "files": {
                        "image.png": {
                            "fileId": "bf9de8db-8cd8-44ac-b43c-b91ecd312e13",
                            "fileName": "image.png",
                            "fileSize": 5678,
                            "version": 1,
                            "url": "https://api.braincloudservers.com/files/bc/g/21774/f/2188e9cf-27fa-4a33-8d06-3306f9a74bf8/bf9de8db-8cd8-44ac-b43c-b91ecd312e13/V1/image.png"
                        }
                    }
                }
            },
            "files": {
                "testFile2.txt": {
                    "fileId": "6f6420b3-e641-43b7-8f32-20c16af208e0",
                    "fileName": "testFile2.txt",
                    "fileSize": 2256,
                    "version": 1,
                    "url": "https://api.braincloudservers.com/files/bc/g/21774/f/6f6420b3-e641-43b7-8f32-20c16af208e0/V1/testFile2.txt"
                },
                "testFile1.txt": {
                    "fileId": "b2175eae-5b7a-4813-93d3-527600db7d73",
                    "fileName": "testFile1.txt",
                    "fileSize": 1214,
                    "version": 1,
                    "url": "https://api.braincloudservers.com/files/bc/g/21774/f/b2175eae-5b7a-4813-93d3-527600db7d73/V1/testFile1.txt"

                }
            }
        }
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
folderPath | Directory location of the files. Use empty string or "/" for root.
recurse | Whether to recurse into subdirectories


