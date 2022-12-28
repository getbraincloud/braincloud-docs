# SmartSwitchAuthenticateGoogleOpenId
## Overview
Smart Switch Authenticate will logout of the current profile, and switch to the new authentication type.

In event the current session was previously an anonymous account, the smart switch will delete that profile (since completely anonymous accounts are irretrievable once you switch away from them).

Use this function to keep a clean designflow from anonymous to signed profiles

Authenticate the user using a google user id (gXXX) and google authentication token.

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
<%= data.branding.codePrefix %>.SmartSwitchAuthenticateGoogleOpenId(
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

<%= data.branding.codePrefix %>->smartSwitchAuthenticateGoogleOpenId(
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

[<%= data.branding.codePrefix %> smartSwitchAuthenticateGoogleOpenId:userID
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

<%= data.branding.codePrefix %>.smartSwitchAuthenticateGoogleOpenId(
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

<%= data.branding.codePrefix %>.smartSwitchAuthenticateGoogleOpenId(googleId, token, forceCreate, result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```javascript
var googleId = "g123456789";
var token = "authTokenFromGoogle";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateGoogleOpenId(googleId, token, forceCreate, result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
var googleId = "g123456789";
var token = "authTokenFromGoogle";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateGoogleOpenId(googleId, token, forceCreate, result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
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

<%= data.branding.codePrefix %>.smartSwitchAuthenticateGoogleOpenId(googleId, token, forceCreate, result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
userid | String representation of google userid (gXXX)
token | The authentication token derived via the google apis.
forceCreate | Should a new profile be created for this user if the account does not exist?


