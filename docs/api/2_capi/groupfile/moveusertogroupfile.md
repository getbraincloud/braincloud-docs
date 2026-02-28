# MoveUserToGroupFile

Move a file from user space to group space.

<PartialServop service_name="groupFile" operation_name="MOVE_USER_TO_GROUP_FILE" />

## Method Parameters
Parameter | Description
--------- | -----------
userCloudPath | The user file folder.
userCloudFilename | The user file name.
groupId | The id of the group.
groupTreeId | The id of the destination folder.
groupFilename | The group file name.
overwriteIfPresent | Whether to allow overwrite of an existing file if present.
groupFileAcl | The acl of the new group file.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string userCloudPath = "dir1/dir2";
string userCloudFilename = "file";
string groupId = "dfsfsffsd";
string groupTreeId = "gpath";
string groupFilename = "gfile";
bool overwriteIfPresent = true;
string groupFileAcl = "{ \"member\": 2, \"other\": 0 }";
SuccessCallback successCallback = (response, cbObject) =>
{
  Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
  Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GroupFileService.MoveUserToGroupFile(userCloudPath, userCloudFilename, groupId, groupTreeId, groupFilename, overwriteIfPresent, groupFileAcl, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *userCloudPath = "dir1/dir2";
const char *userCloudFilename = "file";
const char *groupId = "dfsfsffsd";
const char *groupTreeId = "gpath";
const char *groupFilename = "gfile";
bool overwriteIfPresent = true;
const char *groupFileAcl = "{ \"member\": 2, \"other\": 0 }";

<%= data.branding.codePrefix %>->getGroupFileService()->moveUserToGroupFile(userCloudPath, userCloudFilename, groupId, groupTreeId, groupFilename, overwriteIfPresent, groupFileAcl, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *userCloudPath = @"dir1/dir2";
NSString *userCloudFilename = @"file";
NSString *groupId = @"dfsfsffsd";
NSString *groupTreeId = @"gpath";
NSString *groupFilename = @"gfile";
bool overwriteIfPresent = true;
NSString *groupFileAcl = "{ \"member\": 2, \"other\": 0 }";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupFileService] moveUserToGroupFile:
                 userCloudPath:userCloudPath
             userCloudFilename:userCloudFilename
                       groupId:groupId
                   groupTreeId:groupTreeId
                 groupFilename:groupFilename
            overwriteIfPresent:overwriteIfPresent
                  groupFileAcl:groupFileAcl
               completionBlock:successBlock
          errorCompletionBlock:failureBlock
                      cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String userCloudPath = "dir1/dir2";
String userCloudFilename = "file";
String groupId = "dfsfsffsd";
String groupTreeId = "gpath";
String groupFilename = "gfile";
bool overwriteIfPresent = true;
String groupFileAcl = "{ \"member\": 2, \"other\": 0 }";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroupFileService().moveUserToGroupFile(userCloudPath, userCloudFilename, groupId, groupTreeId, groupFilename, overwriteIfPresent, groupFileAcl, this);

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
var userCloudPath = "dir1/dir2";
var userCloudFilename = "file";
var groupId = "dfsfsffsd";
var groupTreeId = "gpath";
var groupFilename = "gfile";
var overwriteIfPresent = true;
var groupFileAcl = {
  "member": 2,
  "other": 0
};

<%= data.branding.codePrefix %>.groupFile.moveUserToGroupFile(userCloudPath, userCloudFilename, groupId, groupTreeId, groupFilename, overwriteIfPresent, groupFileAcl, result =>
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
var  userCloudPath = "dir1/dir2";
var  userCloudFilename = "file";
var  groupId = "dfsfsffsd";
var  groupTreeId = "gpath";
var  groupFilename = "gfile";
var  overwriteIfPresent = true;
var  groupFileAcl = {
  "member": 2,
  "other": 0
};

ServerResponse result = await <%= data.branding.codePrefix %>.groupFileService.moveUserToGroupFile(userCloudPath:userCloudPath, userCloudFilename:userCloudFilename, groupId:groupId, groupTreeId:groupTreeId, groupFilename:groupFilename, overwriteIfPresent:overwriteIfPresent, groupFileAcl:groupFileAcl);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
local userCloudPath = "dir1/dir2"
local userCloudFilename = "file"
local groupId = "dfsfsffsd"
local groupTreeId = "gpath"
local groupFilename = "gfile"
local overwriteIfPresent = true
local groupFileAcl = {
  "member": 2,
  "other": 0
}

local callback = function(result)
	if result.statusCode == 200 then
		print("Success")
	else
		print("Failed | " .. tostring(result.status))
	end
end

<%= data.branding.codePrefix %>:getGroupFileService():moveUserToGroupFile(userCloudPath, userCloudFilename, groupId, groupTreeId, groupFilename, overwriteIfPresent, groupFileAcl, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var userCloudPath = "dir1/dir2";
var userCloudFilename = "file";
var groupId = "dfsfsffsd";
var groupTreeId = "gpath";
var groupFilename = "gfile";
var overwriteIfPresent = true;
var groupFileAcl = {
  "member": 2,
  "other": 0
};
var groupFileProxy = bridge.getGroupFileServiceProxy();

var postResult = groupFileProxy.moveUserToGroupFile(userCloudPath, userCloudFilename, groupId, groupTreeId, groupFilename, overwriteIfPresent, groupFileAcl);
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
  "operation": "MOVE_USER_TO_GROUP_FILE",
  "data":
  {
    "userCloudPath": "dir1/dir2",
    "userCloudFilename": "file",
    "groupId": "dfsfsffsd",
    "groupTreeId": "gpath",
    "groupFilename": "gfile",
    "overwriteIfPresent": true,
    "groupFileAcl": {
      "member": 2,
      "other": 0
    }
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
            "treeId": "40479c72-b46b-4c05-902c-239ada116acd",
            "fileName": "glog1.json",
            "fileSize": 8199,
            "dateUploaded": 1677526746000,
            "etag": "93acc8568cee7d0d0836ff6b63b549ab",
            "acl": {
                "member": 2,
                "other": 0
            },
            "version": 1,
            "url": "https://api.internal.braincloudservers.com/groupfiles/bc/g/23782/gr/2bf538d1-19ea-4e14-9862-f979215e09b7/40479c72-b46b-4c05-902c-239ada116acd/4c924070-db15-47d4-a44a-be496bb49f66/V1/glog1.json",
            "fileId": "4c924070-db15-47d4-a44a-be496bb49f66"
        },
        "groupId": "2bf538d1-19ea-4e14-9862-f979215e09b7"
    },
    "status": 200
}
```
</details>

