# ResetEmailPasswordWithExpiry

Sends a password reset email to the specified address. Allows the developer to specify how long the URL is valid for (in minutes).

<PartialServop service_name="authenticationV2" operation_name="RESET_EMAIL_PASSWORD_WITH_EXPIRY" />

## Method Parameters

| Parameter         | Description                                              |
| ----------------- | -------------------------------------------------------- |
| emailAddress      | The email address to send the reset email to.            |
| tokenTtlInMinutes | The time-to-live for the password reset url, in minutes. |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string emailAddress = "email@email.com";
int tokenTtlInMinutes = 1440;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.AuthenticationService.ResetEmailPasswordWithExpiry(emailAddress, tokenTtlInMinutes, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *emailAddress = "email@email.com";
int tokenTtlInMinutes = 1440;
<%= data.branding.codePrefix %>->getAuthenticationService()->resetEmailPasswordWithExpiry(emailAddress, tokenTtlInMinutes, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *emailAddress = @"email@email.com";
int tokenTtlInMinutes = 1440;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> authenticateService] resetEmailPasswordWithExpiry:emailAddress
          tokenTtlInMinutes:tokenTtlInMinutes
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String emailAddress = "email@email.com";
int tokenTtlInMinutes = 1440;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getAuthenticationService().resetEmailPasswordWithExpiry(emailAddress, tokenTtlInMinutes, this);

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
var emailAddress = "email@email.com";
var tokenTtlInMinutes = 1440;

<%= data.branding.codePrefix %>.authenticate.resetEmailPasswordWithExpiry(emailAddress, tokenTtlInMinutes, result =>
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
var  emailAddress = "email@email.com";
var  tokenTtlInMinutes = 1440;

ServerResponse result = await <%= data.branding.codePrefix %>.authenticationService.resetEmailPasswordWithExpiry(emailAddress:emailAddress, tokenTtlInMinutes:tokenTtlInMinutes);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var emailAddress = "email@email.com";
var  tokenTtlInMinutes = 1440;
var authenticationProxy = bridge.getAuthenticationServiceProxy();

var postResult = authenticationProxy.resetEmailPasswordWithExpiry(emailAddress, tokenTtlInMinutes);
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
    "service":"authenticationV2",
    "operation":"RESET_EMAIL_PASSWORD_WITH_EXPIRY",
    "data":{
        "emailAddress":"email@email.com",
        "tokenTtlInMinutes": 5
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
    "data": null
}
```

</details>
