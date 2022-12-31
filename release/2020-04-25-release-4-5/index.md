---
title: "Release 4.5"
date: "2020-04-25"
tags: 
  - "release-history"
---

Big things are happening with brainCloud in 2020. Here's what you will find in 4.5.

The executive summary:

- Shared Cloud Code Scripts (beta)
- Global Files V3 API (beta)
- Custom Entities Official Release + Templates!
- Improved Room Server Support for Unity and Unreal!
- Facebook Graph API v3.2
- New (better!) Batch User Processing API
- **Updated UTC-based calls in Client Libs** _(see note immediately below)_
- and more!

Important

We recently became aware that some of our time-related calls were non-specific in terms of whether they were expecting UTC or local time-based parameters. Even worse, it turns out we implemented these inconsistently across our libraries!  
  
To address this situation we are deprecating the problematic calls and replacing them with a new set of "Clearly UTC" calls - along with adding some convenient time conversion calls to the client libs.  
  
The old calls will continue to work and behave as before (for 1 year), but we encourage all devs to move to the new calls. Apologies for the inconvenience!

* * *

## Release Highlights

### Shared Cloud Code Scripts (beta)

At long last, our initial version of _shared scripts_ is available for use! No more copy-and-pasting functions from script-to-script or loading them into custom properties! 

Starting in Release 4.5, to include another script, you simply use the new `bridge.include(“scriptname.ccjs”)` operation.

For example - say you have this script:

MathFunctions script

function sumNums( num1, num2 ) {
  return (num1 + num2);  
}

function prodNums( num1, num2 ) {
  return (num1 \* num2 );  
}

You can include it from another cloud code script very simply:

"use strict";

bridge.include("MathFunctions.ccjs");

function main() {
	var response = {};
	response.answer = sumNums(data.number1, data.number2);
	return response;
}

main();

The following rules apply:

- A script can import multiple scripts (of course!)
- The scripts must all be present within the app… (i.e. no including scripts from other apps)
- `bridge.include()` calls must come first in a script. The only lines allowed to be before bridge.include() are _blank lines_, `//` comments, and/or the `”use strict”;` directive
- The extension is ignored by the call - but we recommend you append `.ccjs` anyway ← this may be helpful in the future (we have plans!) 

Note - we consider this a beta release. The syntax is safe (feel free to use it!) - but there are a few more kinks to work out in future releases, namely:

- we don’t yet support arranging the scripts into sub-folders (coming soon!) 
- we haven’t yet determined the best way to adjust our cloud code pricing. This capability will change the way devs use our scripts - opening the door to larger, more powerful scripts. We will need to adjust our pricing to accommodate the changes to server resource utilization. _As always, anything we do will be cost-effective and elastic for our customers!_

### Global Files V3 API (beta)

We've got a new version of our Global Files API, with some significant improvements:

- Support for _Folders_
- Support for _Uploads_ (i.e. migrating uploaded User Files → Global Files)
- Full _File Management API_

Important notes:

- Uploading of files is accomplished by Uploading a User File, and then migrating it to V3 Global Files. Note that we also included a method for migrating to the legacy Global Files as well.
- The V3 API is a clean break from the older Global Files / S3 API - you can use either API (for now), but files are not shared between the two.
- The V3 API does not have Design Portal support yet - so, for now, you would need to use the APIs to upload files, create directories, etc.
- V3 Global Files are also not currently included in imports / exports and deploys.

Information

Portal support for Global Files V3 is planned for the near future - though _after_ we get portal support for Cloud Code folders.

### Custom Entities - Official Release + Templates!

Custom Entities are now fully live in brainCloud (**yay!**) - which unfortunately means that we will now begin charging for them **(boo!**). For pricing details, see our _[Deep Data Pricing](http://help.getbraincloud.com/en/articles/3967940-what-is-deep-data-usage)_ article.

Note - as part of this change, access to Custom Entities now requires a Plus plan. We needed to make this change due to the Custom Entity feature's ability to handle very large datasets (even in Development) - which could incur very large storage and backup costs. _Note that the $4.99 Development Plus plan does include support for Custom Entities._

As a refresher, _Custom Entities_ are our new, super-charged improvement to both _Global Entities_ and _User Entities_.

_Custom Entities_ offer:

- Custom Indexes for super-fast lookups
- Deployment support for easy migration of entities between Dev and Prod apps
- Owned vs. Un-Owned variations
- ACL support
- Time-to-live (TTL) support
- Import / Export Support
- Both Global and User Data Editors

And now - **JSON Templates**! You can now add a template for the data section of your type, along with a convenient field description. You can even use markdown! Super convenient when manually creating / editing entities!

### Misc Changes

But wait - there is more! Release 4.5 also includes the following:

- **Improved Unity and Unreal Room Server support** - Now with spiffy new S2S libraries. Check out the all-new docs for creating Room Servers using [Unity](http://help.getbraincloud.com/en/articles/3942761-custom-multiplayer-server-with-unity) and [Unreal](http://help.getbraincloud.com/en/articles/3808406-custom-multiplayer-server-with-unreal).
- **Facebook Graph API upgrade** - we have updated our backend to utilize Facebook **Graph API v 3.2**
- **Batch Improvements** - we have added a new Batch User Processing call that allows you to specify a script to run once all of the specified users have been processed.
- **RTT Optimizations** - Improved Event and Disconnect handling
- **Deep Data billing** - usage billing for advanced data usage. Details in [this](http://help.getbraincloud.com/en/articles/3967940-what-is-deep-data-usage) article.

* * *

## Portal Changes

Information

Note - we have updated the way the **Design Portal** handles timezones. If you find weirdness in how the portal is displaying times for you, click on the _switcher menu_ in the _top-right corner_, choose **Edit Profile**, and go to the **Settings Tab** to set your Timezone (Region).

We've made the following portal changes:

### Design

- **Core App Info | Application IDs**
    - Removed the _\[x\] Enable Facebook Scores_ setting from the Facebook Platform options. Facebook's APIs no longer support this functionality.
- **Cloud Data | Custom Entities**
    - Added the ability to define (and describe) custom JSON templates for entity data.
    - Important: A _Plus Plan_ is now required to access this screen.
- **Gamification | Achievements**
    - Removed the \[Facebook Register Achievements\] button from the main screen, as well as the Facebook specifics from the sub-screens. Facebook’s APIs no longer support this functionality.

### Monitoring

- **Global Monitoring | Custom Entities**
    - Updated the Create and Edit entity screens to support the new JSON templates.
    - Important: A _Plus Plan_ is now required to access this screen.
- **User Monitoring | Custom Entities**
    - Updated the Create and Edit entity screens to support the new JSON templates.
    - Important: A _Plus Plan_ is now required to access this screen**.**

### Reporting

- **Analytics**
    - Split out and corrected the _Total Users_ vs. _Total Dormant Users_ stats.
- **API Usage**
    - Added a new _Deep Data Usage_ section.

### General

- **Login / Registration**
    - The Registration page is now more mobile-friendly.
- **Personal Preferences**
    - Timezones are now specified via a region/city - hopefully no more issues when Daylight Savings Time changes!
- **Portal Version**
    - We are now prefacing our Master Release versions with “R”. 

* * *

## API Changes

As mentioned in the executive summary, we found inconsistencies in the client-implementation of some of our time-based calls.

The following methods have thus been deprecated in the 4.5 libraries:

- **Leaderboard**
    - `PostScoreToDynamicGroupLeaderboard()` - deprecated in favor of `PostScoreToDynamicGroupLeaderboardUTC()`
    - `PostScoreToDynamicLeaderboard()` - deprecated in favor of `PostScoreToDynamicLeaderboardUTC()`
    - `PostScoreToDynamicLeaderboardDays()` - deprecated in favor of `PostScoreToDynamicLeaderboardDaysUTC()`
- **Tournament**
    - `PostTournamentScore()` - deprecated in favor of `PostTournamentScoreUTC()`.
    - `PostTournamentScoreWithResults()` - deprecated in favor of `PostTournamentScoreWithResultsUTC()`
- **Script**
    - `ScheduleRunScriptUTC()` - deprecated in favor of `ScheduleRunScriptMillisUTC()`

In addition, the following new methods have been added to brainCloud API:

- **Bridge**
    - There is a new `GetAppVersion()` call in the bridge to retrieve the version of your app (as provided by your app to the client library). Handy!
- **GlobalFile (New V3!)**
    - Client APIs - `GetFileInfo()`, `GetFileInfoSimple()`, `GetGlobalCDNUrl()`, `GetGlobalFileList()`, 
    - The following methods are available from cloud-code only:
        - File retrieval - `SysGetGlobalCDNUrl()`, `SysGetGlobalFileList()`, `SysGetFileInfo()`, `SysGetFileInfoSimple()`
        - File management - `SysCopyGlobalFile()`, `SysDeleteGlobalFile()`, `SysDeleteGlobalFiles()`, `SysMoveGlobalFile()`
        - Folder management - `SysCreateFolder()`, `SysDeleteFolder()`, `SysLookupFolder()`, `SysMoveFolder()`, `SysRenameFolder()`
    - Special mention - the `SysMoveToGlobalFile()` method can be used to copy/move a UserFile to a GlobalFileV3 file.
- **S3 Handling**
    - We’ve added `SysMoveToLegacyGlobalFile()` to support moving a User File to the Legacy Global File system.
- **Script**
    - There are 3 new S2S APIs for running batch scripts on users with a _completion script_ at the end:
        - `RunBatchUserScriptAndCompletionScript()` targets all users
        - `RunBatchUserScriptForProfilesAndCompletionScript()` targets specific users (specified via `profileId`)
        - `RunBatchUserScriptForSegmentsAndCompletionScript()` targets the users in specific segments.

* * *

## Miscellaneous Changes / Fixes

- Updated Client Libraries
    - All supported libraries have been updated with the latest API enhancements. Go get 'em!
    - Important Client Library Fixes
        - BCLD-5686 - Automatically remove the trailing "/" if set by the client in serverURL
        - BCLD-5718 - UTC fixes for all libs
        - BCLD-5772 - Change the comms packet timeouts from 15,10,10 to 15, 20, 35, 50
- New S2S Libraries
    - New [C#/Unity](https://github.com/getbraincloud/brainclouds2s-csharp) and [Unreal](https://github.com/getbraincloud/brainclouds2s-unreal) S2S Libraries
- Documentation updates
    - All new 4.5 APIs added to API Ref
    - New Knowledgebase Articles:
        - [Custom Multiplayer Server with Unity](http://help.getbraincloud.com/en/articles/3942761-custom-multiplayer-server-with-unity)
        - [Custom Multiplayer Server with Unreal](http://help.getbraincloud.com/en/articles/3808406-custom-multiplayer-server-with-unreal)
        - [Custom Entities](http://help.getbraincloud.com/en/articles/3754150-custom-entity-a-scalable-and-flexible-app-data-storage-and-querying-solution)
- Important Server Fixes
    - BCLD-5749 - Special characters in email or universal ID addresses were not being encoded correctly during URL creation
    - BCLD-5748 - Both “identifier” and index keys (keysJson keys) need to allow period (.) in the Custom Entity configs
    - BCLD-5787 - 'Reference Price' displayed in the Transaction screen is incorrect
    - BCLD-5743 - Update APIServer containers to Tomcat 8.5.51 to fix Ghostcat vulnerability
    - BCLD-5620 - Add cloud code support for various PushNotificationService methods
    - BCLD-5779 - Remove double logging of tournament service errors
    - BCLD-5763 - Optimized RTT Event Handling
- Plus miscellaneous fixes and performance enhancements...
