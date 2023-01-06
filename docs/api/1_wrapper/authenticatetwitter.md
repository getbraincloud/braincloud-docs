# AuthenticateTwitter
## Overview
Authenticate the user using a Twitter user ID, authentication token, and secret from Twitter.



:::caution
Make sure you've initialized the <%= data.branding.productName %> wrapper before authenticating.
:::

<PartialServop service_name="authenticationV2" operation_name="AUTHENTICATE" / >

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
<%= data.branding.codePrefix %>.AuthenticateTwitter(
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

<%= data.branding.codePrefix %>->authenticateTwitter(
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
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[<%= data.branding.codePrefix %> authenticateTwitter:userID
                      token:token
                     secret:secret
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
String twitterId = "userTwitterId";
String token = "userAuthToken";
String secret = "secretFromTwitterApi";
boolean forceCreate = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.authenticateTwitter(
    twitterId, token, secret, forceCreate, this);
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

<%= data.branding.codePrefix %>.authenticateTwitter(twitterId, token, secret, forceCreate, result =>
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

<%= data.branding.codePrefix %>.authenticateTwitter(twitterId, token, secret, forceCreate, result =>
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

<%= data.branding.codePrefix %>.authenticateTwitter(twitterId, token, secret, forceCreate, result =>
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

```json
{
    "status": 200,
    "data": {
        "vcPurchased": 0,
        "xpCapped": false,
        "experiencePoints": 230,
        "sent_events": [
        ],
        "playerSessionExpiry": 1200,
        "playerName": "Jimmy",
        "vcClaimed": 0,
        "parentProfileId": null,
        "rewards": {
            "rewardDetails": {},
            "rewards": {},
            "currency": {}
        },
        "loginCount": 23,
        "server_time": 1445545791711,
        "experienceLevel": 0,
        "entities": [
        ],
        "incoming_events": [
        ],
        "currency": {
            "gold": {
                "purchased": 0,
                "balance": 0,
                "consumed": 0,
                "awarded": 0
            }
        },
        "statistics": {
            "deaths": 0,
            "kills": 0
        },
        "abTestingId": 78,
        "id": "47037fc9-ca7b-4f61-a71f-e5a37b0e8a03",
        "sessionId": "bg6qf38p2btl0o825s99385nd1",
        "profileId": "47037fc9-ca7b-4f61-a71f-e5a37b0e8a03",
        "newUser": "false"
    }
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40206 | MISSING_IDENTITY_ERROR | The identity does not exist on the server and `forceCreate` was `false` [and a `profileId` was provided - otherwise 40208 would have been returned]. Will also occur when `forceCreate` is `true` and a saved [but un-associated] `profileId` is provided. The error handler should reset the stored profile id (if there is one) and re-authenticate, setting `forceCreate` to `true` to create a new account. **A common cause of this error is deleting the user's account via the Design Portal.**
40207 | SWITCHING_PROFILES | Indicates that the identity credentials are valid, and the saved `profileId` is valid, but the identity is not associated with the provided `profileId`. This may indicate that the user wants to switch accounts in the app. Often an app will pop-up a dialog confirming that the user wants to switch accounts, and then reset the stored `profileId` and call authenticate again.
40208 | MISSING_PROFILE_ERROR | Returned when the identity cannot be located, no `profileId` is provided, and `forceCreate` is false. The normal response is to call Authenticate again with `forceCreate` set to `true`.
40217 | UNKNOWN_AUTH_ERROR | An unknown error has occurred during authentication.
40307 | TOKEN_DOES_NOT_MATCH_USER | The user credentials are invalid (i.e. bad Twitter userId / token / secret). May also indicate that Twitter integration is not properly configured.

</details>


## Method Parameters
Parameter | Description
--------- | -----------
userId | String representation of Twitter user ID
token | The authentication token derived via the Twitter APIs
secret | The secret given when attempting to link with Twitter
forceCreate | Should a new profile be created for this user if the account does not exist?


