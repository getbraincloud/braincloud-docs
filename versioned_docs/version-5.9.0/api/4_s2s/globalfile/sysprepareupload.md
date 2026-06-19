# SysPrepareUpload
Prepare for the uploading of a global file.

<PartialServop service_name="globalFileV3" operation_name="SYS_PREPARE_UPLOAD" />

## Method Parameters
Parameter | Description
--------- | -----------
treeId | The id of the folder (optional). Defaults to root folder.
filename | The destination file name.
fileSize | File size (in bytes) to be uploaded.
overwriteIfPresent | Whether to allow overwrite of an existing file if present (optional). Defaults to false.

:::tip
Using these results (specifically the `uploadUrl` value from the repspnse of `SysPrepareUpload`), to finally upload the file. The following template can be used to upload the file

```shell
curl -X POST "https://api.braincloudservers.com/s2suploader/globalfile/upload?gameId=23782&uploadId=6b24c759-6c9f-44b7-a8d5-a493f3d4b6cb&filename=testfile.txt&overwriteIfPresent=true&fileSize=352" -F "file=@testfile.txt"
```

:::

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
var fileSize = 47;
var overwriteIfPresent = True;
var globalFileV3Proxy = bridge.getGlobalfilev3ServiceProxy();

var postResult = globalFileV3Proxy.sysPrepareUpload(treeId, filename, fileSize, overwriteIfPresent);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"globalFileV3",
    "operation":"SYS_PREPARE_UPLOAD",
    "data":{
        "treeId":"xxxx-yyyy-zzzz",
        "filename":"myglobalfile.json",
        "fileSize":47,
        "overwriteIfPresent":true
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
    "gameId": "23782",
    "shareable": false,
    "uploadId": "4848d54f-c8f9-4c7e-9ab4-8c68c040cf95",
    "replaceIfExists": true,
    "cloudPath": "_root_",
    "expiresAt": 1768671291708,
    "createdAt": 1768066491708,
    "uploadUrl": "/s2suploader/globalfile/upload?gameId=23782&uploadId=4848d54f-c8f9-4c7e-9ab4-8c68c040cf95&filename=before.json&overwriteIfPresent=true&fileSize=352",
    "fileSize": 352,
    "profileId": "_S2S_",
    "localPath": null,
    "cloudFilename": "before.json",
    "fileType": "Global",
    "updatedAt": 1768066491708
  }
}
```

</details>
