# SysGetLeaderboardConfigsPage
Returns a page of leaderboard configurations from the server based on the specified context.

<PartialServop service_name="leaderboard" operation_name="SYS_GET_LEADERBOARD_CONFIGS_PAGE" />

## Method Parameters
Parameter | Description
--------- | -----------
context | The json context for the page request.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// S2S call: to view example, switch to the Cloud Code or Raw tab.
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
var context = {
    "pagination": {
        "rowsPerPage": 50,
        "pageNumber": 1
    },
    "searchCriteria": {
        "leaderboardId": "a-leaderboard-id"
    },
    "sortCriteria": {}
};
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.SysGetLeaderboardConfigsPage(context);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"leaderboard",
    "operation":"SYS_GET_LEADERBOARD_CONFIGS_PAGE",
    "data":{
        "context":{
            "pagination":{
                "rowsPerPage":50,
                "pageNumber":1
            },
            "searchCriteria":{
                "leaderboardId":"a-leaderboard-id"
            },
            "sortCriteria":{}
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
{
  "data": {
    "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJnYW1lSWQiOiIyMzc4MiJ9LCJzb3J0Q3JpdGVyaWEiOnt9LCJwYWdpbmF0aW9uIjp7InJvd3NQZXJQYWdlIjo1MCwicGFnZU51bWJlciI6MSwiZG9Db3VudCI6dHJ1ZSwic2tpcFJlY291bnQiOnRydWV9LCJvcHRpb25zIjpudWxsLCJyZXN1bHRDb3VudCI6MjF9",
    "results": {
      "count": 5,
      "page": 1,
      "items": [
        {
          "entryType": "PLAYER",
          "tTemplateOnly": false,
          "numDaysToRotate": 0,
          "data": {},
          "currentVersionId": 1,
          "rotationType": "ADHOC",
          "leaderboardType": "HIGH_VALUE",
          "leaderboardId": "l3",
          "tEnabled": true
        },
        {
          "entryType": "PLAYER",
          "tTemplateOnly": true,
          "numDaysToRotate": 0,
          "data": {},
          "resetAt": 1707774960000,
          "currentVersionId": 1310,
          "rotationType": "DAILY",
          "leaderboardType": "HIGH_VALUE",
          "leaderboardId": "l6",
          "tEnabled": true
        },
        {
          "entryType": "PLAYER",
          "tTemplateOnly": false,
          "numDaysToRotate": 0,
          "data": {},
          "resetAt": 1700772300000,
          "currentVersionId": 87,
          "rotationType": "WEEKLY",
          "leaderboardType": "HIGH_VALUE",
          "leaderboardId": "weekly",
          "tEnabled": false
        },
        {
          "entryType": "PLAYER",
          "tTemplateOnly": false,
          "numDaysToRotate": 0,
          "data": {},
          "resetAt": 1700600820000,
          "currentVersionId": 342,
          "rotationType": "DAILY",
          "leaderboardType": "ARCADE_HIGH",
          "leaderboardId": "arcadelb1",
          "tEnabled": false
        },
        {
          "entryType": "GROUP",
          "tTemplateOnly": false,
          "numDaysToRotate": 0,
          "data": {},
          "resetAt": 1700666400000,
          "currentVersionId": 120,
          "rotationType": "DAILY",
          "leaderboardType": "HIGH_VALUE",
          "leaderboardId": "lbg",
          "tEnabled": false
        }
      ],
      "moreAfter": false,
      "moreBefore": false
    }
  },
  "status": 200
}
```

</details>

