---
title: "Multiplayer"
date: "2014-09-09"
---

brainCloud directly supports the most common types of mobile multiplayer _right out-of-the-box_.  And with RTT, adds support for custom multiplayer experiences of any flavor (using custom or third-party tech).

brainCloud's multiplayer support is organized along the following definitions:

## Turn-by-Turn Async Multiplayer

Turn-by-Turn Async Multiplayer is arguably the most common form of mobile multiplayer - made popular by games such as **_Words With Friends_**, **_Draw Something_**, **_Trivia Crack_**, etc.  This multiplayer is very popular because it supports very casual + social types of games - and because it doesn't require the players to be online at the same time.

brainCloud has a full implementation of Turn-by-Turn Async Multiplayer, enabled via our [BrainCloudAsyncMatch](https://staging.getbraincloud.com/apidocs/apiref/#capi-asyncmatch) APIs, that works across all device types, and even supports anonymous matchmaking via the [BrainCloudMatchMaking](https://staging.getbraincloud.com/apidocs/apiref/#capi-matchmaking) service.  Players can also start matches with Facebook friends (by retrieving their profileID via the [BrainCloudFriend](https://staging.getbraincloud.com/apidocs/apiref/#capi-friend) API).

## One-Way Offline Multiplayer

Another very popular form of mobile multiplayer is what we call One-Way Offline Multiplayer. It's our name for the form of multiplayer popularized by games like **_Clash of Clans_**, **_Boom Beach_**, etc.  In it, an Attacker attacks the settlement (base, camp, fort, etc.) that has been set up by the Defender. Once again, the great thing about this form of multiplayer is that the Defender does not have to be online during the attack.

brainCloud has a full implementation of One-Way Offline Multiplayer, enabled via our [BrainCloudOneWayMatch](https://staging.getbraincloud.com/apidocs/apiref/#capi-oneway) APIs. Opponents to attack can be found using the [BrainCloudMatchMaking](/apidocs/apiref/#capi-matchmaking) service, or via the [BrainCloudFriend](https://staging.getbraincloud.com/apidocs/apiref/#capi-friend) API.

Refer to our [One-Way Offline Multiplayer Example](https://staging.getbraincloud.com/apidocs/api-modules/multiplayer/one-way-offline-multiplayer-example/) for more information.

## Real-time Multiplayer

This is our name for the form of multiplayer commonly used in Arena Shooters, MOBA's, MMOs, etc. Examples include _**Team Fortress 2**_, _**League of Legends**_, _**World of Warcraft**_, etc.

brainCloud provides all the building blocks necessary to build great multiplayer experiences - and easily integrates with third-party tech as well.

brainCloud provides built-in _Online Matchmaking_ and _Lobby Services_ - and our own _Relay Servers_ for simple, peer-to-peer multiplayer. Be sure to check out our multiplayer demo game, [brainCloud](https://staging.getbraincloud.com/apidocs/tutorials/unity-tutorials/bombers-rtt-example-game/) [Bombers](https://staging.getbraincloud.com/apidocs/tutorials/unity-tutorials/braincloud-bombers-example-game/), for more info!

For more competitive multiplayer, brainCloud can now host your custom Room/Game Servers - automatically launching them after users ready-up in lobbies. _**And as of release 4.9, brainCloud can now launch custom AWS GameLift servers as well!**_

Of course, brainCloud customers can also use other third-party multiplayer tech such as Photon from Exit Games, Steam Multiplayer, etc.

Games using these services still benefit from the rest of brainCloud's features, including player accounts, cloud data, push notifications, gamification, in-app purchase, monetization, leaderboards, tournaments, groups, etc.

## Semi-Realtime Multiplayer

Semi-Realtime Multiplayer is very similar to Realtime Multiplayer regarding technology - though the gameplay itself is less "twitch" based, and does not normally require physics, etc. Examples of this multiplayer would include online card games, like _**Uno**_ or _**Hearthstone**_. All players must be online at the same time, and the interactions \*are\* still in real-time, though the gameplay isn't as sensitive to latency issues.

This form of multiplayer is perfect for brainCloud's new Real-time Tech (RTT) infrastructure. RTT allows you to integrate custom Game or Room Servers with brainCloud - which will be served up by brainCloud's online matchmaking and lobby services.

_Check out our [Warstone](https://github.com/getbraincloud/examples-javascript) example game for more info._
