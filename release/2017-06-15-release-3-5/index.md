---
title: "Release 3.5.0"
date: "2017-06-15"
tags: 
  - "release-history"
---

# Release Highlights

### Logging Overhaul!

We are revamping our logging facilities. We are not quite complete, but we have some great improvements to share - we hope you like them!

- **\[Improved!\]** **Recent Errors** page - we have totally reworked our error log to improve its usability. We've removed unnecessary info and condensed the important details on the list screen, leaving more room for the error message itself. And we have a new combined _Details_ screen replaces the separate _Context_ and _Stack_ details screens from the old log.
- **\[New!\]** **Error Analytics** page - a quick one-page summary of the errors your app is encountering, with one-click access to a filtered view of the error log with just those errors highlighted. Go to **Reporting | Error Analytics** to view.
- **\[New!\]** **Unreadable Requests** log - a new log for messages that brainCloud was unable to process due to JSON-formatting errors. These errors occur if large multi-packet requests timeout, or if there are errors in constructing the message in the client app. Go to **Global Monitoring | Unrecognized Requests** to view.
- **\[New!\]** **Audit Log** \[beta\] - brainCloud now tracks and logs the changes to your app's metadata - what was changes, and by whom. Note that this facility is currently in beta \[we are still completing the instrumentation of some operations\].  Go to **Team | Audit Log** to view.

Plus we've greatly expanded the size of the shared log storage, so more history will be available before the logs rotate away!

 

### Entity Editor Enhancements!

We have also continued improving our Entity Editors - specifically the Global Entity Editor and User Entity Editor. The improvements for this release include:

- _**Filter / Search View**_ - filter the entity view using our JSON query syntax. Makes it easy to search across thousands of entities to find the one that you are looking for. To start filtering, first choose an entity type, and then click the new **\[Refine\]** button that appears. Click [here](/apidocs/apiref/#appendix-mongodbwherequeries) for details on the filter syntax.
- _**Bulk Export**_ - you can now export both Global Entities and User Entities to JSON files. Note that the file formats between the two are somewhat different:
    - **_User Entity Export (raw)_** \- limited to the User Entities of a single user. The system serializes _all_ the data of the user entities - not just the custom data payload of the entities themselves. This output format is mostly intended for debugging purposes.
    - **_Global Entity Export (simplified)_** - the Global Entity export format focuses on exporting the payload portion of the global entities only. This format matches up with the import format - and allows for easy round-trip editing of Global Entities in an external tool.
- _**Bulk Import \[Global Entities only\]**_ - you can now more easily import your Global Entities. We now accept a more robust JSON format, that allows for multiple entity types to be included in the same import file.
    - and export Global Entities. The JSON used has been "simplified" for easy compatibility with external tools - like Google Sheets!
- _**Bulk Delete \[Global Entities only\]**_ - need to quickly clear out all entities of a type? Just filter by the entity type, and then choose the **Delete** option from the **\[Bulk Actions\]** menu.
- _**Data Helpers**_ - when editing filters and/or entity contents, the brainCloud enter will attempt to help you complete the names of fields (based on the contents of other entities of the same type).

 

### High Priority Google Push!

Google has recently added support for specifying the priority of push notifications. Under the new system, regular priority messages won't be delivered or displayed on a sleeping device - so for certain types of apps, it is essential to use their new High Priority notifications feature.

brainCloud now supports FCM, Google's next-generation push service, in addition to the older GCM service we have always supported.  FCM gives us access to the new Priority messaging feature, and any future features that Google adds.

In addition, we have created a new _Raw Push Notifications API._ This API gives the developer full access to the notifications payload that is sent to the platform push services. Think of it as DirectX for Push Notifications.

_For more information, see the Push Notifications section on API Changes._

 

### Important Note - Auto Deletion of Playback Streams

- _As of Release 3.5, brainCloud will take steps to ensure that old playback streams are automatically deleted._
- It was previously the responsibility of the app developer to do so - but there are significant limitations to that approach - so we have built a new system to help
- From 3.5 onwards, playback streams will automatically be deleted after 30 days. App developers are still free to delete them earlier if they would like
- To ensure minimal impact to existing apps, brainCloud will initially start deleting streams older than 180 days. We will reduce the expiry by 30 days each week until
- We don't envision this being an issue for any of our existing apps - but if it is, please reach out to us!

 

* * *

## Portal Changes

We continue to iterate upon and improve the Design Portal and the tools that it provides. This update brings:

### Overall

- Improved table presentation - alternating row shading for greater visibility
- Some changes to the menu icons used throughout the portal
- Added a **Team Info & Billing** option to the Quick menu

 

### Team Section

- **\[New!\] Audit Log**
    - The new audit log tracks changes to your apps

 

### Design Section

- **Core App Info**
    - **Advanced Settings - Compatibility Options**
        - \[New\] _Include redundant legacy app Ids in some API results_ flag. See API section for more details.
        - \[New\] _Use legacy GCM for Google Push Notifications -_ enable this if for some reason you want to stay using Google's GCM, instead of the new FCM service for push notifications.
- **Authentication**
    - **Email Authentication**
        - brainCloud now supports sending Password Reset Emails even if you haven't linked in a SendGrid account. This screen has been updated to allow editing of the text of the message that will be sent.
- **Cloud Code**
    - **API Explorer**
        - **Improved Authenticate** \- Authenticate operation has been enhanced to automatically choose a supported releasePlatform and sufficient appVersion for successful login (these can still be over-ridden).
        - **Keyboard Shortcut -** Press **Ctrl+Enter** to run the selected API when you have completed editing the parameters.
        - **Jump to User** - Click on the _Profile Id_ on the page to jump to that user's profile in User Monitoring.
    - **Scripts Editor**
        - **Keyboard Shortcut** - press **Ctrl+S** (Windows) or **⌘-S** (Mac) to quickly save your script
        - **Previous Versions** - now shows the data and time that previous versions of the script were saved
        - **Improved Authenticate** - the Quick Authenticate button will now automatically select an appropriate platform and app version to ensure a successful login
    - **API Hooks**
        - **Authentication Post-Hook** - By popular request, you can now attach a cloud code script to successful Authentication requests!
- **Integrations**
    - **Manage Integrations**
        - We have removed the Parse Integration section since Parse is no more.
- **Multiplayer**
    - **Matchmaking**
        - **Concurrent Attacks** - There is a new option to allow players to _be_ attacked by multiple players concurrently - requested by the most heartless designers! :)

 

### Monitoring Section

- **Global Monitoring**
    - **Global Entities**
        - **Advanced Filtering** - use JSON to specify complex queries for filtering your objects. Syntax details [here](/apidocs/apiref/#appendix-mongodbwherequeries).
        - **Improved Import process** - supports more generic JSON formats, including formats with multiple entityTypes in the same JSON file. Note - still compatible with the Parse import format.
        - **Bulk Actions** - new actions for operating on all of your entities, or all entities of a particular type
            - Delete - delete all entities of the specified type. Note that you
            - Export - export all entities of the specified scope. The export format is simplified to match the import format, and more easily work with external tools.
        - **Owner Field** - we've added the Owner field to the list object, so that system objects (which aren't owned by an individual user) are easier to identify
    - **Recent Errors**
        - **New Look-and-Feel** - we've totally revamped the errors screen for greater usability
        - **Simplified Error Types** - you now just choose between Errors, Warnings and Info messages to view.
        - **Quick Filters** - We've added Filter options to the Action menu on each log entry. Quickly choose to filter the log to see similar errors (i.e. errors involving the same API call) or relating to the same user.
        - **More Sources** - we are also now showing you messages from more sources. Errors and warning from Client API calls are displayed with a smartphone idon, while errors from the API Explorer show a Compass icon, etc. Hover over any of the source icons for the text name of the error source.
        - **Error Details** - we have a simpler, more informative Error Details screen - complete with a \[Copy All\] button conveniently captures the error details (including message, context and stack) into a pretty-printed JSON snippet.
    - **\[NEW!\] Unreadable Requests**
        - **Purpose** - Sometimes brainCloud is process a request sent to it. This is normally because the request is:
            - _Incomplete_ - we didn't receive the full request. This can happen with larger multi-part messages on the internet.
            - _Badly formed_ - the request is complete, but our servers cannot parse it as proper JSON.
            - _Bad signature_ - the message signature does not match the message content. This indicates that the message may have been tampered with.
        - **Utility** - Gathering these messages in their own log makes it easier to diagnose what is causing these errors - and hopefully more quickly address the problem.

- **User Monitoring**
    - **User Entities**
        - **Advanced Filtering** - use JSON to specify complex queries for filtering your objects. Syntax details [here](/apidocs/apiref/#appendix-mongodbwherequeries).
        - **Export** - export the user entities with full details. Intended for use by developers in debugging.

 

### Reporting

- **API Usage**
    - **Unreadable requests** - a count of the unreadable requests received by your app. For details, go to the **Global Monitoring | Unreadable Requests** page
    - **Unprocessed requests** - requests that were otherwise valid, but were not processed because they failed a pre-condition check (i.e. session not valid, etc.)
- **\[New!\] API Errors**
    - **Purpose** - shows a summary listing of the errors that your app is encountering, by API call.
    - **Error Details** - to get more details on the errors reported, click on the Call Name portion of the entry. You will jump to the Recent Errors page, with the log automatically filtered to the service + operation of the selected call

 

* * *

## API Changes

 

### New API Calls

- **Authenticate**
    - **\[New!\] Authentication Post-Hook!**  You can now attach a cloud code script to be run upon successful authentication.  Especially useful for initializing a user's account upon initial registration. _Pro-tip: Check for "newUser": true in the authentication response._ 
- **Bridge**
    - **\[New!\] [getCurrentTimeZoneOffset()](/apidocs/apiref/?objective_c#cc-bridge-getcurrenttimezoneoffset)** - useful for cloud code scripts that need to do local time calculations. Note that this method is only available via cloud code, and must be called from the Bridge Utility object (i.e. bridge.utils().getCurrentTimeZoneOffset("America/Montreal") )
- **Client**
    - **\[New!\] RestoreRecentSession[()](/apidocs/apiref/?objective_c#capi-client-restorerecentsession)** - allows the client app to attempt to restore a saved session. Useful if you think the app may have only been temporarily unloaded, and want to try to avoid doing a whole new authentication. Note that we will be more directly supporting this via the Wrapper in brainCloud 3.6 - so you may want to wait for that version of the feature. **_Update: We have discovered an implementation issue with this feature, and are thus pulling it from this release. It will be replaced with a proper version via our Wrapper in brainCloud 3.6._** 
- **Global Entity**
    - **\[New!\] [DeleteSystemEntity()](/apidocs/apiref/?cloudcode#capi-globalentity) method** -  allows for easy deletion of system entities (i.e. global entities without owners). Note that for security reasons this API method is available from cloud-code only.
- **Mail**
    - **\[New!\] [SendAdvancedEmailByAddress()](/apidocs/apiref/?cloudcode#capi-mail-sendadvancedemailbyaddress)** - sends a message to the specified email address. Convenient for when your app needs to send a message to someone that is not already a user of your app (i.e. app invites, etc).

- **Push Notifications**
    - **\[New!\] Google FCM-based Push Notifications.**
        - brainCloud now supports FCM, Google's next-generation push service. New Android push features, like push priority, are only supported via the new FCM service. The good news is that except for the new features, the two services are fully compatible. All new applications will use FCM by default. To enable FCM for a pre-existing app, be sure to uncheck the _\[x\] Use legacy GCM for Google Push Notifications_ option under **Design | Core App Info | Advanced Settings**.
    - **\[New!\] Raw Notifications**
        - brainCloud now supports what we are calling raw notifications - where you can specify the exact notification payload to be sent to the various notification providers that we support.
        - The following methods have been added to S2S Push Service - SendRawBatch(), SendRawToGroup(), SendRawToSegment(), and ScheduleRawNotifications()
        - The following methods have been added to the Client API - [SendRawPushNotification()](/apidocs/apiref/?csharp#capi-push-sendrawpushnotification), [SendRawPushNotificationBatch()](/apidocs/apiref/?csharp#capi-push-sendrawpushnotificationbatch), and [SendRawPushNotificationToGroup()](/apidocs/apiref/?csharp#capi-push-sendrawpushnotificationtogroup).
    - **\[New!\] Schedule Push Notifications from Client API**
        - Previously you had to write a custom cloud code script (or use our S2S API directly) to schedule push notifications
        - The following new methods are available from the Client API - [ScheduleNormalizedPushNotificationUTC](/apidocs/apiref/?cloudcode#capi-push-schedulenormalizedpushnotificationutc), [ScheduleRawPushNotificationUTC](/apidocs/apiref/?cloudcode#capi-push-schedulerawpushnotificationutc), [ScheduleRichPushNotificationUTC](/apidocs/apiref/?cloudcode#capi-push-schedulerawpushnotificationutc), [ScheduleNormalizedPushNotificationMinutes](/apidocs/apiref/?cloudcode#capi-push-schedulenormalizedpushnotificationminutes), [ScheduleRawPushNotificationMinutes](/apidocs/apiref/?cloudcode#capi-push-schedulerawpushnotificationminutes), [ScheduleRichPushNotificationMinutes](/apidocs/apiref/?cloudcode#capi-push-schedulerichpushnotificationminutes)

 

### Updated API Calls

- **Currency**
    - We have returned the client-side currency management calls - AwardCurrency(), ConsumeCurrency(), ResetCurrency() - to the client libraries!
    - Background - as you may or may not recall, we had recently introduced the ability to restrict the Currency Management APIs, so that they can only be called server-side (via cloud code)
    - We recommend that all new apps adapt this approach going forward. Whether client-based currency management calls are allowed is controlled via a compatibility flag
    - As part of this work, we had also mistakenly marked the APIs as deprecated. Which of course caused them to be removed 90 days later - as part of 3.4!
    - That was an error. This strategy is completely voluntary - so as of 3.5 the API methods are back. \[Our recommendations remain the same though!\]
- **Global Entity**
    - ReadEntity() - we have made minor changes to the JSON data returned. We are no longer returning the redundant appId field in the response. Note that you can undo this change using the _\[x\] Include redundant legacy app Ids in some API results_ compatibility flag. This flag is by default enabled for existing apps.
- **Playback Stream**
    - **\[New!\] [GetRecentStreamsForInitiatingPlayer()](/apidocs/apiref/?cloudcode#capi-playback-getrecentstreamsforinitiatingplayer), [GetRecentStreamsForTargetPlayer()](/apidocs/apiref/?cloudcode#capi-playback-getrecentstreamsfortargetplayer)**  - get a recent stream for initiating or targeted player of a multiplayer action, and can set a max limit of the stream to query.  These calls allow you to specify the maximum number of streams to return, and ensure that the caller is one of the participants of the stream.
    - **Auto Deletion** - As of Release 3.5, apps will no longer be required to delete old playback streams. The system will automatically delete playback streams that are older than 30 days. Note that we will be phasing in this new deletion service -  the system will start auto-deleting streams older than 180 days, and we will gradually bring the expiry age down over the next few months. _ _**If you think this will adversely affect your app, please reach out to us ASAP!**__
- **Miscellaneous**
    - **Facebook profile pic URLs** - brainCloud will now default to returning the base Facebook profile pic URL (i.e. looks something like "https://graph.facebook.com/{facebookId}/picture", instead of the redirected CDN-version of the URL that we had been returning. Why? Because it turns out those CDN URLs can eventually expire - d'oh!  Note - using the new URL requires your client to be able to handle http redirection - if you can't, check the _\[x\] Funnel Custom and User File retrieval through app servers (slower)_ compatibility flag on the **Design | Core App Info | Compatibility Settings** page

 

### Terminology Alignment

We have cleaned up game specific terms around our general API calls.

- _Purpose_: We are reserving gaming terms (like game and player, for the game-specific APIs - and using more general terms - user, app and profile - for the more neutral APIs). This helps brainCloud to be understandable to multiple audiences, which still highlighting gaming features.
- _Approach_: Calls using old terms have been marked as deprecated in the updated client libraries. Each call has a simple equivalent - switching is easy. The older libraries still work - so all your apps remain compatible. Please switch to the new calls at your earliest convenience.
- Unreal blueprints and response reason codes with old terms have been duplicated
- Finally, the textual portion of some error messages have been adjusted accordingly. All reason code values are the same - - though where appropriate, we have provided duplicate, more appropriately named constants to identify them.

Here is a listing of the methods that have changed:

- **Friend Service**
    - FindPlayerByUniversalId() -> FindUserByUniversalId()
- **\[User\] Entity Service**
    - GetSharedEntityForPlayerId() - > GetSharedEntityForProfileId()
    - GetSharedEntitiesForPlayerId() -> GetSharedEntitiesForProfileId()
    - GetSharedEntitiesListForPlayerId() -> GetSharedEntitiesListForProfileId()
- **Player State**
    - DeletePlayer() -> DeleteUser()
    - ReadPlayerState() -> ReadUserState()
    - ResetPlayer() -> ResetUser()
    - UpdatePlayerName() -> UpdateUserName()
    - UpdatePlayerPictureUrl() - > UpdateUserPictureUrl()
- **Player \[User\] Statistics**
    - IncrementPlayerStats() -> IncrementUserStats()
    - ReadAllPlayerStats() -> ReadAllUserStats()
    - ReadPlayerStatsSubset() -> ReadUserStatsSubset()
    - ReadPlayerStatsForCategory() -> ReadUserStatsForCategory()
    - ResetAllPlayerStats() -> ResetAllUserStats()
- **Player Statistics Event**
    - TriggerPlayerStatisticsEvent() -> TriggerUserStatsEvent()
    - TriggerPlayerStatisticsEvents() -> TriggerUserStatsEvents()

 

 

* * *

## Miscellaneous Changes / Fixes

- Updated libraries
    - All libraries have been updated with the latest API enhancements. Go get 'em!
- Documentation updates
    - Updated documentation of mail service
    - Improved API doc examples
- Plus miscellaneous fixes and performance enhancements...
