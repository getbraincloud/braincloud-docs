# SendEventToProfiles
Sends an event to multiple users with the attached json data.

<PartialServop service_name="event" operation_name="SEND_EVENT_TO_PROFILES" />

## Method Parameters
Parameter | Description
--------- | -----------
toIds | The profile ids of the users to send the event.
eventType | The user-defined type of the event.
eventData | The user-defined data for this event encoded in JSON.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string toIds = "[\"profileId1\", \"profileId2\"]";
string eventType = "type1";
string eventData = "{\"someMapAttribute\": \"someValue\"}";

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.EventService.SendEventToProfiles(toIds, eventType, eventData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *toIds = "[\"profileId1\", \"profileId2\"]";
const char *eventType = "type1";
const char *eventData = "{\"someMapAttribute\": \"someValue\"}";
<%= data.branding.codePrefix %>.getEventService().sendEventToProfiles(toIds, eventType, eventData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *toIds = @"[\"profileId1\", \"profileId2\"]";
NSString *eventType = @"type1";
NSString *eventData = @"{\"someMapAttribute\": \"someValue\"}";
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> eventService] SendEventToProfiles:
                        toIds:toIds
                    eventType:eventType
                    eventData:eventData
              completionBlock:successBlock
         errorCompletionBlock:failureBlock
                     cbObject:nil]
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String toIds = "[\"profileId1\", \"profileId2\"]";
String eventType = "type1";
String eventData = "{\"someMapAttribute\": \"someValue\"}";
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getEventService.SendEventToProfiles(toIds, eventType, eventData, this);

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
var toIds = [
    "profileId1",
    "profileId2"
];
var eventType = "type1";
var eventData = {
    "someMapAttribute": "someValue"
};
<%= data.branding.codePrefix %>.event.SendEventToProfiles(toIds, eventType, eventData, result =>
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
var  toIds = [
    "profileId1",
    "profileId2"
];
var  eventType = "type1";
var  eventData = {
    "someMapAttribute": "someValue"
};

ServerResponse result = await <%= data.branding.codePrefix %>.eventService.SendEventToProfiles(toIds:toIds, eventType:eventType, eventData:eventData);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var toIds = [
    "profileId1",
    "profileId2"
];
var eventType = "type1";
var eventData = {
    "someMapAttribute": "someValue"
};
var eventProxy = bridge.getEventServiceProxy();

var postResult = eventProxy.SendEventToProfiles(toIds, eventType, eventData);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"event",
    "operation":"SEND_EVENT_TO_PROFILES",
    "data":{
        "toIds":[
            "profileId1",
            "profileId2"
        ],
        "eventType":"type1",
        "eventData":{
            "someMapAttribute":"someValue"
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
        "errorProfiles": [],
        "errorCount": 0,
        "sentCount": 2
    }
}
```

</details>

