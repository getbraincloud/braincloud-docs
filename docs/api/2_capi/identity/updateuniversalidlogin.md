# UpdateUniversalIdLogin
## Overview
Updates the UniversalId of the current profile. *Note - works for non-login versions of UniversalId as well.*

Call will fail if the new UniversalId is already in use, or if the profile does not have a UniversalId.

<PartialServop service_name="identity" operation_name="UPDATE_UNIVERSAL_LOGIN" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string externalId = "username";

<%= data.branding.codePrefix %>.IdentityService.UpdateUniversalIdLogin(
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

<%= data.branding.codePrefix %>->getIdentityService()->updateUniversalIdLogin(
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

[[<%= data.branding.codePrefix %> identityService] updateUniversalIdLogin:externalId
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

<%= data.branding.codePrefix %>.identity.updateUniversalIdLogin(externalId, this);

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
<%= data.branding.codePrefix %>.identity.updateUniversalIdLogin(externalId, result =>
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

var postResult = identityProxy.updateUniversalIdLogin(externalId);
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
	"operation": "UPDATE_UNIVERSAL_LOGIN",
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
externalId | The new universal id to update to


