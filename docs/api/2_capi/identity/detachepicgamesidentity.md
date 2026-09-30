# DetachEpicGamesIdentity

Detach the Epic Games identity from this profile.

<PartialServop service_name="identity" operation_name="DETACH" />

:::note
Epic Games support was added to the C# (Unity) client library first. Check the release notes of your client library to confirm it is available on your platform.
:::

## Method Parameters
Parameter | Description
--------- | -----------
epicAccountId | The Epic Account ID of the user (LocalUserId.ToString() from the EOS SDK Auth Interface).
continueAnon | Proceed even if the profile will revert to anonymous?

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string epicAccountId = "0123456789abcdef0123456789abcdef";

<%= data.branding.codePrefix %>.IdentityService.DetachEpicGamesIdentity(
    epicAccountId,
    true,
    SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* epicAccountId = "0123456789abcdef0123456789abcdef";
bool continueAnon = true;

<%= data.branding.codePrefix %>->getIdentityService()->detachEpicGamesIdentity(
    epicAccountId, continueAnon, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Obj-C">
```

```objectivec
NSString * epicAccountId = @"0123456789abcdef0123456789abcdef";
BOOL continueAnon = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> identityService]
    detachEpicGamesIdentity:epicAccountId
    continueAnon:continueAnon
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
boolean continueAnon = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getIdentityService().detachEpicGamesIdentity(epicAccountId, continueAnon, this);

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
var continueAnon = true;

<%= data.branding.codePrefix %>.identity.detachEpicGamesIdentity(epicAccountId, continueAnon, result =>
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
var continueAnon = true;

ServerResponse result = await <%= data.branding.codePrefix %>.identityService.detachEpicGamesIdentity(epicAccountId:epicAccountId, continueAnon:continueAnon);

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
local continueAnon = true

local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end

<%= data.branding.codePrefix %>:getIdentityService():detachEpicGamesIdentity(epicAccountId, continueAnon, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="gdscript" label="GDScript">
```

```gdscript
var epic_account_id = "0123456789abcdef0123456789abcdef"
var continue_anon = true

var result = await <%= data.branding.codePrefix %>.identity_service.detach_epic_games_identity(epic_account_id, continue_anon)

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
    "operation": "DETACH",
    "data": {
        "externalId": "0123456789abcdef0123456789abcdef",
        "authenticationType": "EpicGames",
        "continueAnon": true
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
    "data": null,
    "status": 200
}
```

</details>

<details>
<summary>Common Error Code</summary>

### Status Codes

| Code  | Name                           | Description                                                                                           |
| ----- | ------------------------------ | ----------------------------------------------------------------------------------------------------- |
| 40210 | DOWNGRADING_TO_ANONYMOUS_ERROR | Occurs when detaching the last non-anonymous identity from an account with continueAnon set to false. |

</details>
