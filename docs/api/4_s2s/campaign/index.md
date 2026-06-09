# Campaign

**Campaign** is a LiveOps service that enables no-code A/B testing and feature flagging. Game operators can create time-bounded campaigns that modify game behavior for targeted player segments — without deploying new code.

### API Summary

- [SysTriggerCampaignForUser](/api/capi/campaign/systriggercampaignforuser) - Triggers a campaign scenario for a specific player, bypassing normal eligibility constraints. Player must be flagged as a tester.
- [SysRemoveCampaignForUser](/api/capi/campaign/sysremovecampaignforuser) - Removes a player's participation in a specific campaign.
- [SysRemoveAllCampaignsForUser](/api/capi/campaign/sysremoveallcampaignsforuser) - Removes a player's participation in all campaigns.

:::tip
All client APIs whose names begin with **"Sys"** are also available to S2S.
For the usages of the S2S campaign APIs, refer to the brainCloud client [campaign](/api/capi/campaign) APIs.
:::

<DocCardList />
