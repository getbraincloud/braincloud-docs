# RunBatchUserScript

Runs a script against the users targetted by the provided segments or all players.

<PartialServop service_name="script" operation_name="RUN_BATCH_USER_SCRIPT" />

## Method Parameters

| Parameter       | Description                                                                      |
| --------------- | -------------------------------------------------------------------------------- |
| scriptName      | The name of the script with its path to be run.                                  |
| scriptData      | Data to be sent to the script in JSON format.                                    |
| segmentCodeList | List of target segment codes. Omit, or pass an empty list, to send to all users. |
| segmentIdList   | Legacy: list of target segment ids. Use `segmentCodeList` instead.               |

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
  "parm": "value"
};
var segments = [
    "high_spenders",
    "lapsed_30d"
];
var scriptProxy = bridge.getScriptServiceProxy();

var postResult = scriptProxy.runBatchUserScript(scriptName, scriptData, segments);
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
        "segmentCodeList": [
            "high_spenders",
            "lapsed_30d"
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
