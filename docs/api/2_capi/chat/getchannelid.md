# GetChannelId
## Overview
Retrieves a channel id given the specified lookup parameters.




<PartialServop service_name="chat" operation_name="GET_CHANNEL_ID" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp


string channelType = "gl";
string channelSubId = "CHAT_TRADE";
SuccessCallback successCallback = (response, cbObject) =>
{
	Dictionary<string, object> jsonMessage = (Dictionary<string, object>)JsonFx.Json.JsonReader.Deserialize(response);
	Dictionary<string, object> jsonData = (Dictionary<string, object>)jsonMessage["data"];
	
	var channelId = jsonData["channelId"].ToString();
	
	string logMessage = string.Join(" | ", new [] {channelId});
	Debug.Log(logMessage); // 22817:gl:CHAT_TRADE
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
	Debug.Log(string.Format("[GetChannelId Failed] {0}  {1}  {2}", status, code, error));
};
<%= data.branding.codePrefix %>.ChatService.GetChannelId(channelType, channelSubId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *channelType = "gl";
const char *channelSubId = "myChatRoom";
<%= data.branding.codePrefix %>->getChatService()->getChannelId(channelType, channelSubId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *channelType = @"gl";
NSString *channelSubId = @"myChatRoom";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> chatService] getChannelId:channelType
               channelSubId:channelSubId
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String channelType = "gl";
String channelSubId = "CHAT_TRADE";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getChatService().getChannelId(channelType, channelSubId, this);

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
var channelType = "gl";
var channelSubId = "CHAT_TRADE";

<%= data.branding.codePrefix %>.chat.getChannelId(channelType, channelSubId, result =>
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
var idResult = proxy.getChannelId( 'gl', 'bcChat');
if (idResult.status == 200 ) {
    channelId = idResult.data.channelId;
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "chat",
	"operation": "GET_CHANNEL_ID",
	"data": {
		"channelType": "gl",
		"channelSubId": "myChatRoom"
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
        "channelId": "22817:gl:CHAT_TRADE"
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
40603 | CHAT_UNRECOGNIZED_CHANNEL | The sub id for the channel type is not recognized

</details>


## Method Parameters
Parameter | Description
--------- | -----------
channelType | The channel type - ‘gl’ for global, ‘gr’ for groups, ‘dy’ for dynamic.
channelSubId | The type-specific sub id


