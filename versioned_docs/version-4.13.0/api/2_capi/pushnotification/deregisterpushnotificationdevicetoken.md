# DeregisterPushNotificationDeviceToken
## Overview
Deregisters the given device token from the server to disable this device from receiving push notifications.

<PartialServop service_name="pushNotification" operation_name="DEREGISTER" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
Platform deviceType = Platform.iOS;
string deviceToken = "12345";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PushNotificationService.DeregisterPushNotificationDeviceToken(deviceType, deviceToken, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
Platform deviceType = Platform::iOS;
const char *deviceToken = "12345";
<%= data.branding.codePrefix %>->getPushNotificationService()->deregisterPushNotificationDeviceToken(deviceType, deviceToken, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
PlatformObjc *deviceType = [PlatformObjc iOS];
NSString *deviceToken = @"12345";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> pushNotificationService] deregisterPushNotificationDeviceToken:deviceType
                deviceToken:deviceToken
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
Platform deviceType = Platform.iOS;
String deviceToken = "12345";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPushNotificationService().deregisterPushNotificationDeviceToken(deviceType, deviceToken, this);

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
var deviceType = "IOS";
var deviceToken = "12345";

<%= data.branding.codePrefix %>.pushNotification.deregisterPushNotificationDeviceToken(deviceType, deviceToken, result =>
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
var deviceType = "IOS";
var deviceToken = "12345";
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.deregisterPushNotificationDeviceToken(deviceType, deviceToken);
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
	"operation": "DEREGISTER",
	"data": {
		"deviceType": "IOS",
		"deviceToken": "12345"
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
device | The device platform being deregistered.
token | The platform-dependant device token needed for push notifications.


