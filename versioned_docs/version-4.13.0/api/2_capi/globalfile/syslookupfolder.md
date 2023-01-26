# SysLookupFolder
## Overview
Returns the treeId for the specified folder.

<PartialServop service_name="globalFileV3" operation_name="SYS_LOOKUP_FOLDER" / >

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
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var globalFileProxy = bridge.getGlobalFileV3ServiceProxy();

var fullFolderPath = "audio/xxx/tempdir";

var postResult = globalFileProxy.sysLookupFolder(fullFolderPath);
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
	"operation": "SYS_LOOKUP_FOLDER",
	"data": {
		"fullFolderPath": "audio/xxx/tempdir"
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
        "treeId": "56b1c593-92d2-4e49-a997-0e493111d7b2",
        "folderPath": "audio/xxx/tempdir",
        "treeVersion": 3
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
fullFolderPath | Fully folder path to lookup


