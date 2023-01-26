# SendRichToSegments
## Overview
This operation sends a template based message to multiple user targets.

Example of substitution usage:

Message could be `You have won a {2} for entering the {1} contest`.

Substitutions parameter would be `{ "1" : "User Appreciation", "2", "User Appreciation Prize" }`





### Results
Name | Description
--------- | -----------
estimatedTargets | Estimate number of targeted users

<PartialServop service_name="pushNotification" operation_name="SEND_RICH_TO_SEGMENTS" / >

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
var notificationTemplateId = 1;
var segmentIdList = [
	1,
	2
];
var substitutions = {
	"0": "value0",
	"1": "value1"
};
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.sendRichToSegments(notificationTemplateId, segmentIdList, substitutions);
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
		"segmentIdList": [
			1,
			2
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
            "status": 200,
            "data": {
                "estimatedTargets": 1234
            }
        }
    ]
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
notificationTemplateId | Identifies the template that will determine the message content. 
segmentIdList | List of target segements. Omit to send to all users. 
substitutions | Positional message substitution values. 


