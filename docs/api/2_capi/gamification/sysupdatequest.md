# SysUpdateQuest
## Overview
Updates the specified quest. Note that only the fields present in the JSON object will be updated. (i.e. to leave ACL as is, don't include it in the `questJson` field).

<PartialServop service_name="gamification" operation_name="SYS_UPDATE_QUEST" / >

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
var questId = "QUEST_CRUSH52;

var gamificationProxy = bridge.getGamificationServiceProxy();

var readResult = gamificationProxy.sysReadQuest(questId);
if (readResult.status == 200) {

  var version = readResult.data.version;

  // Only including the fields to update
  var questJson = {
    "description": "This is an updated description"
  }

  var updateResult = gamificationProxy.sysUpdateQuest(milestoneId, version, questJson);
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
      "updatedAt": 1574809351418,
      "version": 2,
      "tasks": []
    },
    "tasks": {}
  }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
questId | The id of the quest to update
version | The current revision of the quest
questJson | A json object describing the updated quest data. Only the fields present will be updated.


