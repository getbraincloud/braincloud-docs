---
title: "Feb 2023 Pricing Updates"
date: "2022-12-15"
authors: paul
tags: 
  - "release-history"
---

As you are hopefully already aware, our long-awaited _Dormant User Account_ pricing goes into effect for the February 2023 billing cycle… (which invoices on March 1st, 2023).

There are a few additional pricing tweaks, including new bulk-pricing plans, that will be become active at that time as well.

Read on for more details!

* * *

## Dormant User Accounts

_brainCloud defines a Dormant User Account as any account where the user hasn’t logged in the app in the past **365 days**.  These users add no value to your game (e.g. they are probably anonymous and have already uninstalled your app!) – but they do significantly increase costs (including deep data usage) — and slow down your apps. In July 2022, **over 50%** of brainCloud storage and backup costs were due to dormant accounts!_

Beginning with the February 2023 billing cycle, which is invoiced on **March 1, 2023**, brainCloud apps will be charged **$75 / month** per Million dormant users (pro-rated). That is not a lot – though for some apps it would be – but ideally _we don’t want to collect any Dormant User revenues at all — we are looking for the cost savings!_ That’s why we have our **Auto-deletion** service!

For instructions on enabling **Auto-Delete** to reduce and/or eliminate an Dormant User Account pricing charges, see the bottom section of our previous [post](https://getbraincloud.com/apidocs/upcoming-2022-billing-changes/).

* * *

## Hosting Pricing Changes

After some deep-dive usage analysis, we have determined that we need to adjust the costs that we charge for hosting Room and Relay Servers. The current formulas were not accurately reflecting the full costs of providing the service - which need to include:

- server hosting costs
- disk storage costs
- data transfer costs
- cloud service support costs ← which is a percentage on top of all costs that our cloud provider (AWS) charges as part of our support plan

Therefore, beginning with the February 2023 billing cycle, which is invoiced on March 1, 2023, the prices for brainCloud Hosting services are changing as follows:

- Hosting Server markup - will be increased from **15%** mark-up to **25%** markup
- Hosting Management cost - will increase from **1.5 cents** per server hour to **2 cents** per server hour

_Note - obviously these changes only affect customers using brainCloud’s RelayServer and RoomServer hosting services. Customers not using these services (or using their own GameLift accounts instead) are not impacted._

* * *

## Deep Data Pricing Reductions

In the good news category, a similar deep-dive analysis has determined that we can safely **reduce** our deep data pricing!

Therefore, beginning with the February 2023 billing cycle, which is invoiced on March 1, 2023, we are **decreasing** the Deep Data Storage pricing by **10%** - from **$0.50** / GB / day -> **$0.45** / GB / day!

We are also **increasing** the included (**free!**) Deep Data Storage Usage units for **Business+ Plan** customers from **10GB -> 20GB**.

_As always, we encourage developers to monitor their deep data usage (especially from Custom Entities), and ensure that unused collections are deleted (i.e. especially in cases where collections were temporary migration collections) - and that apps are making use of our TTL (Time-to-live) feature to automatically clean up temporary entities over time._

* * *

## New Bulk+ (Pre-purchase) Plans

Finally, brainCloud is introducing four (4) new plans for our highest-volume customers.

These plans allow customers to pre-buy a large quantity of API Requests for a discount - with additional savings on _Deep Data Storage_, _File Transfers_, and _Dormant User Accounts_.

Note that as these are _pre-purchase_ plans; customers are charged the _live fee_ amount at the _beginning_ of the month - and pay for _usage_ for the period at the _end_ of the month as usual. This differs from our regular plans, where all charges are incurred at the end of the month.

:::caution API Savings
_API savings are stated in comparison to the cost of the equivalent number of API calls using the Business Plus plan._
:::

The new plans are:

- **Bulk+ 100M** ($955 / month)
    - Includes **100** **Million** API calls at a savings of **$75**. Additional API calls start at **$9.50** / M.
    - File transfers discounted **3%** to **$0.145** / GB, and free transfers bumped up to **100** GB.
    - Deep Data Storage discounted **7%** to **$0.42** / GB / day, and free storage units bumped up to **50** GB.
    - Dormant User pricing discounted **5%** to **$71.00** / Million

- **Bulk+ 250M** ($2,205 / month)
    - Includes **250** **Million** API calls at a savings of **$250**. Additional API calls start at **$9.25** / M.
    - File transfers discounted **7%** to **$0.14** / GB, and free transfers bumped up to **250** GB.
    - Deep Data Storage discounted **13%** to **$0.39** / GB / day, and free storage units bumped up to **100** GB.
    - Dormant User pricing discounted **10%** to **$67.50** / Million.

- **Bulk+ 500M** ($4,115 / month)
    - Includes **500** **Million** API calls at a savings of **$650**. Additional API calls start at **$9.00** / M.
    - File transfers discounted **13%** to **$0.13** / GB, and free transfers bumped up to **500** GB.
    - Deep Data Storage discounted **24%** to **$0.34** / GB / day, and free storage units bumped up to **200** GB.
    - Dormant User pricing discounted **15%** to **$64.00** / Million

- **Bulk+ 1B** ($7,705 / month)
    - Includes **1 Billion** API calls at a savings of **$1,500**. Additional API calls start at **$8.50** / M.
    - File transfers discounted **20%** to **$0.12** / GB, and free transfers bumped up to **1000** GB.
    - Deep Data Storage discounted **33%** to **$0.30** / GB / day, and free storage units bumped up to **400** GB.
    - Dormant User pricing discounted **20%** to **$60.00** / Million.

Full specifics for the new plans will be posted to [getbraincloud.com](http://getbraincloud.com/) in early 2023.

These new plans will become available in time for the March 2023 billing cycle - and depending upon interest - potentially as early as January 2023. Note that when these plans become available, they will include all the pricing changes discussed above (even if they are released before the February billing cycle).

Feel free to reach out to support if you have further questions about these plans.
