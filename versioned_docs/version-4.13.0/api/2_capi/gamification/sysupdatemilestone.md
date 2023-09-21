# SysUpdateMilestone
## Overview
Updates the specified milestone. Note that only the fields present in the JSON object will be updated. (i.e. to leave ACL as is, don't include it in the milestoneJson field).

<PartialServop service_name="gamification" operation_name="SYS_UPDATE_MILESTONE" / >

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
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var milestoneId = "15";

var gamificationProxy = bridge.getGamificationServiceProxy();

var readResult = gamificationProxy.sysReadMilestone(milestoneId);
if (readResult.status == 200) {

  var version = readResult.data.version;

  // Only including the fields to update
  var milestoneJson = {
    "description": "This is an updated description"
  }

  var updateResult = gamificationProxy.sysUpdateMilestone(milestoneId, version, milestoneJson);
  if (updateResult.status == 200) {
    // Success!

  }
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
// Cloud Code only. To view example, switch to the Cloud Code tab
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
    "milestoneId": "15",
    "questId": null,
    "title": "Winner Winner",
    "description": "This is an updated description",
    "category": "loyalty",
    "extraData": {
      "secretMission": false,
      "actionIndex": 4
    },
    "rewards": {
      "experiencePoints": 1000
    },
    "thresholds": {
      "playerStatistics": {
        "statistics": {
          "wins": 50
        }
      }
    },
    "createdAt": 1574793309304,
    "updatedAt": 1574793309304,
    "version": 2
  }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
milestoneId | The id of the milestone to update
version | The current revision of the milestone
milestoneJson | A json object describing the updated milestone data. Only the fields present will be updated.


