---
title: "Release 3.4.0"
date: "2017-04-06"
tags: 
  - "release-history"
---

This is a small release that focuses on some common customer requests. There is hopefully something for everyone!

## Release Highlights

### \[Enhanced\] Global Entity Editor

We have _finally_ upgraded our **Global Entity Editor** to allow you to _directly_ create entities (i.e. without reverting to code or the API Explorer).

It works as you would expect - just click on the **\[+\]** button on the **Global Monitoring | Global Entities** page, and fill out the form to create your object.

For quick object created - try clicking the **\[ { Retrieve Example } \]** button. This will prefill the custom data section of the object with JSON retrieved from a similarly typed entity.

 

### Tournament fixes and enhancements

First of all, we have fixed some issues that could occur when importing or applying _rotation changes to tournaments that are already in progress_. As part of this, we have made some adjustments to the

As part of this, we have made some adjustments to the **Phases** page of the **Leaderboard Config** dialog - making it a lot clearer as to whether your changes will affect the currently active tournament cycle, or will only take effect for the next tournament cycle.

Finally, now that that is all straightened away - we have re-enabled support for _Monthly_ and _Yearly_ tournament cycles.

 

### Cloud Code Security Fix

In 3.2 we refactored script permissions to allow more precision in controlling whether a script is callable via the Client API, the Server-to-Server API, or from a Peer Service.

It turns out that a defect was introduced during that change that in some cases would allow a script to be called from the Client API, even if it didn't have the appropriate permission.

This defect has been addressed.

 

* * *

## Portal Changes

We have made the following improvements to the Portal:

**Design**

- **Integrations | Manage Integrations**
    - Removed _Parse Integration_ since Parse no longer exists. You can still import Parse data exports via the **Global Monitoring | Global Entities** screen though.
- **Leaderboard | Leaderboard Configs**
    - Monthly and Yearly rotation types available for tournaments again
    - The **Phases** tab now defaults to show how the phase changes affect the _next_ tournament cycle
    - To change the currently active tournament, choose _"Active Cycle"_ from the combo-box, and then click the red **\[Apply to Live Tournament! (Danger)!\]** button.

**Monitoring**

- **Global Monitoring | Global Entities**
    - Revised the Global Entities list screen to be more useful
        - Create entities by clicking on the \[+\] button
        - Quickly duplicate entities by choosing _Clone_ from the new _Action_ menu
        - Click on an entity _owner_ to jump to that user in User Monitoring
    - Enhanced Global Entity Editor dialog
        - Quickly choose an entity type from a list of used types
        - Retrieve example JSON by clicking on the **\[ { Retrieve Example } \]** button

 

* * *

## API Changes / Fixes

The following changes/additions have affected the brainCloud API:

- **Async Match**
    - \[Fixed\] [FindMatches()](/apidocs/apiref/?csharp#capi-asyncmatch-findmatches) and [ReadMatch()](/apidocs/apiref/?csharp#capi-asyncmatch-readmatch) APIs now return the user's latest profile pic URLs instead of the pic that was captured at the time the match was created.
- **Authentication**
    - \[Fixed\] [ResetEmailPassword()](/apidocs/apiref/#capi-auth-resetemailpassword) in the JavaScript and AS3 libraries no longer require an authenticated session to work. D'uh!
- **General**
    - APIs that can return rewards-related results (i.e. Authentication, GetPlayerState, IncrementXP, etc.) are no longer returning a redundant XP `reward` section. _Note - a new compatibility flag has been introduced to preserve the old functionality. The flag, **\[x\] Send obsolete reward field content in XP level up rewards results**, defaults to enabled for existing apps._

 

* * *

## Miscellaneous Changes / Fixes

- Important Fixes
    - See the _Cloud Code Security Fix_ description in _Release Highlights_
    - Now deleting _canceled_ cloud code jobs properly (and automatically!)
    - Improved reliability for the **\[Login as User\]** button on the **User Monitoring | User Summary** page
- Updated libraries
    - The AS3 and Flash libraries have been updated to incorporate the ResetEmailPassword() fix.
    - Otherwise, the client libraries have not been affected by this release.
- Plus miscellaneous fixes and performance enhancements
