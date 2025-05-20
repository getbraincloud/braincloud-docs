# GetIdentityStatus

Retrieves identity status for given identity type for this profile.

<PartialServop service_name="identity" operation_name="GET_IDENTITY_STATUS" />

:::tip
The field `loginAuthType` will only have a non-null value if it differs from the `authenticationType`.
:::

## Method Parameters

| Parameter          | Description                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------- |
| authenticationType | Type of authentication.                                                                            |
| externalAuthName   | The name of the external authentication mechanism (optional, used for custom authentication types) |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string authenticationType = "Facebook";
string externalAuthName = "";

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.IdentityService.GetIdentityStatus(authenticationType, externalAuthName, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *authenticationType = "Facebook";
const char *externalAuthName = "";
<%= data.branding.codePrefix %>.getIdentityService().getIdentityStatus(authenticationType, externalAuthName, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *authenticationType = @"Facebook";
NSString *externalAuthName = @"";
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> identityService] getIdentityStatus:
           authenticationType:authenticationType
             externalAuthName:externalAuthName
              completionBlock:successBlock
         errorCompletionBlock:failureBlock
                     cbObject:nil]
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String authenticationType = "Facebook";
String externalAuthName = "";
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getIdentityService.getIdentityStatus(authenticationType, externalAuthName, this);

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
var authenticationType = "Facebook";
var externalAuthName = "";
<%= data.branding.codePrefix %>.identity.getIdentityStatus(authenticationType, externalAuthName, result =>
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
var  authenticationType = "Facebook";
var  externalAuthName = "";

ServerResponse result = await <%= data.branding.codePrefix %>.identityService.getIdentityStatus(authenticationType:authenticationType, externalAuthName:externalAuthName);

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
var authenticationType = "Facebook";
var externalAuthName = "";
var identityProxy = bridge.getIdentityServiceProxy();

var postResult = identityProxy.getIdentityStatus(authenticationType, externalAuthName);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"identity",
    "operation":"GET_IDENTITY_STATUS",
    "data":{
        "authenticationType":"Facebook",
        "externalAuthName":""
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
    "data": {
        "identities": {
            "Facebook": {
                "tokenExpired": true,
                "externalId": "111234914143270",
                "loginAuthType": "FacebookLimited"
            }
        }
    },
    "status": 200
}
```

</details>
