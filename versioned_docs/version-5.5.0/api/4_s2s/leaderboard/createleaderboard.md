# CreateLeaderboard

```
{
    "packetId": 1,
    "messages": [
        {
            "service": "leaderboard",
            "operation": "CREATE_LEADERBOARD",
            "data": {
                "leaderboardId": "default",
                "leaderboardType": "HIGH_VALUE",
                "rotationType": "WEEKLY",
                "rotationReset": "31-01-2015 15:00",
                "rotationResetTime": 1437478586586,
                "retainedCount": 2,
                "data": {
                    "street": "1309 Carling"
                }
            }
        }
    ]
}
```

Creates a leaderboard under the context of the current game. You can optionally send a user-defined json string of data with the created leaderboard. This string could include information relevant to the created leaderboard.

<PartialServop service_name="leaderboard" operation_name="CREATE_LEADERBOARD" />

## Method Parameters

| Parameter         | Description                                        |
| ----------------- | -------------------------------------------------- |
| leaderboardId     | A leaderboard id.                                  |
| leaderboardType   | The leaderboard type.                              |
| rotationType      | Type of rotation.                                  |
| rotationResetTime | Date to start the rotation (Date is in millis.)    |
| retainedCount     | How many previous rotations to keep.               |
| numDaysToRotate   | How many previous rotations to keep.               |
| data              | Optional user-defined data to post with the score. |

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
    "packetId": 1,
    "messageResponses": [
        {
            "status": 200,
            "data": null
        }
    ]
}
```

</details>
