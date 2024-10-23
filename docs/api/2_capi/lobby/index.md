# Lobby

The **Lobby Service** works together with custom **Room Servers** to provide multi-user experiences (i.e. online games, shared streaming, etc.) to groups of participants.

It is available to apps that have **<%= data.branding.productNameRTT %>** enabled.

:::info
You configure <em>Lobby Types</em> in the portal under <strong>Design | Multiplayer | Lobbies</strong>.
:::

### Key concepts

![Online Multiplayer Process](@site/docs/img/api-img/online_multiplayer_process.png)

_Lobbies_ are used to gather up users prior to launching shared experiences via _Room Servers_. Users can be added to teams, indicate their ready status, and adjust personal and room settings before the experience starts.

The _Lobby Service_ also offers highly configurable _Online Matchmaking_ - to quickly and efficiently pair users up together.

_For more information on Lobby Concepts, see the [Lobby Overview](/learn/key-concepts/multiplayer/lobbies/) page._

### API Summary

> `DISBANDED` event example

```json-doc
{
    "service": "lobby",
    "operation": "DISBANDED",
    "data": {
        "lobbyId": "22819:unranked:406",
        "reason": {
            "code": 80101,
            "desc": "Room successfully launched"
        }
    }
}
```

> `JOIN_FAIL` event example

```json-doc
{
    "service": "lobby",
    "operation": "JOIN_FAIL",
    "data": {
        "lobbyType": "4v4",
        "reason": {
            "code": 80200,
            "desc": "No lobbies found matching criteria"
        }
    }
}
```

> `MEMBER_JOIN` event example

```json-doc
{
    "service": "lobby",
    "operation": "MEMBER_JOIN",
    "data": {
        "lobbyId": "22819:unranked:406",
        "currentTime": 1549658965234,
        "lobby": {
            "state": "setup",
            "owner": "f6fa3e0e-6aac-497a-84e1-c8db6f545c12",
            "rating": 0,
            "lobbyTypeDef": {},
            "settings": {},
            "version": 1,
            "timetable": {
                "createdAt": 1549658965234,
                "early": 1549658965234,
                "onTime": 1549659055234,
                "tooLate": 1549659145234
            },
            "numMembers": 1,
            "members": []
        },
        "member": {
            "profileId": "f6fa3e0e-6aac-497a-84e1-c8db6f545c12",
            "name": "David",
            "pic": "",
            "rating": 0,
            "team": "player1",
            "isReady": true,
            "extra": {},
            "cxId": "22819:f6fa3e0e-6aac-497a-84e1-c8db6f545c12:bvm2ga9aelaigkbdrojp3ifjrp"
        }
    }
}
```

> `MEMBER_LEFT` event example

```json
{
    "service": "lobby",
    "operation": "MEMBER_LEFT",
    "data": {
        "lobbyId": "22979:4v4:1387",
        "lobby": {
            "owner": "d8297230-6e7b-4bad-9c66-5371eb5c101b",
            "version": 1,
            "numMembers": 1,
            "members": []
        },
        "member": {
            "profileId": "24da7a7a-8e78-45a2-8350-30ad41c5372b",
            "name": "Daivuk",
            "pic": "",
            "rating": 0,
            "team": "green",
            "isReady": false,
            "extra": {
                "loadout": "tank"
            },
            "cxId": "22979:24da7a7a-8e78-45a2-8350-30ad41c5372b:a4nto6vb672qtq1rpa1pecba48"
        },
        "reason": {
            "code": 80000,
            "desc": "Left by choice"
        }
    }
}
```

> `MEMBER_UPDATE` event example

```json
{
    "service": "lobby",
    "operation": "MEMBER_UPDATE",
    "data": {
        "lobbyId": "22979:4v4:662",
        "member": {
            "profileId": "841cf9fa-1a93-4a7a-a36b-e5833f7e239b",
            "name": "ste123",
            "pic": "",
            "rating": 0,
            "team": "red",
            "isReady": true,
            "extra": {
                "loadout": "scout"
            },
            "cxId": "22979:841cf9fa-1a93-4a7a-a36b-e5833f7e239b:acturqk5p5qaenvio8msecob9d"
        }
    }
}
```

> `ROOM_ASSIGNED` event example

```json
{
    "service": "lobby",
    "operation": "ROOM_ASSIGNED",
    "data": {
        "lobbyId": "22819:unranked:406",
        "connectData": {
            "roomId": "22819:unranked:406",
            "url": "207.219.200.99",
            "port": 9307,
            "wsPort": 9308
        },
        "passcode": "978b63"
    }
}
```

> `ROOM_READY` event example

```json
{
    "service": "lobby",
    "operation": "ROOM_READY",
    "data": {
        "lobbyId": "22819:unranked:406",
        "connectData": {
            "roomId": "22819:unranked:406",
            "url": "207.219.200.99",
            "port": 9307,
            "wsPort": 9308
        },
        "passcode": "978b63"
    }
}
```

> `SETTINGS_UPDATE` event example

```json
{
    "service": "lobby",
    "operation": "SETTINGS_UPDATE",
    "data": {
        "lobbyId": "22979:4v4:662",
        "lobby": {
            "settings": {
                "gameTime": 300
            },
            "version": 1
        },
        "currentTime": 1549916254804
    }
}
```

> `STARTING` event example

```json
{
    "service": "lobby",
    "operation": "STARTING",
    "data": {
        "lobbyId": "22819:unranked:406",
        "lobby": {
            "state": "starting",
            "owner": "f6fa3e0e-6aac-497a-84e1-c8db6f545c12",
            "settings": {},
            "version": 1,
            "numMembers": 2,
            "members": []
        }
    }
}
```

> `STATUS_UPDATE` event example

```json
{
    "service": "lobby",
    "operation": "STATUS_UPDATE",
    "data": {
        "lobbyId": "22819:unranked:406",
        "lobby": {
            "state": "early",
            "owner": "f6fa3e0e-6aac-497a-84e1-c8db6f545c12",
            "version": 1,
            "numMembers": 2,
            "members": []
        }
    }
}
```

> `ROOM_PROGRESS` event example

```json
{
    {
    "service": "lobby",
    "operation": "ROOM_PROGRESS",
    "data": {
      "lobbyId": "23649:CursorPartyV2:4186",
      "curStep": 1,
      "ofStep": 5,
      "msg": "Host lookup",
      "variation": "no-host-found"
    }
  },
  {
    "service": "lobby",
    "operation": "ROOM_PROGRESS",
    "data": {
      "lobbyId": "23649:CursorPartyV2:4186",
      "curStep": 2,
      "ofStep": 5,
      "msg": "New host started"
    }
  },
  {
    "service": "lobby",
    "operation": "ROOM_PROGRESS",
    "data": {
      "lobbyId": "23649:CursorPartyV2:4186",
      "curStep": 3,
      "ofStep": 5,
      "msg": "Host docker init"
    }
  },
  {
    "service": "lobby",
    "operation": "ROOM_PROGRESS",
    "data": {
      "lobbyId": "23649:CursorPartyV2:4186",
      "curStep": 4,
      "ofStep": 5,
      "msg": "Pulling container image"
    }
  },
  {
    "service": "lobby",
    "operation": "ROOM_PROGRESS",
    "data": {
      "lobbyId": "23649:CursorPartyV2:4186",
      "curStep": 5,
      "ofStep": 5,
      "msg": "Starting container"
    }
  }
}
```

The Lobby Service provides APIs for _Online Matchmaking_, _Lobby Experience_ and _Room Server Integration_.

### Online Matchmaking

The _Online Matchmaking_ APIs allow users to find and/or create lobbies:

-   [FindLobby](/api/capi/lobby/findlobby) - Find a lobby to meet the provided specs.
-   [CreateLobby](/api/capi/lobby/createlobby) - Create a lobby.
-   [FindOrCreateLobby](/api/capi/lobby/findorcreatelobby) - Search for lobby; create one if nothing suitable is found.
-   [JoinLobby](/api/capi/lobby/joinlobby) - Adds the caller to the given lobby instance.

-   [GetRegionsForLobbies](/api/capi/lobby/getregionsforlobbies) - Retrieves the region settings for each of the given lobby types.
-   [PingRegions](/api/capi/lobby/pingregions) - Retrieves associated PingData averages to be used with all associated WithPingData APIs.

-   [FindLobbyWithPingData](/api/capi/lobby/findlobbywithpingdata) - Adds the caller to the lobby entry queue.
-   [FindOrCreateLobbyPingData](/api/capi/lobby/createlobbywithpingdata) - Creates an instance of a lobby.
-   [FindOrCreateLobbyWithPingData](/api/capi/lobby/findorcreatelobbywithpingdata) - Adds the caller to the lobby entry queue and will create a lobby if none are found.
-   [JoinLobbyWithPingData](/api/capi/lobby/joinlobbywithpingdata) - Adds the caller to the given lobby instance.

### Lobby Experience

The following APIs allow users to interact with lobby's once they have joined:

-   [GetLobbyData](/api/capi/lobby/getlobbydata) - request info about the lobby
-   [UpdateReady](/api/capi/lobby/updateready) - update the user's ready-status
-   [UpdateSettings](/api/capi/lobby/updatesettings) - update the lobby's setting data (owner only)
-   [SwitchTeam](/api/capi/lobby/switchteam) - switch teams
-   [SendSignal](/api/capi/lobby/sendsignal) - send an event to all other lobby members
-   [LeaveLobby](/api/capi/lobby/leavelobby) - leave the lobby
-   [RemoveMember](/api/capi/lobby/removemember) - kicks another member from the lobby

### Room Service Integration

The following APIs are called by Room Service providers:

-   [SysRoomReady](/api/capi/lobby/sysroomready) - the room experience is ready to launch
-   [SysRoomCancelled](/api/capi/lobby/sysroomcancelled) - the room server request cannot be fulfilled

### Lobby Events

These APIs can result in the following events being sent to lobby members.

| Event                   | Data                                                            | Description                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MATCHMAKING_IN_PROGRESS | lobbyType, step, maxSteps, minRating, maxRating, lobbiesInRange | Start provisioning lobby. Sent to everyone as they are being processed for each marchmaking round.                                                                                                                                                                                                                                                                    |
| MEMBER_JOIN             | lobbyId, currentTime, lobby, memeber                            | A new member has joined the lobby. Sent to everyone, including the user who joined.                                                                                                                                                                                                                                                                                   |
| JOIN_FAIL               | lobbyType, reason                                               | Could not locate a lobby that satisfies the filter criteria in the specified timeframe. The returned `reason` is mapped with `code` (including `NO_LOBBIES_FOUND`, `FIND_REQUEST_CANCELLED`) and `desc`.                                                                                                                                                              |
| MEMBER_LEFT             | lobbyId, lobby, member, reason                                  | A member has left the lobby. Sent to everyone, including the user who left. The returned `reason` is mapped with `code` (including `LEFT_BY_CHOICE`, `EVICTED`, `LOST_CONNECTION`) and `desc`.                                                                                                                                                                        |
| MEMBER_UPDATE           | lobbyId, lobby, member                                          | A member has updated their data, which may include switching teams, thus why all of lobbyData is returned.                                                                                                                                                                                                                                                            |
| SIGNAL                  | lobbyId, from (optional), signalData                            | This message allows players in lobbies to send messages to all other players.                                                                                                                                                                                                                                                                                         |
| SETTINGS_UPDATE         | lobbyId, currentTime, lobby                                     | Changes to the settings that will be used to start the room.                                                                                                                                                                                                                                                                                                          |
| STATUS_UPDATE           | lobbyId, lobby                                                  | The status of the overall lobby has changed.                                                                                                                                                                                                                                                                                                                          |
| STARTING                | lobbyId, lobby                                                  | This message is sent once all the hosted server launch conditions have been met and a server instance is being started.                                                                                                                                                                                                                                               |
| ROOM_PROGRESS           | lobbyId, curStep, ofStep, msg                                   | The configurable Room-Progress messages are transmitted between the events of `STARTING` and `ROOM_READY`, serving to indicate the progress of the provisioning of the room server. In the case of a new host being initiated, there are a total of 5 progress steps, whereas if this is not the case, there are 4 steps. See the following example for more details. |
| ROOM_ASSIGNED           | lobbyId, connectData, passcode                                  | A room has been allocated for this lobby. `connectData` is likely incompolete. Each lobby member receives a random alphanumeric passcode for use in connecting to the room server to guard against impersonation.                                                                                                                                                     |
| ROOM_READY              | lobbyId, connectData, passcode                                  | Go connect to the specified room. Will normally be immediately followed by DISBANDED. The same passcode as sent in ROOM_ASSIGNED will be repeated here as well.                                                                                                                                                                                                       |
| DISBANDED               | lobbyId, reason, msg (optional)                                 | The lobby has been terminated. The returned `reason` is mapped with `code` (including `TIMEOUT`, `ROOM_READY`, `ROOM_READY_TIMEOUT`, `ROOM_CANCELLED`, `ERROR_ASSIGNING_ROOM`, `ERROR_LAUNCHING_ROOM`, `HOSTING_NOT_ENABLED`, `SERVER_MAX_REACHED`, `BY_REQUEST`) and `desc`.                                                                                         |

An example of using the returned `reason code` of DISBANDED:

```
if (result.data.reason.code != this.bc.reasonCodes.RTT_ROOM_READY)
{
    // Disbanded for any other reason than ROOM_READY, means we failed to launch the game.
    this.onGameScreenClose()
}
```

An example of ROOM_PROGRESS messages when a host is found:

```json
{
  {
    "service": "lobby",
    "operation": "ROOM_PROGRESS",
    "data": {
      "lobbyId": "23649:CursorPartyV2:4186",
      "curStep": 1,
      "ofStep": 4,
      "msg": "Host lookup",
      "variation": "host-found"
    }
  },
  {
    "service": "lobby",
    "operation": "ROOM_PROGRESS",
    "data": {
      "lobbyId": "23649:CursorPartyV2:4186",
      "curStep": 2,
      "ofStep": 4,
      "msg": "Host docker init"
    }
  },
  {
    "service": "lobby",
    "operation": "ROOM_PROGRESS",
    "data": {
      "lobbyId": "23649:CursorPartyV2:4186",
      "curStep": 3,
      "ofStep": 4,
      "msg": "Pulling container image"
    }
  },
  {
    "service": "lobby",
    "operation": "ROOM_PROGRESS",
    "data": {
      "lobbyId": "23649:CursorPartyV2:4186",
      "curStep": 4,
      "ofStep": 4,
      "msg": "Starting container"
    }
  }
}
```

```json
// an example of the `acture "progress" events being sent out to lobby members
{"service":"lobby","operation":"STARTING","data":{"lobbyId":"23649:CursorPartyV2:4186","lobby":{"state":"starting","settings":{},"version":1,"cRegions":[],"round":1,"isRoomReady":false,"keepAliveRateSeconds":72,"isAvailable":true,"ownerCxId":"23649:37e60799-468d-4440-8fce-5d8eabade18d:4s26gha7bhmiottrn3v38d8l0o","legacyLobbyOwnerEnabled":false,"numMembers":1,"members":[{"profileId":"37e60799-468d-4440-8fce-5d8eabade18d","name":"greg@bitheads.com","pic":"","rating":0,"team":"all","isReady":true,"extra":{"colorIndex":6,"presentSinceStart":false},"ipAddress":"184.148.127.43","cxId":"23649:37e60799-468d-4440-8fce-5d8eabade18d:4s26gha7bhmiottrn3v38d8l0o"}]}}}
{"service":"lobby","operation":"ROOM_PROGRESS","data":{"lobbyId":"23649:CursorPartyV2:4186","curStep":1,"ofStep":5,"msg":"Host lookup","variation":"no-host-found"}}
{"service":"lobby","operation":"ROOM_PROGRESS","data":{"lobbyId":"23649:CursorPartyV2:4186","curStep":2,"ofStep":5,"msg":"New host started"}}
{"service":"lobby","operation":"ROOM_PROGRESS","data":{"lobbyId":"23649:CursorPartyV2:4186","curStep":3,"ofStep":5,"msg":"Host docker init"}}
{"service":"lobby","operation":"ROOM_ASSIGNED","data":{"lobbyId":"23649:CursorPartyV2:4186","connectData":{"address":"3.96.222.126","ports":{"udp":9000,"tcp":9000,"ws":9001}},"passcode":"fda606"}}
{"service":"lobby","operation":"ROOM_PROGRESS","data":{"lobbyId":"23649:CursorPartyV2:4186","curStep":4,"ofStep":5,"msg":"Pulling container image"}}
{"service":"lobby","operation":"ROOM_PROGRESS","data":{"lobbyId":"23649:CursorPartyV2:4186","curStep":5,"ofStep":5,"msg":"Starting container"}}
{"service":"lobby","operation":"ROOM_READY","data":{"lobbyId":"23649:CursorPartyV2:4186","connectData":{"address":"3.96.222.126","ports":{"udp":9000,"tcp":9000,"ws":9001}},"passcode":"fda606"}}
```

### Common Event Structures

The following structures are common to multiple event types:

### `lobbyTypeDef`

The configured meta-data for the lobby type:

```json
{
    "lobbyTypeDef": {
        "roomConfig": null,
        "lobbyTypeId": "unranked",
        "teams": {
            "player1": {
                "minUsers": 1,
                "maxUsers": 1,
                "autoAssign": true,
                "code": "player1"
            },
            "player2": {
                "minUsers": 1,
                "maxUsers": 1,
                "autoAssign": true,
                "code": "player2"
            }
        },
        "rules": {
            "allowEarlyStartWithoutMax": false,
            "forceOnTimeStartWithoutReady": true,
            "onTimeStartSecs": 90,
            "everyReadyMinPercent": 100,
            "everyReadyMinNum": 2,
            "earliestStartSecs": 0,
            "tooLateSecs": 180
        },
        "desc": "Unranked match"
    }
}
```

### `members`

The list of members in the lobby, and their status:

```json
{
    "members": [
        {
            "profileId": "f6fa3e0e-6aac-497a-84e1-c8db6f545c12",
            "name": "david",
            "pic": "",
            "rating": 0,
            "team": "player2",
            "isReady": true,
            "extra": {},
            "cxId": "22819:f6fa3e0e-6aac-497a-84e1-c8db6f545c12:vn0vnr7li5ll6t7gc0om18hksg"
        },
        {
            "profileId": "1dab1250-facb-419a-80cf-3d2de4e91e0b",
            "name": "david2",
            "pic": "",
            "rating": 0,
            "team": "player1",
            "isReady": true,
            "extra": {},
            "cxId": "22819:1dab1250-facb-419a-80cf-3d2de4e91e0b:bkr44a0ssbd0q3ae3r2i2refjh"
        }
    ]
}
```

### `settings`

The developer-defined, dynamic settings for this lobby instance:

```json
{
    "settings": {
        "gameTime": 300,
        "isPlaying": 0,
        "mapLayout": 0,
        "mapSize": 1,
        "gameName": "ste123's Room",
        "maxPlayers": 8,
        "lightPosition": 0,
        "minLevel": 0,
        "maxLevel": 50
    }
}
```

_The json above is just an example - it can be whatever the developer decides._

### Search Algorithms

When looking for a lobby.

### `ranged-percent`

Ranges provided are interpreted as percentages to be applied to the user's rating for matchmaking.

```json
{
    "algo": {
        "strategy": "ranged-percent",
        "alignment": "center",
        "ranges": [10, 20, 80]
    }
}
```

### `ranged-absolute`

Ranges provided are interpreted as absolute values to add/subtract from the user's rating when calculating the range for matchmaking

```json
{
    "algo": {
        "strategy": "ranged-absolute",
        "alignment": "center",
        "ranges": [5, 7.5, 10]
    }
}
```

### `compound`

The compound algorithm allows multiple criteria to be used as the matchmaking filter. This is the approach to use when doing geo-matchmaking using the `WithPingData()` calls.

```json
{
    "strategy": "compound",
    "algos": [
        { "criteria": "ping", "strategy": "absolute", "alignment": "absolute" },
        {
            "criteria": "rating",
            "strategy": "ranged-absolute",
            "alignment": "center"
        }
    ],
    "compound-ranges": [
        [30, [5, 10]],
        [50, [10, 15]]
    ]
}
```

In the example above, matchmaking will look for matches as follows:

-   step 1: matches in regions with < 30ms ping and lobby rating within +/- 5 of player's rating
-   step 2: matches in regions with < 30ms ping and lobby rating within +/- 5 of player's rating
-   step 3: matches in regions with < 50ms ping and lobby rating within +/- 10 of player's rating
-   step 4: matches in regions with < 50ms ping and lobby rating within +/- 15 of player's rating

### `alignment`

The following alignment options are available, and show how they would affect a range of +/- 10 range for a ranking of 80.

| Alignment | Min | Max | Description                                                                                                                                                         |
| --------- | --- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| high      | 80  | 100 | Ensures that lobbies must have skill rating >= to the candidate. Leaves the min equal to player rating, and adds 200% of the range to the max.                      |
| mid-high  | 75  | 95  | Subtracks 50% of the range for the min, and adds 150% of the range to the max.                                                                                      |
| center    | 70  | 90  | Centers the range around the candidate's rating.                                                                                                                    |
| mid-low   | 65  | 85  | Subtracts 150% of the range for the min, and adds 50% of the range to the max.                                                                                      |
| low       | 60  | 80  | Ensures that lobbies will have skill rating <= to the candidate. Subtracts 200% of the range from the rating to calculate min, and leaves max as the player rating. |

<DocCardList />
