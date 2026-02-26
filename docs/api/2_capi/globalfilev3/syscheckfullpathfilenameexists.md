# SysCheckFullpathFilenameExists
Check if filename exists for provided full path name.

<PartialServop service_name="globalFileV3" operation_name="SYS_CHECK_FULLPATH_FILENAME_EXISTS" />

## Method Parameters
Parameter | Description
--------- | -----------
fullPathFilename | The file full path.

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
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var fullPathFilename = "cccc";
var globalFileV3Proxy = bridge.getGlobalfilev3ServiceProxy();

var postResult = globalFileV3Proxy.SysCheckFullpathFilenameExists(fullPathFilename);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"globalFileV3",
    "operation":"SYS_CHECK_FULLPATH_FILENAME_EXISTS",
    "data":{
        "fullPathFilename":"cccc"
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
        "fileDetails": {
            "treeId": "d9e937cc-750f-4414-962c-838f1af3f34a",
            "fileName": "glog.json",
            "fileSize": 7051,
            "dateUploaded": 1677183768000,
            "etag": "08c580b36ee79773bfec4a3c51bd1b64",
            "acl": {
                "member": 2,
                "other": 0
            },
            "version": 1,
            "url": "https://api.internal.braincloudservers.com/groupfiles/bc/g/23782/gr/2bf538d1-19ea-4e14-9862-f979215e09b7/d9e937cc-750f-4414-962c-838f1af3f34a/6d938c22-3b8c-4b99-a913-2edafed71a83/V1/glog.json",
            "fileId": "6d938c22-3b8c-4b99-a913-2edafed71a83"
        },
        "groupId": "2bf538d1-19ea-4e14-9862-f979215e09b7",
        "exists": true
    },
    "status": 200
}
```

</details>

