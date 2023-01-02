---
title: "Managing Apps"
date: "2015-05-07"
---

The **Apps** page (accessible via **Admin | Apps**) is used to manage your team's brainCloud applications.

It's important to understand that Apps in brainCloud are generally in one of two states:

- **In Development** - in development apps are free in brainCloud, but with limitations  
    (i.e. the maximum of 100 users per day, no real in-app purchases, max 1000 users lifetime)
- **Live** - live apps have no run-time restrictions and are associated with a brainCloud subscription plan.

Via this page, you can:

- View the **current status** of your apps
- **Disable / Re-Enable** - temporarily disables end-users ability to log into your app.
- **Go Live** - publish your app, associating it with a subscription plan
- **Apply coupon** - apply a coupon for pricing discounts
- **Refresh** - sync with the billing system to refresh the app's status

Developers can perform an operation on an app by clicking on the Action button and choosing the associated menu option.

[![brainCloud](images/brainCloud_dashboard_appAdminActions.jpg)](/apidocs/wp-content/uploads/2016/08/brainCloud_dashboard_appAdminActions.jpg)

Important information displayed on this screen:

- **\# Users** - this is the total number of end-user accounts associated with the game.  It is refreshed nightly, so you won't see it update in real-time.
- **Publishing** - indicates whether your app is Live or not.  Live apps show "Live", with the name of the associated subscription plans.  Apps that are still in development display the **\[Go Live!\]** button.
- **Status** - whether the app is Enabled or Not.
- **Run Status** - the run-time status of your app. Indicates whether brainCloud is doing any special checks (to enforce limitations) as users log in.
- **Discounts** - whether or not any discounts have been applied to the subscription pricing of the app

For more information on publishing apps, refer to the [Publishing Apps](/apidocs/portal-usage/publishing-apps/) page.
