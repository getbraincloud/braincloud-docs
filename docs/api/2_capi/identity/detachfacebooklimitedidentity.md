# DetachFacebookLimitedIdentity
## Overview
Detach the Facebook Limited login identity from this profile.



<PartialServop service_name="identity" operation_name="DETACH" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string facebookId = "someFacebookId";

<%= data.branding.codePrefix %>.IdentityService.DetachFacebookLimitedIdentity(
    facebookId,
    true,
    SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char * facebookId = "someFacebookId";

<%= data.branding.codePrefix %>->getIdentityService()->detachFacebookLimitedIdentity(
    facebookId, false, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
- (void)detachFacebookLimitedIdentity:(NSString *)facebookId
                  continueAnon:(bool)continueAnon
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
Boolean continueAnon = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getIdentityService().detachFacebookLimitedIdentity(facebookId, ontinueAnon, this);

public void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)
{
    System.out.print(String.format("Success | %s", jsonData.toString()));
}
public void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)
{
    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));
}
public void detachFacebookLimitedIdentity(String facebookId, boolean continueAnon, IServerCallback callback)
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var facebookId = "someFacebookId";
var continueAnon = true;

<%= data.branding.codePrefix %>.identity.detachFacebookLimitedIdentity(facebookId, continueAnon, result =>
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
    "status" : 200,
    "data" : null
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40210 | DOWNGRADING_TO_ANONYMOUS_ERROR | Occurs when detaching the last non-anonymous identity from an account with continueAnon set to false.

</details>


## Method Parameters
Parameter | Description
--------- | -----------
facebookId | The facebook id of the user
continueAnon | Proceed even if the profile will revert to anonymous?


