# ChannelConnect
## Overview
Registers a handler for incoming events from the specified `channelId`. Also returns a list of that channel's recent messages (from history).



<PartialServop service_name="chat" operation_name="CHANNEL_CONNECT" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp

//Step 2:   Register a chat callback
RTTCallback rttCallback = response =>
{
   Debug.Log(response);
};
<%= data.branding.codePrefix %>.RegisterRTTChatCallback(rttCallback);



string channelId = "22817:gl:CHAT_TRADE"; // APP_ID:CHANNEL_TYPE:CHANNEL_ID
int maxReturn = 25;
SuccessCallback successCallback = (response, cbObject) =>
{
	Dictionary<string, object> jsonMessage = (Dictionary<string, object>)JsonFx.Json.JsonReader.Deserialize(response);
    Dictionary<string, object> jsonData = (Dictionary<string, object>)jsonMessage["data"];
    Dictionary<string, object>[] messages = (Dictionary<string, object>[])jsonData["messages"];
    string display = "";
    var aMessage = JsonWriter.Serialize(jsonData["messages"]);
    if (aMessage.Length > 10)
    {
        Dictionary<string, object>[] messages = (Dictionary<string, object>[])jsonData["messages"];
        foreach (Dictionary<string, object> message in messages)
        {
            foreach (KeyValuePair<string, object> item in message)
            {
                display += item.Key + " : " + JsonWriter.Serialize(item.Value) + "\r\n";
            }
        }
    }
    else
    {
        display = "empty chat messages...";
    }
    Debug.Log(display);
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
	Debug.Log(string.Format("[ChannelConnect Failed] {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.ChatService.ChannelConnect(channelId, maxReturn, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *channelId = "55555:gl:bcDev";
int maxReturn = 25;
<%= data.branding.codePrefix %>->getChatService()->channelConnect(channelId, maxReturn, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *channelId = @"55555:gl:bcDev";
int maxReturn = 25;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> chatService] channelConnect:channelId
                  maxReturn:maxReturn
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
int maxReturn = 25;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getChatService().channelConnect(channelId, maxReturn, this);

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
var maxReturn = 25;

<%= data.branding.codePrefix %>.chat.channelConnect(channelId, maxReturn, result =>
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

var idResult = chatProxy.getChannelId( 'gl', 'bitChat' );
if ( idResult.status == 200 ) {
     
    var channelId = idResult.data.channelId;

    connectResult = chatProxy.channelConnect(channelId, 25);
} 
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "chat",
	"operation": "CHANNEL_CONNECT",
	"data": {
		"channelId": "55555:gl:bcDev",
		"maxReturn": 25
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
        "messages": [{
            "date": 1530649082684,
            "ver": 1,
            "msgId": "783692330334210",
            "from": {
                "id": "a7b7de02-8432-4547-8c40-9af94537fce0",
                "name": "RedBomber",
                "pic": null
            },
            "chId": "22817:gl:CHAT_TRADE",
            "content": {
                "text": "Looking to sell a couch for 105 gold coins.",
                "rich": {
                    "SELL_ITEM": {
                        "ITEM_TYPE": "COUCH",
                        "ITEM_ID": "d05a5b9d-374e-41e2-a498-c7387bf15c76",
                        "PRICE": "105",
                        "CURRENCY": "GOLDCOINS"
                    }
                }
            }
        }, 
        {
            "date": 1530650080029,
            "ver": 1,
            "msgId": "783692840974851",
            "from": {
                "id": "805cc012-0bf1-40a0-9716-b896d8f4c424",
                "name": "Chantel",
                "pic": null
            },
            "chId": "22817:gl:CHAT_TRADE",
            "content": {
                "text": "For that couch, how about 25 gems instead?"
            }
        }, 
        {
            "date": 1530650218944,
            "ver": 1,
            "msgId": "783692912099332",
            "from": {
                "id": "a7b7de02-8432-4547-8c40-9af94537fce0",
                "name": "RedBomber",
                "pic": null
            },
            "chId": "22817:gl:CHAT_TRADE",
            "content": {
                "text": "Sold!"
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
40346 | CHAT_INVALID_CHANNEL_ID | The channel id provided is invalid.
40601 | RTT_NOT_ENABLED | RTT must be enabled for this feature

</details>


## Method Parameters
Parameter | Description
--------- | -----------
channelId | The id of the channel to connect to.
maxReturn | The maximum number of recent messages to return from history.


