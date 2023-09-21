# CheckFilenameExists
## Overview
Check if filename exists for provided path and name.

<PartialServop service_name="groupFile" operation_name="CHECK_FILENAME_EXISTS" />

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string groupId = "dfsfsffsd";
string folderPath = "";
string filename = "cccc";
SuccessCallback successCallback = (response, cbObject) =>
{
  Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
  Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GroupFileService.CheckFilenameExists(groupId, folderPath, filename, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *groupId = "dfsfsffsd";
const char *folderPath = "";
const char *filename = "cccc";

<%= data.branding.codePrefix %>->getGroupFileService()->checkFilenameExists(groupId, folderPath, filename, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *groupId = @"dfsfsffsd";
NSString *folderPath = @"";
NSString *filename = @"cccc";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupFileService] checkFilenameExists:groupId
                    folderPath:folderPath
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
String groupId = "dfsfsffsd";
String folderPath = "";
String filename = "cccc";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroupFileService().checkFilenameExists(groupId, folderPath, filename, this);

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
var groupId = "dfsfsffsd";
var folderPath = "";
var filename = "cccc";

<%= data.branding.codePrefix %>.groupFile.checkFilenameExists(groupId, folderPath, filename, result =>
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
var groupId = "dfsfsffsd";
var folderPath = "";
var filename = "cccc";
var groupFileProxy = bridge.getGroupFileServiceProxy();

var postResult = groupFileProxy.checkFilenameExists(groupId, folderPath, filename);
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
  "service": "groupFile",
  "operation": "CHECK_FILENAME_EXISTS",
  "data":
  {
    "groupId": "dfsfsffsd",
    "folderPath": "",
    "filename": "cccc"
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
  "data": {
    "fileDetails": {
      "treeId": "d9e937cc-750f-4414-962c-838f1af3f34a",
      "fileName": "glog.json",
      "fileSize": 7051,
      "dateUploaded": 1677183768000,
      "etag": "08c580b36ee79773bfec4a3c51bd1b64",
      "acl": {
        "member": 2,
        "other": 0
      },
      "version": 1,
      "url": "https://api.internal.braincloudservers.com/groupfiles/bc/g/23782/gr/2bf538d1-19ea-4e14-9862-f979215e09b7/d9e937cc-750f-4414-962c-838f1af3f34a/6d938c22-3b8c-4b99-a913-2edafed71a83/V1/glog.json",
      "fileId": "6d938c22-3b8c-4b99-a913-2edafed71a83"
    },
    "groupId": "2bf538d1-19ea-4e14-9862-f979215e09b7",
    "exists": true
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
groupId | The id of the group.
folderPath | The folder path.
filename | The file name.


