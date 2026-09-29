# Campaign

**Campaign** is a LiveOps service that enables no-code A/B testing and feature flagging. Game operators can create time-bounded campaigns that modify game behavior for targeted player segments - without deploying new code.

### How It Works

A **Campaign** defines:
- **Schedule** — a `startAt` / `endAt` window
- **Trigger** — evaluated on `LOGIN` or `REGISTRATION`
- **Target** — either `ALL` players or a specific player `SEGMENT`
- **Scenarios** — traffic-split experiment groups (e.g. control vs. variants), each with configurable **overrides**

Each scenario can override **Global Properties**, **Cash Product prices**, and **Item/Bundle definitions**. The control scenario (code `"_"`) always has empty overrides — it represents the baseline experience.

Players are enrolled on their first qualifying login/registration during the campaign window and are assigned to a scenario based on weighted distribution. Participation metrics (login count, time played, purchases, spend) are tracked automatically.

### Scenario Weights (Traffic %)

You control traffic allocation by setting a **weight** (0–100) for each scenario. Weights are integers and **must sum to 100**.

**Example — 50/25/25 split:**

| Scenario | Weight | Traffic |
|---|---|---|
| `"_"` (control — no changes) | 50 | 50% |
| `"A"` (double coins) | 25 | 25% |
| `"B"` (half-price sale) | 25 | 25% |

```json
{
  "campaignCode": "holiday2026",
  "version": 3,
  "scenarios": [
    { "scenarioCode": "_", "weight": 50 },
    { "scenarioCode": "A", "weight": 25 },
    { "scenarioCode": "B", "weight": 25 }
  ]
}
```

**Validation rules:**
- The control scenario `"_"` must always be present
- All referenced scenarios must already exist in the campaign
- Weights must sum to exactly 100

**Default behavior:**
- **On campaign create** — only `"_"` exists with weight 100 (all traffic sees baseline)
- **When adding a new scenario** — its weight starts at **0** until you redistribute via [SysUpdateCampaignScenarioWeights](/api/capi/campaign/sysupdatecampaignscenarioweights)
- **When deleting a scenario** — its weight is automatically reassigned to `"_"` (control absorbs freed traffic)

### The Control Scenario (`"_"`)

Every campaign auto-creates a control scenario with **no overrides** — it is the scientific control group.

Key facts:
- **Auto-created** when the campaign is created — you never create it manually
- **Cannot be deleted** independently — you must delete the entire campaign
- **Required by validation** — every campaign must include `"_"` with a weight
- **Absorbs freed weight** — when a variant scenario is deleted, its traffic share rolls back to control

The control scenario is what you measure your variants against. If variant `"A"` drives 20% more purchases than `"_"`, you know the change works.

### API Summary

- [GetMyCampaigns](/api/capi/campaign/getmycampaigns) - Returns the list of campaigns the current player is participating in, including their assigned scenario and campaign details.
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

<DocCardList />
