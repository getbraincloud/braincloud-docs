# SendAdvancedEmail
## Overview
Sends an advanced email to the specified user.  The advanced API takes a set of parameters that are
dependant on the mail service configured in the <%= data.branding.productName %> Portal.
For a list of all available parameters see the top of the Mail service documentation.

<PartialServop service_name="mail" operation_name="SEND_ADVANCED_EMAIL" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string profileId = "f7144cc0-b996-440f-8459-21b0ecb91a10";
string jsonServiceParams = "{\"fromAddress\":\"email@company.com\",\"fromName\":\"Jane Doe\",\"replyToAddress\":\"optional@company.com\",\"replyToName\":\"Optional ReplyTo\",\"templateId\":\"d-www-xxx-yyy-zzz\",\"dynamicData\":{\"user\":{\"firstName\":\"John\",\"lastName\":\"Doe\"},\"resetLink\":\"www.dummuyLink.io\"},\"categories\":[\"category1\",\"category2\"],\"attachments\":[{\"content\":\"VGhpcyBhdHRhY2htZW50IHRleHQ=\",\"filename\":\"attachment.txt\"}]}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.MailService.SendAdvancedEmail(profileId, jsonServiceParams, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *profileId = "f7144cc0-b996-440f-8459-21b0ecb91a10";
const char *jsonServiceParams = "{\"fromAddress\":\"email@company.com\",\"fromName\":\"Jane Doe\",\"replyToAddress\":\"optional@company.com\",\"replyToName\":\"Optional ReplyTo\",\"templateId\":\"d-www-xxx-yyy-zzz\",\"dynamicData\":{\"user\":{\"firstName\":\"John\",\"lastName\":\"Doe\"},\"resetLink\":\"www.dummuyLink.io\"},\"categories\":[\"category1\",\"category2\"],\"attachments\":[{\"content\":\"VGhpcyBhdHRhY2htZW50IHRleHQ=\",\"filename\":\"attachment.txt\"}]}";
<%= data.branding.codePrefix %>->getMailService()->sendAdvancedEmail(profileId, jsonServiceParams, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *profileId = @"f7144cc0-b996-440f-8459-21b0ecb91a10";
NSString *jsonServiceParams = @"{\"fromAddress\":\"email@company.com\",\"fromName\":\"Jane Doe\",\"replyToAddress\":\"optional@company.com\",\"replyToName\":\"Optional ReplyTo\",\"templateId\":\"d-www-xxx-yyy-zzz\",\"dynamicData\":{\"user\":{\"firstName\":\"John\",\"lastName\":\"Doe\"},\"resetLink\":\"www.dummuyLink.io\"},\"categories\":[\"category1\",\"category2\"],\"attachments\":[{\"content\":\"VGhpcyBhdHRhY2htZW50IHRleHQ=\",\"filename\":\"attachment.txt\"}]}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> mailService] sendAdvancedEmail:profileId
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
String profileId = "f7144cc0-b996-440f-8459-21b0ecb91a10";
String jsonServiceParams = "{\"fromAddress\":\"email@company.com\",\"fromName\":\"Jane Doe\",\"replyToAddress\":\"optional@company.com\",\"replyToName\":\"Optional ReplyTo\",\"templateId\":\"d-www-xxx-yyy-zzz\",\"dynamicData\":{\"user\":{\"firstName\":\"John\",\"lastName\":\"Doe\"},\"resetLink\":\"www.dummuyLink.io\"},\"categories\":[\"category1\",\"category2\"],\"attachments\":[{\"content\":\"VGhpcyBhdHRhY2htZW50IHRleHQ=\",\"filename\":\"attachment.txt\"}]}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getMailService().sendAdvancedEmail(profileId, jsonServiceParams, this);

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
var profileId = "f7144cc0-b996-440f-8459-21b0ecb91a10";
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

<%= data.branding.codePrefix %>.mail.sendAdvancedEmail(profileId, jsonServiceParams, result =>
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
var profileId = "f7144cc0-b996-440f-8459-21b0ecb91a10";
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

var postResult = mailProxy.sendAdvancedEmail(profileId, jsonServiceParams);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var profileId = "f7144cc0-b996-440f-8459-21b0ecb91a10";
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

var postResult = mailProxy.sendAdvancedEmail(profileId, jsonServiceParams);
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
profileId | The user to send the email to
serviceParams | Set of parameters dependant on the mail service configured


