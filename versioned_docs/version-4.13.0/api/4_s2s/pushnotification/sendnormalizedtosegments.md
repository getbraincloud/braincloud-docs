# SendNormalizedToSegments
## Overview
This operation sends a normalized message to multiple user targets.





### Results
Name | Description
--------- | -----------
estimatedTargets | Estimate number of targeted users

<PartialServop service_name="pushNotification" operation_name="SEND_NORMALIZED_TO_SEGMENTS" / >

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
var alertContent = {
	"body": "content of message",
	"title": "message title"
};
var customData = {
	"field1": "value1",
	"field2": "value2"
};
var segmentIdList = [
	1,
	2
];
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.sendNormalizedToSegments(alertContent, customData, segmentIdList);
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
	"operation": "SEND_NORMALIZED_TO_SEGMENTS",
	"data": {
		"alertContent": {
			"body": "content of message",
			"title": "message title"
		},
		"customData": {
			"field1": "value1",
			"field2": "value2"
		},
		"segmentIdList": [
			1,
			2
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
alertContent | Body and title of message in JSON format. 
customData | Custom parameters to include in message. 
segmentIdList | List of target segments. Omit to send to all users. 


