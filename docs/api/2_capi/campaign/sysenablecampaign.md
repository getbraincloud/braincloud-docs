# SysEnableCampaign

Enables or disables a campaign. Only the `enabled` flag is changed — all other campaign fields are left untouched. The campaign must not have ended.

The campaign configuration is re-validated before it is enabled, so a campaign that has become invalid (for example, because its target segment was deleted) cannot be enabled until it is fixed.

<PartialServop service_name="campaign" operation_name="SYS_ENABLE_CAMPAIGN" />

## Method Parameters

| Parameter    | Description                                           |
| ------------ | ----------------------------------------------------- |
| campaignCode | The campaign code to enable or disable.               |
| enable       | `true` to enable the campaign, `false` to disable it. |

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
var enable = true;
var campaignProxy = bridge.getCampaignServiceProxy();

var postResult = campaignProxy.sysEnableCampaign(campaignCode, enable);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service": "campaign",
    "operation": "SYS_ENABLE_CAMPAIGN",
    "data": {
        "campaignCode": "SUMMER2026",
        "enable": true
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
        "enabled": true,
        "version": 2,
        "updatedAt": 1811725200000
    },
    "status": 200
}
```

</details>

<details>
<summary>Common Error Codes</summary>

### Status Codes

| Code  | Name                                  | Description                                                                                                                         |
| ----- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 40345 | MISSING_RECORD                        | No campaign exists for the specified `campaignCode`.                                                                                |
| 40001 | INVALID_REQUEST                       | The campaign has ended and can no longer be modified.                                                                               |
| 41055 | INVALID_CAMPAIGN_CONFIGURATION        | The campaign configuration is no longer valid and the campaign cannot be enabled. The error message describes the specific problem. |
| 40616 | CLOUD_CODE_ONLY_METHOD                | The method was called from a client. It can only be called from Cloud Code or S2S.                                                  |
| 40731 | FEATURE_NOT_SUPPORTED_BY_BILLING_PLAN | Billing plan does not include the Campaign feature. Requires a plan that includes Enterprise features.                              |

</details>
