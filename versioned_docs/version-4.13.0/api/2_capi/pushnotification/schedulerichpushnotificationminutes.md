# ScheduleRichPushNotificationMinutes
## Overview
Schedules a rich push notification to a user at a future relative time.

<PartialServop service_name="pushNotification" operation_name="SCHEDULE_RICH_NOTIFICATION" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string profileId = "kjhkjhgfkjshgkjh";
int notificationTemplateId = 1;
string substitutionJson = "{\"0\":\"value0\",\"1\":\"value1\"}";
int minutesFromNow = 1;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PushNotification.ScheduleRichPushNotificationMinutes(profileId, notificationTemplateId, substitutionJson, minutesFromNow, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *profileId = "kjhkjhgfkjshgkjh";
int notificationTemplateId = 1;
const char *substitutionJson = "{\"0\":\"value0\",\"1\":\"value1\"}";
int minutesFromNow = 1;

<%= data.branding.codePrefix %>->getPushNotification()->scheduleRichPushNotificationMinutes(profileId, notificationTemplateId, substitutionJson, minutesFromNow, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *profileId = @"kjhkjhgfkjshgkjh";
int notificationTemplateId = 1;
NSString *substitutionJson = @"{\"0\":\"value0\",\"1\":\"value1\"}";
int minutesFromNow = 1;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> pushNotificationService] scheduleRichPushNotificationMinutes:profileId
     notificationTemplateId:notificationTemplateId
           substitutionJson:substitutionJson
             minutesFromNow:minutesFromNow
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
int notificationTemplateId = 1;
String substitutionJson = "{\"0\":\"value0\",\"1\":\"value1\"}";
int minutesFromNow = 1;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPushNotification().scheduleRichPushNotificationMinutes(profileId, notificationTemplateId, substitutionJson, minutesFromNow, this);

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
var notificationTemplateId = 1;
var substitutionJson = {
    "0": "value0",
    "1": "value1"
};
var minutesFromNow = 1;

<%= data.branding.codePrefix %>.pushNotification.scheduleRichPushNotificationMinutes(profileId, notificationTemplateId, substitutionJson, minutesFromNow, result =>
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
var notificationTemplateId = 1;
var substitutionJson = {
    "0": "value0",
    "1": "value1"
};
var minutesFromNow = 1;
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.scheduleRichPushNotificationMinutes(profileId, notificationTemplateId, substitutionJson, minutesFromNow);
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
	"operation": "SCHEDULE_RICH_NOTIFICATION",
	"data": {
		"profileId": "kjhkjhgfkjshgkjh",
		"notificationTemplateId": 1,
		"substitutions": {
			"0": "value0",
			"1": "value1"
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
notificationTemplateId | Id of the notification template
substitutions | JSON defining the substitution params to use with the template
minutesFromNow | Minutes in the future to send notification


