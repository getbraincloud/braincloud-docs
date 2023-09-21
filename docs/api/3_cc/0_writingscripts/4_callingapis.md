# Calling APIs

> PostScores - Post to multiple leaderboards

```cfscript
// Note assumes that 3 leaderboards ("board1", "board2" and "board3")
// have already been created. Go to Design | Leaderboards in the
// Design Portal to set up.

function postScore( service, leaderboardId, score )
{
    // Call the API to post the score to the specified leaderboard
    var result = service.postScoreToLeaderboard( leaderboardId, score, null );

    if (result.status == 200){
        return 1;
    } else {
        return 0;
    }
}

// Script begins ===========

var numPosted = 0;
var score1 = data.score1;
var score2 = data.score2;
var score3 = data.score3;

// Retrieve the service proxy
var leaderboardService = bridge.getLeaderboardServiceProxy();

// Post the scores to the 3 leaderboards
numPosted += postScore( leaderboardService, "board1", score1);
numPosted += postScore( leaderboardService, "board2", score2);
numPosted += postScore( leaderboardService, "board3", score3);

// Return the total posted
numPosted;
```

To call a <%= data.branding.productName %> API from within a script, you must retrieve the appropriate service proxy from the `bridge`. You then call the desired method on the proxy.

*The code below retrieves the number of times a user has logged into the app:*
```
var playerStateService = bridge.getPlayerStateServiceProxy();
var numLogins = playerStateService.readUserState().data.loginCount;
```

> PostScores - example parameters

```json
{
    "score1": 100,
    "score2": 200,
    "score3": 300
}
```

The larger example on the right shows how you can easily create a script to perform multiple operations on the server.

:::tip
Pro-tip: Invoking a cloud code script costs 1 API count - but its first 2 API calls are free, and every call after that is just 1/2 API count.
:::

:::success
Since the PostScores script only makes 3 calls (to post to the leaderboard), its total cost is 1.5 API. That's a big savings compared to making these 3 calls from the client directly -- and it performs better too!.
:::

> PostScores - expected results

```json
{
    "status": 200,
    "data": {
        "response": 3,
        "success": true
    }
}
```