# CustomTrackEvent
## Overview
Creates custom data stream track event

<PartialServop service_name="dataStream" operation_name="CUSTOM_TRACK_EVENT" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string eventName = "customEvent";
string jsonEventProperties = "{\"key1\":\"value\",\"key2\":\"value\"}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.DataStreamService.CustomTrackEvent(eventName, jsonEventProperties, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *eventName = "customEvent";
const char *jsonEventProperties = "{\"key1\":\"value\",\"key2\":\"value\"}";
<%= data.branding.codePrefix %>->getDataStreamService()->customTrackEvent(eventName, jsonEventProperties, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *eventName = @"customEvent";
NSString *jsonEventProperties = @"{\"key1\":\"value\",\"key2\":\"value\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> dataStreamService] customTrackEvent:eventName
        jsonEventProperties:jsonEventProperties
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String eventName = "customEvent";
String jsonEventProperties = "{\"key1\":\"value\",\"key2\":\"value\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getDataStreamService().customTrackEvent(eventName, jsonEventProperties, this);

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
var eventName = "customEvent";
var jsonEventProperties = {
    "key1": "value",
    "key2": "value"
};

<%= data.branding.codePrefix %>.dataStream.customTrackEvent(eventName, jsonEventProperties, result =>
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
var eventName = "customEvent";
var jsonEventProperties = {
    "key1": "value",
    "key2": "value"
};
var dataStreamProxy = bridge.getDataStreamServiceProxy();

var postResult = dataStreamProxy.customTrackEvent(eventName, jsonEventProperties);
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
	"service": "dataStream",
	"operation": "CUSTOM_TRACK_EVENT",
	"data": {
		"eventName": "customEvent",
		"eventProperties": {
			"key1": "value",
			"key2": "value"
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
    "data": null
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
eventName | The name of the event
eventProperties | The properties of the event


