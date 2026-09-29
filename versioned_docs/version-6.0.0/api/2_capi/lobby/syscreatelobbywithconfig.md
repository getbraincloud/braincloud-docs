# SysCreateLobbyWithConfig
Creates an instance of a lobby with a per-instance configuration override. Currently supports overriding the standard lobby type's team definitions. Will return the newly created lobby id in the event of a successful creation.

<PartialServop service_name="lobby" operation_name="SYS_CREATE_LOBBY_WITH_CONFIG" />

## Method Parameters
Parameter | Description
--------- | -----------
ownerCxId | The cx of the lobby instance owner.
lobbyType | The type of lobby to look for. Lobby types are defined in the portal.
rating | The skill rating to use for finding the lobby. Provided as a separate parameter because it may not exactly match the user's rating (especially in cases where parties are involved).
otherUserCxIds | Array of other users (i.e. party members) to add to the lobby as well. Will constrain things so that only lobbies with room for all players will be considered.
settings | Owner settings for this lobby.
isReady | Initial ready-status of this user.
extraJson | Initial extra-data about this user.
teamCode | Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.
configOverrides | Per-instance configuration overrides applied on top of the standard lobby type. Currently supports `teams` (a complete replacement list of team definitions: `code`, `minUsers`, `maxUsers`, `autoAssign`).

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
<TabItem value="objectivec" label="Obj-C">
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
<TabItem value="lua" label="Roblox">
```

```lua
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="gdscript" label="GDScript">
```

```gdscript
N/A
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var ownerCxId = "55555:aaa-bbb-ccc-ddd:asfasdf";
var lobbyType = "4v4";
var rating = 76;
var otherUserCxIds = [
    "55555:aaa-bbb-ccc-eee:asdfjkl"
];
var settings = {};
var isReady = False;
var extraJson = {};
var teamCode = "reserved";
var configOverrides = {
    "teams": [
        {
            "code": "reserved",
            "minUsers": 0,
            "maxUsers": 1,
            "autoAssign": false
        },
        {
            "code": "all",
            "minUsers": 6,
            "maxUsers": 6,
            "autoAssign": true
        }
    ]
};
var lobbyProxy = bridge.getLobbyServiceProxy();

var postResult = lobbyProxy.sysCreateLobbyWithConfig(ownerCxId, lobbyType, rating, otherUserCxIds, settings, isReady, extraJson, teamCode, configOverrides);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"lobby",
    "operation":"SYS_CREATE_LOBBY_WITH_CONFIG",
    "data":{
        "ownerCxId":"55555:aaa-bbb-ccc-ddd:asfasdf",
        "lobbyType":"4v4",
        "rating":76,
        "otherUserCxIds":[
            "55555:aaa-bbb-ccc-eee:asdfjkl"
        ],
        "settings":{},
        "isReady":false,
        "extraJson":{},
        "teamCode":"reserved",
        "configOverrides":{
            "teams":[
                {
                    "code":"reserved",
                    "minUsers":0,
                    "maxUsers":1,
                    "autoAssign":false
                },
                {
                    "code":"all",
                    "minUsers":6,
                    "maxUsers":6,
                    "autoAssign":true
                }
            ]
        }
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
    "lobbyId": "23782:Relay_lobbyT_v2:1"
  },
  "status": 200
}
```

</details>
