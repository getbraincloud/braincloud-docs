# UpdateFileInfo

Returns information on a file using fileId.

<PartialServop service_name="groupFile" operation_name="UPDATE_FILE_INFO" />

## Method Parameters
Parameter | Description
--------- | -----------
groupId | The id of the group.
fileId | The id of the file.
version | The target version of the file.
newFilename | The optional new file name.
newAcl | The optional new acl.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string groupId = "dfsfsffsd";
string fileId = "guid";
int version = 1;
string newFilename = "cccc";
string newAcl = "{ \"member\": 2, \"other\": 0 }";
SuccessCallback successCallback = (response, cbObject) =>
{
  Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
  Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GroupFileService.UpdateFileInfo(groupId, fileId, version, newFilename, newAcl, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *groupId = "dfsfsffsd";
const char *fileId = "guid";
int version = 1;
const char *newFilename = "cccc";
const char *newAcl = "{ \"member\": 2, \"other\": 0 }";

<%= data.branding.codePrefix %>->getGroupFileService()->updateFileInfo(groupId, fileId, version, newFilename, newAcl, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *groupId = @"dfsfsffsd";
NSString *fileId = @"guid";
int version = 1;
NSString *newFilename = @"cccc";
NSString *newAcl = "{ \"member\": 2, \"other\": 0 }";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupFileService] updateFileInfo:
                       groupId:groupId
                        fileId:fileId
                       version:version
                   newFilename:newFilename
                        newAcl:newAcl
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
int version = 1;
String newFilename = "cccc";
String newAcl = "{ \"member\": 2, \"other\": 0 }";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroupFileService().updateFileInfo(groupId, fileId, version, newFilename, newAcl, this);

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
var version = 1;
var newFilename = "cccc";
var newAcl = {
  "member": 2,
  "other": 0
};

<%= data.branding.codePrefix %>.groupFile.updateFileInfo(groupId, fileId, version, newFilename, newAcl, result =>
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
var  fileId = "guid";
var  version = 1;
var  newFilename = "cccc";
var  newAcl = {
  "member": 2,
  "other": 0
};

ServerResponse result = await <%= data.branding.codePrefix %>.groupFileService.updateFileInfo(groupId:groupId, fileId:fileId, version:version, newFilename:newFilename, newAcl:newAcl);

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
local groupId = "dfsfsffsd"
local fileId = "guid"
local version = 1
local newFilename = "cccc"
local newAcl = {
  member = 2,
  other = 0
}

local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end

<%= data.branding.codePrefix %>:getGroupFileService():updateFileInfo(groupId, fileId, version, newFilename, newAcl, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var groupId = "dfsfsffsd";
var fileId = "guid";
var version = 1;
var newFilename = "cccc";
var newAcl = {
  "member": 2,
  "other": 0
};
var groupFileProxy = bridge.getGroupFileServiceProxy();

var postResult = groupFileProxy.updateFileInfo(groupId, fileId, version, newFilename, newAcl);
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
  "operation": "UPDATE_FILE_INFO",
  "data":
  {
    "groupId": "dfsfsffsd",
    "fileId": "guid",
    "version": 1,
    "newFilename": "cccc",
    "newAcl": {
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
            "fileName": "glog1newname.json",
            "fileSize": 8199,
            "dateUploaded": 1677526746000,
            "etag": "93acc8568cee7d0d0836ff6b63b549ab",
            "acl": {
                "member": 2,
                "other": 0
            },
            "version": 2,
            "url": "https://api.internal.braincloudservers.com/groupfiles/bc/g/23782/gr/2bf538d1-19ea-4e14-9862-f979215e09b7/40479c72-b46b-4c05-902c-239ada116acd/4c924070-db15-47d4-a44a-be496bb49f66/V2/glog1newname.json",
            "fileId": "4c924070-db15-47d4-a44a-be496bb49f66"
        },
        "groupId": "2bf538d1-19ea-4e14-9862-f979215e09b7"
    },
    "status": 200
}
```
</details>

