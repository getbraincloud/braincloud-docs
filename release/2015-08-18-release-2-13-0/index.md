---
title: "Release 2.13.0"
date: "2015-08-18"
tags: 
  - "release-history"
---

 

## Release Highlights

Highlights of this release include:

- **New-and-Improved Objective-C Client** - we've rebuilt our Objective-C client to support all our latest APIs.
- **Twitter Authentication Support** - your users can now use Twitter to log into your app. How social!
- **API Calls from Cloud Code are now free!\*** As per our original intent, API calls from cloud code scripts are now free\*. This incentivises you to write simple scripts to aggregate multiple calls - reducing round-trips to our servers, which reduces our costs - and in turn reduces yours!

_\* Minor adjustments to the Cloud Code billing strategy were introduced in [2.17](/apidocs/release-2-17-0/) to accommodate long-running Cloud Code scripts._

## Portal Changes

Changes to the portal:

- Developers can now set their brainCloud **App Secret** directly (see **Design | Core App Info | Application IDs**)
- Developers can now view and edit the **Indexed ID** property of their **Global Entities** in the portal (see **Monitoring | Global Monitoring | Global Entities**).  This field is useful for creating quick lookup keys for your entities.
- The **Recently Added Users** page has been optimized (see **Monitoring | User Monitoring**)
- API calls from within Cloud Code scripts are now displayed separately on the **Reporting | API Usage** page of the portal

 

## API Changes / Additions

Changes and additions to the APIs:

- New Twitter Identity APIs - AuthenticateTwitter(), AttachTwitterIdentity(), DetachTwitterIdentity() and MergeTwitterIdentity().

 

## Misc. Changes / Fixes

Additional improvements in this release:

- Updated Javascript Client - added missing Identity APIs, misc fixes, etc.
- Performance optimizations:
    - Improved Multiplayer Matchmaking performance
    - Improved Leaderboard performance
- Documentation Improvements:
    - Java/Javascript Gamification methods
    - Improved Multiplayer documentation
    - Improved Push Notification documentation
    - Improved Facebook IAP documentation
- Misc. fixes and optimizations
    - Fixes to push notifications subsystems to improve reliability
    - Fixes to deletion of users - some credentials (e-mail + universal) were not always being deleted
    - Improvements / fixes to leaderboard processing at high player counts
