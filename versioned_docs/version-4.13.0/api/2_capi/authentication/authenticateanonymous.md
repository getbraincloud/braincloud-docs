# AuthenticateAnonymous
## Overview
To authenticate anonymously you must have first called InitializeIdentity. You must supply an anonymous ID if you are creating a brand new profile or if you are logging into an already created profile you need to supply the anonymous ID AND the profile ID of the user.

Once you've logged in successfully make sure to save the anonymous and profile ID for future logins.

You can generate a new anonymous ID using the convenience method <code>[GenerateAnonymousId](/api/capi/authentication/generateanonymousid)</code>.




## Error Handling Example

```csharp
public void FailureCallback(int statusCode, int reasonCode, string statusMessage, object cbObject) {
    switch (reasonCode) {
        case ReasonCodes.MISSING_IDENTITY_ERROR: { // Anonymous id is invalid

            // Clear the profile id, generate a new Anonymous id, and re-authenticate
            <%= data.branding.codeClient %>.Get().AuthenticationService.ClearSavedProfileID();
            <%= data.branding.codeClient %>.Get().AuthenticationService.AnonymousId =
                <%= data.branding.codeClient %>.Get().AuthenticationService.GenerateAnonymousId();
            <%= data.branding.codeClient %>.Get().AuthenticationService.AuthenticateAnonymous(true, OnSuccess_Authenticate, OnError_AuthenticateAnonymous);
            break;
        }
        case ReasonCodes.MISSING_PROFILE_ERROR: { // Anonymous id doesn't exist in database

            // The account doesn't exist - create it now.
            <%= data.branding.codeClient %>.Get().AuthenticationService.AuthenticateAnonymous(true, OnSuccess_Authenticate, OnError_AuthenticateAnonymous);
            break;
        }
        case ReasonCodes.SWITCHING_PROFILES: {  // Identity belongs to a different profile

            // Clear the profile id, generate a new Anonymous id, and re-authenticate
            <%= data.branding.codeClient %>.Get().AuthenticationService.ClearSavedProfileID();
            <%= data.branding.codeClient %>.Get().AuthenticationService.AnonymousId =
                <%= data.branding.codeClient %>.Get().AuthenticationService.GenerateAnonymousId();
            <%= data.branding.codeClient %>.Get().AuthenticationService.AuthenticateAnonymous(true, OnSuccess_Authenticate, OnError_AuthenticateAnonymous);
            break;
        }
        case ReasonCodes.SECURITY_ERROR: { // Identity is invalid
            // Generate a new Anonymous id, and re-authenticate
            <%= data.branding.codeClient %>.Get().AuthenticationService.AnonymousId =
                <%= data.branding.codeClient %>.Get().AuthenticationService.GenerateAnonymousId();
            <%= data.branding.codeClient %>.Get().AuthenticationService.AuthenticateAnonymous(true, OnSuccess_Authenticate, OnError_AuthenticateAnonymous);
            break;
        }
        case ReasonCodes.MISSING_REQUIRED_PARAMETER: { // Anonymous id cannot be blank
            // Generate an Anonymous id before calling AuthenticateAnonymous
            <%= data.branding.codeClient %>.Get().AuthenticationService.AnonymousId =
                <%= data.branding.codeClient %>.Get().AuthenticationService.GenerateAnonymousId();
            <%= data.branding.codeClient %>.Get().AuthenticationService.AuthenticateAnonymous(true, OnSuccess_Authenticate, OnError_AuthenticateAnonymous);
            break;
        }
        default: { // Uncaught reasonCode
            /**
             * Log the unexpected reasonCode to your own internal logs,
             * to implement needed error handling later
             */
            break;
        }
    }
}
```


:::caution
Make sure you've initialized the <%= data.branding.productName %> library before authenticating.
:::

:::tip
You can set the profile and anonymous IDs directly using <a href="#capi-client-initializeidentity"><%= data.branding.codeClient %>.InitializeIdentity()</a> or <a href="#capi-client-initializeidentity"><%= data.branding.codeClient %>.AuthenticationService.InitializeIdentity()</a>
:::

<PartialServop service_name="authenticationV2" operation_name="AUTHENTICATE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
bool forceCreate = true;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};
    
<%= data.branding.codePrefix %>.AuthenticationService.AuthenticateAnonymous(forceCreate, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// if it's a new user
const char* newAnonId = <%= data.branding.codePrefix %>->generateGUID();
<%= data.branding.codePrefix %>->initializeIdentity(NULL, newAnonId);
<%= data.branding.codePrefix %>->getAuthenticationService()->authenticateAnonymous(true, this);

// if it's an existing user
const char* savedProfileId = yourMethodToGetSavedProfileId();
const char* savedAnonId = yourMethodToGetSavedAnonymousId();
<%= data.branding.codePrefix %>->initializeIdentity(savedProfileId, savedAnonId);
<%= data.branding.codePrefix %>->getAuthenticationService()->authenticateAnonymous(false, this);

// note you can also use the <%= data.branding.codeWrapper %> class
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
BOOL forceCreate = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> authenticationService] authenticateAnonymous:forceCreate
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
boolean includeOffline = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.GetAuthenticationService().AuthenticateAnonymous(includeOffline, this);

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
var forceCreate = true;

<%= data.branding.codePrefix %>.authentication.authenticateAnonymous(forceCreate, result =>
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

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40206 | MISSING_IDENTITY_ERROR | Both an anonymousId and profileId were provided for authentication - but the anonymousId doesn't exist on the server. The profileId may or may not exist. **It is possible that the user account was deleted via the Design Portal.** The proper recourse is to reset the stored profile id, and re-authenticate. [There is no need to delete the anonymousId since it doesn't exist on the server anyway.]
40207 | SWITCHING_PROFILES | This means that the anonymousId provided *does* point to a profile, but not the same one that was saved in the client. This fails the anonymous security check. For any other authentication type, this might indicate that the user wants to switch accounts (thus the name of the error constant). For anonymous, the only response is to reset *both* the stored anonymousId and profileId, and then re-authenticate.
40208 | MISSING_PROFILE_ERROR | The anonymousId provided is not associated with an existing profile and forceCreate = false. To create an account, retry with forceCreate = true.
40209 | SECURITY_ERROR | Occurs when attempting to authenticate anonymously to an existing user without providing the matching profile ID
40217 | UNKNOWN_AUTH_ERROR | An unknown error has occurred on authentication
40358 | MISSING_REQUIRED_PARAMETER | The provided anonymous ID cannot be null

</details>


## Method Parameters
Parameter | Description
--------- | -----------
forceCreate | If set to true, create a new profile if anonymous ID not found. If set to false and anonymous ID does not exist on the server, return an error.


