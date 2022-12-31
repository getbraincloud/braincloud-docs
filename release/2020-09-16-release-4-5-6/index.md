---
title: "Release 4.5.6 is live!"
date: "2020-09-16"
tags: 
  - "release-history"
---

brainCloud 4.5.6 is a very focused release - but much more significant than the version number would imply.

This update brings the release of our new **Version 2** **Relay Servers** - which are more reliable, more feature-rich, and faster to launch than our original Relay Servers.

_Important: The **RelayComms V2 Protocol** (used by brainCloud 4.5.6 and newer libs) **is not compatible** with the **RelayComms V1 Protocol** (used by brainCloud 4.5.5 and older libs). The recommended migration process is described later in this document._

* * *

## Release Highlights

### Improved Relay Servers

As more and more apps use brainCloud's Relay Servers, we have realized some limitations with our initial implementation:

1. Defect - reliable acknowledgments don't consider all combinations of channel \* reliable bit \* ordered bit \* net id (from user). Combinations of reliable/ordered would FAIL if used within the same channel Id. This issue would normally only happen with higher player counts - but it is definitely an issue.
2. Limitation - no way to send a message to a subset of players (e.g. your team in a competitive game). V1 only allowed for sending to _all_, or to a _single_ specified user
3. Limitation - no protocol version embedded in the protocol - which makes it near impossible to modify/extend/correct the protocol and maintain compatibility with older clients.
4. Unoptimized - the Docker container used to launch the relay servers wasn’t properly optimized to improve launch times. 

The _good_ news is that we have addressed these limitations with **Version 2** of our **RelayComms Protocol** - and incorporated it into our new **Relay Servers** and **4.5.6 Client Libraries**. 

The _better_ news is that the Client APIs for the new RelayComms is _almost completely_ compatible - that is, you don’t need to change your client code to use the new servers - other than:

- In C#-only, you need to adjust for the new `netId` parameter in the `RelayCallback()` method ← _note, this was a defect. The other languages already had that parameter in their callback method._
- If migrating a _Live_ application, you will need to substitute in the new lobby ids (see the _migration_ _procedure_ section below)

The _bad_ news is that our new **V2 Relay Servers are not compatible with our 4.5.5 and older client libraries** - so they only work with brainCloud 4.5.6 libs and greater. Conversely - the new 4.5.6 libs do not work with the legacy Relay Servers - so migrating your apps to the new Relay Servers (which we highly recommend) must be done carefully. We provide the details on how to do this without interruption in a section below.

![](images/2020-09-01_09-53-52.png)

_Note - The V1 RelayServers will continue to function for the foreseeable future (at least 1 year) - so you do not need to force a short-term upgrade to your app. It is highly recommended that apps upgrade when they get a chance however._

### Matchmaking Optimizations

This release also includes some serious optimizations to brainCloud's Online Matchmaking and Lobby System algorithms - resulting in:

- greater lobby queue scalability
- much faster best-case room/relay server launches

Note that these changes are completely under-the-hood - no API changes required.

### Miscellaneous Changes

The following changes are also included in this release:

- _Amazon Platform detection_ - has been added to all of the libs (except C++). Important - be sure to turn on the “Amazon” platform on the **Design | Core App Info | Platforms** page for your app. This is important even if you aren’t using Amazon IAP - otherwise, your Android app won’t launch on Amazon devices!
- _Ability to **clone** Lobby and Server types_ - has been added to facilitate easier migration to the new Relay Servers
- _Improved **WebPurify** integration_ - are servers are now properly encoding problematic text characters before sending them to WebPurify

* * *

## Procedure: Relay Server Migration

The following approach is recommended for migrating your app from **V1 Relay Servers → V2 Relay Servers**. 

This approach has been designed to:

- ensure the app is available to all players throughout the migration
- support the various app store review processes 
- keep the developer in control of the timelines of the migration.

### Approach

_Benefits: This approach allows users of your old client to continue to play using the V1 Relay Servers - even as your updated client goes through app store reviews, soft launch, etc. using the new V2 Relay Servers. And then, after your release has been deployed globally and across all platforms, you can “force” users to upgrade to unite all players together again._

The executive summary of the recommended approach is:

- Clone the **Lobby** and **Server** definitions of your app - producing a new set of **V2 Lobbies** and **V2 Servers** that will be used by the **updated version** of your app
    - Configure the **V2 Server** definitions to use **Relay Protocol v2**
    - Configure the **V2 Lobby** definitions to use the new **V2 Server** definitions
- Modify your Client App to use the new **V2 Lobby** definitions, as well as the appropriate **4.5.6 Client Library**
- Optionally (but recommended), ensure that your Client App reacts to the _Minimum Version_ setting from the **Design | Core App Info | Platform** page. This will allow you to “force” your users to upgrade to the new client when you are ready (see [Version Enforcement](https://getbraincloud.com/apidocs/launch-tip-1-version-enforcement/))

### Step-by-step

This section describes step-by-step how to modify your app to implement the recommended migration approach.

#### Design Portal

1. Go to **Design | Cloud Code | My Servers** - and clone the Relay Server entries to create new “V2” versions. A new **\[Clone Server\]** button has been added to assist with this. After cloning each entry, be sure to _Edit_ it, and change the _Relay Protocol_ to **v2**!
2. Go to **Design | Multiplayer | Lobbies** - and clone the Lobby entries to create new “V2” versions. A new **Clone** option has been added to the **Action** menu to assist with this. After cloning each entry, be sure to **Edit** it, and change it to refer to one of the _V2 Servers_ that you created in Step 1.

#### App Code

1. Replace your brainCloud library with a new **4.5.6+** version of the client library.
2. Go into your source code, and change the names of the **Lobbies** that your client app references to the new V2 version of the lobby type name.
3. **Rebuild** and **test** your client app to ensure everything works.
4. _(Optional - but highly recommended)_ If you haven’t already, enhance your app to pass the app version during the BrainCloudWrapper.Initialize() method, and display a “Client update required” dialog if it receives a 40322 - APP\_VERSION\_NOT\_SUPPORTED error from the server during authentication. This will allow you to force users to upgrade to the new client when you are ready. Note - the required app versions are controlled via the **Design | Core App Info | Platforms** page.

_For more information on implementing_ [_Version Enforcement_](https://getbraincloud.com/apidocs/launch-tip-1-version-enforcement/) _in brainCloud, see the article at the link._

#### App Submission & Migration

1. **Submit** the updated app (which uses the V2 Relay Servers) to the various app stores for approval. Existing users will continue to play using the V1 Relay Servers.
2. Officially **Release** your app. During this stage of launch, your player liquidity is _split_ - between the older and newer servers.
3. _(Optional - but highly recommended)_ Once you are ready (and are confident that the app updated has been distributed globally to all appstores), you can update the _minimum required versions_ on the **Design | Core App Info | Platforms** page to force users to upgrade, and re-unite your player base!

_And voila - you have successfully migrated your app to the V2 Relay Servers without interruption!_

* * *

## Portal Changes

We have made the following portal changes:

### **Design**

- **Cloud Code | My Servers**
    - Added new **\[Clone Server\]** button to make it easier to duplicate server configurations
- **Messaging | Chat**
    - The _Replace Profanity with_ setting now properly defaults to “\*”
- **Multiplayer | Lobbies**
    - Added a **Clone** option to the **Action** menu to make it easier to duplicate lobby configurations

* * *

## API Changes

Reminder - The 4.5.6 client libs only work with the V2 Relay Servers.   
  
_If your app is **live** and **using Relay Servers**, do not upgrade to the 4.5.6 Client Libraries until you are ready to **migrate** your app according to the procedure described in these release notes._

Although the Client libraries have changed significantly to support RelayComms V2, the APIs themselves have not.

There is just one fix to the C# libraries that affect a method signature:

- The `RelayCallback()` method signature has changed. It now includes a `netId` parameter.`public delegate void RelayCallback(short netId, byte[] data);`

* * *

## Miscellaneous Changes / Fixes

- Updated libraries
    - All libs have been updated to use RelayComms V2!
    - All libs (except C#) now include Amazon Platform detection. _**Important: If your app supports Android, and you want your Android apps to run on Amazon devices, remember to enable the Amazon platform on the Design | Core App Info | Platforms page!**_
- Documentation updates
    - The API Reference has been updated to include the updated C# RelayCallback
- Important Fixes
    - BCLD-6304 - Error sending certain chat messages with WebPurify support enabled
    - BCLD-6240 - Presence updates sometimes failing due to improper TTL setting
    - BCLD-6239 - Lobby matchmaking NPE
- Plus miscellaneous fixes and performance enhancements...
