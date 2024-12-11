# SysGetLobbyData

Gets data for the given lobby instance `<lobbyId>`.

<PartialServop service_name="lobby" operation_name="SYS_GET_LOBBY_DATA" />

## Method Parameters

| Parameter | Description         |
| --------- | ------------------- |
| lobbyId   | Id of chosen lobby. |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var lobbyId = "55555:4v4:19";
var lobbyProxy = bridge.getLobbyServiceProxy();

var postResult = lobbyProxy.sysGetLobbyData(lobbyId);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"lobby",
    "operation":"SYS_GET_LOBBY_DATA",
    "data":{
        "lobbyId":"55555:4v4:19"
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
        "id": "24797:CursorPartyV2:6",
        "lobbyType": "CursorPartyV2",
        "state": "early",
        "rating": 76,
        "ownerCxId": "24797:93293c42-7a8e-47b4-954e-553916193687:qipp3o63n7bsppsa76p0uq11bd",
        "lobbyTypeDef": {
            "roomConfig": {
                "enableDisconnectButton": false
            },
            "lobbyTypeId": "CursorPartyV2",
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
                "allowJoinInProgress": true,
                "onTimeStartSecs": 600,
                "disbandOnStart": false,
                "everyReadyMinPercent": 0,
                "everyReadyMinNum": 1,
                "earliestStartSecs": 1,
                "tooLateSecs": 600
            },
            "desc": "Uses protocol V2"
        },
        "settings": {},
        "version": 1,
        "connectData": {},
        "timetable": {
            "createdAt": 1733872893606,
            "early": 1733872894606,
            "onTime": 1733873493606,
            "tooLate": 1733873493606,
            "dropDead": 1733877093606,
            "ignoreDropDeadUntil": 1733877093606
        },
        "cRegions": [],
        "round": 1,
        "isRoomReady": false,
        "keepAliveRateSeconds": 1440,
        "isAvailable": true,
        "shardId": 0,
        "legacyLobbyOwnerEnabled": false,
        "numMembers": 2,
        "members": [
            {
                "profileId": "5ad5976d-29d9-4f02-b097-0072fe69c2e8",
                "name": "cran",
                "pic": "",
                "rating": 76,
                "team": "all",
                "isReady": false,
                "extra": {},
                "passcode": "6aedce",
                "ipAddress": "APIExplorer",
                "cxId": "24797:5ad5976d-29d9-4f02-b097-0072fe69c2e8:8p70du41jiaic4tnnsrptem5b"
            },
            {
                "profileId": "93293c42-7a8e-47b4-954e-553916193687",
                "name": "candy",
                "pic": "",
                "rating": 76,
                "team": "all",
                "isReady": false,
                "extra": {},
                "passcode": "34535f",
                "ipAddress": "APIExplorer",
                "cxId": "24797:93293c42-7a8e-47b4-954e-553916193687:qipp3o63n7bsppsa76p0uq11bd"
            }
        ]
    },
    "status": 200
}
```

</details>
