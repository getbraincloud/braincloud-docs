---
title: "Release 4.3"
date: "2019-11-13"
tags: 
  - "release-history"
---

Release 4.3 fulfills a bunch of community requests - there is something for everyone!

## Release Highlights

### Geo Matchmaking

We have enhanced our Online Matchmaking support to automatically match players up into lobbies in the best server regions (for them).

The process is simple, and works like this:

- When a lobby is first created, it is assigned to the region closest to the user that initiated it
- As users look for lobbies (i.e. online matchmaking), the lobby's rating and region location (i.e. ping data) are automatically considered

Essentially, the best matching (rating-wise) lobby in an acceptable region will be automatically selected.

To utilize geo matchmaking:

- Create lobby types with servers in multiple regions
- Specify both ping data and rating in the compound matchmaking algorithm (see below)

Example `algo` json object for geo matchmaking:

{ 
  "strategy":"compound",
  "algos":\[ 
    { "criteria":"ping", "strategy":"absolute", "alignment":"absolute" },
    { "criteria":"rating", "strategy":"ranged-percent", "alignment":"center" }
  \],
  "compound-ranges":\[ 
    \[ 40, \[ 10, 20.5, 80 \] \],
    \[ 70, \[ 20, 20.5, 80, 160 \] \],
    \[ 140, \[ 80, 160 \] \],
    \[ 210, \[ 80, 160 \] \]
  \]
}

### Custom Entity (Beta) Migration

We continue to improve our support for custom entities.

As you may-or-may-not-know, Custom Entities are an improved version of _Global Entities_ and are available to users of our _Plus Plans_. 

Custom Entities allow developers to build data-rich applications with much _larger_ and _more complex_ data-sets. The power comes from storing each entity type in its own database _collection_ and allowing the developer to define _custom indexes_ unique to that entity type.

This release adds several new features to the mix:

- New screen under **Design | Custom Config | Custom Entities** for defining custom entity types, and the indexes associated with them. (Prior to this you had to use the API to do this)
- You can now mark a Custom Entity to be **migrated** automatically during **app deployment** (i.e. when pushing an updated configuration from the development version of your app to the production version). _Note that only un-owned entities can be migrated._

_Next up: we’ll be editing a Custom Entity editor screen to Global Monitoring soon, so you’ll be able to create and edit custom entities directly._

### Set-top Handoff API

We have added a second, more flexible hand-off API that can be used for authenticating brainCloud apps on devices with limited inputs (like the Apple TV or a VR headset).

The API enables a use case where:

- the user can log into a brainCloud app via a normal smartphone login
- the smartphone app generates a simple set-top handoff code via `CreateSettopHandoffCode()` cloud code API. The handoff code’s composition, length, and duration that it’s enabled is specified by the app.
- the user then enters the code into the Apple TV app or VR headset, which authenticates the user via the new `AuthenticateSettopHandoff()` API call

### User Service

By popular request, we’ve added a new `User` service to brainCloud.

This service provides the following advanced, cloud-code only APIs:

- `SysCreateUser*()` - useful in certain app scenarios. Allows an app to dynamically pre-create a user account (separate from the normal account during user login/registration)
- `SysGetPage()` / `SysGetPageOffset()` - allows a cloud code script to iterate through the users in an app.

Note that for system performance reasons, we have restricted the fields that can be used when querying the users to iterate through. These restrictions can be lifted in special circumstances for apps that will have constrained user sets (i.e. a few thousand users or less).

_Pro-tip: Apps with a need to iterate through larger groups of users in more interesting ways are encouraged to create an **owned Custom Entity** for each user._

### Misc Additions

The following additional tweaks (mostly from customer requests) have made it into release 4.3:

- **User Items screen** - we’ve added a new screen to User Monitoring to view the contents of the user’s inventory.
- **Dynamic group leaderboards** - we’ve added a new `PostScoreToDynamicGroupLeaderboard()` call to allow group leaderboards to be created on the fly
- **Autojoin across multiple group types** - the new `AutoJoinGroupMulti()` call allows you to specify a list of group types to choose from
- **Reset quests** - we’ve added `ResetQuests()` and `ResetAllQuestsAndMilestones()` API calls
- **Counts APIs** - we’ve added two methods to the `GlobalApp` service to retrieve some raw metric data about your app (DAU, MAU, that sort of thing). These APIs are cloud-code only.
- **Updated client timeouts** - the client libs automatically retry operations if they timeout - but the default timeouts were a bit low for some long-running scripts (which can go up to 60 seconds or more). So we have adjusted them to better we’ve updated the default client library retry timeouts from `[15s, 10s, 10s]` to `[15s, 20s, 30s, 50s]`. This change should be transparent to your app.
- **Bundle compression** - we have added optional bundle compression to our Unity libraries. It is currently off-by-default but can be enabled by the developer.
- **OKTA authentication support** - you can now write apps that implement OKTA authentication via our External Auth mechanism. To validate the JWT token passed in, simply use the new `verifyOktaJwt()` method that we have added to the Identity service. 
- **Cloud code editor extension change** - we’ve changed the default extension for our cloud code scripts from `.js` to `.ccjs` (i.e.  **c**loud **c**ode **j**ava**s**cript) - this mostly makes it easier for our sites and support teams to share example script. _Pro-tip - configure your IDE to treat .ccjs files as javascript!_
- **Facebook Graph API v 2.11** - support was added as a patch to 4.2 actually… (added previously as a 4.2.X patch)
- **Google Play Service V3** - the system is now using latest (V3) APIs… (added previously as a 4.2.X patch)

* * *

## Portal Changes

The following changes have been made to the portal:

### General

- **Branding/Themes**
    - **Pretty!** We’ve greatly improved the customizability of the working area of the portal. You will see the impact of this with more varied themes as we go from release to release… (and more branding flexibility for our private instance licensees)

### Design

- **Custom Config | Custom Entities**
    - This new screen allows you to define Custom Entity types, and the custom indexes that go along with them.

### Monitoring

- **User Monitoring | User Items**
    - New screen allows you to view and/or delete the items owned by a user
- **User Monitoring | Logs**
    - We’ve added an _Elapsed Time_ column to the user logs to show how much server-time was spent processing a request bundle

* * *

## API Changes

The following changes/additions have affected the brainCloud API:

- **Authentication**
    - `AuthenticateSettopHandoff()` call added - allows users to login using simple codes
- **Gamification**
    - Added new `ResetQuests()` and `ResetAllQuestsAndMilestones()` calls to cloud code - helpful for testing and debugging
- **GlobalApp**
    - Added `SysGetDailyCounts()` call to return the counts for your app for a single day
    - Added `SysGetMonthlyCounts()` call to return the counts for your app for the specified calendar month 
- **Group**
    - `AutoJoinGroupMulti()` call added - enables joining a random group selected from multiple group types
- **Identity**
    - `CreateSettopHandoffCode()` call added - creates a code that can be used to log the user in via `AuthenticateSettopHandoff()`
    - `VerifyOktaJWT()` call added for verifying OKTA JWT tokens
- **Leaderboard**
    - `PostScoreToDynamicGroupLeaderboard()` call added to allow group leaderboards to be dynamically allocated
- **User**
    - Create users in cloud-code via the new `SysCreateUserEmailPassword()`, `SysCreateUserUniversalId()` and `SysCreateUserExternalAuth()` calls
    - Page through your app’s users via the new `SysGetPage()` and `SysGetPageOffset()` calls

We have also deprecated the following methods:

- **Gamification**
    - Deprecated `ResetMilestones()` in the client libs - this method is now cloud-code only, like the new `ResetQuests()` and `ResetAllQuestsAndMilestone()` calls

* * *

## Miscellaneous Changes / Fixes

- Updated libraries
    - **All libraries** have the new **4.3 client APIs**
    - **All libraries** also have the **new connection timeout** values
    - The **Java** and **C++** libs have been updated with geo/ping-data support - meaning that all libs except Objective-C/Swift and AS3 support this now.
    - The **Unity library** now supports **bundle compression** for sends and receives. _It is disabled by default_.
- Documentation updates
    - The docs have been enhanced with the latest API calls.
- Important Fixes
    - <to-be-compiled\>
- Plus miscellaneous fixes and performance enhancements...
