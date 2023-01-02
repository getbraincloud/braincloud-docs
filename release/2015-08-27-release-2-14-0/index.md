---
title: "Release 2.14.0"
date: "2015-08-27"
tags: 
  - "release-history"
---

## Release Highlights

Highlights of this release include:

- **New Client Libs\*** - new Linux C++ Client, Visual Studio 2008 and Visual Studio 2010.
- **New Unity Example** - we've built a UNET version of [brainCloud Bombers](/learn/sdk-tutorials/unity-tutorials/braincloud-bombers-example-game/)
- **Performance optimizations** - ongoing optimizations to tune performance and scalability

_\* All other clients updated with the latest APIs, of course._

 

## Portal Changes

Changes to the portal:

- **Linux is now a selectable platform** - see **Design | Core App Info | Platforms**
- **Disable Event-checking** - If you aren't using events, you can disable checking for them in each message by unchecking the option in **Design | Core App Info | Compatibility Settings**
- **Flexible User Deletion** - ability to _Delete all Test Users_, and _All but Test Users._ In portal under **Design | Core App Info | Admin Tools**
- **File transfer usage** - now being reported in **API Usage** section of **Reporting**

 

## API Changes / Additions

Changes and additions to the APIs:

- We're reworking our Events system a bit:
    - **GetEvents()** method added to support directly polling for new events
    - **Authenticate()** and **GetPlayerState()** continue to return incoming and sent events.

 

## Misc. Changes / Fixes

Additional improvements in this release:

- Apple push notification certificates without passwords now work (before a password was \*required\*).
- Improved error logs - script failures being more consistently logged now, and with more information
- Improved matchmaking - we've improved the randomness of our matchmaking routines
