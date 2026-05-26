# Campaign

**Campaign** is a LiveOps service that enables no-code A/B testing and feature flagging. Game operators can create time-bounded campaigns that modify game behavior for targeted player segments — without deploying new code.

### How It Works

A **Campaign** defines:
- **Schedule** — a `startAt` / `endAt` window
- **Trigger** — evaluated on `LOGIN` or `REGISTRATION`
- **Target** — either `ALL` players or a specific player `SEGMENT`
- **Scenarios** — traffic-split experiment groups (e.g. control vs. variants), each with configurable **overrides**

Each scenario can override **Global Properties**, **Cash Product prices**, and **Item/Bundle definitions**. The control scenario (code `"_"`) always has empty overrides -- it represents the baseline experience.

Players are enrolled on their first qualifying login/registration during the campaign window and are assigned to a scenario based on weighted distribution. Participation metrics (login count, time played, purchases, spend) are tracked automatically.

### API Summary

### Campaign
* [GetMyCampaigns](/api/capi/campaign/getmycampaigns) - Returns the list of campaigns the current player is participating in, including their assigned scenario and campaign details.

<DocCardList />
