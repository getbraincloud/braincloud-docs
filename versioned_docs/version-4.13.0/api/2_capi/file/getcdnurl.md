# GetCDNUrl
## Overview
:::tip
This method was added to support clients (like very old versions of Unity - i.e. circa 2016) that cannot handle HTTP Redirects. This method allows clients to <em>pre-resolve</em> the CDN endpoint for the file to download.<br />
<br />
This call is not required in the great majority of cases. Just use the regular file download URL and the platform will automatically re-direct the client to the appropriate CDN URL.
:::

Returns the CDN url for a file object.

<PartialServop service_name="file" operation_name="GET_CDN_URL" / >

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

<%= data.branding.codePrefix %>.FileService.GetCDNUrl(cloudPath, cloudFilename, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *cloudPath = "dir1/dir2";
const char *cloudFilename = "filename";
<%= data.branding.codePrefix %>->getFileService()->getCDNUrl(cloudPath, cloudFilename, this);
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

[[<%= data.branding.codePrefix %> fileService] getCDNUrl:cloudPath
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

<%= data.branding.codePrefix %>.getFileService().getCDNUrl(cloudPath, cloudFilename, this);

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

<%= data.branding.codePrefix %>.file.getCDNUrl(cloudPath, cloudFilename, result =>
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

var postResult = fileProxy.getCDNUrl(cloudPath, cloudFilename);
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
	"operation": "GET_CDN_URL",
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
        "appServerUrl": "https://api.braincloudservers.com/...f434b1db538b/f/uploadsimplefile.txt",
        "cdnUrl": "https://d2b6zwnvr1nyug.cloudfront.net/bc/g/20001/u/107b3aa9-0d9f-4e90-af..."
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
