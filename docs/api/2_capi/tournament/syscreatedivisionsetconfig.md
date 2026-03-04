# SysCreateDivisionSetConfig

Creates a new division set configuration

<PartialServop service_name="tournament" operation_name="SYS_CREATE_DIVISION_SET_CONFIG" />

## Method Parameters
Parameter | Description
--------- | -----------
divSetId | The unique division set id.
configJson | Configuration data defining the division set. Includes: entryType ("PLAYER" or "GROUP"), description (desc), schedule type (scheduleType), id of template leaderboard (templateLeaderboardId), maximum number of players per division set instance (maxPlayers) for PLAYER type or maximum number of groups per division set instance (maxGroups) for GROUP type, number of days after which division set instance results are to be expired (expireResultsAfterDays), and optional customJson.

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
// PLAYER example
var divSetId = "uniqueDivSetId";
var configJson = {
    "entryType": "PLAYER",
    "desc": "Gold division",
    "scheduleType": "Sync",
    "templateLeaderboardId": "divTemplatePlayerLeaderboardId",
    "maxPlayers": 100,
    "expireResultsAfterDays": 15,
    "customJson": null
};
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.sysCreateDivisionSetConfig(divSetId, configJson);

// GROUP example
configJson = {
    "entryType": "GROUP",
    "desc": "Gold division",
    "scheduleType": "Sync",
    "templateLeaderboardId": "divTemplateGroupLeaderboardId",
    "maxGroups": 100,
    "expireResultsAfterDays": 15,
    "customJson": null
};

postResult = tournamentProxy.sysCreateDivisionSetConfig(divSetId, configJson);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
// PLAYER example
{
    "service": "tournament",
    "operation": "SYS_CREATE_DIVISION_SET_CONFIG",
    "data": {
        "divSetId": "uniqueDivSetId",
        "configJson": {
            "entryType": "PLAYER",
            "desc": "Gold division",
            "scheduleType": "Sync",
            "templateLeaderboardId": "divTemplatePlayerLeaderboardId",
            "maxPlayers": 100,
            "expireResultsAfterDays": 15,
            "customJson": null
        }
    }
}

// GROUP example
{
    "service": "tournament",
    "operation": "SYS_CREATE_DIVISION_SET_CONFIG",
    "data": {
        "divSetId": "uniqueDivSetId",
        "configJson": {
            "entryType": "GROUP",
            "desc": "Gold division",
            "scheduleType": "Sync",
            "templateLeaderboardId": "divTemplateGroupLeaderboardId",
            "maxGroups": 100,
            "expireResultsAfterDays": 15,
            "customJson": null
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
        "gameId": "23782",
        "divSetId": "uniqueDivSetId",
        "entryType": "PLAYER",
        "desc": "Gold division",
        "scheduleType": "Sync",
        "lbTemplate": "l4",
        "max": 100,
        "expiryDays": 15,
        "createdAt": 1654004481428,
        "updatedAt": 1654004481428,
        "version": 1
    },
    "status": 200
}
```
</details>

