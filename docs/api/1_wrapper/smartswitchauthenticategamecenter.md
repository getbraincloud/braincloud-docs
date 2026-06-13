# SmartSwitchAuthenticateGameCenter

Smart Switch Authenticate will logout of the current profile, and switch to the new authentication type.
In event the current session was previously an anonymous account, the smart switch will delete that profile.
Use this function to keep a clean designflow from anonymous to signed profiles

Authenticate the user using their Game Center id

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
<%= data.branding.codePrefix %>.SmartSwitchAuthenticateGameCenter(
    gameCenterId, forceCreate, timestamp, publicKeyUrl,
    signature, salt, teamPlayerId,
    successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* gameCenterId = "userGameCenterId";

<%= data.branding.codePrefix %>->smartSwitchAuthenticateGameCenter(
    gameCenterId,
    true,
    this);
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

[<%= data.branding.codePrefix %> smartSwitchAuthenticateGameCenter:gameCenterID
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
var gameCenterId = "userGameCenterId";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateGameCenter(gameCenterId, forceCreate, result =>
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
var gameCenterId = "userGameCenterId";
var forceCreate = true;

ServerResponse result = await <%= data.branding.codePrefix %>.smartSwitchAuthenticateGameCenter(
    gameCenterId:gameCenterId, 
    forceCreate:forceCreate);

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
local gameCenterId = "userGameCenterId"
local forceCreate = true

local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end

<%= data.branding.codePrefix %>:smartSwitchAuthenticateGameCenter(gameCenterId, forceCreate, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```javascript
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
// N/A
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

<details>
<summary>JSON Response</summary>

```javascript
var gameCenterId = "userGameCenterId";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateGameCenter(gameCenterId, forceCreate, result =>
{
    var status = result.status;
    console.log(status + " : " + JSON.stringify(result, null, 2));
});
```
</details>

