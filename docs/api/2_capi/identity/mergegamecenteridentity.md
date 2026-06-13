# MergeGameCenterIdentity

Merge the profile associated with the specified Game Center identity with the current profile.

NOTE: If using the <%= data.branding.codeWrapper %>, once the merge is complete you should call [<code>SetStoredProfileId</code>](/api/wrapper/setstoredprofileid) in the <%= data.branding.codeWrapper %> with the profileId returned in the Merge call.

<PartialServop service_name="identity" operation_name="MERGE" />

## Method Parameters

| Parameter    | Description                                                                            |
| ------------ | -------------------------------------------------------------------------------------- |
| gameCenterId | The user's Game Center ID — can be the PlayerId, GamePlayerId, or TeamPlayerId from the GKLocalPlayer object |
| timestamp | The timestamp value returned as part of the identity verification signature fetch from Game Center. Required for modern Game Center verification. |
| publicKeyUrl | The public key URL returned as part of the identity verification signature fetch from Game Center. Required for modern Game Center verification. |
| signature | The raw signature bytes returned from Game Center (via GetSignature()). Required for modern Game Center verification. |
| salt | The raw salt bytes returned from Game Center (via GetSalt()). Required for modern Game Center verification. |
| teamPlayerId | Only required when gameCenterId is set to a value other than TeamPlayerId. |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string gameCenterId = "someId"; // PlayerId, GamePlayerId, or TeamPlayerId
ulong timestamp = 0;        // from GKLocalPlayer identity verification
string publicKeyUrl = "";   // from GKLocalPlayer identity verification
byte[] signature = null;    // from GKLocalPlayer GetSignature()
byte[] salt = null;         // from GKLocalPlayer GetSalt()
string teamPlayerId = "";   // only if gameCenterId is not TeamPlayerId

<%= data.branding.codePrefix %>.IdentityService.MergeGameCenterIdentity(
    gameCenterId, timestamp, publicKeyUrl,
    signature, salt, teamPlayerId,
    SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* gameCenterId = "someId"; // playerId, gamePlayerId, or teamPlayerId
uint64_t timestamp = 0;           // from GKLocalPlayer identity verification
std::string publicKeyUrl = "";    // from GKLocalPlayer identity verification
const uint8_t* signature = NULL;  // from GKLocalPlayer GetSignature()
size_t signatureLength = 0;
const uint8_t* salt = NULL;       // from GKLocalPlayer GetSalt()
size_t saltLength = 0;
std::string teamPlayerId = "";    // only if gameCenterId is not teamPlayerId

<%= data.branding.codePrefix %>->getIdentityService()->mergeGameCenterIdentity(
    gameCenterId, timestamp, publicKeyUrl,
    signature, signatureLength, salt, saltLength,
    teamPlayerId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
- (void)mergeGameCenterIdentity:(NSString *)gameCenterId
                      timestamp:(uint64_t)timestamp
                   publicKeyUrl:(NSString *)publicKeyUrl
                      signature:(NSData *)signature
                           salt:(NSData *)salt
                   teamPlayerId:(NSString *)teamPlayerId
                completionBlock:(BCCompletionBlock)cb
           errorCompletionBlock:(BCErrorCompletionBlock)ecb
                       cbObject:(BCCallbackObject)cbObject;
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
public void mergeGameCenterIdentity(String gameCenterId, long timestamp, String publicKeyUrl, byte[] signature, byte[] salt, String teamPlayerId, IServerCallback callback)
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.identity.mergeGameCenterIdentity = function(gameCenterId, timestamp, publicKeyUrl, signature, salt, teamPlayerId, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
var gameCenterId = "someId"; // playerId, gamePlayerId, or teamPlayerId
int timestamp = 0;             // from GKLocalPlayer identity verification
String publicKeyUrl = "";      // from GKLocalPlayer identity verification
List<int>? signature = null;   // from GKLocalPlayer GetSignature()
List<int>? salt = null;        // from GKLocalPlayer GetSalt()
String teamPlayerId = "";      // only if gameCenterId is not teamPlayerId

ServerResponse result = await <%= data.branding.codePrefix %>.identityService.mergeGameCenterIdentity(
    gameCenterId: gameCenterId,
    timestamp: timestamp,
    publicKeyUrl: publicKeyUrl,
    signature: signature,
    salt: salt,
    teamPlayerId: teamPlayerId);

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
local gameCenterId = "someId" -- playerId, gamePlayerId, or teamPlayerId
local timestamp = 0          -- from GKLocalPlayer identity verification
local publicKeyUrl = ""      -- from GKLocalPlayer identity verification
local signature = nil        -- from GKLocalPlayer GetSignature()
local salt = nil             -- from GKLocalPlayer GetSalt()
local teamPlayerId = ""      -- only if gameCenterId is not teamPlayerId

local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end

<%= data.branding.codePrefix %>:getIdentityService():mergeGameCenterIdentity(
    gameCenterId, timestamp, publicKeyUrl,
    signature, salt, teamPlayerId, callback)
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

| Code  | Name                    | Description                                                                                                                                                  |
| ----- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 40211 | DUPLICATE_IDENTITY_TYPE | Returned when trying to attach an identity type that already exists for that profile. For instance you can have only one Game Center identity for a profile. |

</details>
