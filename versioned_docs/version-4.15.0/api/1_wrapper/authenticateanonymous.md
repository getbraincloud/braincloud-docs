# AuthenticateAnonymous
## Overview
Authenticate a user anonymously with <%= data.branding.productName %> - used for apps that don't want to bother the user to login, or for users who are sensitive to their privacy.




:::caution
Make sure you've initialized the <%= data.branding.codeWrapper %> before authenticating.
:::



## Error Handling Example

```csharp
public void FailureCallback(int statusCode, int reasonCode, string statusMessage, object cbObject) {
    switch (reasonCode) {
        case ReasonCodes.MISSING_IDENTITY_ERROR: {  // Identity does not match any profile

            // Reset Profile ID and re-authenticate
            <%= data.branding.codePrefix %>.ResetStoredProfileId();
            <%= data.branding.codePrefix %>.AuthenticateAnonymous();
            break;
        }
        case ReasonCodes.SWITCHING_PROFILES: {  // Identity belongs to a different profile

            // Reset Profile ID and Anonymous id, and then re-authenticate
            <%= data.branding.codePrefix %>.ResetStoredProfileId();
            <%= data.branding.codePrefix %>.ResetStoredAnonymousId();
            <%= data.branding.codePrefix %>.AuthenticateAnonymous();
            break;
        }
        default: { // Uncaught reasonCode  // Uncaught reasonCode

            // Log the error for debugging later
            // ...
            break;
        }
    }
}
```

<PartialServop service_name="authenticationV2" operation_name="AUTHENTICATE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("[Authenticate Success] {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("[Authenticate Failed] {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.AuthenticateAnonymous(successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->authenticateAnonymous(this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
[<%= data.branding.codePrefix %> authenticateAnonymous:successBlock
      errorCompletionBlock:failureBlock
                  cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
<%= data.branding.codePrefix %>.authenticateAnonymous();
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.authenticateAnonymous(result =>
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
<%= data.branding.codePrefix %>.authenticateAnonymous(result =>
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
<%= data.branding.codePrefix %>.authenticateAnonymous(result =>
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
40206 | MISSING_IDENTITY_ERROR | Both an anonymousId and profileId were provided for authentication - but the anonymousId doesn't exist on the server. The profileId may or may not exist. **It is possible that the user account was deleted via the Design Portal.** The proper recourse is to reset the stored profile id, and re-authenticate. [There is no need to delete the anonymousId since it doesn't exist on the server anyway.]
40207 | SWITCHING_PROFILES | This means that the anonymousId provided *does* point to a profile, but not the same one that was saved in the client. This fails the anonymous security check. For any other authentication type, this might indicate that the user wants to switch accounts (thus the name of the error constant). For anonymous, the only response is to reset *both* the stored anonymousId and profileId, and then re-authenticate.
40217 | UNKNOWN_AUTH_ERROR | An unknown error has occurred during authentication

</details>


