# DeleteUserFile
## Overview
Deletes a single user file.

<PartialServop service_name="file" operation_name="DELETE_USER_FILE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string cloudPath = "dir1/dir2";
string cloudFilename = "filename";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.FileService.DeleteUserFile(cloudPath, cloudFilename, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *cloudPath = "dir1/dir2";
const char *cloudFilename = "filename";
<%= data.branding.codePrefix %>->getFileService()->deleteUserFile(cloudPath, cloudFilename, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *cloudPath = @"dir1/dir2";
NSString *cloudFilename = @"filename";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> fileService] deleteUserFile:cloudPath
              cloudFilename:cloudFilename
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String cloudPath = "dir1/dir2";
String cloudFilename = "filename";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getFileService().deleteUserFile(cloudPath, cloudFilename, this);

public void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)
{
    System.out.print(String.format("Success | %s", jsonData.toString()));
}
public void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)
{
    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));
}
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var cloudPath = "dir1/dir2";
var cloudFilename = "filename";

<%= data.branding.codePrefix %>.file.deleteUserFile(cloudPath, cloudFilename, result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var cloudPath = "dir1/dir2";
var cloudFilename = "filename";
var fileProxy = bridge.getFileServiceProxy();

var postResult = fileProxy.deleteUserFile(cloudPath, cloudFilename);
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
	"service": "file",
	"operation": "DELETE_USER_FILE",
	"data": {
		"cloudPath": "dir1/dir2",
		"cloudFilename": "filename"
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

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40431 | CLOUD_STORAGE_SERVICE_ERROR | Cloud storage service error
40432 | FILE_DOES_NOT_EXIST | File does not exist

</details>


## Method Parameters
Parameter | Description
--------- | -----------
cloudPath | File path
cloudFilename | Name of file
#
