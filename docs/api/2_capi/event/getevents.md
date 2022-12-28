# GetEvents
## Overview
Gets the events currently queued for the player.

<PartialServop service_name="event" operation_name="GET_EVENTS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.EventService.GetEvents(successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->getEventService()->getEvents(this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> eventService] getEvents:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getEventService().getEvents(this);

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

<%= data.branding.codePrefix %>.event.getEvents(result =>
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
var eventProxy = bridge.getEventServiceProxy();

var postResult = eventProxy.getEvents();
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
	"operation": "GET_EVENTS",
	"data": {}
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
    "incoming_events": [
      {
        "eventData": {
          "someMapAttribute": "someValue"
        },
        "createdAt": 1619578092346,
        "fromPlayerId": "7801e422-bd36-4324-b479-968d35621190",
        "toPlayerId": "79087465-5ca5-41a1-9d46-85ad23bc6efd",
        "eventType": "type1",
        "evId": "6088ccec1ba05d6b77062a98"
      },
      {
        "eventData": {
          "mapattr": "someValueNew"
        },
        "createdAt": 1619578154201,
        "fromPlayerId": "a3f127fc-378e-44e9-8761-96ca904e1bce",
        "toPlayerId": "79087465-5ca5-41a1-9d46-85ad23bc6efd",
        "eventType": "type2",
        "evId": "6088cd2a1ba05d6b77064095"
      }
    ]
  },
  "status": 200
}
```
</details>

