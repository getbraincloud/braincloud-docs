# AttachFacebookIdentity
## Overview
Attach the user's Facebook credentials to the current profile.



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

<%= data.branding.codePrefix %>.IdentityService.AttachFacebookIdentity(
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

<%= data.branding.codePrefix %>->getIdentityService()->attachFacebookIdentity(
    facebookId, authenticationToken, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
- (void)attachFacebookIdentity:(NSString *)facebookId
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
public void attachFacebookIdentity(String facebookId, String authenticationToken, IServerCallback callback)
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.identity.attachFacebookIdentity = function(facebookId, authenticationToken, callback)
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
40211 | DUPLICATE_IDENTITY_TYPE | Returned when trying to attach an identity type that already exists for that profile. For instance you can have only one Facebook identity for a profile.
40212 | MERGE_PROFILES | Returned when trying to attach an identity type that would result in two profiles being merged into one (for instance an anonymous account and a Facebook account).

</details>


## Method Parameters
Parameter | Description
--------- | -----------
facebookId | The facebook id of the user
authenticationToken | The validated token from the Facebook SDK (that will be further validated when sent to the <%= data.branding.productName %> service)


