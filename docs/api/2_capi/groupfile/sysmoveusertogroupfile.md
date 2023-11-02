# SysMoveUserToGroupFile

Move a file from user space to group space.

<PartialServop service_name="groupFile" operation_name="SYS_MOVE_USER_TO_GROUP_FILE" />

## Method Parameters
Parameter | Description
--------- | -----------
userProfileId | The user file owner.
userCloudPath | The user file folder.
userCloudFilename | The user file name.
groupId | The id of the group.
groupTreeId | The id of the destination folder.
groupFilename | The group file name.
groupFileOwnerId | The optional owner id of of the new group file.
overwriteIfPresent | Whether to allow overwrite of an existing file if present.
groupFileAcl | The acl of the new group file.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var userProfileId = "xxxx";
var userCloudPath = "dir1/dir2";
var userCloudFilename = "file";
var groupId = "dfsfsffsd";
var groupTreeId = "gpath";
var groupFilename = "gfile";
var groupFileOwnerId = "gfile";
var overwriteIfPresent = true;
var groupFileAcl = {
  "member": 2,
  "other": 0
};
var groupFileProxy = bridge.getGroupFileServiceProxy();

var postResult = groupFileProxy.sysMoveUserToGroupFile(userProfileId, userCloudPath, userCloudFilename, groupId, groupTreeId, groupFilename, groupFileOwnerId, overwriteIfPresent, groupFileAcl);
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
  "operation": "SYS_MOVE_USER_TO_GROUP_FILE",
  "data":
  {
    "userProfileId": "xxxx",
    "userCloudPath": "dir1/dir2",
    "userCloudFilename": "file",
    "groupId": "dfsfsffsd",
    "groupTreeId": "gpath",
    "groupFilename": "gfile",
    "groupFileOwnerId": "gfile",
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

