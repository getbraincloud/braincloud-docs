# GetStoreInfo

Returns the client-side configuration of the given store, such as the API and pay station URLs a client needs to open the store's checkout. Currently only Xsolla returns store info.

<PartialServop service_name="appStore" operation_name="GET_STORE_INFO" />

## Method Parameters
Parameter | Description
--------- | -----------
storeId | The store to query, e.g. `"xsolla"`. Refer to the current available store IDs [here](/api/appendix/platformIds#store-ids).

:::note

- **Xsolla** (`xsolla`) returns `storeApiBaseUrl`, `payStationBaseUrl`, `projectId`, `sandbox` and `consumeOnPurchase`.
  - `payStationBaseUrl` is `https://sandbox-secure.xsolla.com/paystation4` when the integration's sandbox is on, and `https://secure.xsolla.com/paystation4` when it is off.
  - `consumeOnPurchase` tells the client whether <%= data.branding.productName %> consumes a purchased item on the server. When it is `true`, the client must not consume the item itself. It is only `true` when the setting is on and the integration has both a project id and an API key — without the API key the server skips the consume, so the client still has to do it. The API key itself is never returned.
  - If the app has no Xsolla integration configured, only `storeApiBaseUrl` and `payStationBaseUrl` are returned.
- **Other stores** currently return an empty `storeInfo`.
- An unknown `storeId` fails with HTTP 400 and reason code `INVALID_STORE_ID` (40700).

:::

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string storeId = "xsolla";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.AppStoreService.GetStoreInfo(storeId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *storeId = "xsolla";
<%= data.branding.codePrefix %>->getAppStoreService()->getStoreInfo(storeId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Obj-C">
```

```objectivec
NSString *storeId = @"xsolla";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> appStoreService] getStoreInfo:storeId
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String storeId = "xsolla";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getAppStoreService().getStoreInfo(storeId, this);

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
var storeId = "xsolla";

<%= data.branding.codePrefix %>.appStore.getStoreInfo(storeId, result =>
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
var storeId = "xsolla";

ServerResponse result = await <%= data.branding.codePrefix %>.appStoreService.getStoreInfo(storeId:storeId);

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
local storeId = "xsolla"

local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end

<%= data.branding.codePrefix %>:getAppStoreService():getStoreInfo(storeId, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="gdscript" label="GDScript">
```

```gdscript
var store_id = "xsolla"

var result = await <%= data.branding.codePrefix %>.app_store_service.get_store_info(store_id)

if result.status == 200:
	print("Success")
else:
	print("Failed: %s" % result.status_message)
```

```mdx-code-block
</TabItem>
<TabItem value="lua" label="Lua">
```

```lua
local storeId = "xsolla"

local callback = function(success, response)
    if success then
        print("Success")
    else
        print("Failed | " .. tostring(response.status_message))
    end
end

<%= data.branding.codePrefix %>.appStore:getStoreInfo(storeId, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var storeId = "xsolla";
var appStoreProxy = bridge.getAppStoreServiceProxy();

var postResult = appStoreProxy.getStoreInfo(storeId);
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
    "operation": "GET_STORE_INFO",
    "data": {
        "storeId": "xsolla"
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
        "storeInfo": {
            "storeApiBaseUrl": "https://store.xsolla.com/api",
            "payStationBaseUrl": "https://sandbox-secure.xsolla.com/paystation4",
            "projectId": "123456",
            "sandbox": true,
            "consumeOnPurchase": true
        }
    },
    "status": 200
}
```
</details>
