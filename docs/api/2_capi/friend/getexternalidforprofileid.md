# GetExternalIdForProfileId
## Overview
Retrieves the external ID for the specified user profile ID on the specified social platform.

Does not require the calling user to be a friend of the other user.

<PartialServop service_name="friend" operation_name="GET_EXTERNAL_ID_FOR_PROFILE_ID" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string profileId = "profileId";
AuthenticationType authenticationType = AuthenticationType.Facebook;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.Friend.GetExternalIdForProfileId(profileId, authenticationType, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *profileId = "profileId";
AuthenticationType authenticationType = AuthenticationType::Facebook;

<%= data.branding.codePrefix %>->getFriend()->getExternalIdForProfileId(profileId, authenticationType, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *profileId = @"profileId";
AuthenticationTypeObjc *authenticationType = [AuthenticationTypeObjc Facebook];
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> friendService] getExternalIdForProfileId:profileId
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
String profileId = "profileId";
AuthenticationType authenticationType = AuthenticationType.Facebook;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getFriend().getExternalIdForProfileId(profileId, authenticationType, this);

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
var profileId = "profileId";
var authenticationType = "Facebook";

<%= data.branding.codePrefix %>.friend.getExternalIdForProfileId(profileId, authenticationType, result =>
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
var profileId = "profileId";
var authenticationType = "Facebook";
var friendProxy = bridge.getFriendServiceProxy();

var postResult = friendProxy.getExternalIdForProfileId(profileId, authenticationType);
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
	"operation": "GET_EXTERNAL_ID_FOR_PROFILE_ID",
	"data": {
		"profileId": "profileId",
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
        "externalId": "19e1c0cf-9a2d-4d5c-9a71-1b0f6b309b4b"
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
profileId | Profile (user) ID.
authenticationType | Associated authentication type. Full list of types can be found [here](/api/appendix/authtypes).


