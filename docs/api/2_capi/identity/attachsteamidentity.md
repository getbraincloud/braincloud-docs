# AttachSteamIdentity
## Overview
Attach a Steam (steam ID + steam session ticket) identity to the current profile.



<PartialServop service_name="identity" operation_name="ATTACH" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string steamId = "someId";
string sessionTicket = "someToken";

<%= data.branding.codePrefix %>.IdentityService.AttachSteamIdentity(
    steamId,
    sessionTicket,
    SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char * steamId = "someId";
const char * sessionTicket = "someToken";

<%= data.branding.codePrefix %>->getIdentityService()->attachSteamIdentity(
    steamId, sessionTicket, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
- (void)attachSteamIdentity:(NSString *)steamId
        authenticationToken:(NSString *)sessionTicket
            completionBlock:(BCCompletionBlock)cb
       errorCompletionBlock:(BCErrorCompletionBlock)ecb
                   cbObject:(BCCallbackObject)cbObject;
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
public void attachSteamIdentity(String steamId, String sessionTicket, IServerCallback callback)
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.identity.attachSteamIdentity = function(steamId, sessionTicket, callback)
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
40211 | DUPLICATE_IDENTITY_TYPE | Returned when trying to attach an identity type that already exists for that profile. For instance you can have only one Steam identity for a profile.
40212 | MERGE_PROFILES | Returned when trying to attach an identity type that would result in two profiles being merged into one (for instance an anonymous account and a Steam account).

</details>


## Method Parameters
Parameter | Description
--------- | -----------
steamId | String representation of 64 bit steam id
sessionTicket | The player's session ticket (hex encoded)


