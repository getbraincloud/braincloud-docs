# FindPlayersUsingScript
## Overview
Finds matchmaking enabled players using optionally specified filter script and optional player rating override.
Passing empty string (i.e. "") for scriptName will not run a script filter. Passing null will invoke the configured script similar
to findPlayersUsingFilter.

Similarly passing null for player rating will use the players current rating.

Additional information of filters can be found under [Matchmaking Filters](/api/capi/matchmaking/#matchmaking-filters).

<PartialServop service_name="matchMaking" operation_name="FIND_PLAYERS_USING_SCRIPT" / >

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
var rangeDelta = 10;
var numMatches = 1;
var playerRating = 10;
var scriptName = "script";
var jsonExtraParms = {
    "parm1": 10
};
var matchMakingProxy = bridge.getMatchMakingServiceProxy();

var postResult = matchMakingProxy.findPlayersUsingScript(rangeDelta, numMatches, playerRating, scriptName, jsonExtraParms);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
  "rangeDelta": 10,
  "numMatches": 1,
  "playerRating": 10,
  "scriptName": "script",
  "extraParms": {
    "parm1": 10
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
    "status": 200,
    "data": {
        "matchesFound": [
            {
                "pictureUrl": null,
                "playerName": "UserC-1239941736",
                "playerId": "c2b88d3f-2s32-43a6-9a71-0f0157e46505",
                "playerRating": 0,
                "summaryFriendData": null
            },
            {
                "pictureUrl": null,
                "playerName": "UserA-914307852",
                "playerId": "96afefc7-02b2-4148-8d36-c62855d917b6",
                "playerRating": 0,
                "summaryFriendData": null
            }
        ]
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
rangeDelta | How close an opponents rating must be to yours
numMatches | The maximum number of matches to return
playerRating | Player rating override
scriptName | Name of filter script
jsonExtraParms | Parameters to be passed to the filter


