# PostTournamentScoreOnBehalfOf
## Overview
Post score to another user.

<PartialServop service_name="tournament" operation_name="POST_TOURNAMENT_SCORE_ON_BEHALF_OF" / >

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
var profileId = "a-profile-id";
var leaderboardId = "leaderboardId";
var score = 0;
var data = {
    "nickname": "batman"
};
var roundStartedEpoch = Date.now();
var forceCreate = true;
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.postTournamentScoreOnBehalfOf(profileId, leaderboardId, score, data, roundStartedEpoch, forceCreate);
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
	"service": "tournament",
	"operation": "POST_TOURNAMENT_SCORE_ON_BEHALF_OF",
	"data": {
		"profileId": "the-profile-id",
		"leaderboardId": "leaderboardId",
		"score": 0,
		"data": {
			"nickname": "batman"
		},
		"roundStartedEpoch": "[[#ts]]",
		"forceCreate": false
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
    "leaderboardId": "^D^div6^2",
    "versionId": 1,
    "playerId": "c5ecdbda-5f91-41a9-96aa-174f412f7657",
    "score": 100,
    "data": {
      "nickname": "batman"
    },
    "createdAt": 1647877630346,
    "updatedAt": 1647877788048,
    "tCode": "tcode1",
    "tRank": 0,
    "tClaimedAt": 0,
    "tNotifiedAt": 0,
    "previousScore": 50
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
profileId | Profile id of the target user 
leaderboardId | The leaderboard for the tournament 
score | The score to post 
data | Optional data attached to the leaderboard entry
roundStartedEpoch | Time the user started the match resulting in the score being posted. (date in millis)
forceCreate | Should a new score be created? When false, the call can only modify a currently existing score. 


