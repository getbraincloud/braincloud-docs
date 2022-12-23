# MergeTwitterIdentity
## Overview
Merge the profile associated with the provided Twitter credentials with the current profile.

NOTE: If using the <%= data.branding.codeWrapper %>, once the merge is complete you should call [<code>SetStoredProfileId</code>](/api/wrapper/setstoredprofileid) in the <%= data.branding.codeWrapper %> with the profileId returned in the Merge call.



### Status Codes
Code | Name | Description
---- | ---- | -----------
40211 | DUPLICATE_IDENTITY_TYPE | Returned when trying to attach an identity type that already exists for that profile. For instance you can have only one Twitter identity for a profile.

<PartialServop service_name="identity" operation_name="MERGE" / >

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

<%= data.branding.codePrefix %>.IdentityService.MergeTwitterIdentity(
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

<%= data.branding.codePrefix %>->getIdentityService()->mergeTwitterIdentity(
    twitterId, token, secret, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
- (void)mergeTwitterIdentity:(NSString *)twitterId
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
public void mergeTwitterIdentity(
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
<%= data.branding.codePrefix %>.identity.mergeTwitterIdentity = function(twitterId, authenticationToken, secret, callback)
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
twitterId | String representation of a Twitter user ID
authenticationToken | The authentication token derived via the Twitter API
secret | The secret given when attempting to link with Twitter


