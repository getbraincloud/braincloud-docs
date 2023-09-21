# DetachGoogleOpenIdIdentity
## Overview
Detach the Google OpenId identity from this profile.



<PartialServop service_name="identity" operation_name="DETACH" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string googleId = "someId";

<%= data.branding.codePrefix %>.IdentityService.DetachGoogleOpenIdIdentity(
    googleId,
    true,
    SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char * googleId = "someId";

<%= data.branding.codePrefix %>->getIdentityService()->detachGoogleOpenIdIdentity(
    googleId, false, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
- (void)detachGoogleOpenIdIdentity:(NSString *)googleId
                      continueAnon:(bool)continueAnon
                   completionBlock:(BCCompletionBlock)cb
              errorCompletionBlock:(BCErrorCompletionBlock)ecb
                          cbObject:(BCCallbackObject)cbObject;
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
public void detachGoogleOpenIdIdentity(String googleId, boolean continueAnon, IServerCallback callback)
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.identity.detachGoogleOpenIdIdentity = function(googleId, continueAnon, callback)
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

</details>


## Method Parameters
Parameter | Description
--------- | -----------
googleId | The google ID of the user
continueAnon | Proceed even if the profile will revert to anonymous?


