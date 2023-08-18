# SmartSwitchAuthenticateSteam
## Overview
Smart Switch Authenticate will logout of the current profile, and switch to the new authentication type.
In event the current session was previously an anonymous account, the smart switch will delete that profile.
Use this function to keep a clean designflow from anonymous to signed profiles

Authenticate the user using a steam userId and session ticket (without any validation on the userId).

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string steamId = "userSteamId";
string ticket = "sessionTicketFromSteam";
bool forceCreate = true;
    
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("[Authenticate Success] {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("[Authenticate Failed] {0}  {1}  {2}", status, code, error));
};
<%= data.branding.codePrefix %>.SmartSwitchAuthenticateSteam(
    steamId, ticket, forceCreate,
    successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* steamId = "userSteamId";
const char* ticket = "sessionTicketFromSteam";

<%= data.branding.codePrefix %>->smartSwitchAuthenticateSteam(
    steamId, token, true, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString* userID = @"userSteamId";
NSString* sessionticket = @"sessionTicketFromSteam";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[<%= data.branding.codePrefix %> smartSwitchAuthenticateSteam:userID
             sessionTicket:sessionticket
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
Steam steamId = "userSteamId";
Steam ticket = "sessionTicketFromSteam";

<%= data.branding.codePrefix %>.smartSwitchAuthenticateSteam(
    steamId, token, true, this);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var steamId = "userSteamId";
var ticket = "sessionTicketFromSteam";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateSteam(steamId, ticket, forceCreate, result =>
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
var steamId = "userSteamId";
var ticket = "sessionTicketFromSteam";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateSteam(steamId, ticket, forceCreate, result =>
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
var steamId = "userSteamId";
var ticket = "sessionTicketFromSteam";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateSteam(steamId, ticket, forceCreate, result =>
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
var steamId = "userSteamId";
var ticket = "sessionTicketFromSteam";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateSteam(steamId, ticket, forceCreate, result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
userId | String representation of 64 bit steam ID
sessionTicket | The session ticket of the user (hex encoded)
forceCreate | Should a new profile be created for this user if the account does not exist?


