# GetGlobalLeaderboardPageByVersion
## Overview
> NOTE: The friend summary data is returned for each record in the leaderboard.

> NOTE: "timeBeforeReset" is only returned when the requested version is also the active version.



Method returns a page of global leaderboard results. By using a non-current version id, the user can retrieve a historical leaderboard.



:::tip
See GetGlobalLeaderboardVersions method to retrieve the version id.
:::

<PartialServop service_name="leaderboard" operation_name="GET_GLOBAL_LEADERBOARD_PAGE" / >

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
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var leaderboardId = "default";
var sort = "HIGH_TO_LOW";
var startIndex = 0;
var endIndex = 9;
var versionId = -1;
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.getGlobalLeaderboardPageByVersion(leaderboardId, sort, startIndex, endIndex, versionId);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var leaderboardId = "default";
var sort = "HIGH_TO_LOW";
var startIndex = 0;
var endIndex = 9;
var versionId = -1;
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.getGlobalLeaderboardPageByVersion(leaderboardId, sort, startIndex, endIndex, versionId);
if (postResult.status == 200) {
    // Success!
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
    "status": 200,
    "data": {
        "leaderboard": [
            {
                "playerId": "9073dff7-0df6-437e-9be6-39cd704dcoj4",
                "score": 100,
                "data": null,
                "createdAt": 1401385959596,
                "updatedAt": 1401385959596,
                "index": 0,
                "rank": 1,
                "name": "",
        		"pictureUrl": null
            },
            {
                "playerId": "7c107e9f-ab48-492d-a000-defec6237700",
                "score": 10,
                "data": null,
                "rewarded": false,
                "createdAt": 1401385898407,
                "updatedAt": 1401385898407,
                "index": 1,
                "rank": 2,
                "name": "",
        		"pictureUrl": null
            }
        ],
        "leaderboardSize": 31,
        "moreBefore": false,
        "moreAfter": true,
        "timeBeforeReset" : 588182412,
        "server_time": 1395840957588
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | The id of the leaderboard
sortOrder | Sort order of page. ("HIGH_TO_LOW" or "LOW_TO_HIGH")
startIndex | The rank at which to start the page.
endIndex | The rank at which to end the page.
versionId | The historical version to retrieve.


