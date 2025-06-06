# SendRichPushNotification

Sends a notification to a user based on a <%= data.branding.productName %> portal configured notification template.

<PartialServop service_name="pushNotification" operation_name="SEND_RICH" />

## Method Parameters

| Parameter              | Description                                           |
| ---------------------- | ----------------------------------------------------- |
| toId                   | The profileId of the user to receive the notification |
| notificationTemplateId | Id of the notification template                       |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string toProfileId = "profile1";
int notificationTemplateId = 1;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PushNotificationService.SendRichPushNotification(toProfileId, notificationTemplateId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *toProfileId = "profile1";
int notificationTemplateId = 1;
<%= data.branding.codePrefix %>->getPushNotificationService()->sendRichPushNotification(toProfileId, notificationTemplateId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *toProfileId = @"profile1";
int notificationTemplateId = 1;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> pushNotificationService] sendRichPushNotification:toProfileId
     notificationTemplateId:notificationTemplateId
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
int notificationTemplateId = 1;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPushNotificationService().sendRichPushNotification(toProfileId, notificationTemplateId, this);

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
var notificationTemplateId = 1;

<%= data.branding.codePrefix %>.pushNotification.sendRichPushNotification(toProfileId, notificationTemplateId, result =>
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
var  toProfileId = "profile1";
var  notificationTemplateId = 1;

ServerResponse result = await <%= data.branding.codePrefix %>.pushNotificationService.sendRichPushNotification(profileId:toProfileId, notificationTemplateId:notificationTemplateId);

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
var toProfileId = "profile1";
var notificationTemplateId = 1;
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.sendRichPushNotification(toProfileId, notificationTemplateId);
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
	"operation": "SEND_RICH",
	"data": {
		"toProfileId": "profile1",
		"notificationTemplateId": 1,
		"substitutions": {
			"0": "value0",
			"1": "value1"
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
