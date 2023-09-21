# UpdateChatMessage
## Overview
Update the specified chat message. Message must have been from this user. Version provided must match (or pass -1 to bypass version enforcement).



<PartialServop service_name="chat" operation_name="UPDATE_CHAT_MESSAGE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string channelId = "55555:gl:bcDev";
string msgId = "123456789";
int version = 1;
string contentJson = "{\"text\":\"New plain text message\",\"custom\":{\"somethingNew\":\"amazing\"}}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.ChatService.UpdateChatMessage(channelId, msgId, version, contentJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *channelId = "55555:gl:bcDev";
const char *msgId = "123456789";
int version = 1;
const char *contentJson = "{\"text\":\"New plain text message\",\"custom\":{\"somethingNew\":\"amazing\"}}";
<%= data.branding.codePrefix %>->getChatService()->updateChatMessage(channelId, msgId, version, contentJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *channelId = @"55555:gl:bcDev";
NSString *msgId = @"123456789";
int version = 1;
NSString *contentJson = @"{\"text\":\"New plain text message\",\"custom\":{\"somethingNew\":\"amazing\"}}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> chatService] updateChatMessage:channelId
                      msgId:msgId
                    version:version
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
String channelId = "55555:gl:bcDev";
String msgId = "123456789";
int version = 1;
String contentJson = "{\"text\":\"New plain text message\",\"custom\":{\"somethingNew\":\"amazing\"}}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getChatService().updateChatMessage(channelId, msgId, version, contentJson, this);

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
var channelId = "55555:gl:bcDev";
var msgId = "123456789";
var version = 1;
var contentJson = {
    "text": "New plain text message",
    "custom": {
        "somethingNew": "amazing"
    }
};

<%= data.branding.codePrefix %>.chat.updateChatMessage(channelId, msgId, version, contentJson, result =>
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
var channelId = "55555:gl:bcDev";
var msgId = "123456789";
var version = 1;
var contentJson = {
    "text": "New plain text message",
    "custom": {
        "somethingNew": "amazing"
    }
};
var chatProxy = bridge.getChatServiceProxy();

var postResult = chatProxy.updateChatMessage(channelId, msgId, version, contentJson);
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
	"service": "chat",
	"operation": "UPDATE_CHAT_MESSAGE",
	"data": {
		"channelId": "55555:gl:bcDev",
		"msgId": "123456789",
		"version": 1,
		"content": {
			"text": "New plain text message",
			"custom": {
				"somethingNew": "amazing"
			}
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
    "data": {}
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40346 | INSUFFICIDENT_PERMISSIONS | The channel id provided is invalid.
40595 | CHAT_MESSASAGE_NOT_FOUND | The specified message cannot be found
40601 | RTT_NOT_ENABLED | RTT must be enabled for this feature
40603 | CHAT_UNRECOGNIZED_CHANNEL | The specified channel is invalid

</details>


## Method Parameters
#### Method Parameters
Parameter | Description
--------- | -----------
channelId | The channel of the message
msgId | The message id
version | The version of the message. Pass it -1 to bypass version checking.
contentJson | Replacement content for the message


