# GetChannelInfo

Returns _description info_ and _activity stats_ for the specified channel. Note that `numMembers`, `numListeners` and `listeners` are only returned for non-global groups. Only callable by members of the channel.

<PartialServop service_name="chat" operation_name="GET_CHANNEL_INFO" />

## Method Parameters

| Parameter | Description           |
| --------- | --------------------- |
| channelId | The id of the channel |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp


string channelId = "22817:gl:CHAT_TRADE"; // APP_ID:CHANNEL_TYPE:CHANNEL_ID
SuccessCallback successCallback = (response, cbObject) =>
{
	Dictionary<string, object> jsonMessage = (Dictionary<string, object>)JsonFx.Json.JsonReader.Deserialize(response);
	Dictionary<string, object> jsonData = (Dictionary<string, object>)jsonMessage["data"];
	var name = jsonData["name"].ToString();
	var desc = jsonData["desc"].ToString();

	string logMessage = string.Join(" | ", new [] {name, desc});
	Debug.Log(logMessage); // Trade Chat | Trade items here.
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
	Debug.Log(string.Format("[GetChannelInfo Failed] {0}  {1}  {2}", status, code, error));
};
<%= data.branding.codePrefix %>.ChatService.GetChannelInfo(channelId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *channelId = "55555:gl:bcDev";
<%= data.branding.codePrefix %>->getChatService()->getChannelInfo(channelId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *channelId = @"55555:gl:bcDev";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> chatService] getChannelInfo:channelId
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String channelId = "13229:gl:bcDev";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getChatService().getChannelInfo(channelId, this);

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
var channelId = "13229:gl:bcDev";

<%= data.branding.codePrefix %>.chat.getChannelInfo(channelId, result =>
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
var  channelId = "13229:gl:bcDev";

ServerResponse result = await <%= data.branding.codePrefix %>.chatService.getChannelInfo(channelId:channelId);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var chatProxy = bridge.getChatServiceProxy();
var infoResult = chatProxy.getChannelInfo(channelId);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "chat",
	"operation": "GET_CHANNEL_INFO",
	"data": {
		"channelId": "55555:gl:bcDev"
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
        "id": "22817:gl:CHAT_TRADE",
        "type": "gl",
        "code": "CHAT_TRADE",
        "name": "Trade Chat",
        "desc": "Trade items here.",
        "stats": {
            "messageCount": 25
        }
    },
    "status": 200
}
```

</details>

<details>
<summary>Common Error Code</summary>

### Status Codes

| Code  | Name                    | Description                          |
| ----- | ----------------------- | ------------------------------------ |
| 40346 | CHAT_INVALID_CHANNEL_ID | The channel id provided is invalid.  |
| 40601 | RTT_NOT_ENABLED         | RTT must be enabled for this feature |

</details>
