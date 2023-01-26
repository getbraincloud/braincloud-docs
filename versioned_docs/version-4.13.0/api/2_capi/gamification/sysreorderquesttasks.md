# SysReorderQuestTasks
## Overview
Re-orders the tasks in the quest. If any tasks are missing from the new order, they will be deleted. The ids of any deleted tasks will be returned in the `data.deletedTasks` field of the JSON result.

<PartialServop service_name="gamification" operation_name="SYS_REORDER_QUEST_TASKS" / >

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
var newTaskOrder = ["19","17];

var gamificationProxy = bridge.getGamificationServiceProxy();

var postResult = gamificationProxy.sysReorderQuestTasks(questId, -1, newTaskOrder);
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
      "updatedAt": 1574866260391,
      "version": 8,
      "tasks": [
        "19",
        "17"
      ]
    },
    "deletedTasks": [],
    "tasks": {
      "17": {
        "questId": "QUEST_CRUSH52",
        "title": "Winner Winner",
        "description": "An updated task description",
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
        "updatedAt": 1574863558901,
        "version": 2,
        "taskId": "17"
      },
      "19": {
        "questId": "QUEST_CRUSH52",
        "title": "Another task",
        "description": "Crushing Eggs task",
        "category": "mission",
        "extraData": {},
        "rewards": {
          "experiencePoints": 30
        },
        "thresholds": {
          "playerStatistics": {
            "statistics": {
              "returningDay": 7
            }
          }
        },
        "createdAt": 1574866217734,
        "updatedAt": 1574866217734,
        "version": 1,
        "taskId": "19"
      }
    }
  }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
questId | The quest to reorder
version | The current revision of the _quest_.
newTaskArray | An ordered array of task ids. Note - any tasks not present in the array will be deleted from the quest.


