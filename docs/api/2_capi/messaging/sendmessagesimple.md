# SendMessageSimple
## Overview
Sends a simple string-based message on behalf of the user.



<PartialServop service_name="messaging" operation_name="SEND_MESSAGE_SIMPLE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string[] toProfileIds = { "profileId1", "profileId2" };
string text = "Chat and messaging features are here!";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.MessagingService.SendMessageSimple(toProfileIds, text, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
std::vector<std::string> toProfileIds;
toProfileIds.push_back("profileId1");
toProfileIds.push_back("profileId2");
const char *text = "Chat and messaging features are here!";
<%= data.branding.codePrefix %>->getMessagingService()->sendMessageSimple(toProfileIds, text, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSArray *toProfileIds = @[ @"profileId1", @"profileId2" ];
NSString *text = @"Chat and messaging features are here!";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> messagingService] sendMessageSimple:toProfileIds
                       text:text
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String[] toProfileIds = { "profileId1", "profileId2" };
String text = "Chat and messaging features are here!";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getMessagingService().sendMessageSimple(toProfileIds, text, this);

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
var toProfileIds = [ "profileId1", "profileId2" ];
var text = "Chat and messaging features are here!";

<%= data.branding.codePrefix %>.messaging.sendMessageSimple(toProfileIds, text, result =>
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
var toProfileIds = [ "profileId1", "profileId2" ];
var text = "Chat and messaging features are here!";
var messagingProxy = bridge.getMessagingServiceProxy();

var postResult = messagingProxy.sendMessageSimple(toProfileIds, text);
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
	"service": "messaging",
	"operation": "SEND_MESSAGE_SIMPLE",
	"data": {
		"toProfileIds": [
			"profileId1",
			"profileId2"
		],
		"text": "Chat and messaging features are here!"
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
    "data": {
        "actual": 1,
        "requested": 1,
        "msgId": "cf56f676-1f8e-40f7-9546-1efd7746f940"
    }
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description                        
----- | ----------------------- | -----------------------------------
40601 | FEATURE_NOT_ENABLED | Messaging feature is not enabled for app.

</details>


## Method Parameters
Parameter | Description                         
--------- | ------------------------------------
toProfileIds | An array of recipients of the message.
contentString | The text to send. 


