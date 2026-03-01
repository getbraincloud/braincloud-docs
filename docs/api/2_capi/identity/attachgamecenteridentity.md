# AttachGameCenterIdentity

Attach a Game Center identity to the current profile.

<PartialServop service_name="identity" operation_name="ATTACH" />

## Method Parameters

| Parameter    | Description                                                                            |
| ------------ | -------------------------------------------------------------------------------------- |
| gameCenterId | The player's game center id (use the playerID property from the local GKPlayer object) |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string gameCenterId = "someId";

<%= data.branding.codePrefix %>.IdentityService.AttachGameCenterIdentity(
    gameCenterId,
    SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char * gameCenterId = "someId";

<%= data.branding.codePrefix %>->getIdentityService()->attachGameCenterIdentity(
    gameCenterId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
- (void)attachGameCenterIdentity:(NSString *)gameCenterId
                 completionBlock:(BCCompletionBlock)cb
            errorCompletionBlock:(BCErrorCompletionBlock)ecb
                        cbObject:(BCCallbackObject)cbObject;
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
public void attachGameCenterIdentity(String gameCenterId, IServerCallback callback)
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.identity.attachGameCenterIdentity = function(gameCenterId, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
var  gameCenterId = "someId";

ServerResponse result = await <%= data.branding.codePrefix %>.identityService.attachGameCenterIdentity(gameCenterId:gameCenterId);

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

local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end

<%= data.branding.codePrefix %>:getIdentityService():attachGameCenterIdentity(gameCenterId, callback)
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
    "status": 200,
    "data": null
}
```

</details>

<details>
<summary>Common Error Code</summary>

### Status Codes

| Code  | Name                    | Description                                                                                                                                                            |
| ----- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 40211 | DUPLICATE_IDENTITY_TYPE | Returned when trying to attach an identity type that already exists for that profile. For instance you can have only one Game Center identity for a profile.           |
| 40212 | MERGE_PROFILES          | Returned when trying to attach an identity type that would result in two profiles being merged into one (for instance an anonymous account and a Game Center account). |

</details>
