# CachePurchasePayloadContext
Caches a payload context to retreive as fallback if the store API cannot provide the payload.

<PartialServop service_name="appStore" operation_name="CACHE_PURCHASE_PAYLOAD_CONTEXT" />

## Method Parameters
Parameter | Description
--------- | -----------
storeId | The store platform.
iapId | The app store's IAP ID.
payload | The payload string to cache. Send in the payload associated with the product being purchased, as returned by the [GetSalesInventory()](/api/capi/appstore/getsalesinventory) call...

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
<TabItem value="objectivec" label="Objective-C">
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
  "status" : 200,
  "data" : {}
}
```

</details>
