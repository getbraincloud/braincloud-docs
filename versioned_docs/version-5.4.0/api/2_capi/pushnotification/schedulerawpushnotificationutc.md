# ScheduleRawPushNotificationUTC

Schedules a raw push notification to a user at a future absolute time.

<PartialServop service_name="pushNotification" operation_name="SCHEDULE_RAW_NOTIFICATION" />

## Method Parameters
Parameter | Description
--------- | -----------
profileId | Identifies the user to send to
fcmContent | FCM dependent content
iosContent | IOS (APNS) dependent content
facebookContent | Facebook dependent content
startTime | Time to send notification (UTC)

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
int startTime = 1437579786000;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PushNotification.ScheduleRawPushNotificationUTC(profileId, fcmContent, iosContent, facebookContent, startTime, successCallback, failureCallback);
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
int startTime = 1437579786000;

<%= data.branding.codePrefix %>->getPushNotification()->scheduleRawPushNotificationUTC(profileId, fcmContent, iosContent, facebookContent, startTime, this);
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
int startTime = 1437579786000;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> pushNotificationService] scheduleRawPushNotificationUTC:profileId
                 fcmContent:fcmContent
                 iosContent:iosContent
            facebookContent:facebookContent
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
String fcmContent = "{\"notification\":{\"body\":\"content of message\",\"title\":\"message title\"},\"data\":{\"customfield1\":\"customValue1\",\"customfield2\":\"customValue2\"},\"priority\":\"normal\"}";
String iosContent = "{\"aps\":{\"alert\":{\"body\":\"content of message\",\"title\":\"message title\"},\"badge\":0,\"sound\":\"gggg\"}}";
String facebookContent = "{\"template\":\"content of message\"}";
int startTime = 1437579786000;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPushNotification().scheduleRawPushNotificationUTC(profileId, fcmContent, iosContent, facebookContent, startTime, this);

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
var startTime = 1437579786000;

<%= data.branding.codePrefix %>.pushNotification.scheduleRawPushNotificationUTC(profileId, fcmContent, iosContent, facebookContent, startTime, result =>
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
var  profileId = "kjhkjhgfkjshgkjh";
var  fcmContent = {
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
var  iosContent = {
    "aps": {
        "alert": {
            "body": "content of message",
            "title": "message title"
        },
        "badge": 0,
        "sound": "gggg"
    }
};
var  facebookContent = {
    "template": "content of message"
};
var  startTime = 1437579786000;

ServerResponse result = await <%= data.branding.codePrefix %>.pushNotificationService.scheduleRawPushNotificationUTC(profileId:profileId, fcmContent:fcmContent, iosContent:iosContent, facebookContent:facebookContent, startTime:startTime);

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
var startTime = 1437579786000;
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.scheduleRawPushNotificationUTC(profileId, fcmContent, iosContent, facebookContent, startTime);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
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
var startTime = 1437579786000;
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.scheduleRawPushNotificationUTC(profileId, fcmContent, iosContent, facebookContent, startTime);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

