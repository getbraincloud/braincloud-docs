# Player Statistics




The BrainCloudPlayerStatistics service is used for all user-scoped statistics operations, including Player Experience (XP).

User Stats must be pre-defined from the [Statistics Rules - User Statistics page](https://portal.braincloudservers.com/admin/dashboard#/development/stats-player)
of the <%= data.branding.productName %> portal.  If instead you need to create them dynamically at runtime, you can enable the Generate User Statistic Rule Enabled setting on the
[Advanced Settings page](https://portal.braincloudservers.com/admin/dashboard#/development/core-settings-advanced-settings) of your app in the <%= data.branding.productName %> portal.


### API Summary

The following operations are for user statistics:

* [ReadAllUserStats](/api/capi/playerstatistics/readalluserstats) - returns the complete list of user stats
* [ReadUserStatsSubset](/api/capi/playerstatistics/readuserstatssubset) - returns a specified stats to the client
* [ReadUserStatsForCategory](/api/capi/playerstatistics/readuserstatsforcategory) - returns the specified category of stats to the client
* [IncrementUserStats](/api/capi/playerstatistics/incrementuserstats) - perform increment/decrement operations on the statistics
* [ProcessStatistics](/api/capi/playerstatistics/processstatistics) - perform operations on the statistics according to the [stats grammar](/api/appendix/statisticsgrammar).
* [ResetAllUserStats](/api/capi/playerstatistics/resetalluserstats) - resets all user statistics to their initial values (as defined by their rules).  Useful for debugging.

The following operations are specific to the XP system:

* [IncrementExperiencePoints](/api/capi/playerstatistics/incrementexperiencepoints) – award XP to the user
* [GetNextExperienceLevel](/api/capi/playerstatistics/getnextexperiencelevel) – returns information about the next experience level, including associated rewards
* [SetExperiencePoints](/api/capi/playerstatistics/setexperiencepoints) - used to specifically set XP (useful for debugging).  Does not generate any associated rewards for levelling-up
* [SysResetExperiencePointsAndLevel](/api/capi/playerstatistics/sysresetexperiencepointsandlevel) - System call (cloud code only if from client) to reset the experience points for the session user to a given value. The user's experienceLevel will remain unchanged unless recalculateXPLevel is true, in which case the user's experienceLevel will also be reset to the applicable level (to be used with caution). If the XP points value to be reset is HIGHER than the user's current experiencePoints, an error is returned unless skipResetIfUserXPPointsAlreadyLower is true.
* [SysResetExperiencePointsAndLevelForUser](/api/capi/playerstatistics/sysresetexperiencepointsandlevelforuser) - System call (cloud code only from client) to reset the experience points for the specified user to a given value. The user's experienceLevel will remain unchanged unless recalculateXPLevel is true, in which case the user's experienceLevel will also be reset to the applicable level (to be used with caution). If the XP points value to be reset is HIGHER than the user's current experiencePoints, an error is returned unless skipResetIfUserXPPointsAlreadyLower is true.



<DocCardList />