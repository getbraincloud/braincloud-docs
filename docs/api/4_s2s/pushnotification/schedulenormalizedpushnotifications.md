# ScheduleNormalizedPushNotifications

Schedules normalized notifications based on user local time.

### Results

| Name             | Description                                     |
| ---------------- | ----------------------------------------------- |
| notificationJobs | Number of notification jobs/time zones targeted |

<PartialServop service_name="pushNotification" operation_name="SCHEDULE_NORMALIZED_NOTIFICATIONS" />

## Method Parameters

| Parameter       | Description                                                                             |
| --------------- | --------------------------------------------------------------------------------------- |
| alertContent    | Body and title of message in JSON format.                                               |
| customData      | Custom attributes of message.                                                           |
| segmentCodeList | List of target segment codes. Required, unless the deprecated `segmentIdList` is given. |
| segmentIdList   | Deprecated: list of target segment ids. Use `segmentCodeList` instead.                  |
| localTime       | The scheduled local arrival time.                                                       |
| minimizeJobs    | Optional flag to cause the server to scan players time zones to reduce scope.           |
| startDateUTC    | Optional base date for local time calculation.                                          |

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
var alertContent = {
    "body": "content of message",
    "title": "message title"
};
var customData = {
    "field1": "value1",
    "field2": "value2"
};
var segments = [
    "high_spenders",
    "lapsed_30d"
];
var localTime = "15:00";
var minimizeJobs = true;
var startDateUTC = 1437579786000;
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.scheduleNormalizedPushNotifications(alertContent, customData, segments, localTime, minimizeJobs, startDateUTC);
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
    "operation": "SCHEDULE_NORMALIZED_NOTIFICATIONS",
    "data": {
        "alertContent": {
            "body": "content of message",
            "title": "message title"
        },
        "customData": {
            "field1": "value1",
            "field2": "value2"
        },
        "segmentCodeList": [
            "high_spenders",
            "lapsed_30d"
        ],
        "localTime": "15:00",
        "minimizeJobs": true,
        "startDateUTC": 1437579786000
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
                "notificationJobs": 3
            },
            "status": 200
        }
    ]
}
```

</details>
