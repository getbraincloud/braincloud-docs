# ReadGlobalStatsForCategory

Method retrieves the global statistics for the given category.

<PartialServop service_name="globalGameStatistics" operation_name="READ_FOR_CATEGORY" />

## Method Parameters

| Parameter | Description                     |
| --------- | ------------------------------- |
| category  | The global statistics category. |

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
<TabItem value="dart" label="Dart">
```

```dart
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var category = "generated";
var globalStatisticsProxy = bridge.getGlobalStatisticsServiceProxy();

var postResult = globalStatisticsProxy.readGlobalStatsForCategory(category);
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
	"operation": "READ_FOR_CATEGORY",
	"data": {
		"category": "generated"
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
        "statistics": {
            "cus_ESTIMATE": 5,
            "cus_HIGHESTHR": 4,
            "cus_INNING": 2,
            "cus_INNINGSREM": 0,
            "cus_INNINGnew": 1,
            "cus_OUTS": 0,
            "cus_PLAYERS": 8,
            "cus_PLAYER_COUNT": 4,
            "cus_PLAYER_COUNTa": 1,
            "cus_POINT": 1,
            "cus_POINTS": 11,
            "cus_otherstat": 0
        }
    },
    "status": 200
}
```

</details>
