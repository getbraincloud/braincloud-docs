# GetFileInfo

Returns information on a file using fileId.

<PartialServop service_name="groupFile" operation_name="GET_FILE_INFO" />

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string groupId = "dfsfsffsd";
string fileId = "guid";
SuccessCallback successCallback = (response, cbObject) =>
{
  Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
  Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GroupFileService.GetFileInfo(groupId, fileId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *groupId = "dfsfsffsd";
const char *fileId = "guid";

<%= data.branding.codePrefix %>->getGroupFileService()->getFileInfo(groupId, fileId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *groupId = @"dfsfsffsd";
NSString *fileId = @"guid";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupFileService] getFileInfo:groupId
                        fileId:fileId
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
String fileId = "guid";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroupFileService().getFileInfo(groupId, fileId, this);

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
var fileId = "guid";

<%= data.branding.codePrefix %>.groupFile.getFileInfo(groupId, fileId, result =>
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
var fileId = "guid";
var groupFileProxy = bridge.getGroupFileServiceProxy();

var postResult = groupFileProxy.getFileInfo(groupId, fileId);
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
  "operation": "GET_FILE_INFO",
  "data":
  {
    "groupId": "dfsfsffsd",
    "fileId": "guid"
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
    "groupId": "2bf538d1-19ea-4e14-9862-f979215e09b7"
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
groupId | The id of the group.
fileId | The id of the file.


