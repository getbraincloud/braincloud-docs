# CancelFindRequest

Cancels any FindLobby or FindOrCreateLobby requests that have been previously submitted by the caller for the given lobbyType.

<PartialServop service_name="lobby" operation_name="CANCEL_FIND_REQUEST" />

## Method Parameters

| Parameter | Description                   |
| --------- | ----------------------------- |
| lobbyType | Type of lobby being targeted. |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string lobbyType = "4v4";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LobbyService.CancelFindRequest(lobbyType, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *lobbyType = "4v4";
<%= data.branding.codePrefix %>->getLobbyService()->cancelFindRequest(lobbyType, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// Coming soon
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String lobbyType = "4v4";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLobbyService().cancelFindRequest(lobbyType, this);

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
var lobbyType = "4v4";

<%= data.branding.codePrefix %>.lobby.cancelFindRequest(lobbyType, result =>
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
var lobbyType = "4v4";
var lobbyProxy = bridge.getLobbyServiceProxy();

var postResult = lobbyProxy.cancelFindRequest(lobbyType);
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
	"operation": "CANCEL_FIND_REQUEST",
	"data": {
		"lobbyType": "4v4"
	}
}
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```
