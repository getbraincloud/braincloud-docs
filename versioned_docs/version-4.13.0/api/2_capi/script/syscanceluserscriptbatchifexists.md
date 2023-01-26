# SysCancelUserScriptBatchIfExists
## Overview
Cancels a user script batch, if it exists and is in Scheduled, Queued or Running state.

<PartialServop service_name="script" operation_name="SYS_CANCEL_USER_SCRIPT_BATCH_IF_EXISTS" / >

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
var jobId = "idsfihihfuvhvuh";
var scriptProxy = bridge.getScriptServiceProxy();

var postResult = scriptProxy.sysCancelUserScriptBatchIfExists(jobId);
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
  "service": "script",
  "operation": "SYS_CANCEL_USER_SCRIPT_BATCH_IF_EXISTS",
  "data":
  {
    "jobId": "idsfihihfuvhvuh"
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
    "cancelled": 1
  },
  "apiCount": 1,
  "totalCount": 0,
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
jobId | The id of the job to cancel.


