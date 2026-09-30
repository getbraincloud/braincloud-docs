# MergeEpicGamesIdentity

Merge the profile associated with the provided Epic Games credentials with the current profile.

NOTE: If using the <%= data.branding.codeWrapper %>, once the merge is complete you should call [<code>SetStoredProfileId</code>](/api/wrapper/setstoredprofileid) in the <%= data.branding.codeWrapper %> with the profileId returned in the Merge call.

<PartialServop service_name="identity" operation_name="MERGE" />

:::note
Epic Games support was added to the C# (Unity) client library first. Check the release notes of your client library to confirm it is available on your platform.
:::

## Method Parameters
Parameter | Description
--------- | -----------
epicAccountId | LocalUserId.ToString() retrieved from the EOS SDK Auth Interface's `Login` method. This is the Epic Account ID that will be attached to the user's profile, and it must match the `sub` claim of `authIdToken`.
authIdToken | The ID token JWT (`IdToken.Value.JsonWebToken`) retrieved from the EOS SDK Auth Interface's `CopyIdToken` method. It is validated by the <%= data.branding.productName %> server.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string epicAccountId = "0123456789abcdef0123456789abcdef";
string authIdToken = "idTokenFromEOS";

<%= data.branding.codePrefix %>.IdentityService.MergeEpicGamesIdentity(
    epicAccountId,
    authIdToken,
    SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* epicAccountId = "0123456789abcdef0123456789abcdef";
const char* authIdToken = "idTokenFromEOS";

<%= data.branding.codePrefix %>->getIdentityService()->mergeEpicGamesIdentity(
    epicAccountId, authIdToken, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Obj-C">
```

```objectivec
NSString * epicAccountId = @"0123456789abcdef0123456789abcdef";
NSString * authIdToken = @"idTokenFromEOS";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> identityService]
    mergeEpicGamesIdentity:epicAccountId
    authIdToken:authIdToken
    completionBlock:successBlock
    errorCompletionBlock:failureBlock
    cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String epicAccountId = "0123456789abcdef0123456789abcdef";
String authIdToken = "idTokenFromEOS";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getIdentityService().mergeEpicGamesIdentity(epicAccountId, authIdToken, this);

public void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)
{
    System.out.print(String.format("Success | %s", jsonData.toString()));
}
public void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)
{
    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));
}
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var epicAccountId = "0123456789abcdef0123456789abcdef";
var authIdToken = "idTokenFromEOS";

<%= data.branding.codePrefix %>.identity.mergeEpicGamesIdentity(epicAccountId, authIdToken, result =>
{
    var status = result.status;
    console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
var epicAccountId = "0123456789abcdef0123456789abcdef";
var authIdToken = "idTokenFromEOS";

ServerResponse result = await <%= data.branding.codePrefix %>.identityService.mergeEpicGamesIdentity(epicAccountId:epicAccountId, authIdToken:authIdToken);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
local epicAccountId = "0123456789abcdef0123456789abcdef"
local authIdToken = "idTokenFromEOS"

local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end

<%= data.branding.codePrefix %>:getIdentityService():mergeEpicGamesIdentity(epicAccountId, authIdToken, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="gdscript" label="GDScript">
```

```gdscript
var epic_account_id = "0123456789abcdef0123456789abcdef"
var auth_id_token = "idTokenFromEOS"

var result = await <%= data.branding.codePrefix %>.identity_service.merge_epic_games_identity(epic_account_id, auth_id_token)

if result.status == 200:
	print("Success")
else:
	print("Failed: %s" % result.status_message)
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

```r
{
    "service": "identity",
    "operation": "MERGE",
    "data": {
        "externalId": "0123456789abcdef0123456789abcdef",
        "authenticationToken": "idTokenFromEOS",
        "authenticationType": "EpicGames"
    }
}
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

| Code  | Name                    | Description                                                                                                                                                         |
| ----- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 40211 | DUPLICATE_IDENTITY_TYPE | Returned when trying to attach an identity type that already exists for that profile. For instance you can have only one Epic Games identity for a profile. |

</details>
