# Gamification
## Overview



<%= data.branding.productName %>'s Gamification features provide server-side support common metagame elements, including:

- Experience Points (XP) and Levels
- Achievements
- Milestones
- Quests
- Stats Events

These features build upon the Statistics APIs and a concept of Player Rewards.



### API Summary

### Milestone Management

_The Milestone Management APIs are available from cloud-code only._

* [SysCreateMilestone](/api/capi/gamification/syscreatemilestone)
* [SysDeleteMilestone](/api/capi/gamification/sysdeletemilestone)
* [SysReadMilestone](/api/capi/gamification/sysreadmilestone)
* [SysUpdateMilestone](/api/capi/gamification/sysupdatemilestone)
* [SysGetMilestonePage](/api/capi/gamification/sysgetmilestonepage)
* [SysGetMilestonePageOffset](/api/capi/gamification/sysgetmilestonepageoffset)

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

:::tip
All the client APIs that the names beigin with <strong>"Sys"</strong> <em>are</em> also available to S2S. 
For the usages of the S2S customEntity APIs (if they are not listed at this section),
refer to <%= data.branding.productName %> client [gamification](/api/capi/gamification) APIs.
:::

<DocCardList />