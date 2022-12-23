# SendNormalizedPushNotification
## Overview
Sends a notification to a user consisting of alert content and custom data.

<PartialServop service_name="pushNotification" operation_name="SEND_NORMALIZED" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string toProfileId = "profile1";
string alertContentJson = "{\"body\":\"content of message\",\"title\":\"message title\"}";
string customDataJson = "{\"field1\":\"value1\",\"field2\":\"value2\"}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PushNotificationService.SendNormalizedPushNotification(toProfileId, alertContentJson, customDataJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *toProfileId = "profile1";
const char *alertContentJson = "{\"body\":\"content of message\",\"title\":\"message title\"}";
const char *customDataJson = "{\"field1\":\"value1\",\"field2\":\"value2\"}";
<%= data.branding.codePrefix %>->getPushNotificationService()->sendNormalizedPushNotification(toProfileId, alertContentJson, customDataJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *toProfileId = @"profile1";
NSString *alertContentJson = @"{\"body\":\"content of message\",\"title\":\"message title\"}";
NSString *customDataJson = @"{\"field1\":\"value1\",\"field2\":\"value2\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> pushNotificationService] sendNormalizedPushNotification:toProfileId
           alertContentJson:alertContentJson
             customDataJson:customDataJson
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String toProfileId = "profile1";
String alertContentJson = "{\"body\":\"content of message\",\"title\":\"message title\"}";
String customDataJson = "{\"field1\":\"value1\",\"field2\":\"value2\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPushNotificationService().sendNormalizedPushNotification(toProfileId, alertContentJson, customDataJson, this);

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
var toProfileId = "profile1";
var alertContentJson = {
    "body": "content of message",
    "title": "message title"
};
var customDataJson = {
    "field1": "value1",
    "field2": "value2"
};

<%= data.branding.codePrefix %>.pushNotification.sendNormalizedPushNotification(toProfileId, alertContentJson, customDataJson, result =>
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
var toProfileId = "profile1";
var alertContentJson = {
    "body": "content of message",
    "title": "message title"
};
var customDataJson = {
    "field1": "value1",
    "field2": "value2"
};
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.sendNormalizedPushNotification(toProfileId, alertContentJson, customDataJson);
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
	"operation": "SEND_NORMALIZED",
	"data": {
		"toProfileId": "profile1",
		"alertContent": {
			"body": "content of message",
			"title": "message title"
		},
		"customData": {
			"field1": "value1",
			"field2": "value2"
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
toProfileId | The profileId of the user to receive the notification
alertContentJson | Body and title of alert
customDataJson | Optional custom data


