# GetGlobalLeaderboardVersions
## Overview
Method returns version information about the global leaderboard and some configuration information for the leaderboard.

<PartialServop service_name="leaderboard" operation_name="GET_GLOBAL_LEADERBOARD_VERSIONS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var leaderboardId = "default";
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.getGlobalLeaderboardVersions(leaderboardId);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "leaderboard",
	"operation": "GET_GLOBAL_LEADERBOARD_VERSIONS",
	"data": {
		"leaderboardId": "default"
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
        "leaderboardId" : "L1",
        "leaderboardType" : "HIGH_VALUE",
        "rotationType" : "WEEKLY",
        "retainedCount" : 2,
        "versions": [
            {
                "versionId": 27,
                "startingAt": 1434499200000,
                "endingAt": 1435104000000
            },
            {
                "versionId": 26,
                "startingAt": 1433894400000,
                "endingAt": 1434499200000
            }
        ]
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | The id of the leaderboard. 


