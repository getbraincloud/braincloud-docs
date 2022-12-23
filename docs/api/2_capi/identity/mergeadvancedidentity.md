# MergeAdvancedIdentity
## Overview
Merge the profile associated with the provided credentials with the current profile.

<PartialServop service_name="identity" operation_name="MERGE" / >

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

<%= data.branding.codePrefix %>.IdentityService.MergeAdvancedIdentity(
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

<%= data.branding.codePrefix %>->getIdentityService()->mergeAdvancedIdentity(
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
       mergeAdvancedIdentity:authenticationType
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

<%= data.branding.codePrefix %>.getIdentityService().mergeAdvancedIdentity(authenticationType, ids, extraJson, this);

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

<%= data.branding.codePrefix %>.identity.mergeAdvancedIdentity(authenticationType, ids, forceCreate, extraJson, result =>
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
   "data":{  
      "profileId":"f94f7e2d-3cdd-4fd6-9c28-392f7875e9df"
   },
   "status":200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
authenticationType | Universal, Universal, Facebook, etc
ids | Auth IDs structure
extraJson | Additional to piggyback along with the call, to be picked up by pre- or post- hooks. Leave empty string for no extraJson


