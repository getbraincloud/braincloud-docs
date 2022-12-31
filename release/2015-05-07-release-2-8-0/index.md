---
title: "Release 2.8.0"
date: "2015-05-07"
tags: 
  - "release-history"
---

We're pleased to present Release 2.8.0.

This one had to cook in the oven a bit longer than we'd hoped, but we think the results are worth it.  This release is chock full of feature fixes and enhancements (see details below), but first an important announcement:

_Our new billing system is in place! Yay, automatic monthly billing! Hurray sustainable business models!_ 

Hmm, clearly we're more excited about this than you guys. :)

**How does this impact you?**

_If you are still in development_, then it doesn't.  brainCloud continues as always to be free during development - zero, zip, nada.

_If your app is currently live_, then you'll want to push the **\[Go Live!\]** button in our system to ensure that we don't start enforcing the "in development" restrictions on your app.  (i.e. like 100 daily users max, no non-sandbox in-app-purchases, maximum 1000 lifetime users, etc.).  You'll need to set up a Billing Account with your payment information - it's all detailed [here](/apidocs/portal-usage/publishing-apps/ "Publishing Apps").  _(Note - you have until May 25th, 2015 to **Go Live!** before the new restrictions come into effect.)_

[![Admin Apps Page](images/Admin-Apps-Page-1024x529.png)](/apidocs/wp-content/uploads/2015/05/Admin-Apps-Page.png)

_One other note - we've updated our [Terms of Service](http://getbraincloud.com/terms-of-service/ "Terms of Service"), [Privacy Policy](http://getbraincloud.com/privacy-policy/ "Privacy Policy") and [Acceptable Usage](http://getbraincloud.com/acceptable-use-policy/ "Acceptable Use Policy") policies.  You'll be asked to re-accept them the next time you log into the portal._

# Release Highlights

- **Managing and Publishing Apps** - We've re-designed our app management screens to allow you to better manage your Apps through the development and publishing lifecyle.  For more information, check out our guide pages on [Managing Apps](/apidocs/portal-usage/managing-apps/ "Managing Apps") and [Publishing Apps](/apidocs/portal-usage/publishing-apps/ "Publishing Apps").
- **Open Source Unity Client** - you've asked, we've delivered. I'm pleased to announce that the source code for our Unity Client is now available on GitHub.  You can find it at [http://github/getbraincloud](http://github/getbraincloud "http://github/getbraincloud").  We've just got the Unity Client and some examples there for now, but we plan to release more of the clients in the future.
- **Facebook Integration Improvements** - Facebook has been busy, changing the requirements for minimum API levels for new apps (and removing their support for FQL).  We've made some short-term changes to accomodate, but are also making some longer-term changes to our approach to allow us to better keep up with their ever-changing API.
- **Push Notifications** - streamlined the configuration and usage of push notifications.  New configuration screen.  iOS configuration now validates the certificate that is uploaded, determining whether it's a production or sandbox certificate.  The appropriate servers will be utilized during pushes according to the certificate configured.
- **External Identity Support** - we've added the ability to easily integrate with 3rd party directories.  More info [here](/apidocs/api-modules/authentication/external-authentication/ "External Authentication").
- **Unity IL2CPP Compatibility** - Finally, we've recently updated our Unity Libraries to support their new IL2CPP Compiler.  64-bit iOS here we come!

# Portal Changes

- New **Design | Authentication** section in the portal, with the new External Identity feature being configured here.  _In the next release, the rest of the Authentication settings (E-mail authentication, Facebook authentication, etc.) will move over to this section as well._
- Multiple pages revamped to better support [**Publishing Apps**](/apidocs/portal-usage/publishing-apps/ "Publishing Apps") and our new **Billing** system:
    - **Admin | Home page** - now display's your company's billing _Account Status_
    - **Admin | Apps page** - enhanced to display the Publishing status of your app, and whether any run-time restrictions are being applied.  Includes a new actions menu to Go Live, Apply Coupons, etc.
    - **Admin | Company Info page** \- provides access to the **Billing Portal** for configuring payment methods, etc.
    - **Reporting | API Usage** - now includes a proper breakdown of all counts that contribute to the API Usage metric
- New **Push Notification** configuration screen (**Design | Notifications | Settings**)
- **New User Summary page** (Monitoring | User Monitoring | User Summary) - presents key information about the user in a more logical manner.  _Also includes a cool new ability to log into the API Explorer as this user - see the **\[Login as User\]** button in the bottom-right of the screen -- great for trouble-shooting!_

# API Changes / Additions

- CashInItunesReceipt() renamed to VerifyItunesReceipt in C++ libs and API Explorer
- New HttpClientServiceProxy object is now availble for S2S and Cloud Code
- Removed the deprecated Leaderboard API parameters, as per the notes in the [2.7.0 release notes](/apidocs/release-2-7-0/ "Release 2.7.0")
- New ExternalAuthenticate() method used for integrating with external user directories

# Misc. Changes / Fixes

- Features
    - Improved Exception Handling in Cloud Code scripts.
    - Clan Cloud Code example (as part of exception handling documentation).
    - iOS Push Notification interval removed from developer settings (we'll control this centrally in brainCloud)
- Fixes
    - Fixed defect where some Global Entities could not be viewed / edited from the Monitoring section of the portal
    - VerifyMicrosoftReciept() method added to the  API Explorer
- Documentation improvements
    - Matchmaking - _updated to clarify that Matchmaking needs to be explicitely enabled for a player to be eligible_
    - Server-to-Server - _additional documentation in place_
