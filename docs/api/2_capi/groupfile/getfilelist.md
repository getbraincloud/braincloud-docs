# GetFileList

Returns a list of files.

<PartialServop service_name="groupFile" operation_name="GET_FILE_LIST" />

## Method Parameters
Parameter | Description
--------- | -----------
groupId | The id of the group.
folderPath | The folder path.
recurse | Whether to recurse beyond the starting folder.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string groupId = "dfsfsffsd";
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

<%= data.branding.codePrefix %>.GroupFileService.GetFileList(groupId, folderPath, recurse, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *groupId = "dfsfsffsd";
const char *folderPath = "";
bool recurse = true;

<%= data.branding.codePrefix %>->getGroupFileService()->getFileList(groupId, folderPath, recurse, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *groupId = @"dfsfsffsd";
NSString *folderPath = @"";
bool recurse = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupFileService] getFileList:groupId
                    folderPath:folderPath
                       recurse:recurse
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
bool recurse = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroupFileService().getFileList(groupId, folderPath, recurse, this);

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
var recurse = true;

<%= data.branding.codePrefix %>.groupFile.getFileList(groupId, folderPath, recurse, result =>
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
var  folderPath = "";
var  recurse = true;

ServerResponse result = await <%= data.branding.codePrefix %>.groupFileService.getFileList(groupId:groupId, folderPath:folderPath, recurse:recurse);

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
local folderPath = ""
local recurse = true

local callback = function(result)
	if result.statusCode == 200 then
		print("Success")
	else
		print("Failed | " .. tostring(result.status))
	end
end

<%= data.branding.codePrefix %>:getGroupFileService():getFileList(groupId, folderPath, recurse, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var groupId = "dfsfsffsd";
var folderPath = "";
var recurse = true;
var groupFileProxy = bridge.getGroupFileServiceProxy();

var postResult = groupFileProxy.getFileList(groupId, folderPath, recurse);
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
  "operation": "GET_FILE_LIST",
  "data":
  {
    "groupId": "dfsfsffsd",
    "folderPath": "",
    "recurse": true
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
        "treeVersion": 5,
        "groupId": "2bf538d1-19ea-4e14-9862-f979215e09b7",
        "fileList": {
            "folderPath": "/",
            "treeId": "",
            "folders": {
                "gpathcopy": {
                    "folderPath": "/gpathcopy/",
                    "treeId": "40479c72-b46b-4c05-902c-239ada116acd",
                    "folders": {
                        "gpathcopy": {
                            "folderPath": "/gpathcopy/gpathcopy/",
                            "treeId": "fb3431cd-6e2f-47f1-8100-8941abf6bb4f",
                            "folders": {},
                            "name": "gpathcopy",
                            "files": {
                                "glogcopy.json": {
                                    "fileName": "glogcopy.json",
                                    "fileSize": 7051,
                                    "dateUploaded": 1677521119000,
                                    "acl": {
                                        "member": 2,
                                        "other": 0
                                    },
                                    "version": 2,
                                    "url": "https://api.internal.braincloudservers.com/groupfiles/bc/g/23782/gr/2bf538d1-19ea-4e14-9862-f979215e09b7/fb3431cd-6e2f-47f1-8100-8941abf6bb4f/6d938c22-3b8c-4b99-a913-2edafed71a83/V2/glogcopy.json",
                                    "fileId": "6d938c22-3b8c-4b99-a913-2edafed71a83"
                                },
                                "glogcopy1.json": {
                                    "fileName": "glogcopy1.json",
                                    "fileSize": 7051,
                                    "dateUploaded": 1677527426000,
                                    "acl": {
                                        "member": 2,
                                        "other": 0
                                    },
                                    "version": 1,
                                    "url": "https://api.internal.braincloudservers.com/groupfiles/bc/g/23782/gr/2bf538d1-19ea-4e14-9862-f979215e09b7/fb3431cd-6e2f-47f1-8100-8941abf6bb4f/4fde0d32-c866-473b-bee1-a4565f8d289b/V1/glogcopy1.json",
                                    "fileId": "4fde0d32-c866-473b-bee1-a4565f8d289b"
                                }
                            },
                            "totalFileSize": 14102,
                            "acl": {
                                "member": 2,
                                "other": 0
                            },
                            "totalFileCount": 2,
                            "desc": "desc"
                        }
                    },
                    "name": "gpathcopy",
                    "files": {
                        "glog1newname.json": {
                            "fileName": "glog1newname.json",
                            "fileSize": 8199,
                            "dateUploaded": 1677526746000,
                            "acl": {
                                "member": 2,
                                "other": 0
                            },
                            "version": 2,
                            "url": "https://api.internal.braincloudservers.com/groupfiles/bc/g/23782/gr/2bf538d1-19ea-4e14-9862-f979215e09b7/40479c72-b46b-4c05-902c-239ada116acd/4c924070-db15-47d4-a44a-be496bb49f66/V2/glog1newname.json",
                            "fileId": "4c924070-db15-47d4-a44a-be496bb49f66"
                        }
                    },
                    "totalFileSize": 22301,
                    "acl": {
                        "member": 2,
                        "other": 0
                    },
                    "totalFileCount": 3,
                    "desc": ""
                },
                "gpath": {
                    "folderPath": "/gpath/",
                    "treeId": "59533e64-abc0-4f04-976b-8f395073ea2e",
                    "folders": {
                        "gpath": {
                            "folderPath": "/gpath/gpath/",
                            "treeId": "d9e937cc-750f-4414-962c-838f1af3f34a",
                            "folders": {},
                            "name": "gpath",
                            "files": {},
                            "totalFileSize": 0,
                            "acl": {
                                "member": 2,
                                "other": 0
                            },
                            "totalFileCount": 0,
                            "desc": "desc"
                        }
                    },
                    "name": "gpath",
                    "files": {},
                    "totalFileSize": 0,
                    "acl": {
                        "member": 2,
                        "other": 0
                    },
                    "totalFileCount": 0,
                    "desc": ""
                },
                "foldername": {
                    "folderPath": "/foldername/",
                    "treeId": "97446e50-4e02-49f6-8c86-807137620249",
                    "folders": {
                        "subfoldername": {
                            "folderPath": "/foldername/subfoldername/",
                            "treeId": "625ab492-fad9-4aa6-b174-50ac4344de81",
                            "folders": {},
                            "name": "subfoldername",
                            "files": {
                                "glogcopy1sub.json": {
                                    "fileName": "glogcopy1sub.json",
                                    "fileSize": 7051,
                                    "dateUploaded": 1677528007000,
                                    "acl": {
                                        "member": 2,
                                        "other": 0
                                    },
                                    "version": 1,
                                    "url": "https://api.internal.braincloudservers.com/groupfiles/bc/g/23782/gr/2bf538d1-19ea-4e14-9862-f979215e09b7/625ab492-fad9-4aa6-b174-50ac4344de81/7fcd9c06-c02f-43c7-8df7-db3d4f8207f0/V1/glogcopy1sub.json",
                                    "fileId": "7fcd9c06-c02f-43c7-8df7-db3d4f8207f0"
                                }
                            },
                            "totalFileSize": 7051,
                            "acl": {
                                "member": 2,
                                "other": 0
                            },
                            "totalFileCount": 1,
                            "desc": "subfolderdesc"
                        }
                    },
                    "name": "foldername",
                    "files": {},
                    "totalFileSize": 7051,
                    "acl": {
                        "member": 2,
                        "other": 0
                    },
                    "totalFileCount": 1,
                    "desc": "folderdesc"
                }
            },
            "name": "",
            "files": {
                "glogroot.json": {
                    "fileName": "glogroot.json",
                    "fileSize": 7051,
                    "dateUploaded": 1677528268000,
                    "acl": {
                        "member": 2,
                        "other": 0
                    },
                    "version": 1,
                    "url": "https://api.internal.braincloudservers.com/groupfiles/bc/g/23782/gr/2bf538d1-19ea-4e14-9862-f979215e09b7/df272294-b0ba-4840-90b7-bc97c4c0ce9b/V1/glogroot.json",
                    "fileId": "df272294-b0ba-4840-90b7-bc97c4c0ce9b"
                }
            },
            "totalFileSize": 36403,
            "acl": {
                "member": 2,
                "other": 0
            },
            "totalFileCount": 5,
            "desc": null
        }
    },
    "status": 200
}
```
</details>

