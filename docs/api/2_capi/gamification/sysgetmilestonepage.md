# SysGetMilestonePage
## Overview
```json-doc
{
  "status": 200,
  "data": {
    "context": "eyJzZWFyY2hDcml0ZXJpYSI6ey...",
    "results": {
      "count": 3,
      "page": 1,
      "items": [
        {
          "milestoneId": "1",
          "questId": null,
          "title": "Egg Crusher",
          "description": "Crushing Eggs lifetime milestone",
          "category": "mission",
          "extraData": {
            "secretMission": false,
            "actionIndex": 4
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
          "thresholds": {
            "playerStatistics": {
              "experienceLevel": 1,
              "experiencePoints": 10,
              "statistics": {
                "returningDay": 7
              }
            }
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
          "createdAt": 1574792720983,
          "updatedAt": 1574792720983,
          "version": 1
        },
        {
          "milestoneId": "2",
          "questId": null,
          "title": "Another milestone",
          "description": "Not yet fully defined",
          "category": "mission",
          "extraData": null,
          "createdAt": 1574111511152,
          "updatedAt": 1574111511152,
          "version": 1
        }
      ],
      "moreAfter": true,
      "moreBefore": false
    }
  }
}
```



Retrieves the first page of milestones. 

_Note that this call does not return milestones (i.e. tasks) that are embedded within Quests. Use the Quests API for those._

After retrieving a page of milestones with this method use [sysGetMilestonePageOffset](/api/capi/gamification/sysgetmilestonepageoffset) to retrieve previous or next pages.

See the [Generic Paged Queries](/api/appendix/genericpagedqueries) documentation for creating the context object.




Supported `searchCriteria` fields include:

* `milestoneId`
* `title`
* `description`
* `category`
* and `extraData` fields (must be prefixed by `extraData`) - i.e. `extraData.actionIndex`

<PartialServop service_name="gamification" operation_name="SYS_GET_MILESTONE_PAGE" / >

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
        "milestoneId": 1
    }
};

var gameficationProxy = bridge.getGamificationServiceProxy();
var milestonePage = gameficationProxy.sysGetMilestonePage(context);
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
        "milestoneId": 1
    }
};

var gameficationProxy = bridge.getGamificationServiceProxy();
var milestonePage = gameficationProxy.sysGetMilestonePage(context);
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


