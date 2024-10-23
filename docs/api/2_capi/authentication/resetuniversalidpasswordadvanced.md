# ResetUniversalIdPasswordAdvanced

Advanced universalId password reset using templates.

<PartialServop service_name="authenticationV2" operation_name="RESET_UNIVERSAL_ID_PASSWORD_ADVANCED" />

## Method Parameters

| Parameter     | Description                                                 |
| ------------- | ----------------------------------------------------------- |
| universalId   | The universalId to send the reset email to.                 |
| serviceParams | Set of parameters dependant on the mail service configured. |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string universalId = "universalId";
string serviceParams = "{\"templateId\": \"d-template-id-guid\", \"dynamicData\": {\"aKey\": \"aValue\"}, \"categories\": [\"category1\", \"category2\"]}";

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.AuthenticationService.ResetUniversalIdPasswordAdvanced (dynamic template)(universalId, serviceParams, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *universalId = "universalId";
const char *serviceParams = "{\"templateId\": \"d-template-id-guid\", \"dynamicData\": {\"aKey\": \"aValue\"}, \"categories\": [\"category1\", \"category2\"]}";
<%= data.branding.codePrefix %>.getAuthenticationService().resetUniversalIdPasswordAdvanced (dynamic template)(universalId, serviceParams, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *universalId = @"universalId";
NSString *serviceParams = @"{\"templateId\": \"d-template-id-guid\", \"dynamicData\": {\"aKey\": \"aValue\"}, \"categories\": [\"category1\", \"category2\"]}";
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> authenticationService] ResetUniversalIdPasswordAdvanced (dynamic template):
                  universalId:universalId
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
String universalId = "universalId";
String serviceParams = "{\"templateId\": \"d-template-id-guid\", \"dynamicData\": {\"aKey\": \"aValue\"}, \"categories\": [\"category1\", \"category2\"]}";
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getAuthenticationService.ResetUniversalIdPasswordAdvanced (dynamic template)(universalId, serviceParams, this);

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
    "templateId": "d-template-id-guid",
    "dynamicData": {
        "aKey": "aValue"
    },
    "categories": [
        "category1",
        "category2"
    ]
};
<%= data.branding.codePrefix %>.authentication.ResetUniversalIdPasswordAdvanced (dynamic template)(universalId, serviceParams, result =>
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
    "operation":"RESET_UNIVERSAL_ID_PASSWORD_ADVANCED",
    "data":{
        "appId":"$gameId",
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
