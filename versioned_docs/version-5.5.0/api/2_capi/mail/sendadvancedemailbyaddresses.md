# SendAdvancedEmailByAddresses

Sends an advanced email to the address specified.

:::tip
The advanced API takes a set of parameters that are
dependant on the mail service configured in the <%= data.branding.productName %> Portal.
For a list of all available parameters see the top of the Mail service documentation.
:::

<PartialServop service_name="mail" operation_name="SEND_ADVANCED_EMAIL_BY_ADDRESSES" />

## Method Parameters

| Parameter      | Description                                                |
| -------------- | ---------------------------------------------------------- |
| emailAddresses | The list of addresses to send the email to                 |
| serviceParams  | Set of parameters dependant on the mail service configured |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string[] emailAddresses = {"test@email.com", "anothertest@email.com"};
string jsonServiceParams = "{\"fromAddress\":\"email@company.com\",\"fromName\":\"Jane Doe\",\"replyToAddress\":\"optional@company.com\",\"replyToName\":\"Optional ReplyTo\",\"templateId\":\"d-www-xxx-yyy-zzz\",\"dynamicData\":{\"user\":{\"firstName\":\"John\",\"lastName\":\"Doe\"},\"resetLink\":\"www.dummuyLink.io\"},\"categories\":[\"category1\",\"category2\"],\"attachments\":[{\"content\":\"VGhpcyBhdHRhY2htZW50IHRleHQ=\",\"filename\":\"attachment.txt\"}]}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.MailService.SendAdvancedEmailByAddresses(emailAddresses, jsonServiceParams, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
std::vector<std::string> emailAddresses;
emailAddresses.push_back("test@email.com");
emailAddresses.push_back("anothertest@email.com");
const char *jsonServiceParams = "{\"fromAddress\":\"email@company.com\",\"fromName\":\"Jane Doe\",\"replyToAddress\":\"optional@company.com\",\"replyToName\":\"Optional ReplyTo\",\"templateId\":\"d-www-xxx-yyy-zzz\",\"dynamicData\":{\"user\":{\"firstName\":\"John\",\"lastName\":\"Doe\"},\"resetLink\":\"www.dummuyLink.io\"},\"categories\":[\"category1\",\"category2\"],\"attachments\":[{\"content\":\"VGhpcyBhdHRhY2htZW50IHRleHQ=\",\"filename\":\"attachment.txt\"}]}";
<%= data.branding.codePrefix %>->getMailService()->sendAdvancedEmailByAddresses(emailAddresses, jsonServiceParams, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSArray *emailAddresses = @[ @"test@email.com", @"anothertest@email.com" ];
NSString *jsonServiceParams = @"{\"fromAddress\":\"email@company.com\",\"fromName\":\"Jane Doe\",\"replyToAddress\":\"optional@company.com\",\"replyToName\":\"Optional ReplyTo\",\"templateId\":\"d-www-xxx-yyy-zzz\",\"dynamicData\":{\"user\":{\"firstName\":\"John\",\"lastName\":\"Doe\"},\"resetLink\":\"www.dummuyLink.io\"},\"categories\":[\"category1\",\"category2\"],\"attachments\":[{\"content\":\"VGhpcyBhdHRhY2htZW50IHRleHQ=\",\"filename\":\"attachment.txt\"}]}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> mailService] sendAdvancedEmailByAddresses:emailAddresses
          jsonServiceParams:jsonServiceParams
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String[] emailAddresses = {"test@email.com", "anothertest@email.com"};
String jsonServiceParams = "{\"fromAddress\":\"email@company.com\",\"fromName\":\"Jane Doe\",\"replyToAddress\":\"optional@company.com\",\"replyToName\":\"Optional ReplyTo\",\"templateId\":\"d-www-xxx-yyy-zzz\",\"dynamicData\":{\"user\":{\"firstName\":\"John\",\"lastName\":\"Doe\"},\"resetLink\":\"www.dummuyLink.io\"},\"categories\":[\"category1\",\"category2\"],\"attachments\":[{\"content\":\"VGhpcyBhdHRhY2htZW50IHRleHQ=\",\"filename\":\"attachment.txt\"}]}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getMailService().sendAdvancedEmailByAddresses(emailAddresses, jsonServiceParams, this);

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
var emailAddresses = ["test@email.com", "anothertest@email.com"];
var jsonServiceParams = {
    "fromAddress": "email@company.com",
    "fromName": "Jane Doe",
    "replyToAddress": "optional@company.com",
    "replyToName": "Optional ReplyTo",
    "cc": [
        "xxx@company.com"
    ],
    "bcc": [
        "yyy@company.com"
    ],
    "templateId": "d-www-xxx-yyy-zzz",
    "dynamicData": {
        "user": {
            "firstName": "John",
            "lastName": "Doe"
        },
        "resetLink": "www.dummuyLink.io"
    },
    "categories": [
        "category1",
        "category2"
    ],
    "attachments": [
        {
            "content": "VGhpcyBhdHRhY2htZW50IHRleHQ=",
            "filename": "attachment.txt"
        }
    ]
};

<%= data.branding.codePrefix %>.mail.sendAdvancedEmailByAddresses(emailAddresses, jsonServiceParams, result =>
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
var  emailAddresses = ["test@email.com", "anothertest@email.com"];
var  serviceParams = {
    "fromAddress": "email@company.com",
    "fromName": "Jane Doe",
    "replyToAddress": "optional@company.com",
    "replyToName": "Optional ReplyTo",
    "cc": [
        "xxx@company.com"
    ],
    "bcc": [
        "yyy@company.com"
    ],
    "templateId": "d-www-xxx-yyy-zzz",
    "dynamicData": {
        "user": {
            "firstName": "John",
            "lastName": "Doe"
        },
        "resetLink": "www.dummuyLink.io"
    },
    "categories": [
        "category1",
        "category2"
    ],
    "attachments": [
        {
            "content": "VGhpcyBhdHRhY2htZW50IHRleHQ=",
            "filename": "attachment.txt"
        }
    ]
};

ServerResponse result = await <%= data.branding.codePrefix %>.mailService.sendAdvancedEmailByAddresses(emailAddresses:emailAddresses, serviceParams:serviceParams);

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
var emailAddresses = ["test@email.com", "anothertest@email.com"];
var jsonServiceParams = {
    "fromAddress": "email@company.com",
    "fromName": "Jane Doe",
    "replyToAddress": "optional@company.com",
    "replyToName": "Optional ReplyTo",
    "cc": [
        "xxx@company.com"
    ],
    "bcc": [
        "yyy@company.com"
    ],
    "templateId": "d-www-xxx-yyy-zzz",
    "dynamicData": {
        "user": {
            "firstName": "John",
            "lastName": "Doe"
        },
        "resetLink": "www.dummuyLink.io"
    },
    "categories": [
        "category1",
        "category2"
    ],
    "attachments": [
        {
            "content": "VGhpcyBhdHRhY2htZW50IHRleHQ=",
            "filename": "attachment.txt"
        }
    ]
};
var mailProxy = bridge.getMailServiceProxy();

var postResult = mailProxy.sendAdvancedEmailByAddresses(emailAddresses, jsonServiceParams);
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
    "service": "mail",
    "operation": "SEND_ADVANCED_EMAIL_BY_ADDRESSES",
    "data": {
        "emailAddresses": ["test@email.com", "anothertest@email.com"],
        "serviceParams": {
            "fromAddress": "email@company.com",
            "fromName": "Jane Doe",
            "replyToAddress": "optional@company.com",
            "replyToName": "Optional ReplyTo",
            "templateId": "d-www-xxx-yyy-zzz",
            "dynamicData": {
                "user": {
                    "firstName": "John",
                    "lastName": "Doe"
                },
                "resetLink": "www.dummuyLink.io"
            },
            "categories": ["category1", "category2"],
            "attachments": [
                {
                    "content": "VGhpcyBhdHRhY2htZW50IHRleHQ=",
                    "filename": "attachment.txt"
                }
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
    "data": {}
}
```

</details>
