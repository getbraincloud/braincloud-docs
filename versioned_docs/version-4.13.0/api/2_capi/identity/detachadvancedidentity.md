# DetachAdvancedIdentity
## Overview
Detach the identity from this profile.




<PartialServop service_name="identity" operation_name="DETACH" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
AuthenticationType authenticationType = AuthenticationType.Universal;
AuthenticationIds ids;
ids.externalId = "authAdvancedUser";
ids.authenticationToken = "authAdvancedPass";
ids.authenticationSubType = "";
string extraJson = "{\"key\":\"value\"}";

<%= data.branding.codePrefix %>.IdentityService.DetachAdvancedIdentity(
    authenticationType,
    ids,
    extraJson,
    SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
AuthenticationType authenticationType = AuthenticationType::Universal;
AuthenticationIds ids = { "authAdvancedUser", "authAdvancedPass", "" };
const char* extraJson = "{\"key\":\"value\"}";

<%= data.branding.codePrefix %>->getIdentityService()->detachAdvancedIdentity(
    authenticationType, ids, extraJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
AuthenticationType authenticationType = [AuthenticationTypeObjc Universal];
AuthenticationIds *ids = [[AuthenticationIdsObjc alloc]init];
ids.externalId = @"authAdvancedUser";
ids.authenticationToken = @"authAdvancedPass";
ids.authenticationSubType = @"";
NSString * extraJson = "{\"key\":\"value\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> identityService]
       detachAdvancedIdentity:authenticationType
                        ids:ids
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
AuthenticationIds ids = new AuthenticationIds ("authAdvancedUser", "authAdvancedPass", "");
string extraJson = "{\"key\":\"value\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getIdentityService().detachAdvancedIdentity(authenticationType, ids, extraJson, this);

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
var ids = {externalId: "authAdvancedUser", authenticationToken: "authAdvancedPass", authenticationSubType: ""};
var forceCreate = true;
var extraJson = {"key":"value"};

<%= data.branding.codePrefix %>.identity.detachAdvancedIdentity(authenticationType, ids, forceCreate, extraJson, result =>
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
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
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
    "status" : 200,
    "data" : null
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40210 | DOWNGRADING_TO_ANONYMOUS_ERROR | Occurs when detaching the last non-anonymous identity from an account with continueAnon set to false.
40206 | MISSING_IDENTITY_ERROR | A "profileId" was supplied in the authentication request submitted with new credentials. In other words the credentials record was not found in the <%= data.branding.productName %> database. The solution would be to provide known credentials or not supply a "profileId" if the user is actually new.
40209 | SECURITY_ERROR | Returned if a security exception was encountered.

</details>


## Method Parameters
Parameter | Description
--------- | -----------
authenticationType | Universal, Universal, Facebook, etc
ids | Auth IDs structure
extraJson | Additional to piggyback along with the call, to be picked up by pre- or post- hooks. Leave empty string for no extraJson


