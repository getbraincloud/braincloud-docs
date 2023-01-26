# GetLobbyData
## Overview
Returns the data for the specified lobby, including member data.



<PartialServop service_name="lobby" operation_name="GET_LOBBY_DATA" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string lobbyId = "13229:Relay_lobbyT_v2:20";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LobbyService.GetLobbyData(lobbyId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *lobbyId = "13229:Relay_lobbyT_v2:20";
<%= data.branding.codePrefix %>->getLobbyService()->getLobbyData(lobbyId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *lobbyId = @"13229:Relay_lobbyT_v2:20";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> lobbyService] getLobbyData:lobbyId
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String lobbyId = "13229:Relay_lobbyT_v2:20";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLobbyService().getLobbyData(lobbyId, this);

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
var lobbyId = "13229:Relay_lobbyT_v2:20";

<%= data.branding.codePrefix %>.lobby.getLobbyData(lobbyId, result =>
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
var lobbyId = "13229:Relay_lobbyT_v2:20";
var lobbyProxy = bridge.getLobbyServiceProxy();

var postResult = lobbyProxy.getLobbyData(lobbyId);
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
	"operation": "GET_LOBBY_DATA",
	"data": {
		"lobbyId": "13229:Relay_lobbyT_v2:20"
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
    "id": "13229:Relay_lobbyT_v2:20",
    "lobbyType": "Relay_lobbyT_v2",
    "state": "setup",
    "rating": 0,
    "lobbyTypeDef": {
      "lobbyTypeId": "Relay_lobbyT_v2",
      "teams": {
        "all": {
          "minUsers": 1,
          "maxUsers": 8,
          "autoAssign": true,
          "code": "all"
        }
      },
      "rules": {
        "allowEarlyStartWithoutMax": true,
        "forceOnTimeStartWithoutReady": true,
        "allowJoinInProgress": false,
        "onTimeStartSecs": 600,
        "disbandOnStart": true,
        "everyReadyMinPercent": 15,
        "everyReadyMinNum": 1,
        "earliestStartSecs": 1,
        "tooLateSecs": 600
      },
      "desc": "starts when 1 player is ready"
    },
    "settings": {},
    "version": 1,
    "connectData": {},
    "timetable": {
      "createdAt": 1631050042177,
      "early": 1631050043177,
      "onTime": 1631050642177,
      "tooLate": 1631050642177
    },
    "cRegions": [],
    "round": 1,
    "ownerCxId": "13229:db4be46d-1e99-41fe-9402-a0e8f7cd7cb5:p57kebat767ogdtesnp5cmd46p",
    "legacyLobbyOwnerEnabled": true,
    "owner": "db4be46d-1e99-41fe-9402-a0e8f7cd7cb5",
    "numMembers": 1,
    "members": [
      {
        "profileId": "db4be46d-1e99-41fe-9402-a0e8f7cd7cb5",
        "name": "",
        "pic": "",
        "rating": 1200,
        "team": "all",
        "isReady": true,
        "extra": {},
        "cxId": "13229:db4be46d-1e99-41fe-9402-a0e8f7cd7cb5:p57kebat767ogdtesnp5cmd46p"
      }
    ]
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
lobbyId | Id of chosen lobby.


