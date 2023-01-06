# AttachUniversalIdentity
## Overview
Attach a Universal (userid + password) identity to the current profile.



```csharp
public void FailureCallback(int statusCode, int reasonCode, string statusMessage, object cbObject) {
        switch (reasonCode) {
            case ReasonCodes.DUPLICATE_IDENTITY_TYPE: { // User is attempting to attach an idenity of the type that exists on there account
                // Must get old idenity of type Universal, and detach it first. see GetIdentities
                <%= data.branding.codePrefix %>.IdentityService.DetachUniversalIdentity(oldUserId, oldPassword);
                // Then, can add a new Identity of that type
                <%= data.branding.codePrefix %>.IdentityService.AttachUniversalIdentity(userId, password);
                break;
            }
            case ReasonCodes.MERGE_PROFILES: { // User to attaching a idenity that is connected to a different profile
                /**
                 * Prompt the user that the identity already exists with a different account.
                 * Ask if they wish to merge the two accounts, and perform a merge if true
                 */
                <%= data.branding.codePrefix %>.MergeUniversalIdentity(userId, password, true);
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

<PartialServop service_name="identity" operation_name="ATTACH" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string userId = "someId";
string password = "someToken";

<%= data.branding.codePrefix %>.IdentityService.AttachUniversalIdentity(
    userId,
    password,
    SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char * userId = "someId";
const char * password = "someToken";

<%= data.branding.codePrefix %>->getIdentityService()->attachUniversalIdentity(
    userId, password, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
- (void)attachUniversalIdentity:(NSString *)userId
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
public void attachUniversalIdentity(String userId, String password, IServerCallback callback)
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.identity.attachUniversalIdentity = function(userId, password, callback)
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
40211 | DUPLICATE_IDENTITY_TYPE | Returned when trying to attach an identity type that already exists for that profile. For instance you can have only one Universal identity for a profile.
40212 | MERGE_PROFILES | Returned when trying to attach an identity type that would result in two profiles being merged into one (for instance an anonymous account and a Universal account).
550022 | INVALID_PASSWORD_CONTENT | The password doesn't meet the minimum password requirements.

</details>


## Method Parameters
Parameter | Description
--------- | -----------
userId | The user's user ID
password | The user's password


