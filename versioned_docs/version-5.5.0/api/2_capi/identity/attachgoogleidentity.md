# AttachGoogleIdentity

Attach the user's Google credentials to the current profile.

<PartialServop service_name="identity" operation_name="ATTACH" />

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

<%= data.branding.codePrefix %>.IdentityService.AttachGoogleIdentity(
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

<%= data.branding.codePrefix %>->getIdentityService()->attachGoogleIdentity(
    googleId, token, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
- (void)attachGoogleIdentity:(NSString *)googleId
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
public void attachGoogleIdentity(String googleId, String authenticationToken, IServerCallback callback)
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.identity.attachGoogleIdentity = function(googleId, authenticationToken, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
var  googleId = "someId";
var  authenticationToken = "someToken";

ServerResponse result = await <%= data.branding.codePrefix %>.identityService.attachGoogleIdentity(googleId:googleId, authenticationToken:authenticationToken);

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
    "status": 200,
    "data": null
}
```

</details>

<details>
<summary>Common Error Code</summary>

### Status Codes

| Code  | Name                    | Description                                                                                                                                                       |
| ----- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 40211 | DUPLICATE_IDENTITY_TYPE | Returned when trying to attach an identity type that already exists for that profile. For instance you can have only one Google identity for a profile.           |
| 40212 | MERGE_PROFILES          | Returned when trying to attach an identity type that would result in two profiles being merged into one (for instance an anonymous account and a Google account). |

</details>
