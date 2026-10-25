# SysUpdateCampaign

Updates an existing campaign. Only the fields present in `configJson` are changed — omitted fields keep their current values. The campaign must not have ended.

Scenario weights cannot be changed through this call; use [SysUpdateCampaignScenarioWeights](/api/capi/campaign/sysupdatecampaignscenarioweights) instead. If none of the supplied fields differ from the current values, the campaign is returned unchanged and its `version` is not incremented.

<PartialServop service_name="campaign" operation_name="SYS_UPDATE_CAMPAIGN" />

## Method Parameters

| Parameter    | Description                                                                                                                                                                                                                                                                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| campaignCode | The campaign code to update.                                                                                                                                                                                                                                                                                                                                             |
| version      | Version of the campaign being updated. Pass `-1` to update regardless of the current version.                                                                                                                                                                                                                                                                            |
| configJson   | Full or partial campaign configuration. Updatable fields are `name`, `purpose`, `category`, `enabled`, `startAt`, `endAt`, `trigger`, `target`, `campaignJson`, `abGoalType`, `abConfidence` and `notes` — see [SysCreateCampaign](/api/capi/campaign/syscreatecampaign) for their meaning and allowed values. `enabled`, `startAt` and `endAt` cannot be set to `null`. |

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
var campaignCode = "SUMMER2026";
var version = -1;
var configJson = {
    "name": "Summer Sale 2026",
    "purpose": "Evaluating impact of themes and summer sale",
    "target": {
        "type": "ALL"
    }
};
var campaignProxy = bridge.getCampaignServiceProxy();

var postResult = campaignProxy.sysUpdateCampaign(campaignCode, version, configJson);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service": "campaign",
    "operation": "SYS_UPDATE_CAMPAIGN",
    "data": {
        "campaignCode": "SUMMER2026",
        "version": -1,
        "configJson": {
            "name": "Summer Sale 2026",
            "purpose": "Evaluating impact of themes and summer sale",
            "target": {
                "type": "ALL"
            }
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
        "campaignCode": "SUMMER2026",
        "name": "Summer Sale 2026",
        "purpose": "Evaluating impact of themes and summer sale",
        "category": null,
        "enabled": false,
        "startAt": 1811808000000,
        "endAt": 1814227200000,
        "trigger": "LOGIN",
        "target": {
            "type": "ALL"
        },
        "scenarios": [
            {
                "scenarioCode": "_",
                "weight": 100
            }
        ],
        "campaignJson": {
            "customFieldA": "summer",
            "customFieldB": 1,
            "customFieldC": true
        },
        "abGoalType": "revenue",
        "abConfidence": null,
        "notes": null,
        "version": 2,
        "createdAt": 1811721600000,
        "updatedAt": 1811725200000
    },
    "status": 200
}
```

</details>

The returned `version` is the campaign's new version after the update. Feed it into your next call's `version` parameter if you want to detect a concurrent change rather than overwrite it.

<details>
<summary>Common Error Codes</summary>

### Status Codes

| Code  | Name                                  | Description                                                                                                                                                                                                          |
| ----- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 40345 | MISSING_RECORD                        | No campaign exists for the specified `campaignCode`.                                                                                                                                                                 |
| 40001 | INVALID_REQUEST                       | The campaign has ended and can no longer be modified.                                                                                                                                                                |
| 41062 | CAMPAIGN_VERSION_MISMATCH             | The specified `version` no longer matches the campaign — it was updated by someone else. Re-read and retry.                                                                                                          |
| 40660 | INVALID_PARAMETER_VALUE               | The updated configuration is invalid — for example, `startAt` is not before `endAt`, the target segment does not exist, or a non-nullable field was set to `null`. The error message describes the specific problem. |
| 41064 | CAMPAIGN_JSON_TOO_LARGE               | The serialized `campaignJson` exceeds the maximum size allowed for the app.                                                                                                                                          |
| 41054 | CAMPAIGN_UPDATE_ERROR                 | The campaign could not be updated.                                                                                                                                                                                   |
| 40616 | CLOUD_CODE_ONLY_METHOD                | The method was called from a client. It can only be called from Cloud Code or S2S.                                                                                                                                   |
| 40731 | FEATURE_NOT_SUPPORTED_BY_BILLING_PLAN | Billing plan does not include the Campaign feature. Requires a plan that includes Enterprise features.                                                                                                               |

</details>
