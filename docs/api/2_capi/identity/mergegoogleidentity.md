# MergeGoogleIdentity

Merge the profile associated with the provided Google credentials with the current profile.

NOTE: If using the <%= data.branding.codeWrapper %>, once the merge is complete you should call [<code>SetStoredProfileId</code>](/api/wrapper/setstoredprofileid) in the <%= data.branding.codeWrapper %> with the profileId returned in the Merge call.

<PartialServop service_name="identity" operation_name="MERGE" />

## Method Parameters

| Parameter           | Description                                                                                                                        |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| googleId            | The google ID of the user                                                                                                          |
| authenticationToken | The validated token from the Google SDK (that will be further validated when sent to the <%= data.branding.productName %> service) |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string googleId = "someId";
string token = "someToken";

<%= data.branding.codePrefix %>.IdentityService.MergeGoogleIdentity(
    googleId,
    token,
    SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char * googleId = "someId";
const char * token = "someToken";

<%= data.branding.codePrefix %>->getIdentityService()->mergeGoogleIdentity(
    googleId, token, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
- (void)mergeGoogleIdentity:(NSString *)googleId
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
public void mergeGoogleIdentity(String googleId, String authenticationToken, IServerCallback callback)
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.identity.mergeGoogleIdentity = function(googleId, authenticationToken, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
var  googleId = "someId";
var  authenticationToken = "someToken";

ServerResponse result = await <%= data.branding.codePrefix %>.identityService.mergeGoogleIdentity(googleId:googleId, authenticationToken:authenticationToken);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
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
    "data": {
        "profileId": "f94f7e2d-3cdd-4fd6-9c28-392f7875e9df"
    },
    "status": 200
}
```

</details>

<details>
<summary>Common Error Code</summary>

### Status Codes

| Code  | Name                    | Description                                                                                                                                             |
| ----- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 40211 | DUPLICATE_IDENTITY_TYPE | Returned when trying to attach an identity type that already exists for that profile. For instance you can have only one Google identity for a profile. |

</details>
