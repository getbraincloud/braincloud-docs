# AttachEmailIdentity
## Overview
Attach a Email and Password identity to the current profile.



## Error Handling Example

```csharp
public void FailureCallback(int statusCode, int reasonCode, string statusMessage, object cbObject) {
        switch (reasonCode) {
            case ReasonCodes.DUPLICATE_IDENTITY_TYPE: { // User is attempting to attach an idenity of the type that exists on there account
                // Must get old idenity of type Email, and detach it first. see GetIdentities
                <%= data.branding.codePrefix %>.IdentityService.DetachEmailIdentity(oldEmail, oldPassword);
                // Then, can add a new Identity of that type
                <%= data.branding.codePrefix %>.IdentityService.AttachEmailIdentity(email, password);
                break;
            }
            case ReasonCodes.MERGE_PROFILES: { // User to attaching a idenity that is connected to a different profile
                /**
                 * Prompt the user that the identity already exists with a different account.
                 * Ask if they wish to merge the two accounts, and perform a merge if true
                 */
                <%= data.branding.codePrefix %>.MergeEmailIdentity(email, password, true);
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
string email = "email@domain.com";
string password = "somePassword";

<%= data.branding.codePrefix %>.IdentityService.AttachEmailIdentity(
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

<%= data.branding.codePrefix %>->getIdentityService()->attachEmailIdentity(
    email, password, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
- (void)attachEmailIdentity:(NSString *)email
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
public void attachEmailIdentity(String email, String password, IServerCallback callback)
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.identity.attachEmailIdentity = function(email, password, callback)
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
email | The user's e-mail address
password | The user's password


