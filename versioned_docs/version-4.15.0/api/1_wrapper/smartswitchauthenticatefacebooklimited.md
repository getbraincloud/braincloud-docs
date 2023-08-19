# SmartSwitchAuthenticateFacebookLimited
## Overview
Smart Switch Authenticate will logout of the current profile, and switch to the new authentication type.
In event the current session was previously an anonymous account, the smart switch will delete that profile.
Use this function to keep a clean designflow from anonymous to signed profiles.

Authenticate the user with <%= data.branding.productName %> using their Facebook Credentials.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string facebookId = "userFacebookId";
string token = "tokenFromFacebook";
bool forceCreate = true;

<%= data.branding.codePrefix %>.SmartSwitchAuthenticateFacebookLimited(
    facebookId, token, forceCreate, SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* facebookId = "userFacebookId";
const char* token = "tokenFromFacebook";
bool forceCreate = true;

<%= data.branding.codePrefix %>->smartSwitchAuthenticateFacebookLimited(
    facebookId,
    token,
    forceCreate,
    this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString * facebookId = @"userFacebookId";
NSString * token = @"tokenFromFacebook";
BOOL forceCreate = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %>]
    smartSwitchAuthenticateFacebookLimited:facebookId
  	        authenticationToken:token
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
String facebookId = "userFacebookId";
String token = "tokenFromFacebook";
boolean forceCreate = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.smartSwitchAuthenticateFacebookLimited(facebookId, token, forceCreate, this);

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
var facebookId = "userFacebookId";
var token = "tokenFromFacebook";
var forceCreate = true;

<%= data.branding.codePrefix %>.smartSwitchAuthenticateFacebookLimited(facebookId, token, forceCreate, result =>
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

```cfscript
// N/A
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
facebookId | The Facebook ID of the user
facebookToken | The authentication token from the Facebook SDK
forceCreate | Should a new profile be created for this user if the account does not exist?


