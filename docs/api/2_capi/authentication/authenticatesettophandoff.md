# AuthenticateSettopHandoff

Authenticate the user with a custom Set-top Handoff Code - which is an short, easy-to-enter code suitable for use in devices with limited data entry capabilities (i.e. Set-top boxes, VR headsets, etc.) The hand-off code can be generated via the [<code>CreateSettopHandoffCode</code>](/api/capi/identity/createsettophandoffcode) cloud-code call.




:::caution
Make sure you've initialized the <%= data.branding.productName %> library before authenticating.
:::

<PartialServop service_name="authenticationV2" operation_name="AUTHENTICATE" />

## Method Parameters
Parameter | Description
--------- | -----------
handoffCode | The set-top hand-off code generated via [<code>CreateSettopHandoffCode</code>](/api/capi/identity/createsettophandoffcode) 

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string handoffCode = "handoffCode";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.AuthenticationService.AuthenticateSettopHandoff(
    handoffCode, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* handoffCode = "handoffCode";

<%= data.branding.codePrefix %>->getAuthenticationService()->authenticateSettopHandoff(
    handoffCode,
    this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString* handoffCode = @"handoffCode";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> authenticationService]
		authenticateSettopHandoff:handoffCode
                  completionBlock:successBlock
             errorCompletionBlock:failureBlock
                         cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String handoffCode = "handoffCode";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getAuthenticationService().authenticateSettopHandoff(handoffCode, this);

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
var handoffCode = "handoffCode";

<%= data.branding.codePrefix %>.authentication.authenticateSettopHandoff(handoffCode, result =>
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
var  handoffCode = "handoffCode";

ServerResponse result = await <%= data.branding.codePrefix %>.authenticationService.authenticateSettopHandoff(handoffCode:handoffCode);

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
      "abTestingId": 48,
      "lastLogin": 1572446599748,
      "server_time": 1572446599779,
      "refundCount": 0,
      "timeZoneOffset": -5,
      "experiencePoints": 0,
      "maxBundleMsgs": 12,
      "createdAt": 1572446599168,
      "parentProfileId": null,
      "emailAddress": null,
      "experienceLevel": 0,
      "handoffJson": {"key": "value"},
      "countryCode": "CA",
      "vcClaimed": 0,
      "currency": {
        "test": {
          "consumed": 0,
          "balance": 0,
          "purchased": 0,
          "awarded": 0
        },
        "credits": {
          "consumed": 0,
          "balance": 0,
          "purchased": 0,
          "awarded": 0
        }
      },
      "id": "5e04aa28-4c1f-45c2-b32c-3f52c59cfb49",
      "compressIfLarger": 0,
      "amountSpent": 0,
      "previousLogin": 1572446599171,
      "playerName": "",
      "pictureUrl": null,
      "incoming_events": [],
      "sessionId": "b9rr6j32ragmhnp5aajbi8vn82",
      "languageCode": "en",
      "vcPurchased": 0,
      "isTester": false,
      "summaryFriendData": null,
      "loginCount": 2,
      "xpCapped": false,
      "profileId": "5e04aa28-4c1f-45c2-b32c-3f52c59cfb49",
      "newUser": "false",
      "playerSessionExpiry": 60,
      "sent_events": [],
      "maxKillCount": 11,
      "rewards": {
        "rewardDetails": {},
        "currency": {},
        "rewards": {}
      },
      "statistics": {
        "wins": 0,
        "gamesLost": 0,
        "stat2": 0,
        "gamesPlayed": 0,
        "TestStat": 0,
        "highestScore": 0,
        "currency": 0,
        "losses": 0,
        "TestStat2": 0,
        "gamesWon": 0
      }
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
40207 | SWITCHING_PROFILES | Indicates that the identity credentials are valid, and the saved `profileId` is valid, but the identity is not associated with the provided `profileId`. This may indicate that the user wants to switch accounts in the app. Most often an app will pop-up a dialog confirming that the user wants to switch accounts, and then reset the stored `profileId` and call authenticate again.
40208 | MISSING_PROFILE_ERROR | Returned when the identity cannot be located, no `profileId` is provided, and `forceCreate` is false. The normal response is to call Authenticate again with `forceCreate` set to `true`.
40217 | UNKNOWN_AUTH_ERROR | An unknown error has occurred during authentication.
40307 | TOKEN_DOES_NOT_MATCH_USER | The user's password is incorrect.

</details>


