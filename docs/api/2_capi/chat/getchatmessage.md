# GetChatMessage
## Overview
Retrieves a chat message object from history. If the message cannot be found, that `data` section returned will be empty.

<PartialServop service_name="chat" operation_name="GET_CHAT_MESSAGE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp


string channelId = "22817:gl:CHAT_GROUPFINDER"; // APP_ID:CHANNEL_TYPE:CHANNEL_ID
string msgId = "783820066133040";
SuccessCallback successCallback = (response, cbObject) =>
{
	Dictionary<string, object> jsonMessage = (Dictionary<string, object>)JsonFx.Json.JsonReader.Deserialize(response);
	Dictionary<string, object> jsonData = (Dictionary<string, object>)jsonMessage["data"];
	
	var date = jsonData["date"].ToString();
	var name = ((Dictionary<string, object>)jsonData["from"])["name"].ToString();
	var text = ((Dictionary<string, object>)jsonData["content"])["text"].ToString();
	string logMessage = string.Join(" | ", new [] {date, name, text});
	Debug.Log(logMessage); // 1530898566666 | RedBomber | Anyone looking for a group?
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
	Debug.Log(string.Format("[GetChatMessage Failed] {0}  {1}  {2}", status, code, error));
};
<%= data.branding.codePrefix %>.ChatService.GetChatMessage(channelId, msgId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *channelId = "55555:gl:bcDev";
const char *msgId = "123456789";
<%= data.branding.codePrefix %>->getChatService()->getChatMessage(channelId, msgId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *channelId = @"55555:gl:bcDev";
NSString *msgId = @"123456789";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> chatService] getChatMessage:channelId
                      msgId:msgId
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
String msgId = "783820066133040";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getChatService().getChatMessage(channelId, msgId, this);

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
var msgId = "783820066133040";

<%= data.branding.codePrefix %>.chat.getChatMessage(channelId, msgId, result =>
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
var getResult = chatProxy.getChatMessage(channelId, msgId);
if (getReult.status == 200 ) {
    msgText = getResult.data.content.text;
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "chat",
	"operation": "GET_CHAT_MESSAGE",
	"data": {
		"channelId": "55555:gl:bcDev",
		"msgId": "the-message-id"
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
    "data": {
        "date": 1530898566666,
        "ver": 1,
        "msgId": "783820066133040",
        "from": {
            "id": "a7b7de02-8432-4547-8c40-9af94537fce0",
            "name": "RedBomber",
            "pic": null
        },
        "chId": "22817:gl:CHAT_TRADE",
        "content": {
            "text": "Anyone looking for a group?"
        }
    },
    "status": 200
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
channelId | The channel of the message
msgId | The message id
#
