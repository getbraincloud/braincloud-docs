# SysUpdateFileInfo

Returns information on a file using fileId.

<PartialServop service_name="groupFile" operation_name="SYS_UPDATE_FILE_INFO" />

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
<TabItem value="dart" label="Dart">
```

```dart
// Cloud Code only. To view example, switch to the Cloud Code tab
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

var postResult = groupFileProxy.sysUpdateFileInfo(groupId, fileId, version, newFilename, newAcl);
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
  "operation": "SYS_UPDATE_FILE_INFO",
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

