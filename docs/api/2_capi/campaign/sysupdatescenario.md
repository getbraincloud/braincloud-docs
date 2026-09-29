# SysUpdateScenario

Updates an existing variant scenario. Only the fields present in `configJson` are changed — omitted fields keep their current values. The control scenario (`_`) cannot be updated, and the campaign must not have ended.

Within `overrides`, each of `globalProperties`, `cashProducts` and `items` is handled separately: a map you include **replaces** that map entirely, and a map you omit is left unchanged. Pass `{}` to clear a map. The scenario must still contain at least one override after the update.

If none of the supplied fields differ from the current values, the scenario is returned unchanged and its `version` is not incremented.

<PartialServop service_name="campaign" operation_name="SYS_UPDATE_SCENARIO" />

## Method Parameters

| Parameter    | Description                                                                                                                                                                                                                                                                                                                                     |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| campaignCode | The campaign code that owns the scenario.                                                                                                                                                                                                                                                                                                       |
| scenarioCode | The scenario code to update — for example `A` or `B`. The control scenario (`_`) cannot be updated.                                                                                                                                                                                                                                             |
| version      | Version of the scenario being updated. Pass `-1` to update regardless of the current version.                                                                                                                                                                                                                                                   |
| configJson   | Full or partial scenario configuration. Updatable fields are `description`, `overrides` and `scenarioJson`. `overrides` and its `globalProperties`, `cashProducts` and `items` maps cannot be set to `null` — use `{}` to clear them. See [SysCreateScenario](/api/capi/campaign/syscreatescenario#scenario-overrides) for the override format. |

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
var scenarioCode = "A";
var version = -1;
var configJson = {
    "description": "Beach #1",
    "scenarioJson": {
        "customField1": "beach",
        "customField2": {
            "subtheme": "beachTheme"
        }
    }
};
var campaignProxy = bridge.getCampaignServiceProxy();

var postResult = campaignProxy.sysUpdateScenario(campaignCode, scenarioCode, version, configJson);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service": "campaign",
    "operation": "SYS_UPDATE_SCENARIO",
    "data": {
        "campaignCode": "SUMMER2026",
        "scenarioCode": "A",
        "version": -1,
        "configJson": {
            "description": "Beach #1",
            "scenarioJson": {
                "customField1": "beach",
                "customField2": {
                    "subtheme": "beachTheme"
                }
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
        "scenarioCode": "A",
        "scenarioCampaignCode": "SUMMER2026:A",
        "description": "Beach #1",
        "overrides": {
            "globalProperties": {
                "xpMultiplier": {
                    "name": "xpMultiplier",
                    "value": "2"
                },
                "ThemeJson": {
                    "name": "ThemeJson",
                    "value": "{\"season\":\"Summer\",\"extra\":\"Beach\"}"
                }
            },
            "cashProducts": {
                "coinBundle10": {
                    "itemId": "coinBundle10",
                    "notForSale": false,
                    "priceId": 1,
                    "showAsListPrice": false
                }
            },
            "items": {
                "beachHat": {
                    "defId": "beachHat",
                    "buyPriceDisabled": false,
                    "buyPrice": {
                        "coin": 200
                    },
                    "showAsListPrice": false
                },
                "summerHat": {
                    "defId": "summerHat",
                    "buyPriceDisabled": true,
                    "buyPrice": null,
                    "showAsListPrice": false
                }
            }
        },
        "scenarioJson": {
            "customField1": "beach",
            "customField2": {
                "subtheme": "beachTheme"
            }
        },
        "version": 2,
        "createdAt": 1811725200000,
        "updatedAt": 1811728800000
    },
    "status": 200
}
```

</details>

<details>
<summary>Common Error Codes</summary>

### Status Codes

| Code  | Name                                  | Description                                                                                                                                                                                                                                               |
| ----- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 40345 | MISSING_RECORD                        | No campaign exists for the specified `campaignCode`.                                                                                                                                                                                                      |
| 40345 | MISSING_RECORD                        | No scenario exists for the specified `campaignCode` and `scenarioCode`.                                                                                                                                                                                   |
| 40001 | INVALID_REQUEST                       | The campaign has ended and can no longer be modified.                                                                                                                                                                                                     |
| 41063 | CAMPAIGN_SCENARIO_VERSION_MISMATCH    | The specified `version` no longer matches the scenario — it was updated by someone else. Re-read and retry.                                                                                                                                               |
| 40660 | INVALID_PARAMETER_VALUE               | The update is invalid — for example, `scenarioCode` is the control scenario, a non-nullable field was set to `null`, no overrides would remain, or an override refers to something that does not exist. The error message describes the specific problem. |
| 41054 | CAMPAIGN_UPDATE_ERROR                 | The scenario could not be updated.                                                                                                                                                                                                                        |
| 40616 | CLOUD_CODE_ONLY_METHOD                | The method was called from a client. It can only be called from Cloud Code or S2S.                                                                                                                                                                        |
| 40731 | FEATURE_NOT_SUPPORTED_BY_BILLING_PLAN | Billing plan does not include the Campaign feature. Requires a plan that includes Enterprise features.                                                                                                                                                    |

</details>
