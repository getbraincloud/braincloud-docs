# UploadFile - JavaScript
## Overview
Method uploads the supplied file to the <%= data.branding.productName %> server. Note that you must call prepareUserUpload to retrieve the uploadId before calling this method. It is assumed that any methods required to monitor the file upload including progress, and completion are attached to the XMLHttpRequest xhr object's events such as:

* xhr.upload.addEventListener("progress", uploadProgress);
* xhr.addEventListener("load", transferComplete);
* xhr.addEventListener("error", transferFailed);
* xhr.addEventListener("abort", transferCanceled);

On a 200 http status, the JSON return is available from XMLHttpRequest.responseText



<PartialServop service_name="file" operation_name="UPLOAD_FILE" / >

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
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
// N/A
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

The XMLHttpRequest object will return a 200 http status if the upload is successful.

</details>


## Method Parameters
Parameter | Description
--------- | -----------
xhr | The XMLHttpRequest object that the <%= data.branding.productName %> client will use to upload the file
file | The file object
uploadId | The upload id obtained via prepareFileUpload()


