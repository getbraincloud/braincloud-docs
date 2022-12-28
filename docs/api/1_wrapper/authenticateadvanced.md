# AuthenticateAdvanced
## Overview
A generic Authenticate method that translates to the same as calling a specific one, except it takes an extraJson that will be passed along to pre- or post- hooks.



### Status Codes
Code | Name | Description
---- | ---- | -----------
40206 | MISSING_IDENTITY_ERROR | The identity does not exist on the server and `forceCreate` was `false` [and a `profileId` was provided - otherwise 40208 would have been returned]. Will also occur when `forceCreate` is `true` and a saved [but un-associated] `profileId` is provided. The error handler should reset the stored profile id (if there is one) and re-authenticate, setting `forceCreate` to `true` to create a new account. **A common cause of this error is deleting the user's account via the Design Portal.**
40207 | SWITCHING_PROFILES | Indicates that the identity credentials are valid, and the saved `profileId` is valid, but the identity is not associated with the provided `profileId`. This may indicate that the user wants to switch accounts in the app. Often an app will pop-up a dialog confirming that the user wants to switch accounts, and then reset the stored `profileId` and call authenticate again.
40208 | MISSING_PROFILE_ERROR | Returned when the identity cannot be located, no `profileId` is provided, and `forceCreate` is false. The normal response is to call Authenticate again with `forceCreate` set to `true`.
40217 | UNKNOWN_AUTH_ERROR | An unknown error has occurred during authentication.
40307 | TOKEN_DOES_NOT_MATCH_USER | The user credentials are invalid (i.e. bad Facebook id / token). May also indicate that Facebook integration is not properly configured.

:::caution
Make sure you've initialized the <%= data.branding.productName %> library before authenticating.
:::

<PartialServop service_name="authenticationV2" operation_name="AUTHENTICATE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
AuthenticationType authenticationType = AuthenticationType.Universal;
AuthenticationIds ids;
ids.externalId = "authAdvancedUser";
ids.authenticationToken = "authAdvancedPass";
ids.authenticationSubType = "";
bool forceCreate = true;
string extraJson = "{\"key\":\"value\"}";

<%= data.branding.codePrefix %>.AuthenticateAdvanced(
    authenticationType, ids, forceCreate, extraJson, SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
AuthenticationType authenticationType = AuthenticationType::Universal;
AuthenticationIds ids = { "authAdvancedUser", "authAdvancedPass", "" };
bool forceCreate = true;
const char* extraJson = "{\"key\":\"value\"}";

<%= data.branding.codePrefix %>->authenticateAdvanced(
    authenticationType, ids, forceCreate, extraJson, SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
AuthenticationType authenticationType = [AuthenticationTypeObjc Universal];
AuthenticationIds *ids = [[AuthenticationIdsObjc alloc]init];
ids.externalId = @"authAdvancedUser";
ids.authenticationToken = @"authAdvancedPass";
ids.authenticationSubType = @"";
BOOL forceCreate = true;
NSString * extraJson = "{\"key\":\"value\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[<%= data.branding.codePrefix %> 
       authenticateAdvanced:authenticationType
                        ids:ids
                forceCreate:forceCreate
                  extraJson:extraJson
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
AuthenticationType authenticationType = AuthenticationType.Universal;
AuthenticationIds ids = new AuthenticationIds ("authAdvancedUser", "authAdvancedPass", "");
boolean forceCreate = true;
string extraJson = "{\"key\":\"value\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.authenticateAdvanced(authenticationType, ids, forceCreate, extraJson, this);

public void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)
{
    System.out.print(String.format("Success | %s", jsonData.toString()));
}
public void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)
{
    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));
}
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var authenticationType = <%= data.branding.codePrefix %>.brainCloudClient.authentication.AUTHENTICATION_TYPE_UNIVERSAL;
var ids = {externalId: "authAdvancedUser", authenticationToken: "authAdvancedPass", authenticationSubType: ""};
var forceCreate = true;
var extraJson = {"key":"value"};

<%= data.branding.codePrefix %>.authenticateAdvanced(authenticationType, ids, forceCreate, extraJson, result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
// N/A
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
        "experiencePoints": 100,
        "refundCount": 0,
        "playerSessionExpiry": 60,
        "server_time": 1464621990155,
        "experienceLevel": 0,
        "currency": {
            "credits": {
                "purchased": 0,
                "balance": 12211,
                "consumed": 133,
                "awarded": 12344
            }
        },
        "abTestingId": 8,
        "statistics": {
            "gamesWon": 0
        },
        "id": "323e861-b749-4ce4-a57a-175232e21b5d",
        "createdAt": 1459439058035,
        "profileId": "323e861-b749-4ce4-a57a-175232e21b5d",
        "newUser": "false",
        "xpCapped": false,
        "sent_events": [],
        "timeZoneOffset": -5,
        "playerName": "",
        "vcClaimed": 0,
        "parentProfileId": null,
        "rewards": {
            "rewardDetails": {},
            "rewards": {},
            "currency": {}
        },
        "countryCode": "ca",
        "loginCount": 16,
        "emailAddress": "test@email.com",
        "previousLogin": 1464621979514,
        "incoming_events": [],
        "lastLogin": 1464621990118,
        "languageCode": "en",
        "pictureUrl": null,
        "sessionId": "v3grtg3ve0a089pekk8lneuk8k",
        "amountSpent": 0
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
authenticationType | Universal, Universal, Facebook, etc
ids | Auth IDs structure
forceCreate | Should a new profile be created for this user if the account does not exist?
extraJson | Additional to piggyback along with the call, to be picked up by pre- or post- hooks. Leave empty string for no extraJson


