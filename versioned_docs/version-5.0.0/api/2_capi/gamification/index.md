# Gamification
## Overview



<%= data.branding.productName %>'s Gamification features provide server-side support common metagame elements, including:

- Experience Points (XP) and Levels
- Achievements
- Milestones
- Quests
- Stats Events

These features build upon the Statistics APIs and a concept of Player Rewards.

### Player Rewards

<%= data.branding.productName %> provides an ability to reward players for completing meta-goals: leveling up, completing a milestone and/or completing quests.  Rewards can consist of:

- Achievements
- Experience Points
- Currencies
- User Statistics
- Global Statistics

### XP Levels

<%= data.branding.productName %> can manage experience points (XP) and levels, and reward the player for levelling up.

A player's XP starts at 0, and is incremented using methods of the Player Statistics service. A list of player XP levels can be read from the client using [ReadXPLevelsMetaData](/api/capi/gamification/readxplevelsmetadata).

### Achievements

Achievements can be triggered manually, or as the result of player rewards. Achievements can be data-filled with the ids for platform achievements (on iOS, Steam, etc.) so that they may automatically be triggered in sync with <%= data.branding.productName %> achievements.

Achievements can be awarded directly using the [AwardAchievements](/api/capi/gamification/awardachievements) API.  There are also API calls for retrieving the full list of achievements, and the list of achievements that have already been awarded for the player.

### Milestones

Milestones are used to define conditions under which rewards are to be delivered.  Milestones must first be unlocked before they can be completed and then awarded.

![Milestones](@site/docs/img/api-img/milestone.png)

### Quests

Quests are essentially compound Milestones. The completion status of the Quest is derived from the completion status of the Tasks (i.e. embedded Milestones) that it is composed of.

![Quests](@site/docs/img/api-img/quest.png)


### API Summary

### General

* [ReadAllGamification](/api/capi/gamification/readallgamification)
* [ReadXpLevelsMetaData](/api/capi/gamification/readxplevelsmetadata)
* [UpdateRewards (CC Only)](/api/capi/gamification/updaterewards)

### Achievements

* [AwardAchievements](/api/capi/gamification/awardachievements)
* [ReadAchievements](/api/capi/gamification/readachievements)
* [ReadAchievedAchievements](/api/capi/gamification/readachievedachievements)

### Milestones

* [ReadMilestones](/api/capi/gamification/readmilestones)
* [ReadMilestonesByCategory](/api/capi/gamification/readmilestonesbycategory)
* [ReadInProgressMilestones](/api/capi/gamification/readinprogressmilestones)
* [ReadCompletedMilestones](/api/capi/gamification/readcompletedmilestones)

### Milestone Management

_The Milestone Management APIs are available from cloud-code only._

* [SysCreateMilestone](/api/capi/gamification/syscreatemilestone)
* [SysDeleteMilestone](/api/capi/gamification/sysdeletemilestone)
* [SysReadMilestone](/api/capi/gamification/sysreadmilestone)
* [SysUpdateMilestone](/api/capi/gamification/sysupdatemilestone)

* [SysGetMilestonePage](/api/capi/gamification/sysgetmilestonepage)
* [SysGetMilestonePageOffset](/api/capi/gamification/sysgetmilestonepageoffset)

### Quests

* [ReadQuests](/api/capi/gamification/readquests)
* [ReadQuestsByCategory](/api/capi/gamification/readquestsbycategory)
* [ReadQuestsWithStatus](/api/capi/gamification/readquestswithstatus)
* [ReadQuestsWithBasicPercentage](/api/capi/gamification/readquestswithbasicpercentage)
* [ReadQuestsWithComplexPercentage](/api/capi/gamification/readquestswithcomplexpercentage)
* [ReadNotStartedQuests](/api/capi/gamification/readnotstartedquests)
* [ReadInProgressQuests](/api/capi/gamification/readinprogressquests)
* [ReadCompletedQuests](/api/capi/gamification/readcompletedquests)

### Quest Management

_The Quest Management APIs are available from cloud-code only._

* [SysCreateQuest](/api/capi/gamification/syscreatequest)
* [SysDeleteQuest](/api/capi/gamification/sysdeletequest)
* [SysReadQuest](/api/capi/gamification/sysreadquest)
* [SysUpdateQuest](/api/capi/gamification/sysupdatequest)

* [SysAddQuestTask](/api/capi/gamification/sysaddquesttask)
* [SysDeleteQuestTask](/api/capi/gamification/sysdeletequesttask)
* [SysReorderQuestTasks](/api/capi/gamification/sysreorderquesttasks)
* [SysUpdateQuestTask](/api/capi/gamification/sysupdatequesttask)

* [SysGetQuestPage](/api/capi/gamification/sysgetquestpage)
* [SysGetQuestPageOffset](/api/capi/gamification/sysgetquestpageoffset)


### Resetting Milestone/Quest Status (useful when debugging)

_The Rest APIs are available from cloud-code only._

* [ResetMilestones](/api/capi/gamification/resetmilestones)
* [ResetQuests](/api/capi/gamification/resetquests)
* [ResetAllQuestsAndMilestones](/api/capi/gamification/resetallquestsandmilestones)




<DocCardList />