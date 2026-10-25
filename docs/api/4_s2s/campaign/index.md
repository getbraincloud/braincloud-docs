# Campaign

**Campaign** is a LiveOps service that enables no-code A/B testing and feature flagging. Game operators can create time-bounded campaigns that modify game behavior for targeted player segments — without deploying new code.

### API Summary

- [SysTriggerCampaignForUser](/api/capi/campaign/systriggercampaignforuser) - Triggers a campaign scenario for a specific player, bypassing normal eligibility constraints. Player must be flagged as a tester.
- [SysRemoveCampaignForUser](/api/capi/campaign/sysremovecampaignforuser) - Removes a player's participation in a specific campaign.
- [SysRemoveAllCampaignsForUser](/api/capi/campaign/sysremoveallcampaignsforuser) - Removes a player's participation in all campaigns.
- [SysCreateCampaign](/api/capi/campaign/syscreatecampaign) - Creates a new campaign. A control scenario is automatically created alongside the campaign.
- [SysReadCampaign](/api/capi/campaign/sysreadcampaign) - Reads a campaign's full configuration, optionally including the details of every scenario.
- [SysUpdateCampaign](/api/capi/campaign/sysupdatecampaign) - Updates some or all of a campaign's configuration fields.
- [SysDeleteCampaign](/api/capi/campaign/sysdeletecampaign) - Deletes a campaign along with all of its scenarios, participation records and metrics.
- [SysEnableCampaign](/api/capi/campaign/sysenablecampaign) - Enables or disables a campaign without changing any other fields.
- [SysGetCampaignPage](/api/capi/campaign/sysgetcampaignpage) - Returns a filtered, sorted page of the app's campaigns.
- [SysGetCampaignPageOffset](/api/capi/campaign/sysgetcampaignpageoffset) - Returns another page of campaigns using the context from a previous page request.
- [SysCreateScenario](/api/capi/campaign/syscreatescenario) - Creates a new variant scenario under a campaign.
- [SysReadScenario](/api/capi/campaign/sysreadscenario) - Reads a campaign scenario's full configuration.
- [SysUpdateScenario](/api/capi/campaign/sysupdatescenario) - Updates some or all of a variant scenario's configuration fields.
- [SysDeleteScenario](/api/capi/campaign/sysdeletescenario) - Deletes a variant scenario and moves its weight to the control scenario.
- [SysUpdateCampaignScenarioWeights](/api/capi/campaign/sysupdatecampaignscenarioweights) - Sets the traffic split between a campaign's scenarios.
- [SysUpdateCampaignJson](/api/capi/campaign/sysupdatecampaignjson) - Updates only the free-form `campaignJson` custom payload on a campaign.
- [SysUpdateScenarioJson](/api/capi/campaign/sysupdatescenariojson) - Updates only the free-form `scenarioJson` custom payload on a campaign scenario.

:::tip
All client APIs whose names begin with **"Sys"** are also available to S2S.
For the usages of the S2S campaign APIs, refer to the brainCloud client [campaign](/api/capi/campaign) APIs.
:::

<DocCardList />
