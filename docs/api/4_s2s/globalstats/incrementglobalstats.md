# IncrementGlobalStats
## Overview
Atomically increment (or decrement) global statistics. Global statistics are defined through the <%= data.branding.productName %> portal.

StatisticsData like

`{ "stat1" : 10, "stat2" : -5.5 }`

would increment stat1 by 10 and decrement stat2 by 5.5. For the full statistics grammar see the [statistics grammar section](/api/appendix/statisticsgrammar).

There are many more complex operations supported such as

`{ "stat1" : "INC_TO_LIMIT#9#30" }`

which increments stat1 by 9 up to a limit of 30.

<PartialServop service_name="globalGameStatistics" operation_name="UPDATE_INCREMENT" / >

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
var statistics = {
  "PLAYER_COUNT": 1
};
var globalStatisticsProxy = bridge.getGlobalStatisticsServiceProxy();

var postResult = globalStatisticsProxy.incrementGlobalStats(statistics);
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
	"service": "globalGameStatistics",
	"operation": "UPDATE_INCREMENT",
	"data": {
		"statistics": {
			"PLAYER_COUNT": 1
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
    "data": {
        "statistics": {
            "PLAYER_COUNT": 16
        }
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
statistics | A collection containing the statistics to increment. 


