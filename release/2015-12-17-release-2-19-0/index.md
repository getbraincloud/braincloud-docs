---
title: "Release 2.19.0"
date: "2015-12-17"
tags: 
  - "release-history"
---

Firstly, a reminder that we are on _reduced support availability over the holidays_ while our team spends some well-earned time with their families (Dec 24th, 2015 - Jan 4th, 2016).  The servers of course will still be fully monitored, and we're definitely still available to respond to emergencies.

This being our holiday release, we thought we'd try to finish off the year by focusing on a few more customer requests. There's something in here for everyone!

## Release Highlights

Key features of this release include:

- **Profanity Filter API + WebPurify Integration** - we've had several requests from developers to support profanity filtering in the platform. Although simple enough in concept, profanity filtering gets pretty complicated when you start taking into account multiple languages, custom whitelists and blacklists, identifying vs. replacing profane strings, etc. We've addressed this in two parts - we've added a new abstract Profanity Filter API to brainCloud, and partnered with the good folks at [WebPurify](http://www.webpurify.com) to allow you to easily add profanity filtering to your apps.
- **User Export \[Beta\]** - we've always said that brainCloud's data is _your_ data - and we happily provide custom exports when requested. That said, it's a lot more efficient to provide a way for you to export your user data yourself - which is of course what our new **User Export** feature is for. So, whether you are looking to do some additional analytics analysis, or maybe import your user e-mails into a mailing list platform - brainCloud now supports exporting the data you need in both .CSV and .JSON formats.
- **Idle timeouts** - we've refactored how the Design Portal handles user timeouts. To start, we've extended the timeout to 1 hour (from 20 minutes) - but we've also added a dialog to _warn_ you that the session is about to timeout, and to definitely tell you once you _have_ timed out. We're much happier with the new system. Let us know what you think.

 

## Portal Changes

Changes to the portal:

- **WebPurify Integration settings** - can be found in **Design | Integrations | Manage Integrations**. You simply enter the WebPurify API key, and choose what languages to filter on. Note that you can choose to automatically filter the user's name field. If selected, brainCloud will automatically filter all calls to UpdatePlayerName() - and raise an exception if the name contains profanity. **You can get a WebPurify account for as little as $15 / month at [www.webpurify.com](http://www.webpurify.com)**. _Note that for brainCloud billing purposes, calls to WebPurify are counted as an external web service API call._
- **Refresh button in Custom Files** - we now cache the list of custom files, so we no longer have to access the file system to retrieve the directory.  This cache is updated each time a new file is added or deleted - but should you have reason to think that it's out-of-date, just hit the **\[Refresh File List\]** button on the **Design | Custom Config |  Files** page.
- **Export User Data** - available under **Reporting**.  You can specify some filter criteria for which users to export, as well as select what types of data to include. We support both .CSV and .JSON file formats. Note - there are more data options associated with the JSON format (since it's more flexible).
- **Web Idle Timer** - we've refactored how the web portal handles user timeouts. We've extended them timeouts, added better activity tracking, and improved the communication of when the session has expired. Let us know what you think.

 

## API Changes / Additions

Changes and additions to the API:

- **Profanity Filter API** - There are 3 key methods for the Profanity Filter API - ProfanityCheck() returns true if foul language is found; ProfanityReplaceText() will actually replace bad words with a substitution character that you provide; and ProfanityIdentifyBadWords() returns a list of the bad words found (mostly useful for debugging). Remember, you need to set up a [WebPurify()](http://www.webpurify.com) account to enable these APIs.
- **Player State JSON enhancements** - we've enhanced our Authentication and ReadPlayerState() calls to return additional user data - basically all the info that is displayed in the **User Summary** page of **User Monitoring**. So in addition to the slew of data that was already being returned, you now get `emailAddress`, `createdAt`, `lastLogin`, `previousLogin`, `language`, `timezoneOffset`, `amountSpent` (in cents) and `refundCount`.  _Note that `amountSpent` refers to the reference price that you specify in the IAP entries, and is not a precise estimate of what a user paid, since it doesn't take into account currency exchanges, the platform's take, etc._

 

## Miscellaneous Changes / Fixes

Additional improvements to this release:

- Big performance boost to GetFileList() and GetUpdatedFiles().  We now cache the data instead of reading from the file system each time - so performance is now approximately 3 times faster!
- brainCloud is now available directly from the [Unity Asset Store](https://www.assetstore.unity3d.com/en/#!/content/50220)!  (The [brainCloud Bombers](https://www.assetstore.unity3d.com/en/#!/content/50656) and [brainCloud Space Shooter](https://www.assetstore.unity3d.com/en/#!/content/50279) example games are there too!)  Feel free to drop by and give us a review! :)
- All client libraries have been updated with the latest APIs
- Misc defect and performance fixes
