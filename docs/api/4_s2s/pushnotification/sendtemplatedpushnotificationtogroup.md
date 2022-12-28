# SendTemplatedPushNotificationToGroup
## Overview
Sends a notification to a "group" of user based on a <%= data.branding.productName %> portal configured notification template. Includes JSON defining the substitution params to use with the template.

See the Portal documentation for more info.

Example of substitution usage:

Message could be `You have won a {2} for entering the {1} contest`.

Substitutions parameter would be `{ "1" : "User Appreciation", "2", "User Appreciation Prize" }`

<PartialServop service_name="pushNotification" operation_name="SEND_TEMPLATED_TO_GROUP" / >

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
var notificationTemplateId = 1;
var substitutions = {
	"0": "value0",
	"1": "value1"
};
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.sendTemplatedPushNotificationToGroup(groupId, senderId, notificationTemplateId, substitutions);
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
	"operation": "SEND_TEMPLATED_TO_GROUP",
	"data": {
		"groupId": "group1",
		"senderId": "playerId",
		"notificationTemplateId": 1,
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
notificationTemplateId | The template to use. 
substitutions | Map of substitution positions to strings. 


