# DeleteFile

Delete a file.

<PartialServop service_name="groupFile" operation_name="DELETE_FILE" />

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string groupId = "dfsfsffsd";
string fileId = "xxxx";
int version = 1;
string filename = "gfile";
SuccessCallback successCallback = (response, cbObject) =>
{
  Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
  Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GroupFileService.DeleteFile(groupId, fileId, version, filename, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *groupId = "dfsfsffsd";
const char *fileId = "xxxx";
int version = 1;
const char *filename = "gfile";

<%= data.branding.codePrefix %>->getGroupFileService()->deleteFile(groupId, fileId, version, filename, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *groupId = @"dfsfsffsd";
NSString *fileId = @"xxxx";
int version = 1;
NSString *filename = @"gfile";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupFileService] deleteFile:groupId
                        fileId:fileId
                       version:version
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
String fileId = "xxxx";
int version = 1;
String filename = "gfile";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroupFileService().deleteFile(groupId, fileId, version, filename, this);

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
var fileId = "xxxx";
var version = 1;
var filename = "gfile";

<%= data.branding.codePrefix %>.groupFile.deleteFile(groupId, fileId, version, filename, result =>
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
var fileId = "xxxx";
var version = 1;
var filename = "gfile";
var groupFileProxy = bridge.getGroupFileServiceProxy();

var postResult = groupFileProxy.deleteFile(groupId, fileId, version, filename);
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
  "operation": "DELETE_FILE",
  "data":
  {
    "groupId": "dfsfsffsd",
    "fileId": "xxxx",
    "version": 1,
    "filename": "gfile"
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
      "treeId": "fb3431cd-6e2f-47f1-8100-8941abf6bb4f",
      "fileName": "glogcopy.json",
      "version": 1,
      "fileId": "0554430e-51a1-44d4-b6f4-bffae67185dc"
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
version | The target version of the file.
filename | The file name for verification purposes.


