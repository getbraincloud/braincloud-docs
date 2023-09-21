# SysListLeaderboardConfigs
## Overview
Returns list of applicable leaderboards, with summary leaderboard configuration information, including tournament flags, if applicable. Option 'filterType' defaults to 'standard', with additional supported filter types of 'all', 'tournament', 'divisions' and 'templates'.

<PartialServop service_name="leaderboard" operation_name="SYS_LIST_LEADERBOARD_CONFIGS" / >

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
var optionsJson = {
      "filterType": "standard"
    };

var leaderboardProxy = bridge.getLeaderboardServiceProxy();
var retVal = leaderboardProxy.sysListLeaderboardConfigs(optionsJson);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "leaderboard",
	"operation": "SYS_LIST_LEADERBOARD_CONFIGS",
	"data": {
    "optionsJson": {
      "filterType": "standard"
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
    "leaderboardList": [
      {
        "entryType": "PLAYER",
        "numDaysToRotate": 0,
        "data": {
          "street": "1309 Carling"
        },
        "resetAt": 1631822069172,
        "currentVersionId": 2,
        "rotationType": "DAILY",
        "leaderboardType": "HIGH_VALUE",
        "leaderboardId": "aLeaderboardId"
      },
      {
        "entryType": "PLAYER",
        "numDaysToRotate": 0,
        "data": {},
        "resetAt": 1631740020000,
        "currentVersionId": 210,
        "rotationType": "DAILY",
        "leaderboardType": "ARCADE_HIGH",
        "leaderboardId": "arcadelb1"
      },
      {
        "entryType": "PLAYER",
        "numDaysToRotate": 0,
        "data": {},
        "resetAt": 1631740140000,
        "currentVersionId": 216,
        "rotationType": "DAILY",
        "leaderboardType": "HIGH_VALUE",
        "leaderboardId": "daily"
      },
      {
        "entryType": "PLAYER",
        "numDaysToRotate": 0,
        "data": {},
        "resetAt": null,
        "currentVersionId": 3,
        "rotationType": "ADHOC",
        "leaderboardType": "HIGH_VALUE",
        "leaderboardId": "l1"
      },
      {
        "entryType": "PLAYER",
        "numDaysToRotate": 0,
        "data": {},
        "resetAt": null,
        "currentVersionId": 2,
        "rotationType": "ADHOC",
        "leaderboardType": "HIGH_VALUE",
        "leaderboardId": "l2"
      },
      {
        "entryType": "PLAYER",
        "numDaysToRotate": 0,
        "data": {},
        "resetAt": null,
        "currentVersionId": 1,
        "rotationType": "ADHOC",
        "leaderboardType": "HIGH_VALUE",
        "leaderboardId": "l3"
      },
      {
        "entryType": "PLAYER",
        "numDaysToRotate": 0,
        "data": {},
        "resetAt": 1631825100000,
        "currentVersionId": 31,
        "rotationType": "WEEKLY",
        "leaderboardType": "HIGH_VALUE",
        "leaderboardId": "weekly"
      }
    ],
    "leaderboardListCount": 10
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
optionsJson | Supports filtering of returned list of leaderboard configs. Option 'filterType' defaults to 'standard' if not specified. Valid filterType values include 'all', 'standard', 'tournament', 'divisions' and 'templates'. If 'tournament' is specified, returned list will include leaderboards configured for tournaments, but excludes division set instances and templates. If 'division', returned list will include division set tournament leaderboard instances. If 'templates', returned list will include leaderboards flagged as division template only.


