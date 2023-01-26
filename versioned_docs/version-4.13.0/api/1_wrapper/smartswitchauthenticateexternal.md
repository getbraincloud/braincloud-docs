# SmartSwitchAuthenticateExternal
## Overview
Smart Switch Authenticate will logout of the current profile, and switch to the new authentication type.
In event the current session was previously an anonymous account, the smart switch will delete that profile.
Use this function to keep a clean designflow from anonymous to signed profiles

Authenticate the user via cloud code (which in turn validates the supplied credentials against an external system).
This allows the developer to extend <%= data.branding.productName %> authentication to support other backend authentication systems.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string userId = "externalId";
string token = "externalTokenOrPassword";
string externalAuthName = "nameOfExternalAuthService";
bool forceCreate = true;
    
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("[Authenticate Success] {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("[Authenticate Failed] {0}  {1}  {2}", status, code, error));
};
<%= data.branding.codePrefix %>.SmartSwitchAuthenticateExternal(
    userId, token, externalAuthName, forceCreate,
    successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* userId = "externalId";
const char* token = "externalTokenOrPassword";
const char* externalAuthName = "nameOfExternalAuthService";

<%= data.branding.codePrefix %>->smartSwitchAuthenticateExternal(
    userId,
    token,
    externalAuthName,
    true,
    this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString* authId = @"1234";
NSString* authToken = @"1234-1234-1234-1234";
NSString* externalAuthName = @"externalSystem";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[<%= data.branding.codePrefix %> smartSwitchAuthenticateExternal:authId
         authenticationToken:authToken
  externalAuthenticationName:externalAuthName
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
String userId = "externalId";
String token = "externalTokenOrPassword";
String externalAuthName = "nameOfExternalAuthService";

<%= data.branding.codePrefix %>.smartSwitchAuthenticateExternal(
    userId,
    token,
    externalAuthName,
    true,
    this);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var userId = "externalId";
var token = "externalTokenOrPassword";
var externalAuthName = "nameOfExternalAuthService";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateExternal(userId, token, externalAuthName, forceCreate, result =>
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
var userId = "externalId";
var token = "externalTokenOrPassword";
var externalAuthName = "nameOfExternalAuthService";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateExternal(userId, token, externalAuthName, forceCreate, result =>
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
var userId = "externalId";
var token = "externalTokenOrPassword";
var externalAuthName = "nameOfExternalAuthService";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateExternal(userId, token, externalAuthName, forceCreate, result =>
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
var userId = "externalId";
var token = "externalTokenOrPassword";
var externalAuthName = "nameOfExternalAuthService";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateExternal(userId, token, externalAuthName, forceCreate, result =>
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
token | The user token (password etc)
externalAuthName | The name of the custom authentication type (linked to a cloud script that performs authentication). Configured via the **Design &#124; Authentication &#124; External** page of the Design Portal.
forceCreate | Should a new profile be created for this user if the account does not exist?


