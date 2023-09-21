# GetGlobalFileList
## Overview
Retrieves the list of global files stored at the specified directory location.

<PartialServop service_name="globalFileV3" operation_name="GET_GLOBAL_FILE_LIST" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string folderPath = "";
bool recurse = true;

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GlobalFileService.GetGlobalFileList(folderPath, recurse, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *folderPath = "";
bool resurse = true;
<%= data.branding.codePrefix %>->getGlobalFileService()->getGlobalFileList(folderPath, resurse, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *folderPath = @"";
bool resurse = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> globalFileService] getGlobalFileList:folderPath
                    resurse:recurse
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String folderPath = "";
boolean recurse = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGlobalFileService().getGlobalFileList(folderPath, recurse, this);

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
var folderPath = "";
var recurse = true;

<%= data.branding.codePrefix %>.globalFile.getGlobalFileList(folderPath, recurse, result =>
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
var folderPath = "";
var recurse = true;

var globalFileProxy = bridge.getGlobalFileV3ServiceProxy();

var postResult = globalFileProxy.getGlobalFileList(folderPath, recurse);

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
	"operation": "GET_GLOBAL_FILE_LIST",
	"data": {
        "folderPath": "",
        "recurse": true,        
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
        "treeVersion": 2,
        "fileList": {
            "treeId": "",
            "folderPath": "/",
            "name": "",
            "folders": {
                "art": {
                    "treeId": "2188e9cf-27fa-4a33-8d06-3306f9a74bf8",
                    "folderPath": "/art/",
                    "name": "art",
                    "folders": {},
                    "files": {
                        "image.png": {
                            "fileId": "bf9de8db-8cd8-44ac-b43c-b91ecd312e13",
                            "fileName": "image.png",
                            "fileSize": 5678,
                            "version": 1,
                            "url": "https://api.braincloudservers.com/files/bc/g/21774/f/2188e9cf-27fa-4a33-8d06-3306f9a74bf8/bf9de8db-8cd8-44ac-b43c-b91ecd312e13/V1/image.png"
                        }
                    }
                }
            },
            "files": {
                "testFile2.txt": {
                    "fileId": "6f6420b3-e641-43b7-8f32-20c16af208e0",
                    "fileName": "testFile2.txt",
                    "fileSize": 2256,
                    "version": 1,
                    "url": "https://api.braincloudservers.com/files/bc/g/21774/f/6f6420b3-e641-43b7-8f32-20c16af208e0/V1/testFile2.txt"
                },
                "testFile1.txt": {
                    "fileId": "b2175eae-5b7a-4813-93d3-527600db7d73",
                    "fileName": "testFile1.txt",
                    "fileSize": 1214,
                    "version": 1,
                    "url": "https://api.braincloudservers.com/files/bc/g/21774/f/b2175eae-5b7a-4813-93d3-527600db7d73/V1/testFile1.txt"

                }
            }
        }
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
folderPath | Directory location of the files. Use empty string or "/" for root.
recurse | Whether to recurse into subdirectories


