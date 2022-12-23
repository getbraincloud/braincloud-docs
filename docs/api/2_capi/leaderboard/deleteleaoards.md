# DeleteLeaderboards
## Overview
Deletes the specified leaderboards from <%= data.branding.productName %> server.

<PartialServop service_name="leaderboard" operation_name="DELETE_LEADERBOARDS" / >

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
var leaderboardIds = [ "1234-1234-1234-1234", "1234-1234-1234-1234" ];

var leaderboardProxy = bridge.getLeaderboardServiceProxy();
var retVal = leaderboardProxy.deleteLeaderboards(leaderboardsIds);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "leaderboard",
	"operation": "DELETE_LEADERBOARDS",
	"data": {
		"leaderboardIds": [
			"1st-leaderboard-id",
			"2nd-leaderboard-id"
		]
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
        "deletedLeaderboardCount": 2,
        "message": "2 record(s) deleted successfully."
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardIds | Collection of leaderboard IDs.


