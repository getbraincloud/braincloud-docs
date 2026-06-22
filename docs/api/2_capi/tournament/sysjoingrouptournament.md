# SysJoinGroupTournament

Enrolls a member's group in the group tournament and assigns an initial score. Unlike JoinGroupTournament, this sys call does not require the caller to be a member of the group.

<PartialServop service_name="tournament" operation_name="SYS_JOIN_GROUP_TOURNAMENT" />

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | The leaderboard for the group tournament.
tournamentCode | Group tournament to join.
groupId | Member's group id.
initialScore | Initial score for the group.

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
var leaderboardId = "the-leaderboard-id";
var tournamentCode = "exampleTournamentCode1";
var groupId = "the-group-id";
var initialScore = 0;
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.sysJoinGroupTournament(leaderboardId, tournamentCode, groupId, initialScore);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"tournament",
    "operation":"SYS_JOIN_GROUP_TOURNAMENT",
    "data":{
        "leaderboardId":"the-leaderboard-id",
        "tournamentCode":"exampleTournamentCode1",
        "groupId":"the-group-id",
        "initialScore":0
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
    "enrolled": true
  },
  "status": 200
}
```

</details>
