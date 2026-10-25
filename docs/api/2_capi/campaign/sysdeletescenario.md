# SysDeleteScenario

Deletes a variant scenario from a campaign, along with its player participation records and collected metrics. Any weight the scenario held is moved to the control scenario (`_`). The control scenario itself cannot be deleted — delete the campaign instead. The campaign must not have ended.

If the campaign is in progress (enabled and within its `startAt`/`endAt` window) and the scenario has a weight above 0, you must pass `force` as `true` to delete it.

<PartialServop service_name="campaign" operation_name="SYS_DELETE_SCENARIO" />

## Method Parameters

| Parameter    | Description                                                                                                             |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| campaignCode | The campaign code that owns the scenario.                                                                               |
| scenarioCode | The scenario code to delete — for example `A` or `B`. The control scenario (`_`) cannot be deleted.                     |
| version      | Version of the scenario being deleted. Pass `-1` to delete regardless of the current version.                           |
| force        | If `true`, allows deleting a scenario that has weight allocated while the campaign is in progress. Defaults to `false`. |

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
var force = false;
var campaignProxy = bridge.getCampaignServiceProxy();

var postResult = campaignProxy.sysDeleteScenario(campaignCode, scenarioCode, version, force);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service": "campaign",
    "operation": "SYS_DELETE_SCENARIO",
    "data": {
        "campaignCode": "SUMMER2026",
        "scenarioCode": "A",
        "version": -1,
        "force": false
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
        "scenarioCode": "A"
    },
    "status": 200
}
```

</details>

<details>
<summary>Common Error Codes</summary>

### Status Codes

| Code  | Name                                  | Description                                                                                                 |
| ----- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 40345 | MISSING_RECORD                        | No scenario exists for the specified `campaignCode` and `scenarioCode`.                                     |
| 40001 | INVALID_REQUEST                       | The campaign has ended and can no longer be modified.                                                       |
| 41063 | CAMPAIGN_SCENARIO_VERSION_MISMATCH    | The specified `version` no longer matches the scenario — it was updated by someone else. Re-read and retry. |
| 40660 | INVALID_PARAMETER_VALUE               | `scenarioCode` is the control scenario (`_`), which cannot be deleted.                                      |
| 41054 | CAMPAIGN_UPDATE_ERROR                 | The scenario has weight allocated while the campaign is in progress. Pass `force` as `true` to delete it.   |
| 40616 | CLOUD_CODE_ONLY_METHOD                | The method was called from a client. It can only be called from Cloud Code or S2S.                          |
| 40731 | FEATURE_NOT_SUPPORTED_BY_BILLING_PLAN | Billing plan does not include the Campaign feature. Requires a plan that includes Enterprise features.      |

</details>
