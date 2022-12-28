# SysDeleteGlobalFile
## Overview
Deletes the specified global file.

<PartialServop service_name="globalFileV3" operation_name="SYS_DELETE_GLOBAL_FILE" / >

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
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var fileId = "hjvfsghguhuhrtghgh";
var version = 1;
var filename = "testFile2.txt";

var globalFileProxy = bridge.getGlobalFileV3ServiceProxy();

var postResult = globalFileProxy.sysDeleteGlobalFile(fileId, version, filename );
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
	"operation": "SYS_DELETE_GLOBAL_FILE",
	"data": {
        "fileId": "8d2e30b0-6308-4aeb-ac6a-68e4a458365b",
        "version": 1,
        "filename": "testFile2.txt"
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
            "treeId": "",
            "fileName": "testFile3.txt",
            "version": 1,
            "fileId": "8d2e30b0-6308-4aeb-ac6a-68e4a458365b"
        }
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
fileId | The id of the file
version | The version of the file
filename | The filename of the file (provided as a check)


