# SendAdvancedEmailByAddress
## Overview
Sends an advanced email to the specified email address.  The advanced API takes a set of parameters that are
dependant on the mail service configured in the <%= data.branding.productName %> Portal.
For a list of all available parameters see the top of the Mail service documentation.

<PartialServop service_name="mail" operation_name="SEND_ADVANCED_EMAIL_BY_ADDRESS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string emailAddress = "test@email.com";
string jsonServiceParams = "{\"fromAddress\":\"email@company.com\",\"fromName\":\"Jane Doe\",\"replyToAddress\":\"optional@company.com\",\"replyToName\":\"Optional ReplyTo\",\"templateId\":\"d-www-xxx-yyy-zzz\",\"dynamicData\":{\"user\":{\"firstName\":\"John\",\"lastName\":\"Doe\"},\"resetLink\":\"www.dummuyLink.io\"},\"categories\":[\"category1\",\"category2\"],\"attachments\":[{\"content\":\"VGhpcyBhdHRhY2htZW50IHRleHQ=\",\"filename\":\"attachment.txt\"}]}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.MailService.SendAdvancedEmailByAddress(emailAddress, jsonServiceParams, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *emailAddress = "test@email.com";
const char *jsonServiceParams = "{\"fromAddress\":\"email@company.com\",\"fromName\":\"Jane Doe\",\"replyToAddress\":\"optional@company.com\",\"replyToName\":\"Optional ReplyTo\",\"templateId\":\"d-www-xxx-yyy-zzz\",\"dynamicData\":{\"user\":{\"firstName\":\"John\",\"lastName\":\"Doe\"},\"resetLink\":\"www.dummuyLink.io\"},\"categories\":[\"category1\",\"category2\"],\"attachments\":[{\"content\":\"VGhpcyBhdHRhY2htZW50IHRleHQ=\",\"filename\":\"attachment.txt\"}]}";
<%= data.branding.codePrefix %>->getMailService()->sendAdvancedEmailByAddress(emailAddress, jsonServiceParams, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *emailAddress = @"test@email.com";
NSString *jsonServiceParams = @"{\"fromAddress\":\"email@company.com\",\"fromName\":\"Jane Doe\",\"replyToAddress\":\"optional@company.com\",\"replyToName\":\"Optional ReplyTo\",\"templateId\":\"d-www-xxx-yyy-zzz\",\"dynamicData\":{\"user\":{\"firstName\":\"John\",\"lastName\":\"Doe\"},\"resetLink\":\"www.dummuyLink.io\"},\"categories\":[\"category1\",\"category2\"],\"attachments\":[{\"content\":\"VGhpcyBhdHRhY2htZW50IHRleHQ=\",\"filename\":\"attachment.txt\"}]}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> mailService] sendAdvancedEmailByAddress:emailAddress
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
String emailAddress = "test@email.com";
String jsonServiceParams = "{\"fromAddress\":\"email@company.com\",\"fromName\":\"Jane Doe\",\"replyToAddress\":\"optional@company.com\",\"replyToName\":\"Optional ReplyTo\",\"templateId\":\"d-www-xxx-yyy-zzz\",\"dynamicData\":{\"user\":{\"firstName\":\"John\",\"lastName\":\"Doe\"},\"resetLink\":\"www.dummuyLink.io\"},\"categories\":[\"category1\",\"category2\"],\"attachments\":[{\"content\":\"VGhpcyBhdHRhY2htZW50IHRleHQ=\",\"filename\":\"attachment.txt\"}]}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getMailService().sendAdvancedEmailByAddress(emailAddress, jsonServiceParams, this);

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
var emailAddress = "test@email.com";
var jsonServiceParams = {
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

<%= data.branding.codePrefix %>.mail.sendAdvancedEmailByAddress(emailAddress, jsonServiceParams, result =>
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
var emailAddress = "test@email.com";
var jsonServiceParams = {
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

var postResult = mailProxy.sendAdvancedEmailByAddress(emailAddress, jsonServiceParams);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var emailAddress = "test@email.com";
var jsonServiceParams = {
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

var postResult = mailProxy.sendAdvancedEmailByAddress(emailAddress, jsonServiceParams);
if (postResult.status == 200) {
    // Success!
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
    "data": {
        "message": "Email sent successfully"
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
emailAddress | The address to send the email to
serviceParams | Set of parameters dependant on the mail service configured


