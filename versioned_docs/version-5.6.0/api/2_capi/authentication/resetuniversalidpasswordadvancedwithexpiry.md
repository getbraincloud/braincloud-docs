# ResetUniversalIdPasswordAdvancedWithExpiry

Advanced universalId password reset using templates. Allows the developer to specify how long the URL is valid for (in minutes).

<PartialServop service_name="authenticationV2" operation_name="RESET_UNIVERSAL_ID_PASSWORD_ADVANCED_WITH_EXPIRY" />

## Method Parameters

| Parameter         | Description                                                 |
| ----------------- | ----------------------------------------------------------- |
| universalId       | The universalId to send the reset email to.                 |
| serviceParams     | Set of parameters dependant on the mail service configured. |
| tokenTtlInMinutes | The time-to-live for the password reset url, in minutes.    |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string universalId = "universalId";
string serviceParams = "{\"templateId\":\"template-id-guid\",\"substitutions\":{\"aKey\":\"aValue\"},\"categories\":[\"category1\",\"category2\"]}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.AuthenticationService.ResetUniversalIdPasswordAdvancedWithExpiry(universalId, serviceParams, tokenTtlInMinutes, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *universalId = "universalId";
const char *serviceParams = "{\"templateId\":\"template-id-guid\",\"substitutions\":{\"aKey\":\"aValue\"},\"categories\":[\"category1\",\"category2\"]}";
int tokenTtlInMinutes = 1440;
<%= data.branding.codePrefix %>->getAuthenticationService()->resetUniversalIdPasswordAdvancedWithExpiry(universalId, serviceParams, tokenTtlInMinutes, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *universalId = @"universalId";
NSString *serviceParams = @"{\"templateId\":\"template-id-guid\",\"substitutions\":{\"aKey\":\"aValue\"},\"categories\":[\"category1\",\"category2\"]}";
int tokenTtlInMinutes = 1440;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> authenticateService] resetUniversalIdPasswordAdvancedWithExpiry:universalId
              serviceParams:serviceParams
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
String universalId = "universalId";
String serviceParams = "{\"templateId\":\"template-id-guid\",\"substitutions\":{\"aKey\":\"aValue\"},\"categories\":[\"category1\",\"category2\"]}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getAuthenticationService().resetUniversalIdPasswordAdvancedWithExpiry(universalId, serviceParams, tokenTtlInMinutes, this);

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
var serviceParams = {
    "templateId": "template-id-guid",
    "substitutions": {
        "aKey": "aValue"
    },
    "categories": [
        "category1",
        "category2"
    ]
};
var tokenTtlInMinutes = 1440;

<%= data.branding.codePrefix %>.authenticate.resetUniversalIdPasswordAdvancedWithExpiry(universalId, serviceParams, tokenTtlInMinutes, result =>
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
var  universalId = "universalId";
var  serviceParams = {
    "templateId": "template-id-guid",
    "substitutions": {
        "aKey": "aValue"
    },
    "categories": [
        "category1",
        "category2"
    ]
};
var  tokenTtlInMinutes = 1440;

ServerResponse result = await <%= data.branding.codePrefix %>.authenticationService.resetUniversalIdPasswordAdvancedWithExpiry(universalId:universalId, serviceParams:serviceParams, tokenTtlInMinutes:tokenTtlInMinutes);

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
var universalId = "universalId";
var serviceParams = {
    "templateId": "d-template-id-guid",
    "dynamicData": {
        "aKey": "aValue"
    },
    "categories": [
        "category1",
        "category2"
    ]
};
var tokenTtlInMinutes = 1440;
var authenticationProxy = bridge.getAuthenticationServiceProxy();

var postResult = authenticationProxy.resetUniversalIdPasswordAdvancedWithExpiry(universalId, serviceParams, tokenTtlInMinutes);
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
    "operation":"RESET_UNIVERSAL_ID_PASSWORD_ADVANCED_WITH_EXPIRY",
    "data":{
        "universalId":"universalId",
        "serviceParams":{
            "templateId":"d-template-id-guid",
            "dynamicData":{
                "aKey":"aValue"
            },
            "categories":[
                "category1",
                "category2"
            ]
        },
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
