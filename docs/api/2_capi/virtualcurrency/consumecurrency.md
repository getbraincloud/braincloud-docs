# ConsumeCurrency
## Overview
Consume the passed-in amount of currency from the player.

Note: Consuming 0 or negative currency will return an error. Use <code>[AwardCurrency](/api/capi/virtualcurrency/awardcurrency)</code> to add currency values.

<PartialServop service_name="virtualCurrency" operation_name="CONSUME_VC" / >

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

<%= data.branding.codePrefix %>.VirtualCurrencyService.ConsumeCurrency(vcId, vcAmount, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *vcId = "coins";
int vcAmount = 1;
<%= data.branding.codePrefix %>->getVirtualCurrencyService()->consumeCurrency(vcId, vcAmount, this);
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

[[<%= data.branding.codePrefix %> virtualCurrencyService] consumeCurrency:vcId
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

<%= data.branding.codePrefix %>.getVirtualCurrencyService().consumeCurrency(vcId, vcAmount, this);

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

<%= data.branding.codePrefix %>.virtualCurrency.consumeCurrency(vcId, vcAmount, result =>
{
    var status = result.status;
    console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var vcId = "coins";
var vcAmount = 1;
var virtualCurrencyProxy = bridge.getVirtualCurrencyServiceProxy();

var postResult = virtualCurrencyProxy.consumeCurrency(vcId, vcAmount);
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
	"operation": "CONSUME_VC",
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
                "awarded": 0
            },
            "gold": {
                "purchased": 0,
                "balance": 123,
                "consumed": 0,
                "awarded": 123
            }
        }
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
vcId | The currency type to consume. 
vcAmount | The amount of currency to consume. 


