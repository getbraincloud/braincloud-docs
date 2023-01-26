# SendSignal
## Overview
Sends LOBBY_SIGNAL_DATA message to all lobby members.



<PartialServop service_name="lobby" operation_name="SEND_SIGNAL" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string lobbyId = "55555:4v4:19";
string signalData = "{}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LobbyService.SendSignal(lobbyId, signalData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *lobbyId = "55555:4v4:19";
const char *signalData = "{}";
<%= data.branding.codePrefix %>->getLobbyService()->sendSignal(lobbyId, signalData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *lobbyId = @"55555:4v4:19";
NSString *signalData = @"{}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> lobbyService] sendSignal:lobbyId
                 signalData:signalData
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String lobbyId = "55555:4v4:19";
String signalData = "{}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLobbyService().sendSignal(lobbyId, signalData, this);

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
var lobbyId = "55555:4v4:19";
var signalData = {};

<%= data.branding.codePrefix %>.lobby.sendSignal(lobbyId, signalData, result =>
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
var lobbyId = "55555:4v4:19";
var signalData = {};
var lobbyProxy = bridge.getLobbyServiceProxy();

var postResult = lobbyProxy.sendSignal(lobbyId, signalData);
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
	"service": "lobby",
	"operation": "SEND_SIGNAL",
	"data": {
		"lobbyId": "55555:4v4:19",
		"signalData": {}
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
40601 | RTT_NOT_ENABLED | RTT must be enabled for this feature

</details>


## Method Parameters
Parameter | Description
--------- | -----------
lobbyId | Id of chosen lobby.
signalData | Signal data to be sent.


