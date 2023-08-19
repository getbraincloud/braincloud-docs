# Reconnect
## Overview
Re-authenticates the user with <%= data.branding.productName %>

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
<%= data.branding.codePrefix %>.Reconnect(successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->reconnect(this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
- (void)reconnect:(BCCompletionBlock)cb
 errorCompletionBlock:(BCErrorCompletionBlock)ecb
        cbObject:(BCCallbackObject)cbObject;
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
<%= data.branding.codePrefix %>.reconnect(this);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.reconnect(callback);
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```javascript
<%= data.branding.codePrefix %>.reconnect(callback);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
<%= data.branding.codePrefix %>.reconnect(callback);
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

