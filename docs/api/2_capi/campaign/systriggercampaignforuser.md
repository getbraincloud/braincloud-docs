# SysTriggerCampaignForUser

Triggers a campaign scenario for a specific player, optionally bypassing normal eligibility constraints. The target player must have `isTester=true` on their profile. The campaign `endAt` is always respected.

<PartialServop service_name="campaign" operation_name="SYS_TRIGGER_CAMPAIGN_FOR_USER" />

## Method Parameters

| Parameter    | Description                                                                                                                                                                                                                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| profileId    | The profile ID of the player to trigger the campaign for. Player must have `isTester=true` on their profile.                                                                                                                                                                                                             |
| campaignCode | The campaign code to trigger for the player.                                                                                                                                                                                                                                                                             |
| optionsJson  | Optional control flags. `ignoreEnabled` (boolean, default false): allow triggering even if campaign is disabled. `ignoreScheduleStart` (boolean, default false): allow triggering before campaign `startAt`. `ignoreControl` (boolean, default false): exclude control scenario from weighted assignment. `scenarioCode` (string): if specified, assign this specific scenario instead of weighted assignment. |

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
<TabItem value="objectivec" label="Objective-C">
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
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var profileId = "aProfileId";
var campaignCode = "CHRISTMAS2026";
var optionsJson = {
    "ignoreEnabled": false,
    "ignoreScheduleStart": false,
    "ignoreControl": false,
    "scenarioCode": "a"
};
var campaignProxy = bridge.getCampaignServiceProxy();

var postResult = campaignProxy.sysTriggerCampaignForUser(profileId, campaignCode, optionsJson);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service": "campaign",
    "operation": "SYS_TRIGGER_CAMPAIGN_FOR_USER",
    "data": {
        "profileId": "aProfileId",
        "campaignCode": "CHRISTMAS2026",
        "optionsJson": {
            "ignoreEnabled": false,
            "ignoreScheduleStart": false,
            "ignoreControl": false,
            "scenarioCode": "a"
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
        "scenarioCode": "a"
    },
    "status": 200
}
```

</details>

<details>
<summary>Common Error Code</summary>

### Status Codes

| Code  | Name                                       | Description                                                                                                    |
| ----- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| 41060 | CAMPAIGN_SYS_TRIGGER_CAMPAIGN_FOR_USER_ERROR | Trigger failed — campaign disabled, has not started, has ended, player is not a tester, or player is already enrolled in a different scenario. |
| 40206 | BILLING_PLAN_INCLUDES_CAMPAIGN             | Billing plan does not include the Campaign feature.                                                            |

</details>
