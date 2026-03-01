# PostChatMessage

Sends a potentially richer member chat message. By convention, `content` should contain a field named `text` for plain-text content. Returns the id of the message created.

<PartialServop service_name="chat" operation_name="POST_CHAT_MESSAGE" />

## Method Parameters

| Parameter       | Description                                                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| channelId       | The chat channel to post to                                                                                                                       |
| contentJson     | The json content of the message. Split into chatMessage and jsonRich for plain text and json content respectively.                                |
| recordInHistory | Set to `false` if the message shouldn't be recorded to history. Useful for sending non-conversational messages, like when users join a room, etc. |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string channelId = "22817:gl:CHAT_TRADE"; // APP_ID:CHANNEL_TYPE:CHANNEL_ID
string text = "Looking to sell a couch for 105 gold coins.";
Dictionary<string, object> sellItem = new Dictionary<string, object>
{
    {"ITEM_TYPE", "COUCH"},
    {"ITEM_ID", "d05a5b9d-374e-41e2-a498-c7387bf15c76"},
    {"PRICE", "105"},
    {"CURRENCY", "GOLDCOINS"}
};
Dictionary<string, object> rich = new Dictionary<string, object>
{
    {"SELL_ITEM", sellItem}
};
var contentJson = JsonFx.Json.JsonWriter.Serialize(new Dictionary<string, object>
{
    {"rich", rich},
    {"text", text}
});

bool recordInHistory = true;
SuccessCallback successCallback = (response, cbObject) =>
{
    Dictionary<string, object> jsonMessage =
        (Dictionary<string, object>) JsonFx.Json.JsonReader.Deserialize(response);
    Dictionary<string, object> jsonData = (Dictionary<string, object>) jsonMessage["data"];

    var msgId = jsonData["msgId"].ToString();
    string logMessage = string.Join(" | ", new[] {msgId});
    Debug.Log(logMessage); // 783733181125648
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("[PostChatMessage Failed] {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.ChatService.PostChatMessage(channelId, contentJson, recordInHistory,
    successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *channelId = "55555:gl:bcDev";
const char *contentJson = "{\"text\":\"Hello world\",\"custom\":{\"somethingCustom\":\"wow\"}}";
bool recordInHistory = true;
<%= data.branding.codePrefix %>->getChatService()->postChatMessage(channelId, contentJson, recordInHistory, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *channelId = @"55555:gl:bcDev";
NSString *contentJson = @"{\"text\":\"Hello world\",\"custom\":{\"somethingCustom\":\"wow\"}}";
bool recordInHistory = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> chatService] postChatMessage:channelId
                contentJson:contentJson
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
String channelId = "22817:gl:CHAT_TRADE"; // APP_ID:CHANNEL_TYPE:CHANNEL_ID
String contentJson = "{\"text\":\"Hello world\",\"custom\":{\"somethingCustom\":\"wow\"}}";
boolean recordInHistory = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getChatService().postChatMessage(channelId, contentJson, recordInHistory, this);

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
var channelId = "22817:gl:CHAT_TRADE"; // APP_ID:CHANNEL_TYPE:CHANNEL_ID
var contentJson = {text: "Looking to sell a couch for 105 gold coins.", SELL_ITEM: {ITEM_TYPE: "COUCH"}};
var rnecordIHistory = true;

<%= data.branding.codePrefix %>.chat.postChatMessage(channelId, contentJson, recordInHistory, result =>
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
var  channelId = "22817:gl:CHAT_TRADE";
var  contentJson = {text: "Looking to sell a couch for 105 gold coins.", SELL_ITEM: {ITEM_TYPE: "COUCH"}};
var rnecordIHistory = true;

ServerResponse result = await <%= data.branding.codePrefix %>.chatService.postChatMessage(channelId:channelId, contentJson:contentJson, rnecordIHistory:rnecordIHistory);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
local channelId = "22817:gl:CHAT_TRADE"
local contentJson = {text: "Looking to sell a couch for 105 gold coins.", SELL_ITEM: {ITEM_TYPE: "COUCH"}}
local rnecordIHistory = true

local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end

<%= data.branding.codePrefix %>:getChatService():postChatMessage(channelId, contentJson, rnecordIHistory, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var chatProxy = bridge.getChatServiceProxy();
var contentJson = {};
contentJson.text = "Hellooooo!";
var rnecordIHistory = true;

var postResult = chatProxy.postChatMessage( channelId, contentJson, rnecordIHistory);
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
    "operation": "POST_CHAT_MESSAGE",
    "data": {
        "channelId": "55555:gl:bcDev",
        "content": {
            "text": "Hello world",
            "custom": {
                "somethingCustom": "wow"
            }
        },
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
    "data": {
        "msgId": "783347769003570"
    },
    "status": 200
}
```

</details>

<details>
<summary>Common Error Code</summary>

### Status Codes

| Code  | Name                      | Description                          |
| ----- | ------------------------- | ------------------------------------ |
| 40601 | RTT_NOT_ENABLED           | RTT must be enabled for this feature |
| 40603 | CHAT_UNRECOGNIZED_CHANNEL | The specified channel is invalid     |

</details>
