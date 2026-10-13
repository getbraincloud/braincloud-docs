# CachePurchasePayloadContext
Caches a payload context to retreive as fallback if the store API cannot provide the payload.

<PartialServop service_name="appStore" operation_name="CACHE_PURCHASE_PAYLOAD_CONTEXT" />

## Method Parameters
Parameter | Description
--------- | -----------
storeId | The store platform. Refer to the current available store IDs [here](/api/appendix/platformIds#store-ids).
iapId | The app store's IAP ID.
payload | The payload string to cache. Send in the payload associated with the product being purchased, as returned by the [GetSalesInventory()](/api/capi/appstore/getsalesinventory) call. ( formatted as `__bc: [versionId, itemId, priceId, referencePrice, promotionId]`)

:::note

- **Supported stores:** the cached payload is used by [VerifyPurchase](/api/capi/appstore/verifypurchase) for Google Play (`googlePlay`, as a fallback when the receipt has no valid `developerPayload`), Apple (`itunes`) and Meta Horizon (`metaHorizon`). It is **not** used for Xsolla (`xsolla`) — put the payload in the Xsolla order's `custom_parameters.custom_payload` instead.
- **Other stores:** Amazon (`amazon`), Steam (`steam`), Facebook (`facebook`), Windows (`windows`), Windows Phone (`windowsPhone`) and Epic Games (`epicGames`) do not use the cached payload, and do not require one — there is no need to call this method for them.
- **Call it right before VerifyPurchase,** with the same `storeId` and with `iapId` set to the store's product ID / SKU.
- **For Google Play, Apple and Meta Horizon, a payload is required by default.** If no payload is found, the purchase is rejected unless **Allow purchases without requiring a developer payload or cached purchase context.** is enabled on the **Design | Core App Info | Advanced Settings** page.

:::

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string storeId = "googlePlay";
string iapId = "xxxxxxxx";
string payload = "__bc:[1,itemid,0,199,-1]";

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.AppstoreService.CachePurchasePayloadContext(storeId, iapId, payload, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *storeId = "googlePlay";
const char *iapId = "xxxxxxxx";
const char *payload = "__bc:[1,itemid,0,199,-1]";
<%= data.branding.codePrefix %>.getAppstoreService().cachePurchasePayloadContext(storeId, iapId, payload, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Obj-C">
```

```objectivec
NSString *storeId = @"googlePlay";
NSString *iapId = @"xxxxxxxx";
NSString *payload = @"__bc:[1,itemid,0,199,-1]";
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> appStoreService] cachePurchasePayloadContext:
                      storeId:storeId
                        iapId:iapId
                      payload:payload
              completionBlock:successBlock
         errorCompletionBlock:failureBlock
                     cbObject:nil]
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String storeId = "googlePlay";
String iapId = "xxxxxxxx";
String payload = "__bc:[1,itemid,0,199,-1]";
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getAppstoreService.cachePurchasePayloadContext(storeId, iapId, payload, this);

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
var storeId = "googlePlay";
var iapId = "xxxxxxxx";
var payload = "__bc:[1,itemid,0,199,-1]";
<%= data.branding.codePrefix %>.appStore.cachePurchasePayloadContext(storeId, iapId, payload, result =>
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
var storeId = "googlePlay";
var iapId = "xxxxxxxx";
var payload = "__bc:[1,itemid,0,199,-1]";
ServerResponse result = await <%= data.branding.codePrefix %>.appStoreService.cachePurchasePayloadContext(storeId:storeId, iapId:iapId, payload:payload);

if (result.statusCode == 200) {
    print("Success");    
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
local storeId = "googlePlay"
local iapId = "xxxxxxxx"
local payload = "__bc:{ 1,itemid,0,199,-1 }"

local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end

<%= data.branding.codePrefix %>:getAppStoreService():cachePurchasePayloadContext(storeId, iapId, payload, callback)
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
var storeId = "googlePlay";
var iapId = "xxxxxxxx";
var payload = "__bc:[1,itemid,0,199,-1]";
var appStoreProxy = bridge.getAppstoreServiceProxy();

var postResult = appStoreProxy.cachePurchasePayloadContext(storeId, iapId, payload);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"appStore",
    "operation":"CACHE_PURCHASE_PAYLOAD_CONTEXT",
    "data":{
        "storeId":"googlePlay",
        "iapId":"xxxxxxxx",
        "payload":"__bc:[1,itemid,0,199,-1]"
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
    "data": {},
    "status": 200
}
```

</details>

### Meta Horizon example

The Meta Horizon Store has no developer payload of its own, so use this method to attach one. The full sequence is:

1. Call [GetSalesInventory](/api/capi/appstore/getsalesinventory) with `"metaHorizon"`, and keep each product's `payload`. A product's `priceData.id` is its Meta SKU — the **Meta Horizon Product ID** set on the product's price.
2. The player buys the product through the Meta Platform SDK.
3. As soon as the Meta purchase succeeds, call CachePurchasePayloadContext with the product's SKU and payload.
4. Call [VerifyPurchase](/api/capi/appstore/verifypurchase) within a few seconds — for example, in the cache call's success callback.

```csharp
// 1. When showing the store: get the products and keep each one's payload.
//    e.g. product.priceData.id = "gems_pack_small"
//         product.payload      = "__bc:[1,gemsPackSmall,0,199,-1]"
<%= data.branding.codePrefix %>.AppStoreService.GetSalesInventory("metaHorizon", "{\"userCurrency\":\"USD\"}",
    successCallback, failureCallback);

// 2. The player buys "gems_pack_small" through the Meta Platform SDK.
//    On success, Meta returns the purchase's SKU and purchase ID.

// 3. Right after the purchase succeeds: cache the payload, then verify.
string storeId = "metaHorizon";
string sku     = "gems_pack_small";                  // the Meta SKU, the same one Meta reports for the purchase
string payload = "__bc:[1,gemsPackSmall,0,199,-1]";  // the payload GetSalesInventory returned for this product

<%= data.branding.codePrefix %>.AppStoreService.CachePurchasePayloadContext(storeId, sku, payload,
    (response, cbObject) =>
    {
        // 4. Verify within a few seconds of caching.
        string receiptData = "{" +
            "\"userId\":\"META-USER-ID\"," +
            "\"sku\":\"gems_pack_small\"," +
            "\"transactionId\":\"META-PURCHASE-ID\"," +
            "\"consumeOnVerify\":true" +
        "}";

        <%= data.branding.codePrefix %>.AppStoreService.VerifyPurchase(storeId, receiptData, successCallback, failureCallback);
    },
    failureCallback);
```

:::tip

- The `iapId` you cache must be the same SKU as the `sku` in `receiptData`.
- Cache **after** the Meta purchase succeeds, not when the store opens.
- Pass the payload exactly as GetSalesInventory returned it. The cache call fails if it is not a valid payload.

:::
