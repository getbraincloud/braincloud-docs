---
title: "brainCloud Pricing Update!"
date: "2014-12-01"
authors: paul
tags: 
  - "blog"
coverImage: "braincloud_a_backend_brain.png"
---

## brainCloud Pricing Update!

As you know, we are continually measuring, tweaking and improving the performance of brainCloud.

The good news is that the latest round of platform optimizations had a greater impact than expected - meaning we can handle even more users on our servers at lower cost.

The even better news is this means, effective immediately, we're adjusting our pricing tiers downward.

This is part of our ongoing pledge to align brainCloud pricing with our costs, to ensure we're offering you the most cost-effective solution possible.

[![braincloud_pricing](images/brainCloud_pricing.png)](images/brainCloud_pricing.png)

While delivering the good news, we thought we'd spend a moment to provide a bit more background on brainCloud's pricing model.

 

## API Usage - the brainCloud Pricing Model

brainCloud pricing is based on **API Usage** - which is the number of API calls (requests + responses) that your app makes to our servers.

We choose **API Usage** because:

- _Cost alignment_ - it aligns directly with our server costs
- _Cost transparancy_ - the costs are calculated without hidden assuptions (e.g. average user engagement, etc.)
- _Scalable by benefits_ - it allows customers to decide how much or how little of brainCloud to use, and pay accordingly

Of course, it does have the disadvantage that unlike DAU (Daily Active Users) or MAU (Monthy Active Users), API Usage is not a term that most developers and business people are used to talking in terms of.

 

## Estimating API usage

**Reporting API usage after-the-fact is straight forward; Estimating API usage ahead-of-time is tricky.**

brainCloud API usage is dependent upon:

- the type of app or game
- how much of the brainCloud feature set you're using
- the engagement of your game (length of play, # of sessions, etc.)

For shorthand, we can use the following formula:

**Estimated # API calls** = **<API calls per DAU\>** x **<avg DAU per day\>** x **30 days**

So - for example, if we were estimating the montly cost of a game with:

- 100 API calls / DAU (which is about our system average)
- 5000 daily active users (average)

it would total 15M API calls per month, which would cost $150 USD.

 

## Average API usage

The API Usage per DAU in brainCloud varies by app - but **averages ~100 API Calls per DAU.**

Some competitors quote an average of 200 or 300 API calls per DAU - there are 3 main reasons for this discrepancy:

1. **Designed for mobile (less chatty)** - Our API is optimized for mobile, and from the beginning has been designed to do more with fewer interactions.
2. **They are conservatively estimating cost** - for them to match up costs to revenues in their forecasts, they need to conservatively estimate how much server usage a player could cost.  It's human nature to therefore estimate high to ensure that costs are covered.  We have no need to do this since we charge for API usage itself
3. **We support lower usage scenarios** - Clients are free to use as much or as little of brainCloud. Want to use brainCloud for cloud saves only?  No problem.  brainCloud monetization features only? Go nuts - and pay less because you're utilizing our servers less!

In practice, we've had apps in our network use less than 10 transactions per DAU, and some use upwards of 200 API calls per DAU.  We've not yet had an app average greater than 300 API calls per DAU.

And note, brainCloud includes tools to help you assess and optimize your API Usage - to keep your costs (and our server usage) down.  Our costs go down, and your costs go down - **win:win!**

 

## Free during development

We hope this clears up any questions you may have about pricing in brainCloud.

**As always, brainCloud is free during development (up to 100 users), and if you sign up before March 6th, 2015, you lock in our special Early Adopter pricing until 2016!**

[otw\_shortcode\_button size="large" icon\_position="left" shape="square"]Sign Up For Free[/otw\_shortcode\_button]
