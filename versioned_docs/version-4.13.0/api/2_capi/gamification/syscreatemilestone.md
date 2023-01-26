# SysCreateMilestone
## Overview
Creates the specified milestone. _Note that users will not see the milestone in their data until the next time they log in_.



An example milestoneJson object:
```
{
    "title": "Egg Crusher",
    "description": "Crushing Eggs lifetime milestone",
    "category": "mission",
    "extraData": {
        "secretMission": false,
        "actionIndex": 4
    },
    "unlockThresholds": {
        "playerStatistics": {
            "experienceLevel": 2,
            "experiencePoints": 10,
            "statistics": {
                "foodc": 5
            }
        },
        "globalStatistics": {
            "food_unlock": 1
        }
    },
    "thresholds": {
        "playerStatistics": {
            "experienceLevel": 1,
            "experiencePoints": 10,
            "statistics": {
                "returningDay": 7
            }
        }
    },
    "rewards": {
        "experiencePoints": 30,
        "globalStatistics": {
            "globalxp": 30
        },
        "statistics": {
            "a3": 1,
            "secretMissions": 1
        },
        "achievement": "ACH001",
        "currency": {
            "coins": 5
        }
    }
}
```

<PartialServop service_name="gamification" operation_name="SYS_CREATE_MILESTONE" / >

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
var milestoneJson = {
  "title": "Winner Winner",
  "description": "Get 50 wins",
  "category": "loyalty",
  "extraData": {
    "secretMission": false,
    "actionIndex": 4
  },
  "unlockThresholds": {},
  "thresholds": {
    "playerStatistics": {
      "statistics": {
        "wins": 50
      }
    }
  },
  "rewards": {
    "experiencePoints": 1000
  }
};

var gamificationProxy = bridge.getGamificationServiceProxy();

var postResult = gamificationProxy.sysCreateMilestone(milestoneJson);
if (postResult.status == 200) {
    // Success!
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
    "description": "Get 50 wins",
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
    "version": 1
  }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
milestoneJson | A json object describing the milestone to create.


