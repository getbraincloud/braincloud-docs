# SysResetExperiencePointsAndLevel
System call (cloud code only if from client) to reset the experience points for the session user to a given value. The user's experienceLevel will remain unchanged unless recalculateXPLevel is true, in which case the user's experienceLevel will also be reset to the applicable level (to be used with caution). If the XP points value to be reset is HIGHER than the user's current experiencePoints, an error is returned unless skipResetIfUserXPPointsAlreadyLower is true.

<PartialServop service_name="playerStatistics" operation_name="SYS_RESET_EXPERIENCE_POINTS_AND_LEVEL" />

## Method Parameters
Parameter | Description
--------- | -----------
xp_points | The absolute value to reset the user's experiencePoints.
recalculateXPLevel | Whether to reset the user's experienceLevel to the applicable level for the XP points being set. Use With Caution:  If the user’s XP Level is lowered, stats and events awarded by previous level ups are not automatically withdrawn. You may wish to withdraw these awards (manually). Additionally, when this user levels up again, they will be awarded each of the level up awards once again.
skipResetIfUserXPPointsAlreadyLower | If the given xp_points is HIGHER than the user's current experiencePoints, an error is returned if this is false; otherwise, if true, success is returned without any changes being made.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var xp_points = 1;
var recalculateXPLevel = False;
var skipResetIfUserXPPointsAlreadyLower = True;
var playerStatisticsProxy = bridge.getPlayerstatisticsServiceProxy();

var postResult = playerStatisticsProxy.sysResetExperiencePointsAndLevel(xp_points, recalculateXPLevel, skipResetIfUserXPPointsAlreadyLower);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"playerStatistics",
    "operation":"SYS_RESET_EXPERIENCE_POINTS_AND_LEVEL",
    "data":{
        "xp_points":1,
        "recalculateXPLevel":false,
        "skipResetIfUserXPPointsAlreadyLower":true
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
    "xpCapped": false,
    "experienceLevel": 1,
    "sessionInvalidations": {
      "invalidatedCount": 0,
      "invalidated": [],
      "verification": true
    },
    "experiencePoints": 200
  },
  "status": 200
}
```

</details>
