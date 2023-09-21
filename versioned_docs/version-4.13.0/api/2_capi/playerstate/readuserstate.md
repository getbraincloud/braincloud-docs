# ReadUserState
## Overview
Read the state of the currently logged in user.

This method returns a JSON object describing most of the user's data: entities, statistics, level, currency. Apps will typically call this method after authenticating to get an up-to-date view of the user's data.

<PartialServop service_name="playerState" operation_name="READ" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PlayerStateService.ReadUserState(successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->getPlayerStateService()->readUserState(this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> playerStateService] readUserState:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPlayerStateService().readUserState(this);

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

<%= data.branding.codePrefix %>.playerState.readUserState(result =>
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
var playerStateProxy = bridge.getPlayerStateServiceProxy();

var postResult = playerStateProxy.readUserState();
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "playerState",
	"operation": "READ"
}
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
		"server_time": 1484932358724,
		"experienceLevel": 0,
		"currency": {
			"credits": {
				"purchased": 0,
				"balance": 12212,
				"consumed": 133,
				"awarded": 12345
			}
		},
		"statistics": {
			"TestStat": 0,
			"TestStat2": 0
		},
		"abTestingId": 8,
		"id": "323ce861-b749-4ce4-a57a-175232e21b5d",
		"createdAt": 1459439058035,
		"profileId": "323ce861-b749-4ce4-a57a-175232e21b5d",
		"isTester": false,
		"xpCapped": false,
		"sent_events": [],
		"timeZoneOffset": -5,
		"playerName": "",
		"vcClaimed": 0,
		"parentProfileId": null,
		"countryCode": "CA",
		"loginCount": 107,
		"emailAddress": "bradleyh@bitheads.com",
		"peerProfileIds": {
			"peerapp": {
				"profileId": "65fad6a7-1bb7-4ac1-8b8b-59671a81a9ce"
			}
		},
		"previousLogin": 1484061296282,
		"incoming_events": [],
		"peerCurrency": {
			"peerapp": {
				"gold": {
					"purchased": 0,
					"balance": 343,
					"consumed": 0,
					"awarded": 343
				}
			}
		},
		"lastLogin": 1484932342834,
		"languageCode": "en",
		"pictureUrl": null,
		"amountSpent": 0
	}
}
```
</details>

