# SysSendEventToProfiles

Sends an event to multiple users with the attached json data.

<PartialServop service_name="event" operation_name="SYS_SEND_EVENT_TO_PROFILES" />

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
<TabItem value="dart" label="Dart">
```

```dart
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var toIds = [
    "profileId1",
    "profileId2"
];
var eventType = "type1";
var eventData = {
    "someMapAttribute": "someValue"
};
var fromProfileId = "sendersProfileId";
var eventProxy = bridge.getEventServiceProxy();

var postResult = eventProxy.SysSendEventToProfiles(toIds, eventType, eventData, fromProfileId);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"event",
    "operation":"SYS_SEND_EVENT_TO_PROFILES",
    "data":{
        "toIds":[
            "profileId1",
            "profileId2"
        ],
        "eventType":"type1",
        "eventData":{
            "someMapAttribute":"someValue"
        },
        "fromProfileId":"sendersProfileId"
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
        "errorProfiles": [],
        "errorCount": 0,
        "sentCount": 2
    },
    "status": 200
}
```

</details>

## Method Parameters
Parameter | Description
--------- | -----------
toIds | The profile ids of the users to send the event.
eventType | The user-defined type of the event.
eventData | The user-defined data for this event encoded in JSON.
fromProfileId | Profile id of the user/system triggering the event. Accepted values are the session profile id or, to send as system event, specify null or 'System'.
