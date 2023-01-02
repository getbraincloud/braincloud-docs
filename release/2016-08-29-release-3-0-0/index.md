---
title: "Release 3.0.0"
date: "2016-08-29"
tags: 
  - "release-history"
---

## Release Highlights

[![New Portal UI](images/ABNR_BCNewDesign_05.gif)](images/ABNR_BCNewDesign_05.gif)

### New Portal UI

By far, the biggest change in this release is our updated navigation and look-and-feel for the brainCloud Design Portal. The four biggest changes are:

- **Modern Look-and-feel** - a flatter, more contemporary look
- **Simpler Navigation** - we have revamped our top-level navigation to make it simpler
- **Docs Menu** - one-click access to our documentation, from any screen
- **Quick Menu** - quick access to the most-used portal screens

And we're not finished yet. There will be more improvements coming in future releases - we hope you like what you see!

 

### Enhanced Queries

We have significantly expanded upon the query syntax supported by the entity lookup routines.

So now you can do queries like:

_"Give me all Book GlobalEnties that are either:_

- _written by Isaac Asimov or Timothy Zahn, or..._
- _are of category Science Fiction, have "robot" in the title, **and** cost less than $5.00"_

{
	"entityType": "book",
	"$or": [
		{"data.author": {"$in": ["Isaac Asimov", "Timothy Zahn"]}},
		{"$and": [
			{"data.category" : "Science Fiction"},
			{"data.title": { "$regex": "robot", "$options": "i"}},
			{"data.price": { "$lte": 500}}
            	]}
	]
}

More information on our query syntax [here](/api/appendix/mongodbwherequeries).

 

### Miscellaneous API Enhancements

We've implemented a bunch of customer-requested API enhancements - check the API Changes section to see if your favorite request made the list!

 

* * *

## Portal Changes

Although the overall look and top-level naviation of the Portal has changed significantly, the great majority of features are right where you left them. There is nothing new to learn!

- **Portal Navigation**
    - We've replaced the old **[Design | Monitor | Reporting]** and **[Gear]** widgets with a simpler, more elegant top-level menu
    - The new **Team** menu is just the old **Admin** menu (which was triggered by clicking the Gear widget in the old UI). _Same features - but much easier to find!_
    - We've added a **Docs** drop-down so that brainCloud documentation is always just a click away
    - We've added a new **Quick** menu for commonly accessed screens, like the API Explorer, User Monitoring, and Analytics.
    - The **User** menu in the top-right corner now displays your [Gravatar](http://gravatar.com) picture if you have one.
- **User | Edit Profile**
    - New **Settings** tab allows the user to set their preferred **_timezone_** and portal _**language**_. _Note that these values are currently still stored in the developer's browser cookies - they will be moving soon!_
- **Design | Core App Info | Platforms**
    - We've removed the _Client Libs_ section of this page - it was confusing and redundant with the **Team | Client Libs** page
- **Monitoring | User Monitoring**
    - The portal now remembers the last user that you were viewing and will automatically return to that user if you navigate away and then back. The is especially useful in conjunction with the new **Quick | User Monitoring** shortcut!
- **General**
    - Improved the "Delete Script" pop-up to more clearly indicate which script is being deleted!
    - brainCloud Portal now supports click-thru links - it will automatically prompt the developer to log-in if they aren't already. Handy for documentation, tutorials and bookmarks.

* * *

## API Changes

The following changes/additions have affected the brainCloud API:

- **Client**
    - [NEW!] `OverrideCountryCode()` and `OverrideLanguageCode()` - allow apps to override the country code and language that are automatically detected by the client libs and sent to brainCloud during authentication. This is useful especially for Unity apps on PC and Mac, because Unity does not properly detect these values. These methods should be called _before authenticating_ so that they are sent to the server.
- **Friend**
    - [IMPROVED!] Added `pictureUrl` to the returns for `FindPlayerByUniversalId()`, `FindPlayerByName()` and `ListFriends()`
    - [NEW!] `FindUsersByExactName()` - allows searching for users via an exact match (case insensitive). Will return as many users that match, up to the maximum.
    - [NEW!] `FindUsersBySubstrName()` - similar to the old `FindPlayerByName()` method, but still returns _some_ search results even if the full results exceed the maximum.
- **Leaderboard**
    - [NEW!] `GetPlayersSocialLeaderboard()` - note the plural "players" in the name. Allows the app to retrieve the scores for the specified set of players. Useful in certain tournament situations.
- **Logging**
    - [NEW!] `LogInfo()`, `LogWarning()` and `LogError()` - new methods to allow you to easily log the results of cloud code routines
- **Push**
    - [NEW!] `SendNormalizedPushNotification()` - ability to send normalized push notifications to individual users
    - [NEW!] `SendNormalizedPushNotificationBatch()` - ability to send a normalized push notification to the specified set of users
- **Queries**
    - We have updated the accepted query syntax for all user, global and group entity lookups
    - These methods now accept queries that include (among others): $and, $or, $not, $nor, $in, $nin, $gt, $gte, $lt, $lte, $ne, $nin, and even $regex
    - The following methods have been updated:
        - User Entities:  `GetList()`, `GetListCount()`, `GetSharedEntitiesListForPlayerId()`, `GetPage()`
        - Global Entities: `GetList()`, `GetListCount()`, `GetPage()`
        - Groups/Group Entities: `AutoJoinGroup()`, `ListGroupsPage()`, `ReadGroupEntitiesPage()`
    - For more information, refer to the [Queries](/api/appendix/mongodbwherequeries) page in the Appendix of the API Reference.

 

* * *

## Miscellaneous Changes / Fixes

- Updated libraries
    - All libraries have been updated with the latest API enhancements. Go get 'em!
- Documentation updates
    - Friend service - we've updated the docs to more clearly indicate with methods require that the user be "friends" with the other user to function. (_Spoiler: It is actually very few of them_.)
    - Cloud Code - added service + operation for all cloud code method documentation
    - Obsolete docs - we've almost completely removed our old API docs - our new [API Reference](/api/capi) is the master now.
- Important Fixes
    - Fixed an issue where the global error handler was not sending the correct callback object when using the BrainCloudWrapper
    - Fixed a defect where the javascript library was could send a bad rotation date to the server (with certain dates)
    - Server changes to better standardize language and country codes
- Plus miscellaneous fixes and performance enhancements...
