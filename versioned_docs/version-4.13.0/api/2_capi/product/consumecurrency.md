# ConsumeCurrency
## Overview
:::caution
WARNING: 
This call, <code>ConsumeCurrency()</code>, is included in the client libraries for convenience and backwards compatibility, but for app security reasons we recommend it only be called server-side via Cloud Code. By default the <%= data.branding.productName %> servers will block any client-side invocations of currency altering methods. To enable client-side support (not recommended), you need to enable the [x] Allow Currency Calls from Client compatibility setting on the Design | Core App Info | Advanced Settings page of the portal.
:::

















Consume the passed-in amount of currency from the player.

Note: Consuming 0 or negative currency will return an error. Use AwardCurrency to add currency values.

<PartialServop service_name="product" operation_name="CONSUME_VC" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string currencyType = "coins";
int amount = 1;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.ProductService.ConsumeCurrency(currencyType, amount, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *currencyType = "coins";
int amount = 1;
<%= data.branding.codePrefix %>->getProductService()->consumeCurrency(currencyType, amount, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *currencyType = @"coins";
int amount = 1;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> productService] consumeCurrency:currencyType
                     amount:amount
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String currencyType = "coins";
int amount = 1;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getProductService().consumeCurrency(currencyType, amount, this);

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
var currencyType = "coins";
var amount = 1;

<%= data.branding.codePrefix %>.product.consumeCurrency(currencyType, amount, result =>
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
var currencyType = "coins";
var amount = 1;
var productProxy = bridge.getProductServiceProxy();

var postResult = productProxy.consumeCurrency(currencyType, amount);
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
	"service": "product",
	"operation": "CONSUME_VC",
	"data": {
		"vc_id": "coins",
		"vc_amount": 1
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
        "updatedAt": 1395693913234,
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
        },
        "playerId": "acf11847-055f-470d-abb7-b93052201491",
        "createdAt": 1395693907421
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
currencyType | The currency type to consume.
amount | The amount of currency to consume.


