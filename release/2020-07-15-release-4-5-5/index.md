---
title: "Release 4.5.5 is live!"
date: "2020-07-15"
tags: 
  - "release-history"
---

We have bad news and good news.

The bad news is that delivering the full 4.6 Release (with Cloud Code Folders support) is taking longer than expected. Our adjusted schedule puts that release in September. (boo!)

The good news is that there are a bunch of smaller features that we are finishing up now - and so instead of making you wait until 4.6 for everything, we are going to do an early 4.5.5 release instead! (yay!)

_PS - Don’t let the .5 release number fool you - there is a lot here!_

**_Important_** _**Compatibility alert!** - Our C# 4.5.5 Unity Libs now recognize when they are being run on Amazon Fire devices, and set the "platform type" appropriately (for better analytics). As a side effect of this, you need to **enable the new Amazon platform** on the **Design | Core App Info | Platforms** page for it to run on Amazon devices! You will need to do this even if you aren't using Amazon IAP._

_**Pricing alert!** - This release includes a new feature for Auto-Deleting Dormant Users. This is in preparation for charging devs for storing Dormant Users - which will become effective in **January 2021**. Read on for more details!_

## Release Highlights

### Amazon In-App Purchase Support

At long last, brainCloud brings support for Amazon AppStore In-app Purchase items. This includes support for both Consumable and Non-consumable items (i.e. Entitlements). Basic subscription support is in place as well.

Perform the following steps to add Amazon IAP support to your app:

- In the [Amazon Developer Services](https://developer.amazon.com/apps-and-games/console) portal
    - Register your app (and it’s IAP products). Create a Product for each price entry you wish to manage in brainCloud.
- In the brainCloud Design Portal
    - Configure the _Shared Secret_ key on the **Design | Core App Info | Application IDs** page - **Amazon tab** of the brainCloud Design Portal. You can find your shared secret key [here](https://developer.amazon.com/settings/console/sdk/shared-key).
    - On the **Design | Marketplace | Products** page - configure the _Amazon Product SKUs_ for the appropriate price entries.
- In your app
    - Integrate the latest brainCloud and Amazon libs into your app
    - Call AppStore.GetSalesInventory(), passing in the new “amazon” platform, to get a list of the products and their current prices (i.e. Amazon IAP SKUs)
    - Use the appropriate _Amazon APIs_ to perform the purchase.
    - Verify the receipt that is returned via the AppStore.VerifyPurchase() call  
        

### Global Files V3 Portal Support

![](images/globalFiles-1024x800.png)

In **4.5**, we introduced our new **Global File** service - which enables developers to organize files into folders - and to allow migrating of uploaded **User Files →** **Global Files**.

In **4.5.5**, we have made the Global File service more accessible, by giving it its own page in the Design Portal. Simply navigate to **Design | Custom Config | Global Files** and start uploading your files!

From the Design Portal, you can:

- upload, move, copy and delete _files_
- create, move, and delete _folders_
- download an archive of all of an app’s global files
- restore an archive of an app’s global files

In addition, brainCloud 4.5.5 now migrates Global Files during deployment.

### Slack Alerts (beta)

![](images/slackalerts-1024x620.png)

We have added our first cut of Slack integration to brainCloud!

With this integration, you can configure a custom channel (or channels) to receive alerts from selected categories, including:

- chat - profanity filter violations
- deploys - app deployments
- hosting - room servers spinning up / down
- integration - push notification expiry warnings
- jobs - background reporting jobs started / completed
- purchases - customer purchase notifications ← fun!

See [this](http://help.getbraincloud.com/en/articles/4236297-configuring-slack-alerts) knowledge base article for instructions on configuring the slack webhooks for integration.

### Custom Entity Singleton API

Here is an interesting statistic:

_The `UpdateSingleton()` call for User Entities is by far the most heavily called client method. It is called >5X more often than it’s closest rival._

The reason is that it allows devs to bypass micromanaging ids. For example - You don’t need to know the entityId of the “CampaignSave” object to read and update. Your app just knows that there is only one of them per user - and updates them via the type (i.e. “CampaignSave”) instead of the id.

Given the popularity of the singleton pattern - we thought it fitting to bring a _singleton API_ to _Owned Custom Entities_ as well!

The following new methods have been added:

- `UpdateSingleton()` and `UpdateSingletonFields()` ← partial updates for singletons!
- `ReadSingleton()` and `DeleteSingleton()`.

Note that the singleton API only works for _owned_ Custom Entities.

### Auto-Delete Dormant Users

At long last, brainCloud will now support the automatic deletion of Dormant Users.

brainCloud defines a dormant user as _a user that has an account in an app, but hasn’t logged into it in the past 180 days_ (i.e. 6 months).

_The evils of Dormant users:_

_The storage (and backups) of dormant users greatly adds to the costs of running brainCloud - and weighs down the performance of apps - with little or no benefit to developers (and their marketing teams) - as most users are anonymous and have probably already uninstallled your app!_

brainCloud is making 3 key changes to combat the evils of dormant users:

1. Adding a new **Auto-delete** feature that devs can _enable_ to automatically delete dormant users. This feature is safe and highly configurable - see details below.
2. Adding a new **Dormant Users Fee** to brainCloud’s monthly invoices. Devs will be charged $75 per Million dormant users (pro-rated). (Note - this line item is actually already on invoices - but the cost is currently set to $0 / million).
3. Finally, we will not start charging the fees until **January 2021** - so that devs have the opportunity to delete their users first. Auto-deletion isn’t instantaneous - it works slowly in the background so as not to impact brainCloud system performance. Some brainCloud apps have over 100 million dormant users - it will take time to delete them!

#### Auto-deletion settings

The new Auto-deletion process is highly configurable. It allows you to set:

- **\# of days of inactivity** - brainCloud considers an account dormant after 180 days - but you can decide to only delete accounts after 1 year, for example.
- **exceptions** - easily exclude users who have made purchases, have e-mail addresses, have XP levels greater than some threshold, have currency balances greater than a threshold, or are members of selected segments.
- **(optional) email notifications** - want to warn users (that you have email addresses for) that their accounts will be deleted soon? You can send two notices. Of course, any users that login after the notice and before the deletion date are automatically removed from the deletion queue.
- **(optional) archive service** - want to archive the users (temporarily) before deletion? We have that covered as well! Just configure an Owned Custom Entity type and we’ll temporarily store an archive of the user there - you decide for how long. Note that standard Custom Entity charges apply. Also - there is no automated way to restore an archived user - though it is certainly possible to manually do so - all the data is there in the archive JSON.

Note that the Auto-Deletion process does consume some API counts - in accordance to how it has been configured - namely:

- +1 Bulk API Count for each user deleted
- +1 Email Sent API Count for each email notification sent

We understand that this is a big change - and that deleting users can be scary - but we have worked hard to build a safe solution that keeps developers in control of their user data and infrastructure costs. We hope you agree!

This feature will not be enabled immediately upon 4.5.5 release. We have got a bit of final testing on the production hardware before we turn it on.  
_**Plus - as a reminder - billing for Dormant User retention will not begin until January 2021.**_

### Additional Feature and Improvements!

The following new features aren’t headliners - but they are worth a mention!

- **Leaderboard Deployment Options** - new options to allow deployment to production apps without touching or destroying dynamically created leaderboards.
- **Custom Entity Deletion** **Queries** - we have added some new deletion calls that support query filters. Much more efficient than individually calling delete for each entity!
- **Product & Promotion Management APIs** - we have added new S2S and cloud-code APIs for managing _Products & Prices_, and both _Scheduled_ and _Automated Promotions_. These new APIs contain feature enhancements as well, including the ability to attach _custom JSON objects_ to both Prices and Promotions.
- **Segment, Currency, and Notification Queries** - in support of the above APIs, we have added several utility methods that retrieve the current segments for a user, the overall segment list, the list of push notification templates, and the list of virtual currency types. We have also added a new method to dynamically refresh the user’s segment list (to recalculate the segments since they logged in).
- **Unreal 4.25 Support!** Technically, 4.25 support was added as a library patch for brainCloud 4.5 - but it’s totally worth mentioning.  
- **RTT** \- we have added additional edge-case handling to prevent unnecessary disconnects - especially in regards to the Java client
- **Room & Relay Server launches** - are now handled more efficiently in the background
- **RTT & Relay Comms** - there are improvements in every client release. In particular, there are improvements in the Java Libraries this release

* * *

## Portal Changes

We have made the following changed to the Design Portal:

### Design

- **Core App Info | Application IDs**
    - Added a new Amazon tab where you can fill in the _Shared Secret_ necessary for validating _Amazon AppStore_ receipts
- **(New!) Core App Info | Auto Delete Users**
    - New screen for configuring the auto-deletion of dormant users
    - _Note - this screen will not show up for a few weeks as we complete final testing._
- **Cloud Code | My Servers**
    - You can now pick a _relay protocol_ to use for your Relay Servers. The only choice currently is **V1** - but **V2** is coming very soon with _improved performance and reliability_!
- **(New!) Custom Config | Global Files**
    - Manage the files and folders for the Global Files V3 service
- **Integrations | Manage Integrations**
    - Integrate brainCloud with your **Slack** instance
- **Marketplace | Products**
    - Configure Amazon IAP pricing for products
    - Expanded support for _custom JSON_ on products
- **Promotions | Automated**
    - The UI for targeting segments align better with the _Scheduled Promotions_ screen
    - Added the ability to attach custom JSON to promotions
- **Promotions | Scheduled**
    - Added the ability to attach custom JSON to promotions
    - Fixed an odd behavior where you had to set the start time to the future when editing scheduled promotions.

_Also of note - user counts throughout the portal should now be more accurate - taking into account deleted and merged accounts (as well as accounts created directly via the User Service)._

* * *

## API Changes

The following changes/additions have affected the brainCloud API:

### **Client APIs**

- **Custom Entity**
    - **New!** _Singleton_ APIs - `DeleteSingleton()`, `ReadSingleton()`, `UpdateSingleton()`, and `UpdateSingletonFields()`.
    - **New!** _Delete multiple entities_ in a single call using `DeleteEntities()` & `SysDeleteEntities()`.    
        _Note that apps are charged +1 Bulk API Count per entity deleted, in addition to the API Count for the call itself._ 
    - **New!** `IncrementData()` call added to client libs
- **Product Management**
    - **New!** APIs for managing products and their associated prices
        - `SysAddProductPrice()`
        - `SysCreateProduct()`
        - `SysDeleteProduct()`
        - `SysDeleteProductPrice()`
        - `SysGetProductList()`
        - `SysReadProduct()`
        - `SysSetDefaultProductPrice()`
        - `SysUpdateProduct()`
        - `SysUpdateProductPrice()`
    - Note that all of the above methods are available via cloud-code and S2S only.
- **Promotions**
    - **New!** APIs for managing both scheduled and automated promotions
        - `SysCreatePromotion()`
        - `SysDeletePromotion()`
        - `SysEnablePromotion()`
        - `SysGetPromotionList()`
        - `SysReadPromotion()`
        - `SysUpdatePromotion()`
    - Note that all of the above methods are available via cloud-code and S2S only.
- **Push Notification**
    - New! `SysGetNotificationTemplates()` API to return the list of notification templates configured in the portal.
- **Segment**
    - **New!** Two methods have been added for retrieving the user’s segment, and the full list of segments respectively: `GetMySegmentsLegacy()` and `SysGetSegmentList()`. We have made these methods cloud-code only because we plan to introduce schema changes in this area in the future, and don’t want client apps to be caught flat-footed.
    - New! We have also added the `RefreshMySegments()` cloud-code call to allow dynamically refreshing of segments during a session. _Note that segments are already automatically refreshed upon authentication_ – this method can be used to cause segments to refresh mid-session - for example, after completing a level. 
- **Virtual Currency**
    - **New!** The following methods have been added for retrieving the list of currency types that have been defined in the portal:
        - `SysGetCurrencyTypes()`
        - `SysGetParentCurrencyTypes()`
        - `SysGetPeerCurrencyTypes()`
    - Note that all of the above methods are available via cloud-code and S2S only.

### S2S APIs

All of the SYS calls described above are available via the _Server-to-Server API_ as well.

* * *

## Miscellaneous Changes / Fixes

- Updated libraries
    - All client libraries have been updated with the latest API enhancements - go get 'em!
    - The following client libraries have additional improvements:
        - Unreal Lib - now supports **Unreal 4.25**!
        - Java Libs - there are some good RelayComms fixes in there.
        - In general, it is always best to update to our latest client libs!
    - There have been no changes to the S2S libraries themselves. The generic mechanism employed by our S2S libs is API agnostic - and thus the 4.5 libs already support all 4.5.5 APIs.
- Documentation updates
    - All new methods are documented in our APIREF - https://getbraincloud.com/apidocs/apiref
    - You’ll find our new Amazon IAP tutorial here - [https://getbraincloud.com/apidocs/portal-usage/store-integration-amazon/](/learn/portal-tutorials/store-integration-amazon/)
- Important Fixes
    - BCLD-5722 - Unreal blueprint tutorial on website is out of date for UE 4.24. will crash on initialize app.
    - BCLD-5724 - Unreal C++ tutorial on website is out of date, method getInstance() doesn't exist in BrainCloudClient class.
    - BCLD-6072 - Price entries can be created for products without an appstore defined with it
    - BCLD-5960 - Users should not be able to use '.' (dot) in external auth type
    - BCLD-6105 - Should be able to edit Scheduled Promotion without setting it's start time to the future
    - BCLD-6090 - brainCloud java client sends empty RTT ping packets that cause immediate disconnect from event server
    - BCLD-5922 - Matchmaking process is blocked by room/relay server spin-up
    - BCLD-5909 - User counts on Manage | Apps and Reporting | Analytics don't exclude deleted users OR include users created via UserService
    - BCLD-5738 - Java RelayComms double queue UDP ordered relay packets
- Plus miscellaneous fixes and performance enhancements...
