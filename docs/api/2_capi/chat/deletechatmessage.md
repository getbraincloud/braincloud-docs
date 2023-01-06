# DeleteChatMessage
## Overview
Delete the specified chat message. Message must have been from this user. Version must match (or pass -1 to bypass version enforcement).

Returns the number of messages that were deleted. Since the history rolls over, it is possible that the message had already expired before the delete attempt - in that case, the value of the `deleted` field will be `0`.



<PartialServop service_name="chat" operation_name="DELETE_CHAT_MESSAGE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp


string channelId = "22817:gl:CHAT_TRADE"; // APP_ID:CHANNEL_TYPE:CHANNEL_ID
string msgId = "784130333859899";
int version = -1;
SuccessCallback successCallback = (response, cbObject) =>
{
	var jsonMessage = (Dictionary<string, object>)JsonFx.Json.JsonReader.Deserialize(response);
	Dictionary<string, object> jsonData = (Dictionary<string, object>)jsonMessage["data"];
	string deleted = jsonData["deleted"].ToString();
	
	string logMessage = string.Join(" | ", new [] {deleted});
	Debug.Log(logMessage); // 1
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
	Debug.Log(string.Format("[DeleteChatMessage Failed] {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.ChatService.DeleteChatMessage(channelId, msgId, version, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *channelId = "55555:gl:bcDev";
const char *msgId = "123456789";
int version = 1;
<%= data.branding.codePrefix %>->getChatService()->deleteChatMessage(channelId, msgId, version, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *channelId = @"55555:gl:bcDev";
NSString *msgId = @"123456789";
int version = 1;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> chatService] deleteChatMessage:channelId
                      msgId:msgId
                    version:version
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String channelId = "22817:gl:CHAT_TRADE"; // APP_ID:CHANNEL_TYPE:CHANNEL_ID
String msgId = "784130333859899";
int version = -1;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getChatService().deleteChatMessage(channelId, msgId, version, this);

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
var channelId = "22817:gl:CHAT_TRADE";
var msgId = "784130333859899";
var version = -1;

<%= data.branding.codePrefix %>.chat.channelDisconnect(channelId, msgId, version, result =>
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
var chatProxy = bridge.getChatServiceProxy();
var result = chatProxy.deleteChatMessage( channelId, msgId, ver );
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "chat",
	"operation": "DELETE_CHAT_MESSAGE",
	"data": {
		"channelId": "55555:gl:bcDev",
		"msgId": "the-message-id",
		"version": 1
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
        "deleted": 1
    }
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40346 | CHAT_INVALID_CHANNEL_ID | The channel id provided is invalid.
40601 | RTT_NOT_ENABLED | RTT must be enabled for this feature

</details>


## Method Parameters
Parameter | Description
--------- | -----------
channelId | The channel of the message
msgId | The message id
version | The version of the message. Pass it -1 to bypass version checking.


