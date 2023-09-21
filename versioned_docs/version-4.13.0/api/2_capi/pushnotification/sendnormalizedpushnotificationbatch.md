# SendNormalizedPushNotificationBatch
## Overview
Sends a notification to a list of users consisting of alert content and custom data.

<PartialServop service_name="pushNotification" operation_name="SEND_NORMALIZED_BATCH" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string[] profileIds = { "a-profile-id", "another-profile-id" };
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

<%= data.branding.codePrefix %>.PushNotificationService.SendNormalizedPushNotificationBatch(profileIds, alertContentJson, customDataJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
std::vector<std::string> profileIds;
profileIds.push_back("a-profile-id");
profileIds.push_back("another-profile-id");
const char *alertContentJson = "{\"body\":\"content of message\",\"title\":\"message title\"}";
const char *customDataJson = "{\"field1\":\"value1\",\"field2\":\"value2\"}";
<%= data.branding.codePrefix %>->getPushNotificationService()->sendNormalizedPushNotificationBatch(profileIds, alertContentJson, customDataJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSArray *profileIds = @[ @"a-profile-id", @"another-profile-id" ];
NSString *alertContentJson = @"{\"body\":\"content of message\",\"title\":\"message title\"}";
NSString *customDataJson = @"{\"field1\":\"value1\",\"field2\":\"value2\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> pushNotificationService] sendNormalizedPushNotificationBatch:profileIds
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
String[] profileIds = { "a-profile-id", "another-profile-id" };
String alertContentJson = "{\"body\":\"content of message\",\"title\":\"message title\"}";
String customDataJson = "{\"field1\":\"value1\",\"field2\":\"value2\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPushNotificationService().sendNormalizedPushNotificationBatch(profileIds, alertContentJson, customDataJson, this);

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
var profileIds = [ "a-profile-id", "another-profile-id" ];
var alertContentJson = {
    "body": "content of message",
    "title": "message title"
};
var customDataJson = {
    "field1": "value1",
    "field2": "value2"
};

<%= data.branding.codePrefix %>.pushNotification.sendNormalizedPushNotificationBatch(profileIds, alertContentJson, customDataJson, result =>
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
var profileIds = [ "a-profile-id", "another-profile-id" ];
var alertContentJson = {
    "body": "content of message",
    "title": "message title"
};
var customDataJson = {
    "field1": "value1",
    "field2": "value2"
};
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.sendNormalizedPushNotificationBatch(profileIds, alertContentJson, customDataJson);
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
	"operation": "SEND_NORMALIZED_BATCH",
	"data": {
		"profileIds": [
			"the-profile-id",
			"another-profile-id"
		],
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
profileIds | Target user list
alertContentJson | Body and title of alert
customDataJson | Optional custom data


