# SysEditTournamentSettingsIncludingCurrentPeriod
## Overview
Updates the tournament settings for the leaderboard configuration, for the current period in progress, as well as the future periods if recurring periods (not ADHOC). Supported tSettingsJson settings include: 'tTournament' (with 'tConfigs' to configure tournament templates, 'tAutoJoin' flag, 'tAutoClaim' flag), and 'tPhases' (to schedule 'enrolMins', 'announcementMins', 'disallowMins' and 'bufferMins' minutes), and, if ADHOC tournament in progress, API also supports 'tPeriod' duration settings ('durationDays', 'durationDays', 'durationDays').



#### Configuration fields of **tSettingsJson**
Parameter | Description
--------- | -----------
tTournament | Tournament settings changes for the in-progress leaderboard rotation, specified as JSON object.
  | * 'tConfigs' -- Defines the tournament configurations codes and versions for the leaderboard. Set 'activeUpUntil' to -1 to pick up latest version of tournament template at time of rotation, or optionally set to a maximum fixed version.
  | * 'tAutoJoin' -- Set to true to have users automatically join the tournament on posting score. Only supported if only 1 tournament configured and free entry.
  | * 'tAutoClaim' -- Set to true to have users automatically claim tournament rewards on login.
tPhases | Defines the phases (states), in minutes, within the start and end period times. The total time for the enabled phases cannot exceed the overall length of the period. The competition minutes are calculated and must be greater than 0. Configurable phases: 'enrolMins', 'disallowMins', 'bufferMins', 'announcementMins'.

<PartialServop service_name="leaderboard" operation_name="SYS_EDIT_TOURNAMENT_SETTINGS_INCLUDING_CURRENT_PERIOD" / >

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
var dbVersion = 1;
var tSettingsJson = {
    "tPeriod": {
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
				},
				"bronzeLevel": {
					"tConfigCode": "bronzeLevel",
					"activeUpUntil": -1
				}
			},
			"tAutoJoin": false,
			"tAutoClaim": false
		},
		"tPhases": {
			"enrolMins": 60,
			"announcementMins": 15,
			"disallowMins": 30,
			"bufferMins": 10
		}
  	};

var leaderboardProxy = bridge.getLeaderboardServiceProxy();
var retVal = leaderboardProxy.sysEditTournamentSettingsIncludingCurrentPeriod(leaderboardId, dbVersion, tSettingsJson);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "leaderboard",
	"operation": "SYS_EDIT_TOURNAMENT_SETTINGS_INCLUDING_CURRENT_PERIOD",
	"data": {
		"leaderboardId": "aLeaderboardId",
		"dbVersion": 1
		"tSettingsJson":  {
      "tPeriod": {
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
					},
					"bronzeLevel": {
						"tConfigCode": "bronzeLevel",
						"activeUpUntil": -1
					}
				},
				"tAutoJoin": false,
				"tAutoClaim": false
			},
			"tPhases": {
				"enrolMins": 60,
				"announcementMins": 15,
				"disallowMins": 30,
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
    "aLeaderboardId": {
      "leaderboardId": "aLeaderboardId",
      "dbVersion": 12,
      "resetAt": 1631992744000,
      "leaderboardType": "HIGH_VALUE",
      "rotationType": "DAILY",
      "retainedCount": 5,
      "data": {
        "info": "Adding tournament to encourage play."
      },
      "numDaysToRotate": 0,
      "entryType": "PLAYER",
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
        "minMins": 1425,
        "compMins": 1355,
        "bufferMins": 10,
        "announcementMins": 15
      },
      "tAutoJoin": false,
      "tAutoClaim": false,
      "tEnabled": true,
      "tTemplateOnly": false,
      "currentVersionId": 2,
      "currentPeriod": {
        "versionId": 2,
        "startingAt": 1631735669172,
        "endingAt": 1631992744000,
        "rotationType": "DAILY",
        "numDaysToRotate": 0,
        "tConfigVers": {
          "bronzeLevel": 1,
          "silverLevel": 1,
          "goldLevel": 1
        },
        "tState": "ACTIVE",
        "tAutoJoin": false,
        "tAutoClaim": false,
        "tRegistrationStart": 1631907244000,
        "tRegistrationEnd": 1631990344000,
        "tPlayStart": 1631910844000,
        "tPlayEnd": 1631992144000,
        "tProcessingStartAt": 1631992924000,
        "tProcessingJobId": "7708a6b3-9d71-4d04-bf90-ac12cc46ada5",
        "tRegistrationStartJobId": "129287e3-aedc-451e-b83c-bed08b3d0b7c",
        "tPlayStartJobId": "11ec518e-9193-4546-9d1e-ed5b08648095",
        "tPlayEndJobId": "10c9d7c8-039c-436f-b6c0-a4480bd1c0d1",
        "tStates": {
          "enrolMins": 60,
          "disallowMins": 30,
          "minMins": 1425,
          "compMins": 1355,
          "bufferMins": 10,
          "announcementMins": 15
        }
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
leaderboardId | ID uniquely identifying the leaderboard configuration being edited. Leaderboard must have tournaments enabled.
dbVersion | The database version of the leaderboard config being edited. For any version, specify -1.
tSettingsJson | Tournament and tPhases settings changes specified as JSON object. 


