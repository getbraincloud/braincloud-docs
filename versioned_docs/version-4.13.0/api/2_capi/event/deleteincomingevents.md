# DeleteIncomingEvents
## Overview
Delete a list of events out of the user's incoming mailbox.

<PartialServop service_name="event" operation_name="DELETE_INCOMING_EVENTS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string[] evIds = { "ev1", "ev2" };
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.EventService.DeleteIncomingEvents(evIds, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
std::vector<std::string> evIds;
profileIds.push_back("ev1");
profileIds.push_back("ev2");
<%= data.branding.codePrefix %>->getEventService()->deleteIncomingEvents(profileIds, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSArray *evIds = @[ @"ev1", @"ev2" ];
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> eventService] deleteIncomingEvents:evIds
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
string[] evIds = { "ev1", "ev2" };
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getEventService().deleteIncomingEvents(evIds, this);

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
var evIds = { "ev1", "ev2" };
<%= data.branding.codePrefix %>.event.deleteIncomingEvents(evIds, result =>
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
var evIds = ["608c40c3a3a7950f388c4eac", "368c40c3a3a7950f388c4eac"]
var eventProxy = bridge.getEventServiceProxy();

var postResult = eventProxy.deleteIncomingEvents(evIds);
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
	"operation": "DELETE_INCOMING_EVENTS",
	"data": {
		"evIds": ["ev1", "ev2"]
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
evIds | Collection of event ids


