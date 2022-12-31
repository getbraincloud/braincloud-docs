---
title: "Release 2.9.0"
date: "2015-05-29"
tags: 
  - "release-history"
---

In celebration of this week's [Ottawa International Games Conference (OIGC)](http://oigconf.com "OIGC"), it's brainCloud Release 2.9!

_Nothing too earth-shattering in this release - some minor fixes and changes while we ramp up the development of some larger customer-requested features - coming soon!_

 

# Release Highlights

- **IAP Product Enhancements**
    - **Categories** - Products can now be assigned to categories (i.e. "Gold bundles", "Elixer bundles", etc.), which is handy for retrieving lists of similar items for display in store screens.
    - **Product Types** - brainCloud now allows you to specify whether an IAP product is _consumable_, _non-consumable_ or _subscription_ (with sub-types for Apple's _free_, _non-renewing_ and _auto-renewable_ subscriptions). This additional information allows us to handle the various product types appropriately, in particular fixing our handling of auto-renewable subscriptions.
    - **Extra Data** - developers are now able to append extra information (key + value pairs) to products
- **Unity Client**
    - We have significantly overhauled our Unity Client - improving its communications infrastructure, and adopting a new Json processing library (JsonFx)._Warning: as part of the Unity Client Refactoring, we have changed the Error callback/delegate signature so that you no longer have to parse the response Json. This change greatly simplifies your error processing, but is **not backwards compatible**. The older 2.8 libraries still function just fine though._

 

# Portal Changes

- **Design | Marketplace | Products** - added support for categories, product type / sub-type, and extra data
- **Officially Supported Browsers** - the brainCloud portal is designed to work with Chrome, Safari and Firefox.  Users of other browsers (<cough>IE</cough>) will be warned that they may experience issues.  _\[There are known refresh issues with IE.\]_
- **API Explorer** - the services and operations are now displayed in alphabetical order (FINALLY!) :)

 

# API Changes / Additions

- **GetSalesInventoryByCategory()** method added to Products service - used to retrieve all IAP products of a certain type.

 

# Misc. Changes / Fixes

- **Admin | Company Info** page -  we now display the _user id for the billing account_ for easy reference
- **JavaScript client** - Async match parameters updated to match other clients, and fixed handling of optional parameters
- **Java client** - missing product methods have been added to the Java client
- **Leaderboard configuration** - the portal now warns you that changing the tournament refresh settings (start date, frequency, etc) requires that all leaderboard entries be deleted.
- Miscellaneous documentation updates
