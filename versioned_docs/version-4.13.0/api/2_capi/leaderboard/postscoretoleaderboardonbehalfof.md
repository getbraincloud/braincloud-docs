# PostScoreToLeaderboardOnBehalfOf
## Overview
Post score to another player's score.

<PartialServop service_name="leaderboard" operation_name="POST_SCORE_TO_LEADERBOARD_ON_BEHALF_OF" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// Cloud code only. To view, switch to CC tab
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// Cloud code only. To view, switch to CC tab
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// Cloud code only. To view, switch to CC tab
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// Cloud code only. To view, switch to CC tab
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// Cloud code only. To view, switch to CC tab
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var profileId = "the-profile-id";
var leaderboardId = "the-leaderboard-id";
var score = 10;
var data = {
  "nickname": "batman"
};
var forceCreate = false;
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.postScoreToLeaderboardOnBehalfOf(profileId, leaderboardId, score, data, forceCreate);
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
	"service": "leaderboard",
	"operation": "POST_SCORE_TO_LEADERBOARD_ON_BEHALF_OF",
	"data": {
		"profileId": "the-profile-id",
		"leaderboardId": "a-leaderboard-id",
		"score": 10,
		"data": {
			"nickname": "batman"
		},
		"forceCreate": false
	}
}
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

## Method Parameters
Parameter | Description
--------- | -----------
profileId | The profileId of the player to post on behalf of.
leaderboardId | The id of the leaderboard.
score | The score to post.
data | Optional user-defined data to post with the score.
forceCreate | Should a new score be created if one doesn't currently exist? 


