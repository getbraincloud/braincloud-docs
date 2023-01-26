# FinalizePurchase
## Overview
Finalize a two-part purchase transaction. Currently only used for Steam purchases. On success, the player will be awarded the associated currencies.

<PartialServop service_name="appStore" operation_name="FINALIZE_PURCHASE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string storeId = "steam";
string transactionId = "12345677890123456789";
string transactionData = "{\"transId\":\"12345677890123456789\"}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.AppStoreService.FinalizePurchase(storeId, transactionId, transactionData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *storeId = "steam";
const char *transactionId = "12345677890123456789";
const char *transactionData = "{\"transId\":\"12345677890123456789\"}";
<%= data.branding.codePrefix %>->getAppStoreService()->finalizePurchase(storeId, transactionId, transactionData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *storeId = @"steam";
NSString *transactionId = @"12345677890123456789";
NSString *transactionData = @"{\"transId\":\"12345677890123456789\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> appStoreService] finalizePurchase:storeId
              transactionId:transactionId
            transactionData:transactionData
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String storeId = "steam";
String transactionId = "12345677890123456789";
String transactionData = "{\"transId\":\"12345677890123456789\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getAppStoreService().finalizePurchase(storeId, transactionId, transactionData, this);

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
var storeId = "steam";
var transactionId = "12345677890123456789";
var transactionData = {
    "transId": "12345677890123456789"
};

<%= data.branding.codePrefix %>.appStore.finalizePurchase(storeId, transactionId, transactionData, result =>
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
var storeId = "steam";
var transactionId = "12345677890123456789";
var transactionData = {
    "transId": "12345677890123456789"
};
var appStoreProxy = bridge.getAppStoreServiceProxy();

var postResult = appStoreProxy.finalizePurchase(storeId, transactionId, transactionData);
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
	"operation": "FINALIZE_PURCHASE",
	"data": {
		"storeId": "steam",
		"transactionId": "12345677890123456789",
		"transactionData": {
			"transId": "12345677890123456789"
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
        "processed": true,
        "itemId": "GoldWings",
        "referencePrice": 199,
        "promotions": null,
        "resultCode": 0,
        "currency": {
            "goldWings": {
                "consumed": 0,
                "balance": 1,
                "purchased": 1,
                "awarded": 0
            }
        },
        "serverTime": 1649252630210,
        "store": "steam",
        "transactionSummary": {
            "result": "OK",
            "params": {
                "orderid": 100053,
                "transid": 3041626742768452692
            },
            "rawStringResp": "{\"response\":{\"result\":\"OK\",\"params\":{\"orderid\":100053,\"transid\":3041626742768452692}}}"
        },
        "rewards": {
            "extra": null,
            "currency": {
                "goldWings": 1
            }
        }
    },
    "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
storeId | Store type
transactionId | id of transaction to finalize
transactionData | Store-specific purchase data


