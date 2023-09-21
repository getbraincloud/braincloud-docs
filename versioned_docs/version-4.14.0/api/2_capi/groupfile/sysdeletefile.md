# SysDeleteFile
## Overview
Delete a file.

<PartialServop service_name="groupFile" operation_name="SYS_DELETE_FILE" />

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
var groupId = "dfsfsffsd";
var fileId = "xxxx";
var version = 1;
var filename = "gfile";
var groupFileProxy = bridge.getGroupFileServiceProxy();

var postResult = groupFileProxy.sysDeleteFile(groupId, fileId, version, filename);
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
  "service": "groupFile",
  "operation": "SYS_DELETE_FILE",
  "data":
  {
    "groupId": "dfsfsffsd",
    "fileId": "xxxx",
    "version": 1,
    "filename": "gfile"
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
      "version": 1,
      "fileId": "0554430e-51a1-44d4-b6f4-bffae67185dc"
    },
    "groupId": "2bf538d1-19ea-4e14-9862-f979215e09b7"
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
groupId | The id of the group.
fileId | The id of the file.
version | The target version of the file.
filename | The file name for verification purposes.


