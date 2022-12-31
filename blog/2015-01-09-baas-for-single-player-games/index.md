---
title: "BaaS for Single-Player Games"
date: "2015-01-09"
authors: paul
tags: 
  - "blog"
coverImage: "baas_for_sp.png"
---

## BaaS for Single-Player Games

An interesting question was put to me today:

_"Would it make sense to cloud-enable an existing, successf__ul, single-player mobile game?"_

My gut reaction was "**probably not**".  We know that the sweet spot for our Backend-as-a-Service is with _social and multiplayer games_, where a back-end is pretty much required. For those customers, pitching brainCloud is simply a question of Build vs. Buy.

That said, brainCloud offers a \*lot\* more than just multiplayer and social features - features that greatly aid in the management and monetization of any free-to-play game...  so lets dig deeper and do the full analysis.

* * *

 

## Background

First, a bit of background on the game in question:

- It's a freemium mobile game on **iOS** and **Android**
- The game is successful, and doing roughly 50K DAU, with about $0.02 ARPDAU
- Monetization is via in-app-purchases for speeding up the accrual of key stats and in-game currencies - progressing the meta-game
- There are no social features - no leaderboards, etc.
- The game is integrated with no cloud tech, other than analytics and some advertising - so no cloud saves, etc...
- It's a very small team - 1-3 devs really - so time is money

So - what benefits cloud features have to offer a game like this?  And do the benefits out-weigh the impact of adding the new monthly cloud service costs?

It's easy to argue that their player base will grow and become more engaged if you add cloud saves (so players can play across devices), social leaderboards (to compete against friends), published achievements, player vs. player challenges, etc...  but it's impossible to predict (or later prove) what the monetary impact of those incremental improvements might be...  \[plus, in this case there's an existing product and customer base - so greatly evolving the game storage and socialization strategies might be disruptive\].

Instead - lets take this from a purely monetization perspective.  One of the key focuses of brainCloud is not just providing the bread-and-butter of cloud tech - but also providing a platform that allows you to really increase the monetization of free-to-play games.

So - focusing just on the freemium monetization features - what minimal integration efforts would result in maximum return for the game?

The key features I'd suggest are:

1. **IAP Validation** - brainCloud provides server-side receipt validation, which eliminates IAP piracy, resulting in a boost to IAP sales.  Let's be conservative and predict a **5% boost** to IAP revenue as a result.  \[For some background, see this [GamaSutra article](http://www.gamasutra.com/blogs/AaronIsaksen/20121213/183519/Piracy_Tracking_for_InApp_Purchases.php) regarding IAP piracy.\]
2. **Scheduled Promotions** - brainCloud provides certralized coordination of pricing and promotions, across platforms.  And brainCloud supports scheduling of promotions - and automated sending of **push notifications** to inform the user base of the promotions as they happen.  Sure this is stuff a product manager can coordinate manually - but when you're a small company, you tend to focus on the new products and leave the old ones to fend for themselves.  It's fair to expect say **2.5% boost** from allowing brainCloud to do this for you.
3. **Automated \[Targeted\] Promotions** - finally, brainCloud allows you to aim targeted promotions and dynamic player segments.  This means, you can define a player segment for "VIPs that are leaving the game" - and hit them with a special promotion to get them to stay.  Given that whales are responsible for 80% of revenue for most games, extending that stay should be easily worth another **5% boost**.

It would only take a week or two to add these features to the game (plus a bit of testing of course).

 

* * *

 

## The Math

The game is currently bringing in about $30K USD per month (50,000 DAU x 0.02 ARPDAU x 30 days).  A 12.5% increase on the monetization results in an additional $3,750 USD per month.

But...  now there are \[brainCloud\] server costs - so we've got to factor that in.

Looking closely at [brainCloud pricing](http://getbraincloud.com/pricing/), you can see that 50K users is estimated at about $1600 USD per month - which seems pretty reasonable given the benefit.

But wait, that's assuming 100 brainCloud API calls per DAU - if the game is only using brainCloud for monetizaiton, it's API usage will be way, way down - we're probably talking 5-10 API calls per DAU (and that's assuming players are playing multiple sessions a day).

Lets say it's 10 API calls per DAU.  In a month, that would be only 10 x 50,000 x 30 = 15M calls - which is actually only $150 / month\*.  Talk about a bargain! :)

_\* and that's before the early adopter discounts!_

* * *

 

## The Results

And, the moral of the story is, _there's always room for increased monetization_.

Our estimates are that for a cost of 10 days of integration, plus $150 monthly for brainCloud, the developer will see a 12.5% increase in sales, which in this case is a monthly increase of almost $3600 USD per month.

Even if the increase were over-estimated by a factor of 10x it would still be worth it in the long term...

Cool.

 

* * *

## One Final Note

This pricing analysis points out one of the greatest aspects of the brainCloud pricing model - you just pay for the amount of the service you use (in millions of API calls), not for the amount of the service that the provider fears you \*might\* use.

**Utilizing these same features from competing platforms at 50K DAU could cost as much as $3000 / month!**

_Makes brainCloud seem like quite the deal, doesn't it? :)_

\[otw\_shortcode\_button href="https://portal.braincloudservers.com/signup" size="large" icon\_position="left" shape="radius"\]Sign Up For Free\[/otw\_shortcode\_button\]
