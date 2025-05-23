# SysGetFileInfo

Returns information on the specified file.

<PartialServop service_name="globalFileV3" operation_name="SYS_GET_FILE_INFO" />

## Method Parameters

| Parameter | Description |
| --------- | ----------- |
| fileId    | File ID     |

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
var fileId = "hjvfsghguhuhrtghgh";
var globalFileProxy = bridge.getGlobalFileV3ServiceProxy();

var postResult = globalFileProxy.sysGetFileInfo(fileId);
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
	"service": "globalFileV3",
	"operation": "SYS_GET_FILE_INFO",
	"data": {
		"fileId": "hjvfsghguhuhrtghgh"
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
    "status": 200,
    "data": {
        "fileDetails": {
            "fileId": "4d0b8945-41f8-4a2b-a2f5-e9c0b2482bc6",
            "contentMd5": "0snE+wsqo2XeseZbT5kLyQ==",
            "treeId": "ff81c691-5683-4aa0-addb-6f89ecd3ce75",
            "fileName": "sub12file1",
            "fileSize": 64,
            "dateUploaded": 1586975354000,
            "etag": "d2c9c4fb0b2aa365deb1e65b4f990bc9",
            "version": 1,
            "url": "https://api.braincloudservers.com/files/bc/g/23302/f/xxxx-xxx-xxx-xxx/yyy-yyy-yyy-yyy/V1/sub12file1"
        }
    }
}
```

</details>
