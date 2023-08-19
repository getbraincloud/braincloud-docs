# SmartSwitchAuthenticateTwitter
## Overview
Smart Switch Authenticate will logout of the current profile, and switch to the new authentication type.
In event the current session was previously an anonymous account, the smart switch will delete that profile.
Use this function to keep a clean designflow from anonymous to signed profiles

Authenticate the user using a Twitter user ID, authentication token, and secret from Twitter

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string twitterId = "userTwitterId";
string token = "userAuthToken";
string secret = "secretFromTwitterApi";
bool forceCreate = true;
    
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("[Authenticate Success] {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("[Authenticate Failed] {0}  {1}  {2}", status, code, error));
};
<%= data.branding.codePrefix %>.SmartSwitchAuthenticateTwitter(
    twitterId, token, secret, forceCreate,
    successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* twitterId = "userTwitterId";
const char* token = "userAuthToken";
const char* secret = "secretFromTwitterApi";

<%= data.branding.codePrefix %>->smartSwitchAuthenticateTwitter(
    twitterId, token, secret, true, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString* twitterId = @"userTwitterId";
NSString* token = @"userAuthToken";
NSString* secret = @"secretFromTwitterApi";
BOOL forceCreate = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

    [<%= data.branding.codePrefix %> smartSwitchAuthenticateTwitter:userID
                      token:token
                     secret:secret
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
String twitterId = "userTwitterId";
String token = "userAuthToken";
String secret = "secretFromTwitterApi";

<%= data.branding.codePrefix %>.smartSwitchAuthenticateTwitter(
    twitterId, token, secret, true, this);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var twitterId = "userTwitterId";
var token = "userAuthToken";
var secret = "secretFromTwitterApi";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateTwitter(twitterId, token, secret, forceCreate, result =>
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
var twitterId = "userTwitterId";
var token = "userAuthToken";
var secret = "secretFromTwitterApi";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateTwitter(twitterId, token, secret, forceCreate, result =>
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
var twitterId = "userTwitterId";
var token = "userAuthToken";
var secret = "secretFromTwitterApi";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateTwitter(twitterId, token, secret, forceCreate, result =>
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
var twitterId = "userTwitterId";
var token = "userAuthToken";
var secret = "secretFromTwitterApi";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateTwitter(twitterId, token, secret, forceCreate, result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
userId | String representation of Twitter user ID
token | The authentication token derived via the Twitter APIs
secret | The secret given when attempting to link with Twitter
forceCreate | Should a new profile be created for this user if the account does not exist?


