---
title: "CC Tutorial2 - Making API calls"
date: "2016-02-16"
---

In this tutorial, we'll explain how to make brainCloud API calls from within Cloud Code scripts.

## Example Background

For this example, we'll imagine that the developer wants to write to two leaderboards upon completion of a game round.

She has decided to combine these two operations into a single cloud code script to reap the following benefits:

- _More responsive app_ - fewer client/server calls means a more responsive app
- _Cost savings_ - it costs 1 API count to call a script, but the first 2 API calls called from within a script are free (and the rest cost only 1/2 count each). The result is she can write to two leaderboards for a single API count combined, half the cost otherwise.

_Note that for this example we'll use the dynamic leaderboard calls so that we don't have to set up the leaderboard metadata ahead-of-time._

## Step 1 - Write the Script

We'll enter the script following the same steps as the last tutorial.

First of all, create the script by going to **Design | Cloud Code | Script**, hitting the **\[+\]**, setting _Script Name_ to **"Tut2\_WriteToLeaderboards"**, ensuring _Client Callable_ is **TRUE**, and entering the following for the _Test Parameters_:

Test Parameters
```js
{
  "score": 100,
  "kills": 10
}
```
Then switch to the _Editor_ tab and copy-and-paste the following for the script:

Script
```js
// Retrieve the parameters
var score = data.score;
var kills = data.kills;
var leaderboardsWritten = 0;
var results = {};

// Grab the leaderboard service proxy from the bridge
var leaderboardService = bridge.getLeaderboardServiceProxy();

// Prepare the leaderboard paramaters. These are only used when creating the 
// leaderboard (which happens the first time a score is posted to it)
var leaderboardType = "HIGH\_VALUE";
var rotationType = "NEVER";
var rotationReset = new Date("2016-01-01");  // Unused because rotationType is NEVER
var retainedCount = 1; // Just keep the current leaderboard

// Post to the score leaderboard
var scoreResult = leaderboardService.postScoreToDynamicLeaderboard(
    "scoreLeaderboard", 
    score, 
    null, // Not appending any extra data 
    leaderboardType, 
    rotationType, 
    rotationReset, 
    retainedCount);
    
if (scoreResult.status == "200") {
    
    leaderboardsWritten++;
    
    // Post to the kill leaderboard
    var killsResult = leaderboardService.postScoreToDynamicLeaderboard(
        "killsLeaderboard", 
        kills, 
        null, // Not appending any extra data 
        leaderboardType, 
        rotationType, 
        rotationReset, 
        retainedCount);
        
    if (killsResult.status == "200") {
        leaderboardsWritten++;
    }
    
}

results\["leaderboardsWritten"\] = leaderboardsWritten;
results;
```
The important things to note from this example:

- **Before you can make an API call, you must request the appropriate _service proxy_ from the bridge.**  Note that there are separate bridges for [Client API](/api/cc/bridge) and [S2S API](/api/s2s/bridge) calls - consult the appropriate one for the available proxies.
- **You then invoke the API call upon the _service proxy_ itself.**

* * *

## Step 2 - Run/Test the Script

Switch to the API Explorer and run the script. Remember to authenticate first!

You should see results that look similar to:

Results
```js
{
 "status": 200,
 "data": {
  "response": {
   "leaderboardsWritten": 2
  },
  "success": true
 }
}
```
For fun, check out the leaderboards from our Monitoring section. Go to **Monitoring | Global Monitoring | Leaderboards** By default you'll see the "killsLeaderboard" - but you can switch to the "scoreLeaderboard" via the combo box.

* * *

## Step 3 - Call the Script from your App

The following code would call the script from Unity:
```js
string scriptName = "Tut2\_WriteToLeaderboards";
string jsonScriptData = "{ \\"score\\": 100, \\"kills\\": 10 }";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

// Call the script 
_bc.ScriptService.RunScript(scriptName, jsonScriptData, successCallback, failureCallback);
```