# SysDeleteQuestTask

Deletes an embedded task in the specified quest. The id of the deleted task will be returned in the `data.deletedTask` field of the JSON result.

<PartialServop service_name="gamification" operation_name="SYS_DELETE_QUEST_TASK" />

## Method Parameters
Parameter | Description
--------- | -----------
questId | The quest the task belongs to
version | The current revision of the parent _quest_. (Note - _not_ the version of the embedded _task_)
taskId | The id of the task to delete

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
var questId = "QUEST_CRUSH52";
var taskId = "18";

var gamificationProxy = bridge.getGamificationServiceProxy();

var postResult = gamificationProxy.sysDeleteQuestTask(questId, -1, taskId);
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
      "updatedAt": 1574863558897,
      "version": 4,
      "tasks": [
        "17"
      ]
    },
    "deletedTask": "18",
    "tasks": {
      "17": {
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
      }
    }
  }
}
```
</details>

