# ResetUniversalIdPasswordWithExpiry
## Overview
Reset Universal ID password. Allows the developer to specify how long the URL is valid for (in minutes).

<PartialServop service_name="authenticationV2" operation_name="RESET_UNIVERSAL_ID_PASSWORD_WITH_EXPIRY" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string universalId = "universalId";
int resetUrlTTLMinutes = 1440;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.Authenticate.ResetUniversalIdPasswordWithExpiry(universalId, resetUrlTTLMinutes, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *universalId = "universalId";
int resetUrlTTLMinutes = 1440;
<%= data.branding.codePrefix %>->getAuthenticationService()->resetUniversalIdPasswordWithExpiry(universalId, resetUrlTTLMinutes, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *universalId = @"universalId";
int resetUrlTTLMinutes = 1440;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> authenticateService] resetUniversalIdPasswordWithExpiry:universalId
          tokenTtlInMinutes:resetUrlTTLMinutes
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String universalId = "universalId";
int resetUrlTTLMinutes = 1440;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getAuthenticationService().resetUniversalIdPasswordWithExpiry(universalId, resetUrlTTLMinutes, this);

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
var universalId = "universalId";
var resetUrlTTLMinutes = 1440;

<%= data.branding.codePrefix %>.authenticate.resetUniversalIdPasswordWithExpiry(universalId, resetUrlTTLMinutes, result =>
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
    "status": 200,
    "data": null
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
universalId | The universalId to send the reset email to.
tokenTtlInMinutes | The time-to-live for the password reset url, in minutes.


