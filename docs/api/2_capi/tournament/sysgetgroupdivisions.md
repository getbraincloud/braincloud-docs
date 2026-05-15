# SysGetGroupDivisions
Returns a list of the group's recently active divisions, organized by simplified tournament state: ACTIVE, PENDING, COMPLETE. Unlike GetGroupDivisions, this sys call does not require the caller to be a member of the group.

<PartialServop service_name="tournament" operation_name="SYS_GET_GROUP_DIVISIONS" />

## Method Parameters
Parameter | Description
--------- | -----------
groupId | The group id.

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
<TabItem value="lua" label="Roblox">
```

```lua
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var groupId = "the-group-id";
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.sysGetGroupDivisions(groupId);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"tournament",
    "operation":"SYS_GET_GROUP_DIVISIONS",
    "data":{
        "groupId":"the-group-id"
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
    "ACTIVE": {},
    "PENDING": {},
    "COMPLETE": {
      "uniqueDivSetId2": [
        "^D^uniqueDivSetId2^2"
      ]
    }
  },
  "status": 200
}
```

</details>
