# SysCreateLeaderboardConfig
## Overview
Creates a leaderboard configuration, with support for tournament leaderboards.



#### Configuration fields of **configJson**
Parameter | Description
--------- | -----------
entryType | Required. Valid values are 'PLAYER' and 'GROUP'
leaderboardType | Required. Type of leaderboard. Valid values are 'LAST_VALUE', 'HIGH_VALUE', 'LOW_VALUE', 'CUMULATIVE', 'ARCADE_HIGH', 'ARCADE_LOW'.
rotationType | Required. Type of rotation. Valid values are 'NEVER', 'DAILY', 'DAYS', 'WEEKLY', 'MONTHLY', 'YEARLY'.
numDaysToRotate | Required if 'DAYS' rotation type, with valid values between 2 and 14, otherwise null.
resetAt | UTC timestamp, in milliseconds, at which to rotate the period. Always null if 'NEVER' rotation type.
expireInMins | Set leaderboard expiry time in minute, setting to null will not be automatically deleted.
retainedCount | Required. Number of rotations (versions) of the leaderboard to retain.
data | Optional parameter for data.
tEnabled | Optional parameter to set whether tournaments are enabled (true) or not (false). Can only be true for recurring rotation types (not NEVER or ADHOC). Defaults to false.
tTemplateOnly | Optional parameter to set whether leaderboard is a tournament template only (true) or not (false). Can only be true if tEnabled is true. Defaults to false.

<PartialServop service_name="leaderboard" operation_name="SYS_CREATE_LEADERBOARD_CONFIG" / >

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
var configJson = {
	"entryType": "PLAYER",
	"leaderboardType": "HIGH_VALUE",
	"rotationType": "DAYS",
	"numDaysToRotate": 4,
	"resetAt": 1631492744000,
  "expireInMins": null,
	"retainedCount": 5,
	"data": { "info": "Adding tournament to encourage play." },
	"tEnabled": true,
	"tTemplateOnly": false
};				

var leaderboardProxy = bridge.getLeaderboardServiceProxy();
var retVal = leaderboardProxy.sysCreateLeaderboardConfig(
    leaderboardId,
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
	"operation": "SYS_CREATE_LEADERBOARD_CONFIG",
	"data": {
		"leaderboardId": "aLeaderboardId",
		"configJson": {
			"entryType": "PLAYER",
			"leaderboardType": "HIGH_VALUE",
			"rotationType": "DAYS",
			"numDaysToRotate": 4,
			"resetAt": 1631492744000,
      "expireInMins": null,
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
      "dbVersion": 1,
      "resetAt": 1633492744000,
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
      "expiry": null,
      "currentVersionId": 1,
      "currentPeriod": {
        "versionId": 1,
        "startingAt": 1632752317162,
        "endingAt": 1633492744000,
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
configJson | Configuration for the leaderboard, specified as JSON object.


