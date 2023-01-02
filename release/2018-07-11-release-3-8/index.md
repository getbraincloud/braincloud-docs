---
title: "Release 3.8.0 - RTT is here!"
date: "2018-07-11"
tags: 
  - "release-history"
---

[![](images/braincloudrtt.500x120.png)](images/braincloudrtt.500x120.png)

brainCloud 3.8 marks the _beta_ release of our new _Real-time Tech_, which we ingeniously call **brainCloud RTT**.

The brainCloud Platform is built upon a request + response foundation - which provides great flexibility and reliability, together with incredible performance and scalability. There are times, however, when more adhoc communications are desirable (online gaming, chat, monitoring, etc) - and that is where RTT comes in.

brainCloud RTT adds a real-time channel to our client API. This channel allows clients to _listen for_ and _react to_ real-time events - without polling.

This enables a whole suite of new brainCloud features - the first of which you'll see in brainCloud 3.8!

_Note - brainCloud RTT is available to customers using the Business Plan and above <- this has changed - see below! Usage pricing above the initial set of included concurrent users will be announced soon!_

_To enable RTT, check **[x] Real-time Tech (RTT) Enabled** on the **Design | Core App Info | Advanced Settings** page._ 

_Update - As of 4.0, brainCloud now supports Plus Plans - which provide RTT features across a variety of usage levels. For more information on Plus Plans, see our [4.0 plan announcement](/blog/2019/05/18/braincloud-4-billing-plans)._

# Release Highlights

## Chat

Thanks to RTT, brainCloud now supports online chat!

We have focused primarily on supporting chat for _groups_, but we also provide support for _global_ chat channels - which are available to all users of an app.

Chat offers the following features:

- _global_ and _group_ channel types
- _simple_ or _rich_ content messages (developer defined)
- _caching_ of recent chat history
- support for _system_ messages (from the app, instead of an end-user)
- support for _hidden_ (semantic) messages
- ability to _edit / delete_ chat messages

_Note - Chat requires brainCloud RTT to be enabled for the app._

For more info, check out the [Chat API](/api/capi/chat) page, and try out our example chat app - [bcChat](https://github.com/getbraincloud/BCChat)!

## Messaging

brainCloud now provides a Messaging service as well. Messaging is different from chat, in that:

- recipients are addressed directly (i.e. not via channels)
- message history is managed on a user-by-user basis (i.e. not by channel)
- RTT is _optional_; if enabled, users will receive real-time notification of new messages

Messaging features:

- Support for multiple recipients
- Messages are organized into incoming ("inbox") and sent ("sent") messageboxes
- Support for _read_vs. _unread_messages
- Support for system messages (from the app, instead of an end-user)
- Automatic clean-up / deletion of expired messages (important to keep storage utilization low)

For more info, check out the [Messaging API](/api/capi/messaging) page.

## RTT Online

With RTT, brainCloud now directly supports the development and integration of custom servers for shared experiences - such as online games (async or otherwise), online meetings, shared document editing, etc.

[![](images/Online-Multiplayer-Process.png)](images/Online-Multiplayer-Process.png)

### Room Servers

Room Servers are custom servers used to provide a shared experience (i.e. an online game, online meeting, etc.) to a set of users.

These servers are light-weight and simple to develop, and can easily integrate with brainCloud's new Lobby and Online Matchmaking services.

In 3.8, Custom Room Servers must be hosted outside of brainCloud, but future brainCloud releases will support hosting the services directly under brainCloud via Docker containers.

### Lobbies

Lobbies are used to gather up users prior to launching Room Servers. They provide an online matchmaking service (as opposed to the offline strategy provided by our existing Matchmaking service).

Lobbies provide:

- support for multiple teams - with min / max # of users
- automatic assignment of users to teams (users can switch afterwards)
- management of _user settings_and _ready_status
- support for multiple lobby types
- support for calling an external _room server manager_to launch a _room server_when the lobby is _ready_

### Lobby Matchmaking

Online matchmaking is used to match up users with lobbies, in preparation for entering Room Servers.

The Lobby Matchmaking APIs allow the developer to:

- specify the type of lobby / room to match with
- specify the player rating to target
- specify an algorithm to use when _escalating_the search
- provide a custom filter script to use to filter out candidates

For more info, check out the [Lobby API](/api/capi/lobby) page.

## On Demand Tournaments

We have greatly enhanced our Leaderboard and Tournament systems to make the scheduling of tournaments more flexible.

brainCloud previously supported only _regularly recurring_ tournaments - which are tournaments that happen daily, weekly, monthly, etc... (i.e. at preset intervals). brainCloud 3.8 introduces new _On Demand / Adhoc Tournaments_ \- to support irregularly scheduled tournaments (i.e. major holidays, new releases, etc.)

_To create an adhoc tournament, create a leaderboard and choose the "Adhoc Tournaments" rotation type. Then manually add each tournament period._

## Cloud Code Import / Export

Finally, we are reworking our cloud code management sytems. As part of this, we have created a new serialization format for cloud code scripts, that makes it easier to export the scripts, edit them locally on your workstation, and upload them back to us.

The handy cloud-code method below allows you to post a score to multiple leaderboards:

var result = {};
result.posted = 0;
result.errors = 0;
result.errorsList = [];

// Grab the parameters
var leaderboards = data.leaderboards;
var score = data.score;
var extras = data.extras;

var \_leaderboard = bridge.getLeaderboardServiceProxy();
var postResult = {};

// Loop through the leaderboards
for (var i = 0; i < leaderboards.length; i++ ) {
    
    // Post the score
    postResult = \_leaderboard.postScoreToLeaderboard(leaderboards[i], score, extras);
    if (postResult.status == 200) {
        result.posted++;
    } else {
        result.errors++;
        result.errorsList.push(postResult);
    }
    
}

// Return the results
result;
//\*\*\* ------------- brainCloud meta-data begins now - do not hand-edit -----------------
// "scriptName":"PostToLeaderboards",
// "clientCallable":true,
// "s2sCallable":false,
// "peerCallable":false,
// "scriptTimeout":10,
// "description":"Posts a score to multiple leaderboards",
// "parms":"{\\n  \\"leaderboards\\": [\\"weekly\\", \\"alltime\\"],\\n  \\"score\\": 1000,\\n  \\"extras\\": {}\\n}",
// "version":3,
// "updatedAt":1530799500264

To import it into your app:

- Click [here](/learn/cloud-code-central/handy-cloud-code-scripts/example-posttoleaderboards-script/) to download the serialized version of the cloud code script to your workstation
- Launch the _Design Portal_, and go to **Design | Cloud Code | Scripts**, and choose the _Import Script_ option from the **Import / Export** menu button
- Navigate to your download directory, and choose the `PostToLeaderboards.cloudcode.js.zip` script
- Click okay - and voila, you should now have the script, with all setting intact.

This new serialization format is the first step to a bunch of new features that we hope will make creating and managing cloud code scripts a lot easier for devs. We hope you like it!

* * *

# Portal Changes

The following additions and changes have made to the Design Portal:

## Design

- **Core App Info | Advanced Settings**
    - Added a new setting to _enable RTT_ to the App Settings section.
- **Cloud Code | Scripts**
    - Added new options for _importing_ and _exporting_ Cloud Code scripts.
- **Leaderboards | Leaderboard Configs**
    - This dialog has been _completely re-designed_ to better handle Tournament scenarios, including new _On Demand Tournaments._
    - One tournaments are enabled, a new _Tournament Periods_ section appears - allowing the developer to select and edit the settings of a specific tournament rotation.
    - Recurring tournaments will always show the _current period,_ followed by the _next (recurring) period._ Changes to either period will affect all periods that follow_._
    - Adhoc tournaments will show the the current period (if there is one) and any future periods. Adhoc tournament periods do not repeat - you must individually schedule each one.
- **Messaging | Chat**
    - Used to enable and configure the new _Chat_ service.
    - The settings determine how much chat history is preserved.
- **Messaging | Chat Channels**
    - Used to configure the list of _Global Chat Channels_ for the app.
- **Messaging | Messaging**
    - Used to enable and configure the _Messaging_ service.
    - The settings determine message retention, and whether outgoing copies of messages are saved.
- **Multiplayer | Lobbies**
    - Used to enable the _Lobby_ service, and configure the list of _Lobby Types_.
    - Lobby type settings include:
        - _team definitions_ - including min / max number of partipants
        - _progression rules_ - including timing and ready-up percentages
        - _matchmaking filter_ - used to customize matchmaking beyond the built-in skill, lobby-type and team space algorithm
        - _room server manager_ - the web call to make to allocate a room server for the experience
        - _custom config_ - custom json parameters to pass onto the room server at the start of the experience

[![](images/2018-07-17_21-06-03.gif)](images/2018-07-17_21-06-03.gif)

## Monitoring

- **Global Monitoring | Leaderboards**
    - Updated the leaderboard viewer to view On Demand / Adhoc Tournaments

* * *

# API Changes

The following changes/additions have been made to the brainCloud API:

- **[New!] Chat**
    - Add _online chat_ to your app quickly and easily!
    - Check out the [Client](/api/capi/chat) and [S2S](/api/s2s/chat) Chat APIs.
- **Client**
    - **[New!]** [EnableRTT()](/api/capi/rtt/enablertt) - Used to establish the RTT connection from the client.
    - **[New!]** [DisableRTT()](/api/capi/rtt/disablertt) - Disconnect from RTT.
    - Plus methods for registering and de-registering RTT listeners for Chat, Events, Messaging and Lobbies. See [Client](/api/capi/client) service for details.
- **Event**
    - No more polling! [SendEvent()](/api/capi/event/sendevent) now sends a realtime event to the recipient if they are currently online, and RTT is enabled.
    - See the [RegisterRTTEventCallback()](/api/capi/rtt/registerrtteventcallback) API for details.
- **GlobalEntity**
    - Made the following system entity calls available from client session cloud-code scripts (they were previously S2S only)
        - [CreateSystemEntity()](/api/capi/globalentity/createsystementity), [GetSystemEntityList()](/api/capi/globalentity/getsystementitylist), [GetSystemEntityListCount()](/api/capi/globalentity/getsystementitylistcount), [GetSystemEntityPage()](/api/capi/globalentity/getsystementitypage), [GetSystemEntityPageOffset()](/api/capi/globalentity/getsystementitypageoffset), and [ReadSystemEntity()](/api/capi/globalentity/readsystementity).
    - [GetListByIndexedId()](/api/capi/globalentity/getlistbyindexedid) now returns `entityListCount` in addition to the list of items.
- **[New!] Lobby**
    - Add online matchmaking, full lobby support and easy custom server integration to your app.
    - Check out the [Client](/api/capi/lobby) and [S2S](/api/s2s/lobby) Lobby APIs.
- **[New!] Messaging**
    - Add _user-to-user messaging_ to your app, with optional real-time delivery via RTT.
    - Check out the [Client](/api/capi/messaging) and [S2S](/api/s2s/messaging) Messaging APIs.
- **Product**
    - Added the missing [VerifyItunesReceipt()](/api/capi/product/verifyitunesreceipt) call to Cloud Code.

In addition, all brainCloud file downloads (global and user) are now resumable (we have added the "Accept-Ranges" header).

* * *

# Miscellaneous Changes / Fixes

- Updated libraries
    - RTT support, with Chat, Messaging and Lobby APIs, have been added to the _Unity_, _Java_ and _Javascript_ libraries. More libraries will follow soon!
    - All libraries have been updated with improved _retry_ and _packet-in-progress_ handling
    - Our Javascript library now directly supports NPM. Include `braincloud-js` to grab it.
- Documentation updates
    - We have updated the docs to reflect the new brainCloud services
- Plus miscellaneous fixes and performance improvements
