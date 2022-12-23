# SysMoveToLegacyGlobalFile
## Overview
Copies the specified User File to the *legacy* Global File system.

<PartialServop service_name="globalFile" operation_name="SYS_MOVE_TO_LEGACY_GLOBAL_FILE" / >

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
// Note - must use the legacy globalFileServiceProxy - not 
// the even older s3HandlingServiceProxy.
var globalFileProxy = bridge.getGlobalFileServiceProxy();

var userProfileId = "c32c330f-d84d-4e7f-a405-a972d28fe933";
var userCloudPath = "textFile";
var userCloudFilename = "testFile3.txt";
var shortname =  "testfile3";
var globalCloudFilename = "testFile3.txt";
var overwriteIfPresent = true;


var postResult = globalFileProxy.sysMoveToLegacyGlobalFile(
    userProfileId, userCloudPath, userCloudFilename, shortName, globalCloudFilename, overwriteIfPresent );

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
	"service": "globalFile",
	"operation": "SYS_MOVE_TO_LEGACY_GLOBAL_FILE",
	"data": {
        "userProfileId": "c32c330f-d84d-4e7f-a405-a972d28fe933",
        "userCloudPath": "textFile",
        "userCloudFilename": "testFile3.txt",
        "shortname": "testfile3",
        "globalCloudFilename": "testFile3.txt",
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
            "gameId": "21774",
            "fileId": "65dae51c-2a6a-4186-9be3-9f3b84261976",
            "shortName": "testfile3",
            "subType": "cust",
            "category": null,
            "relativeUrl": "/cust/testFile3.txt",
            "absoluteUrl": "https://api.braincloudservers.com/files/portal/g/21774/cust/testfile/V1/testfile.txt",
            "md5HashHex": "da69907799c0394869a6d7a3d467f9c0",
            "md5Hash": "2mmQd5nAOUhpptej1Gf5wA==",
            "fileName": "testFile3.txt",
            "fileSize": 20,
            "dateUploaded": 1588094138000,
            "objectKey": "portal/g/21774/cust/testfile/V1/testFile3.txt",
            "version": 1,
            "pathVersion": "V2"
        }
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
shortName | The shortname to use for the file
globalCloudFilename | Filename to use in global files
overwriteIfPresent | Overwrite the file if it already exists?


