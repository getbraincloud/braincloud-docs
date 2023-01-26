# SysResetNeverLeaderboard
## Overview
Resets a leaderboard configured with rotation strategy NEVER by incrementing its version.

<PartialServop service_name="leaderboard" operation_name="SYS_RESET_NEVER_LEADERBOARD" / >

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
var retVal = leaderboardProxy.sysResetNeverLeaderboard(leaderboardId);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "leaderboard",
	"operation": "SYS_RESET_NEVER_LEADERBOARD",
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
    "status": 200,
    "data": {
    	"leaderboardId": "aLeaderboardId",
    	"leaderboardType": "HIGH_VALUE",
    	"entryType": "PLAYER",
    	"rotationType": "NEVER",
    	"numDaysToRotate": 0,
    	"retainedCount": 2,
    	"versionId": 2
  	}
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | The leaderboard to reset.


