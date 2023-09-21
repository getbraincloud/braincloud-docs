# SendRichPushNotificationWithParams
## Overview
Sends a notification to a user based on a <%= data.branding.productName %> portal configured notification template and includes JSON defining the substitution params to use with the template.

The format of the parameterized string is based on the MessageFormat java class.

A typical parameterized string could be "Hello {1}, welcome to the {0} game."".

The substitution values are passed via a JSON structure as follows:

`{ "1" : "George Smith", "0" : "Poker Pirates" }`

Note that the key of the JSON object is the substitution variable number and the value is the substitution value.

The resulting string would be "Hello George Smith, welcome to the Poker Pirates game.".

<PartialServop service_name="pushNotification" operation_name="SEND_RICH" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string toProfileId = "profile1";
int notificationTemplateId = 1;
string substitutionJson = "{\"0\":\"value0\",\"1\":\"value1\"}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PushNotificationService.SendRichPushNotificationWithParams(toProfileId, notificationTemplateId, substitutionJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *toProfileId = "profile1";
int notificationTemplateId = 1;
const char *substitutionJson = "{\"0\":\"value0\",\"1\":\"value1\"}";
<%= data.branding.codePrefix %>->getPushNotificationService()->sendRichPushNotificationWithParams(toProfileId, notificationTemplateId, substitutionJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *toProfileId = @"profile1";
int notificationTemplateId = 1;
NSString *substitutionJson = @"{\"0\":\"value0\",\"1\":\"value1\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> pushNotificationService] sendRichPushNotificationWithParams:toProfileId
     notificationTemplateId:notificationTemplateId
           substitutionJson:substitutionJson
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
String substitutionJson = "{\"0\":\"value0\",\"1\":\"value1\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPushNotificationService().sendRichPushNotificationWithParams(toProfileId, notificationTemplateId, substitutionJson, this);

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
var substitutionJson = {
    "0": "value0",
    "1": "value1"
};

<%= data.branding.codePrefix %>.pushNotification.sendRichPushNotificationWithParams(toProfileId, notificationTemplateId, substitutionJson, result =>
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
var notificationTemplateId = 1;
var substitutionJson = {
    "0": "value0",
    "1": "value1"
};
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.sendRichPushNotificationWithParams(toProfileId, notificationTemplateId, substitutionJson);
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

## Method Parameters
Parameter | Description
--------- | -----------
toProfileId | The profileId of the user to receive the notification
notificationTemplateId | Id of the notification template
substitutionJson | JSON defining the substitution params to use with the template


