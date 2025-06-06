# AwardCurrency

Award user the passed-in amount of currency. Returns an object representing the new currency values.

:::note
Awarding 0 or negative currency will return an error. Use <code>[ConsumeCurrency](/api/capi/virtualcurrency/consumecurrency)</code> to remove currency values.
:::

:::caution
For security reasons calling this API from the client is not recommended, and is rejected at the server by default. To over-ride, enable the 'Allow Currency Calls from Client' compatibility setting in the Design Portal.
:::

<PartialServop service_name="virtualCurrency" operation_name="AWARD_VC" />

## Method Parameters

| Parameter | Description                      |
| --------- | -------------------------------- |
| vcId      | The currency type to award.      |
| vcAmount  | The amount of currency to award. |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string vcId = "coins";
int vcAmount = 1;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.VirtualCurrencyService.AwardCurrency(vcId, vcAmount, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *vcId = "coins";
int vcAmount = 1;
<%= data.branding.codePrefix %>->getVirtualCurrencyService()->awardCurrency(vcId, vcAmount, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *vcId = @"coins";
int vcAmount = 1;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> virtualCurrencyService] awardCurrency:vcId
                   vcAmount:vcAmount
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String vcId = "coins";
int vcAmount = 1;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getVirtualCurrencyService().awardCurrency(vcId, vcAmount, this);

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
var vcId = "coins";
var vcAmount = 1;

<%= data.branding.codePrefix %>.virtualCurrency.awardCurrency(vcId, vcAmount, result =>
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
var  vcId = "coins";
var  vcAmount = 1;

ServerResponse result = await <%= data.branding.codePrefix %>.virtualCurrencyService.awardCurrency(vcId:vcId, vcAmount:vcAmount);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var vcId = "coins";
var vcAmount = 1;
var virtualCurrencyProxy = bridge.getVirtualCurrencyServiceProxy();

var postResult = virtualCurrencyProxy.awardCurrency(vcId, vcAmount);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "virtualCurrency",
	"operation": "AWARD_VC",
	"data": {
		"vcId": "coins",
		"vcAmount": 1
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
    "status": 200,
    "data": {
        "currencyMap": {
            "gems": {
                "purchased": 0,
                "balance": 0,
                "consumed": 0,
                "awarded": 0,
                "revoked": 0
            },
            "gold": {
                "purchased": 0,
                "balance": 123,
                "consumed": 0,
                "awarded": 123,
                "revoked": 0
            }
        }
    }
}
```

</details>
