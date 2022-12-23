# SendTemplatedPushNotificationToGroup
## Overview
Sends a notification to a "group" of user based on a <%= data.branding.productName %> portal configured notification template. Includes JSON defining the substitution params to use with the template.

The format of the parameterized string is based on the MessageFormat java class.

A typical parameterized string could be "Hello {1}, welcome to the {0} game."".

The substitution values are passed via a JSON structure as follows:

`{ "1" : "George Smith", "0" : "Poker Pirates" }`

Note that the key of the JSON object is the substitution variable number and the value is the substitution value.

The resulting string would be "Hello George Smith, welcome to the Poker Pirates game.".

<PartialServop service_name="pushNotification" operation_name="SEND_TEMPLATED_TO_GROUP" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string groupId = "group1";
int notificationTemplateId = 1;
string substitutionsJson = "{\"0\":\"value0\",\"1\":\"value1\"}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PushNotificationService.SendTemplatedPushNotificationToGroup(groupId, notificationTemplateId, substitutionsJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *groupId = "group1";
int notificationTemplateId = 1;
const char *substitutionsJson = "{\"0\":\"value0\",\"1\":\"value1\"}";
<%= data.branding.codePrefix %>->getPushNotificationService()->sendTemplatedPushNotificationToGroup(groupId, notificationTemplateId, substitutionsJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *groupId = @"group1";
int notificationTemplateId = 1;
NSString *substitutionsJson = @"{\"0\":\"value0\",\"1\":\"value1\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> pushNotificationService] sendTemplatedPushNotificationToGroup:groupId
     notificationTemplateId:notificationTemplateId
          substitutionsJson:substitutionsJson
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
int notificationTemplateId = 1;
String substitutionsJson = "{\"0\":\"value0\",\"1\":\"value1\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPushNotificationService().sendTemplatedPushNotificationToGroup(groupId, notificationTemplateId, substitutionsJson, this);

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
var notificationTemplateId = 1;
var substitutionsJson = {
    "0": "value0",
    "1": "value1"
};

<%= data.branding.codePrefix %>.pushNotification.sendTemplatedPushNotificationToGroup(groupId, notificationTemplateId, substitutionsJson, result =>
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
var notificationTemplateId = 1;
var substitutionsJson = {
    "0": "value0",
    "1": "value1"
};
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.sendTemplatedPushNotificationToGroup(groupId, notificationTemplateId, substitutionsJson);
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
	"operation": "SEND_TEMPLATED_TO_GROUP",
	"data": {
		"groupId": "group1",
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
groupId | Target group ID
notificationTemplateId | Id of the notification template
substitutionJson | JSON defining the substitution params to use with the template


