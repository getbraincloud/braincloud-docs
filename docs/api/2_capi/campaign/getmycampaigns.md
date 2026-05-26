# GetMyCampaigns

Returns the list of campaigns the current player is participating in, including their assigned scenario, campaign details, and engagement metrics.

<PartialServop service_name="campaign" operation_name="GET_MY_CAMPAIGNS" />

## Method Parameters
Parameter | Description
--------- | -----------
optionsJson | Optional JSON parameter (reserved for future use).

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string optionsJson = "{}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.CampaignService.GetMyCampaigns(optionsJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *optionsJson = "{}";
<%= data.branding.codePrefix %>.getCampaignService().getMyCampaigns(optionsJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *optionsJson = @"{}";
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> campaignService] getMyCampaigns:
                  optionsJson:optionsJson
              completionBlock:successBlock
         errorCompletionBlock:failureBlock
                     cbObject:nil]
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String optionsJson = "{}";
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getCampaignService.getMyCampaigns(optionsJson, this);

public void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)
{
    System.out.print(String.format("Success | %s", jsonData.toString()));
}
public void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)
{
    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));
}
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var optionsJson = {};
<%= data.branding.codePrefix %>.campaign.getMyCampaigns(optionsJson, result =>
{
  var status = result.status;
  console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
var optionsJson = {};
ServerResponse result = await <%= data.branding.codePrefix %>.campaignService.getMyCampaigns(optionsJson:optionsJson);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="lua" label="Roblox">
```

```lua
local optionsJson = {}
local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end
<%= data.branding.codePrefix %>:getCampaignService():getMyCampaigns(optionsJson, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var optionsJson = {};
var campaignProxy = bridge.getCampaignServiceProxy();

var postResult = campaignProxy.getMyCampaigns(optionsJson);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"campaign",
    "operation":"GET_MY_CAMPAIGNS",
    "data":{
        "optionsJson":{}
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
        "campaigns": [
            {
                "campaignCode": "holiday2026",
                "scenarioCode": "b",
                "createdAt": 1714000000000,
                "updatedAt": 1714000000000,
                "originalStartedAt": 1714000000000,
                "originalEndsAt": 1716591999000,
                "expireAtIso": 1724367999000,
                "loginCount": 12,
                "logouts": 11,
                "timePlayed": 7200000,
                "avgPlayTime": 600000,
                "numPurchases": 2,
                "amtSpent": 499,
                "version": 3,
                "purpose": "Summer Sale A/B Test",
                "campaignJson": {
                    "theme": "summer"
                },
                "startAt": 1714000000000,
                "endAt": 1716591999000,
                "targetType": "SEGMENT",
                "segmentCode": "premium_users",
                "description": "50% off bundle variant",
                "scenarioJson": {
                    "discount": "50%"
                },
                "overrides": {
                    "globalProperties": {
                        "free_currency_bonus": {
                            "name": "free_currency_bonus",
                            "value": "200"
                        }
                    },
                    "cashProducts": {
                        "coinbundle10": {
                            "itemId": "coinbundle10",
                            "priceId": 1
                        }
                    },
                    "items": {
                        "sword_01": {
                            "defId": "sword_01",
                            "buyPrice": {
                                "coins": 50
                            }
                        }
                    }
                }
            }
        ]
    },
    "status": 200
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40206 | BILLING_PLAN_INCLUDES_CAMPAIGN | Billing plan does not include the Campaign feature.

</details>
