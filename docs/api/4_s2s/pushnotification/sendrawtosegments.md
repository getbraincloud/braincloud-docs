# SendRawToSegments

This operation sends a raw message to targetted segments.

### Results

| Name             | Description                       |
| ---------------- | --------------------------------- |
| estimatedTargets | Estimate number of targeted users |

<PartialServop service_name="pushNotification" operation_name="SEND_RAW_TO_SEGMENTS" />

## Method Parameters

| Parameter       | Description                                                            |
| --------------- | ---------------------------------------------------------------------- |
| segmentCodeList | List of target segment codes. Omit to send to all users.               |
| segmentIdList   | Deprecated: list of target segment ids. Use `segmentCodeList` instead. |
| fcmContent      | FCM dependent message content.                                         |
| iosContent      | IOS dependent message content.                                         |
| facebookContent | Facebook dependent message content.                                    |

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
var fcmContent = {
    "notification": {
        "body": "content of message",
        "title": "message title"
    },
    "data": {
        "customfield1": "customValue1",
        "customfield2": "customValue2"
    },
    "priority": "normal"
};
var iosContent = {
    "aps": {
        "alert": {
            "body": "content of message",
            "title": "message title"
        },
        "badge": 0,
        "sound": "gggg"
    }
};
var facebookContent = {
    "template": "content of message"
};
var segments = [
    "high_spenders",
    "lapsed_30d"
];
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.sendRawToSegments(fcmContent, iosContent, facebookContent, segments);
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
    "operation": "SEND_RAW_TO_SEGMENTS",
    "data": {
        "segmentCodeList": [
            "high_spenders",
            "lapsed_30d"
        ],
        "fcmContent": {
            "notification": {
                "body": "content of message",
                "title": "message title"
            },
            "data": {
                "customfield1": "customValue1",
                "customfield2": "customValue2"
            },
            "priority": "normal"
        },
        "iosContent": {
            "aps": {
                "alert": {
                    "body": "content of message",
                    "title": "message title"
                },
                "badge": 0,
                "sound": "gggg"
            }
        },
        "facebookContent": {
            "template": "content of message"
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
