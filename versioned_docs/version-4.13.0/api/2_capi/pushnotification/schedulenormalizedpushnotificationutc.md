# ScheduleNormalizedPushNotificationUTC
## Overview
Schedules a normalized push notification to a user at a future absolute time.

<PartialServop service_name="pushNotification" operation_name="SCHEDULE_NORMALIZED_NOTIFICATION" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string profileId = "kjhkjhgfkjshgkjh";
string alertContentJson = "{\"body\":\"content of message\",\"title\":\"message title\"}";
string customDataJson = "{\"field1\":\"value1\",\"field2\":\"value2\"}";
int startTime = 1437579786000;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PushNotificationService.ScheduleNormalizedPushNotificationUTC(profileId, alertContentJson, customDataJson, startTime, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *profileId = "kjhkjhgfkjshgkjh";
const char *alertContentJson = "{\"body\":\"content of message\",\"title\":\"message title\"}";
const char *customDataJson = "{\"field1\":\"value1\",\"field2\":\"value2\"}";
int startTime = 1437579786000;
<%= data.branding.codePrefix %>->getPushNotificationService()->scheduleNormalizedPushNotificationUTC(profileId, alertContentJson, customDataJson, startTime, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *profileId = @"kjhkjhgfkjshgkjh";
NSString *alertContentJson = @"{\"body\":\"content of message\",\"title\":\"message title\"}";
NSString *customDataJson = @"{\"field1\":\"value1\",\"field2\":\"value2\"}";
int startTime = 1437579786000;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> pushNotificationService] scheduleNormalizedPushNotificationUTC:profileId
           alertContentJson:alertContentJson
             customDataJson:customDataJson
                  startTime:startTime
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String profileId = "kjhkjhgfkjshgkjh";
String alertContentJson = "{\"body\":\"content of message\",\"title\":\"message title\"}";
String customDataJson = "{\"field1\":\"value1\",\"field2\":\"value2\"}";
int startTime = 1437579786000;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPushNotificationService().scheduleNormalizedPushNotificationUTC(profileId, alertContentJson, customDataJson, startTime, this);

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
var profileId = "kjhkjhgfkjshgkjh";
var alertContentJson = {
    "body": "content of message",
    "title": "message title"
};
var customDataJson = {
    "field1": "value1",
    "field2": "value2"
};
var startTime = 1437579786000;

<%= data.branding.codePrefix %>.pushNotification.scheduleNormalizedPushNotificationUTC(profileId, alertContentJson, customDataJson, startTime, result =>
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
var profileId = "kjhkjhgfkjshgkjh";
var alertContentJson = {
    "body": "content of message",
    "title": "message title"
};
var customDataJson = {
    "field1": "value1",
    "field2": "value2"
};
var startTime = 1437579786000;
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.scheduleNormalizedPushNotificationUTC(profileId, alertContentJson, customDataJson, startTime);
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
	"operation": "SCHEDULE_NORMALIZED_NOTIFICATION",
	"data": {
		"profileId": "kjhkjhgfkjshgkjh",
		"alertContent": {
			"body": "content of message",
			"title": "message title"
		},
		"customData": {
			"field1": "value1",
			"field2": "value2"
		},
		"startDateUTC": "[[#ts+60000]]"
	}
}
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

## Method Parameters
Parameter | Description
--------- | -----------
profileId | Identifies the user to send to
alertContent | Body and title of alert
customData | Optional custom data
startTime | Time to send notification (UTC)


