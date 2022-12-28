# EditLeaderboard
## Overview
```
{
    "packetId": 1,
    "messages": [
        {
            "service": "leaderboard",
            "operation": "EDIT_LEADERBOARD",
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

Edits a existing leaderboard under the context of the current game. You can optionally send a user-defined json string of data with the edit leaderboard. This string could include information relevant to the edited leaderboard.

<PartialServop service_name="leaderboard" operation_name="EDIT_LEADERBOARD" / >

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
var leaderboardId = "testEdit";
var type = "HIGH_VALUE";
var rotationType = "WEEKLY";
var rotationReset = Date.now();
var versionsToRetain = 6;
var data = { "test": 1234 };

var leaderboardProxy = bridge.getLeaderboardServiceProxy();
var retVal = leaderboardProxy.editLeaderboard(
    leaderboardId,
    type,
    rotationType,
    rotationReset,
    versionsToRetain,
    data
);

// For DAYS rotation type

var leaderboardId = "testEdit";
var type = "HIGH_VALUE";
var rotationType = "DAYS";
var rotationReset = Date.now();
var versionsToRetain = 6;
var data = { "test": 1234 };
var numDaysToRotate = 3;

var leaderboardProxy = bridge.getLeaderboardServiceProxy();
var retVal = leaderboardProxy.editLeaderboard(
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
	"operation": "EDIT_LEADERBOARD",
	"data": {
		"leaderboardId": "default",
		"leaderboardType": "HIGH_VALUE",
		"rotationType": "DAYS",
		"rotationResetTime": "[[#ts+60000]]",
		"retainedCount": 2,
		"numDaysToRotate": 5,
		"data": {
			"street": "1309 Carling Avenue"
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

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | The leaderboard to edit. 
leaderboardType | Optional user-defined data relevant to the edited leaderboard. 
rotationType | The leaderboard type. 
rotationResetTime | Type of rotation. 
retainedCount | Date to start the rotation (Date is in millis.) 
numDaysToRotate | How many previous rotations to keep. 
data | Optional parameter for use only with DAYS rotation type. 


