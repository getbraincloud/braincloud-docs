# SysAddMemberWithPingData

Adds the given member to the given lobby instance.

<PartialServop service_name="lobby" operation_name="SYS_ADD_MEMBER_WITH_PING_DATA" />

## Method Parameters

| Parameter      | Description                                                                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| memberCxId     | The cx id of the member to add.                                                                                                                   |
| lobbyId        | The lobby instance to join.                                                                                                                       |
| otherUserCxIds | Array of other users (i.e. party members) to add to the lobby as well. The call will fail if all users can't be added.                            |
| isReady        | Initial ready-status of this user.                                                                                                                |
| extraJson      | Initial extra-data about this user.                                                                                                               |
| teamCode       | Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.                                                        |
| pingData       | Ping times for each region available for this lobby type. Can use GET_REGIONS_FOR_LOBBIES to retrieve the list of regions for a given lobby type. |

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
<TabItem value="roblox" label="Roblox">
```

```lua
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var memberCxId = "55555:aaa-bbb-ccc-ddd:llljlj";
var lobbyId = "55555:4v4:3";
var otherUserCxIds = [
    "55555:aaa-bbb-ccc-eee:asdfjkl"
];
var isReady = False;
var extraJson = {};
var teamCode = "blue";
var pingData = {
    "ca-central-1": 98,
    "us-west-1": 123
};
var lobbyProxy = bridge.getLobbyServiceProxy();

var postResult = lobbyProxy.sysAddMemberWithPingData(memberCxId, lobbyId, otherUserCxIds, isReady, extraJson, teamCode, pingData);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"lobby",
    "operation":"SYS_ADD_MEMBER_WITH_PING_DATA",
    "data":{
        "memberCxId":"55555:aaa-bbb-ccc-ddd:llljlj",
        "lobbyId":"55555:4v4:3",
        "otherUserCxIds":[
            "55555:aaa-bbb-ccc-eee:asdfjkl"
        ],
        "isReady":false,
        "extraJson":{},
        "teamCode":"blue",
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
    "status": 200,
    "data": {}
}
```

</details>
