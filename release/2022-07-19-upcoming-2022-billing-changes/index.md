---
title: "Upcoming pricing changes..."
date: "2022-07-19"
authors: paul
tags: 
  - "release-history"
---

As you are probably aware - brainCloud's pricing model is designed to be _elastic_ - in that the cost to you (our customer) is proportional to the costs we incur in running your app(s) on our service.

This model is maintained via the formulas that we use to calculate API counts, deep data usage, hosting costs, etc. Keeping the model accurate requires periodic assessments to ensure that the components are balanced -- and a review was long overdue!

Reviewing the data, here is what we found:

- **Dormant account costs!** The storage of dormant accounts (i.e. players who haven't logged into an app for years) is an ever-increasing concern - affecting storage + backup costs, system performance, and deep data costs for all apps.  
    _Think about it: As an app enters the long-tail of it's product lifecycle, the cost of hosting that app should go down - not up!_  
      
    
- **RTT bulk message sends.** When we first developed RTT, we expected much higher usage on a per-connection basis - and thus designed the usage formulas accordingly. It turns out that devs are finding that it's very convenient to have an RTT connection available even in low-usage situations - which is great! - but ensuring proper cost coverage does necessitate an adjustment to the formula.  
      
    
- **Cloud code API imbalance.** Calling brainCloud APIs from within cloud code scripts is more efficient than calling them directly from the client - and our API count formulas reflect that.  
    Unfortunately, the existing formula has a design flaw that unintentionally encourages developers to artificially break their code into smaller and smaller scripts. This is both bad design and less efficient for brainCloud - so we are correcting this.  
      
    
- **Debug logging!** Some apps have a surprising amount of debug logging in their scripts -- which actually results in more system traffic than you'd think -- which is why we charge for the calls -- which results in higher costs for our customers.  
    In brainCloud 4.12 we've optimized the handling of bridge-based DEBUG log message so that we no longer have to charge for them when you aren't debugging (via the API Explorer / Script Editor).  
      
    

_The details of these changes (and when they take affect) are described below. How these changes affect your app depend upon the details of how your app is using brainCloud._

* * *

## Impact to apps

Established apps with lots of custom entities will likely see their monthly bills _significantly reduced_ as the **Auto-Delete** feature removes the abandoned accounts - greatly reducing their deep data usage. That's provided that the devs _enable_ Auto-delete of course.

Apps that choose to retain all (or a selected portion) of their dormant users will see a proportionate _increase_ in monthly costs as we start to charge for Dormant Users.

Apps that don't use a lot of scripts (and there are tons of them) won't see much of a difference at all. Apps with scripts that make lots of API calls will see a modest increase due to the rebalancing - which may be somewhat offset by the DEBUG log savings.

**We hope that folks understand that we make these changes with the best intentions of ensuring a better alignment between the costs that we incur and the costs to you - to ensure a healthy service for everyone!**

* * *

## Pricing changes

As of **brainCloud 4.12** (targeted for release on **July 20, 2022**), we are introducing the following change:

1. **We are eliminating the charge for bridge-based DEBUG log messages - when not actually debugging in the API Explorer or Script Editor.**  
    We have optimized the pipeline for DEBUG log messages called directly from the `bridge` service - so that these are now essentially no-ops, and thus we no longer need to charge for them. This is a significant cost reduction for some devs who like to leave the debug calls in place (and who wouldn't?) - and a greater convenience for all devs - who no longer need to comment these calls out to reduce costs.  
    

* * *

As of **September 1, 2022**, we are introducing the following changes:

1. **We are re-balancing the # of free API calls that you get with every Cloud Code script call - from 3 -> 2 calls.** Note that every call after the two free calls continues to cost 1/2 an API count.  
    This corrects an imbalance from our original formula, that had the unintended side-effect of making some devs think that we were encouraging them to artificially break up their code into multiple smaller scripts. (Hint: We would never intentionally encourage devs to break up their code for reasons that don't make sense from a design or runtime perspective!)  
      
    
2. **We are adjusting the ratio used to convert from bulk RTT message sends to API Counts from 1000:1 -> 100:1.**  
    This looks like a big change, but the message send traffic will still only adds up to a few dollars per month for even the most active apps on the platform. Still - it ensures we are covered should anybody choose to build the next Twitter on brainCloud!  
      
    

* * *

Finally, as of **January 1, 2023**, we will be introducing billing for **Dormant User Accounts**.

:::info

Long-time brainCloud users will note that we had first announced Dormant User Pricing back in July 2020 - to be effective as of Jan 2021! What can we say? We have been busy! It definitely \*is\* going live this January - so start deleting those users now!
:::

brainCloud defines a _Dormant User Account_ as any account where the user hasn't logged in the app in the past **365 days**.  These users add _no value_ to your game (e.g. they're probably anonymous and have already uninstalled your app!) - but they do significantly _increase costs_ (including deep data usage) -- and slow down your apps. Currently **over 50%** of brainCloud storage and backup costs is due to dormant accounts.

Starting **January 1, 2023**, brainCloud apps will be charged **$75 / month** per Million dormant users (pro-rated). That is not a lot - though for some apps it would be - but ideally _we don't want to collect any Dormant User revenues at all -- we're looking for the cost savings!_ That's why we have our **Auto-deletion** service!

### Auto-Deletion

The Auto-Deletion service (configured via the **Design | Core App Info | Auto-Delete Users** screen) is designed to keep dormant users from piling up.

We know deleting user accounts is scary - so we have made it very flexible - allowing you customize:

- **which accounts get deleted** <- you can define exclusions for users who have made purchases, attached an e-mail address, have virtual currencies greater than a certain balancer, etc.
- **if (and when) users are notified** - notify users in advance by email <- requires an attached Sendgrid account
- **whether the accounts are archived for a period of time** - you can optionally archive an export of a users data to a Custom Entity collection before deleting the account (just-in-case) <- requires a Plus plan

Note that depending upon the options you choose, there are some billing charges that apply as Auto-delete removes accounts:

- +1 Bulk API Count for each user deleted
- +1 Email Sent API Count for each email notification sent
- Plus deep data charges for temporarily archiving player data...

:::tip Advice - Enable Auto-Delete today!

Deleting dormant user accounts is a background process - and is _far_ from instantaneous.  
_We encourage apps with larger populations of dormant users to **enable Auto-Deletion today** - so that their older accounts will be purged before January 2023 rolls around!_
:::
* * *

### In summary

As always, our goal when designing our pricing models is to ensure that the pricing you are charged reflects the costs that we incur in providing the service.

We feel this approach aligns our interests. The more server resources your apps consume, the higher our costs, and the higher the price to you. But the more efficiently you can build your app, the lower our costs, and the lower the pricing for you. It’s win:win – and we are on the same side!

If you have any questions or feedback, please reach out to us via the Green Chat widget. We are always happy to hear from you!
