# VerifyPurchase
## Overview
Used to verify a purchase receipt for Apple AppStore, Google Play, Facebook or Windows. The contents passed into `receiptData` are store-specific. On success, the player will be awarded the associated currencies.




### ReceiptData formats

### Apple AppStore

Use `"itunes"` as the `storeId`.

iTunes `receiptData` format:
```
{
    "receipt": "ENCODED-RECEIPT-DATA"
}
```

### Google Play Store

Use `"googlePlay"` as the `storeId`.

Google Play `receiptData` format:
```
{    
    "productId" : "gems_pack_small",
    "orderId" : "GPA.0000-1111-2222-33333",
    "token" : "ENCODED_TOKEN_STRING",
    "developerPayload" : "STRING_ENCODED_JSON"
}
```

### Facebook

Use `"facebook"` as the `storeId`.

Facebook `receiptData` format:
```
{
    "signedRequest": "string-of-signedRequest"
}
```

### Amazon Store

Use `"amazon"` as the `storeId`.

Amazon `receiptData` format:
```
{
    "receiptId": "a-receipt-id",
    "userId": "a-user-id"
}
```

### Response fields

The following fields are included in the json response:

Field | Description
----- | ------------
resultCode | the overall status of the operation
errorMessage | (optional) message describing non-zero result codes
store | the store used for the purchase
transactionSummary | the store-specific response details. Contents vary by store-type.
rewards | the total currencies being rewarded as a result of the purchases(s). Includes subsections by currency scope.
currency | currency balances. 
parentCurrency | balances of parent currencies (if any)
peerCurrency | balances of peer currencies (if any)
server_time | utc time on the server (in millis)


###  VerifyPurchase responses

The key values of the return to evaluate include:

* `processedCount` - number of transactions successfully processed. To be processed, a transaction receipt must be valid, the product must be found, and the transaction must not have been processed before.
* `unprocessedCount` - the number of transactions that were rejected. See the `transactionStatus` code associated with the transaction for details.


<PartialServop service_name="appStore" operation_name="VERIFY_PURCHASE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string storeId = "hghghsgfh";
string receiptData = "{\"productId\":\"ugfhffhgj\"}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.AppStoreService.VerifyPurchase(storeId, receiptData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *storeId = "hghghsgfh";
const char *receiptData = "{\"productId\":\"ugfhffhgj\"}";
<%= data.branding.codePrefix %>->getAppStoreService()->verifyPurchase(storeId, receiptData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *storeId = @"hghghsgfh";
NSString *receiptData = @"{\"productId\":\"ugfhffhgj\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> appStoreService] verifyPurchase:storeId
                receiptData:receiptData
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String storeId = "hghghsgfh";
String receiptData = "{\"productId\":\"ugfhffhgj\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getAppStoreService().verifyPurchase(storeId, receiptData, this);

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
var storeId = "hghghsgfh";
var receiptData = {
    "productId": "ugfhffhgj"
};

<%= data.branding.codePrefix %>.appStore.verifyPurchase(storeId, receiptData, result =>
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
var storeId = "hghghsgfh";
var receiptData = {
    "productId": "ugfhffhgj"
};
var appStoreProxy = bridge.getAppStoreServiceProxy();

var postResult = appStoreProxy.verifyPurchase(storeId, receiptData);
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
	"service": "appStore",
	"operation": "VERIFY_PURCHASE",
	"data": {
		"storeId": "itunes",
		"receiptData": {
			"receipt": "a-receipt"
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
	"status": 200,
	"data": {
		"resultCode": 0,
		"errorMessage": null,
		"store": "itunes",
		"transactionSummary": {
			"processedCount": 1,
			"unprocessedCount": 1,
			"transactionDetails": [
				{
					"transactionId": "80000557199459",
					"itemId": "barBundle1Imp",
					"transactionResultCode": 0,
					"processed": true,
					"originalTransactionId": "80000557199459",
					"quantity": 1,
					"purchaseDateMs": 1550639146000,
					"productId": "...coinBundle1Imp",
					"purchaseDate": "2019-02-20 05:05:46 Etc/GMT",
					"rewards": {
						"extra": null,
						"currency": {
							"bar": 10,
							"coinMultiplier": 1
						}
					}
				},
				{
					"transactionId": "80000557201213",
					"itemId": "coinBundle2Imp",
					"transactionResultCode": 100,
					"processed": false,
					"originalTransactionId": "80000557201213",
					"quantity": 1,
					"purchaseDateMs": 1550639681000,
					"productId": "...coinBundle2Imp",
					"errorMessage": "Item already processed",
					"purchaseDate": "2019-02-20 05:14:41 Etc/GMT"
				}
			],
			"extra": {
				"appleReceipt": "stringified json receipt data"
			}
		},
		"rewards": {
			"currency": {
				"coins": 1000
			},
			"parentCurrency": {
				"awesomeMaster": {
					"rubies": 2000
				}
			},
			"peerCurrency": {
				"peerApp": {
					"rogerCurrency": 30
				}
			}
		},
		"currency": {
			"coins": {
				"balance": 1000,
				"purchased": 1000,
				"awarded": 0,
				"consumed": 0
			}
		},

		"parentCurrency": {
			"awesomeMaster": {
				"rubies": {
					"balance": 2000,
					"purchased": 2000,
					"awarded": 0,
					"consumed": 0
				}
			}
		},

		"peerCurrency": {
			"peerApp": {
				"rogerCurrency": {
					"balance": 30,
					"purchased": 30,
					"awarded": 0,
					"consumed": 0
				}
			}
		},

		"server_time": 1473325588695
	}
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
0 | RESULT_OK | Successfully verified, new currencies awarded.
100 | RESULT_FAILED_ALREADY_PROCESSED | Already verified and awarded currencies.
101 | RESULT_FAILED_APPSTORE_ERROR | Purchase error with the used app store. 
102 | RESULT_FAILED_PRODUCT_NOT_FOUND | Cannot locate the product in <%= data.branding.productName %> Product Inventory. *This is likely a configuration error in the <%= data.branding.productName %> product - double-check the price settings for the product.**
103 | RESULT_FAILED_UNKNOWN_ERROR | Unexpected error.
104 | RESULT_FAILED_CONFIGURATION_ERROR | Configuration error on the used app store.
105 | RESULT_FAILED_REQUEST_ERROR | Credential missing for used app store. Ensure Facebook or Stream credential is correct.

</details>


## Method Parameters
Parameter | Description
--------- | -----------
storeId | The store type - "itunes", "googlePlay", "amazon", "facebook" or "windows"
receiptData | A JSON object with data in the format for the specified store


