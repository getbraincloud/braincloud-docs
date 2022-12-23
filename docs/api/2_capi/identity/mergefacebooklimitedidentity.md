# MergeFacebookLimitedIdentity
## Overview
Merge the user's Facebook Limited login credentials with the current profile.

<PartialServop service_name="identity" operation_name="MERGE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string facebookId = "someFacebookId";
string authenticationToken = "someFacebookAuthToken";

<%= data.branding.codePrefix %>.IdentityService.MergeFacebooLimitedkIdentity(
    facebookId,
    authenticationToken,
    SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char * facebookId = "someFacebookId";
const char * authenticationToken = "someFacebookAuthToken";

<%= data.branding.codePrefix %>->getIdentityService()->mergeFacebookLimitedIdentity(
    facebookId, authenticationToken, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
- (void)mergeFacebookLimitedIdentity:(NSString *)facebookId
                  authenticationToken:(NSString *)token
                      completionBlock:(BCCompletionBlock)cb
                 errorCompletionBlock:(BCErrorCompletionBlock)ecb
                             cbObject:(BCCallbackObject)cbObject;
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String facebookId = "someFacebookId";
String authenticationToken = "someFacebookAuthToken";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getIdentityService().mergeFacebookLimitedIdentity(facebookId, authenticationToken, this);

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
var facebookId = "someFacebookId";
var authenticationToken = "someFacebookAuthToken";
<%= data.branding.codePrefix %>.identity.mergeFacebookLimitedIdentity(facebookId, authenticationToken, result =>
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
   "data":{  
      "profileId":"f94f7e2d-3cdd-4fd6-9c28-392f7875e9df"
   },
   "status":200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
facebookId | The facebook id of the user
authenticationToken | The validated token from the Facebook SDK (that will be further validated when sent to the <%= data.branding.productName %> service)


