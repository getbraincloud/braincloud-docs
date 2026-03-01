# SmartSwitchAuthenticateGoogle

Smart Switch Authenticate will logout of the current profile, and switch to the new authentication type.
In event the current session was previously an anonymous account, the smart switch will delete that profile.
Use this function to keep a clean designflow from anonymous to signed profiles

Authenticate the user using a google user id (gXXX) and google authentication token.

## Method Parameters
Parameter | Description
--------- | -----------
googleId | String representation of google userid (gXXX)
googleToken | The authentication token derived via the google apis.
forceCreate | Should a new profile be created for this user if the account does not exist?

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string googleId = "g123456789";
string token = "authTokenFromGoogle";
bool forceCreate = true;
    
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("[Authenticate Success] {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("[Authenticate Failed] {0}  {1}  {2}", status, code, error));
};
<%= data.branding.codePrefix %>.SmartSwitchAuthenticateGoogle(
    googleId, token, forceCreate,
    successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* googleId = "g123456789";
const char* token = "authTokenFromGoogle";

<%= data.branding.codePrefix %>->smartSwitchAuthenticateGoogle(
    googleId, token, true, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString* userID = @"g123456789";
NSString* token = @"authTokenFromGoogle";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[<%= data.branding.codePrefix %> smartSwitchAuthenticateGoogle:userID
                      token:token
                forceCreate:true
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String googleId = "g123456789";
String token = "authTokenFromGoogle";

<%= data.branding.codePrefix %>.smartSwitchAuthenticateGoogle(
    googleId, token, true, this);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var googleId = "g123456789";
var token = "authTokenFromGoogle";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateGoogle(googleId, token, forceCreate, result =>
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
var googleUserId = "g123456789";
var serverAuthCode = "authTokenFromGoogle";
var forceCreate = true;

ServerResponse result = await <%= data.branding.codePrefix %>.smartSwitchAuthenticateGoogle(
    googleUserId:googleUserId, 
    serverAuthCode:serverAuthCode, 
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
local googleUserId = "g123456789"
local serverAuthCode = "authTokenFromGoogle"
local forceCreate = true

local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end

<%= data.branding.codePrefix %>:smartSwitchAuthenticateGoogle(googleUserId, serverAuthCode, forceCreate, callback)
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
var googleId = "g123456789";
var token = "authTokenFromGoogle";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateGoogle(googleId, token, forceCreate, result =>
{
    var status = result.status;
    console.log(status + " : " + JSON.stringify(result, null, 2));
});
```
</details>

