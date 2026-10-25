# SysGetCampaignPageOffset

Returns another page of campaigns, using the encoded context string returned by a previous call to [SysGetCampaignPage](/api/capi/campaign/sysgetcampaignpage) or to this method.

<PartialServop service_name="campaign" operation_name="SYS_GET_CAMPAIGN_PAGE_OFFSET" />

## Method Parameters

| Parameter  | Description                                                                                                                                              |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context    | The encoded context string returned by a previous call to SysGetCampaignPage or SysGetCampaignPageOffset.                                                |
| pageOffset | The positive or negative page offset to fetch, relative to the last page retrieved with this context. Pages before the first page return the first page. |

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
var context = "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbmFibGVkIjp0cnVlfSwic29ydENyaXRlcmlhIjp7ImNyZWF0ZWRBdCI6LTF9LCJwYWdpbmF0aW9uIjp7InJvd3NQZXJQYWdlIjoxMCwicGFnZU51bWJlciI6MX19";
var pageOffset = 1;
var campaignProxy = bridge.getCampaignServiceProxy();

var postResult = campaignProxy.sysGetCampaignPageOffset(context, pageOffset);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service": "campaign",
    "operation": "SYS_GET_CAMPAIGN_PAGE_OFFSET",
    "data": {
        "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbmFibGVkIjp0cnVlfSwic29ydENyaXRlcmlhIjp7ImNyZWF0ZWRBdCI6LTF9LCJwYWdpbmF0aW9uIjp7InJvd3NQZXJQYWdlIjoxMCwicGFnZU51bWJlciI6MX19",
        "pageOffset": 1
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
        "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbmFibGVkIjp0cnVlfSwic29ydENyaXRlcmlhIjp7ImNyZWF0ZWRBdCI6LTF9LCJwYWdpbmF0aW9uIjp7InJvd3NQZXJQYWdlIjoxMCwicGFnZU51bWJlciI6MX19",
        "results": {
            "count": 11,
            "page": 2,
            "items": [
                {
                    "campaignCode": "SPRING2027",
                    "name": "Spring 2027",
                    "purpose": "Evaluating impact of themes and summer sale on spenders",
                    "category": null,
                    "enabled": true,
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
                    "updatedAt": 1811721600000
                }
            ],
            "moreAfter": false,
            "moreBefore": true
        }
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
| 40358 | MISSING_REQUIRED_PARAMETER            | `context` or `pageOffset` was not specified.                                                           |
| 40616 | CLOUD_CODE_ONLY_METHOD                | The method was called from a client. It can only be called from Cloud Code or S2S.                     |
| 40731 | FEATURE_NOT_SUPPORTED_BY_BILLING_PLAN | Billing plan does not include the Campaign feature. Requires a plan that includes Enterprise features. |

</details>
