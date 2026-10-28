# PrepareUserUpload - CloudCode and JavaScript

Prepares a user file upload. On success an uploadId will be returned which can be used to upload the file using the <%= data.branding.codePrefix %>.file.uploadFile method.



<PartialServop service_name="file" operation_name="PREPARE_USER_UPLOAD" />

## Method Parameters
Parameter | Description
--------- | -----------
cloudPath | The desired cloud path of the file
cloudFilename | The desired cloud fileName of the file
shareable | True if the file is shareable
replaceIfExists | Whether to replace file if it exists
fileSize | The size of the file in bytes
localPath | The path and fileName of the local file

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Obj-C">
```

```objectivec
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var shareable = true;
var replaceIfExists = true;
var file = document.getElementById('fileToUpload').files[0];
var fileSize = file.size;

<%= data.branding.codePrefix %>.file.prepareFileUpload(
            "cloudPath", "cloudFilename", shareable, replaceIfExists, fileSize,
            function(result) {
                if (result.status == 200) {
                    var uploadId = result.data.fileDetails.uploadId;
                    <%= data.branding.codePrefix %>.file.uploadFile(xhr, file, uploadId);
                }
            }
        );
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
local cloudPath = "test/path"
local cloudFilename = "file.txt"
local shareable = true
local replaceIfExists = false
local fileSize = 1024

local callback = function(success, response)
    if success then
        print("Success")
    else
        print("Failed | " .. tostring(response.status_message))
    end
end

-- Roblox can't stream a multi-part upload; <%= data.branding.codePrefix %>.file:uploadFileFromMemory() does both steps
<%= data.branding.codePrefix %>.file:prepareUserUpload(cloudPath, cloudFilename, shareable, replaceIfExists, fileSize, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="gdscript" label="GDScript">
```

```gdscript
N/A
```

```mdx-code-block
</TabItem>
<TabItem value="lua" label="Lua">
```

```lua
local cloudPath = "cloudPath"
local cloudFilename = "cloudFilename"
local shareable = true
local replaceIfExists = true
local fileData = love.filesystem.read("save.dat")
local fileSize = #fileData

-- The uploader answers with an HTTP status code and the raw response body.
local uploadCallback = function(code, body)
    if code == 200 then
        print("Uploaded")
    else
        print("Upload failed | " .. tostring(code) .. " " .. tostring(body))
    end
end

<%= data.branding.codePrefix %>.file:prepareUserUpload(cloudPath, cloudFilename, shareable, replaceIfExists, fileSize, function(success, response)
    if success then
        -- send the bytes to the upload slot
        local uploadId = response.data.fileDetails.uploadId
        <%= data.branding.codePrefix %>.client:uploadFile(uploadId, cloudFilename, fileData, uploadCallback)
    else
        print("Failed | " .. tostring(response.status_message))
    end
end)

-- <%= data.branding.codePrefix %>.file:uploadFile() and uploadFileFromMemory() do both steps for you.
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var cloudPath = "test/files/"
var cloudName = "testCloudFile.dat"
var shareable = true;
var replaceIfExists = true;
var fileSize = 256;
var localPath = "path/to/my/file.dat";

var fileProxy = bridge.getFileServiceProxy();
var retVal = fileProxy.prepareUserUpload(cloudPath, cloudName, shareable, replaceIfExists, fileSize, localPath);
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
{
    "data":{
        "fileDetails":{
            "updatedAt":1452616408147,
            "fileSize":100,
            "fileType":"User",
            "expiresAt":1452702808146,
            "shareable":true,
            "uploadId":"cf9a075c-587e-4bd1-af0b-eab1a79b958f",
            "createdAt":1452616408147,
            "profileId":"bf8a1433-62d2-448e-b396-f3dbffff44",
            "gameId":"99999",
            "path":"dir1/dir2",
            "filename":"filename",
            "replaceIfExists":true,
            "cloudPath":"bc/g/99999/u/bf8a1433-62d2-448e-b396-f3dbffff44/f/dir1/dir2/filename"
        }
    },
    "status":200
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40429 | UPLOAD_FILE_TOO_LARGE | File maximum file size exceeded
40430 | FILE_ALREADY_EXISTS | File exists, replaceIfExists not set

</details>


