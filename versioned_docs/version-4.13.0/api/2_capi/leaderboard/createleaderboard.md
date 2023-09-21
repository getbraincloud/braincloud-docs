# CreateLeaderboard
## Overview
:::caution
WARNING: This call, <code>CreateLeaderboard()</code>, will be deprecated and replaced with <code>SysCreateLeaderboard()</code>.
:::

Creates a leaderboard under the context of the current game. You can optionally send a user-defined json string of data with the created leaderboard. This string could include information relevant to the created leaderboard.

<PartialServop service_name="leaderboard" operation_name="CREATE_LEADERBOARD" / >

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
var leaderboardId = "testCreate";
var type = "HIGH_VALUE";
var rotationType = "WEEKLY";
var rotationReset = Date.now();
var versionsToRetain = 6;
var data = { "test": 1234 };

var leaderboardProxy = bridge.getLeaderboardServiceProxy();
var retVal = leaderboardProxy.createLeaderboard(
    leaderboardId,
    type,
    rotationType,
    rotationReset,
    versionsToRetain,
    data
);

//For DAYS rotation type

var leaderboardId = "testCreate";
var type = "HIGH_VALUE";
var rotationType = "DAYS";
var rotationReset = Date.now();
var versionsToRetain = 6;
var data = { "test": 1234 };
var numDaysToRotate = 3;

var leaderboardProxy = bridge.getLeaderboardServiceProxy();
var retVal = leaderboardProxy.createLeaderboard(
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
	"operation": "CREATE_LEADERBOARD",
	"data": {
		"leaderboardId": "default",
		"leaderboardType": "HIGH_VALUE",
		"rotationType": "DAYS",
		"rotationResetTime": "[[#ts+60000]]",
		"retainedCount": 2,
		"numDaysToRotate": 5,
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
leaderboardId | The leaderboard to create
leaderboardType | Leaderboard type
rotationType | Type of rotation
rotationReset | Date to start the rotation (date in millis)
retainedCount | How many previous rotations to keep
data | Optional user-defined data to relevant to the created leaderboard
numDaysToRotate | Optional parameter for use only with DAYS rotation type


