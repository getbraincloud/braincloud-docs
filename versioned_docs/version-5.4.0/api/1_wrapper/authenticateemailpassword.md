# AuthenticateEmailPassword

Authenticate the user with a custom Email and Password.  Note that the client app is responsible for collecting (and storing) the e-mail and potentially password (for convenience) in the client data.  For the greatest security, force the user to re-enter their password at each login (or at least give them that option).



## Error Handling Example

```csharp
public void FailureCallback(int statusCode, int reasonCode, string statusMessage, object cbObject) {
    switch (reasonCode) {
        case ReasonCodes.MISSING_IDENTITY_ERROR: {  // Identity does not exist (and client has orphaned profileId)

            // Reset profileId and re-authenticate
            <%= data.branding.codePrefix %>.ResetStoredProfileId();
            <%= data.branding.codePrefix %>.AuthenticateUniversal(userId, password, true);
            break;
        }
        case ReasonCodes.SWITCHING_PROFILES: {  // Identity belongs to a different profile

            // [Optional] Prompt user to confirm that they wish to switch accounts?

            // Reset profileId and re-authenticate
            <%= data.branding.codePrefix %>.ResetStoredProfileId();
            <%= data.branding.codePrefix %>.AuthenticateUniversal(userId, password, forceCreate);
            break;
        }
        case ReasonCodes.MISSING_PROFILE_ERROR: {  // Identity does not exist

            // The account doesn't exist - create it now.
            <%= data.branding.codePrefix %>.AuthenticateUniversal(userId, password, true);
            break;
        }
        case ReasonCodes.TOKEN_DOES_NOT_MATCH_USER: {  // Wrong password

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

:::caution
Make sure you've initialized the <%= data.branding.productName %> wrapper before authenticating.
:::

<PartialServop service_name="authenticationV2" operation_name="AUTHENTICATE" / >

## Method Parameters
Parameter | Description
--------- | -----------
email | The e-mail address of the user
password | The password of the user
forceCreate | Should a new profile be created for this user if the account does not exist?

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string email ="<%= data.example.email %>";
string password = "<%= data.example.password %>";
bool forceCreate = true;
    
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("[Authenticate Success] {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("[Authenticate Failed] {0}  {1}  {2}", status, code, error));
};
<%= data.branding.codePrefix %>.AuthenticateEmailPassword(
    email, password, forceCreate, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* email ="<%= data.example.email %>";
const char* password = "<%= data.example.password %>";
bool forceCreate = true;

<%= data.branding.codePrefix %>->authenticateEmailPassword(email, password, forceCreate, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString* email = @"<%= data.example.email %>";
NSString* password = @"<%= data.example.password %>";
bool forceCreate = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[<%= data.branding.codePrefix %> authenticateEmailPassword:email
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
String email ="<%= data.example.email %>";
String password = "<%= data.example.password %>";
boolean forceCreate = true;

<%= data.branding.codePrefix %>.authenticateEmailPassword(
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
var email ="<%= data.example.email %>";
var password = "<%= data.example.password %>";
var forceCreate = true;

<%= data.branding.codePrefix %>.authenticateEmailPassword(email, password, forceCreate, result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
var email ="<%= data.example.email %>";
var password = "<%= data.example.password %>";
var forceCreate = true;

ServerResponse result = await <%= data.branding.codePrefix %>.authenticateEmailPassword(
    email:email, 
    password:password, 
    forceCreate:forceCreate);

if (result.statusCode == 200) {
    print("Success");    
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```javascript
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
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
    "data": {
        "abTestingId": 95,
        "lastLogin": 1713973000159,
        "server_time": 1713973000235,
        "refundCount": 0,
        "timeZoneOffset": -5.0,
        "experiencePoints": 0,
        "maxBundleMsgs": 10,
        "createdAt": 1713973000153,
        "parentProfileId": null,
        "emailAddress": "test@email.com",
        "experienceLevel": 1,
        "countryCode": null,
        "vcClaimed": 0,
        "currency": {
            "bar": {
                "consumed": 0,
                "balance": 0,
                "purchased": 0,
                "awarded": 0,
                "revoked": 0
            },
                "coins": {
                "consumed": 0,
                "balance": 8,
                "purchased": 0,
                "awarded": 8,
                "revoked": 0
            }
        },
        "id": "15e5ce33-2411-45f8-a29e-7f600880113a",
        "compressIfLarger": 51200,
        "amountSpent": 0,
        "previousLogin": null,
        "playerName": "",
        "pictureUrl": null,
        "incoming_events": [],
        "sessionId": "gbgakmm4hmt15e2pobvmh7ptck",
        "languageCode": "en",
        "vcPurchased": 0,
        "isTester": false,
        "summaryFriendData": null,
        "loginCount": 1,
        "emailVerified": true,
        "xpCapped": false,
        "profileId": "15e5ce33-2411-45f8-a29e-7f600880113a",
        "newUser": "true",
        "playerSessionExpiry": 1200,
        "sent_events": [],
        "maxKillCount": 11,
        "rewards": {
            "rewardDetails": {
                "xp": {
                    "experienceLevels": [
                        { 
                            "level": 1, 
                            "rewards": { 
                                "currency": { 
                                    "coins": 8 
                                } 
                            } 
                        }
                    ]
                }
            },
            "currency": {
                "bar": {
                    "consumed": 0,
                    "balance": 0,
                    "purchased": 0,
                    "awarded": 0,
                    "revoked": 0
                },
                "coins": {
                    "consumed": 0,
                    "balance": 8,
                    "purchased": 0,
                    "awarded": 8,
                    "revoked": 0
                }
            },
            "rewards": {}
        },
        "statistics": {
            "test": 0.99,
            "HITLEVELNVEHICLE_000005": 0
        }
    },
    "status": 200
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40206 | MISSING_IDENTITY_ERROR | The identity does not exist on the server and `forceCreate` was `false` [and a `profileId` was provided - otherwise 40208 would have been returned]. Will also occur when `forceCreate` is `true` and a saved [and unrelated] `profileId` is provided. The error handler should reset the stored profile id (if there is one) and re-authenticate, setting `forceCreate` to `true` to create a new account. **A common cause of this error is deleting the user's account via the Design Portal.**
40207 | SWITCHING_PROFILES | Indicates that the identity credentials are valid, and the saved `profileId` is valid, but the identity is not associated with the `profileId`. This may indicate that the user wants to switch accounts in the app. Often an app will pop-up a dialog confirming that the user wants to switch accounts, and then reset the stored `profileId` and call authenticate again.
40208 | MISSING_PROFILE_ERROR | Returned when the identity cannot be located, no `profileId` is provided, and `forceCreate` is false. The normal response is to call Authenticate again with `forceCreate` set to `true`.
40217 | UNKNOWN_AUTH_ERROR | An unknown error has occurred during authentication.
40221 | EMAIL_NOT_VALID | The provided email address is not in the correct format.
40307 | TOKEN_DOES_NOT_MATCH_USER | The user credentials don't match (i.e. incorrect password).

</details>


