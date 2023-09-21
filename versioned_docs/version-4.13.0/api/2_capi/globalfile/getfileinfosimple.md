# GetFileInfoSimple
## Overview
Given a path and filename, returns information about the corresponding file.

<PartialServop service_name="globalFileV3" operation_name="GET_FILE_INFO_SIMPLE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string folderPath = "/root1/sub11/sub12/";
string filename = "sub12file1";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GlobalFileService.GetFileInfoSimple(folderPath, filename, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *folderPath = "/root1/sub11/sub12/";
const char *filename = "sub12file1";
<%= data.branding.codePrefix %>->getGlobalFileService()->getFileInfoSimple(folderPath, filename, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *folderPath = @"/root1/sub11/sub12/";
NSString *filename = @"sub12file1";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> globalFileService]    getFileInfoSimple:folderPath
                   filename:filename
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String folderPath = "/root1/sub11/sub12/";
String filename = "sub12file1";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGlobalFileService().getFileInfoSimple(folderPath, filename, this);

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
var folderPath = "/root1/sub11/sub12/";
var filename = "sub12file1";

<%= data.branding.codePrefix %>.globalFile.getFileInfoSimple(folderPath, filename, result =>
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
var folderPath = "/root1/sub11/sub12/";
var filename = "sub12file1";
var globalFileProxy = bridge.getGlobalFileV3ServiceProxy();

var postResult = globalFileProxy.getFileInfoSimple(
    folderPath, filename );
    
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
	"operation": "GET_FILE_INFO_SIMPLE",
	"data": {
        "folderPath": "/root1/sub11/sub12/",
        "filename": "sub12file1"
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
            "fileId": "4d0b8945-41f8-4a2b-a2f5-e9c0b2482bc6",
            "contentMd5": "0snE+wsqo2XeseZbT5kLyQ==",
            "treeId": "ff81c691-5683-4aa0-addb-6f89ecd3ce75",
            "fileName": "sub12file1",
            "fileSize": 64,
            "dateUploaded": 1586975354000,
            "etag": "d2c9c4fb0b2aa365deb1e65b4f990bc9",
            "version": 1,
            "url": "https://api.braincloudservers.com/files/bc/g/23302/f/xxxx-xxx-xxx-xxx/yyy-yyy-yyy-yyy/V1/sub12file1"
        }
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
folderPath | path to the file
filename | filename


