# AttachParentWithIdentity

Attach a parent identity to the current profile. Create if necessary.

<PartialServop service_name="identity" operation_name="ATTACH_PARENT_WITH_IDENTITY" />

## Method Parameters

| Parameter           | Description                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------------- |
| externalId          | User ID                                                                                            |
| authenticationToken | Password or client side token                                                                      |
| authenticationType  | Type of authentication. Full list of types can be found [here](/api/appendix/authtypes).           |
| externalAuthName    | The name of the external authentication mechanism (optional, used for custom authentication types) |
| forceCreate         | Whether to create the profile if it does not exist                                                 |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string externalId = "email@email.com";
string authenticationToken = "email@email.com";
AuthenticationType authenticationType = AuthenticationType.Email;
string externalAuthName = "";
bool forceCreate = true;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.IdentityService.AttachParentWithIdentity(externalId, authenticationToken, authenticationType, externalAuthName, forceCreate, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *externalId = "email@email.com";
const char *authenticationToken = "email@email.com";
AuthenticationType authenticationType = AuthenticationType::Email;
const char *externalAuthName = "";
bool forceCreate = true;
<%= data.branding.codePrefix %>->getIdentityService()->attachParentWithIdentity(externalId, authenticationToken, authenticationType, externalAuthName, forceCreate, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *externalId = @"email@email.com";
NSString *authenticationToken = @"email@email.com";
AuthenticationTypeObjc authenticationType = [AuthenticationTypeObjc Email];
NSString *externalAuthName = @"";
bool forceCreate = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> identityService] attachParentWithIdentity:externalId
        authenticationToken:authenticationToken
         authenticationType:authenticationType
           externalAuthName:externalAuthName
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
String externalId = "email@email.com";
String authenticationToken = "email@email.com";
AuthenticationType authenticationType = AuthenticationType.Email;
String externalAuthName = "";
boolean forceCreate = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getIdentityService().attachParentWithIdentity(externalId, authenticationToken, authenticationType, externalAuthName, forceCreate, this);

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
var externalId = "email@email.com";
var authenticationToken = "email@email.com";
var authenticationType = "<%= data.branding.codePrefix %>.identity.authenticationType.email;
var externalAuthName = "";
var forceCreate = true;

<%= data.branding.codePrefix %>.identity.attachParentWithIdentity(externalId, authenticationToken, authenticationType, externalAuthName, forceCreate, result =>
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
var  externalId = "email@email.com";
var  authenticationToken = "email@email.com";
var  authenticationType = AuthenticationType.email;
var  externalAuthName = "";
var  forceCreate = true;

ServerResponse result = await <%= data.branding.codePrefix %>.identityService.attachParentWithIdentity(externalId:externalId, authenticationToken:authenticationToken, authenticationType:authenticationType, externalAuthName:externalAuthName, forceCreate:forceCreate);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
local externalId = "email@email.com"
local authenticationToken = "email@email.com"
local authenticationType = AuthenticationType.email
local externalAuthName = ""
local forceCreate = true

local callback = function(result)
	if result.statusCode == 200 then
		print("Success")
	else
		print("Failed | " .. tostring(result.status))
	end
end

<%= data.branding.codePrefix %>:getIdentityService():attachParentWithIdentity(externalId, authenticationToken, authenticationType, externalAuthName, forceCreate, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var externalId = "email@email.com";
var authenticationToken = "email@email.com";
var authenticationType = "Email";
var externalAuthName = "";
var forceCreate = true;
var identityProxy = bridge.getIdentityServiceProxy();

var postResult = identityProxy.attachParentWithIdentity(externalId, authenticationToken, authenticationType, externalAuthName, forceCreate);
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
	"operation": "ATTACH_PARENT_WITH_IDENTITY",
	"data": {
		"externalId": "email@email.com",
		"authenticationToken": "email@email.com",
		"authenticationType": "Email",
		"externalAuthName": "",
		"forceCreate": true
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
        "profileId": "1234-1234-1234-1234",
        "newUser": false
    }
}
```

</details>
