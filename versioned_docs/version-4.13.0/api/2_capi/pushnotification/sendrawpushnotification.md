# SendRawPushNotification
## Overview
Sends a notification to a user consisting of raw platform dependent content.

<PartialServop service_name="pushNotification" operation_name="SEND_RAW" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string toProfileId = "profile1";
string fcmContent = "{\"notification\":{\"body\":\"content of message\",\"title\":\"message title\"},\"data\":{\"customfield1\":\"customValue1\",\"customfield2\":\"customValue2\"},\"priority\":\"normal\"}";
string iosContent = "{\"aps\":{\"alert\":{\"body\":\"content of message\",\"title\":\"message title\"},\"badge\":0,\"sound\":\"gggg\"}}";
string facebookContent = "{\"template\":\"content of message\"}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PushNotificationService.SendRawPushNotification(toProfileId, fcmContent, iosContent, facebookContent, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *toProfileId = "profile1";
const char *fcmContent = "{\"notification\":{\"body\":\"content of message\",\"title\":\"message title\"},\"data\":{\"customfield1\":\"customValue1\",\"customfield2\":\"customValue2\"},\"priority\":\"normal\"}";
const char *iosContent = "{\"aps\":{\"alert\":{\"body\":\"content of message\",\"title\":\"message title\"},\"badge\":0,\"sound\":\"gggg\"}}";
const char *facebookContent = "{\"template\":\"content of message\"}";
<%= data.branding.codePrefix %>->getPushNotificationService()->sendRawPushNotification(toProfileId, fcmContent, iosContent, facebookContent, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *toProfileId = @"profile1";
NSString *fcmContent = @"{\"notification\":{\"body\":\"content of message\",\"title\":\"message title\"},\"data\":{\"customfield1\":\"customValue1\",\"customfield2\":\"customValue2\"},\"priority\":\"normal\"}";
NSString *iosContent = @"{\"aps\":{\"alert\":{\"body\":\"content of message\",\"title\":\"message title\"},\"badge\":0,\"sound\":\"gggg\"}}";
NSString *facebookContent = @"{\"template\":\"content of message\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> pushNotificationService] sendRawPushNotification:toProfileId
                 fcmContent:fcmContent
                 iosContent:iosContent
            facebookContent:facebookContent
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
String fcmContent = "{\"notification\":{\"body\":\"content of message\",\"title\":\"message title\"},\"data\":{\"customfield1\":\"customValue1\",\"customfield2\":\"customValue2\"},\"priority\":\"normal\"}";
String iosContent = "{\"aps\":{\"alert\":{\"body\":\"content of message\",\"title\":\"message title\"},\"badge\":0,\"sound\":\"gggg\"}}";
String facebookContent = "{\"template\":\"content of message\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPushNotificationService().sendRawPushNotification(toProfileId, fcmContent, iosContent, facebookContent, this);

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

<%= data.branding.codePrefix %>.pushNotification.sendRawPushNotification(toProfileId, fcmContent, iosContent, facebookContent, result =>
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
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.sendRawPushNotification(toProfileId, fcmContent, iosContent, facebookContent);
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
	"operation": "SEND_RAW",
	"data": {
		"toProfileId": "profile1",
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
fcmContent | FCM dependent content
iosContent | IOS (APNS) dependent content
facebookContent | Facebook dependent content


