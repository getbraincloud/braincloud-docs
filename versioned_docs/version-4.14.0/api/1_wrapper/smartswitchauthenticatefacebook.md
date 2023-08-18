# SmartSwitchAuthenticateFacebook
## Overview
Smart Switch Authenticate will logout of the current profile, and switch to the new authentication type.
In event the current session was previously an anonymous account, the smart switch will delete that profile.
Use this function to keep a clean designflow from anonymous to signed profiles

Authenticate the user with <%= data.branding.productName %> using their Facebook Credentials

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string facebookId = "userFacebookId";
string token = "tokenFromFacebook";
bool forceCreate = true;
    
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("[Authenticate Success] {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("[Authenticate Failed] {0}  {1}  {2}", status, code, error));
};
<%= data.branding.codePrefix %>.SmartSwitchAuthenticateFacebook(
    facebookId, token, forceCreate,
    successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* facebookId = "userFacebookId";
const char* token = "tokenFromFacebook";

<%= data.branding.codePrefix %>->smartSwitchAuthenticateFacebook(
    userId,
    token,
    true,
    this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString* externalID = @"userFacebookId";
NSString* authToken = @"tokenFromFacebook";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[<%= data.branding.codePrefix %> smartSwitchAuthenticateExternal:externalID
         authenticationToken:authToken
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
public void smartSwitchAuthenticateFacebook(String fbUserId, String fbAuthToken, boolean forceCreate, IAuthenticationServiceCallback callback)
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var facebookId = "userFacebookId";
var token = "tokenFromFacebook";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateFacebook(facebookId, token, forceCreate, result =>
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
var facebookId = "userFacebookId";
var token = "tokenFromFacebook";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateFacebook(facebookId, token, forceCreate, result =>
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
var facebookId = "userFacebookId";
var token = "tokenFromFacebook";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateFacebook(facebookId, token, forceCreate, result =>
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
var facebookId = "userFacebookId";
var token = "tokenFromFacebook";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateFacebook(facebookId, token, forceCreate, result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
userId | The userId
facebookId | The Facebook ID of the user
facebookToken | The validated token from the Facebook SDK
forceCreate | Should a new profile be created for this user if the account does not exist?


