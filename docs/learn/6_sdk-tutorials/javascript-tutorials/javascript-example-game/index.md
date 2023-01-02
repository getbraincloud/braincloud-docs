---
title: "Acey Deucey Example Game"
date: "2015-02-19"
---

**Acey Deucey**, the brainCloud JavaScript example game, helps you get acquainted with using the brainCloud JavaScript client library. The card game is fairly simple - players bet on whether the next card flipped will be between two faceup cards. The game result is calculated as follows:

- Win - if your card is between the two faceup cards
- Lose - if your card is outside the range of the two faceup cards
- Lose twice your bet - if your card is the same as either of the two faceup cards (hitting the post)

Further information about the card game can be found on [wikipedia](http://en.wikipedia.org/wiki/Acey_Deucey_%28card_game%29).

The example game shows off the following brainCloud features:

- Email authentication - the user must authenticate using the [BrainCloudAuthentication](/apidocs/apiref/#capi-auth "BrainCloudAuthentication") AuthenticateEmailPassword API.
- Email verification - the user is sent an email to verify that they own the account (although this does not prevent you from playing the game)
- Player Name - the user's name is stored using the [BrainCloudPlayerState](/apidocs/apiref/#capi-playerstate "BrainCloudPlayerState") UpdatePlayerName API.
- Player Statistics - the user's wins/losses are tracked using the [BrainCloudPlayerStatistics](/apidocs/apiref/#capi-playerstats "BrainCloudPlayerStatistics") APIs.
- Player Currency - the user's balance is tracked using the [BrainCloudProduct](/apidocs/apiref/#capi-product "BrainCloudProduct") currency APIs.
- Global Leaderboards - a list of the top Acey Deucey players using the [BrainCloudLeaderboard](/apidocs/apiref/#capi-leaderboard "BrainCloudSocialLeaderboard") APIs.

All of the code that interacts with the brainCloud js library is located in cardGame.js.

[Play the example Acey Deucey game](https://sharedprod.braincloudservers.com/s3/aceydeucey/cardGame.html)

[Download the source code](http://d28b58vufdqdih.cloudfront.net/brainCloudExamples/javascript/AceyDeucey-2.15.0_165261_fix.zip)

Check out Acey Deucey in action!  [Click to Play](https://sharedprod.braincloudservers.com/s3/aceydeucey/cardGame.html "Acey Deucey - JavaScript Example").

[![Acey Deucey](images/2015-03-02__11_21_AM.png)](https://sharedprod.braincloudservers.com/s3/aceydeucey/cardGame.html)
