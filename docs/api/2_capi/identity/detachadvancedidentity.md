# DetachAdvancedIdentity

Detach the identity from this profile.

<PartialServop service_name="identity" operation_name="DETACH" />

## Method Parameters

| Parameter          | Description                                                                                                              |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| authenticationType | Universal, Universal, Facebook, etc                                                                                      |
| externalId         | User ID                                                                                                                  |
| extraJson          | Additional to piggyback along with the call, to be picked up by pre- or post- hooks. Leave empty string for no extraJson |
| continueAnon       | Proceed even if the profile will revert to anonymous                                                                     |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
AuthenticationType authenticationType = AuthenticationType.Universal;
string externalId = "externalId";
bool continueAnon = true;
string extraJson = "{\"key\":\"value\"}";

<%= data.branding.codePrefix %>.IdentityService.DetachAdvancedIdentity(
    authenticationType,
    externalId,
    continueAnon,
    extraJson,
    SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
AuthenticationType authenticationType = AuthenticationType::Universal;
const char* externalId = "externalId";
bool continueAnon = true;
const char* extraJson = "{\"key\":\"value\"}";

<%= data.branding.codePrefix %>->getIdentityService()->detachAdvancedIdentity(
    authenticationType, externalId, continueAnon, extraJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
AuthenticationType authenticationType = [AuthenticationTypeObjc Universal];
NSString * externalId = "externalId";
BOOL continueAnon = true;
NSString * extraJson = "{\"key\":\"value\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> identityService]
       detachAdvancedIdentity:authenticationType
                 externalId:externalId
               continueAnon:continueAnon
                  extraJson:extraJson
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
AuthenticationType authenticationType = AuthenticationType.Universal;
String externalId = "externalId";
boolean continueAnon = true;
String extraJson = "{\"key\":\"value\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getIdentityService().detachAdvancedIdentity(authenticationType, externalId, continueAnon, extraJson, this);

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
var authenticationType = <%= data.branding.codePrefix %>.brainCloudClient.authentication.AUTHENTICATION_TYPE_UNIVERSAL;
var externalId = "externalId";
var continueAnon = true;
var extraJson = {"key":"value"};

<%= data.branding.codePrefix %>.identity.detachAdvancedIdentity(authenticationType, externalId, continueAnon, extraJson, result =>
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
var  authenticationType = AuthenticationType.universal;
var  externalId =  "someId";
var  continueAnon = true;
var  extraJson = {"key":"value"};
​
ServerResponse result = await <%= data.branding.codePrefix %>.identityService.detachAdvancedIdentity(authenticationType:authenticationType, externalId:externalId, continueAnon:continueAnon, extraJson:extraJson);
​
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
local authenticationType = AuthenticationType.universal
local externalId =  "someId"
local continueAnon = true
local extraJson = {key = "value"}
​

local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end

<%= data.branding.codePrefix %>:getIdentityService():detachAdvancedIdentity(authenticationType, externalId, continueAnon, extraJson, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
// N/A
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

<details>
<summary>Common Error Code</summary>

### Status Codes

| Code  | Name                           | Description                                                                                                                                                                                                                                                                                                |
| ----- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 40210 | DOWNGRADING_TO_ANONYMOUS_ERROR | Occurs when detaching the last non-anonymous identity from an account with continueAnon set to false.                                                                                                                                                                                                      |
| 40206 | MISSING_IDENTITY_ERROR         | A "profileId" was supplied in the authentication request submitted with new credentials. In other words the credentials record was not found in the <%= data.branding.productName %> database. The solution would be to provide known credentials or not supply a "profileId" if the user is actually new. |
| 40209 | SECURITY_ERROR                 | Returned if a security exception was encountered.                                                                                                                                                                                                                                                          |

</details>
