# DeleteIncomingEventsByTypeOlderThan
## Overview
Delete any events of the given type older than the given date out of the user's incoming mailbox.

<PartialServop service_name="event" operation_name="DELETE_INCOMING_EVENTS_BY_TYPE_OLDER_THAN" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string eventType = "my-event-type";
int dateMillis = 1619804426154;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.EventService.DeleteIncomingEventsByTypeOlderThan(eventType, dateMillis, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *eventType = "my-event-type";
int dateMillis = 1619804426154;
<%= data.branding.codePrefix %>->getEventService()->deleteIncomingEventsByTypeOlderThan(eventType, dateMillis, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *eventType = @"my-event-type";
int dateMillis = 1619804426154;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> eventService] deleteIncomingEventsByTypeOlderThan:eventType
                 dateMillis:dateMillis
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String eventType = "my-event-type";
int dateMillis = 1619804426154;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getEventService().deleteIncomingEventsByTypeOlderThan(eventType, dateMillis, this);

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
var eventType = "my-event-type";
var dateMillis = 1619804426154;
<%= data.branding.codePrefix %>.event.deleteIncomingEventsByTypeOlderThan(eventType, dateMillis, result =>
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
var eventType = "my-event-type";
var dateMillis = 1619804426154;
var eventProxy = bridge.getEventServiceProxy();

var postResult = eventProxy.deleteIncomingEventsByTypeOlderThan(eventType, dateMillis);
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
	"operation": "DELETE_INCOMING_EVENTS_BY_TYPE_OLDER_THAN",
	"data": {
    "eventType": "my-event-type",
		"dateMillis": 1619804426154
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
    "deleted": true,
    "deletedCount": 2
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
eventType | The user-defined type of the event
dateMillis | createdAt cut-off time whereby older events will be deleted


