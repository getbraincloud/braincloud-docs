# SysReadCampaign

Reads a campaign by campaign code and returns the full campaign configuration. Optionally includes the full configuration of every scenario in the campaign.

<PartialServop service_name="campaign" operation_name="SYS_READ_CAMPAIGN" />

## Method Parameters

| Parameter              | Description                                                                                                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| campaignCode           | The campaign code to read.                                                                                                                                                     |
| includeScenarioDetails | If `true`, the response includes a `scenarioDetails` array with the full configuration of every scenario in the campaign, including the control scenario. Defaults to `false`. |

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
var includeScenarioDetails = true;
var campaignProxy = bridge.getCampaignServiceProxy();

var postResult = campaignProxy.sysReadCampaign(campaignCode, includeScenarioDetails);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service": "campaign",
    "operation": "SYS_READ_CAMPAIGN",
    "data": {
        "campaignCode": "SUMMER2026",
        "includeScenarioDetails": true
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
        "updatedAt": 1811721600000,
        "scenarioDetails": [
            {
                "campaignCode": "SUMMER2026",
                "scenarioCode": "_",
                "scenarioCampaignCode": "SUMMER2026:_",
                "description": "Control — no changes",
                "overrides": {
                    "globalProperties": {},
                    "cashProducts": {},
                    "items": {}
                },
                "scenarioJson": null,
                "version": 1,
                "createdAt": 1811721600000,
                "updatedAt": 1811721600000
            },
            {
                "campaignCode": "SUMMER2026",
                "scenarioCode": "A",
                "scenarioCampaignCode": "SUMMER2026:A",
                "description": "Beach",
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
                    "customField1": "beach"
                },
                "version": 1,
                "createdAt": 1811725200000,
                "updatedAt": 1811725200000
            }
        ]
    },
    "status": 200
}
```

</details>

<details>
<summary>Common Error Codes</summary>

### Status Codes

| Code  | Name                                  | Description                                                                                            |
| ----- | ------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 40345 | MISSING_RECORD                        | No campaign exists for the specified `campaignCode`.                                                   |
| 40616 | CLOUD_CODE_ONLY_METHOD                | The method was called from a client. It can only be called from Cloud Code or S2S.                     |
| 40731 | FEATURE_NOT_SUPPORTED_BY_BILLING_PLAN | Billing plan does not include the Campaign feature. Requires a plan that includes Enterprise features. |

</details>
