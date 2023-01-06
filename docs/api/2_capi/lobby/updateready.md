# UpdateReady
## Overview
Updates the ready status and extra json for the given lobby member.



<PartialServop service_name="lobby" operation_name="UPDATE_READY" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string lobbyId = "55555:4v4:19";
bool isReady = true;
string extraJson = "{}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LobbyService.UpdateReady(lobbyId, isReady, extraJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *lobbyId = "55555:4v4:19";
bool isReady = true;
const char *extraJson = "{}";
<%= data.branding.codePrefix %>->getLobbyService()->updateReady(lobbyId, isReady, extraJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *lobbyId = @"55555:4v4:19";
bool isReady = true;
NSString *extraJson = @"{}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> lobbyService] updateReady:lobbyId
                    isReady:isReady
                  extraJson:extraJson
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
boolean isReady = true;
String extraJson = "{}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLobbyService().updateReady(lobbyId, isReady, extraJson, this);

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
var isReady = true;
var extraJson = {};

<%= data.branding.codePrefix %>.lobby.updateReady(lobbyId, isReady, extraJson, result =>
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
var isReady = true;
var extraJson = {};
var lobbyProxy = bridge.getLobbyServiceProxy();

var postResult = lobbyProxy.updateReady(lobbyId, isReady, extraJson);
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
	"operation": "UPDATE_READY",
	"data": {
		"lobbyId": "55555:4v4:19",
		"isReady": true,
		"extraJson": {}
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
lobbyType | The type of lobby to look for. Lobby types are defined in the portal.
isReady | Initial ready-status of this user.
extraJson | Initial extra-data about this user.


