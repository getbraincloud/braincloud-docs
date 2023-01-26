# GetSubscribedChannels
## Overview
Returns a list of the channels of the specified type that the user has access to, with description info. Channel type can be one of "gl", "gr" or "all".



<PartialServop service_name="chat" operation_name="GET_SUBSCRIBED_CHANNELS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp


string channelType = "all";
SuccessCallback successCallback = (response, cbObject) =>
{
	Dictionary<string, object> jsonMessage = (Dictionary<string, object>)JsonFx.Json.JsonReader.Deserialize(response);
	Dictionary<string, object> jsonData = (Dictionary<string, object>)jsonMessage["data"];
	var channels = (Dictionary<string, object>[]) jsonData["channels"];
	
	foreach (Dictionary<string, object> channel in channels)
	{
		string id = channel["id"].ToString();
		string desc = channel["desc"].ToString();
		string messageCount = ((Dictionary<string, object>)channel["stats"])["messageCount"].ToString();
		string logMessage = string.Join(" | ", new [] {id, desc, messageCount});
		Debug.Log(logMessage); // 22817:gl:CHAT_GLOBAL | General discussion about the app. | 25					
	}
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
	Debug.Log(string.Format("[GetSubscribedChannels Failed] {0}  {1}  {2}", status, code, error));
};
<%= data.branding.codePrefix %>.ChatService.GetSubscribedChannels(channelType, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *channelType = "all";
<%= data.branding.codePrefix %>->getChatService()->getSubscribedChannels(channelType, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *channelType = @"all";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> chatService] getSubscribedChannels:channelType
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String channelType = "all";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getChatService().getSubscribedChannels(channelType, this);

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
var channelType = "all";

<%= data.branding.codePrefix %>.chat.getSubscribedChannels(channelType, result =>
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
var subResult = chatProxy.getSubscribedChannels('');
if ( subResult.status == 200 ) {
    var channelArray = subResult.data.channels;
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "chat",
	"operation": "GET_SUBSCRIBED_CHANNELS",
	"data": {
		"channelType": "all"
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
        "channels": [{
            "id": "22817:gl:CHAT_GLOBAL",
            "type": "gl",
            "code": "CHAT_GLOBAL",
            "name": "Global Chat",
            "desc": "General discussion about the app.",
            "stats": {
                "messageCount": 25
            }
        }, 
        {
            "id": "22817:gl:CHAT_GROUPFINDER",
            "type": "gl",
            "code": "CHAT_GROUPFINDER",
            "name": "Group Finder",
            "desc": "Find a group.",
            "stats": {
                "messageCount": 25
            }
        }, 
        {
            "id": "22817:gr:134a78eb-ea90-4f4a-8fdd-87e5dad7c56c",
            "type": "gr",
            "code": "red",
            "name": "red",
            "desc": "",
            "stats": {
            "messageCount": 0,
            "memberCount": 2,
            "listenerCount": 0
            }
        }]
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

</details>


## Method Parameters
Parameter | Description
--------- | -----------
channelType | Specifies the type of channels subscriptions to return. If empty string, returns channels of all types.


