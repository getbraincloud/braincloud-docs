# AuthenticateGameCenter

Authenticate the user using their Game Center ID.



:::caution
Make sure you've initialized the <%= data.branding.productName %> wrapper before authenticating.
:::

<PartialServop service_name="authenticationV2" operation_name="AUTHENTICATE" / >

## Method Parameters
Parameter | Description
--------- | -----------
gameCenterId | The user's Game Center ID — can be the PlayerId, GamePlayerId, or TeamPlayerId from the GKLocalPlayer object
forceCreate | Should a new profile be created for this user if the account does not exist?
timestamp | The timestamp value returned as part of the identity verification signature fetch from Game Center. Required for modern Game Center verification.
publicKeyUrl | The public key URL returned as part of the identity verification signature fetch from Game Center. Required for modern Game Center verification.
signature | The raw signature bytes returned from Game Center (via GetSignature()). Required for modern Game Center verification.
salt | The raw salt bytes returned from Game Center (via GetSalt()). Required for modern Game Center verification.
teamPlayerId | Only required when gameCenterId is set to a value other than TeamPlayerId.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string gameCenterId = "userGameCenterId"; // PlayerId, GamePlayerId, or TeamPlayerId
bool forceCreate = true;
ulong timestamp = 0;        // from GKLocalPlayer identity verification
string publicKeyUrl = "";   // from GKLocalPlayer identity verification
byte[] signature = null;    // from GKLocalPlayer GetSignature()
byte[] salt = null;         // from GKLocalPlayer GetSalt()
string teamPlayerId = "";   // only if gameCenterId is not TeamPlayerId

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("[Authenticate Success] {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("[Authenticate Failed] {0}  {1}  {2}", status, code, error));
};
<%= data.branding.codePrefix %>.AuthenticateGameCenter(
    gameCenterId, forceCreate, timestamp, publicKeyUrl,
    signature, salt, teamPlayerId,
    successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* gameCenterId = "userGameCenterId"; // playerId, gamePlayerId, or teamPlayerId
bool forceCreate = true;
uint64_t timestamp = 0;           // from GKLocalPlayer identity verification
std::string publicKeyUrl = "";    // from GKLocalPlayer identity verification
const uint8_t* signature = NULL;  // from GKLocalPlayer GetSignature()
size_t signatureLength = 0;
const uint8_t* salt = NULL;       // from GKLocalPlayer GetSalt()
size_t saltLength = 0;
std::string teamPlayerId = "";    // only if gameCenterId is not teamPlayerId

<%= data.branding.codePrefix %>->authenticateGameCenter(
    gameCenterId, forceCreate, timestamp, publicKeyUrl,
    signature, signatureLength, salt, saltLength,
    teamPlayerId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString* gameCenterID = @"userGameCenterId"; // PlayerId, GamePlayerId, or TeamPlayerId
BOOL forceCreate = true;
uint64_t timestamp = 0;           // from GKLocalPlayer identity verification
NSString* publicKeyUrl = @"";     // from GKLocalPlayer identity verification
NSData* signature = nil;          // from GKLocalPlayer GetSignature()
NSData* salt = nil;               // from GKLocalPlayer GetSalt()
NSString* teamPlayerId = @"";     // only if gameCenterID is not TeamPlayerId
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[<%= data.branding.codePrefix %> authenticateGameCenter:gameCenterID
                    forceCreate:forceCreate
                      timestamp:timestamp
                   publicKeyUrl:publicKeyUrl
                      signature:signature
                           salt:salt
                   teamPlayerId:teamPlayerId
                completionBlock:successBlock
           errorCompletionBlock:failureBlock
                       cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var gameCenterId = "userGameCenterId"; // playerId, gamePlayerId, or teamPlayerId
var forceCreate = true;
var timestamp = 0;          // from GKLocalPlayer identity verification
var publicKeyUrl = "";      // from GKLocalPlayer identity verification
var signature = null;       // from GKLocalPlayer GetSignature()
var salt = null;            // from GKLocalPlayer GetSalt()
var teamPlayerId = "";      // only if gameCenterId is not teamPlayerId

<%= data.branding.codePrefix %>.authenticateGameCenter(
    gameCenterId, forceCreate, timestamp, publicKeyUrl,
    signature, salt, teamPlayerId, result =>
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
var gameCenterId = "userGameCenterId"; // playerId, gamePlayerId, or teamPlayerId
var forceCreate = true;
int timestamp = 0;             // from GKLocalPlayer identity verification
String publicKeyUrl = "";      // from GKLocalPlayer identity verification
List<int>? signature = null;   // from GKLocalPlayer GetSignature()
List<int>? salt = null;        // from GKLocalPlayer GetSalt()
String teamPlayerId = "";      // only if gameCenterId is not teamPlayerId

ServerResponse result = await <%= data.branding.codePrefix %>.authenticateGameCenter(
    gameCenterId: gameCenterId,
    forceCreate: forceCreate,
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
local gameCenterId = "userGameCenterId" -- playerId, gamePlayerId, or teamPlayerId
local forceCreate = true
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

<%= data.branding.codePrefix %>:authenticateGameCenter(
    gameCenterId, forceCreate, timestamp, publicKeyUrl,
    signature, salt, teamPlayerId, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```javascript
// /N/A
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
// /N/A
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
        "abTestingId": 95,
        "lastLogin": 1713973000159,
        "server_time": 1713973000235,
        "refundCount": 0,
        "timeZoneOffset": -5.0,
        "experiencePoints": 0,
        "maxBundleMsgs": 10,
        "createdAt": 1713973000153,
        "parentProfileId": null,
        "emailAddress": "test@email.com",
        "experienceLevel": 1,
        "countryCode": null,
        "vcClaimed": 0,
        "currency": {
            "bar": {
                "consumed": 0,
                "balance": 0,
                "purchased": 0,
                "awarded": 0,
                "revoked": 0
            },
                "coins": {
                "consumed": 0,
                "balance": 8,
                "purchased": 0,
                "awarded": 8,
                "revoked": 0
            }
        },
        "id": "15e5ce33-2411-45f8-a29e-7f600880113a",
        "compressIfLarger": 51200,
        "amountSpent": 0,
        "previousLogin": null,
        "playerName": "",
        "pictureUrl": null,
        "incoming_events": [],
        "sessionId": "gbgakmm4hmt15e2pobvmh7ptck",
        "languageCode": "en",
        "vcPurchased": 0,
        "isTester": false,
        "summaryFriendData": null,
        "loginCount": 1,
        "emailVerified": true,
        "xpCapped": false,
        "profileId": "15e5ce33-2411-45f8-a29e-7f600880113a",
        "newUser": "true",
        "playerSessionExpiry": 1200,
        "sent_events": [],
        "maxKillCount": 11,
        "rewards": {
            "rewardDetails": {
                "xp": {
                    "experienceLevels": [
                        { 
                            "level": 1, 
                            "rewards": { 
                                "currency": { 
                                    "coins": 8 
                                } 
                            } 
                        }
                    ]
                }
            },
            "currency": {
                "bar": {
                    "consumed": 0,
                    "balance": 0,
                    "purchased": 0,
                    "awarded": 0,
                    "revoked": 0
                },
                "coins": {
                    "consumed": 0,
                    "balance": 8,
                    "purchased": 0,
                    "awarded": 8,
                    "revoked": 0
                }
            },
            "rewards": {}
        },
        "statistics": {
            "test": 0.99,
            "HITLEVELNVEHICLE_000005": 0
        }
    },
    "status": 200
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40206 | MISSING_IDENTITY_ERROR | The identity does not exist on the server and `forceCreate` was `false` [and a `profileId` was provided - otherwise 40208 would have been returned]. Will also occur when `forceCreate` is `true` and a saved [but un-associated] `profileId` is provided. The error handler should reset the stored profile id (if there is one) and re-authenticate, setting `forceCreate` to `true` to create a new account. **A common cause of this error is deleting the user's account via the design portal.**
40207 | SWITCHING_PROFILES | Indicates that the identity credentials are valid, and the saved `profileId` is valid, but the identity is not associated with the provided `profileId`. This may indicate that the user wants to switch accounts in the app. Often an app will pop-up a dialog confirming that the user wants to switch accounts, and then reset the stored `profileId` and call authenticate again.
40208 | MISSING_PROFILE_ERROR | Returned when the identity cannot be located, no `profileId` is provided, and `forceCreate` is false. The normal response is to call Authenticate again with `forceCreate` set to `true`.
40217 | UNKNOWN_AUTH_ERROR | An unknown error has occurred during authentication.
40307 | TOKEN_DOES_NOT_MATCH_USER | The user credentials are invalid (i.e. bad `gameCenterId`)

</details>


