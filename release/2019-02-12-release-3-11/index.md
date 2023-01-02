---
title: "Release 3.11"
date: "2019-02-12"
tags: 
  - "release-history"
---

Release 3.11 provides some key feature requests with some under-the-hood improvements that will be delivered upon in Release 4.0 (coming soon!).

# Release Highlights

## SendGrid Dynamic Templates

We have updated our Mail APIs and integration code to work with Sendgrid's new Dynamic Template format, which includes support for [Handlebars](https://sendgrid.com/docs/ui/sending-email/using-handlebars/) syntax.

This means that you can:

- Use Dynamic Templates for brainCloud's Email Authentication and Tournament Notification 
- Use Dynamic Templates with brainCloud's `SendAdvancedEmail*()` APIs
- Take advantage of the Handlebars syntax (with substitution, conditions and iterations) in your templates
- Even send _attachments_!

And of course, Sendgrid's legacy templates still work.

_Please note - the substitution parameter format of SendGrid's API for new dynamic templates is different. So if you are using the SendAdvancedEmail\*() calls and are changing from legacy → dynamic templates, you'll need to modify the `serviceParams` JSON that is provided with the call._

## UniversalId Wildcard Searching

If your app supports looking up other users (for friends, challenges, etc), we highly recommend that you identify and lookup users by UniversalId instead of by user name.

UniversalIds are better than user name because:

- They guarantee uniqueness
- They are case insensitive
- Searching is 3 - 5 times faster! (because they are unique, case insensitive, and we anchor all searches at the beginning)

But... until now we really weren't providing you with enough search flexibility. Which is why we have added some new methods:

- `FindUserByUniversalIdStartingWith()` - use for wildcard-like searches
- `FindUserByExactUniversalId()` - use for exact searches

And remember, we do provide a handy method that allows your app to use UniversalId's (to identify/lookup users) without using them as authentication methods - check out `AttachNonLoginUniversalId()`.

A few notes:

- We have deprecated the old `FindUserByUniversalId()` - its spec was pretty misleading (looked like an exact search - but performed like a wildcard search - and an unoptimized one at that!). Note - it will still work if your app was already using it.
- For those of you stuck with already-implemented _user name searching_, we've added some improvements as well:
    - `FindUsersBySubstrName()` is now 10-20% faster 
    - `FindUsersByNameStartingWith()` (new!) is ~50% faster than `FindUsersBySubstrName()` - so switch to this one if you can!

## Improved Cloud Code Debugging

Good news for you cloud code developers - we've added some new smarts to the API Explorer and Cloud Code Editor that makes it a lot easier to trace and debug your scripts!

The two big additions are:

- _Activity Window Logs_ - log entries that your script creates are now visible in the activity window on the right-hand-side of the Cloud Code Editor and API Explorers
- _Debug Log-level_ \- we have also added a new debug log level that only prints to the Activity Window log. This is perfect for analyzing and debugging your scripts, without unnecessarily clogging up your logs otherwise.
- _New JSON context methods_\- we have also expanded to provided Logging APIs to provide new methods that allow you to log JSON contexts directly (without stringifying them first)
- _Bridge access_\- finally, we have added all these new logging methods directly to the `bridge`for maximum convenience!

Check out the GIF below to get a feeling for how the new script logging works.

![](images/debuglogs_custom.gif)

## Miscellaneous

Plus a few more shiny features, including:

- Lobby Event Optimizations - a bunch of the data in the Lobby RTT events was unnecessary - we've trimmed it down to be more efficient
- Faster user name lookups in the Design Portal
- View WebHooks calls in the Server Logs
- Filter the Server Logs
- Export a user's data from the User Summary page
- and more!

* * *

# Portal Changes

## Design

- **Cloud Code | API Explorer**
    - Activity pane now shows log messages
- **Cloud Code | Scripts | Script Editor**
    - Activity pane now shows log messages
- **Segmentation | Segments**
    - Page should load faster now

## Monitoring

- **Global Monitoring | Server Logs**
    - Incoming WebHooks calls are now captured here
    - Added ability to Filter the logs shown by _type_, _source_, _date_, etc.
- **User Monitoring | User Summary**
    - **Select User**\- _faster searching by user name!_ ← **Popular Customer Request!**
    - (beta!) **Debug data export** - new ability to export a user's data. Very useful for debugging!

* * *

# API Changes

## Client API

The following changes/additions have affected the client API:

- **Client**
    - `isRTTEnabled()` convenience method added to allow apps to check their RTT state
- **Entity**
    - `GetSharedEntityListForProfileId()`and `GetSharedEntitiesForProfileId()`now return `entityListCount` for convenience 
- **Friend**
    - New Universal ID searches: 
        - `FindUserByExactUniversalId()`
        - `FindUsersByUniversalIdStartingWith()`
    - New name search methods
        - `FindUsersByNameStartingWith()`
- **Group**
    - `ReadGroupMembers()` - now returns the profile picture URL (if present) for each member
- **Identity**
    - `SwitchToChildProfile()` and `SwitchToSingletonChildProfile()` cloud code methods have been simplified to align with the client versions of these calls. To clarify, the new methods no longer require you to pass in values for platform, language, etc - these values are all inherited from the current session.

## Cloud Code

- **Bridge**
    - Added logging calls to the bridge for convenience - `LogInfo()`, `LogInfoJson()`, `LogWarning()`, `LogWarningJson()`, `LogError()`and `LogErrorJson()`
    - Also added new debug log calls - `LogDebug()`and `LogDebugJson()`. _Note these calls are not available on the logging service itself, because they do write to the persistent logs._ 
    - Added new context calls - `getScriptName(),` `getAppName()`, and `getEnvironmentName()`.
- **HttpClient**
    - Added new `PostJsonOffboard()` call - for efficient posting of HTTP requests in scenarios where it isn't necessary to wait for the result
- **Logging**
    - Added new JSON-context calls - `LogInfoJson()`, `LogWarningJson()`, and `LogErrorJson()`

## RTT (Beta) Events

We have made some small changes to the Lobby events being returned - essentially just removing some redundant / unnecessary fields.

We largely removed:

- Nested and redundant id information (i.e. nested fields like `id`, `seq`, `appId`, etc.)
- `lobbyTypeDev`, `settings`, `connectData`and occasionally `members` fields from events that didn't require them 

_For full details on Lobby Event composition, check out the details [here](/api/capi/lobby)._

_Note - although RTT is still in beta, we don't take changes like this lightly. Rest assured, we have reached out to our live RTT customers separately to give them a heads up re: these changes._ 

* * *

# Miscellaneous Changes / Fixes

- Updated libraries
    - All client libraries have been updated for this release. Be sure to grab them!
    - We have added additional _killswitch_ code to prevent errant apps from endlessly spamming our servers on authentication failures. As a rule folks, retrying an operation in an endless loop is bad form! Do not do that! :) 
- Updated examples
    - Unity assets - we have recently updated [brainCloud Space Shooter](https://assetstore.unity.com/packages/templates/tutorials/braincloud-space-shooter-50279) and [brainCloud Bombers for Photon](https://assetstore.unity.com/packages/templates/tutorials/braincloud-bombers-for-photon-50657) on the Unity Asset Store
- Documentation updates
    - Improvements to content and accuracy of code examples
- Important Fixes
    - BCLD-4163 - Presence cloud code proxies missing some methods
    - BCLD-4989 - File storage being reported on API Usage page as 0.0 or NaN
    - BCLD-4139 - Import script issue
    - BCLD-4105 - Added missing `readUserStatsSubset()` cloud code method
    - BCLD-4112 - Portal not editing / saving Steam IAP products properly in some cases
    - BCLD-4160 - lobbyService.switchTeam() can result in an NPE
    - BCLD-4159 - Improve speed of Use Monitoring - Select User - Search by Name
    - BCLD-4147 - Unable to save rewards in tasks (milestones) embedded in Quests in some circumstances
    - BCLD-4148 - Deleting an embedded task (milestone) from a Quest results in an orphaned Milestone
    - BCLD-4108 - Global Entities should allow filtering and sorting on `entityId`, `version` and `expiresAt`
    - BCLD-4118 - When performing `SwitchToChildProfile()`, a login log entry is now added for the child profile
    - BCLD-3969 - `getRandomEntitiiesMatching()` sometimes returns 0 items for max 1, even when items match - fixed.
    - BCLD-3267 - `getChannelId()` should confirm that a channel exists before returning the constructed id
    - And many, many more!
- Plus miscellaneous fixes and performance improvements
