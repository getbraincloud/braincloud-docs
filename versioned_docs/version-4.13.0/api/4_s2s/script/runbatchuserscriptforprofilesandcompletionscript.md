# RunBatchUserScriptForProfilesAndCompletionScript
## Overview
Runs a script against the users targetted by the provided profile ids and then a completion script at the end.

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
  "queryStat": "xp"
};
var profileIds = [
	"aaaa-bbbb-cccc-dddd-eeee",
	"ffff-gggg-hhhh-iiii-jjjj"
];
var completionScript = "path/to/script2";

var scriptProxy = bridge.getScriptServiceProxy();

var postResult = scriptProxy.runBatchUserScriptForProfilesAndCompletionScript(scriptName, scriptData, profileIds, completionScript);
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
		"scriptName": "calcUser",
		"scriptData": {
			"queryStat": "xp"
		},
		"profileIds": [
			"aaaa-bbbb-cccc-dddd-eeee",
			"ffff-gggg-hhhh-iiii-jjjj"
		],
		"completionScript": "processResults"
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
scriptName | The name of the script with its path to be run against *each user* 
scriptData | Data to be sent to the script in JSON format.
profileIds | Array of profileIds to run the *user script* against
completionScript| The name of the script with its path to be run *once*, *after* all users have been processed.


