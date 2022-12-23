# VerifyItunesReceipt
## Overview
Method verifies an iTunes receipt. On success, the player will be awarded the associated currencies.




Apple receipts will often contain old transactions. The key values of the return to evaluate include:

* `processedCount` - number of transactions successfully processed. To be processed, a transaction receipt must be valid, the product must be found, and the transaction must not have been processed before.
* `unprocessedCount` - the number of transactions that were rejected. See the `transactionStatus` code associated with the transaction for details.

### Status Codes
Code | Name | Description
---- | ---- | -----------
0 | STATUS_OK | Successfully verified, new currencies awarded.
100 | STATUS_FAILED_ALREADY_PROCESSED | Already verified and awarded currencies.
101 | STATUS_FAILED_NO_ITUNES_PRODUCT_ID | The product id is not configured in iTunes Connect for this app. *This is likely a fraud attempt.*
102 | STATUS_FAILED_PRODUCT_NOT_FOUND | iTunes product id exists, but cannot locate the product in <%= data.branding.productName %> Product Inventory. *This is likely a configuration error in the <%= data.branding.productName %> product - double-check the iTunes price settings for the product.**

<PartialServop service_name="product" operation_name="OP_CASH_IN_RECEIPT" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string base64EncReceiptData = "Sample iTunes Receipt";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.ProductService.VerifyItunesReceipt(base64EncReceiptData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *base64EncReceiptData = "Sample iTunes Receipt";
<%= data.branding.codePrefix %>->getProductService()->verifyItunesReceipt(base64EncReceiptData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *base64EncReceiptData = @"Sample iTunes Receipt";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> productService] verifyItunesReceipt:base64EncReceiptData
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var base64EncReceiptData = "Sample iTunes Receipt";

<%= data.branding.codePrefix %>.product.verifyItunesReceipt(base64EncReceiptData, result =>
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
var base64EncReceiptData = "Sample iTunes Receipt";
var productProxy = bridge.getProductServiceProxy();

var postResult = productProxy.verifyItunesReceipt(base64EncReceiptData);
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
	"operation": "OP_CASH_IN_RECEIPT",
	"data": {
		"receipt": "Sample iTunes Receipt"
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
        "status": 0,
        "playerCurrency": {
            "updatedAt": 1473060489422,
            "currencyMap": {
                "Coin": {
                    "purchased": 0,
                    "balance": 1000,
                    "consumed": 0,
                    "awarded": 1000
                }
            },
            "playerId": "c7acba9c-91f7-473b-b841-33ed8c170b7c",
            "createdAt": 1472813596516
        },
        "appleReceipt": "xxx",
        "transactionSummary": {
            "processedCount": 1,
            "unprocessedCount": 0,
            "transactionDetails": [
                {
                    "original_transaction_id": "1000000234728140",
                    "product_id": "Coins100",
                    "purchase_date_ms": 1473325498000,
                    "quantity": 1,
                    "purchase_date": "2016-09-08 09:04:58 Etc/GMT",
                    "transactionStatus": 0,
                    "transaction_id": "1000000234728140"
                }
            ]
        },
        "server_time": 1473325588695
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
base64EncReceiptData | The iTunes receipt **`payload`** string


