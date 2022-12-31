---
title: "Release 4.7.5"
date: "2021-05-04"
tags: 
  - "release-history"
---

Release 4.7.5 is a surgical release to improve brainCloud support in a few key feature areas (mostly Purchases + Promotions). We hope you dig it! 

## Release Highlights

### Promotions

This release addresses some limitations of the existing promotions system and introduces a few cool new tricks.

The improvements, in no particular order, are:

- Added new **Purchase Rewards Hook** - a new API Hook that allows apps to override the configured reward amounts for product purchases. This is useful for companies that like double the rewards of a promotional item, instead of offering the same items for less $. _You can find a script example [here](http://help.getbraincloud.com/en/articles/5196453-using-a-post-hooked-cloud-script-to-override-product-purchase-rewards)._
- Added **max # of purchases** for _Automated Promotions_ - you can now configure Automated Promotions to expire early if a user makes a purchase - limiting that special deal to the first <x\> purchases they make.
- Added **max # of re-triggers** for _Automated Promotions_ - you can now configure Automated Promotions to re-trigger a finite number of times
- New AppStore **RefreshPromotions()** call refreshes the Segments and Promotions of the current user. Useful for apps that want to check if a promotion became active during the play session. _Note - cloud-code only for now._

In addition, we have addressed a limitation where Automated Promotions targeting _existing_ Segments would not trigger for users _already_ in that Segment. Those users (in existing segments) will now have the promotion applied by a new job that kicks off when the Automated Promotion is enabled.

### Purchases

We have also made improvements to the saved purchase transaction data - as viewed via the **User Monitoring | Transactions** page. For new purchases, you can now see:

- Any **rewards** associated with the purchase
- Where the purchase was made during a **promotion**
- And whether the purchase has been **refunded**. Note - for purposes of brainCloud, chargebacks also appear as refunds. _Also, note that these states only apply to Facebook purchases._

### Miscellaneous

- **Builder API** \- Our “official official” beta release of Builder API begins now. Our planned 4.7.0 roll-out was delayed while we put in some finishing touches. _Note - still for private licensees and approved BaaS customers only._
- **Cloud-code Script Hook** - we have added a cloud code script pre-hook. This can be helpful when re-organizing scripts into folders (using our new Cloud Code Folders feature). This hook can allow you to rework your script organization, while still supporting existing clients attempting to run scripts from their old locations. _See this [article](http://help.getbraincloud.com/en/articles/5196058-using-a-pre-hooked-cloud-script-to-locate-the-moved-scripts-for-runscript-call) for an example of how to use it._
- **Events** - we have added more flexible ways of deleting incoming events for a user. See the **API Changes** section for more details…
- **Room & Relay Servers** - we have reworked our room/relay server mechanisms to be more efficient. You may notice more responsive cleaning-up of server resources.
- **RTT** - Improved clean-up (server-side) of stale client connections.

* * *

## Portal Changes

We've made the following portal changes:

### Design

- **Cloud Code | API Hooks**
    - Added new AppStore PurchaseRewardHook - configure it as a “Post” hook to dynamically override the default awards of an item.
    - Added the ScriptService to the list of services that support API Hooks. So for example you can now add a Pre-hook to “RunScript” that adjusts the name/path of a script before running it. Useful when migrating to Cloud Code folders while still maintaining compatibility with existing clients.
- **Cloud Code | Scripts**
    - We have updated the Scripts screen to default to showing up to 100 scripts per page. You are welcome! 🙂
- **Promotions | Automated**
    - You can now set the **max # purchases** and **max # re-triggers** for automated promotions. Leave the value blank for _unlimited_ - which is the _default_.

### Monitoring

- **Global Monitoring | Recent Errors**
    - Updated the source of legacy servicemix errors to the more up-to-date cron and datastream sources
- **User Monitoring | Transactions**
    - We have beefed up the Transactions page to show **rewards**, **promotions** and **refund** status of transactions. There is also more transactional info shown via the Transaction Action menu for Facebook purchases. 
    - **Steam** pending transactions are no longer shown (by default). There is a new toggle button to toggle viewing pending transactions. 

* * *

## API Changes

The following changes/additions have affected the brainCloud API:

- **AppStore**
    - The `GetEligiblePromotions()` method (and other promotions methods) now include the new num purchases and retriggers counts in the responses when appropriate.
    - Added a cloud code method, `RefreshPromotions()`, that refreshes the segments and promotions associated with a user. Note that a user’s segments and promotions are _automatically refreshed_ when they authenticate. Calling this method allows apps to periodically refresh the segment + promotion data for the user during the play session. Note that this is an expensive call - calling it is equates to 2 API counts (technically 1 API + 10 bulk API) - so use it sparingly!
- **Events**
    - New event deletion methods - `DeleteIncomingEvents()`, `DeleteIncomingEventsOlderThan()` and `DeleteIncomingEventsByTypeOlderThan()`. 

_Note that all of the new methods are cloud-code only for now - but will be added to the client libraries for brainCloud 4.8._

* * *

## Miscellaneous Changes / Fixes

- Updated libraries
    - No changes to the Client Libraries for 4.7.5.
- Documentation updates
    - Updated API Reference docs and examples
- Important Fixes
    - BCLD-7072 - Automated Promotion job to run when promotion created or new target segment added
    - BCLD-7095 - Failure to extend the TTL of an RTT cx should result in the termination of the socket connection
    - BCLD-7201 - Product pricing lookups should be specific to store type
- Plus miscellaneous fixes and performance enhancements...
