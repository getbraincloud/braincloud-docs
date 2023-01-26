# ConfirmGooglePlayPurchase
## Overview
Confirm Google Play purchase.



:::caution
WARNING: <code>ConfirmGooglePlayPurchase()</code> returns a 200 result even if the purchase was declined by Google. You must check the <code>data.result</code> value to see that it <strong>exists</strong> and is <code><strong>"OK"</strong></code> to confirm that a purchase was a success.
:::

<PartialServop service_name="product" operation_name="CONFIRM_GOOGLEPLAY_PURCHASE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string orderId = "Google Play order ID";
string productId = "Google Play product ID";
string token = "Google Play purchase token";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.ProductService.ConfirmGooglePlayPurchase(orderId, productId, token, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *orderId = "Google Play order ID";
const char *productId = "Google Play product ID";
const char *token = "Google Play purchase token";
<%= data.branding.codePrefix %>->getProductService()->confirmGooglePlayPurchase(orderId, productId, token, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// NA
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String orderId = "Google Play order ID";
String productId = "Google Play product ID";
String token = "Google Play purchase token";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getProductService().confirmGooglePlayPurchase(orderId, productId, token, this);

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
var orderId = "Google Play order ID";
var productId = "Google Play product ID";
var token = "Google Play purchase token";

<%= data.branding.codePrefix %>.product.confirmGooglePlayPurchase(orderId, productId, token, result =>
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
var orderId = "Google Play order ID";
var productId = "Google Play product ID";
var token = "Google Play purchase token";
var productProxy = bridge.getProductServiceProxy();

var postResult = productProxy.confirmGooglePlayPurchase(orderId, productId, token);
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
	"operation": "CONFIRM_GOOGLEPLAY_PURCHASE",
	"data": {
		"orderId": "Google Play order ID",
		"productId": "Google Play product ID",
		"token": "Google Play purchase token"
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
        "result": "OK",
        "status": {
            "consumptionState": 1,
            "developerPayload": "",
            "purchaseState": 0,
            "kind": "androidpublisher#productPurchase",
            "purchaseTimeMillis": 1464789264502
        },
        "playerCurrency": {
            "updatedAt": 1464789275517,
            "currencyMap": {
                "gems": {
                    "purchased": 15,
                    "balance": 15,
                    "consumed": 0,
                    "awarded": 0
                },
                "gold": {
                    "purchased": 8000,
                    "balance": 8000,
                    "consumed": 0,
                    "awarded": 0
                }
            },
            "playerId": "b5ba6fb5-4dd8-49cd-a6cc-36842ccff05d",
            "createdAt": 1464373318154
        },
        "server_time": 1464789275522
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
orderId | Google Play `orderId` ("GPA.####-####-####-#####")
productId | Google Play `productId` ("com.acme.runner.birdseed1")
token | Google Play `purchaseToken` ("bhcmgnlflegpffpbcpeknjpi.AO-J1Oy_...")


