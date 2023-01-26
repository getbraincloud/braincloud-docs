# SysGetQuestPage
## Overview
```json-doc
{
  "status": 200,
  "data": {
    "context": "eyJzZWFyY2hDcml0ZXJpYSI6ey...",
    "results": {
      "count": 5,
      "page": 1,
      "items": [
        {
          "questId": "QUEST_CRUSH50",
          "questType": "unorderedMinimal",
          "questData": "0",
          "title": "Crush 50 Eggs",
          "description": "Crush 50 Eggs quest",
          "category": "mission",
          "extraData": {
            "difficulty": 1
          },
          "rewards": {
            "experiencePoints": 30,
            "achievement": "ACH001",
            "currency": {
              "coins": 5
            },
            "globalStatistics": {
              "globalxp": 30
            },
            "statistics": {
              "a3": 1,
              "secretMissions": 1
            }
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
          "createdAt": 1574692241409,
          "updatedAt": 1574692313569,
          "version": 2,
          "tasks": [
            "11"
          ]
        },
        {
          "questId": "QUEST_CRUSH51",
          "questType": "unorderedMinimal",
          "questData": "0",
          "title": "Crush 50 Eggs",
          "description": "Crush 50 Eggs quest",
          "category": "mission",
          "extraData": {
            "difficulty": 1
          },
          "rewards": {
            "experiencePoints": 30,
            "achievement": "ACH001",
            "currency": {
              "coins": 5
            },
            "globalStatistics": {
              "globalxp": 30
            },
            "statistics": {
              "a3": 1,
              "secretMissions": 1
            }
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
          "createdAt": 1574801362234,
          "updatedAt": 1574801362234,
          "version": 1,
          "tasks": []
        }
      ],
      "moreAfter": true,
      "moreBefore": false
    }
  }
}
```



Retrieves the first page of quests. 

After retrieving a page of quests with this method use [sysGetQuestPageOffset](/api/capi/gamification/sysgetquestpageoffset) to retrieve previous or next pages.

See the [Generic Paged Queries](/api/appendix/genericpagedqueries) documentation for creating the context object.




Supported `searchCriteria` fields include:

* `questId`
* `title`
* `description`
* `category`
* and `extraData` fields (must be prefixed by `extraData`) - i.e. `extraData.actionIndex`

<PartialServop service_name="gamification" operation_name="SYS_GET_QUEST_PAGE" / >

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
var context = {
    "pagination": {
        "rowsPerPage": 2,
        "pageNumber": 1
    },
    "searchCriteria": {},
    "sortCriteria": {
        "questId": 1
    }
};

var gameficationProxy = bridge.getGamificationServiceProxy();
var questPage = gameficationProxy.sysGetQuestPage(context);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var context = {
    "pagination": {
        "rowsPerPage": 2,
        "pageNumber": 1
    },
    "searchCriteria": {},
    "sortCriteria": {
        "questId": 1
    }
};

var gameficationProxy = bridge.getGamificationServiceProxy();
var questPage = gameficationProxy.sysGetQuestPage(context);
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

<details>
<summary>JSON Response</summary>

```json
// Cloud Code only. To view example, switch to the Cloud Code tab
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
context | The json context for the page request.


