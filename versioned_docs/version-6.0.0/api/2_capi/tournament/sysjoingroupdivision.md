# SysJoinGroupDivision

Enrolls a group in a division set and assigns an initial score. Unlike JoinGroupDivision, this sys call does not require the caller to be a member of the group.

<PartialServop service_name="tournament" operation_name="SYS_JOIN_GROUP_DIVISION" />

## Method Parameters
Parameter | Description
--------- | -----------
groupId | The group id.
divisionSetId | The division set id to join.
tournamentCode | Tournament code for the division.
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
var groupId = "the-group-id";
var divisionSetId = "exampleDivSetId";
var tournamentCode = "exampleTournamentCode1";
var initialScore = 0;
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.sysJoinGroupDivision(groupId, divisionSetId, tournamentCode, initialScore);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"tournament",
    "operation":"SYS_JOIN_GROUP_DIVISION",
    "data":{
        "groupId":"the-group-id",
        "divisionSetId":"exampleDivSetId",
        "tournamentCode":"exampleTournamentCode1",
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
    "createdAt": 1772655480000,
    "leaderboardId": "^D^exampleDivSetId^1",
    "enrolled": true
  },
  "status": 200
}
```

</details>
