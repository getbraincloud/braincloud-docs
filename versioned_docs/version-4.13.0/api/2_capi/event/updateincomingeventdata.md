# UpdateIncomingEventData
## Overview
Updates an event in the player's incoming event queue.

<PartialServop service_name="event" operation_name="UPDATE_EVENT_DATA" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string evId = "hexString";
string eventData = "{\"someMapAttribute\":\"someValue\"}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.EventService.UpdateIncomingEventData(evId, eventData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *evId = "hexString";
const char *eventData = "{\"someMapAttribute\":\"someValue\"}";
<%= data.branding.codePrefix %>->getEventService()->updateIncomingEventData(evId, eventData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *evId = @"hexString";
NSString *eventData = @"{\"someMapAttribute\":\"someValue\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> eventService] updateIncomingEventData:evId
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
String evId = "hexString";
String eventData = "{\"someMapAttribute\":\"someValue\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getEventService().updateIncomingEventData(evId, eventData, this);

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
var evId = "hexString";
var eventData = {
    "someMapAttribute": "someValue"
};

<%= data.branding.codePrefix %>.event.updateIncomingEventData(evId, eventData, result =>
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
var evId = "hexString";
var eventData = {
    "someMapAttribute": "someValue"
};
var eventProxy = bridge.getEventServiceProxy();

var postResult = eventProxy.updateIncomingEventData(evId, eventData);
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
	"operation": "UPDATE_EVENT_DATA",
	"data": {
		"evId": "hexString",
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
    "status" : 200,
    "data" : null
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
evId | The event ID
eventData | The user-defined data for this event encoded in JSON.


