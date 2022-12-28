# GetGlobalLeaderboardPage
## Overview
Retrieve a page of the global leaderboard specified by the start and end indexes (0-based).

<PartialServop service_name="leaderboard" operation_name="GET_GLOBAL_LEADERBOARD_PAGE" / >

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
var sort = "HIGH_TO_LOW";
var startIndex = 0;
var endIndex = 9;
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.getGlobalLeaderboardPage(leaderboardId, sort, startIndex, endIndex);
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
	"operation": "GET_GLOBAL_LEADERBOARD_PAGE",
	"data": {
		"leaderboardId": "default",
		"sort": "HIGH_TO_LOW",
		"startIndex": 0,
		"endIndex": 9
	}
}
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | The id of the leaderboard. 
sort | Sort order of page. ("HIGH_TO_LOW" or "LOW_TO_HIGH") 
startIndex | The rank at which to start the page. 
endIndex | The rank at which to end the page. 


