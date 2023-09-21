# EditLeaderboard
## Overview
:::caution
WARNING: This call, <code>EditLeaderboard()</code>, will be deprecated and replaced with <code>SysEditLeaderboard()</code>.
:::

Edits a existing leaderboard under the context of the current game. You can optionally send a user-defined json string of data with the edit leaderboard. This string could include information relevant to the edited leaderboard.



<PartialServop service_name="leaderboard" operation_name="EDIT_LEADERBOARD" / >

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
var leaderboardId = "testEdit";
var type = "HIGH_VALUE";
var rotationType = "WEEKLY";
var rotationReset = Date.now();
var versionsToRetain = 6;
var data = { "test": 1234 };

var leaderboardProxy = bridge.getLeaderboardServiceProxy();
var retVal = leaderboardProxy.editLeaderboard(
    leaderboardId,
    type,
    rotationType,
    rotationReset,
    versionsToRetain,
    data
);

// For DAYS rotation type

var leaderboardId = "testEdit";
var type = "HIGH_VALUE";
var rotationType = "DAYS";
var rotationReset = Date.now();
var versionsToRetain = 6;
var data = { "test": 1234 };
var numDaysToRotate = 3;

var leaderboardProxy = bridge.getLeaderboardServiceProxy();
var retVal = leaderboardProxy.editLeaderboard(
    leaderboardId,
    type,
    rotationType,
    rotationReset,
    versionsToRetain,
    data,
    numDaysToRotate
);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "leaderboard",
	"operation": "EDIT_LEADERBOARD",
	"data": {
		"leaderboardId": "default",
		"leaderboardType": "HIGH_VALUE",
		"rotationType": "DAYS",
		"rotationResetTime": "[[#ts+60000]]",
		"retainedCount": 2,
		"numDaysToRotate": 5,
		"data": {
			"street": "1309 Carling Avenue"
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

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40499 | NO_LEADERBOARD_FOUND | No leaderboard with given leaderboardId

</details>


## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | The leaderboard to edit
data | Optional user-defined data to relevant to the edited leaderboard
leaderboardType | Leaderboard type
rotationType | Type of rotation
rotationReset | Date to start the rotation (date in millis)
retainedCount | How many previous rotations to keep
numDaysToRotate | Optional parameter for use only with DAYS rotation type


