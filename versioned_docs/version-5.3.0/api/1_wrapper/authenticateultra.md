# AuthenticateUltra

Authenticate the user for Ultra.

<PartialServop service_name="authenticationV2" operation_name="AUTHENTICATE" / >

## Method Parameters
Parameter | Description
--------- | -----------
ultraUsername | It's what the user uses to log into the Ultra endpoint initially
ultraIdToken | The "id_token" taken from Ultra's JWT.
forceCreate | Should a new profile be created for this user if the account does not exist?

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string ultraUsername = "ultraUsername";
string ultraIdToken = "ultraIdToken";
bool forceCreate = true;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.AuthenticateUltra(
    ultraUsername, ultraIdToken, forceCreate, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* ultraUsername = "ultraUsername";
const char* ultraIdToken = "ultraIdToken";
bool forceCreate = true;

<%= data.branding.codePrefix %>->authenticateUltra(
    ultraUsername,
    ultraIdToken,
    forceCreate,
    this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString * ultraUsername = @"ultraUsername";
NSString * ultraIdToken = @"ultraIdToken";
BOOL forceCreate = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[<%= data.branding.codePrefix %> authenticateUltra:ultraUsername
                                      ultraIdToken:ultraIdToken
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
String ultraUsername = "ultraUsername";
String ultraIdToken = "ultraIdToken";
boolean forceCreate = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.authenticateUltra(ultraUsername, ultraIdToken, forceCreate, this);

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
var ultraUsername = "ultraUsername";
var ultraIdToken = "ultraIdToken";
var forceCreate = true;

<%= data.branding.codePrefix %>.authenticateUltra(ultraUsername, ultraIdToken, forceCreate, result =>
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

