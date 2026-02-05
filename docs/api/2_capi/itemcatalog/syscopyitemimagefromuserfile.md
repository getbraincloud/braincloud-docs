# SysCopyItemImageFromUserFile
Copy item image from global file.

<PartialServop service_name="itemCatalog" operation_name="SYS_COPY_ITEM_IMAGE_FROM_USER_FILE" />

## Method Parameters
Parameter | Description
--------- | -----------
defId | Unique ID identifying catalog item to be updated.
version | Version of catalog item being edited.
userProfileId | The user file owner name.
userCloudPath | The user file folder path.
userCloudFilename | The user file name.
deleteFileAfterwards | Whether to delete the source file. i.e. move or copy.
overwriteIfPresent | Whether to copy over an existing image.

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
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var defId = "sword001";
var version = 1;
var userProfileId = "xxxx";
var userCloudPath = "dir1/dir2";
var userCloudFilename = "file";
var deleteFileAfterwards = False;
var overwriteIfPresent = True;
var itemCatalogProxy = bridge.getItemcatalogServiceProxy();

var postResult = itemCatalogProxy.sysCopyItemImageFromUserFile(defId, version, userProfileId, userCloudPath, userCloudFilename, deleteFileAfterwards, overwriteIfPresent);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"itemCatalog",
    "operation":"SYS_COPY_ITEM_IMAGE_FROM_USER_FILE",
    "data":{
        "defId":"sword001",
        "version":1,
        "userProfileId":"xxxx",
        "userCloudPath":"dir1/dir2",
        "userCloudFilename":"file",
        "deleteFileAfterwards":false,
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
    "data": {
        "image": "https://api.braincloudservers.com/files/portal/g/23782/metadata/itemDefinitions/sword001.png"
    },
    "status": 200
}
```

</details>
