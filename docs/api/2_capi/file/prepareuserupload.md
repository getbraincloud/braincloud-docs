# PrepareUserUpload - CloudCode and JavaScript
## Overview
Prepares a user file upload. On success an uploadId will be returned which can be used to upload the file using the <%= data.branding.codePrefix %>.file.uploadFile method.



<PartialServop service_name="file" operation_name="PREPARE_USER_UPLOAD" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var shareable = true;
var replaceIfExists = true;
var file = document.getElementById('fileToUpload').files[0];
var fileSize = file.size;

<%= data.branding.codePrefix %>.file.prepareFileUpload(
			"cloudPath", "cloudFilename", shareable, replaceIfExists, fileSize,
			function(result) {
				if (result.status == 200) {
					var uploadId = result.data.fileDetails.uploadId;
					<%= data.branding.codePrefix %>.file.uploadFile(xhr, file, uploadId);
				}
			}
		);
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var cloudPath = "test/files/"
var cloudName = "testCloudFile.dat"
var shareable = true;
var replaceIfExists = true;
var fileSize = 256;
var localPath = "path/to/my/file.dat";

var fileProxy = bridge.getFileServiceProxy();
var retVal = fileProxy.prepareUserUpload(cloudPath, cloudName, shareable, replaceIfExists, fileSize, localPath);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var cloudPath = "test/files/"
var cloudName = "testCloudFile.dat"
var shareable = true;
var replaceIfExists = true;
var fileSize = 256;
var localPath = "path/to/my/file.dat";

var fileProxy = bridge.getFileServiceProxy();
var retVal = fileProxy.prepareUserUpload(cloudPath, cloudName, shareable, replaceIfExists, fileSize, localPath);
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
    "status":200,
    "data":{
        "fileDetails":{
            "updatedAt":1452616408147,
            "fileSize":100,
            "fileType":"User",
            "expiresAt":1452702808146,
            "shareable":true,
            "uploadId":"cf9a075c-587e-4bd1-af0b-eab1a79b958f",
            "createdAt":1452616408147,
            "profileId":"bf8a1433-62d2-448e-b396-f3dbffff44",
            "gameId":"99999",
            "path":"dir1/dir2",
            "filename":"filename",
            "replaceIfExists":true,
            "cloudPath":"bc/g/99999/u/bf8a1433-62d2-448e-b396-f3dbffff44/f/dir1/dir2/filename"
        }
    }
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40429 | UPLOAD_FILE_TOO_LARGE | File maximum file size exceeded
40430 | FILE_ALREADY_EXISTS | File exists, replaceIfExists not set

</details>


## Method Parameters
Parameter | Description
--------- | -----------
cloudPath | The desired cloud path of the file
cloudFilename | The desired cloud fileName of the file
shareable | True if the file is shareable
replaceIfExists | Whether to replace file if it exists
fileSize | The size of the file in bytes
localPath | The path and fileName of the local file


