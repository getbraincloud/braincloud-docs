# SendMessage
## Overview
Sends a message on behalf of the user. The content of the message can be anything - though be convention it *should* contain a `text` field for plaintext content.



### Status Codes
Code | Name | Description                         
----- | ----------------------- | ----------------------------------- 
40601 | FEATURE_NOT_ENABLED | Messaging feature is not enabled for app. 
40621 | MESSAGING_MAX_RECIPIENTS_EXCEEDED | Message recipients count cannot exceed 5 (defaults to 5)

<PartialServop service_name="messaging" operation_name="SEND_MESSAGE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string[] toProfileIds = { "profileId1", "profileId2" };
string contentJson = "{\"subject\":\"Chat and messaging features are here!\",\"text\":\"Check out the new chat and messaging features!\"}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.MessagingService.SendMessage(toProfileIds, contentJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
std::vector<std::string> toProfileIds;
toProfileIds.push_back("profileId1");
toProfileIds.push_back("profileId2");
const char *contentJson = "{\"subject\":\"Chat and messaging features are here!\",\"text\":\"Check out the new chat and messaging features!\"}";
<%= data.branding.codePrefix %>->getMessagingService()->sendMessage(toProfileIds, contentJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSArray *toProfileIds = @[ @"profileId1", @"profileId2" ];
NSString *contentJson = @"{\"subject\":\"Chat and messaging features are here!\",\"text\":\"Check out the new chat and messaging features!\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> messagingService] sendMessage:toProfileIds
                contentJson:contentJson
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
String contentJson = "{\"subject\":\"Chat and messaging features are here!\",\"text\":\"Check out the new chat and messaging features!\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getMessagingService().sendMessage(toProfileIds, contentJson, this);

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
var contentJson = {
    "subject": "Chat and messaging features are here!",
    "text": "Check out the new chat and messaging features!"
};

<%= data.branding.codePrefix %>.messaging.sendMessage(toProfileIds, contentJson, result =>
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
var contentJson = {
    "subject": "Chat and messaging features are here!",
    "text": "Check out the new chat and messaging features!"
};
var messagingProxy = bridge.getMessagingServiceProxy();

var postResult = messagingProxy.sendMessage(toProfileIds, contentJson);
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
	"operation": "SEND_MESSAGE",
	"data": {
		"toProfileIds": [
			"profileId1",
			"profileId2"
		],
		"contentJson": {
			"subject": "Chat and messaging features are here!",
			"text": "Check out the new chat and messaging features!"
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
    "data": {
        "actual": 1,
        "requested": 1,
        "msgId": "e541737c-3bfe-4680-a5c1-13c3b196e73a"
    }
}
```
</details>

## Method Parameters
Parameter | Description                          
--------- | ------------------------------------ 
toProfileIds | An array of recipients of the message. 
contentJson | The message content.  


