# SendEvent
## Overview
This service allows you to send events to specified players.




### Results
Name | Description
--------- | -----------
response | Includes evId of sent event

<PartialServop service_name="event" operation_name="SEND" / >

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
var toId = "player1";
var eventType = "type1";
var eventData = {
  "someMapAttribute": "someValue"
};
var eventProxy = bridge.getEventServiceProxy();

var postResult = eventProxy.sendEvent(toId, eventType, eventData);
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
	"operation": "SEND",
	"data": {
		"toId": "player1",
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
    "packetId": 1,
    "messageResponses": [
        {
            "status": 200,
            "data": {
                "response": {
                    "evId": "9789273589757"
                }
            }
        }
    ]
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
toId | Profile Id of user to send event to. 
eventType | User-defined event type (optional.) 
eventData | User defined event data encoded in JSON. 


