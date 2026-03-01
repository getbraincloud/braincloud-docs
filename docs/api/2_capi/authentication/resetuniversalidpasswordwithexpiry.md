# ResetUniversalIdPasswordWithExpiry

Reset Universal ID password. Allows the developer to specify how long the URL is valid for (in minutes).

<PartialServop service_name="authenticationV2" operation_name="RESET_UNIVERSAL_ID_PASSWORD_WITH_EXPIRY" />

## Method Parameters

| Parameter         | Description                                              |
| ----------------- | -------------------------------------------------------- |
| universalId       | The universalId to send the reset email to.              |
| tokenTtlInMinutes | The time-to-live for the password reset url, in minutes. |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string universalId = "universalId";
int tokenTtlInMinutes = 1440;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.AuthenticationService.ResetUniversalIdPasswordWithExpiry(universalId, tokenTtlInMinutes, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *universalId = "universalId";
int tokenTtlInMinutes = 1440;
<%= data.branding.codePrefix %>->getAuthenticationService()->resetUniversalIdPasswordWithExpiry(universalId, tokenTtlInMinutes, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *universalId = @"universalId";
int tokenTtlInMinutes = 1440;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> authenticateService] resetUniversalIdPasswordWithExpiry:universalId
          tokenTtlInMinutes:tokenTtlInMinutes
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String universalId = "universalId";
int tokenTtlInMinutes = 1440;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getAuthenticationService().resetUniversalIdPasswordWithExpiry(universalId, tokenTtlInMinutes, this);

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
var universalId = "universalId";
var tokenTtlInMinutes = 1440;

<%= data.branding.codePrefix %>.authenticate.resetUniversalIdPasswordWithExpiry(universalId, tokenTtlInMinutes, result =>
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
var  universalId = "universalId";
var  tokenTtlInMinutes = 1440;

ServerResponse result = await <%= data.branding.codePrefix %>.authenticationService.resetUniversalIdPasswordWithExpiry(universalId:universalId, tokenTtlInMinutes:tokenTtlInMinutes);

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
local universalId = "universalId"
local tokenTtlInMinutes = 1440

local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end

<%= data.branding.codePrefix %>:getAuthenticationService():resetUniversalIdPasswordWithExpiry(universalId, tokenTtlInMinutes, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var universalId = "universalId";
var tokenTtlInMinutes = 1440;
var authenticationProxy = bridge.getAuthenticationServiceProxy();

var postResult = authenticationProxy.resetUniversalIdPasswordWithExpiry(universalId, tokenTtlInMinutes);
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
    "service":"authenticationV2",
    "operation":"RESET_UNIVERSAL_ID_PASSWORD_WITH_EXPIRY",
    "data":{
        "universalId":"universalId",
        "tokenTtlInMinutes": 5
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
    "data": null,
    "status": 200
}
```

</details>
