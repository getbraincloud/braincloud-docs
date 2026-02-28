# DetachGameCenterIdentity

Detach the Game Center identity from the current profile.

<PartialServop service_name="identity" operation_name="DETACH" />

## Method Parameters

| Parameter    | Description                                                                            |
| ------------ | -------------------------------------------------------------------------------------- |
| gameCenterId | The player's game center id (use the playerID property from the local GKPlayer object) |
| continueAnon | Proceed even if the profile will revert to anonymous?                                  |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string gameCenterId = "someId";

<%= data.branding.codePrefix %>.IdentityService.DetachGameCenterIdentity(
    gameCenterId,
    true,
    SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char * gameCenterId = "someId";

<%= data.branding.codePrefix %>->getIdentityService()->detachGameCenterIdentity(
    gameCenterId, false, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
- (void)detachGameCenterIdentity:(NSString *)gameCenterId
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
public void detachGameCenterIdentity(String gameCenterId, boolean continueAnon, IServerCallback callback)
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.identity.detachGameCenterIdentity = function(gameCenterId, continueAnon, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
var  gameCenterId = "someId";
var  continueAnon = true;

ServerResponse result = await <%= data.branding.codePrefix %>.identityService.detachGameCenterIdentity(gameCenterId:gameCenterId, continueAnon:continueAnon);

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
local gameCenterId = "someId"
local continueAnon = true

local callback = function(result)
	if result.statusCode == 200 then
		print("Success")
	else
		print("Failed | " .. tostring(result.status))
	end
end

<%= data.branding.codePrefix %>:getIdentityService():detachGameCenterIdentity(gameCenterId, continueAnon, callback)
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
