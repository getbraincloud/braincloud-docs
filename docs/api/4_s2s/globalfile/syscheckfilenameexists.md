# SysCheckFilenameExists

Check if filename exists for provided path and name.

<PartialServop service_name="globalFileV3" operation_name="SYS_CHECK_FILENAME_EXISTS" />

## Method Parameters

| Parameter  | Description      |
| ---------- | ---------------- |
| folderPath | The folder path. |
| filename   | The file name.   |

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
<TabItem value="roblox" label="Roblox">
```

```lua
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var folderPath = "";
var filename = "cccc";
var globalFileV3Proxy = bridge.getGlobalfilev3ServiceProxy();

var postResult = globalFileV3Proxy.SysCheckFilenameExists(folderPath, filename);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"globalFileV3",
    "operation":"SYS_CHECK_FILENAME_EXISTS",
    "data":{
        "folderPath":"",
        "filename":"cccc"
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
            "treeId": "fb3431cd-6e2f-47f1-8100-8941abf6bb4f",
            "fileName": "glogcopy.json",
            "fileSize": 7051,
            "dateUploaded": 1677521119000,
            "etag": "a6f4cd3c065aed36227d3582adc5d952",
            "acl": {
                "member": 2,
                "other": 0
            },
            "version": 2,
            "url": "https://api.internal.braincloudservers.com/groupfiles/bc/g/23782/gr/2bf538d1-19ea-4e14-9862-f979215e09b7/fb3431cd-6e2f-47f1-8100-8941abf6bb4f/6d938c22-3b8c-4b99-a913-2edafed71a83/V2/glogcopy.json",
            "fileId": "6d938c22-3b8c-4b99-a913-2edafed71a83"
        },
        "groupId": "2bf538d1-19ea-4e14-9862-f979215e09b7",
        "exists": true
    },
    "status": 200
}
```

</details>
