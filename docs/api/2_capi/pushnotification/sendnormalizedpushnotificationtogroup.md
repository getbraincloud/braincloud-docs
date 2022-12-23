# SendNormalizedPushNotificationToGroup
## Overview
Sends a notification to a "group" of user consisting of alert content and custom data.

<PartialServop service_name="pushNotification" operation_name="SEND_NORMALIZED_TO_GROUP" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string groupId = "group1";
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

<%= data.branding.codePrefix %>.PushNotificationService.SendNormalizedPushNotificationToGroup(groupId, alertContentJson, customDataJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *groupId = "group1";
const char *alertContentJson = "{\"body\":\"content of message\",\"title\":\"message title\"}";
const char *customDataJson = "{\"field1\":\"value1\",\"field2\":\"value2\"}";
<%= data.branding.codePrefix %>->getPushNotificationService()->sendNormalizedPushNotificationToGroup(groupId, alertContentJson, customDataJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *groupId = @"group1";
NSString *alertContentJson = @"{\"body\":\"content of message\",\"title\":\"message title\"}";
NSString *customDataJson = @"{\"field1\":\"value1\",\"field2\":\"value2\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> pushNotificationService] sendNormalizedPushNotificationToGroup:groupId
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
String groupId = "group1";
String alertContentJson = "{\"body\":\"content of message\",\"title\":\"message title\"}";
String customDataJson = "{\"field1\":\"value1\",\"field2\":\"value2\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPushNotificationService().sendNormalizedPushNotificationToGroup(groupId, alertContentJson, customDataJson, this);

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
var groupId = "group1";
var alertContentJson = {
    "body": "content of message",
    "title": "message title"
};
var customDataJson = {
    "field1": "value1",
    "field2": "value2"
};

<%= data.branding.codePrefix %>.pushNotification.sendNormalizedPushNotificationToGroup(groupId, alertContentJson, customDataJson, result =>
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
var groupId = "group1";
var alertContentJson = {
    "body": "content of message",
    "title": "message title"
};
var customDataJson = {
    "field1": "value1",
    "field2": "value2"
};
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.sendNormalizedPushNotificationToGroup(groupId, alertContentJson, customDataJson);
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
	"operation": "SEND_NORMALIZED_TO_GROUP",
	"data": {
		"groupId": "group1",
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
groupId | Target group ID
alertContentJson | Body and title of alert
customDataJson | Optional custom data


