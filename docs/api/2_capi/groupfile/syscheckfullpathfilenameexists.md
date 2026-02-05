# SysCheckFullpathFilenameExists

Check if filename exists for provided full path name.

<PartialServop service_name="groupFile" operation_name="SYS_CHECK_FULLPATH_FILENAME_EXISTS" />

## Method Parameters
Parameter | Description
--------- | -----------
groupId | The id of the group.
fullPathFilename | The full file name with path.

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
var fullPathFilename = "cccc";
var groupFileProxy = bridge.getGroupFileServiceProxy();

var postResult = groupFileProxy.sysCheckFullpathFilenameExists(groupId, fullPathFilename);
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
  "operation": "SYS_CHECK_FULLPATH_FILENAME_EXISTS",
  "data":
  {
    "groupId": "dfsfsffsd",
    "fullPathFilename": "cccc"
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

