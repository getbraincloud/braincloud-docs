# SendEvent
## Overview
Sends an event to the designated profile id with the attached JSON data.

Any events that have been sent to a user will show up in their incoming event queue.



:::tip
Note that the list of sent and incoming events for a user is also returned in the "ReadUserState" call (in the UserState module).
:::

<PartialServop service_name="event" operation_name="SEND" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string toId = "profile1";
string eventType = "type1";
string eventData = "{\"someMapAttribute\":\"someValue\"}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.EventService.SendEvent(toId, eventType, eventData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *toId = "profile1";
const char *eventType = "type1";
const char *eventData = "{\"someMapAttribute\":\"someValue\"}";
<%= data.branding.codePrefix %>->getEventService()->sendEvent(toId, eventType, eventData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *toId = @"profile1";
NSString *eventType = @"type1";
NSString *eventData = @"{\"someMapAttribute\":\"someValue\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> eventService] sendEvent:toId
                  eventType:eventType
                  eventData:eventData
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String toId = "profile1";
String eventType = "type1";
String eventData = "{\"someMapAttribute\":\"someValue\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getEventService().sendEvent(toId, eventType, eventData, this);

public void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)
{
    System.out.print(String.format("Success | %s", jsonData.toString()));
}
public void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)
{
    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));
}
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var toId = "profile1";
var eventType = "type1";
var eventData = {
    "someMapAttribute": "someValue"
};

<%= data.branding.codePrefix %>.event.sendEvent(toId, eventType, eventData, result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
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
	"status": 200,
	"data": {
		"evId": "1234-1234-1234-1234"
	}
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
toProfileId | The id of the player who is being sent the event
eventType | The user-defined type of the event.
eventData | The user-defined data for this event encoded in JSON.


