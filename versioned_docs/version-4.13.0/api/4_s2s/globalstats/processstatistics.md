# ProcessStatistics
## Overview
Apply statistics grammar to a partial set of statistics. Global statistics are defined through the <%= data.branding.productName %> portal.

The operations available are much richer than the standard *increment* operation available via `IncrementGlobalStats()`.

For example:
```
{
    "INNING": "INC#1",              // Increment by one
    "INNINGSREM": "DEC#1",          // Decrement by one
    "OUTS": "RESET",                // Reset to the defined initial value
    "POINTS": "INC_TO_LIMIT#5#30",  // Increment by 5, but to a max of 30
    "PLAYERS": "SET#8",             // Set to the specified value
    "HIGHESTHR": "MAX#3",           // Set to the specified value if larger
    "ESTIMATE": "MIN#5",            // Set to the specified value if smaller
    "GAME" : "5"                    // Missing stat grammar will treat the operation as an increment
}
```

The above example would:

* Increment `INNING` by `1`
* Decrement `INNINGSREM` by `1`
* Reset `OUTS` to its pre-defined initial value
* Increment `POINTS` by `5`, but to a maximum of `30`
* Set `PLAYERS` to `8`
* Set `HIGHESTHR` to `3`, or remain at current higher value
* Set `ESTIMATE` to `5`, or remain at current lower value
* Increment `GAME` by `5`

For the full statistics grammar see the [statistics grammar section](/api/appendix/statisticsgrammar).

<PartialServop service_name="globalGameStatistics" operation_name="PROCESS_STATISTICS" / >

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
  "INNING": "INC#1",
  "INNINGSREM": "DEC#1",
  "OUTS": "RESET",
  "POINTS": "INC_TO_LIMIT#5#30",
  "PLAYERS": "SET#8",
  "HIGHESTHR": "MAX#3",
  "ESTIMATE": "MIN#5"
};
var globalStatisticsProxy = bridge.getGlobalStatisticsServiceProxy();

var postResult = globalStatisticsProxy.processStatistics(statistics);
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
	"operation": "PROCESS_STATISTICS",
	"data": {
		"statistics": {
			"INNING": "INC#1",
			"INNINGSREM": "DEC#1",
			"OUTS": "RESET",
			"POINTS": "INC_TO_LIMIT#5#30",
			"PLAYERS": "SET#8",
			"HIGHESTHR": "MAX#3",
			"ESTIMATE": "MIN#5"
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
    "statisticsExceptions": {
      "INNINGSREM": "minApplied"
    },
    "statistics": {
      "OUTS": 0,
      "HIGHESTHR": 4,
      "PLAYERS": 8,
      "INNINGSREM": 0,
      "INNING": 2,
      "POINTS": 11,
      "ESTIMATE": 5
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
statistics | A collection containing the statistics to process. 


