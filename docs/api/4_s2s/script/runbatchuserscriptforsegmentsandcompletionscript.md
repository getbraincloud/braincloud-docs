# RunBatchUserScriptForSegmentsAndCompletionScript

Runs a script against the users in the specified segments, and then a completion script at the end.

<PartialServop service_name="script" operation_name="RUN_BATCH_USER_SCRIPT" />

## Method Parameters

| Parameter        | Description                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------------- |
| scriptName       | The name of the script with its path to be run against _each user_                            |
| scriptData       | Data to be sent to the script in JSON format.                                                 |
| segmentCodeList  | Array of segment codes that identify the users to run the _user script_ against               |
| segmentIdList    | Deprecated: array of segment ids. Use `segmentCodeList` instead.                              |
| completionScript | The name of the script with its path to be run _once_, _after_ all users have been processed. |

:::warning
`segmentIdList` is deprecated. Use `segmentCodeList` instead. Segment ids are assigned separately in each environment, so the same id can refer to a different segment after an app is copied or promoted, and new apps reject segment ids in cloud code.
:::

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
<TabItem value="objectivec" label="Obj-C">
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
-- N/A
```

```mdx-code-block
</TabItem>
<TabItem value="gdscript" label="GDScript">
```

```gdscript
N/A
```

```mdx-code-block
</TabItem>
<TabItem value="lua" label="Lua">
```

```lua
-- S2S call: to view example, switch to the Cloud Code or Raw tab.
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
var segments = [
    "high_spenders",
    "lapsed_30d"
];
var completionScript = "path/to/script2";

var scriptProxy = bridge.getScriptServiceProxy();

var postResult = scriptProxy.runBatchUserScriptForSegmentsAndCompletionScript(scriptName, scriptData, segments, completionScript);
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
        "segmentCodeList": [
            "high_spenders",
            "lapsed_30d"
        ],
        "completionScriptName": "processResults"
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
            "data": {},
            "status": 200
        }
    ]
}
```

</details>

<details>
<summary>Common Error Code</summary>

### Status Codes

| Code  | Name                      | Description                                          |
| ----- | ------------------------- | ---------------------------------------------------- |
| 40793 | INVALID_SEGMENT_ID_LIST   | None of the segment ids match a segment in the app   |
| 41056 | INVALID_SEGMENT_CODE_LIST | None of the segment codes match a segment in the app |

</details>
