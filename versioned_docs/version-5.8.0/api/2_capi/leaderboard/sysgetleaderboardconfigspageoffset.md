# SysGetLeaderboardConfigsPageOffset
Gets the page of leaderboard configuration information from the server based on the encoded context and specified page offset.

<PartialServop service_name="leaderboard" operation_name="SYS_GET_LEADERBOARD_CONFIGS_PAGE_OFFSET" />

## Method Parameters
Parameter | Description
--------- | -----------
context | The context string returned from the server from a previous call to SysGetLeaderboardConfigsPage or SysGetLeaderboardConfigsPageOffset.
pageOffset | The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.

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
var context = "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0";
var pageOffset = 1;
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.SysGetLeaderboardConfigsPageOffset(context, pageOffset);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"leaderboard",
    "operation":"SYS_GET_LEADERBOARD_CONFIGS_PAGE_OFFSET",
    "data":{
        "context":"eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0",
        "pageOffset":1
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
    "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJnYW1lSWQiOiIyMzc4MiJ9LCJzb3J0Q3JpdGVyaWEiOnt9LCJwYWdpbmF0aW9uIjp7InJvd3NQZXJQYWdlIjoxMCwicGFnZU51bWJlciI6MiwiZG9Db3VudCI6ZmFsc2UsInNraXBSZWNvdW50Ijp0cnVlfSwib3B0aW9ucyI6bnVsbCwicmVzdWx0Q291bnQiOjIxfQ",
    "results": {
      "count": 21,
      "page": 2,
      "items": [
        {
          "entryType": "PLAYER",
          "tTemplateOnly": false,
          "numDaysToRotate": 0,
          "data": {},
          "currentVersionId": 3,
          "rotationType": "ADHOC",
          "leaderboardType": "HIGH_VALUE",
          "leaderboardId": "l7",
          "tEnabled": true
        },
        {
          "entryType": "PLAYER",
          "tTemplateOnly": false,
          "numDaysToRotate": 0,
          "data": {},
          "resetAt": 1700600940000,
          "currentVersionId": 347,
          "rotationType": "DAILY",
          "leaderboardType": "HIGH_VALUE",
          "leaderboardId": "daily",
          "tEnabled": false
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
          "entryType": "PLAYER",
          "tTemplateOnly": false,
          "numDaysToRotate": 0,
          "data": {
            "info": "Adding tournament to encourage play."
          },
          "resetAt": 1707765544000,
          "currentVersionId": 879,
          "rotationType": "DAILY",
          "leaderboardType": "HIGH_VALUE",
          "leaderboardId": "aLeaderboardId",
          "tEnabled": true
        },
        {
          "entryType": "PLAYER",
          "tTemplateOnly": false,
          "numDaysToRotate": 4,
          "data": {
            "info": "Adding tournament to encourage play."
          },
          "resetAt": 1700739144000,
          "currentVersionId": 101,
          "rotationType": "DAYS",
          "leaderboardType": "HIGH_VALUE",
          "leaderboardId": "aLeaderboardId2",
          "tEnabled": true
        },
        {
          "entryType": "PLAYER",
          "tTemplateOnly": true,
          "numDaysToRotate": 4,
          "data": {
            "info": "Adding tournament to encourage play."
          },
          "resetAt": 1700675944000,
          "currentVersionId": 109,
          "rotationType": "DAYS",
          "leaderboardType": "HIGH_VALUE",
          "leaderboardId": "aLeaderboardIdb",
          "tEnabled": true
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
        },
        {
          "entryType": "PLAYER",
          "tTemplateOnly": false,
          "numDaysToRotate": 5,
          "data": {
            "street": "1309 Carling"
          },
          "resetAt": 1700724306479,
          "currentVersionId": 63,
          "rotationType": "DAYS",
          "leaderboardType": "HIGH_VALUE",
          "leaderboardId": "default1",
          "tEnabled": false
        },
        {
          "entryType": "PLAYER",
          "tTemplateOnly": true,
          "numDaysToRotate": 4,
          "data": {
            "info": "Adding tournament to encourage play."
          },
          "resetAt": 1700675944000,
          "currentVersionId": 100,
          "rotationType": "DAYS",
          "leaderboardType": "HIGH_VALUE",
          "leaderboardId": "aLeaderboardIda",
          "tEnabled": true
        }
      ],
      "moreAfter": true,
      "moreBefore": true
    }
  },
  "status": 200
}
```

</details>

