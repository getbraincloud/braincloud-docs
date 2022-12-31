---
title: "Release 2.4.0"
date: "2015-02-13"
tags: 
  - "release-history"
---

Just in time for Valentine's Day - brainCloud 2.4!

In this release, we've greatly improved our Cloud Code system.  We've expanded upon what can be done, and improved our documentation on how to do it.  That said, Cloud Code is a big area, and it's difficult to anticipate every possible usage of the system.  If you have questions, just hit the green Chat button and we'll help!

### Highlights

- **New Cloud Code Features!** We've greatly expanded our Cloud Code feature set.
    - **API Hooks** - cloud code scripts can now be configured to run automatically before or after (pre or post) core API methods
    - **New Security** - cloud code scripts must now be specifically enabled to be callable from the client - ensures that your most sensitive scripts are only invokable server-side (note - existing scripts default to client-callable)
    - **Server-to-server (S2S) Scripts**  - our new S2S feature allows you to call your scripts from custom servers and tools.  Unlike client callable scripts, S2S scripts don't require the context of an end-user session to run.
    - **S2S Server configuration** - to safeguard S2S scripts you must declare the servers that they will be called from.  Each server has it's own secret, and you can even specify a set of ip ranges that will be used to validate requests.  The new **S2S Config** screen can be found in **Design | Core Game Info | S2S Config**.
    - **S2S Explorer** - Of course, you need to be able to test your S2S scripts - so we've added a new S2S Explorer for just that purpose.  You'll find it at **Design | Cloud Code | S2S Explorer**.
    - **Updated Clode Code documentation** - cloud-callable APIs are now documented in the reference in the "CC" (i.e. "Cloud Code") tabs of methods. We've also got more information on how scripts and the service bridges work.
- **Updated Javascript Library.**  We've updated our Javascript library - you'll find it on the **Client Libs** download page.
- **Updated C++ for Android Library.**  Includes all the functionality present in the iOS C++ library. We've also upgraded our Cocos2d-x example project and tutorial to use it.  You'll find the library in the Client Libs download page.

\[caption id="attachment\_798" align="alignnone" width="536"\][![brainCloud S2S API](images/brainCloud-S2S-API.png)](/apidocs/wp-content/uploads/2015/02/brainCloud-S2S-API.png) brainCloud S2S API\[/caption\]

 

### Portal Changes

- **(New) Ability to edit player \[user\] entities -** now not only can you view player entities, you can actually edit them straight from the portal and save the updates.  Great for debugging and user support.
- **(New) Ability to edit global entities -** like player entities, you can now edit and save global entities.  Note - we plan to further add the ability to create global entities from the editor in the future (think by end-of-March).
- **(New) Newly added players screen** - super handy during development and testing - you'll see it when you first select **Player Monitoring**.  We'll be further adding new player search features in the next release.
- **(New) User Platforms** - The **Player Summary** screen now shows what platforms a user has logged in from.

\[caption id="attachment\_795" align="alignnone" width="474"\]![Window](images/Window-1024x621.png) Newly added players screen\[/caption\]

 

### API Changes

- **Javascript library** now available for download
- **C++ for Android library** now available for download
- **AuthenticateFacebook** added to the brainCloud Wrapper class for Unity/C#
- New client-callable permission is configurable for cloud scripts.  By default (for best security), all new cloud scripts will have client-callable set to false.

 

### Misc Fixes

- **Recent Logs** screen now only selects **Sys Error** and **App Error** filters by default - **App Warning** and **App Info** messages are by default suppressed
- **Server version** has been added to the detailed Stack Info page of **Recent Logs**.  Helps to diagnose if an error might be related to a specific release of the software.
- **Cloud Code APIs** have now been documented
- Supported **Localization** languages has been expanded to 32 - go to **Design | Core Game Info | Localization** for the full list.
- All client libs (except Android) are now capturing region, timezone and language during authentication (useful for segments)
