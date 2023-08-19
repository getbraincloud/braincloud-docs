# Player Statistics
## Overview



The BrainCloudPlayerStatistics service is used for all user-scoped statistics operations, including Player Experience (XP).

User Stats must be pre-defined from the [Statistics Rules - User Statistics page](https://portal.braincloudservers.com/admin/dashboard#/development/stats-player)
of the <%= data.branding.productName %> portal.  If instead you need to create them dynamically at runtime, you can enable the Generate User Statistic Rule Enabled setting on the
[Advanced Settings page](https://portal.braincloudservers.com/admin/dashboard#/development/core-settings-advanced-settings) of your app in the <%= data.branding.productName %> portal.


### API Summary

The following operations are for user statistics:

* [ReadAllUserStats](/api/capi/playerstats/readalluserstats) - returns the complete list of user stats
* [ReadUserStatsSubset](/api/capi/playerstats/readuserstatssubset) - returns a specified stats to the client
* [ReadUserStatsForCategory](/api/capi/playerstats/readuserstatsforcategory) - returns the specified category of stats to the client
* [IncrementUserStats](/api/capi/playerstats/incrementuserstats) - perform increment/decrement operations on the statistics
* [ProcessStatistics](/api/capi/playerstats/processstatistics) - perform operations on the statistics according to the [stats grammar](/api/appendix/statisticsgrammar).
* [ResetAllUserStats](/api/capi/playerstats/resetalluserstats) - resets all user statistics to their initial values (as defined by their rules).  Useful for debugging.

The following operations are specific to the XP system:

* [IncrementExperiencePoints](/api/capi/playerstats/incrementexperiencepoints) – award XP to the user
* [GetNextExperienceLevel](/api/capi/playerstats/getnextexperiencelevel) – returns information about the next experience level, including associated rewards
* [SetExperiencePoints](/api/capi/playerstats/setexperiencepoints) - used to specifically set XP (useful for debugging).  Does not generate any associated rewards for levelling-up



<DocCardList />