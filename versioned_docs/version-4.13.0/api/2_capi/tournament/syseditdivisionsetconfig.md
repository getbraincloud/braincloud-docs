# SysEditDivisionSetConfig
## Overview
Updates a division set configuration with specified changes

<PartialServop service_name="tournament" operation_name="SYS_EDIT_DIVISION_SET_CONFIG" / >

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
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var divSetId = "aDivSetId";
var version = 2;
var configJson = {
  "desc": "Gold division",
  "scheduleType": "Sync",
  "templateLeaderboardId": "divTemplateLeaderboardId",
  "maxPlayers": 100,
  "expireResultsAfterDays": 15
};
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.sysEditDivisionSetConfig(divSetId, version, configJson);
if (postResult.status == 200) {
  // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
  "service": "tournament",
  "operation": "SYS_EDIT_DIVISION_SET_CONFIG",
  "data":
  {
    "divSetId": "aDivSetId",
    "version": 2,
    "configJson": {
      "desc": "Gold division",
      "scheduleType": "Sync",
      "templateLeaderboardId": "divTemplateLeaderboardId",
      "maxPlayers": 100,
      "expireResultsAfterDays": 15
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
    "desc": "Gold division updated",
    "scheduleType": "Sync",
    "lbTemplate": "l4",
    "max": 80,
    "expiryDays": 15,
    "createdAt": 1654004481428,
    "updatedAt": 1654004783858,
    "version": 2
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
divSetId | The division set id uniquely identifying the division set configuration to be updated.
version | Current version number of division set config to update. Use -1 to disable version checking.
configJson | Configuration data defining the division set configuration changes, which may include changes to: description (desc), schedule type (scheduleType), id of template leaderboard (templateLeaderboardId), maximum number of players per division set instance (maxPlayers), and number of days after which division set instance results are to be expired (expireResultsAfterDays).


