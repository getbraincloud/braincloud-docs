# UploadFileFromMemory
## Overview
Upload screenshots from memory instead of local file storage. On success the file will begin uploading to the <%= data.branding.productName %> server.

This method allows uploads to happen in situations where local file access is not possible or convenient. For example, screenshots from Unity-based WebGL apps.




:::tip
UploadFileFromMemory currently only works in Unity WebGL and javaScript HTML interface.
:::

<PartialServop service_name="file" operation_name="PREPARE_USER_UPLOAD" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// N/A
<%= data.branding.codePrefix %>.RegisterFileUploadCallbacks(FileCallbackSuccess, FileCallbackFail);

string cloudPath = "";
string cloudName = "image.png";
bool share = true;
bool overwrite = true;

int width = Screen.width;
int height = Screen.height;
var texture = new Texture2D(width, height, TextureFormat.RGB24, false);
texture.ReadPixels(new Rect(0, 0, width, height), 0, 0);
texture.Apply();
byte[] bytes = texture.EncodeToPNG();

string encodedText = System.Convert.ToBase64String(bytes);

<%= data.branding.codePrefix %>.FileService.UploadFileFromMemory(
    cloudPath,
    cloudName,
    share,
    overwrite,
    encodedText,
    ApiSuccess, ApiError);
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
<TabItem value="objectivec" label="Objective-C">
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
var cloudPath = "";
var cloudName = "image.png";
var share = true;
var overwrite = true;
var encodedText = new Blob(["hello, world!"], {type: 'text/plain'});

<%= data.branding.codePrefix %>.file.UploadFileFromMemory(cloudPath, cloudName, share, overwrite, result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
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

<details>
<summary>JSON Response</summary>

```json
{
    "status": 200,
    "data": {
        "fileDetails": {
            "gameId": "12186",
            "shareable": true,
            "uploadId": "a11e0e65-8843-47a6-a1b7-c4e7a82baa88",
            "replaceIfExists": true,
            "cloudPath": "",
            "expiresAt": 1605641010658,
            "createdAt": 1605036210658,
            "fileSize": 72636,
            "profileId": "bc33dae0-9334-4798-9f4d-a5e99842e8c6",
            "cloudLocation": "bc/g/12186/u/bc33dae0-9334-4798-9f4d-a5e99842e8c6/f/image.png",
            "localPath": "iVBORw0KGgoAAAANSUhEUgAAAQ8AAAEFCAIAAABy...AElFTkSuQmCC",
            "cloudFilename": "image.png",
            "fileType": "User",
            "updatedAt": 1605036210658
        }
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
cloudPath | The desired cloud path of the file
cloudFilename | The desired cloud fileName of the file
shareable | True if the file is shareable
replaceIfExists | Whether to replace file if it exists
encodedText | The converted file data from memory in string format


