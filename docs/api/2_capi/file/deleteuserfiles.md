# DeleteUserFiles
## Overview
Deletes multiple user files.

<PartialServop service_name="file" operation_name="DELETE_USER_FILES" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string path = "dir1/dir2";
bool recurse = true;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.FileService.DeleteUserFiles(path, recurse, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *path = "dir1/dir2";
bool recurse = true;
<%= data.branding.codePrefix %>->getFileService()->deleteUserFiles(path, recurse, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *path = @"dir1/dir2";
bool recurse = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> fileService] deleteUserFiles:path
                    recurse:recurse
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String path = "dir1/dir2";
boolean recurse = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getFileService().deleteUserFiles(path, recurse, this);

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
var path = "dir1/dir2";
var recurse = true;

<%= data.branding.codePrefix %>.file.deleteUserFiles(path, recurse, result =>
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
var path = "dir1/dir2";
var recurse = true;
var fileProxy = bridge.getFileServiceProxy();

var postResult = fileProxy.deleteUserFiles(path, recurse);
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
	"operation": "DELETE_USER_FILES",
	"data": {
		"path": "dir1/dir2",
		"recurse": true
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
        "fileList": [
            {
                "updatedAt": 1452603368201,
                "uploadedAt": null,
                "fileSize": 85470,
                "shareable": true,
                "createdAt": 1452603368201,
                "profileId": "bf8a1433-62d2-448e-b396-f3dbffff44",
                "gameId": "99999",
                "path": "test2",
                "filename": "testup.dat",
                "downloadUrl": "https://api.braincloudservers.com/s3/bc/g/99999/u/bf8f44/f/test2/testup.dat",
                "cloudLocation": "bc/g/99999/u/bf8f44/f/test2/testup.dat"
            }
        ]
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

</details>


## Method Parameters
Parameter | Description
--------- | -----------
cloudPath | File path
recurse | Whether to recurse into sub-directories
#
