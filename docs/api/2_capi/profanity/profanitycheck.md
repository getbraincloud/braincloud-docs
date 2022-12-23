# ProfanityCheck
## Overview
Checks supplied text for profanity.

<PartialServop service_name="profanity" operation_name="PROFANITY_CHECK" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string text = "foul language";
string languages = "en,fr";
bool flagEmail = false;
bool flagPhone = false;
bool flagUrls = false;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.ProfanityService.ProfanityCheck(text, languages, flagEmail, flagPhone, flagUrls, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *text = "foul language";
const char *languages = "en,fr";
bool flagEmail = false;
bool flagPhone = false;
bool flagUrls = false;
<%= data.branding.codePrefix %>->getProfanityService()->profanityCheck(text, languages, flagEmail, flagPhone, flagUrls, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *text = @"foul language";
NSString *languages = @"en,fr";
bool flagEmail = false;
bool flagPhone = false;
bool flagUrls = false;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> profanityService] profanityCheck:text
                  languages:languages
                  flagEmail:flagEmail
                  flagPhone:flagPhone
                   flagUrls:flagUrls
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String text = "foul language";
String languages = "en,fr";
boolean flagEmail = false;
boolean flagPhone = false;
boolean flagUrls = false;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getProfanityService().profanityCheck(text, languages, flagEmail, flagPhone, flagUrls, this);

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
var text = "foul language";
var languages = "en,fr";
var flagEmail = false;
var flagPhone = false;
var flagUrls = false;

<%= data.branding.codePrefix %>.profanity.profanityCheck(text, languages, flagEmail, flagPhone, flagUrls, result =>
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
var text = "foul language";
var languages = "en,fr";
var flagEmail = false;
var flagPhone = false;
var flagUrls = false;
var profanityProxy = bridge.getProfanityServiceProxy();

var postResult = profanityProxy.profanityCheck(text, languages, flagEmail, flagPhone, flagUrls);
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
	"service": "profanity",
	"operation": "PROFANITY_CHECK",
	"data": {
		"text": "foul language",
		"languages": "en,fr",
		"flagEmail": false,
		"flagPhone": false,
		"flagUrls": false
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
    "status" : 200,
    "data" :
    {
         "foundCount": "1"
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
text | The text to check
languages | Optional comma delimited list of two character language codes
flagEmail | Optional processing of email addresses
flagPhone | Optional processing of phone numbers
flagUrls | Optional processing of urls
#### Status Codes
Code | Name | Description
---- | ---- | -----------
40421 | WEBPURIFY_NOT_CONFIGURED | WebPurify not configured
40422 | WEBPURIFY_EXCEPTION | General exception occurred
40423 | WEBPURIFY_FAILURE | WebPurify returned an error (Http status != 200)
40424 | WEBPURIFY_NOT_ENABLED | WebPurify not enabled


