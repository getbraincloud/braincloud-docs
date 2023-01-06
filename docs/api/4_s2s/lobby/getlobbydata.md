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
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var lobbyId = "55555:4x4:19";
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
		"lobbyId": "55555:4x4:19"
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


