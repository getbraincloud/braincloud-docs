# SmartSwitchAuthenticateGameCenter
## Overview
Smart Switch Authenticate will logout of the current profile, and switch to the new authentication type.
In event the current session was previously an anonymous account, the smart switch will delete that profile.
Use this function to keep a clean designflow from anonymous to signed profiles

Authenticate the user using their Game Center id

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string gameCenterId = "userGameCenterId";
bool forceCreate = true;
    
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("[Authenticate Success] {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("[Authenticate Failed] {0}  {1}  {2}", status, code, error));
};
<%= data.branding.codePrefix %>.SmartSwitchAuthenticateGameCenter(
    gameCenterId, forceCreate,
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
NSString* gameCenterID = @"userGameCenterId";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[<%= data.branding.codePrefix %> smartSwitchAuthenticateGameCenter:gameCenterID
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
<TabItem value="cfs" label="Cloud Code">
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
<TabItem value="r" label="Raw">
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

## Method Parameters
Parameter | Description
--------- | -----------
gameCenterId | The player's game center ID (use the playerID property from the local GKPlayer object)
forceCreate | Should a new profile be created for this user if the account does not exist?


