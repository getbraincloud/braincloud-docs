# GetUploadProgress

Returns the progress of the given upload from 0.0 to 1.0 or -1 if upload not found.

:::caution
This will always return 1 on Unity mobile platforms.
:::

## Method Parameters

| Parameter | Description          |
| --------- | -------------------- |
| uploadId  | The id of the upload |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string myUploadId = "1234-1234-1234-1234"; //From UploadFile return data

double progress = <%= data.branding.codePrefix %>.FileService.GetUploadProgress(myUploadId);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* myUploadId = "1234-1234-1234-1234"; //From UploadFile return data

double progress = <%= data.branding.codePrefix %>->getFileService()->getUploadProgress(myUploadId);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString * uploadId = @"1234-1234-1234-1234"; //From UploadFile return data

[[<%= data.branding.codePrefix %> fileService] getUploadProgress:uploadId];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
public double getUploadProgress(String uploadId)
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
var  uploadId = "1234-1234-1234-1234";

ServerResponse result = await <%= data.branding.codePrefix %>.fileService.getUploadProgress(uploadId:uploadId);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
// N/A
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```
