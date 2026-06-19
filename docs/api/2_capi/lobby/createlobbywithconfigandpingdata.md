# CreateLobbyWithConfigAndPingData
Creates an instance of a lobby with a per-instance configuration override and the given ping data. Currently supports overriding the standard lobby type's team definitions. Will return the newly created lobby id in the event of a successful creation.

<PartialServop service_name="lobby" operation_name="CREATE_LOBBY_WITH_CONFIG_AND_PING_DATA" />

## Method Parameters
Parameter | Description
--------- | -----------
lobbyType | The type of lobby to look for. Lobby types are defined in the portal.
rating | The skill rating to use for finding the lobby. Provided as a separate parameter because it may not exactly match the user's rating (especially in cases where parties are involved).
otherUserCxIds | Array of other users (i.e. party members) to add to the lobby as well. Will constrain things so that only lobbies with room for all players will be considered.
settings | Owner settings for this lobby.
isReady | Initial ready-status of this user.
extraJson | Initial extra-data about this user.
teamCode | Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.
configOverrides | Per-instance configuration overrides applied on top of the standard lobby type. Currently supports `teams` (a complete replacement list of team definitions: `code`, `minUsers`, `maxUsers`, `autoAssign`).
pingData | Ping times for each region available for this lobby type. Can use GET_REGIONS_FOR_LOBBIES to retrieve the list of regions for a given lobby type.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string lobbyType = "4v4";
int rating = 76;
string otherUserCxIds = "[\"55555:aaa-bbb-ccc-ddd:asdfjkl\"]";
string settings = "{}";
bool isReady = False;
string extraJson = "{}";
string teamCode = "reserved";
string configOverrides = "{\"teams\": [{\"code\": \"reserved\", \"minUsers\": 0, \"maxUsers\": 1, \"autoAssign\": False}, {\"code\": \"all\", \"minUsers\": 6, \"maxUsers\": 6, \"autoAssign\": True}]}";
string pingData = "{\"ca-central-1\": 98, \"us-west-1\": 123}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LobbyService.CreateLobbyWithConfigAndPingData(lobbyType, rating, otherUserCxIds, settings, isReady, extraJson, teamCode, configOverrides, pingData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *lobbyType = "4v4";
int rating = 76;
const char *otherUserCxIds = "[\"55555:aaa-bbb-ccc-ddd:asdfjkl\"]";
const char *settings = "{}";
bool isReady = False;
const char *extraJson = "{}";
const char *teamCode = "reserved";
const char *configOverrides = "{\"teams\": [{\"code\": \"reserved\", \"minUsers\": 0, \"maxUsers\": 1, \"autoAssign\": False}, {\"code\": \"all\", \"minUsers\": 6, \"maxUsers\": 6, \"autoAssign\": True}]}";
const char *pingData = "{\"ca-central-1\": 98, \"us-west-1\": 123}";
<%= data.branding.codePrefix %>.getLobbyService().createLobbyWithConfigAndPingData(lobbyType, rating, otherUserCxIds, settings, isReady, extraJson, teamCode, configOverrides, pingData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Obj-C">
```

```objectivec
NSString *lobbyType = @"4v4";
int rating = 76;
NSString *otherUserCxIds = @"[\"55555:aaa-bbb-ccc-ddd:asdfjkl\"]";
NSString *settings = @"{}";
BOOL isReady = False;
NSString *extraJson = @"{}";
NSString *teamCode = @"reserved";
NSString *configOverrides = @"{\"teams\": [{\"code\": \"reserved\", \"minUsers\": 0, \"maxUsers\": 1, \"autoAssign\": False}, {\"code\": \"all\", \"minUsers\": 6, \"maxUsers\": 6, \"autoAssign\": True}]}";
NSString *pingData = @"{\"ca-central-1\": 98, \"us-west-1\": 123}";
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> lobbyService] createLobbyWithConfigAndPingData:
                    lobbyType:lobbyType
                       rating:rating
               otherUserCxIds:otherUserCxIds
                     settings:settings
                      isReady:isReady
                    extraJson:extraJson
                     teamCode:teamCode
              configOverrides:configOverrides
                     pingData:pingData
              completionBlock:successBlock
         errorCompletionBlock:failureBlock
                     cbObject:nil]
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String lobbyType = "4v4";
int rating = 76;
String otherUserCxIds = "[\"55555:aaa-bbb-ccc-ddd:asdfjkl\"]";
String settings = "{}";
bool isReady = False;
String extraJson = "{}";
String teamCode = "reserved";
String configOverrides = "{\"teams\": [{\"code\": \"reserved\", \"minUsers\": 0, \"maxUsers\": 1, \"autoAssign\": False}, {\"code\": \"all\", \"minUsers\": 6, \"maxUsers\": 6, \"autoAssign\": True}]}";
String pingData = "{\"ca-central-1\": 98, \"us-west-1\": 123}";
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getLobbyService.createLobbyWithConfigAndPingData(lobbyType, rating, otherUserCxIds, settings, isReady, extraJson, teamCode, configOverrides, pingData, this);

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
var rating = 76;
var otherUserCxIds = [
    "55555:aaa-bbb-ccc-ddd:asdfjkl"
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
var pingData = {
    "ca-central-1": 98,
    "us-west-1": 123
};
<%= data.branding.codePrefix %>.lobby.createLobbyWithConfigAndPingData(lobbyType, rating, otherUserCxIds, settings, isReady, extraJson, teamCode, configOverrides, pingData, result =>
{
  var status = result.status;
  console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
var lobbyType = "4v4";
var rating = 76;
var otherUserCxIds = [
    "55555:aaa-bbb-ccc-ddd:asdfjkl"
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
var pingData = {
    "ca-central-1": 98,
    "us-west-1": 123
};
ServerResponse result = await <%= data.branding.codePrefix %>.lobbyService.createLobbyWithConfigAndPingData(lobbyType:lobbyType, rating:rating, otherUserCxIds:otherUserCxIds, settings:settings, isReady:isReady, extraJson:extraJson, teamCode:teamCode, configOverrides:configOverrides, pingData:pingData);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="lua" label="Roblox">
```

```lua
local lobbyType = "4v4"
local rating = 76
local otherUserCxIds = [
    "55555:aaa-bbb-ccc-ddd:asdfjkl"
]
local settings = {}
local isReady = false
local extraJson = {}
local teamCode = "reserved"
local configOverrides = {
    teams= [
        {
            code= "reserved",
            minUsers= 0,
            maxUsers= 1,
            autoAssign= false
        },
        {
            code= "all",
            minUsers= 6,
            maxUsers= 6,
            autoAssign= true
        }
    ]
}
local pingData = {
    "ca-central-1": 98,
    "us-west-1": 123
}
local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end
<%= data.branding.codePrefix %>:getLobbyService():createLobbyWithConfigAndPingData(lobbyType, rating, otherUserCxIds, settings, isReady, extraJson, teamCode, configOverrides, pingData, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="gdscript" label="GDScript">
```

```gdscript
var lobby_type = "4v4"
var rating = 76
var other_user_cx_ids = [
    "55555:aaa-bbb-ccc-ddd:asdfjkl"
]
var settings = {}
var is_ready = False
var extra_json = {}
var team_code = "reserved"
var config_overrides = {
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
}
var ping_data = {
    "ca-central-1": 98,
    "us-west-1": 123
}

var result = await <%= data.branding.codePrefix %>.lobby_service.create_lobby_with_config_and_ping_data(lobby_type, rating, is_ready, extra_json, team_code, settings, config_overrides, ping_data, other_user_cx_ids)

if result.status == 200:
	print("Success")
else:
	print("Failed: %s" % result.status_message)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var lobbyType = "4v4";
var rating = 76;
var otherUserCxIds = [
    "55555:aaa-bbb-ccc-ddd:asdfjkl"
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
var pingData = {
    "ca-central-1": 98,
    "us-west-1": 123
};
var lobbyProxy = bridge.getLobbyServiceProxy();

var postResult = lobbyProxy.createLobbyWithConfigAndPingData(lobbyType, rating, otherUserCxIds, settings, isReady, extraJson, teamCode, configOverrides, pingData);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"lobby",
    "operation":"CREATE_LOBBY_WITH_CONFIG_AND_PING_DATA",
    "data":{
        "lobbyType":"4v4",
        "rating":76,
        "otherUserCxIds":[
            "55555:aaa-bbb-ccc-ddd:asdfjkl"
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
        },
        "pingData":{
            "ca-central-1":98,
            "us-west-1":123
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
