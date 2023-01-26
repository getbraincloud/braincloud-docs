# SysGetGlobalCDNUrl
## Overview
Returns the CDN URL for the specified file.

<PartialServop service_name="globalFileV3" operation_name="SYS_GET_GLOBAL_CDN_URL" / >

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
var globalFileProxy = bridge.getGlobalFileV3ServiceProxy();

var postResult = globalFileProxy.sysGetGlobalCDNUrl(fileId);
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
	"operation": "SYS_GET_GLOBAL_CDN_URL",
	"data": {
		"fileId": "hjvfsghguhuhrtghgh"
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
        "appServerUrl": "https://api.braincloudservers.com/...f434b1db538b/f/uploadsimplefile.txt",
        "cdnUrl": "https://d2b6zwnvr1nyug.cloudfront.net/bc/g/20001/u/107b3aa9-0d9f-4e90-af..."
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
fileId | File ID


