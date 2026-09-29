# SysCreateCampaign

Creates a new campaign. The campaign code must be unique for the app. The control scenario (`"_"`) is created automatically alongside the campaign with a weight of 100, so all traffic sees the baseline experience until you add variant scenarios and redistribute the weights.

New campaigns are created **disabled** by default. Pass `"enabled": true` in `configJson` to activate the campaign immediately.

<PartialServop service_name="campaign" operation_name="SYS_CREATE_CAMPAIGN" />

## Method Parameters

| Parameter    | Description                                                                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| campaignCode | Unique code for the new campaign. Must be 1–15 characters, using only uppercase letters, digits, underscores (`_`) and hyphens (`-`).        |
| configJson   | The campaign configuration. See the table below for the supported fields. `scenarios` cannot be specified — the control scenario is created automatically. |

### configJson Fields

| Field        | Required | Description                                                                                                                                              |
| ------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name         | Yes      | Display name of the campaign.                                                                                                                            |
| startAt      | Yes      | Start of the campaign window, in UTC epoch milliseconds. Must be before `endAt`.                                                                         |
| endAt        | Yes      | End of the campaign window, in UTC epoch milliseconds. Cannot be in the past. The campaign duration cannot exceed the app's maximum campaign length (90 days by default). |
| trigger      | Yes      | When players are evaluated for enrollment: `LOGIN` (every login during the campaign window) or `REGISTRATION` (first registration only).               |
| target       | Yes      | Which players are eligible. `{ "type": "ALL" }` targets all players. `{ "type": "SEGMENT", "segmentCode": "..." }` targets a specific player segment, which must already exist. |
| purpose      | No       | A description of what the campaign is evaluating.                                                                                                        |
| category     | No       | Free-form category used to organize campaigns.                                                                                                           |
| enabled      | No       | Whether the campaign is active. Defaults to `false`.                                                                                                     |
| campaignJson | No       | Free-form custom payload returned to every player enrolled in the campaign. Maximum serialized size is governed by an application property (50 KB by default). |
| abGoalType   | No       | The overall goal of the A/B test. One of `revenue`, `engagement`, `retention` or `conversion`.                                                          |
| abConfidence | No       | Confidence level used for A/B significance testing. One of `80`, `85`, `90`, `95` or `99`. Defaults to `95` when not set.                               |
| notes        | No       | Developer assessment notes (markdown). Maximum 16,384 characters.                                                                                       |

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
var configJson = {
    "name": "Summer 2026",
    "purpose": "Evaluating impact of themes and summer sale on spenders",
    "trigger": "LOGIN",
    "startAt": 1811808000000,
    "endAt": 1814227200000,
    "target": {
        "type": "SEGMENT",
        "segmentCode": "spenders"
    },
    "campaignJson": {
        "customFieldA": "summer",
        "customFieldB": 1,
        "customFieldC": true
    },
    "abGoalType": "revenue",
    "enabled": false
};
var campaignProxy = bridge.getCampaignServiceProxy();

var postResult = campaignProxy.sysCreateCampaign(campaignCode, configJson);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service": "campaign",
    "operation": "SYS_CREATE_CAMPAIGN",
    "data": {
        "campaignCode": "SUMMER2026",
        "configJson": {
            "name": "Summer 2026",
            "purpose": "Evaluating impact of themes and summer sale on spenders",
            "trigger": "LOGIN",
            "startAt": 1811808000000,
            "endAt": 1814227200000,
            "target": {
                "type": "SEGMENT",
                "segmentCode": "spenders"
            },
            "campaignJson": {
                "customFieldA": "summer",
                "customFieldB": 1,
                "customFieldC": true
            },
            "abGoalType": "revenue",
            "enabled": false
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
        "name": "Summer 2026",
        "purpose": "Evaluating impact of themes and summer sale on spenders",
        "category": null,
        "enabled": false,
        "startAt": 1811808000000,
        "endAt": 1814227200000,
        "trigger": "LOGIN",
        "target": {
            "type": "SEGMENT",
            "segmentCode": "spenders"
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
        "version": 1,
        "createdAt": 1811721600000,
        "updatedAt": 1811721600000
    },
    "status": 200
}
```

</details>

<details>
<summary>Common Error Codes</summary>

### Status Codes

| Code  | Name                                  | Description                                                                                                                                                                                  |
| ----- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 40358 | MISSING_REQUIRED_PARAMETER            | `campaignCode` or `configJson` was not specified.                                                                                                                                           |
| 40660 | INVALID_PARAMETER_VALUE               | The campaign configuration is invalid — for example, a campaign with this `campaignCode` already exists, the code is badly formatted, a required field is missing, `startAt`/`endAt` are invalid, the target segment does not exist, or `scenarios` was specified. The error message describes the specific problem. |
| 41064 | CAMPAIGN_JSON_TOO_LARGE               | The serialized `campaignJson` exceeds the maximum size allowed for the app.                                                                                                                 |
| 40616 | CLOUD_CODE_ONLY_METHOD                | The method was called from a client. It can only be called from Cloud Code or S2S.                                                                                                          |
| 40731 | FEATURE_NOT_SUPPORTED_BY_BILLING_PLAN | Billing plan does not include the Campaign feature. Requires a plan that includes Enterprise features.                                                                                      |

</details>
