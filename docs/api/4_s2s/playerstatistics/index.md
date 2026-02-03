# Player Statistics

The BrainCloudPlayerStatistics service is used for all user-scoped statistics operations, including Player Experience (XP).

User Stats must be pre-defined from the [Statistics Rules - User Statistics page](https://portal.braincloudservers.com/admin/dashboard#/development/stats-player)


### API Summary

* [SysResetExperiencePointsAndLevelForUser](/api/capi/playerstatistics/sysresetexperiencepointsandlevelforuser) - System call (cloud code only from client) to reset the experience points for the specified user to a given value. The user's experienceLevel will remain unchanged unless recalculateXPLevel is true, in which case the user's experienceLevel will also be reset to the applicable level (to be used with caution). If the XP points value to be reset is HIGHER than the user's current experiencePoints, an error is returned unless skipResetIfUserXPPointsAlreadyLower is true.

:::tip
All the client APIs that the names beigin with <strong>"Sys"</strong> <em>are</em> also available to S2S.
For the usages of the S2S report APIs (if they are not listed at this section),
refer to <%= data.branding.productName %> client [playerStatistics](/api/capi/playerStatistics) APIs.
:::

<DocCardList />