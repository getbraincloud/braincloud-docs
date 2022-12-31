---
title: "Release 2.26.0"
date: "2016-07-13"
tags: 
  - "release-history"
---

**2.26** is a smaller release that delivers some handy, customer-requested features. Take a look - there is something to love for everyone!

# Release Highlights

## WebHook Authentication

Some of you are looking to use our new **WebHooks** feature for integration with systems like _Photon_, that can benefit from leveraging brainCloud authentication.

To enable this, we have added a new Cloud Code Bridge method: [`GetSessionForSessionIdAndProfileId()`](/apidocs/apiref/#cc-bridge-getsessionforsessionidandprofileid). Using this API you can retrieve the current session for an active user, confirm that it is valid, and even take action within that user’s context.

## Disabled Reason

We’ve added the ability to custom configure information to be sent to your client apps should you choose to temporarily disable your app. The info is in the form of a snippet of custom JSON data that will be returned along with the `Authentication()` rejection.

For more details, consult the [Authentication](/apidocs/apiref/#capi-auth) section of our API Reference.

## User Online Status

We’ve added a new method that you can use to query and report the online status of other users in the system. The method is called [`GetUsersOnlineStatus()`](/apidocs/apiref/#capi-friend-getusersonlinestatus) and works with an array of profile ids. Just the sort of thing you would want to gather the online status of a set of Group / Clan members!

## Clone Scripts

We’ve noticed that some devs, when creating a major revision to a Cloud Code script, like to begin by “cloning” it first - but we didn’t give you an easy way to do that - _until now_!

Simply choose **“Duplicate”** from the new Scripts action menu, and voila!, you are on your way!

* * *

# Portal Changes

We’ve made the following portal changes:

- **Design | Core App Info | App Ids**
    - _Google Services_ section - we now indicate whether a p12 certificate has been already uploaded.
- **Design | Core App Info | Advanced Settings**
    - There’s a new button, **\[Edit Disabled Reason\]**, up by the **\[x\] App Enabled** box, that allows you to edit the _JSON_ object that will be returned when your app is disabled.
- **Design | Cloud Code | Scripts**
    - The Script List functions have been organized into a new _action menu_, and includes the new _Duplicate_ feature!
- **Design | Custom Config | Files**
    - The MD5 for a file is now displayed if you hover over its filename.
    - Troubleshooting: If for some reason the MD5 is not present, click **\[Refresh File List\]** to retrieve it.
- **Monitoring | User Monitoring**
    - All User Monitoring screens now bring up the _New Users_ list if a user has not already been selected
- **Admin | Home**
    - There’s a new “gear” button in the Apps section that you can use to jump to the Apps screen
- **General**
    - We’ve fixed an error in the portal that mangled international characters if you tried to apply them to a user’s name, push notification message, etc.

* * *

# API Changes

The following changes/additions have affected the brainCloud API:

- **Cloud Code Bridge**
    - The new [`GetSessionForSessionIdAndProfileId()`](/apidocs/apiref/#cc-bridge-getsessionforsessionidandprofileid) method retrieves the specified active session object, if it is associated with the provided `profileId`. This can be used to validate that the user associated with the `profileId` _has_ indeed successfully authenticated with brainCloud.
- **Friend**
    - The new [`GetUsersOnlineStatus()`](/apidocs/apiref/#capi-friend-getusersonlinestatus) method can be used to retrieve the online status of the provided list of users.
- **Global Statistics** and **User** \[Player\] **Statistics**
    - New `ProcessStatistics()` methods have been added to both the [`GlobalStatistics`](/apidocs/apiref/#capi-globalstats-processstatistics) and [`PlayerStatistics`](/apidocs/apiref/#capi-playerstats-processstatistics) services that leverage the internal brainCloud [Statistics Grammar](/apidocs/apiref/#appendix-statisticsgrammar), allowing for the batch processing of complicated stats operations to be carried out by the server.
- **Identity**
    - The various [Identity](/apidocs/apiref/?cloudcode#capi-identity) methods ( `Attach*()`, `Detach*()`, `Merge*()`, etc. ) are now available from cloud code.

* * *

# Miscellaneous Changes / Fixes

- Important Fixes
    - CDN robustness - we’ve improved our algorithms to better handle updating the cached files in the CDN when new Custom Files are uploaded to the portal.
    - Identifier syntax - The web portal now ensures that Global Properties and Cloud Code Script names adhere to the brainCloud identifier conventions of only letters, numbers and/or underscores
- Updated libraries
    - All libraries have been updated with the latest API enhancements. Go get ’em!
- Documentation updates
    - We continue to iterate and improve our new API reference
    - There is a new tutorial for [Building the brainCloud Plugin for older versions of Unreal](/apidocs/tutorials/unreal-tutorials/building-the-plugin-for-older-versions-of-unreal/)
- Plus miscellaneous fixes and performance enhancements…
