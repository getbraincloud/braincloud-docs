# CheckFilenameExists
## Overview
Check if filename exists for provided path and name.

<PartialServop service_name="globalFileV3" operation_name="CHECK_FILENAME_EXISTS" / >

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
var folderPath = "folder1";
var filename = "leaderboardpng";
var globalFileProxy = bridge.getGlobalFileV3ServiceProxy();

var postResult = globalFileProxy.checkFilenameExists(folderPath, filename);
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
	"operation": "CHECK_FILENAME_EXISTS",
	"data": {
        "folderPath": "folder1",
        "filename": "filename"
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
    "exists": true
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
folderPath | File located cloud path/folder
filename | File cloud name


