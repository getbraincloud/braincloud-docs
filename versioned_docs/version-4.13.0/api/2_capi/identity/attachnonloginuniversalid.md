# AttachNonLoginUniversalId
## Overview
Attaches a UniversalId to the current profile with no login capability.

Useful if the app is not using UniversalId for authentication, and you still want to attach a UniversalId to create an app-unique display name for the user.

The call will fail if the UniversalId is already in use, or if the profile already contains a UniversalId.

<PartialServop service_name="identity" operation_name="ATTACH_NONLOGIN_UNIVERSAL" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string externalId = "username";

<%= data.branding.codePrefix %>.IdentityService.AttachNonLoginUniversalId(
    externalId,
    SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char * externalId = "username";
const char * token = "someToken";

<%= data.branding.codePrefix %>->getIdentityService()->attachNonLoginUniversalId(
  externalId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *externalId = @"username";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> identityService] attachNonLoginUniversalId:externalId
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
this; // implements IServerCallback

<%= data.branding.codePrefix %>.identity.attachNonLoginUniversalId(externalId, this);

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
<%= data.branding.codePrefix %>.identity.attachNonLoginUniversalId(externalId, result =>
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
var identityProxy = bridge.getIdentityServiceProxy();

var postResult = identityProxy.attachNonLoginUniversalId(externalId);
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
	"operation": "ATTACH_NONLOGIN_UNIVERSAL",
	"data": {
		"externalId": "username"
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
    "data" : null
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
externalId | The user's user ID


