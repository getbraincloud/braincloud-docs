# CopyFile

Copy a file.

<PartialServop service_name="groupFile" operation_name="COPY_FILE" />

## Method Parameters
Parameter | Description
--------- | -----------
groupId | The id of the group.
fileId | The id of the file.
version | The target version of the file.
newTreeId | The id of the destination folder.
treeVersion | The target version of the folder tree.
newFilename | The optional new file name.
overwriteIfPresent | Whether to allow overwrite of an existing file if present.

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
string newTreeId = "guid";
int treeVersion = 1;
string newFilename = "gfile";
bool overwriteIfPresent = true;
SuccessCallback successCallback = (response, cbObject) =>
{
  Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
  Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GroupFileService.CopyFile(groupId, fileId, version, newTreeId, treeVersion, newFilename, overwriteIfPresent, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *groupId = "dfsfsffsd";
const char *fileId = "xxxx";
int version = 1;
const char *newTreeId = "guid";
int treeVersion = 1;
const char *newFilename = "gfile";
bool overwriteIfPresent = true;

<%= data.branding.codePrefix %>->getGroupFileService()->copyFile(groupId, fileId, version, newTreeId, treeVersion, newFilename, overwriteIfPresent, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *groupId = @"dfsfsffsd";
NSString *fileId = @"xxxx";
int version = 1;
NSString *newTreeId = @"guid";
int treeVersion = 1;
NSString *newFilename = @"gfile";
bool overwriteIfPresent = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupFileService] copyFile:groupId
                        fileId:fileId
                       version:version
                     newTreeId:newTreeId
                   treeVersion:treeVersion
                   newFilename:newFilename
            overwriteIfPresent:overwriteIfPresent
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
String newTreeId = "guid";
int treeVersion = 1;
String newFilename = "gfile";
bool overwriteIfPresent = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroupFileService().copyFile(groupId, fileId, version, newTreeId, treeVersion, newFilename, overwriteIfPresent, this);

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
var newTreeId = "guid";
var treeVersion = 1;
var newFilename = "gfile";
var overwriteIfPresent = true;

<%= data.branding.codePrefix %>.groupFile.copyFile(groupId, fileId, version, newTreeId, treeVersion, newFilename, overwriteIfPresent, result =>
{
  var status = result.status;
  console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
var  groupId = "dfsfsffsd";
var  fileId = "xxxx";
var  version = 1;
var  newTreeId = "guid";
var  treeVersion = 1;
var  newFilename = "gfile";
var  overwriteIfPresent = true;

ServerResponse result = await <%= data.branding.codePrefix %>.groupFileService.copyFile(groupId:groupId, fileId:fileId, version:version, newTreeId:newTreeId, treeVersion:treeVersion, newFilename:newFilename, overwriteIfPresent:overwriteIfPresent);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var groupId = "dfsfsffsd";
var fileId = "xxxx";
var version = 1;
var newTreeId = "guid";
var treeVersion = 1;
var newFilename = "gfile";
var overwriteIfPresent = true;
var groupFileProxy = bridge.getGroupFileServiceProxy();

var postResult = groupFileProxy.copyFile(groupId, fileId, version, newTreeId, treeVersion, newFilename, overwriteIfPresent);
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
  "operation": "COPY_FILE",
  "data":
  {
    "groupId": "dfsfsffsd",
    "fileId": "xxxx",
    "version": 1,
    "newTreeId": "guid",
    "treeVersion": 1,
    "newFilename": "gfile",
    "overwriteIfPresent": true
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
      "fileSize": 7051,
      "dateUploaded": 1677519200000,
      "etag": "173c2ac6f302869af8890ee32a8ccb90",
      "acl": {
        "member": 2,
        "other": 0
      },
      "version": 1,
      "url": "https://api.internal.braincloudservers.com/groupfiles/bc/g/23782/gr/2bf538d1-19ea-4e14-9862-f979215e09b7/fb3431cd-6e2f-47f1-8100-8941abf6bb4f/0554430e-51a1-44d4-b6f4-bffae67185dc/V1/glogcopy.json",
      "fileId": "0554430e-51a1-44d4-b6f4-bffae67185dc"
    },
    "groupId": "2bf538d1-19ea-4e14-9862-f979215e09b7"
  },
  "status": 200
}
```
</details>

