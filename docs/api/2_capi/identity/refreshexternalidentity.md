# RefreshExternalIdentity

Refreshes the current user's External identity. The token is re-validated by the app's external authentication script (the same one used by [AuthenticateExternal](/api/capi/authentication/authenticateexternal)), and the call succeeds only if the identity is already attached to the current profile.

If the external authentication script returns an auth payload, it is included in the response as `authPayload`.

<PartialServop service_name="identity" operation_name="REFRESH_EXTERNAL_IDENTITY" />

## Method Parameters

| Parameter           | Description                                                     |
| ------------------- | --------------------------------------------------------------- |
| externalId          | User ID                                                         |
| authenticationToken | Password or client side token                                   |
| externalAuthName    | The name of the external authentication mechanism (script) to use |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// Not available in this client library. To view example, switch to the Cloud Code or Raw tab
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// Not available in this client library. To view example, switch to the Cloud Code or Raw tab
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Obj-C">
```

```objectivec
// Not available in this client library. To view example, switch to the Cloud Code or Raw tab
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// Not available in this client library. To view example, switch to the Cloud Code or Raw tab
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// Not available in this client library. To view example, switch to the Cloud Code or Raw tab
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
// Not available in this client library. To view example, switch to the Cloud Code or Raw tab
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
-- Not available in this client library. To view example, switch to the Cloud Code or Raw tab
```

```mdx-code-block
</TabItem>
<TabItem value="gdscript" label="GDScript">
```

```gdscript
Not available in this client library. To view example, switch to the Cloud Code or Raw tab
```

```mdx-code-block
</TabItem>
<TabItem value="lua" label="Lua">
```

```lua
-- Not available in this client library. To view example, switch to the Cloud Code or Raw tab
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var externalId = "user@example.com";
var authenticationToken = "ghbiuhgvbiuhbiunbuibgin";
var externalAuthName = "MyAuthScript";
var identityProxy = bridge.getIdentityServiceProxy();

var postResult = identityProxy.refreshExternalIdentity(externalId, authenticationToken, externalAuthName);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service": "identity",
    "operation": "REFRESH_EXTERNAL_IDENTITY",
    "data": {
        "externalId": "user@example.com",
        "authenticationToken": "ghbiuhgvbiuhbiunbuibgin",
        "externalAuthName": "MyAuthScript"
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
        "externalId": "user@example.com",
        "authenticationType": "External",
        "externalAuthName": "MyAuthScript"
    },
    "status": 200
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes

| Code  | Name                       | Description                                                                 |
| ----- | -------------------------- | --------------------------------------------------------------------------- |
| 40307 | TOKEN_DOES_NOT_MATCH_USER  | The external authentication script rejected the token.                       |
| 40206 | MISSING_IDENTITY_ERROR     | The current profile does not have this External identity attached.           |

</details>
