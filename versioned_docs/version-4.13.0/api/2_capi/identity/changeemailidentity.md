# ChangeEmailIdentity
## Overview
Changes email address in email identity for this player

<PartialServop service_name="identity" operation_name="CHANGE_EMAIL_IDENTITY" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string oldEmailAddress = "oldemail@email.com";
string authenticationToken = "password";
string newEmailAddress = "newemail@email.com";
bool updateContactEmail = true;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.IdentityService.ChangeEmailIdentity(oldEmailAddress, authenticationToken, newEmailAddress, updateContactEmail, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *oldEmailAddress = "oldemail@email.com";
const char *authenticationToken = "password";
const char *newEmailAddress = "newemail@email.com";
bool updateContactEmail = true;
<%= data.branding.codePrefix %>->getIdentityService()->changeEmailIdentity(oldEmailAddress, authenticationToken, newEmailAddress, updateContactEmail, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *oldEmailAddress = @"oldemail@email.com";
NSString *authenticationToken = @"password";
NSString *newEmailAddress = @"newemail@email.com";
bool updateContactEmail = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> identityService] changeEmailIdentity:oldEmailAddress
        authenticationToken:authenticationToken
            newEmailAddress:newEmailAddress
         updateContactEmail:updateContactEmail
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String oldEmailAddress = "oldemail@email.com";
String authenticationToken = "password";
String newEmailAddress = "newemail@email.com";
boolean updateContactEmail = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getIdentityService().changeEmailIdentity(oldEmailAddress, authenticationToken, newEmailAddress, updateContactEmail, this);

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
var oldEmailAddress = "oldemail@email.com";
var authenticationToken = "password";
var newEmailAddress = "newemail@email.com";
var updateContactEmail = true;

<%= data.branding.codePrefix %>.identity.changeEmailIdentity(oldEmailAddress, authenticationToken, newEmailAddress, updateContactEmail, result =>
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
var oldEmailAddress = "oldemail@email.com";
var authenticationToken = "password";
var newEmailAddress = "newemail@email.com";
var updateContactEmail = true;
var identityProxy = bridge.getIdentityServiceProxy();

var postResult = identityProxy.changeEmailIdentity(oldEmailAddress, authenticationToken, newEmailAddress, updateContactEmail);
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
	"service": "identity",
	"operation": "CHANGE_EMAIL_IDENTITY",
	"data": {
		"oldEmailAddress": "oldemail@email.com",
		"authenticationToken": "password",
		"newEmailAddress": "newemail@email.com",
		"updateContactEmail": true
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
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
oldEmailAddress | Old email address
password | Password
newEmailAddress | New email address
updateContactEmail | Whether to update contact email in profile


