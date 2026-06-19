# SysUploadStream
Upload a global file directly.

<PartialServop service_name="globalFileV3" operation_name="SYS_UPLOAD_STREAM" />

## Method Parameters
Parameter | Description
--------- | -----------
treeId | The id of the folder (optional). Default is the root folder.
filename | The destination file name.
overwriteIfPresent | Whether to allow overwrite of an existing file if present (optional). Default is false.
fileData | Base64 encoded file contents.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var treeId = "xxxx-yyyy-zzzz";
var filename = "myglobalfile.json";
var overwriteIfPresent = True;
var fileData = "alsjfalfjaeiojefjkjbjldjflekf";
var globalFileV3Proxy = bridge.getGlobalfilev3ServiceProxy();

var postResult = globalFileV3Proxy.sysUploadStream(treeId, filename, overwriteIfPresent, fileData);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"globalFileV3",
    "operation":"SYS_UPLOAD_STREAM",
    "data":{
        "treeId":"xxxx-yyyy-zzzz",
        "filename":"myglobalfile.json",
        "overwriteIfPresent":true,
        "fileData":"alsjfalfjaeiojefjkjbjldjflekf"
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
  "fileDetails": {
    "contentMd5": "\"83252e036cd096de9198039e3d19a121\"",
    "treeId": "b6fb0efe-2d15-4a25-b43b-72684d7c788f",
    "fileName": "cloudfilename.txt",
    "fileSize": 36,
    "dateUploaded": 1768152547000,
    "etag": "\"83252e036cd096de9198039e3d19a121\"",
    "version": 1,
    "url": "https://api.braincloudservers.com/files/bc/g/23782/f/b6fb0efe-2d15-4a25-b43b-72684d7c788f/559a430c-078e-4107-9e37-2a74ba2c2fa5/V1/cloudfilename.txt",
    "fileId": "559a430c-078e-4107-9e37-2a74ba2c2fa5"
  }
}
```

</details>
