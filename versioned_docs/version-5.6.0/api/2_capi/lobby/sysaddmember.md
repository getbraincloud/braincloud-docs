# SysAddMember

Adds the given member to the given lobby instance.

<PartialServop service_name="lobby" operation_name="SYS_ADD_MEMBER" />

## Method Parameters

| Parameter      | Description                                                                                                            |
| -------------- | ---------------------------------------------------------------------------------------------------------------------- |
| memberCxId     | The cx id of the member being added.                                                                                   |
| lobbyId        | The lobby instance to join.                                                                                            |
| otherUserCxIds | Array of other users (i.e. party members) to add to the lobby as well. The call will fail if all users can't be added. |
| isReady        | Initial ready-status of this user.                                                                                     |
| extraJson      | Initial extra-data about this user.                                                                                    |
| teamCode       | Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.                             |

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
var memberCxId = "55555:aaa-bbb-ccc-ddd:ljljlj";
var lobbyId = "55555:4v4:3";
var otherUserCxIds = [
    "55555:aaa-bbb-ccc-eee:asdfjkl"
];
var isReady = False;
var extraJson = {};
var teamCode = "blue";
var lobbyProxy = bridge.getLobbyServiceProxy();

var postResult = lobbyProxy.sysAddMember(memberCxId, lobbyId, otherUserCxIds, isReady, extraJson, teamCode);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"lobby",
    "operation":"SYS_ADD_MEMBER",
    "data":{
        "memberCxId":"55555:aaa-bbb-ccc-ddd:ljljlj",
        "lobbyId":"55555:4v4:3",
        "otherUserCxIds":[
            "55555:aaa-bbb-ccc-eee:asdfjkl"
        ],
        "isReady":false,
        "extraJson":{},
        "teamCode":"blue"
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
