# GetUploadTotalBytesToTransfer
## Overview
Returns the total number of bytes that will be uploaded or -1 if upload not found.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string myUploadId = "1234-1234-1234-1234"; //From UploadFile return data

int bytes = <%= data.branding.codePrefix %>.FileService.GetUploadTotalBytesToTransfer(myUploadId);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* myUploadId = "1234-1234-1234-1234"; //From UploadFile return data

int64_t bytes = <%= data.branding.codePrefix %>->getFileService()->
    getUploadTotalBytesToTransfer(myUploadId);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString * myUploadId = @"1234-1234-1234-1234"; //From UploadFile return data

[[<%= data.branding.codePrefix %> fileService] getUploadTotalBytesToTransfer:myUploadId];
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
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
// N/A
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

## Method Parameters
Parameter | Description
--------- | -----------
uploadId | The id of the upload


