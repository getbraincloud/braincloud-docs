---
title: "(Minor) Release 3.2.5"
date: "2017-02-10"
tags: 
  - "release-history"
---

_What's smaller than a Release, but bigger than a Patch?_

# (Minor) Release 3.2.5

Release 3.2.5 includes some key new optimizations, fixes and even a few _minor_ features.

_Note - This is a minor update to [brainCloud 3.2](/apidocs/release-3-2-0/) - be sure to check it's [release notes](/apidocs/release-3-2-0/) for the full update on all the great 3.2 features._

 

## Optimizations

### _Faster User Entities_

We have significantly optimized the [UpdateSingleton()](/apidocs/apiref/#capi-entity-updatesingleton) API call by eliminating a superfluous read operation from most usage scenarios. To achieve this, we had to remove some unnecessary fields from the API's JSON return.

As per our custom we _by default_ preserve compatibility. To fully gain the advantages of this optimization, confirm that your app isn't making use of the `entityId`, `acl`, `createdAt` and `updatedAt` fields that were previously returned - and then go to the **Design | Core App Info | Advanced Settings** page, _Compatibility Settings_ section - and uncheck the _\[ \] Include entityId+ in UpdateSingleton Api output_ option.

 

### _**Fast Log Processing**_

The continued growth of our platform causes us to continually re-look at our architecture and framework to ensure that we get the best performance. In this last growth spurt, the logging system came under scrutiny as the source of some slowdowns. We've made some incremental changes to improve this - improved batching of writes, and capping the amount of request data logged for some API calls. We have plans to do more in the future.

 

### **_Faster Segment-based Push Notifications_**

Our User Segments feature is very useful for targeting push notifications - and some of you are taking great advantage of that, sending notifications to millions of customers daily. That said, not every user enables push notifications - and our segments weren't recognizing that before.

To address this, we've added a new _Push Enabled_ _Segment Criteria_.  If you configure this criteria for a _segment_, it will ensure that all members actually have push notification tokens registered. That way brainCloud isn't wasting time chugging through a million records, when only 300,000 of your users have enabled push.

Note - to take advantage of this performance optimization, go to **Design | Segmentation | Segments** page, select a segment, and add the **Push Enabled** critera to it.

 

## Minor Features

### _**Unsubscribe from Tournaments**_

Your users can now unsubscribe from tournament mailings. Required legally for many locales. Just include include the code `-unSubUrl-` in your SendGrid email template, and it will be replaced with a custom unsubscribe URL for that user.

 

### _**Client Kill Switch**_

This is more of a feature for us than you :).

Recently we've had a uptick in apps that _endlessly retry_ an operation if an error occurs. This is considered bad client behaviour. The brainCloud libraries themselves automatically retry on a timeout and/or communications failure (they will retry 3 times before returning an error to you). If, however, we receive a 4xx or 5xx error from the server, we return it to the app - because that means that the server is unable to perform the request as formed (possibly bad parameters, bad server data, etc.)

In these cases, if you retry the operation as before, there is a 99.999% chance you will get the same error! Implementing an endless retry in your code is akin to DDOS-ing our servers! And it costs you API calls to boot!

So - we've implemented a way to stop you! Now, if your client app sends in the same erroneous requests ten times in a row, the client will stop actually sending the requests, and return an immediate error to your client app. This \*might\* cause an endless loop in your app - so once again - don't do this! \[Note - most mobile OSes will kill the app as soon as the loop is discovered\]

 

### _**Slow Errors**_

Still on the topic of endless error loops (see above), brainCloud will now intentionally delay sending error responses back to the client. It's not a huge delay (1/2 a second) - but that can make a significant difference in the rate that a client can automatically retry - and thus the impact on our servers. This delay is applied _per bundle_, _only if all the messages in a bundle have errors_.

_Note - this delay is tuneable per app. If it is negatively impacting your app, reach out to us and we can adjust it._

 

## Miscellaneous Fixes

We've also include the following fixes:

- _**Merging with Peer Profiles**_ - we've fixed some issues associated with merging of profiles that are associated with Peer Profiles
- _**Reading Leaderboard Configs**_ - the read routines are now much-more robust
- _**Incoming Events**_ - we've removed the unnecessary gameId field from all incoming event calls. Note - for compatibility reasons, the change only takes effect if the _\[ \] Generate Legacy Event Ids_ compatibility flag is unset.
- _**Tournament Phases**_ - the display and configuration of Tournament Phases on the Leaderboard Config dialog and Leaderboard Monitoring pages has been improved.
- _**Facebook Purchases**_ - we fixed an issue associated with the latest changes to Facebook's Purchase APIs.
- _**Push Notification Tokens**_ - are now properly removed when players are deleted.
- _**Cloud Code Jobs**_ - scheduled jobs are now editable again via the **Monitoring | Global Monitoring | Job Queue** page.
