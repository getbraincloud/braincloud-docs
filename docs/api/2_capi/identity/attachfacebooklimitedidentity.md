# AttachFacebookLimitedIdentity
## Overview
Attach the user's Facebook Limited login credentials to the current profile.



### Status Codes
Code | Name | Description
---- | ---- | -----------
40211 | DUPLICATE_IDENTITY_TYPE | Returned when trying to attach an identity type that already exists for that profile. For instance you can have only one Facebook identity for a profile.
40212 | MERGE_PROFILES | Returned when trying to attach an identity type that would result in two profiles being merged into one (for instance an anonymous account and a Facebook account).

<PartialServop service_name="identity" operation_name="ATTACH" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string facebookId = "someFacebookId";
string authenticationToken = "someFacebookAuthToken";

<%= data.branding.codePrefix %>.IdentityService.AttachFacebooLimitedkIdentity(
    facebookId,
    authenticationToken,
    SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char * facebookId = "someFacebookId";
const char * authenticationToken = "someFacebookAuthToken";

<%= data.branding.codePrefix %>->getIdentityService()->attachFacebookLimitedIdentity(
    facebookId, authenticationToken, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
- (void)attachFacebookLimitedIdentity:(NSString *)facebookId
                  authenticationToken:(NSString *)token
                      completionBlock:(BCCompletionBlock)cb
                 errorCompletionBlock:(BCErrorCompletionBlock)ecb
                             cbObject:(BCCallbackObject)cbObject;
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String facebookId = "someFacebookId";
String authenticationToken = "someFacebookAuthToken";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getIdentityService().attachFacebookLimitedIdentity(facebookId, authenticationToken, this);

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
var facebookId = "someFacebookId";
var authenticationToken = "someFacebookAuthToken";
<%= data.branding.codePrefix %>.identity.attachFacebookLimitedIdentity(facebookId, authenticationToken, result =>
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
facebookId | The facebook id of the user
authenticationToken | The validated token from the Facebook SDK (that will be further validated when sent to the <%= data.branding.productName %> service)


