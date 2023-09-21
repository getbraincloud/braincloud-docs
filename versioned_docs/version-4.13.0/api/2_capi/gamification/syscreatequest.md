# SysCreateQuest
## Overview
Creates the specified quest. _Note that users will not see the quest in their data until the next time they log in_.



An example questJson object:
```
{
  "questId": "QUEST_CRUSH51",
  "questJson": {
    "title": "Crush 50 Eggs",
    "description": "Crush 50 Eggs quest",
    "category": "mission",
    "questType": "unorderedMinimal",
    "questData": "0",
    "extraData": {
      "difficulty": 1
    },
    "unlockThresholds": {
      "playerStatistics": {
        "experienceLevel": 2,
        "experiencePoints": 10,
        "statistics": {
          "levelC": 5
        }
      },
      "globalStatistics": {
        "level_unlock": 1
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
}
```

<PartialServop service_name="gamification" operation_name="SYS_CREATE_QUEST" / >

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
var questId = "QUEST_CRUSH50";
var questJson = {
  "title": "Crush 50 Eggs",
  "description": "Crush 50 Eggs quest",
  "category": "mission",
  "questType": "unorderedMinimal",
  "questData": "0",
  "extraData": {
    "difficulty": 1
  },
  "unlockThresholds": {},
  "rewards": {
    "experiencePoints": 1000
  }
};

var gamificationProxy = bridge.getGamificationServiceProxy();

var postResult = gamificationProxy.sysCreateQuest(questId, questJson);
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
    "questId": "QUEST_CRUSH52",
    "questType": "unorderedMinimal",
    "questData": "0",
    "title": "Crush 50 Eggs",
    "description": "Crush 50 Eggs quest",
    "category": "mission",
    "extraData": {
      "difficulty": 1
    },
    "rewards": {
      "experiencePoints": 1000
    },
    "createdAt": 1574801519979,
    "updatedAt": 1574801519979,
    "version": 1,
    "tasks": []
  }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
questId | The unique id of the quest.
questJson | A json object describing the quest to create.


