# SysDeleteAdhocTournamentPeriod
## Overview
Deletes a future ADHOC tournament period scheduled for the leaderboard configuration, identified by the existing period's UTC startingAt time, in milliseconds. Period being edited must be scheduled in the future, not in-progress. Tournament settings may include tournament period ('tPeriod'), tournament configs and associated flags ('tTournament') and tournament phases ('tPhases').

<PartialServop service_name="leaderboard" operation_name="SYS_DELETE_ADHOC_TOURNAMENT_PERIOD" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
//cloud code only
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
//cloud code only
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
//cloud code only
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
//cloud code only
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
//cloud code only
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var leaderboardId = "default";
var dbVersion = 1;
var periodStartingAtUtcMillis = 1631895835000;

var leaderboardProxy = bridge.getLeaderboardServiceProxy();
var retVal = leaderboardProxy.sysDeleteAdhocTournamentPeriod(
    leaderboardId,
	dbVersion,
	periodStartingAtUtcMillis
);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "leaderboard",
	"operation": "SYS_DELETE_ADHOC_TOURNAMENT_PERIOD",
	"data": {
		"leaderboardId": "aLeaderboardId",
		"dbVersion": 1,
		"periodStartingAtUtcMillis":  1631895835000
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
    "aLeaderboardIdC": {
      "leaderboardId": "aLeaderboardId",
      "dbVersion": 6,
      "resetAt": null,
      "leaderboardType": "HIGH_VALUE",
      "rotationType": "ADHOC",
      "retainedCount": 5,
      "data": {},
      "numDaysToRotate": 0,
      "entryType": "PLAYER",
      "tEnabled": true,
      "tTemplateOnly": false,
      "currentVersionId": 1,
      "currentPeriod": {
        "versionId": 1,
        "startingAt": 1632253445307,
        "endingAt": null,
        "rotationType": "ADHOC",
        "numDaysToRotate": 0
      }
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | ID uniquely identifying the leaderboard configuration to edit. Leaderboard must be configured with ADHOC rotation type.
dbVersion | The database version of the leaderboard config being edited. For any version, specify -1.
periodStartingAtUtcMillis | The exact startingAt UTC timestamp, in milliseconds, identifying the ADHOC period being edited.


