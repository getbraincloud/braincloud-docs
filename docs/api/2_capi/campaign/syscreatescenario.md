# SysCreateScenario

Creates a new variant scenario under the specified campaign. The scenario code is assigned automatically, using the next available letter from `A` to `Z`, so a campaign can have at most 26 variant scenarios. The campaign must not have ended.

A new scenario is not part of the campaign's traffic split until you give it a weight with [SysUpdateCampaignScenarioWeights](/api/capi/campaign/sysupdatecampaignscenarioweights) — until then, no players are assigned to it.

<PartialServop service_name="campaign" operation_name="SYS_CREATE_SCENARIO" />

## Method Parameters

| Parameter    | Description                                                                                                                                                                                                                      |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| campaignCode | The campaign code to create the scenario under.                                                                                                                                                                                  |
| configJson   | The scenario configuration. Supported fields are `description` (string), `overrides` (see below — at least one override is required) and `scenarioJson` (free-form custom payload returned to players assigned to the scenario). |

### Scenario Overrides

`overrides` holds up to three maps. Each one is keyed by the identifier of the thing being overridden, and every scenario must contain at least one override.

| Map              | Key                      | Value fields                                                                                                                                                                  |
| ---------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| globalProperties | Global property name     | `name` (must match the key) and `value` (string). The property must already exist, cannot be marked as secret, and the override value must differ from its current value.   |
| cashProducts     | Cash product `itemId`    | `itemId` (must match the key), `priceId` (the price point to use), `notForSale` (hide the product) and `showAsListPrice` (show the regular price as a strikethrough list price). |
| items            | Item definition `defId`  | `defId` (must match the key), `buyPrice` (map of currency to amount), `buyPriceDisabled` (item cannot be bought) and `showAsListPrice` (show the regular price as a list price). |

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
    }
};
var campaignProxy = bridge.getCampaignServiceProxy();

var postResult = campaignProxy.sysCreateScenario(campaignCode, configJson);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service": "campaign",
    "operation": "SYS_CREATE_SCENARIO",
    "data": {
        "campaignCode": "SUMMER2026",
        "configJson": {
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
    },
    "status": 200
}
```

</details>

<details>
<summary>Common Error Codes</summary>

### Status Codes

| Code  | Name                                  | Description                                                                                                                                                                                                               |
| ----- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 40345 | MISSING_RECORD                        | No campaign exists for the specified `campaignCode`.                                                                                                                                                                      |
| 40001 | INVALID_REQUEST                       | The campaign has ended and can no longer be modified.                                                                                                                                                                     |
| 40001 | INVALID_REQUEST                       | All 26 scenario codes (`A`–`Z`) are already in use for the campaign.                                                                                                                                                      |
| 40660 | INVALID_PARAMETER_VALUE               | The scenario configuration is invalid — for example, no overrides were specified, or an override refers to a global property, cash product or item that does not exist. The error message describes the specific problem. |
| 40616 | CLOUD_CODE_ONLY_METHOD                | The method was called from a client. It can only be called from Cloud Code or S2S.                                                                                                                                        |
| 40731 | FEATURE_NOT_SUPPORTED_BY_BILLING_PLAN | Billing plan does not include the Campaign feature. Requires a plan that includes Enterprise features.                                                                                                                    |

</details>
