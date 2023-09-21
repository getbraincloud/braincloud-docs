# AttachTwitterIdentity
## Overview
Attach the user's Twitter credentials to the current profile.



<PartialServop service_name="identity" operation_name="ATTACH" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string twitterId = "someId";
string token = "someToken";
string secret = "someSecret";

<%= data.branding.codePrefix %>.IdentityService.AttachTwitterIdentity(
    twitterId,
    token,
    secret,
    SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char * twitterId = "someId";
const char * token = "someToken";
const char * secret = "secret";

<%= data.branding.codePrefix %>->getIdentityService()->attachTwitterIdentity(
    twitterId, token, secret, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
- (void)attachTwitterIdentity:(NSString *)twitterId
          authenticationToken:(NSString *)token
                       secret:(NSString *)secret
              completionBlock:(BCCompletionBlock)cb
         errorCompletionBlock:(BCErrorCompletionBlock)ecb
                     cbObject:(BCCallbackObject)cbObject;
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
public void attachTwitterIdentity(
        String twitterId,
        String authenticationToken,
        String secret,
        IServerCallback callback)
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.identity.attachTwitterIdentity = function(twitterId, authenticationToken, secret, callback)
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
40211 | DUPLICATE_IDENTITY_TYPE | Returned when trying to attach an identity type that already exists for that profile. For instance you can have only one Twitter identity for a profile.
40212 | MERGE_PROFILES | Returned when trying to attach an identity type that would result in two profiles being merged into one (for instance an anonymous account and a Twitter account).

</details>


## Method Parameters
Parameter | Description
--------- | -----------
twitterId | String representation of a Twitter user ID
authenticationToken | The authentication token derived via the Twitter API
secret | The secret given when attempting to link with Twitter


