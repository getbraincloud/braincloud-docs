# SwitchTeam
## Overview
Switches to the specified team (if allowed.)

Sends LOBBY_MEMBER_UPDATED to all lobby members, with copy of member data



<PartialServop service_name="lobby" operation_name="SWITCH_TEAM" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string lobbyId = "55555:4v4:19";
string toTeamCode = "blue";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LobbyService.SwitchTeam(lobbyId, toTeamCode, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *lobbyId = "55555:4v4:19";
const char *toTeamCode = "blue";
<%= data.branding.codePrefix %>->getLobbyService()->switchTeam(lobbyId, toTeamCode, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *lobbyId = @"55555:4v4:19";
NSString *toTeamCode = @"blue";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> lobbyService] switchTeam:lobbyId
                 toTeamCode:toTeamCode
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
String toTeamCode = "blue";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLobbyService().switchTeam(lobbyId, toTeamCode, this);

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
var toTeamCode = "blue";

<%= data.branding.codePrefix %>.lobby.switchTeam(lobbyId, toTeamCode, result =>
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
var toTeamCode = "blue";
var lobbyProxy = bridge.getLobbyServiceProxy();

var postResult = lobbyProxy.switchTeam(lobbyId, toTeamCode);
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
	"operation": "SWITCH_TEAM",
	"data": {
		"lobbyId": "55555:4v4:19",
		"toTeamCode": "blue"
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
toTeamCode | Specified team code.


