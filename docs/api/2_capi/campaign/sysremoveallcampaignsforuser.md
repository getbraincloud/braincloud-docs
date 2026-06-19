# SysRemoveAllCampaignsForUser

Removes a player's participation in all campaigns, deleting all their CampaignParticipant records and clearing the campaigns map from their profile.

<PartialServop service_name="campaign" operation_name="SYS_REMOVE_ALL_CAMPAIGNS_FOR_USER" />

## Method Parameters

| Parameter | Description                                                  |
| --------- | ------------------------------------------------------------ |
| profileId | The profile ID of the player to remove all campaigns for.    |

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
var profileId = "aProfileId";
var campaignProxy = bridge.getCampaignServiceProxy();

var postResult = campaignProxy.sysRemoveAllCampaignsForUser(profileId);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service": "campaign",
    "operation": "SYS_REMOVE_ALL_CAMPAIGNS_FOR_USER",
    "data": {
        "profileId": "aProfileId"
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
    "data": {},
    "status": 200
}
```

</details>

<details>
<summary>Common Error Code</summary>

### Status Codes

| Code  | Name                           | Description                                         |
| ----- | ------------------------------ | --------------------------------------------------- |
| 40206 | BILLING_PLAN_INCLUDES_CAMPAIGN | Billing plan does not include the Campaign feature. |

</details>
