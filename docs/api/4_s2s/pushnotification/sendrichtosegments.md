# SendRichToSegments

This operation sends a template based message to multiple user targets.

Example of substitution usage:

Message could be `You have won a {2} for entering the {1} contest`.

Substitutions parameter would be `{ "1" : "User Appreciation", "2", "User Appreciation Prize" }`

### Results

| Name             | Description                       |
| ---------------- | --------------------------------- |
| estimatedTargets | Estimate number of targeted users |

<PartialServop service_name="pushNotification" operation_name="SEND_RICH_TO_SEGMENTS" />

## Method Parameters

| Parameter              | Description                                                            |
| ---------------------- | ---------------------------------------------------------------------- |
| notificationTemplateId | Identifies the template that will determine the message content.       |
| segmentCodeList        | List of target segment codes. Omit to send to all users.               |
| segmentIdList          | Deprecated: list of target segment ids. Use `segmentCodeList` instead. |
| substitutions          | Positional message substitution values.                                |

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
var notificationTemplateId = 1;
var substitutions = {
    "0": "value0",
    "1": "value1"
};
var segments = [
    "high_spenders",
    "lapsed_30d"
];
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.sendRichToSegments(notificationTemplateId, substitutions, segments);
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
    "service": "pushNotification",
    "operation": "SEND_RICH_TO_SEGMENTS",
    "data": {
        "notificationTemplateId": 1,
        "segmentCodeList": [
            "high_spenders",
            "lapsed_30d"
        ],
        "substitutions": {
            "0": "value0",
            "1": "value1"
        }
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
            "data": {
                "estimatedTargets": 1234
            },
            "status": 200
        }
    ]
}
```

</details>
