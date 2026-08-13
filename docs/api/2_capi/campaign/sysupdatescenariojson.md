# SysUpdateScenarioJson

Updates **only** the free-form `scenarioJson` custom payload on a campaign scenario. No other scenario field can be modified through this call — in particular the scenario's **overrides** (global properties, cash product prices, item definitions) are left untouched, as is its description.

The owning campaign must not have ended. The updated payload is picked up by already-authenticated players on their next [GetMyCampaigns](/api/capi/campaign/getmycampaigns) call — they do not need to re-authenticate.

<PartialServop service_name="campaign" operation_name="SYS_UPDATE_SCENARIO_JSON" />

## Method Parameters

| Parameter    | Description                                                                                                                                                                             |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| campaignCode | The campaign code that owns the scenario.                                                                                                                                               |
| scenarioCode | The scenario code whose `scenarioJson` is being updated. Pass `"_"` for the control scenario.                                                                                           |
| version      | Version of the scenario being updated. Pass `-1` to update regardless of the current version.                                                                                           |
| scenarioJson | The new `scenarioJson` custom payload. This **replaces** the existing payload entirely — it is not merged. Pass `null` to clear it. Oversized payloads are rejected; see the note below. |

:::info
`scenarioJson` is returned to every player assigned to this scenario, so keep it to the data your client actually needs. The maximum serialized size is governed by an application property — contact support if you need the limit adjusted.
:::

:::caution
`scenarioJson` is part of what distinguishes one variant from another. Changing it while the campaign is running changes what that variant means, but the campaign's accumulated A/B statistics continue to pool participants from before and after the change as a single group. Prefer to finalize variant payloads before the campaign starts, and treat mid-flight edits as something to note when interpreting the results.
:::

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Obj-C">
```

```objectivec
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="lua" label="Roblox">
```

```lua
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="gdscript" label="GDScript">
```

```gdscript
N/A
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var campaignCode = "CHRISTMAS2026";
var scenarioCode = "a";
var version = -1;
var scenarioJson = {
    "headline": "50% off everything!",
    "bannerColor": "red"
};
var campaignProxy = bridge.getCampaignServiceProxy();

var postResult = campaignProxy.sysUpdateScenarioJson(campaignCode, scenarioCode, version, scenarioJson);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service": "campaign",
    "operation": "SYS_UPDATE_SCENARIO_JSON",
    "data": {
        "campaignCode": "CHRISTMAS2026",
        "scenarioCode": "a",
        "version": -1,
        "scenarioJson": {
            "headline": "50% off everything!",
            "bannerColor": "red"
        }
    }
}
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

<details>
<summary>JSON Response</summary>

```json
{
    "data": {
        "campaignCode": "CHRISTMAS2026",
        "scenarioCode": "a",
        "version": 2,
        "updatedAt": 1786737600000
    },
    "status": 200
}
```

</details>

The returned `version` is the scenario's new version after the update. Feed it into your next call's `version` parameter if you want to detect a concurrent change rather than overwrite it.

<details>
<summary>Common Error Codes</summary>

### Status Codes

| Code  | Name                                  | Description                                                                                                 |
| ----- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| 40345 | MISSING_RECORD                        | No campaign exists for the specified `campaignCode`, or no scenario exists for the specified `scenarioCode`. |
| 40001 | INVALID_REQUEST                       | The owning campaign has ended and can no longer be modified.                                                 |
| 41063 | CAMPAIGN_SCENARIO_VERSION_MISMATCH    | The specified `version` no longer matches the scenario — it was updated by someone else. Re-read and retry.  |
| 41064 | CAMPAIGN_JSON_TOO_LARGE               | The serialized `scenarioJson` exceeds the maximum size allowed for the app.                                  |
| 40731 | FEATURE_NOT_SUPPORTED_BY_BILLING_PLAN | Billing plan does not include the Campaign feature.                                                          |

</details>
