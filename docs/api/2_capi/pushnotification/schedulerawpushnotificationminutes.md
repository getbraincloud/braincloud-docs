# ScheduleRawPushNotificationMinutes
## Overview
Schedules a raw push notification to a user at a future relative time.

<PartialServop service_name="pushNotification" operation_name="SCHEDULE_RAW_NOTIFICATION" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string profileId = "kjhkjhgfkjshgkjh";
string fcmContent = "{\"notification\":{\"body\":\"content of message\",\"title\":\"message title\"},\"data\":{\"customfield1\":\"customValue1\",\"customfield2\":\"customValue2\"},\"priority\":\"normal\"}";
string iosContent = "{\"aps\":{\"alert\":{\"body\":\"content of message\",\"title\":\"message title\"},\"badge\":0,\"sound\":\"gggg\"}}";
string facebookContent = "{\"template\":\"content of message\"}";
int minutesFromNow = 1;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PushNotification.ScheduleRawPushNotificationMinutes(profileId, fcmContent, iosContent, facebookContent, minutesFromNow, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *profileId = "kjhkjhgfkjshgkjh";
const char *fcmContent = "{\"notification\":{\"body\":\"content of message\",\"title\":\"message title\"},\"data\":{\"customfield1\":\"customValue1\",\"customfield2\":\"customValue2\"},\"priority\":\"normal\"}";
const char *iosContent = "{\"aps\":{\"alert\":{\"body\":\"content of message\",\"title\":\"message title\"},\"badge\":0,\"sound\":\"gggg\"}}";
const char *facebookContent = "{\"template\":\"content of message\"}";
int minutesFromNow = 1;

<%= data.branding.codePrefix %>->getPushNotification()->scheduleRawPushNotificationMinutes(profileId, fcmContent, iosContent, facebookContent, minutesFromNow, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *profileId = @"kjhkjhgfkjshgkjh";
NSString *fcmContent = @"{\"notification\":{\"body\":\"content of message\",\"title\":\"message title\"},\"data\":{\"customfield1\":\"customValue1\",\"customfield2\":\"customValue2\"},\"priority\":\"normal\"}";
NSString *iosContent = @"{\"aps\":{\"alert\":{\"body\":\"content of message\",\"title\":\"message title\"},\"badge\":0,\"sound\":\"gggg\"}}";
NSString *facebookContent = "{\"template\":\"content of message\"}";
int minutesFromNow = 1;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> pushNotificationService] scheduleRawPushNotificationMinutes:profileId
                 fcmContent:fcmContent
                 iosContent:iosContent
            facebookContent:facebookContent
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
String fcmContent = "{\"notification\":{\"body\":\"content of message\",\"title\":\"message title\"},\"data\":{\"customfield1\":\"customValue1\",\"customfield2\":\"customValue2\"},\"priority\":\"normal\"}";
String iosContent = "{\"aps\":{\"alert\":{\"body\":\"content of message\",\"title\":\"message title\"},\"badge\":0,\"sound\":\"gggg\"}}";
String facebookContent = "{\"template\":\"content of message\"}";
int minutesFromNow = 1;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPushNotification().scheduleRawPushNotificationMinutes(profileId, fcmContent, iosContent, facebookContent, minutesFromNow, this);

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
var fcmContent = {
    "notification": {
        "body": "content of message",
        "title": "message title"
    },
    "data": {
        "customfield1": "customValue1",
        "customfield2": "customValue2"
    },
    "priority": "normal"
};
var iosContent = {
    "aps": {
        "alert": {
            "body": "content of message",
            "title": "message title"
        },
        "badge": 0,
        "sound": "gggg"
    }
};
var facebookContent = {
    "template": "content of message"
};
var minutesFromNow = 1;

<%= data.branding.codePrefix %>.pushNotification.scheduleRawPushNotificationMinutes(profileId, fcmContent, iosContent, facebookContent, minutesFromNow, result =>
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
var fcmContent = {
    "notification": {
        "body": "content of message",
        "title": "message title"
    },
    "data": {
        "customfield1": "customValue1",
        "customfield2": "customValue2"
    },
    "priority": "normal"
};
var iosContent = {
    "aps": {
        "alert": {
            "body": "content of message",
            "title": "message title"
        },
        "badge": 0,
        "sound": "gggg"
    }
};
var facebookContent = {
    "template": "content of message"
};
var minutesFromNow = 1;
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.scheduleRawPushNotificationMinutes(profileId, fcmContent, iosContent, facebookContent, minutesFromNow);
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
	"operation": "SCHEDULE_RAW_NOTIFICATION",
	"data": {
		"profileId": "kjhkjhgfkjshgkjh",
		"fcmContent": {
			"notification": {
				"body": "content of message",
				"title": "message title"
			},
			"data": {
				"customfield1": "customValue1",
				"customfield2": "customValue2"
			},
			"priority": "normal"
		},
		"iosContent": {
			"aps": {
				"alert": {
					"body": "content of message",
					"title": "message title"
				},
				"badge": 0,
				"sound": "gggg"
			}
		},
		"facebookContent": {
			"template": "content of message"
		},
		"minutesFromNow": 1
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
fcmContent | FCM dependent content
iosContent | IOS (APNS) dependent content
facebookContent | Facebook dependent content
minutes | Minutes in the future to send notification


