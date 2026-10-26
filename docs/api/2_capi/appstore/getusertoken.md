# GetUserToken

Returns a store user token (JWT) for the current user, generated on the server. The client can use it to call the store's APIs on the user's behalf. Currently only supported for Xsolla.

<PartialServop service_name="appStore" operation_name="GET_USER_TOKEN" />

## Method Parameters
Parameter | Description
--------- | -----------
storeId | The store to get the token for, e.g. `"xsolla"`. Refer to the current available store IDs [here](/api/appendix/platformIds#store-ids).

:::note

- **Xsolla** (`xsolla`) needs the app's Xsolla integration to have a **server client ID**, a **server client secret** and a **login ID** set. If any of these is missing, or the call to Xsolla fails, `userToken` is returned as `null`.
- **Other stores** are not supported yet.
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

<%= data.branding.codePrefix %>.AppStoreService.GetUserToken(storeId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *storeId = "xsolla";
<%= data.branding.codePrefix %>->getAppStoreService()->getUserToken(storeId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Obj-C">
```

```objectivec
NSString *storeId = @"xsolla";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> appStoreService] getUserToken:storeId
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

<%= data.branding.codePrefix %>.getAppStoreService().getUserToken(storeId, this);

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

<%= data.branding.codePrefix %>.appStore.getUserToken(storeId, result =>
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

ServerResponse result = await <%= data.branding.codePrefix %>.appStoreService.getUserToken(storeId:storeId);

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

<%= data.branding.codePrefix %>:getAppStoreService():getUserToken(storeId, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="gdscript" label="GDScript">
```

```gdscript
var store_id = "xsolla"

var result = await <%= data.branding.codePrefix %>.app_store_service.get_user_token(store_id)

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

<%= data.branding.codePrefix %>.appStore:getUserToken(storeId, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var storeId = "xsolla";
var appStoreProxy = bridge.getAppStoreServiceProxy();

var postResult = appStoreProxy.getUserToken(storeId);
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
    "operation": "GET_USER_TOKEN",
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
        "userToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    },
    "status": 200
}
```
</details>
