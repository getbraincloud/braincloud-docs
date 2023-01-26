# GetFileInfo
## Overview
Returns information about the specified file.

<PartialServop service_name="globalFileV3" operation_name="GET_FILE_INFO" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string fileId = "hjvfsghguhuhrtghgh";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GlobalFileService.GetFileInfo(fileId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *fileId = "hjvfsghguhuhrtghgh";
<%= data.branding.codePrefix %>->getGlobalFileService()->getFileInfo(fileId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *fileId = @"hjvfsghguhuhrtghgh";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> globalFileService] getFileInfo:fileId
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String fileId = "hjvfsghguhuhrtghgh";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGlobalFileService().getFileInfo(fileId, this);

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
var fileId = "hjvfsghguhuhrtghgh";

<%= data.branding.codePrefix %>.globalFile.getFileInfo(fileId, result =>
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
var fileId = "hjvfsghguhuhrtghgh";
var globalFileProxy = bridge.getGlobalFileV3ServiceProxy();

var postResult = globalFileProxy.getFileInfo(fileId);

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
	"operation": "GET_FILE_INFO",
	"data": {
		"fileId": "hjvfsghguhuhrtghgh"
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
            "treeId": "ff81c691-5683-4aa0-addb-6f89ecd3ce75",
            "fileName": "sub12file1",
            "contentMd5": "0snE+wsqo2XeseZbT5kLyQ==",
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
fileId | File ID


