# DetachUniversalIdentity
## Overview
Detach the universal identity from the current profile



## Error Handling Example

```csharp
public void FailureCallback(int statusCode, int reasonCode, string statusMessage, object cbObject) {
        switch (reasonCode) {
            case ReasonCodes.DOWNGRADING_TO_ANONYMOUS_ERROR: { // User is detaching their last idenitity
                // To proceed, contiuneAsAnonymous must be set to true
                <%= data.branding.codePrefix %>.IdentityService.DetachUniversalIdentity(userId, true);

                break;
            }
            case ReasonCodes.MISSING_IDENTITY_ERROR: { // User attempted to detach an identity that doesn't exist
                /**
                 * Need to provide the correct information of an attached identity
                 */
                 break;
            }
            case ReasonCodes.MISSING_IDENTITY_ERROR: { // User attempted to detach an identity that doesn't belong to them
                /**
                 * Need to provide the correct identity
                 */
                 break;
            }
            default: { // Uncaught reasonCode
                /**
                 * Log the unexpected reasonCode to your own internal logs,
                 * to implement needed error handling later
                 */
                break;
            }
        }
    }
```

### Status Codes
Code | Name | Description
---- | ---- | -----------
40210 | DOWNGRADING_TO_ANONYMOUS_ERROR | Occurs when detaching the last non-anonymous identity from an account with continueAnon set to false.
40206 | MISSING_IDENTITY_ERROR | A "profileId" was supplied in the authentication request submitted with new credentials. In other words the credentials record was not found in the <%= data.branding.productName %> database. The solution would be to provide known credentials or not supply a "profileId" if the user is actually new.
40209 | SECURITY_ERROR | Returned if a security exception was encountered.

<PartialServop service_name="identity" operation_name="DETACH" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string userId = "someId";

<%= data.branding.codePrefix %>.IdentityService.DetachUniversalIdentity(
    userId,
    true,
    SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char * userId = "someId";

<%= data.branding.codePrefix %>->getIdentityService()->detachUniversalIdentity(
    userId, false, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
- (void)detachUniversalIdentity:(NSString *)userId
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
public void detachUniversalIdentity(String userId, boolean continueAnon, IServerCallback callback)
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.identity.detachUniversalIdentity = function(userId, continueAnon, callback)
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
userId | The player's user ID
continueAnon | Proceed even if the profile will revert to anonymous?


