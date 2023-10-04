# SysCopyFile

Copy a file.

<PartialServop service_name="groupFile" operation_name="SYS_COPY_FILE" />

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
var groupId = "dfsfsffsd";
var fileId = "xxxx";
var version = 1;
var newTreeId = "guid";
var treeVersion = 1;
var newFilename = "gfile";
var overwriteIfPresent = true;
var groupFileProxy = bridge.getGroupFileServiceProxy();

var postResult = groupFileProxy.sysCopyFile(groupId, fileId, version, newTreeId, treeVersion, newFilename, overwriteIfPresent);
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
  "operation": "SYS_COPY_FILE",
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


