# SmartSwitchAuthenticateEmailPassword
## Overview
Smart Switch Authenticate will logout of the current profile, and switch to the new authentication type. 
In event the current session was previously an anonymous account, the smart switch will delete that profile.
Use this function to keep a clean designflow from anonymous to signed profiles
 
Authenticate the user with a custom Email and Password. Note that the client app is responsible for collecting and storing the e-mail and potentially password (for convenience) in the client data. For the greatest security, force the user to re-enter their password at each login (or at least give them that option).

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string email = <%= data.example.email %>;
string password = <%= data.example.password %>;
bool forceCreate = true;
    
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("[Authenticate Success] {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("[Authenticate Failed] {0}  {1}  {2}", status, code, error));
};
<%= data.branding.codePrefix %>.SmartSwitchAuthenticateEmail(
    email, password, forceCreate, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* email = <%= data.example.email %>;
const char* password = <%= data.example.password %>;
bool forceCreate = true;

<%= data.branding.codePrefix %>->smartSwitchAuthenticateEmailPassword(email, password, forceCreate, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString* email = @<%= data.example.email %>;
NSString* password = @<%= data.example.password %>;
bool forceCreate = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[<%= data.branding.codePrefix %> smartSwitchAuthenticateEmailPassword:email
                     password:password
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
String email = <%= data.example.email %>;
String password = <%= data.example.password %>;
boolean forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateEmailPassword(
    email,
    password,
    forceCreate,
    this);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var email = <%= data.example.email %>;
var password = <%= data.example.password %>;
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateEmailPassword(email, password, forceCreate, result =>
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
var email = <%= data.example.email %>;
var password = <%= data.example.password %>;
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateEmailPassword(email, password, forceCreate, result =>
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
var email = <%= data.example.email %>;
var password = <%= data.example.password %>;
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateEmailPassword(email, password, forceCreate, result =>
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
var email = <%= data.example.email %>;
var password = <%= data.example.password %>;
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateEmailPassword(email, password, forceCreate, result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
email | The e-mail address of the user
password | The password of the user
forceCreate | Should a new profile be created for this user if the account does not exist?


