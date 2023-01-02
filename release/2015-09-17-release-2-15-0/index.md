---
title: "Release 2.15.0"
date: "2015-09-17"
tags: 
  - "release-history"
---

## Release Highlights

Highlights of this release include:

- **Shared Accounts** - highly requested feature - brainCloud now allows you to share user accounts across applications.  This is achieved by creating a master profile (associated with a separate App ID), which is associated with individual child profiles for each app. This is extremely powerful for companies looking to link the players across a collection of games together, or to model sub-accounts under a single Home account for a household.  [i.e. think set-top box]. For more information, see our [Shared Accounts](/learn/key-concepts/authentication/shared-accounts/) page in the API Docs.

[![Shared Account Overview](images/Shared-Account-Overview-1024x353.png)](images/Shared-Account-Overview.png)

 

- **Facebook Notifications** - we've always had them, but you couldn't properly enable/disable them. Now you can turn them on/off in the **Design | Notifications | Settings** page on the portal. And note of course, that your app will need to ask for the appropriate Facebook permissions for them to work.
- **Billing changes (Boo!)** - we've now added support for monitoring and billing for excess file transfer usage. All Standard Plan apps get 10GB per month of free downloads. After that, it's $0.10 USD per GB. And note, we're only charging for the S3 file downloads - not for any of the data otherwise associated with API -- that's all covered by the API counts.

 

## Portal Changes

Changes to the portal:

- **Shared Accounts** - configure parent-child app relationships under **Design | Authentication | Shared Accounts**.
- **Parent Currencies** - a child app can include parent currencies in rewards for XP level-ups, Milestones, Quests and Statistics Events. All configurable under **Design | Gamification**.  Parent Currencies are also visible on the Design | Marketplace | Virtual Currencies page.  _Note that you cannot yet award parent currencies for IAP Product Purchases [that will come next release]._
- **Leaderboards** - we've added a few additional "Are you sure?" checks to the process of resetting / deleting leaderboards, especially for live apps.
- **Improved Error Reporting** - we've improved our logging system to show errors from more sources, including Server-to-Server calls and Scheduled Cloud Code.  We've also added a new error category, "Sys Warnings".  Check it out in **Global Monitoring | Recent Logs**.
- **Profile Relations** - profiles with parent or child profiles will see them listed at the bottom of the **User Monitoring | User Summary** page, in a section called Relations.  We've also moved the **[Login as User]** button to the top of the page for convenience.

 

## API Changes / Additions

Changes and additions to the APIs:

- **Shared Accounts** - related API enhancements:
    - **Authenticate()** and **GetPlayerState()** methods now return the id of the parent profile (if there is one), as well as any parent currency balances
    - New **Identity** methods for switching to/from parent and child accounts - SwitchToChildProfile(), SwitchToSingletonChildProfile(), SwitchToParentProfile() and GetChildProfiles().
    - Enhancements to currency methods to support **Parent Currencies** - AwardParentCurrency(), ConsumeParentCurrency(), GetParentCurrency() and ResetParentCurrency()
    - New **RunParentScript()** call to run a parent's Cloud Code script (in the context of the parent profile)
- EnableLogging now implemented for **Windows Comms library**
- **Objective-C library** - better handling of optional parameters
- **Java library** - callback mechanism has been refined to better match the other libraries. Also, you can now receive separate error callbacks for individual API calls.

 

## Misc. Changes / Fixes

Additional improvements in this release:

- Upgrade Push Notifications service - we've upgraded our underlying Push Notification libraries for greater reliability
- Updated game examples - we've taken a pass through our examples to ensure that they're using our latest and greatest libraries
- Match expiry - plugged some holes in our completion of matches on Expiry timeouts
- Improved handling of database connections under load
- Miscellaneous performance improvements - mostly improvements under-the-hood to our logging subsystems
- Miscellaneous documentation improvements
