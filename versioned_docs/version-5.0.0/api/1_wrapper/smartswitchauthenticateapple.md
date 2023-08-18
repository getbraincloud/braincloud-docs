# SmartSwitchAuthenticateApple
## Overview
Smart Switch Authenticate will logout of the current profile, and switch to the new authentication type. 

In event the current session was previously a completely anonymous account, the smart switch will delete that profile (since completely anonymous accounts are irretrievable once you switch away from them). 

Use this function to keep a clean designflow from anonymous to signed profiles.
 
Authenticate the user with Sign in with Apple.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string appleUserId = "123456789";
string identityToken = "identityTokenFromApple";
bool forceCreate = true;
    
<%= data.branding.codePrefix %>.SmartSwitchAuthenticateAple(
    appleUserId, identityToken, forceCreate, SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* appleUserId = "123456789";
const char* identityToken = "identityTokenFromApple";
bool forceCreate = true;

<%= data.branding.codePrefix %>->smartSwitchAuthenticateApple(appleUserId, identityToken, forceCreate, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString * appleUserId = @"123456789";
NSString * identityToken = @"identityTokenFromApple";
BOOL forceCreate = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> smartSwitchAuthenticateApple]
                appleUserId:appleUserId
                identityToken:identityToken
                forceCreate:forceCreate
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
		     	   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String appleUserId = "123456789";
String identityToken = "identityTokenFromApple";
boolean forceCreate = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.smartSwitchAuthenticateApple(
    appleUserId,
    identityToken,
    forceCreate,
    this);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var appleUserId = "123456789";
var identityToken = "identityTokenFromApple";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateApple(appleUserId, identityToken, forceCreate, result =>
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
var appleUserId = "123456789";
var identityToken = "identityTokenFromApple";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateApple(appleUserId, identityToken, forceCreate, result =>
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
var appleUserId = "123456789";
var identityToken = "identityTokenFromApple";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateApple(appleUserId, identityToken, forceCreate, result =>
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
var appleUserId = "123456789";
var identityToken = "identityTokenFromApple";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateApple(appleUserId, identityToken, forceCreate, result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
appleUserId | The user id of the authenticated user. It should match the `sub` field of the identity token. This is the identifier that will be attached to the user's profile. 
identityToken | The JSON Web Token that represents the user's identity
forceCreate | Should a new profile be created for this user if the account does not exist?


