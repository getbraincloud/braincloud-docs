# AuthenticateParse

Authenticate the user using a Parse user ID and authentication token.

:::caution
Make sure you've initialized the <%= data.branding.productName %> library before authenticating.
:::

<PartialServop service_name="authenticationV2" operation_name="AUTHENTICATE" />

## Method Parameters

| Parameter   | Description                                                                  |
| ----------- | ---------------------------------------------------------------------------- |
| parseId     | String representation of Parse user ID                                       |
| parseToken  | The authentication token from Parse                                          |
| forceCreate | Should a new profile be created for this user if the account does not exist? |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string parseId = "someId1234";
string parseToken = "authToken";
bool forceCreate = true;

<%= data.branding.codePrefix %>.AuthenticationService.AuthenticateParse(
    parseId, parseToken, forceCreate, SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* parseId = "someId1234";
const char* parseToken = "authToken";
bool forceCreate = true;

<%= data.branding.codePrefix %>->getAuthenticationService()->authenticateParse(
    parseId, parseToken, forceCreate, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString * parseId = @"someId1234";
NSString * parseToken = @"authToken";
BOOL forceCreate = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> authenticationService]
		  authenticateParse:parseId
                 parseToken:parseToken
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
String parseId = "someId1234";
String parseToken = "authToken";
boolean forceCreate = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getAuthenticationService().authenticateParse(parseId, parseToken, forceCreate, this);

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
var parseId = "someId1234";
var parseToken = "authToken";
var forceCreate = true;

<%= data.branding.codePrefix %>.authentication.authenticateParse(parseId, parseToken, forceCreate, result =>
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
var  parseId = "someId1234";
var  parseToken = "authToken";
var  forceCreate = true;

ServerResponse result = await <%= data.branding.codePrefix %>.authenticationService.authenticateParse(parseId:parseId, parseToken:parseToken, forceCreate:forceCreate);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
local parseId = "someId1234"
local parseToken = "authToken"
local forceCreate = true

local callback = function(result)
	if result.statusCode == 200 then
		print("Success")
	else
		print("Failed | " .. tostring(result.status))
	end
end

<%= data.branding.codePrefix %>:getAuthenticationService():authenticateParse(parseId, parseToken, forceCreate, callback)
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

```r
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
    },
    "status": 200
}
```

</details>

<details>
<summary>Common Error Code</summary>

### Status Codes

| Code  | Name                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 40206 | MISSING_IDENTITY_ERROR    | The identity does not exist on the server and `forceCreate` was `false` [and a `profileId` was provided - otherwise 40208 would have been returned]. Will also occur when `forceCreate` is `true` and a saved [but un-associated] `profileId` is provided. The error handler should reset the stored profile id (if there is one) and re-authenticate, setting `forceCreate` to `true` to create a new account. **A common cause of this error is deleting the user's account via the Design Portal.** |
| 40207 | SWITCHING_PROFILES        | Indicates that the identity credentials are valid, and the saved `profileId` is valid, but the identity is not associated with the provided `profileId`. This may indicate that the user wants to switch accounts in the app. Often an app will pop-up a dialog confirming that the user wants to switch accounts, and then reset the stored `profileId` and call authenticate again.                                                                                                                  |
| 40208 | MISSING_PROFILE_ERROR     | Returned when the identity cannot be located, no `profileId` is provided, and `forceCreate` is false. The normal response is to call Authenticate again with `forceCreate` set to `true`.                                                                                                                                                                                                                                                                                                              |
| 40217 | UNKNOWN_AUTH_ERROR        | An unknown error has occurred during authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 40307 | TOKEN_DOES_NOT_MATCH_USER | The user credentials are invalid (i.e. parseId and parseToken are invalid). May also indicate that Parse Integration is not properly configured.                                                                                                                                                                                                                                                                                                                                                       |

</details>
