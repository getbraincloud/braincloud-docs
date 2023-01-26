# SysAddQuestTask
## Overview
Adds a new task to the specified quest. The id of the newly added task will be returned in the `data.newTask` field of the JSON result.

_Note that tasks are essentially milestones that are embedded within a quest._



An example taskJson object:
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

<PartialServop service_name="gamification" operation_name="SYS_ADD_QUEST_TASK" / >

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
var questId = "QUEST_CRUSH52";
var version = 1;
var taskJson = {
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
var beforeTaskId = null;

var gamificationProxy = bridge.getGamificationServiceProxy();

var postResult = gamificationProxy.sysAddQuestTask(questId, version, taskJson, beforeTaskId);
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
    "quest": {
      "questId": "QUEST_CRUSH52",
      "questType": "unorderedMinimal",
      "questData": "0",
      "title": "Crush 50 Eggs",
      "description": "This is an updated description",
      "category": "mission",
      "extraData": {
        "difficulty": 1
      },
      "rewards": {
        "experiencePoints": 1000
      },
      "createdAt": 1574802052796,
      "updatedAt": 1574820663145,
      "version": 3,
      "tasks": [
        "17"
      ]
    },
    "newTask": "17",
    "tasks": {
      "17": {
        "questId": "QUEST_CRUSH52",
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
        "createdAt": 1574820663140,
        "updatedAt": 1574820663140,
        "version": 1,
        "taskId": "17"
      }
    }
  }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
questId | The quest to add to
version | The current revision of the quest
taskJson | The data defining the task
beforeTaskId | The id of the task to insert before. Pass in null to add to end
 


