# SysCheckFilenameExists

Check if filename exists for provided path and name.

<PartialServop service_name="groupFile" operation_name="SYS_CHECK_FILENAME_EXISTS" />

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
<TabItem value="roblox" label="Roblox">
```

```lua
// N/A
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

var postResult = groupFileProxy.sysCheckFilenameExists(groupId, folderPath, filename);
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
  "operation": "SYS_CHECK_FILENAME_EXISTS",
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
            "treeId": "fb3431cd-6e2f-47f1-8100-8941abf6bb4f",
            "fileName": "glogcopy.json",
            "fileSize": 7051,
            "dateUploaded": 1677521119000,
            "etag": "a6f4cd3c065aed36227d3582adc5d952",
            "acl": {
                "member": 2,
                "other": 0
            },
            "version": 2,
            "url": "https://api.internal.braincloudservers.com/groupfiles/bc/g/23782/gr/2bf538d1-19ea-4e14-9862-f979215e09b7/fb3431cd-6e2f-47f1-8100-8941abf6bb4f/6d938c22-3b8c-4b99-a913-2edafed71a83/V2/glogcopy.json",
            "fileId": "6d938c22-3b8c-4b99-a913-2edafed71a83"
        },
        "groupId": "2bf538d1-19ea-4e14-9862-f979215e09b7",
        "exists": true
    },
    "status": 200
}
```
</details>

