# DetachParseIdentity

Detach the Parse identity from this profile.

<PartialServop service_name="identity" operation_name="DETACH" />

## Method Parameters

| Parameter    | Description                                           |
| ------------ | ----------------------------------------------------- |
| parseId      | The parse ID of the user                              |
| continueAnon | Proceed even if the profile will revert to anonymous? |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string parseId = "someId";

<%= data.branding.codePrefix %>.IdentityService.DetachParseIdentity(
    parseId,
    true,
    SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char * parseId = "someId";

<%= data.branding.codePrefix %>->getIdentityService()->detachParseIdentity(
    parseId, false, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
- (void)detachParseIdentity:(NSString *)parseId
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
public void detachParseIdentity(String parseId, boolean continueAnon, IServerCallback callback)
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.identity.detachParseIdentity = function(parseId, continueAnon, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
var  parseId = "someId";
var  continueAnon = true;

ServerResponse result = await <%= data.branding.codePrefix %>.identityService.detachParseIdentity(parseId:parseId, continueAnon:continueAnon);

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
local parseId = "someId"
local continueAnon = true

local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end

<%= data.branding.codePrefix %>:getIdentityService():detachParseIdentity(parseId, continueAnon, callback)
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
