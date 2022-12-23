# AuthenticateEmailPassword
## Overview
Authenticate the user with a custom Email and Password.  

Note that the client app is responsible for collecting (and storing) the e-mail and potentially password (for convenience) in the client data.  

For the greatest security, force the user to re-enter their password at each login (or at least give them that option).

Alternatively, if using the wrapper, use the Reconnect() method to automatically login to the last used account.



## Error Handling Example

```csharp
public void FailureCallback(int statusCode, int reasonCode, string statusMessage, object cbObject) {
    switch (reasonCode) {
        case ReasonCodes.MISSING_IDENTITY_ERROR: { // Identity does not exist (and client has orphaned profileId)

            // Reset profileId and re-authenticate
            <%= data.branding.codeClient %>.Get().AuthenticationService.ResetStoredProfileId();
            <%= data.branding.codeClient %>.Get().AuthenticationService.AuthenticateEmail(email, password, true);
            break;
        }
        case ReasonCodes.SWITCHING_PROFILES: { // Identity belongs to a different profile

            // Reset profileId and re-authenticate
            <%= data.branding.codeClient %>.Get().AuthenticationService.ResetStoredProfileId();
            <%= data.branding.codeClient %>.Get().AuthenticationService.AuthenticateEmail(email, password, forceCreate);
            break;
        }
        case ReasonCodes.MISSING_PROFILE_ERROR: { // Identity does not exist

            // The account doesn't exist - create it now.
            <%= data.branding.codeClient %>.Get().AuthenticationService.AuthenticateEmail(email, password, true);
            break;
        }
        case ReasonCodes.TOKEN_DOES_NOT_MATCH_USER: { // User auth information is incorrect

            // Display a dialog telling the user that the password provided was invalid,
            // and invite them to re-enter the password.
            // ...
            break;
        }
        default: { // Uncaught reasonCode

            // Log the error for debugging later
            // ...
            break;
        }
    }
}
```

### Status Codes
Code | Name | Description
---- | ---- | -----------
40206 | MISSING_IDENTITY_ERROR | The identity does not exist on the server and `forceCreate` was `false` [and a `profileId` was provided - otherwise 40208 would have been returned]. Will also occur when `forceCreate` is `true` and a saved [but un-associated] `profileId` is provided. The error handler should reset the stored profile id (if there is one) and re-authenticate, setting `forceCreate` to `true` to create a new account. **A common cause of this error is deleting the user's account via the Design Portal.**
40207 | SWITCHING_PROFILES | Indicates that the identity credentials are valid, and the saved `profileId` is valid, but the identity is not associated with the provided `profileId`. This may indicate that the user wants to switch accounts in the app. Most often an app will pop-up a dialog confirming that the user wants to switch accounts, and then reset the stored `profileId` and call authenticate again.
40208 | MISSING_PROFILE_ERROR | Returned when the identity cannot be located, no `profileId` is provided, and `forceCreate` is false. The normal response is to call Authenticate again with `forceCreate` set to `true`.
40217 | UNKNOWN_AUTH_ERROR | An unknown error has occurred during authentication.
40307 | TOKEN_DOES_NOT_MATCH_USER | The user's password is incorrect.
550022 | INVALID_PASSWORD_CONTENT | The password doesn't meet the minimum password requirements.

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
string email = "someEmail@somedomain.com";
string password = "userPassword";
bool forceCreate = true;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.AuthenticationService.AuthenticateEmailPassword(
    email, password, forceCreate, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* email = "someEmail@somedomain.com";
const char* password = "userPassword";
bool forceCreate = true;

<%= data.branding.codePrefix %>->getAuthenticationService()->authenticateEmailPassword(
    email,
    password,
    forceCreate,
    this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString * email = @"someEmail@somedomain.com";
NSString * password = @"userPassword";
BOOL forceCreate = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> authenticationService]
		authenticateEmailPassword:email
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
String email = "someEmail@somedomain.com";
String password = "userPassword";
boolean forceCreate = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getAuthenticationService().authenticateEmailPassword(email, password, forceCreate, this);

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
var email = "someEmail@somedomain.com";
var password = "userPassword";
var forceCreate = true;

<%= data.branding.codePrefix %>.authentication.authenticateEmailPassword(email, password, forceCreate, result =>
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
email | The e-mail address of the user
password | The password of the user
forceCreate | Should a new profile be created for this user if the account does not exist?


