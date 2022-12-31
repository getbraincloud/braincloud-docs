---
title: "Release 2.17.0"
date: "2015-11-05"
tags: 
  - "release-history"
---

## ![BC_TwitterPromo_39](images/BC_TwitterPromo_39-1024x512.png)

## Release Highlights

Key features in this release:

- **Apple TV Support!** We've updated our libraries to support the new Apple TV. We can't wait to see what you build!
- **Unreal Blueprint Support!** It's been a long time coming, but we're pleased to finally announce the availability of our [Unreal plug-in](/apidocs/tutorials/unreal-tutorials/), with Blueprint, C++, and \[basic\] Online Subsystem support.
- **Redemption Codes** \- Planning to distribute individual codes to unlock characters / cards / etc. in your game? brainCloud's new redemption code system is exactly what you need. More info on the feature and it's API here.
- **Long-running Cloud Code** - we've added support for long-running Cloud Code scripts, and _adapted our Cloud Code billing strategy_ to better support this use case.  _More details below_.

Those are the biggies, but there are a bunch of other changes and improvements in this release. Read on.

 

## Portal Changes

Changes to the portal:

- **Improved Timezone support** - you can now specify the timezone used for viewing date+time data in the portal.  Note that the timezone will initially default to UTC - but it will remember what you set it to. Use the control in the top-right-hand corner of the portal to change the displayed timezone at any time.
- **Redemption Code Screens** - you'll find new screens for the Redemption Code feature under **Design | Marketplace**, **Global Monitoring** and **User Monitoring**.
- **Apple TV platform support** - you'll find Apple TV entries in **Design | Core App Info | Platforms**, as well as iTunes pricing component of **Design | Marketplace | Products**
- **Cloud Code Timeouts** - you can now set custom timeouts for your cloud code scripts from the **Design | Cloud Code | Edit Scripts** screen.
- **Updated API Usage page** - the **Reporting | API Usage** page has been updated to support the new cloud code billing formulas

 

## API Changes / Additions

Changes and additions to the API:

- **Redemption Code API** - added methods for Redeeming codes and retrieving the list of codes that have been redeemed by a user. The key client api methods are RedeemCode() and GetRedeemedCodes().
- **Push Notifications to Segments** - you can now programmatically (via the Server-to-Server API) send push notifications to all of the members a Segment.
- **Authentication Timeouts** - a new client method has been added to override the authentication timeout.
- **Retrieve Multiple Social Leaderboards** - building a game with a Candy Crush-style map? We've got a new API call that retrieves the top friend entries from up to 20 leaderboards that you specify. Great for putting profile pics of the lead scores onto your map! Check out GetMultiSocialLeaderboard().

We've also made two more **important changes to the Client Libraries**:

**_Error Handling Changes_**

We've made some enhancements to how the brainCloud Server and Client libraries work together to communicate error information.  Specifically, we've enhanced the _<statusMessage\>_ parameter for the error callback method to contain not only the textual message associated with the error, but actually the entire json result of the error.

This allows us to return more detailed error information, whose structure may vary on an operation by operation basis.  For example, if authentication fails because the client app's version is obsolete, the returned error information can include a link to the app in the appstore to use to perform the software upgrade.

If by any chance your client app was parsing the _<statusMessage\>_ - most apps weren't, because it wasn't very useful - you can still get the old data by referencing "statusMessage.statusMessage".  Or, you can turn this new behaviour off using the BrainCloudClient.SetOldStyleStatusMessageErrorCallback() method.

 

_**Unified Rewards Processing**_

In addition, we've unified our rewards processing to invoke a standard Rewards Handler whenever rewards (achievements, xp, milestones and quests) are awarded from one of the many APIs that do so (i.e. authenticate, increment stats, stats event, etc.).  You can now hook into that single handler to splash Achievement Unlocked onto the screen, Quest Completed!, etc...  instead of duplicating that functionality across multiple handlers.

As part of this change, brainCloud no longer _automatically_ triggers the associated local platform Achievement.  This platform-specific code was causing porting issues as we continue to expand the list of devices that we support. By centralizing the error handling it becomes very simple for the client apps to integrate what is in most cases a single line of code to trigger the local achievement.

To register for the new Rewards Callback, call RegisterRewardCallback() in your local library.

_\[Important note - the standard success and failure callbacks for the API calls still trigger. The rewards callback will trigger afterwards. Usage of the rewards callback is entirely optional.\]_

 

## Miscellaneous Changes / Fixes:

Additional improvements to this release:

- Fixed match expiry not working in certain situations
- Added missing reason codes to clients
- Improved timeout checking on errors in C++ client
- Improved handling of iTunes subscriptions
- Minor fix to version comparisons during authentication
- Universal authentication no longer accepts blank passwords!
- Removed entity sub-type from Player Monitor | Entities screen
- Improvements to french translations in our portal!
- Added Portal Warning for Microsoft Edge browser - stick with Chrome, Firefox or Safari for now
- Improved the links to API docs in the Explorer
- Miscellaneous documentation improvements

 

## Cloud Code Timeouts

When we first added Cloud Code support, we envisioned folks using it primarily for optimizing their client-server calls, and/or implementing sensitive logic on the server. For that sort of usage, our standard 10-second watchdog timer made sense.

But then we added support for Scheduled Cloud Code jobs - and you guys blew the doors off our Cloud Code usage scenarios! All of a sudden folks could schedule daily, hourly, etc. scripts - and some of these scripts were making hundreds and even thousands of API calls when they run.

It didn't take long before folks started to hit the 10-second watchdog timer, which kills your script if its still running when the timer expires. The watchdog is there to ensure that our server doesn't get hit by javascript coding errors (think "infinite loops!"). Needless to say, it's an important part of ensuring that our servers remain safe and reliable when executing custom scripts.

In the short-term we had to raise that 10-second timeout globally across the system to keep some of our leading clients apps running properly.  We're pleased to have our long-term solution in place now - which _allows developers to set a custom timeout value for their individual scripts_.  All new scripts will default to **10-seconds** - but you can individually raise the timeout as high as 60 seconds.  Note - if required, it's possible to raise it even higher. Just message our team to have them raise your limit.

\[caption id="attachment\_2197" align="alignnone" width="474"\][![Setting cloud code timeouts](images/Cloud_Code_Timeouts-1024x366.jpg)](/apidocs/wp-content/uploads/2015/11/Cloud_Code_Timeouts.jpg) Setting cloud code timeouts\[/caption\]

 

## Billing Changes

We've also tweaked how we count API calls to better reflect these new Cloud Code usage scenarios.

As you know, the power of cloud code is that combining a collection of API calls together into a single cloud code script performs better than making the calls individually from the client - and also taxes our servers less - so it's win:win. The new formulas for counting API calls under Cloud Code take this into account, and provide a fair balance of cost to the developer (you) and covering brainCloud server utilization (phew!).

The updated rules are as follows:

- Calling a cloud code script counts as 1 API call (same as today)
- The first three API calls from within an invoked cloud code script are **free**
- Any remaining calls from within cloud scripts are discounted to **1/2 an API call**

If your app makes moderate use of cloud scripts, using them to string together common server requests (e.g. making a combined call to post a score, update player stats, and update a user entity describing the player's progress) - _this pricing update likely doesn't affect you at all_.  **This includes the great majority of our customers today.**

This new strategy allows our customers the flexibility of running much more ambitious Cloud Code scripts - at a greatly reduced cost per API call invoked.

If you have any questions or concerns, don't hesitate to contact us through the support messaging system.
