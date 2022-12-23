# SysGetMilestonePageOffset
## Overview
```json-doc
{
  "status": 200,
  "data": {
    "context": "eyJzZWFyY2hDcml0ZXa...",
    "results": {
      "count": 3,
      "page": 2,
      "items": [
        {
          "milestoneId": "3",
          "questId": null,
          "title": "Egg Crusher",
          "description": "Crushing Eggs lifetime milestone",
          "category": "mission",
          "extraData": {
            "batmanIs": "awesome2"
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
          "createdAt": 1574691758570,
          "updatedAt": 1574691922583,
          "version": 4
        }
      ],
      "moreAfter": false,
      "moreBefore": true
    }
  }
}
```



Retrieves the next/prev page of milestones. 

_Note that this call does not return milestones (i.e. tasks) that are embedded within Quests. Use the Quests API for those._

See the [Generic Paged Queries](/api/appendix/genericpagedqueries) documentation for creating the context object.

<PartialServop service_name="gamification" operation_name="SYS_GET_MILESTONE_PAGE_OFFSET" / >

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
var encodedContext = "";

if ( milestonePage.status == 200 ) {
  if ( milestonePage.data.results.moreAfter == true ) {

    //...

    // Get the next page...
    encodedContext = milestonePage.data.context;
    milestonePage = gamificationProxy.sysGetMilestonePageOffset(encodedContext, 1);
    if ( milestonePage.status == 200 ) {

      // Success!
    
    }
  }

}
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
var encodedContext = "";

if ( milestonePage.status == 200 ) {
  if ( milestonePage.data.results.moreAfter == true ) {

    //...

    // Get the next page...
    encodedContext = milestonePage.data.context;
    milestonePage = gamificationProxy.sysGetMilestonePageOffset(encodedContext, 1);
    if ( milestonePage.status == 200 ) {

      // Success!
    
    }
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
// Cloud Code only. To view example, switch to the Cloud Code tab
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
encodedContext | The json context from the previous page request.
pageOffset | The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.


