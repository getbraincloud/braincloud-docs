# RunBatchUserScriptForSegmentsAndCompletionScript

Runs a script against the users in the specified segments, and then a completion script at the end.

<PartialServop service_name="script" operation_name="RUN_BATCH_USER_SCRIPT" />

## Method Parameters

| Parameter        | Description                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------------- |
| scriptName       | The name of the script with its path to be run against _each user_                            |
| scriptData       | Data to be sent to the script in JSON format.                                                 |
| segmentIdList    | Array of segments that identify the users to run the _user script_ against                    |
| completionScript | The name of the script with its path to be run _once_, _after_ all users have been processed. |

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
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var scriptName = "path/to/script1";
var scriptData = {
  "queryStat": "xp"
};
var segmentIdList = [
	1,
	2
];
var completionScript = "path/to/script2";

var scriptProxy = bridge.getScriptServiceProxy();

var postResult = scriptProxy.runBatchUserScriptForSegmentsAndCompletionScript(scriptName, scriptData, segmentIdList, completionScript);
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
		segmentIdList = [
			1,
			2
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
    "messageResponses": [
        {
            "status": 200,
            "data": {}
        }
    ]
}
```

</details>
