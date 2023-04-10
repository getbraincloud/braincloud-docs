---
title: "RTT CCx calculation fixes"
date: "2023-01-28"
authors: paul
tags: 
  - "release-history"
---

Hi folks,

We wanted to notify you that we have discovered (d'oh!) and fixed (yay!) an error with the RTT Concurrent Connection (i.e. CCx) statistics that brainCloud was collecting for billing purposes.

This error meant that we were undercharging for RTT utilization -- and the fix means that the under-charging will stop - and thus, the bills for heavy-usage RTT customers will increase slightly (boo!).

The good news is that we aren't looking to recoup the years of under-billing. And the better news is that RTT usage pricing is already (and remains) quite inexpensive - so the overall impact to an app's monthly brainCloud bill is quite small (if anything!):

- Apps whose usage is within the Free CCx counts of their plan won't see a change at all.
- For high-usage apps, the average impact is only about 2%.
- And of course app's that aren't using RTT are not affected at all.

Apologies for the error!

Paul.

\---

:::info More information about the defect:

As we were collecting CCx statistics from the multiple RTT Event Servers, we were mistakenly clobbering the server-specific values instead of aggregating them together. This meant that we were actually undercharging by a factor of 3... (i.e. charging only for _one_ server's worth of connections, while an app's connections are actually spread across _three_ servers).

Once again - apologies for the error.
:::