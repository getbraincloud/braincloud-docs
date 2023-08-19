# SmartSwitchAuthenticateUniversal
## Overview
Smart Switch Authenticate will logout of the current profile, and switch to the new authentication type.
In event the current session was previously an anonymous account, the smart switch will delete that profile.
Use this function to keep a clean designflow from anonymous to signed profiles

Method authenticates the user using universal credentials

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string userId = <%= data.example.userId %>;
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
    
<%= data.branding.codePrefix %>.SmartSwitchAuthenticateUniversal(userId, password, forceCreate, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* userId = <%= data.example.userId %>;
const char* password = <%= data.example.password %>;
bool forceCreate = true;

<%= data.branding.codePrefix %>->smartSwitchAuthenticateUniversal(userId, password, forceCreate, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString* userId = @<%= data.example.userId %>;
NSString* password = @<%= data.example.password %>;
bool forceCreate = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[<%= data.branding.codePrefix %> smartSwitchAuthenticateUniversal:userId
               password:password
            forceCreate:forCreate
        completionBlock:successBlock
   errorCompletionBlock:failureBlock
               cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String userId = <%= data.example.userId %>;
String password = <%= data.example.password %>;
boolean forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateUniversal(userId, password, forceCreate, this);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var userId = <%= data.example.userId %>;
var password = <%= data.example.password %>;
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateUniversal(userId, password, forceCreate, result =>
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
var userId = <%= data.example.userId %>;
var password = <%= data.example.password %>;
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateUniversal(userId, password, forceCreate, result =>
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
var userId = <%= data.example.userId %>;
var password = <%= data.example.password %>;
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateUniversal(userId, password, forceCreate, result =>
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
var userId = <%= data.example.userId %>;
var password = <%= data.example.password %>;
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateUniversal(userId, password, forceCreate, result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
userId | The user's ID.
password | The password of the user.
forceCreate | Should a new profile be created for this user if the account does not exist?


