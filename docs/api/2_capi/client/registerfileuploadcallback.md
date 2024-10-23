# RegisterFileUploadCallback

Registers the file upload callbacks.

## Method Parameters

| Parameter          | Description                       |
| ------------------ | --------------------------------- |
| fileUploadCallback | The file upload callback handler. |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
<%= data.branding.codePrefix %>.RegisterFileUploadCallbacks(successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->registerFileUploadCallback(this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
fileUploadCompletedBlock = ^(NSString *fileUploadId, NSString *jsonResponse) { };

fileUploadFailedBlock = ^(NSString *fileUploadId, NSInteger status, NSInteger reasonCode, NSString *jsonResponse) { };

[<%= data.branding.codePrefix %> registerFileUploadCallback:fileUploadCompletedBlock failedBlock:fileUploadFailedBlock];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
<%= data.branding.codePrefix %>.registerFileUploadCallback(callback);
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

```r
// N/A
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

<details>
<summary>JSON Response</summary>

```json
// SUCCESS JSON
{
    "status": 200,
    "data": {
        "fileDetails": {
            "updatedAt": 1452616408147,
            "fileSize": 100,
            "expiresAt": 1452702808146,
            "shareable": true,
            "createdAt": 1452616408147,
            "profileId": "bf8a1433-62d2-448e-b396-f3dbffff44",
            "gameId": "99999",
            "cloudFilename": "filename",
            "cloudLocation": "bc/g/99999/u/bf8a1433-62d2-448e-b396-f3dbffff44/f/dir1/dir2/filename",
            "downloadUrl": "https://api.braincloudservers.com/downloader/bc/g/99999/u/bf8a1433-62d2-448e-b396-f3dbffff44/f/dir1/dir2/filename",
            "cloudPath": "dir1/dir2",
        }
    }
}

// FAILURE JSON
{
	"status": 403,
	"reason_code": 40300,
	"status_message": "Message describing failure",
	"severity": "ERROR"
}
```

</details>
