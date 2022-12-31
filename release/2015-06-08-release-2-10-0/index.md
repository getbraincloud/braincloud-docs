---
title: "Release 2.10.0"
date: "2015-06-08"
tags: 
  - "release-history"
---

This week we're addressing a bunch of customer requests. If you're lucky, maybe you'll see your favorite new feature in here! Remember, keep the feedback coming - with your help we plan to make brainCloud the most flexible and friendly BaaS on the planet!

## Release Highlights

Highlights of this week's release include:

- **Leaderboard Monitoring** - you can now view your game's leaderboards in the **Global Monitoring** section of the portal. Super useful during development, support/operations (catching cheaters!) and even for manually administering tournaments. Features include:
    - Paging through the leaderboards
    - View previous leaderboard versions
    - Reset leaderboard - deletes _all_ entries (only works for the active leaderboard, not for previous versions)
    - Delete leaderboard entry
    - View user - jumps to a view of the user associated with the score
- **Updated Javascript Client** - we've revamped the Javascript Client to use native HTTP calls (instead of JQuery). Useful for embedded client environments where JQuery is not a viable option.
- **Cloud Code Enhancements** - we've enhanced and improved the ability to call cloud code scripts from other scripts. (Yay!).  We've also normalized the returns from the cloud code API methods vs. the native client API methods. Basically, both now have separate <result\> and <data\> sections. Because this will break existing scripts, we've implemented a settings in **Advanced Settings** called **\[x\] Use Legacy Script Result Format**.  This setting defaults to \[x\] True for all existing apps with cloud code, but \[ \] False for everyone else. _We recommend migrating your scripts to work with the \[ \] False setting when you have a chance._

## Portal Changes

- **Global Property Categories** - You probably already know that _Global Properties_ are super useful. They allow you to define all sorts of configuration and tuning parameters for your app, that can be adjusted and tweaked to adjust how the app behaves, without requiring new builds and client installs. Now - because some folks were building up large-ish libraries of these properties, we thought we'd give you a way to better organize them.  Voila: Categories!  Note - categories do not affect the namespace of properties - all property names are global to your app.
- New **Leaderboard Monitoring** - go to **Monitoring | Global Monitoring | Leaderboards** to view your players' accomplishments in all their glory! _(see highlights section for details!)_
- New _Compatibility_ section in the **Design | Advanced Settings** page

## API Changes / Additions

- **Leaderboard API optimization** - the json data returned by GetGlobalLeaderboardPage() and GetGlobalLeaderboardView() now includes the current _Friend Summary Data_ for the players referenced by the leaderboard entries. Useful for when you want to display additional information about the ranked player in the leaderboard (i.e. xp level, faction, etc.) without requiring an additional brainCloud call for each entry.
- **Matchmaking optimization** - _Friend Summary Data_ has also been added to matchmaking results (for the same reason we did it for leaderboards!)
- **HTTP Client Service improvement** - we've enhanced the HTTP client Service accessible from Cloud Code to allow passage of query parameters as a map
- **GetGlobalProperties() return data** fixed - it no longer returns description data.  It was a defect (and a bandwidth hog) - so we've fixed it.

## Misc. Changes / Fixes

- **Server optimizations** - we've fixed our cloud code hook caching, so that it well, actually caches stuff now (whoopsie!). The unsurprising result is even faster processing of all API calls
- **Client packet retry improved** \- our clients now point to a new server end-point which better supports packet retries.
- The API Explorer's _GetShieldExpiry()_ method has been fixed
- Misc fixes and optimizations
