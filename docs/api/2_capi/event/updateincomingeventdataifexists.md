# UpdateIncomingEventDataIfExists

Updates an event in the user's incoming event mailbox if the event exists. If event does not exist, just returns null and success, instead of an error.

<PartialServop service_name="event" operation_name="UPDATE_EVENT_DATA_IF_EXISTS" />

## Method Parameters

| Parameter | Description                                           |
| --------- | ----------------------------------------------------- |
| evId      | The event ID                                          |
| eventData | The user-defined data for this event encoded in JSON. |

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

<%= data.branding.codePrefix %>.EventService.UpdateIncomingEventDataIfExists(evId, eventData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *evId = "hexString";
const char *eventData = "{\"someMapAttribute\":\"someValue\"}";
<%= data.branding.codePrefix %>->getEventService()->updateIncomingEventDataIfExists(evId, eventData, this);
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

[[<%= data.branding.codePrefix %> eventService] updateIncomingEventDataIfExists:evId
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

<%= data.branding.codePrefix %>.getEventService().updateIncomingEventDataIfExists(evId, eventData, this);

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

<%= data.branding.codePrefix %>.event.updateIncomingEventDataIfExists(evId, eventData, result =>
{
    var status = result.status;
    console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
var  evId = "hexString";
var  eventData = {
    "someMapAttribute": "someValue"
};

ServerResponse result = await <%= data.branding.codePrefix %>.eventService.updateIncomingEventDataIfExists(evId:evId, eventData:eventData);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
local evId = "hexString"
local eventData = {
    someMapAttribute = "someValue"
}

local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end

<%= data.branding.codePrefix %>:getEventService():updateIncomingEventDataIfExists(evId, eventData, callback)
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

var postResult = eventProxy.updateIncomingEventDataIfExists(evId, eventData);
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
    "operation": "UPDATE_EVENT_DATA_IF_EXISTS",
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
    "data": null,
    "status": 200
}
```

</details>
