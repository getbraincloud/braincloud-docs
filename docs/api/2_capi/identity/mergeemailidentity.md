# MergeEmailIdentity
## Overview
Merge the profile associated with the provided e=mail with the current profile.

NOTE: If using the <%= data.branding.codeWrapper %>, once the merge is complete you should call [<code>SetStoredProfileId</code>](/api/wrapper/setstoredprofileid) in the <%= data.branding.codeWrapper %> with the profileId returned in the Merge call.



## Error Handling Example

```csharp
public void FailureCallback(int statusCode, int reasonCode, string statusMessage, object cbObject) {
        switch (reasonCode) {
            case ReasonCodes.MISSING_IDENTITY_ERROR: { // User attempted to merge an identity that doesn't exist
                /**
                 * Need to provide the correct information of the identity to merge
                 */
                 break;
            }
            case ReasonCodes.DUPLICATE_IDENTITY_TYPE: { // Users cannot attach an identity of a type that exists on there account
                /**
                 * Inform user to detach identities that are of the same type of the merging account,
                 * before the merge
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
40206 | MISSING_IDENTITY_ERROR | A "profileId" was supplied in the authentication request submitted with new credentials. In other words the credentials record was not found in the <%= data.branding.productName %> database. The solution would be to provide known credentials or not supply a "profileId" if the user is actually new.
40211 | DUPLICATE_IDENTITY_TYPE | Returned when trying to attach an identity type that already exists for that profile. For instance you can have only one Email identity for a profile.

<PartialServop service_name="identity" operation_name="MERGE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string email = "email@domain.com";
string password = "somePassword";

<%= data.branding.codePrefix %>.IdentityService.MergeEmailIdentity(
    email,
    password,
    SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char * email = "email@domain.com";
const char * password = "someToken";

<%= data.branding.codePrefix %>->getIdentityService()->mergeEmailIdentity(
    email, password, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
- (void)mergeEmailIdentity:(NSString *)email
       authenticationToken:(NSString *)password
           completionBlock:(BCCompletionBlock)cb
      errorCompletionBlock:(BCErrorCompletionBlock)ecb
                  cbObject:(BCCallbackObject)cbObject;
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
public void mergeEmailIdentity(String email, String password, IServerCallback callback)
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.identity.mergeEmailIdentity = function(email, password, callback)
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
email | The player's e-mail address
password | The player's password


