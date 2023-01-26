# GetProfileInfoForExternalAuthIdIfExists
## Overview
Retrieves profile information for the specified user. Silently fails

<PartialServop service_name="friend" operation_name="GET_PROFILE_INFO_FOR_EXTERNAL_AUTH_ID_IF_EXISTS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string externalId = "username";
string externalAuthType = "OAuth";
SuccessCallback successCallback = (response, cbObject) =>
{
  Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
  Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.FriendService.GetProfileInfoForExternalAuthIdIfExists(externalId, externalAuthType, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const chat *externalId = "username";
const chat *externalAuthType = "OAuth";

<%= data.branding.codePrefix %>->getFriendService()->getProfileInfoForExternalAuthIdIfExists(externalId, externalAuthType, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *externalId = @"username";
NSString *externalAuthType = @"OAuth";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> friendService] getProfileInfoForExternalAuthIdIfExists:externalId
              externalAuthType:externalAuthType
               completionBlock:successBlock
          errorCompletionBlock:failureBlock
                      cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String externalId = "username";
String externalAuthType = "OAuth";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getFriendService().getProfileInfoForExternalAuthIdIfExists(externalId, externalAuthType, this);

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
var externalId = "username";
var externalAuthType = "OAuth";

<%= data.branding.codePrefix %>.friend.getProfileInfoForExternalAuthIdIfExists(externalId, externalAuthType, result =>
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
var externalId = "username";
var externalAuthType = "OAuth";
var friendProxy = bridge.getFriendServiceProxy();

var postResult = friendProxy.getProfileInfoForExternalAuthIdIfExists(externalId, externalAuthType);
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
  "operation": "GET_PROFILE_INFO_FOR_EXTERNAL_AUTH_ID_IF_EXISTS",
  "data":
  {
    "externalId": "username",
    "externalAuthType": "OAuth"
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
externalId | The external id.
externalAuthType | The name of the custom authentication type (linked to a cloud script that performs authentication.) Configured via the **Design &#124; Authentication &#124; External** page of the Design Portal.


