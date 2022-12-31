---
title: "(Minor) Release 3.5.5"
date: "2017-07-05"
tags: 
  - "release-history"
---

This is a minor update - primarily to upgrade brainCloud's Facebook support to Graph API v2.4. _Of course we couldn't resist slipping a few extras in as well._

## Release Highlights

### Facebook 2.4 API Support

Facebook is forcing a [transition of all apps from Graph API v2.3 to v2.4 on July 10th](https://developers.facebook.com/blog/post/2017/06/12/transitioning-to-graphapi-v2.4/). The release updates all of brainCloud's services to the new Graph v2.4 minimum API level.

### Global Entity Import/Export Improvements

We've made exporting and importing of Global Entities even simpler! Now exports automatically include the entity indexed id (\_eid) in the exported data, and the system recognizes that field automatically during imports. This saves you from having to specifically select the field to index by during import, and allows for datasets where the indexed value is not duplicated in the custom data section.

### Leaderboard Entry Editing

You can now edit the _Score_ and _Extra Data_ fields of leaderboard entries. Useful for support, debugging and nerfing cheaters!

### Error Logs Display

We've made improvements to how log entries are displayed to make higher severity log entries pop more than lesser entries.

 

* * *

## Portal Changes

We've made the following portal changes:

**Design**

- **Cloud Code | API Explorer**
    - Now allows you to execute API calls and run scripts even if you have disabled your app (via the Design | Core App Info | Advanced Settings page)
    - Usage: Allows devs to temporarily disable their apps and run scripts for maintenance purposes
- **Cloud Code | Scripts**
    - Scripts can now be run even when the App has been disabled (see above)

**Monitoring**

- **Global Monitoring | Global Entities**
    - Export - now explicitely exports the entityIndexedId as \_eid
    - Import - now looks for \_eid field, and if found, automatically maps it to entityIndexedId for import
    - Editor - details page now shows the Created At and Updated At time+date fields for entities
- **Global Monitoring | Leaderboards**
    - Score - click on a player's score to edit it
    - Extra Data - click on the Extra Data "eye" to view and now optionally _edit_ the JSON-format data

- **Global Monitoring | Recent Errors**
    - Improved formating of log entries to ensure that higher severity items "pop" more
    - Removed the "total pages" pagination - the portal was sometimes timing out when iterating through all entries to perform the count (which isn't that necessary anyway)

 

* * *

## API Changes

There are no API changes in this release.

 

* * *

## Miscellaneous Changes / Fixes

- Updated libraries
    - _The libraries have not been updated specifically for 3.5.5._
- Documentation updates
    - n/a
- Important Fixes
    - Updated Facebook modules to use Facebook Graph API v2.4+
    - Improved logging of errors for Android, Windows and Steam purchases
    - Improved pre-condition checking before unnecessarily registering products with Facebook
    - Improved logging of "input too large" exceptions
- Plus miscellaneous fixes and performance enhancements...
