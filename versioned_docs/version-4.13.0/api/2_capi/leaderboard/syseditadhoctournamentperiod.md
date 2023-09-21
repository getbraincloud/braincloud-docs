# SysEditAdhocTournamentPeriod
## Overview
Updates a future ADHOC tournament period scheduled for the leaderboard configuration, identified by the existing period's UTC startingAt time, in milliseconds. Period being edited must be scheduled in the future, not in-progress. Tournament settings may include tournament period ('tPeriod'), tournament configs and associated flags ('tTournament') and tournament phases ('tPhases').



#### Configuration fields of **tSettingsJson**
Parameter | Description
--------- | -----------
tPeriod | Required. Defines the UTC 'startingAt' time and the duration: 'durationDays', 'durationDays', 'durationDays'. Period cannot overlap with any other ADHOC period(s), future or in-progress.
tTournament | Required. Must specify 'tConfigs' defining the tournament configuration code(s) ('tConfigCode') and tournament template version(s) ('activeUpUntil', set to -1 to pick up latest version of tournament template at time of rotation, or optionally set to a maximum fixed version) for the ADHOC period, as well as 'tAutoClaim' flag indicating whether users can automatically claim tournament rewards on login, and 'tAutoJoin' flag indicating whether users automatically join the tournament on posting score (must be free entry and only 1 tournament configured).
tPhases | Required. Defines the phases, in minutes, within the start and end period times. The total time for the enabled phases cannot exceed the overall length of the period. The competition minutes are calculated and must be greater than 0. Configurable phases: 'enrolMins', 'disallowMins', 'minMins', 'bufferMins', 'announcementMins'; and, if ADHOC tournament in progress, tournament settings may include 'tPeriod' duration settings: 'durationDays', 'durationDays', 'durationDays', which may affect endingAt time and cannot overlap with any future ADHOC periods scheduled.

<PartialServop service_name="leaderboard" operation_name="SYS_EDIT_ADHOC_TOURNAMENT_PERIOD" / >

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
var tSettingsJson = {
		"tPeriod": {
			"startingAt": 1631895835000,
			"durationDays": 2,
			"durationHours": 0,
			"durationMinutes": 0
		},
		"tTournament": {
			"tConfigs": {
				"goldLevel": {
					"tConfigCode": "goldLevel",
					"activeUpUntil": -1
				},
				"silverLevel": {
					"tConfigCode": "silverLevel",
					"activeUpUntil": -1
				}
			},
			"tAutoJoin": false,
			"tAutoClaim": false
		},
		"tPhases": {
			"enrolMins": 60,
			"announcementMins": 15,
			"disallowMins": 0,
			"bufferMins": 10
		}
 	};				

var leaderboardProxy = bridge.getLeaderboardServiceProxy();
var retVal = leaderboardProxy.sysEditAdhocTournamentPeriod(
    leaderboardId,
	dbVersion,
	periodStartingAtUtcMillis,
	tSettingsJson
);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "leaderboard",
	"operation": "SYS_EDIT_ADHOC_TOURNAMENT_PERIOD",
	"data": {
		"leaderboardId": "aLeaderboardId",
		"dbVersion": 1,
		"periodStartingAtUtcMillis":  1631895835000,
		"tSettingsJson":  {
			"tPeriod": {
				"startingAt": 1631895835000,
				"durationDays": 2,
				"durationHours": 0,
				"durationMinutes": 0
			},
			"tTournament": {
				"tConfigs": {
					"goldLevel": {
						"tConfigCode": "goldLevel",
						"activeUpUntil": -1
					},
					"silverLevel": {
						"tConfigCode": "silverLevel",
						"activeUpUntil": -1
					}
				},
				"tAutoJoin": false,
				"tAutoClaim": false
			},
			"tPhases": {
				"enrolMins": 60,
				"announcementMins": 15,
				"disallowMins": 0,
				"bufferMins": 10
			}
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
    "aLeaderboardIdC": {
      "leaderboardId": "aLeaderboardId",
      "dbVersion": 4,
      "resetAt": 1635895835000,
      "leaderboardType": "HIGH_VALUE",
      "rotationType": "ADHOC",
      "retainedCount": 5,
      "data": {},
      "numDaysToRotate": 0,
      "entryType": "PLAYER",
      "tEnabled": true,
      "tScheduled": [
        {
          "startingAt": 1635895835000,
          "endingAt": 1636155035000,
          "tConfigs": {
            "bronzeLevel": {
              "activeUpUntil": -1,
              "tConfigCode": "bronzeLevel"
            },
            "silverLevel": {
              "activeUpUntil": -1,
              "tConfigCode": "silverLevel"
            },
            "goldLevel": {
              "activeUpUntil": -1,
              "tConfigCode": "goldLevel"
            }
          },
          "tStates": {
            "enrolMins": 60,
            "disallowMins": 30,
            "minMins": 4305,
            "compMins": 4235,
            "bufferMins": 10,
            "announcementMins": 15
          },
          "tAutoJoin": false,
          "tAutoClaim": false
        }
      ],
      "tTemplateOnly": false,
      "currentVersionId": 1,
      "currentPeriod": {
        "versionId": 1,
        "startingAt": 1632253445307,
        "endingAt": 1635895835000,
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
tSettingsJson | Tournament settings for the new ADHOC tournament period being scheduled.


