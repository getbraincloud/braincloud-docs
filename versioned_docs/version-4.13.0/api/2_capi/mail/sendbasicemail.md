# SendBasicEmail
## Overview
Sends a simple text email to the specified user.

<PartialServop service_name="mail" operation_name="SEND_BASIC_EMAIL" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string profileId = "f7144cc0-b996-440f-8459-21b0ecb91a10";
string subject = "Basic email subject";
string body = "This is the body of the email";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.MailService.SendBasicEmail(profileId, subject, body, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *profileId = "f7144cc0-b996-440f-8459-21b0ecb91a10";
const char *subject = "Basic email subject";
const char *body = "This is the body of the email";
<%= data.branding.codePrefix %>->getMailService()->sendBasicEmail(profileId, subject, body, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *profileId = @"f7144cc0-b996-440f-8459-21b0ecb91a10";
NSString *subject = @"Basic email subject";
NSString *body = @"This is the body of the email";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> mailService] sendBasicEmail:profileId
                    subject:subject
                       body:body
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
String subject = "Basic email subject";
String body = "This is the body of the email";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getMailService().sendBasicEmail(profileId, subject, body, this);

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
var subject = "Basic email subject";
var body = "This is the body of the email";

<%= data.branding.codePrefix %>.mail.sendBasicEmail(profileId, subject, body, result =>
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
var subject = "Basic email subject";
var body = "This is the body of the email";
var mailProxy = bridge.getMailServiceProxy();

var postResult = mailProxy.sendBasicEmail(profileId, subject, body);
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
	"operation": "SEND_BASIC_EMAIL",
	"data": {
		"profileId": "f7144cc0-b996-440f-8459-21b0ecb91a10",
		"subject": "Basic email subject",
		"body": "This is the body of the email"
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
subject | The email subject
body | The email body


