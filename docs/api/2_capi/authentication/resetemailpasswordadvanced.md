# ResetEmailPasswordAdvanced

Advanced reset email password using templates.

<PartialServop service_name="authenticationV2" operation_name="RESET_EMAIL_PASSWORD_ADVANCED" />

## Method Parameters

| Parameter     | Description                                                 |
| ------------- | ----------------------------------------------------------- |
| emailAddress  | The email address to send the reset email to.               |
| serviceParams | Set of parameters dependant on the mail service configured. |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string emailAddress = "email@email.com";
string serviceParams = "{\"templateId\": \"d-template-id-guid\", \"dynamicData\": {\"aKey\": \"aValue\"}, \"categories\": [\"category1\", \"category2\"]}";

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.Authenticationv2Service.ResetEmailPasswordAdvanced (dynamic template)(emailAddress, serviceParams, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *emailAddress = "email@email.com";
const char *serviceParams = "{\"templateId\": \"d-template-id-guid\", \"dynamicData\": {\"aKey\": \"aValue\"}, \"categories\": [\"category1\", \"category2\"]}";
<%= data.branding.codePrefix %>.getAuthenticationv2Service().resetEmailPasswordAdvanced (dynamic template)(emailAddress, serviceParams, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *emailAddress = @"email@email.com";
NSString *serviceParams = @"{\"templateId\": \"d-template-id-guid\", \"dynamicData\": {\"aKey\": \"aValue\"}, \"categories\": [\"category1\", \"category2\"]}";
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> authenticationV2Service] ResetEmailPasswordAdvanced (dynamic template):
                 emailAddress:emailAddress
                serviceParams:serviceParams
              completionBlock:successBlock
         errorCompletionBlock:failureBlock
                     cbObject:nil]
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String emailAddress = "email@email.com";
String serviceParams = "{\"templateId\": \"d-template-id-guid\", \"dynamicData\": {\"aKey\": \"aValue\"}, \"categories\": [\"category1\", \"category2\"]}";
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getAuthenticationv2Service.ResetEmailPasswordAdvanced (dynamic template)(emailAddress, serviceParams, this);

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
<%= data.branding.codePrefix %>.authenticationV2.ResetEmailPasswordAdvanced (dynamic template)(emailAddress, serviceParams, result =>
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

```r
{
    "service":"authenticationV2",
    "operation":"RESET_EMAIL_PASSWORD_ADVANCED",
    "data":{
        "appId":"$gameId",
        "emailAddress":"email@email.com",
        "serviceParams":{
            "templateId":"d-template-id-guid",
            "dynamicData":{
                "aKey":"aValue"
            },
            "categories":[
                "category1",
                "category2"
            ]
        }
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
