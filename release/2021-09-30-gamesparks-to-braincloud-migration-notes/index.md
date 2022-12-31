---
title: "GameSparks to brainCloud migration notes"
date: "2021-09-30"
tags: 
  - "release-history"
---

brainCloud is an excellent option for developers looking to migrate their app and players before [GameSparks shuts down on September 30, 2022](https://docs.gamesparks.com/transition-faq/).

GameSparks developers will find that the brainCloud feature set and technology platform align well with what they are already used to.

Major advantages of migrating to brainCloud include:

- **Cloud code** - brainCloud's cloud code system utilized JavaScript, is based on Mozilla Rhino, uses JSON parameters, and allows synchronous access to the full brainCloud API.
- **Cloud data** - brainCloud uses NoSQL MongoDB for persistent data storage.
- **Chat & Messaging** - brainCloud's RTT (Real-time Tech) service provides support for Chat (both Global and Group channels) and player-to-player Messaging
- **Downloadables** - brainCloud supports Downloadables and Uploadables, with built-in CloudFront CDN support
- **Email** - brainCloud provides a **SendGrid** integration for email
- **Leaderboards** - brainCloud rich leaderboard system directly supports everything but leaderboards partitions - and partitions can be emulated via separate, dynamically created leaderboards.
- **Multiplayer** - brainCloud provides support for hosted Room and Relay Servers, and beginning in 4.9 supports Amazon GameLift as well!
- **Teams** - brainCloud's Group service provides support for teams - including team chat and leaderboards
- **Virtual Currencies and Virtual Goods** - brainCloud supports them both, along with purchasing both from the AppStores.
- And much, much more!

This document provides instructions and tips for migrating your app from GameSparks to brainCloud.

Click on the _collapsable_ table-of-contents to jump to a section.

Table of contents

1. [Achievements](#achievements)
    
2. [Authentication Basics](#authentication-basics)
    1. [Registration](#registration)
        
    2. [Authentication](#authentication)
        
3. [Authentication (3rd Party)](#authentication-3rd-party)
    
4. [Chat & Messaging](#chat-amp;-messaging)
    1. [Chat](#chat)
        
    2. [Messaging](#messaging)
        
5. [Cloud Code](#cloud-code)
    1. [brainCloud Data](#braincloud-data)
        
    2. [MetaCollections](#metacollections)
        
    3. [System-Scripts](#system-scripts)
        
    4. [Bulk-Jobs](#bulk-jobs)
        
    5. [Schedulers](#schedulers)
        
    6. [Transitioning MetaCollections](#transitioning-metacollections)
        
    7. [GameSparks API Wrappers](#gamesparks-api-wrappers)
        
    8. [Asynchronous APIs](#asynchronous-apis)
        
    9. [Performance Bottlenecks](#performance-bottlenecks)
        
6. [Data Transition Guide](#data-transition-guide)
    1. [Reference data](#reference-data)
        
    2. [User accounts](#user-accounts)
        
7. [Downloadables](#downloadables)
    
8. [Emails (SendGrid)](#emails-sendgrid)
    
9. [Leaderboard Basics](#leaderboard-basics)
    
10. [Leaderboard Partitions](#leaderboard-partitions)
    
11. [Leaderboard Resetting](#leaderboard-resetting)
    
12. [Manage Screens](#manage-screens)
    
13. [Matchmaking](#matchmaking)
    
14. [Player Manager](#player-manager)
    
15. [Scheduled Events](#scheduled-events)
    
16. [Teams](#teams)
    1. [Team Chat & Notifications](#team-chat-amp;-notifications)
        
    2. [Team Leaderboards](#team-leaderboards)
        
    3. [Team Data](#team-data)
        
17. [Virtual Currency](#virtual-currency)
    
18. [Virtual Goods Basics](#virtual-goods-basics)
    
19. [Virtual Goods (3rd Party)](#virtual-goods-3rd-party)
    

## Achievements

brainCloud supports standard achievement functionality: short name (id), title, description, and platform-specific achievement IDs. Devs can also attach a collection of key+value pairs for additional metadata.

In brainCloud, Achievements are cosmetic - they do not deliver additional rewards (such as _Virtual Currencies_, _Player XP_, _User Statistics_, _Virtual Goods_, etc.).

brainCloud does provide a **Milestone** system, however, that can be used to trigger such awards - including _Achievements_ themselves. Milestones are configured to watch _User Statistics_ and trigger automatically when specified thresholds are exceeded. Milestones can award _Achievements_, _Virtual Currencies_, _Player XP_, _User Statistics_, and _Global Statistics_. 

Milestones do not currently award _Product Items_; that feature is coming in an _upcoming release._ This functionality can however be easily achieved with custom code by attaching the product item id to the Achievement’s metadata.

brainCloud does not have _Leaderboard Triggers_ - but you _can_ attach a custom Cloud Code script to any API Call via the **API Hooks** feature. So for example, a _PostSuccess API Hook_ on the PostScoreToLeaderboard() call can achieve a similar result.

* * *

## Authentication Basics

brainCloud supports a rich set of _authentication types_ (also called _Identity Types_).

The equivalent of GameSpark’s Device Authentication is brainCloud’s _Anonymous ID_. This is a generated GUID that is stored on the player’s device.

Authenticating anonymously is as simple as calling the brainCloud Wrapper’s `AuthenticateAnonymous()` call. 

bool forceCreate = true; // Creates the account if it doesn't already exist
SuccessCallback successCallback = (response, cbObject) =>
{
    // Continue with launching the app
    // ...
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    // An error occurred
    // Pop up a dialog for the user to retry?
};

\_bc.AuthenticationService.AuthenticateAnonymous(forceCreate, successCallback, failureCallback);

### Registration

brainCloud also supports both Univeral Identity (username + password) and Email Identity (email address + password) authentication.

To register their account, the app simply attaches the desired identity type to the player’s account. For example, the following code attaches a Universal Identity to the account.

bc.IdentityService.AttachUniversalIdentity( 
    userId,
    password,
    SuccessCallback, FailureCallback);

### Authentication

Once a higher form of identity has been attached to the account, the app can login using that identity via the appropriate authentication calls. For example, to login via the Universal Identity:

\_bc.AuthenticationService.AuthenticateUniversal(
    userId, 
    password, 
    forceCreate, 
    successCallback, 
    failureCallback);

* * *

## Authentication (3rd Party)

brainCloud supports Sign in With Apple, Facebook Login, Google Play, Google OpenId, Oculus, and more.

From a code perspective, all work basically the same:

- The app uses the appropriate Platform / 3rd Party SDK to authentication the user
- The app then passes the authentication information returned from the SDK to brainCloud (via the appropriate authentication mechanism
- brainCloud validates the authentication is legit - and then looks up the user’s account and/or creates a new account as directed (according to the \`\``forceCreate`option)

For example, the call for Sign in with Apple is:

\_bc.AuthenticationService.AuthenticateApple(
    appleUserId, 
    identityToken, 
    forceCreate, 
    SuccessCallback, 
    FailureCallback);

Tutorials for configuring brainCloud and the 3rd party system can be found here:

- Sign in with Apple - [https://getbraincloud.com/apidocs/portal-usage/authentication-apple/](https://getbraincloud.com/apidocs/portal-usage/authentication-apple/)
- Facebook Login - [https://getbraincloud.com/apidocs/portal-usage/basic-configuration-facebook/](https://getbraincloud.com/apidocs/portal-usage/basic-configuration-facebook/)
- Google Play - [https://getbraincloud.com/apidocs/portal-usage/authentication-google-playgame/](https://getbraincloud.com/apidocs/portal-usage/authentication-google-playgame/)
- Google OpenId - [https://getbraincloud.com/apidocs/portal-usage/authentication-google-openid/](https://getbraincloud.com/apidocs/portal-usage/authentication-google-openid/)
- Oculus - [https://getbraincloud.com/apidocs/portal-usage/authentication-oculus/](https://getbraincloud.com/apidocs/portal-usage/authentication-oculus/)

* * *

## Chat & Messaging

brainCloud supports both Chat and Messaging as part of its **RTT** (Real-time Tech) offering. RTT enhances brainCloud’s standard request+response API with an additional WebSocket connection to the server for bi-directional real-time communications.

### Chat

In brainCloud, Chat messages are directed to _channels_, not users. Channels have an ID and a rolling history. Active listeners of a channel are notified in real-time when new messages are posted.

brainCloud supports Global, Group (i.e. Clans or Teams) and Dynamic Channels. brainCloud also supports Lobby Chat - though technically that is achieved through a separate, lobby event API.

To participate in Chat or Messaging, the client app must first enable RTT:

eRTTConnectionType rttConnectionType = eRTTConnectionType.WEBSOCKET;
\_bc.RTTService.EnableRTT(rttConnectionType, successCallback, failureCallback);

And register for the chat callback:

RTTCallback rttCallback = response =>
{
   Debug.Log(response);
   // do something! :)
};
\_bc.RTTService.RegisterRTTChatCallback(rttCallback);

Next, the app connects to the desired chat channel:

string channelId = "22817:gl:CHAT\_TRADE"; // APP\_ID:CHANNEL\_TYPE:CHANNEL\_ID
\_bc.ChatService.ChannelConnect(
    channelId, 
    maxReturn, 
    successCallback, 
    failureCallback);

And finally to post a message:

\_bc.ChatService.PostChatMessageSimple(
    channelId, 
    chatMessage, 
    true, 
    successCallback,
    failureCallback);

Note that brainCloud chat supports both simple text and rich JSON payloads - and integrates with WebPurify for profanity filtering.

### Messaging

In brainCloud, _Messaging messages_ differ from _Chat messages_ in that they are directed at _players_, not _channels_. Messaging can be thought of as a simple local email system for your app.

Each player has an inbox and an outbox.

Note - because Messaging is RTT-enabled, online players will be alerted in real-time (via a callback) when a new Message arrives. 

brainCloud Messaging supports both simple text messages and complex JSON payloads. The following method delivers a simple text message to the players at the specified `profileIds`.

\_bc.MessagingService.SendMessageSimple(
  toProfileIds, 
  text, 
  successCallback, 
  failureCallback);

* * *

## Cloud Code

brainCloud’s Cloud Code system is very similar to the model employed by GameSparks:

In brainCloud:

- Cloud code Scripts are written in **JavaScript**, and run upon an embedded **Rhino** engine
- Scripts can [_include_](http://getbraincloud.com/apidocs/apiref/#cc-ccscripts-ccsharedscripts) other scripts and _call_ other scripts.
- Scripts are passed **JSON parameters** when they are called
- Scripts have access to the _full brainCloud API_ - including the ability to _**Get/Set Player Data**_ (like player statistics, attributes, User Entities, Owned Custom Entities, etc.) and **Get Static Game Data - MetaCollections** (like Global Properties, Global Entities, Un-owned Custom Entities, etc.)
- API calls made from Cloud Code Scripts run **synchronously** for simplicity!
- Scripts have access to the brainCloud HttpClient service - which can be used to **Send HTTP requests** to external services
- Scripts can be registered to be called from webhooks - which are useful for **Receiving HTTP Requests** from external services. (Note - brainCloud also supports a custom S2S API for more flexibility)
- brainCloud supports **User Batch Jobs** - so you can trigger a script to be run on a select batch of users (or all users). 
- brainCloud supports **Scheduling** scripts to be run in the future. Although there isn’t the concept of “run every hour” or “run every day” - it is very simple to have a script reschedule itself to achieve the same result.
- brainCloud scripts can be attached to API calls via **API Hooks**. API Hooks can be configured to run custom scripts before and/or after the API call. This can be useful for modifying a game’s behavior without the need to redeploy a new client.

### brainCloud Data

brainCloud offers a rich set of data APIs for storing player and game data. An overview of the different data APIs can be found [here](https://getbraincloud.com/apidocs/api-modules/data/) - as well as a discussion of the benefits of Custom Entities vs. the older User and Global Entity mechanisms [here](http://help.getbraincloud.com/en/articles/3754150-custom-entities-a-scalable-and-flexible-app-data-storage-and-querying-solution).

### MetaCollections

Developers should use brainCloud’s Unowned Custom Entities in place of MetaCollections. Custom Entities are JSON objects with a rich API for storage and retrieval. For more information, see the [Custom Entity API reference](http://getbraincloud.com/apidocs/apiref/#capi-customentity).

### System-Scripts

brainCloud provides a mechanism called [**API Hooks**](http://getbraincloud.com/apidocs/apiref/#cc-ccscripts-apihooks) that allows you to attach custom scripts to API Calls and other events in brainCloud.

API Hooks can be configured as either **Pre-** or **Post-** hooks - meaning that they will run either before or after the API calls they are enhancing. 

Post-hooks are useful for cases where you want to enhance the results of an API call with additional data - for example, attaching the user’s campaign state to the **Authenticate** call results.

Pre-hooks can be used to add additional checks to allow/disallow API calls - and alternatively re-route the calls themselves. They are an easy way to re-route cheaters to alternate leaderboards, for example.

### Bulk-Jobs

brainCloud offers a Batch User Script feature for scheduling a script to be run _all_ or a _subset_ of users.

Like GameSparks, the workload is spread across all players and executed as background jobs to not impact server performance. brainCloud also offers the ability to trigger a completion script when all users have been processed.

For more information, check out the [RunBatchUserScriptAndCompletionScript()](http://getbraincloud.com/apidocs/apiref/#s2s-script-runbatchuserscriptandcompletionscript) API call.

### Schedulers

brainCloud offers APIs for scheduling a script to run at a specified time in the future. Although not the same as the every-hour, every-day scripts supported by GameSparks - the same sort of functionality can be achieved by having the script re-schedule itself to run again. An [example](https://getbraincloud.com/apidocs/cloud-code-central/handy-cloud-code-scripts/scriptscheduler-script/) of such a script can be found in brainCloud’s Cloud Code Central repository.

### Transitioning MetaCollections

The brainCloud Portal offers the ability to import data from JSON files - this is supported for both Custom Entities and Global Entities. This is suitable when important static reference data - like level data, tuning files, etc.

Information

The allowed size of import files is limited - if you receive an error during the import, message our support and we may be able to adjust the limit for you.

_Note that brainCloud also supports an S2S API, which may be helpful if you need a more custom approach for migrating your app's reference data._

### GameSparks API Wrappers

If you decide to create wrappers for GameSparks key APIs, you can easily include them in your scripts using the bridge.include() operation.

Using this approach may allow you to better take advantage of the similarities between the brainCloud and GameSparks cloud code systems.

### Asynchronous APIs

Happily, brainCloud cloud code scripts use synchronous calls, just like GameSparks.

### Performance Bottlenecks

The brainCloud Cloud Code Editor and API Usage pages can help you to find performance bottlenecks:

- The **Cloud Code Editor** returns the execution time for each test run of your script. It also returns information on what API calls we made by the script - to help better understand where time may have been spent
- The **Reports | API Usage** page displays the average execution times of each of your API calls, including cloud code scripts. Any commonly called scripts taking longer than 200ms should be examined for possible optimizations.

* * *

## Data Transition Guide

### Reference data

The brainCloud Portal offers the ability to import data from JSON files - this is supported for both Custom Entities and Global Entities.

This is suitable when importing static reference data - like level data, tuning files, etc.

Information

The allowed size of import files is limited - if you receive an error during the import, message our support and we may be able to adjust the limit for you.

_Note that brainCloud also supports an S2S API, which may be helpful if you need a more custom approach for migrating your app's reference data._

### User accounts

For dynamic user data, it is highly recommended that new users be migrated over during initial login to brainCloud.

This has a number of benefits:

- Simpler - Importing a single user is simpler than importing all of them
- Scalable - It spreads the work of importing out, creating less load on both brainCloud and GameSparks
- Efficient - it ensures that only active player data is migrated over to brainCloud. If your game is more than two years old, it's likely that less than 25% of your stored player accounts are still active.

The recommended approach is to leverage the following brainCloud features:

- External Authentication - which allows brainCloud users to be authenticated via an external source - like your Gamesparks app
- API Post-Hook - which can be used after successful authentication, to trigger a script to retrieve the user's GameSparks data
- HTTPClient service - used to make HTTP calls to external services (i.e. GameSparks)

More information on this sort of approach can be found in [this](http://help.getbraincloud.com/en/articles/5374223-dynamic-account-migration-between-apps) article.

* * *

## Downloadables

brainCloud supports a Global Files service that allows developers to upload files to be downloaded by client apps. These files are automatically distributed to AWS CloudFront CDN for fast downloads.

Uploading of files to brainCloud is normally done via the Design Portal. It is also possible to upload a file as a User File via a Client Library, and then convert it to a Global File via an API Call.

(We will be adding the ability to upload Global Files directly in a future version of our APIs.)

* * *

## Emails (SendGrid)

brainCloud provides a SendGrid integration for sending emails.

To utilize brainCloud's SendGrid functionality, simply:

- Configure the SendGrid settings on the **Design | Integrations | Manage Integrations** page, _SendGrid_ section of the design portal
- Modify your scripts and/or client to use brainCloud's [`Mail` service](http://getbraincloud.com/apidocs/apiref/#capi-mail) APIs
- _Optionally_ customize the system templates to be used for password resets and such on the **Design | Authentication | Email Authentication** page.

* * *

## Leaderboard Basics

brainCloud provides a rich leaderboard system - with support for both player and group leaderboards, scoring types, rotation types, supplemental data, history, etc.

Leaderboards are normally pre-defined in the Portal on the **Design | Leaderboards | Leaderboard Configs** page. Leaderboards can also be dynamically created using the `PostScoreToDynamicLeaderboardUTC()` call.

Leaderboard scores can be viewed on the **Monitoring | Global Monitoring | Leaderboards** page of the Portal.

brainCloud of provides a rich API for returning leaderboard results, including social and global leaderboard results - as well as an advanced API for retrieving high scores across multiple leaderboards for social maps.

A player's own _score_ can be retrieved via the `GetPlayerScore()` api.

Advice

Pro-tip: To retrieve a player's _rank_ as well as _score_, use the `GetGlobalLeaderboardView()` call, specifying `0` for the `beforeCount` and `afterCount`.

* * *

## Leaderboard Partitions

brainCloud does not support Partitioned Leaderboards - but something similar can be achieved using multiple leaderboards.

To keep setup as simple as possible, we would recommend that the additional partitions (for example, country-specific versions of the leaderboard) be created programmatically with a descriptive suffix (i.e. "\_<countrycode\>". This can be done via a simple cloud code script and/or cloud code hook.

* * *

## Leaderboard Resetting

brainCloud directly supports the following automatic rotation types:

- NEVER - the leaderboard never resets
- DAILY - the leaderboard resets daily
- DAYS - the leaderboard resets after <x\> days
- WEEKLY - the leaderboard resets weekly
- MONTHLY - the leaderboard resets monthly
- YEARLY - the leaderboard resets yearly

brainCloud leaderboards also have a "retained count" - that determines how many old copies of the leaderboard are retained before deletion. This can be useful for rewarding players for their performance in the previous rotation.

Note that developers can also directly control rotation by configuring a NEVER leaderboard and resetting it manually via the `SysResetNeverLeaderboard()` call.

* * *

## Manage Screens

brainCloud has a feature-rich Design Portal that provides access to game, group, and player data - including entities, statistics, leaderboards, etc. All of this data is viewable and editable by development and support personnel (given appropriate permissions).

The data is all accessible via the Monitoring portion of the portal. Monitoring is broken into the following sub-sections:

- **Global Monitoring** - for viewing/editing global data - like global/custom entities, leaderboards, global statistics, job queues, and more
- **Group Monitoring** - for viewing/editing of groups and group data
- **User Monitoring** \- for viewing/editing of users and their data

brainCloud also provides an S2S API that can be used to implement a custom management tool that manages your brainCloud-based apps.

More information on the S2S API can be found [here](http://getbraincloud.com/apidocs/apiref/#s2s).

* * *

## Matchmaking

brainCloud provides two different matchmaking systems.

The `MatchMaking` service is primarily for use by games that are using brainCloud's `Async Match` and `One-way Match` APIs. Games of these types are often played offline - and thus this matchmaking service only selects offline players.

Online games should use the brainCloud `Lobby` service for matchmaking. Lobby Matchmaking identifies groups of suitable players for online play.

Lobby Matchmaking is highly configurable, with support for:

- skill level matching
- min / max players (by team)
- geo matching <- prioritizing players that are close together
- filter scripts

For more information, see the brainCloud [Lobby](http://getbraincloud.com/apidocs/apiref/#capi-lobby) service.

* * *

## Player Manager

Player Management is accomplished via the **Monitoring | User Monitoring** section of the portal. Subsections for viewing and editing player data include:

- User Summary - a summary of the user's info, including name, xp, identities, currency balances, etc.
- Achievements - displays the user's achievement status
- Attributes - displays any attributes attached to the user. Supported creating and editing of attributes
- Custom Entities - allows for view/edit of a user's owned Custom Entities
- Friends - view the player's friends (both 3rd party and locally managed)
- Groups - view the Groups the user is a member of
- Inventory - view the items owned by the player
- Milestones & Quests - view the user's completion status for milestones and quests
- One-way MP - view the status of recent one-way multiplayer matches
- Pricing - view the store prices for this player - including any promotions that may be being applied
- Statistics - view/edit the user's statistics
- Transactions - view any purchases the player may have made
- Turn-by-Turn MP - view any async match games currently in progress
- User Entities - view/edit the player's User Entities
- User Files - view the files that this user has uploaded
- Virtual Currency - view/edit the user's current balances
- Logs - logs of the user's recent interactions with the brainCloud API <- super useful for debugging!

brainCloud also offers an S2S API that can be useful for building custom management tools.

* * *

## Scheduled Events

brainCloud offers a Scheduled Promotions feature that can be used to configure sale prices for all users and/or specific segments of users.

The list of active promotions can also be queried via the `RefreshPromotions()` call - and could be used by the client to configure additional custom functionality.

* * *

## Teams

brainCloud's term for _Team_ is _Group_.

Groups are designed as follows:

- Groups consist of a collection of members (users)
- Groups have a name, a type, an id, and custom data
- Members are each assigned a role-based permission level: "OWNER", "ADMIN", or "MEMBER"
- Groups have one (and only one) "OWNER". The OWNER of a group can add/remove members, and delete the group
- Groups can have multiple "ADMIN"s. ADMINs are like OWNERs, except that they cannot delete the group.
- Any "MEMBER" can edit group data
- MEMBERs of a group can have custom attributes associated with them (can be used for custom application roles, etc.)
- Users can be members of more than one group
- Users can be the owner of more than one group
- Groups can also have associated Entities (i.e. GroupEntity)

### Team Chat & Notifications

brainCloud supports text-based _Team Chat_ via RTT's `Chat` Service. The `Chat` service supports special "group channels" for communications between the members of a group.

brainCloud also supports sending push notifications to the members of a group via the `SendRawPushNotificationToGroup()` call.

### Team Leaderboards

brainCloud supports group leaderboards - which are leaderboards where the group entries, instead of player entries.

brainCloud also supports group social leaderboard calls - where the results of the player leaderboard call are filtered to just the members of the specified group.

### Team Data

brainCloud supports two forms of team data:

- Group Data - which is custom JSON attached to a group
- Group Entities - which are JSON entity objects owned by a group

Both types of data are serviced via the [Group Service API](http://getbraincloud.com/apidocs/apiref/#capi-group).

* * *

## Virtual Currency

brainCloud provides a `VirtualCurrency` service for managing a player's currency balances. Developers can define as many currencies as they like - and these currencies can be automatically awarded from XP level-ups, Milestones, Quests, and Tournaments -- and of course, be purchased via in-app purchase Products.

To configure a sign-up bonus for players, simply add the desired currency amount as a reward for the initial XP level. _Note that this technique works even if your game doesn't otherwise use the brainCloud XP system._

* * *

## Virtual Goods Basics

brainCloud provides support for virtual goods via:

- `ItemCatalog` service - which defines the set of items (i.e. virtual goods) that are available for purchase by the user
- `UserItems` service - which manages the player's inventory of said items, including purchases and trading

Standard item properties include: id, name (_localizable_), category (_user-defined_), description (_localizable_), resource ids, pricing (in _virtual currency_), tags, and custom JSON data.

Additional properties enable behaviors like _stackable_, _consumable_, _activatable_, and _tradable_.

User items also have a publishing state (DRAFT, PUBLISHED, RETIRED, REVOKED) to help control their life cycle.

_Note that brainCloud does not currently support bundles - though this can be worked around using the custom JSON data and a bit of cloud code._

## Virtual Goods (3rd Party)

brainCloud directly supports in-app purchases on iOS, Google, Facebook, Steam, and more.

Purchases are enabled by defining _Products_ in the **Design | Marketplace | Products** screen of the _Design Portal_. Products are generally used to purchase Virtual Currency bundles, but in [brainCloud 4.9](https://getbraincloud.com/apidocs/braincloud-4-9/) we add support for purchasing User Items (i.e. Virtual Goods) as well.

Products in brainCloud can be defined with multiple price points - which are convenient for scheduling sales using the **Promotions** service.

To configure Products in brainCloud for purchase, developers must first:

- Configures the necessary platform integration settings. See tutorial examples for [iOS](https://getbraincloud.com/apidocs/portal-usage/store-integration-ios/) and [Google](https://getbraincloud.com/apidocs/portal-usage/store-integration-google-2/) to start.
- Configure the products to be purchased in the **Design | Marketplace | Products** page of the portal. The products should be configured to award Virtual Currencies, items from the Item Catalog, and/or custom rewards via attached JSON (and custom cloud code scripts)
- Configure the **pricing** of the products - matching up the appStore IDs with the definitions in the platform stores

At purchase time, the app will:

- Retrieve a list of the products available for sale (and their corresponding platform store ids) via brainCloud's `AppStore` service's `GetSalesInventory()` call.
- Call the Platform SDK to retrieve the localized prices for the items to display
- Display the list of products to the user in your custom storefront
- When a user selects purchase, the app will initiate a purchase transaction using the Platform SDK
- The SDK will return receipt data, which the app will forward to brainCloud using the `AppStore` `VerifyPurchase()` call
- brainCloud makes a server-to-server call to the Platform to verify the receipt data (as well as performs a few additional checks of our own)
- If the purchase is valid, the player is awarded the contents of the Product - and the results are returned to the client app

For more information, see the brainCloud [AppStore APIs](http://getbraincloud.com/apidocs/apiref/?csharp#capi-appstore).
