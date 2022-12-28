# RunBatchUserScript
## Overview
Runs a script against the users targetted by the provided segments or all players.

<PartialServop service_name="script" operation_name="RUN_BATCH_USER_SCRIPT" / >

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
var scriptName = "path/to/script1";
var scriptData = {
  "parm": "value"
};
var segmentIdList = [
	1,
	2
];
var scriptProxy = bridge.getScriptServiceProxy();

var postResult = scriptProxy.runBatchUserScript(scriptName, scriptData, segmentIdList);
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
	"operation": "RUN_BATCH_USER_SCRIPT",
	"data": {
		"scriptName": "path/to/script1",
		"scriptData": {
			"parm": "value"
		},
		"segmentIdList": [
			1,
			2
		],
		"profileIds": [
			"profileid1",
			"profileid2"
		]
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
	"packetId": 1,
	"messageResponses": [{
		"status": 200,
		"data": {
		}
	}]
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
scriptName | The name of the script with its path to be run. 
scriptData | Data to be sent to the script in JSON format. 
segmentIdList | List of target segments. Omit to send to all users. 


