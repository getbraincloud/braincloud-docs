# SysGetQuestPageOffset
## Overview
```json-doc
{
  "status": 200,
  "data": {
    "context": "eyJzZWFyY2hDcml0ZXJpY...",
    "results": {
      "count": 5,
      "page": 2,
      "items": [
        {
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
        {
          "questId": "quest001",
          "questType": "unorderedComplete",
          "questData": null,
          "title": "quest001",
          "description": "",
          "category": "misc",
          "extraData": null,
          "createdAt": 1574266600502,
          "updatedAt": 1574266600502,
          "version": 1,
          "tasks": []
        }
      ],
      "moreAfter": true,
      "moreBefore": true
    }
  }
}
```



Retrieves the next/prev page of quests. 

See the [Generic Paged Queries](/api/appendix/genericpagedqueries) documentation for creating the context object.

<PartialServop service_name="gamification" operation_name="SYS_GET_QUEST_PAGE_OFFSET" / >

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
var encodedContext = "";

if ( questPage.status == 200 ) {
  if ( questPage.data.results.moreAfter == true ) {

    //...

    // Get the next page...
    encodedContext = questPage.data.context;
    questPage = gamificationProxy.sysGetQuestPageOffset(encodedContext, 1);
    if ( questPage.status == 200 ) {

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
        "questId": 1
    }
};

var gameficationProxy = bridge.getGamificationServiceProxy();
var questPage = gameficationProxy.sysGetQuestPage(context);
var encodedContext = "";

if ( questPage.status == 200 ) {
  if ( questPage.data.results.moreAfter == true ) {

    //...

    // Get the next page...
    encodedContext = questPage.data.context;
    questPage = gamificationProxy.sysGetQuestPageOffset(encodedContext, 1);
    if ( questPage.status == 200 ) {

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


