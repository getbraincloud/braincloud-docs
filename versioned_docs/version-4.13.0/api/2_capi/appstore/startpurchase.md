# StartPurchase
## Overview
Initialize a two-part purchase transaction. Currently only used for Steam purchases.

<PartialServop service_name="appStore" operation_name="START_PURCHASE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string storeId = "steam";
string purchaseData = "{\"itemId\":\"3555\",\"language\":\"en\"}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.AppStoreService.StartPurchase(storeId, purchaseData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *storeId = "steam";
const char *purchaseData = "{\"itemId\":\"3555\",\"language\":\"en\"}";
<%= data.branding.codePrefix %>->getAppStoreService()->startPurchase(storeId, purchaseData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *storeId = @"steam";
NSString *purchaseData = @"{\"itemId\":\"3555\",\"language\":\"en\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> appStoreService] startPurchase:storeId
               purchaseData:purchaseData
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
String purchaseData = "{\"itemId\":\"3555\",\"language\":\"en\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getAppStoreService().startPurchase(storeId, purchaseData, this);

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
var purchaseData = {
    "itemId": "3555",
    "language": "en"
};

<%= data.branding.codePrefix %>.appStore.startPurchase(storeId, purchaseData, result =>
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
var purchaseData = {
    "itemId": "3555",
    "language": "en"
};
var appStoreProxy = bridge.getAppStoreServiceProxy();

var postResult = appStoreProxy.startPurchase(storeId, purchaseData);
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
	"operation": "START_PURCHASE",
	"data": {
		"storeId": "steam",
		"purchaseData": {
			"itemId": "3555",
			"language": "en"
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
        "resultCode": 0,
        "serverTime": 1649252574855,
        "store": "steam",
        "transactionSummary": {
            "result": "OK",
            "params": {
                "orderid": 100053,
                "transid": 3041626742768452692
            },
            "rawStringResp": "{\"response\":{\"result\":\"OK\",\"params\":{\"orderid\":100053,\"transid\":3041626742768452692}}}",
            "currencyOverride": "CAD"
        },
        "transactionId": "3041626742768452692"
    },
    "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
storeId | The store id. Currently only accepts "steam."
purchaseData | Data for the purchase. language: ISO 639-1 language code. itemId: Items to purchase.


