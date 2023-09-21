# SysEditLeaderboardConfig
## Overview
Edits a leaderboard configuration, with support for tournament leaderboards.



#### Configuration fields of **configJson**
Parameter | Description
--------- | -----------
leaderboardType | Required. Type of leaderboard. Valid values are 'LAST_VALUE', 'HIGH_VALUE', 'LOW_VALUE', 'CUMULATIVE', 'ARCADE_HIGH', 'ARCADE_LOW'.
rotationType | Required. Type of rotation. Valid values are 'NEVER', 'DAILY', 'DAYS', 'WEEKLY', 'MONTHLY', 'YEARLY'.
numDaysToRotate | Required if 'DAYS' rotation type, with valid values between 2 and 14, otherwise null.
resetAt | UTC timestamp, in milliseconds, at which to rotate the period. Always null if 'NEVER' rotation type.
retainedCount | Required. Number of rotations (versions) of the leaderboard to retain.
data | Optional parameter for data.
tEnabled | Optional parameter to set whether tournaments are enabled (true) or not (false). Can only be true for recurring rotation types (not NEVER or ADHOC). Defaults to false.
tTemplateOnly | Optional parameter to set whether leaderboard is a tournament template only (true) or not (false). Can only be true if tEnabled is true. Defaults to false.

<PartialServop service_name="leaderboard" operation_name="SYS_EDIT_LEADERBOARD_CONFIG" / >

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
var configJson = {
		"leaderboardType": "HIGH_VALUE",
		"rotationType": "DAYS",
		"numDaysToRotate": 4,
		"resetAt": 1631492744000,
		"retainedCount": 5,
		"data": { "info": "Adding tournament to encourage play." },
		"tEnabled": true,
		"tTemplateOnly": false
	};

var leaderboardProxy = bridge.getLeaderboardServiceProxy();
var retVal = leaderboardProxy.sysEditLeaderboardConfig(
    leaderboardId,
    dbVersion,
    configJson
);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "leaderboard",
	"operation": "SYS_EDIT_LEADERBOARD_CONFIG",
	"data": {
		"leaderboardId": "aLeaderboardId",
		"dbVersion": 1
		"configJson": {
			"leaderboardType": "HIGH_VALUE",
			"rotationType": "DAYS",
			"numDaysToRotate": 4,
			"resetAt": 1631492744000,
			"retainedCount": 5,
			"data": { "info": "Adding tournament to encourage play." },
			"tEnabled": true,
			"tTemplateOnly": false
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
    "aLeaderboardId2": {
      "leaderboardId": "aLeaderboardId",
      "dbVersion": 5,
      "resetAt": 1633692744000,
      "leaderboardType": "HIGH_VALUE",
      "rotationType": "DAYS",
      "retainedCount": 5,
      "data": {
        "info": "Adding tournament to encourage play."
      },
      "numDaysToRotate": 4,
      "entryType": "PLAYER",
      "tEnabled": true,
      "tTemplateOnly": false,
      "currentVersionId": 1,
      "currentPeriod": {
        "versionId": 1,
        "startingAt": 1632752317162,
        "endingAt": 1633692744000,
        "rotationType": "DAYS",
        "numDaysToRotate": 4
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
leaderboardId | ID uniquely identifying the leaderboard configuration to retrieve.
dbVersion | The database version of the leaderboard config being edited. For any version, specify -1.
configJson | Configuration changes for the leaderboard, specified as JSON object.


