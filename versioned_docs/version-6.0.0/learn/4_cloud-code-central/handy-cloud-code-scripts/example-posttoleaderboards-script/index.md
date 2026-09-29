---
title: "PostToLeaderboards script"
date: "2018-08-17"
---

### Purpose

This script allows you to efficiently post to multiple leaderboards.

### Script

Click [PostToLeaderboards.ccjs.zip](script/PostToLeaderboards.ccjs.zip) to download the file.

### Usage / Setup

To configure this script, simply import it into your app.

Then call it from your app via the [RunScript()](/api/capi/script/runscript) API call.

The script takes the following parameters:

- leaderboards - Ids of leaderboards to post to.
- score - new score being posted.
- extra - extra data attached on leaderboard entry.
```js
// Example Parameters
{
   "leaderboards": ["regular", "alltime"],
   "score": 1000,
   "extras": {}
}
```