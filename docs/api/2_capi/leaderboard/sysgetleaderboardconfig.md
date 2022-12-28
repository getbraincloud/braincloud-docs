# SysGetLeaderboardConfig
## Overview
Returns leaderboard configuration information, including tournament settings, for future and current (active) version of the specified leaderboard.

<PartialServop service_name="leaderboard" operation_name="SYS_GET_LEADERBOARD_CONFIG" / >

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
var leaderboardId = "aLeaderboardId";

var leaderboardProxy = bridge.getLeaderboardServiceProxy();
var retVal = leaderboardProxy.sysGetLeaderboardConfig(leaderboardId);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "leaderboard",
	"operation": "SYS_GET_LEADERBOARD_CONFIG",
	"data": {
		"leaderboardId": "aLeaderboardId"
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
    "^D^d3^1": {
      "leaderboardId": "^D^d3^1",
      "dbVersion": 2,
      "resetAt": 1654794120000,
      "leaderboardType": "HIGH_VALUE",
      "rotationType": "DAILY",
      "retainedCount": 2,
      "data": {},
      "numDaysToRotate": 0,
      "entryType": "PLAYER",
      "tConfigs": {
        "tcode1": {
          "activeUpUntil": 2,
          "tConfigCode": "tcode1"
        },
        "testTournamentId": {
          "activeUpUntil": 9,
          "tConfigCode": "testTournamentId"
        }
      },
      "tStates": {
        "enrolMins": 0,
        "disallowMins": 0,
        "minMins": 1440,
        "compMins": 1440,
        "bufferMins": 0,
        "announcementMins": 0
      },
      "tAutoJoin": false,
      "tAutoClaim": false,
      "tEnabled": true,
      "divSet": "d3",
      "tTemplateOnly": false,
      "expiry": 1656090120000,
      "currentVersionId": 1,
      "currentPeriod": {
        "versionId": 1,
        "startingAt": 1654717860000,
        "endingAt": 1654794120000,
        "rotationType": "DAILY",
        "numDaysToRotate": 0,
        "tConfigVers": {
          "tcode1": 2,
          "testTournamentId": 9
        },
        "tState": "ACTIVE",
        "tAutoJoin": false,
        "tAutoClaim": false,
        "tRegistrationStart": 1654717860000,
        "tRegistrationEnd": 1654794120000,
        "tPlayStart": 1654717860000,
        "tPlayEnd": 1654794120000,
        "tProcessingStartAt": 1654794300000,
        "tProcessingJobId": "9e52625c-1581-4de5-8783-70557e649710",
        "tRegistrationStartJobId": null,
        "tPlayStartJobId": "69694a09-189b-4ce8-817f-65a99e34ef2a",
        "tPlayEndJobId": "54fc86bf-3f30-4e41-a4e2-9987d4e87f46",
        "tStates": {
          "enrolMins": 0,
          "disallowMins": 0,
          "minMins": 1271,
          "compMins": 1271,
          "bufferMins": 0,
          "announcementMins": 0
        }
      },
      "createdAt": 1654717860000
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | ID uniquely identifying the leaderboard configuration to retrieve.


