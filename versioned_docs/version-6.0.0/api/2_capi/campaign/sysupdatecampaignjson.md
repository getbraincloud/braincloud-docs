# SysUpdateCampaignJson

Updates **only** the free-form `campaignJson` custom payload on a campaign. No other campaign field can be modified through this call — the schedule, trigger, target, scenario weights and A/B settings are all left untouched, and a concurrent edit to any of them in the Design Portal will not be overwritten.

The campaign must not have ended. The updated payload is picked up by already-authenticated players on their next [GetMyCampaigns](/api/capi/campaign/getmycampaigns) call — they do not need to re-authenticate.

<PartialServop service_name="campaign" operation_name="SYS_UPDATE_CAMPAIGN_JSON" />

## Method Parameters

| Parameter    | Description                                                                                                                                                                             |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| campaignCode | The campaign code whose `campaignJson` is being updated.                                                                                                                                |
| version      | Version of the campaign being updated. Pass `-1` to update regardless of the current version.                                                                                           |
| campaignJson | The new `campaignJson` custom payload. This **replaces** the existing payload entirely — it is not merged. Pass `null` to clear it. Oversized payloads are rejected; see the note below. |

:::info
`campaignJson` is returned to every player enrolled in the campaign, so keep it to the data your client actually needs. The maximum serialized size is governed by an application property — contact support if you need the limit adjusted.
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
var version = -1;
var campaignJson = {
    "theme": "winter",
    "bannerId": 7
};
var campaignProxy = bridge.getCampaignServiceProxy();

var postResult = campaignProxy.sysUpdateCampaignJson(campaignCode, version, campaignJson);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service": "campaign",
    "operation": "SYS_UPDATE_CAMPAIGN_JSON",
    "data": {
        "campaignCode": "CHRISTMAS2026",
        "version": -1,
        "campaignJson": {
            "theme": "winter",
            "bannerId": 7
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
        "version": 4,
        "updatedAt": 1786737600000
    },
    "status": 200
}
```

</details>

The returned `version` is the campaign's new version after the update. Feed it into your next call's `version` parameter if you want to detect a concurrent change rather than overwrite it.

<details>
<summary>Common Error Codes</summary>

### Status Codes

| Code  | Name                                | Description                                                                                        |
| ----- | ----------------------------------- | -------------------------------------------------------------------------------------------------- |
| 40345 | MISSING_RECORD                      | No campaign exists for the specified `campaignCode`.                                                |
| 40001 | INVALID_REQUEST                     | The campaign has ended and can no longer be modified.                                               |
| 41062 | CAMPAIGN_VERSION_MISMATCH           | The specified `version` no longer matches the campaign — it was updated by someone else. Re-read and retry. |
| 41064 | CAMPAIGN_JSON_TOO_LARGE             | The serialized `campaignJson` exceeds the maximum size allowed for the app.                         |
| 40731 | FEATURE_NOT_SUPPORTED_BY_BILLING_PLAN | Billing plan does not include the Campaign feature. Requires a plan that includes Enterprise features. |

</details>
