# PostChatMessageSimple
## Overview
Sends a text-only member chat message on behalf of the user. *This method provides convenience by simplifying message construction.* Returns the id of the message that was created.

<PartialServop service_name="chat" operation_name="POST_CHAT_MESSAGE_SIMPLE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp


string channelId = "22817:gl:CHAT_GROUPFINDER"; // APP_ID:CHANNEL_TYPE:CHANNEL_ID
string chatMessage = "Hey, I am looking for new and experienced users to join our group.";
bool recordInHistory = true;
SuccessCallback successCallback = (response, cbObject) =>
{
	Dictionary<string, object> jsonMessage = (Dictionary<string, object>)JsonFx.Json.JsonReader.Deserialize(response);
	Dictionary<string, object> jsonData = (Dictionary<string, object>)jsonMessage["data"];
	
	var msgId = jsonData["msgId"].ToString();
	string logMessage = string.Join(" | ", new [] {msgId});
	Debug.Log(logMessage); // 783733181125648
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
	Debug.Log(string.Format("[PostChatMessageSimple Failed] {0}  {1}  {2}", status, code, error));
};
<%= data.branding.codePrefix %>.ChatService.PostChatMessageSimple(channelId, chatMessage, true, successCallback,
	failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *channelId = "55555:gl:bcDev";
const char *text = "Hello world";
bool recordInHistory = true;
<%= data.branding.codePrefix %>->getChatService()->postChatMessageSimple(channelId, text, recordInHistory, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *channelId = @"55555:gl:bcDev";
NSString *text = @"Hello world";
bool recordInHistory = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> chatService] postChatMessageSimple:channelId
                       text:text
            recordInHistory:recordInHistory
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String channelId = "22817:gl:CHAT_GROUPFINDER"; // APP_ID:CHANNEL_TYPE:CHANNEL_ID
String chatMessage = "Hey, I am looking for new and experienced users to join our group.";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getChatService().postChatMessageSimple(channelId, this);

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
var channelId = "22817:gl:CHAT_GROUPFINDER"; // APP_ID:CHANNEL_TYPE:CHANNEL_ID
var chatMessage = "Hey, I am looking for new and experienced users to join our group.";
var recordInHistory = true;

<%= data.branding.codePrefix %>.chat.postChatMessageSimple(channelId, chatMessage,recordInHistory, result =>
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

var postResult = chatProxy.postChatMessageSimple( channelId, "Helloooo!!!", true );
if (postResult.status == 200 ) {
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
	"operation": "POST_CHAT_MESSAGE_SIMPLE",
	"data": {
		"channelId": "55555:gl:bcDev",
		"text": "Hello world",
		"recordInHistory": true
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
        "msgId": "783822917533185"
    }
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40601 | RTT_NOT_ENABLED | RTT must be enabled for this feature
40603 | CHAT_UNRECOGNIZED_CHANNEL | The specified channel is invalid

</details>


## Method Parameters
Parameter | Description
--------- | -----------
channelId | The chat channel to post to
contentString | Simple string content for the message. Will be placed inside of a `text` field of the `content` section.
recordInHistory | Set to `false` if the message shouldn't be recorded to history. Useful for sending non-conversational messages, like when users join a room, etc.
#
