# SysEditLeaderboard
## Overview
Edit a player or group entry leaderboard configuration.

<PartialServop service_name="leaderboard" operation_name="SYS_EDIT_LEADERBOARD" / >

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
var leaderboardType = "HIGH_VALUE";
var rotationType = "DAYS";
var numDaysToRotate = 5;
var rotationResetTimestampUtcMillis = Date.now();
var retainedCount = 2;
var data = { "street": "1309 Carling" };

var leaderboardProxy = bridge.getLeaderboardServiceProxy();
var retVal = leaderboardProxy.sysEditLeaderboard(
    leaderboardId,
    leaderboardType,
    rotationType,
    numDaysToRotate,
    rotationResetTimestampUtcMillis,
    retainedCount,
    data
);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "leaderboard",
	"operation": "SYS_EDIT_LEADERBOARD",
	"data": {
		"leaderboardId": "default",
		"leaderboardType": "HIGH_VALUE",
		"rotationType": "DAYS",
		"numDaysToRotate": 5,
		"rotationResetTimestampUtcMillis": "[[#ts+60000]]",
		"retainedCount": 2,
		"data": {
			"street": "1309 Carling"
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
    "status": 200,
    "data": null
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | Unique ID of the leaderboard configuration to create.
leaderboardType | Type of leaderboard. Valid values: 'LAST_VALUE', 'HIGH_VALUE', 'LOW_VALUE', 'CUMULATIVE', 'ARCADE_HIGH', 'ARCADE_LOW'.
rotationType | Type of rotation. Valid values: 'NEVER', 'DAILY', 'DAYS', 'WEEKLY', 'MONTHLY', 'YEARLY'.
numDaysToRotate | Optional parameter. Required only if 'DAYS' rotation type; otherwise, null.
rotationResetTimestampUtcMillis | UTC timestamp, in milliseconds, at which to rotate the leaderboard.
retainedCount | The number of rotations (versions) of the leaderboard to retain.
data | Optional parameter. Developer-defined data relevant to the created leaderboard.


