# GetProfileInfoForCredential
## Overview
Retrieves profile information for the specified user.

Does not require the calling user to be a friend of the other user.

<PartialServop service_name="friend" operation_name="GET_PROFILE_INFO_FOR_CREDENTIAL" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string externalId = "profileId";
AuthenticationType authenticationType = AuthenticationType.Facebook;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.Friend.GetProfileInfoForCredential(externalId, authenticationType, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *externalId = "profileId";
AuthenticationType authenticationType = AuthenticationType::Facebook;


<%= data.branding.codePrefix %>->getFriend()->getProfileInfoForCredential(externalId, authenticationType, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *externalId = @"profileId";
AuthenticationTypeObjc *authenticationType = [AuthenticationTypeObjc Facebook];
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> friendService] getProfileInfoForCredential:externalId
         authenticationType:authenticationType
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String externalId = "profileId";
AuthenticationType authenticationType = AuthenticationType.Facebook;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getFriend().getProfileInfoForCredential(externalId, authenticationType, this);

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
var externalId = "profileId";
var authenticationType = "Facebook";

<%= data.branding.codePrefix %>.friend.getProfileInfoForCredential(externalId, authenticationType, result =>
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
var externalId = "profileId";
var authenticationType = "Facebook";
var friendProxy = bridge.getFriendServiceProxy();

var postResult = friendProxy.getProfileInfoForCredential(externalId, authenticationType);
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
	"service": "friend",
	"operation": "GET_PROFILE_INFO_FOR_CREDENTIAL",
	"data": {
		"externalId": "profileId",
		"authenticationType": "Facebook"
	}
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
        "playerName": "",
        "email": null,
        "playerId": "bb05182d-ff0c-4740-ae65-482751e74949",
        "playerSummaryData": {
            "LEVEL": 7
        }
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
externalId | External identifier.
authenticationType | Associated authentication type. Full list of types can be found [here](/api/appendix/authtypes).


