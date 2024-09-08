# SysSendEventRTTOnly

Sends an event to the designated user ID with the attached json data. Will only deliver the event via RTT. Will not persist the event.

:::tip
The blank evId from the response indicates that the event has not been persisted and is in fact RTT-only.
:::

<PartialServop service_name="event" operation_name="SYS_SEND_RTT_ONLY" />

## Method Parameters
Parameter | Description
--------- | -----------
toId | The id of the player who is being sent the event.
eventType | The user-defined type of the event.
eventData | The user-defined data for this event encoded in JSON.

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
var toId = "profile1";
var eventType = "type1";
var eventData = {
  "someMapAttribute": "someValue"
};
var eventProxy = bridge.getEventServiceProxy();

var postResult = eventProxy.sysSendEventRTTOnly(toId, eventType, eventData);
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
  "service": "event",
  "operation": "SYS_SEND_RTT_ONLY",
  "data":
  {
    "toId": "profile1",
    "eventType": "type1",
    "eventData": {
      "someMapAttribute": "someValue"
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
  "data": {
    "evId": ""
  },
  "status": 200
}
```
</details>

