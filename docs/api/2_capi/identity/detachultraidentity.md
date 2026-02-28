# DetachUltraIdentity

Detach the Ultra identity from this profile.

<PartialServop service_name="identity" operation_name="DETACH" />

## Method Parameters

| Parameter     | Description                                                      |
| ------------- | ---------------------------------------------------------------- |
| ultraUsername | It's what the user uses to log into the Ultra endpoint initially |
| continueAnon  | Proceed even if the profile will revert to anonymous?            |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string ultraUsername = "ultraUsername";

<%= data.branding.codePrefix %>.IdentityService.DetachOculusIdentity(
    ultraUsername,
    true,
    SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char * ultraUsername = "ultraUsername";

<%= data.branding.codePrefix %>->getIdentityService()->detachOculusIdentity(
    ultraUsername, false, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
- (void)detachUltraIdentity:(NSString *)ultraUsername
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
public void detachUltraIdentity(String ultraUsername, boolean continueAnon, IServerCallback callback)
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.identity.detachUltraIdentity = function(ultraUsername, continueAnon, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
var  ultraUsername = "someId";
var  continueAnon = true;

ServerResponse result = await <%= data.branding.codePrefix %>.identityService.detachUltraIdentity(ultraUsername:ultraUsername, continueAnon:continueAnon);

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
local ultraUsername = "someId"
local continueAnon = true

local callback = function(result)
	if result.statusCode == 200 then
		print("Success")
	else
		print("Failed | " .. tostring(result.status))
	end
end

<%= data.branding.codePrefix %>:getIdentityService():detachUltraIdentity(ultraUsername, continueAnon, callback)
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
