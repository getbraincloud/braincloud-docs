# SysMoveToGlobalFile
## Overview
Copies the specified User File to the Global File V3 system.

<PartialServop service_name="globalFileV3" operation_name="SYS_MOVE_TO_GLOBAL_FILE" / >

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

var userProfileId = "c32c330f-d84d-4e7f-a405-a972d28fe933";
var userCloudPath = "textFile";
var userCloudFilename = "testFile3.txt";
var globalTreeId =  "";
var globalFilename = "testFile3.txt";
var overwriteIfPresent = true;

var postResult = globalFileProxy.sysMoveToGlobalFile(
    userProfileId, userCloudPath, userCloudFilename, globalTreeId, globalFilename, overwriteIfPresent );

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
	"operation": "SYS_MOVE_TO_GLOBAL_FILE",
	"data": {
        "userProfileId": "c32c330f-d84d-4e7f-a405-a972d28fe933",
        "userCloudPath": "textFile",
        "userCloudFilename": "testFile3.txt",
        "globalTreeId": "",
        "globalFilename": "testFile3.txt",
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
        "fileId": "34abacc5-c048-4bcc-a3ce-8eb751a718a6",
        "treeId": "",
        "fileName": "testFile3.txt",
        "contentMd5": "2mmQd5nAOUhpptej1Gf5wA==",
        "fileSize": 20,
        "dateUploaded": 1587695812000,
        "etag": "da69907799c0394869a6d7a3d467f9c0",
        "version": 1,
        "url": "https://api.braincloudservers.com/files/bc/g/21774/f/34abacc5-c048-4bcc-a3ce-8eb751a718a6/V1/testFile3.txt"
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
userProfileId | ProfileId of the user to copy the file from
userCloudPath | Directory of the file in User Files
userCloudFilename | Filename of the user file
globalTreeId | TreeId to move the file to
globalFilename | Filename to use in global files
overwriteIfPresent | Overwrite the file if it already exists?


