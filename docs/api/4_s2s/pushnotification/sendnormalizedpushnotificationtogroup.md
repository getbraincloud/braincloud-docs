# SendNormalizedPushNotificationToGroup
## Overview
Sends a notification to a "group" of user consisting of alert content and custom data.

See the Portal documentation for more info.

<PartialServop service_name="pushNotification" operation_name="SEND_NORMALIZED_TO_GROUP" / >

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
var groupId = "group1";
var senderId = "playerId";
var alertContent = {
	"body": "content of message",
	"title": "message title"
};
var customData = {
	"field1": "value1",
	"field2": "value2"
};
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.sendNormalizedPushNotificationToGroup(groupId, senderId, alertContent, customData);
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
	"operation": "SEND_NORMALIZED_TO_GROUP",
	"data": {
		"groupId": "group1",
		"senderId": "playerId",
		"alertContent": {
			"body": "content of message",
			"title": "message title"
		},
		"customData": {
			"field1": "value1",
			"field2": "value2"
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
            "status": 200,
            "data": null
        }
    ]
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
groupId | The target group. 
senderId | Optional id of sender. 
alertContent | Body and title of alert. 
customData | Optional custom data. 


