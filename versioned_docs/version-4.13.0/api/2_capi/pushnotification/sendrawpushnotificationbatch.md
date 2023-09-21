# SendRawPushNotificationBatch
## Overview
Sends a notification to a list of users consisting of raw message content.

<PartialServop service_name="pushNotification" operation_name="SEND_RAW_BATCH" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string[] profileIds = { "a-profile-id", "another-profile-id" };
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

<%= data.branding.codePrefix %>.PushNotificationService.SendRawPushNotificationBatch(profileIds, fcmContent, iosContent, facebookContent, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
std::vector<std::string> profileIds;
profileIds.push_back("a-profile-id");
profileIds.push_back("another-profile-id");
const char *fcmContent = "{\"notification\":{\"body\":\"content of message\",\"title\":\"message title\"},\"data\":{\"customfield1\":\"customValue1\",\"customfield2\":\"customValue2\"},\"priority\":\"normal\"}";
const char *iosContent = "{\"aps\":{\"alert\":{\"body\":\"content of message\",\"title\":\"message title\"},\"badge\":0,\"sound\":\"gggg\"}}";
const char *facebookContent = "{\"template\":\"content of message\"}";
<%= data.branding.codePrefix %>->getPushNotificationService()->sendRawPushNotificationBatch(profileIds, fcmContent, iosContent, facebookContent, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSArray *profileIds = @[ @"a-profile-id", @"another-profile-id" ];
NSString *fcmContent = @"{\"notification\":{\"body\":\"content of message\",\"title\":\"message title\"},\"data\":{\"customfield1\":\"customValue1\",\"customfield2\":\"customValue2\"},\"priority\":\"normal\"}";
NSString *iosContent = @"{\"aps\":{\"alert\":{\"body\":\"content of message\",\"title\":\"message title\"},\"badge\":0,\"sound\":\"gggg\"}}";
NSString *facebookContent = @"{\"template\":\"content of message\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> pushNotificationService] sendRawPushNotificationBatch:profileIds
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
String[] profileIds = { "a-profile-id", "another-profile-id" };
String fcmContent = "{\"notification\":{\"body\":\"content of message\",\"title\":\"message title\"},\"data\":{\"customfield1\":\"customValue1\",\"customfield2\":\"customValue2\"},\"priority\":\"normal\"}";
String iosContent = "{\"aps\":{\"alert\":{\"body\":\"content of message\",\"title\":\"message title\"},\"badge\":0,\"sound\":\"gggg\"}}";
String facebookContent = "{\"template\":\"content of message\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPushNotificationService().sendRawPushNotificationBatch(profileIds, fcmContent, iosContent, facebookContent, this);

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

<%= data.branding.codePrefix %>.pushNotification.sendRawPushNotificationBatch(profileIds, fcmContent, iosContent, facebookContent, result =>
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

var postResult = pushNotificationProxy.sendRawPushNotificationBatch(profileIds, fcmContent, iosContent, facebookContent);
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
	"operation": "SEND_RAW_BATCH",
	"data": {
		"profileIds": [
			"the-profile-id",
			"another-profile-id"
		],
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
profileIds | Target user list
alertContentJson | Body and title of alert
customDataJson | Optional custom data


