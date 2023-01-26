# GetProfileInfoForCredentialIfExists
## Overview
Retrieves profile information for the specified user. Silently fails

<PartialServop service_name="friend" operation_name="GET_PROFILE_INFO_FOR_CREDENTIAL_IF_EXISTS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string externalId = "profileId";
string authenticationType = "Facebook";
SuccessCallback successCallback = (response, cbObject) =>
{
  Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
  Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.FriendService.GetProfileInfoForCredentialIfExists(externalId, authenticationType, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const chat *externalId = "profileId";
const chat *authenticationType = "Facebook";

<%= data.branding.codePrefix %>->getFriendService()->getProfileInfoForCredentialIfExists(externalId, authenticationType, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *externalId = @"profileId";
NSString *authenticationType = @"Facebook";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> friendService] getProfileInfoForCredentialIfExists:externalId
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
String authenticationType = "Facebook";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getFriendService().getProfileInfoForCredentialIfExists(externalId, authenticationType, this);

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

<%= data.branding.codePrefix %>.friend.getProfileInfoForCredentialIfExists(externalId, authenticationType, result =>
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

var postResult = friendProxy.getProfileInfoForCredentialIfExists(externalId, authenticationType);
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
  "operation": "GET_PROFILE_INFO_FOR_CREDENTIAL_IF_EXISTS",
  "data":
  {
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
  "status" : 200,
  "data" : {}
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
externalId | External id.
authenticationType | Associated authentication type.


