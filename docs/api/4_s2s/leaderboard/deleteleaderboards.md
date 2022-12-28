# DeleteLeaderboards
## Overview
```
{
    "packetId": 1,
    "messages": [
        {
            "service": "leaderboard",
            "operation": "DELETE_LEADERBOARDS",
            "data": {
                "leaderboardIds": [
                    "leaderboardId1",
                    "leaderboardId2"
                ]
            }
        }
    ]
}
```

Deletes the specified leaderboards from <%= data.branding.productName %> server.

<PartialServop service_name="leaderboard" operation_name="DELETE_LEADERBOARDS" / >

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
var leaderboardIds = [
	"1st-leaderboard-id",
	"2nd-leaderboard-id"
];
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.deleteLeaderboards(leaderboardIds);
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
    "packetId": 1,
    "messageResponses": [
        {
            "status": 200,
            "data": {
                "deletedLeaderboardCount": 2,
                "message": "2 record(s) deleted successfully."
            }
        }
    ]
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardIds | A collection of leaderboards to delete. 


