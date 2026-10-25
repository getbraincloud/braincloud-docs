# SysUpdateCampaignScenarioWeights

Sets the traffic split between a campaign's scenarios. The list you pass **replaces** the current weight distribution. The campaign must not have ended.

The list must include the control scenario (`_`), every scenario in it must already exist, and the weights must be integers that add up to exactly 100. A scenario you leave out gets no traffic.

<PartialServop service_name="campaign" operation_name="SYS_UPDATE_CAMPAIGN_SCENARIO_WEIGHTS" />

## Method Parameters

| Parameter    | Description                                                                                   |
| ------------ | --------------------------------------------------------------------------------------------- |
| campaignCode | The campaign code whose scenario weights are being updated.                                   |
| version      | Version of the campaign being updated. Pass `-1` to update regardless of the current version. |
| scenarios    | Array of objects, each with a `scenarioCode` (string) and a `weight` (integer, 0–100).        |

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
var scenarios = [
    {
        "scenarioCode": "_",
        "weight": 30
    },
    {
        "scenarioCode": "A",
        "weight": 35
    },
    {
        "scenarioCode": "B",
        "weight": 35
    }
];
var campaignProxy = bridge.getCampaignServiceProxy();

var postResult = campaignProxy.sysUpdateCampaignScenarioWeights(campaignCode, version, scenarios);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service": "campaign",
    "operation": "SYS_UPDATE_CAMPAIGN_SCENARIO_WEIGHTS",
    "data": {
        "campaignCode": "SUMMER2026",
        "version": -1,
        "scenarios": [
            {
                "scenarioCode": "_",
                "weight": 30
            },
            {
                "scenarioCode": "A",
                "weight": 35
            },
            {
                "scenarioCode": "B",
                "weight": 35
            }
        ]
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
        "scenarios": [
            {
                "scenarioCode": "_",
                "weight": 30
            },
            {
                "scenarioCode": "A",
                "weight": 35
            },
            {
                "scenarioCode": "B",
                "weight": 35
            }
        ],
        "version": 3,
        "updatedAt": 1811732400000
    },
    "status": 200
}
```

</details>

The returned `version` is the campaign's new version after the update.

<details>
<summary>Common Error Codes</summary>

### Status Codes

| Code  | Name                                  | Description                                                                                                                |
| ----- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 40345 | MISSING_RECORD                        | No campaign exists for the specified `campaignCode`.                                                                       |
| 40345 | MISSING_RECORD                        | No scenario exists for the specified `campaignCode` and `scenarioCode`.                                                    |
| 40001 | INVALID_REQUEST                       | The campaign has ended, the control scenario (`_`) is missing from `scenarios`, or the weights do not add up to 100.       |
| 40332 | UPDATE_FAILED                         | The weights could not be saved. This includes the case where `version` no longer matches the campaign — re-read and retry. |
| 40616 | CLOUD_CODE_ONLY_METHOD                | The method was called from a client. It can only be called from Cloud Code or S2S.                                         |
| 40731 | FEATURE_NOT_SUPPORTED_BY_BILLING_PLAN | Billing plan does not include the Campaign feature. Requires a plan that includes Enterprise features.                     |

</details>
