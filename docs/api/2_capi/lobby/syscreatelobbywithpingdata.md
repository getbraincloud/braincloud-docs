# SysCreateLobbyWithPingData

Creates an instance of a lobby. Will return the newly created lobby id in the event of a successful creation.

<PartialServop service_name="lobby" operation_name="SYS_CREATE_LOBBY_WITH_PING_DATA" />

## Method Parameters

| Parameter      | Description                                                                                                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ownerCxId      | The cx of the lobby instance owner.                                                                                                                                                  |
| lobbyType      | The type of lobby to look for. Lobby types are defined in the portal.                                                                                                                |
| rating         | The skill rating to use for finding the lobby. Provided as a separate parameter because it may not exactly match the user's rating (especially in cases where parties are involved). |
| otherUserCxIds | Array of other users (i.e. party members) to add to the lobby as well. Will constrain things so that only lobbies with room for all players will be considered.                      |
| settings       | Owner settings for this lobby.                                                                                                                                                       |
| isReady        | Initial ready-status of this user.                                                                                                                                                   |
| extraJson      | Initial extra-data about this user.                                                                                                                                                  |
| teamCode       | Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.                                                                                           |
| pingData       | Ping times for each region available for this lobby type. Can use GET_REGIONS_FOR_LOBBIES to retrieve the list of regions for a given lobby type.                                    |

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
</Tabs>
</BrowserWindow>
```

<details>
<summary>JSON Response</summary>

```json
{
    "data": {
        "lobbyId": "24797:CursorPartyV2:5"
    },
    "status": 200
}
```

</details>
