# CancelUpload

Method cancels an upload. If a File Upload Callback has been registered with the <%= data.branding.codeClient %> class, the fileUploadFailed callback method will be called once the upload has been canceled.

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

<%= data.branding.codePrefix %>.FileService.CancelUpload(myUploadId);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* myUploadId = "1234-1234-1234-1234"; //From UploadFile return data

<%= data.branding.codePrefix %>->getFileService()->cancelUpload(myUploadId);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString * myUploadId = @"1234-1234-1234-1234"; //From UploadFile return data

[[<%= data.branding.codePrefix %> fileService] cancelUpload:myUploadId];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
 public void cancelUpload(String uploadId)
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

ServerResponse result = await <%= data.branding.codePrefix %>.fileService.cancelUpload(uploadId:uploadId);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
local uploadId = "1234-1234-1234-1234"

local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end

<%= data.branding.codePrefix %>:getFileService():cancelUpload(uploadId, callback)
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
