# SysDeleteCampaign

Deletes a campaign, along with all of its scenarios, player participation records and collected metrics. This cannot be undone.

If the campaign is in progress (enabled and within its `startAt`/`endAt` window) and has an active A/B split — that is, the control scenario does not hold 100% of the weight — you must pass `force` as `true` to delete it.

<PartialServop service_name="campaign" operation_name="SYS_DELETE_CAMPAIGN" />

## Method Parameters

| Parameter    | Description                                                                                                                      |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| campaignCode | The campaign code to delete.                                                                                                     |
| version      | Version of the campaign being deleted. Pass `-1` to delete regardless of the current version.                                    |
| force        | If `true`, allows deleting an in-progress campaign whose control scenario does not hold 100% of the weight. Defaults to `false`. |

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
var force = false;
var campaignProxy = bridge.getCampaignServiceProxy();

var postResult = campaignProxy.sysDeleteCampaign(campaignCode, version, force);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service": "campaign",
    "operation": "SYS_DELETE_CAMPAIGN",
    "data": {
        "campaignCode": "SUMMER2026",
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
        "campaignCode": "SUMMER2026"
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
| 40345 | MISSING_RECORD                        | No campaign exists for the specified `campaignCode`.                                                        |
| 41062 | CAMPAIGN_VERSION_MISMATCH             | The specified `version` no longer matches the campaign — it was updated by someone else. Re-read and retry. |
| 41054 | CAMPAIGN_UPDATE_ERROR                 | The campaign is in progress with active scenario weight allocations. Pass `force` as `true` to delete it.   |
| 40616 | CLOUD_CODE_ONLY_METHOD                | The method was called from a client. It can only be called from Cloud Code or S2S.                          |
| 40731 | FEATURE_NOT_SUPPORTED_BY_BILLING_PLAN | Billing plan does not include the Campaign feature. Requires a plan that includes Enterprise features.      |

</details>
