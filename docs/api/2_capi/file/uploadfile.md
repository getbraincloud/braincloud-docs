# UploadFile
## Overview
Prepares a user file upload. On success the file will begin uploading to the <%= data.branding.productName %> server.

To be informed of success/failure of the upload register the File Upload Callbacks with the <%= data.branding.codeClient %> class.



### Status Codes
Code | Name | Description
---- | ---- | -----------
40429 | UPLOAD_FILE_TOO_LARGE | File maximum file size exceeded
40430 | FILE_ALREADY_EXISTS | File exists, replaceIfExists not set

<PartialServop service_name="file" operation_name="PREPARE_USER_UPLOAD" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
<%= data.branding.codePrefix %>.RegisterFileUploadCallbacks(FileCallbackSuccess, FileCallbackFail);

string cloudPath = "test/files/"
string cloudName = "testCloudFile.dat"
bool overwrite = true;
bool share = true;
string localPath = "path/to/my/file.dat";

<%= data.branding.codePrefix %>.FileService.UploadFile(
    cloudPath,
    cloudName,
    share,
    overwrite,
    localPath,
    ApiSuccess, ApiError);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->registerFileUploadCallback(this);

const char* cloudPath = "test/files/"
const char* cloudName = "testCloudFile.dat"
bool overwrite = true;
bool share = true;
const char* localPath = "path/to/my/file.dat";

<%= data.branding.codePrefix %>->getFileService()->uploadFile(
    cloudPath,
    cloudName,
    share,
    overwrite,
    localPath,
    this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
BCFileUploadCompletedCompletionBlock fileSuccessBlock;  // define callback
BCFileUploadFailedCompletionBlock fileFailedBlock;      // define callback

[<%= data.branding.codePrefix %> registerFileUploadCallback: fileSuccessBlock failedBlock: fileFailedBlock];

NSString * cloudPath = @"test/files/";
NSString * cloudName = @"testCloudFile.dat";
BOOL overwrite = true;
BOOL share = true;
NSString * localPath = @"path/to/my/file.dat";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> fileService]
            uploadFile:cloudPath
         cloudFilename:cloudFilename
             shareable:overwrite
       replaceIfExists:share
             localPath:localPath
       completionBlock:successBlock
  errorCompletionBlock:failureBlock
              cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
public Boolean uploadFile(String cloudPath,
                   String cloudFilename,
                   boolean shareable,
                   boolean replaceIfExists,
                   String localPath,
                   IServerCallback callback)
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// See UploadFile - JavaScript
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
// NA
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
// NA
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
            "updatedAt": 1452616408147,
            "fileSize": 100,
            "fileType": "User",
            "expiresAt": 1452702808146,
            "shareable": true,
            "uploadId": "cf9a075c-587e-4bd1-af0b-eab1a79b958f",
            "createdAt": 1452616408147,
            "profileId": "bf8a1433-62d2-448e-b396-f3dbffff44",
            "gameId": "99999",
            "path": "dir1/dir2",
            "filename": "filename",
            "replaceIfExists": true,
            "cloudPath": "bc/g/99999/u/bf8a1433-62d2-448e-b396-f3dbffff44/f/dir1/dir2/filename"
        }
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
cloudPath | The desired cloud path of the file
cloudFilename | The desired cloud fileName of the file
shareable | True if the file is shareable
replaceIfExists | Whether to replace file if it exists
localPath | The path and fileName of the local file


