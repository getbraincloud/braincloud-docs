# AttachAdvancedIdentity
## Overview
Attach the user's credentials to the current profile.




### Status Codes
Code | Name | Description
---- | ---- | -----------
40211 | DUPLICATE_IDENTITY_TYPE | Returned when trying to attach an identity type that already exists for that profile. For instance you can have only one Email identity for a profile.
40212 | MERGE_PROFILES | Returned when trying to attach an identity type that would result in two profiles being merged into one (for instance an anonymous account and a Email account).
550022 | INVALID_PASSWORD_CONTENT | The password doesn't meet the minimum password requirements.

<PartialServop service_name="identity" operation_name="ATTACH" / >

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

<%= data.branding.codePrefix %>.IdentityService.AttachAdvancedIdentity(
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

<%= data.branding.codePrefix %>->getIdentityService()->attachAdvancedIdentity(
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
       attachAdvancedIdentity:authenticationType
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

<%= data.branding.codePrefix %>.getIdentityService().attachAdvancedIdentity(authenticationType, ids, extraJson, this);

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

<%= data.branding.codePrefix %>.identity.attachAdvancedIdentity(authenticationType, ids, forceCreate, extraJson, result =>
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

## Method Parameters
Parameter | Description
--------- | -----------
authenticationType | Universal, Universal, Facebook, etc
ids | Auth IDs structure
extraJson | Additional to piggyback along with the call, to be picked up by pre- or post- hooks. Leave empty string for no extraJson


