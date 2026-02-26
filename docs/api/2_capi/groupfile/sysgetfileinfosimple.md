# SysGetFileInfoSimple

Returns information on a file using path and name.

<PartialServop service_name="groupFile" operation_name="SYS_GET_FILE_INFO_SIMPLE" />

## Method Parameters
Parameter | Description
--------- | -----------
groupId | The id of the group.
folderPath | The folder path.
filename | The file name.

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
var folderPath = "";
var filename = "cccc";
var groupFileProxy = bridge.getGroupFileServiceProxy();

var postResult = groupFileProxy.sysGetFileInfoSimple(groupId, folderPath, filename);
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
  "operation": "SYS_GET_FILE_INFO_SIMPLE",
  "data":
  {
    "groupId": "dfsfsffsd",
    "folderPath": "",
    "filename": "cccc"
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

