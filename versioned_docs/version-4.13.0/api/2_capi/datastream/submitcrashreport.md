# SubmitCrashReport
## Overview
Allows the system to send a Crash Report to the servers, to be forwarded to any connected DataStream services.

This API can be called silently by the app - or can be sent after presenting an error dialog to the user (requestion more info). User submitted reports should be flagged as such, so that the app's support team knows to follow up.

<PartialServop service_name="dataStream" operation_name="SEND_CRASH_REPORT" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string crashType = "unknown";
string errorMsg = "Divide by zero error";
string crashJson = "{\"dialog\":5}";
string crashLog = "funcX(a,b,c)/ncalled by funcY(a,b,c)";
string userName = "";
string userEmail = "";
string userNotes = "";
bool userSubmitted = false;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.DataStreamService.SubmitCrashReport(crashType, errorMsg, crashJson, crashLog, userName, userEmail, userNotes, userSubmitted, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *crashType = "unknown";
const char *errorMsg = "Divide by zero error";
const char *crashJson = "{\"dialog\":5}";
const char *crashLog = "funcX(a,b,c)/ncalled by funcY(a,b,c)";
const char *userName = "";
const char *userEmail = "";
const char *userNotes = "";
bool userSubmitted = false;
<%= data.branding.codePrefix %>->getDataStreamService()->submitCrashReport(crashType, errorMsg, crashJson, crashLog, userName, userEmail, userNotes, userSubmitted, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *crashType = @"unknown";
NSString *errorMsg = @"Divide by zero error";
NSString *crashJson = "{\"dialog\":5}";
NSString *crashLog = @"funcX(a,b,c)/ncalled by funcY(a,b,c)";
NSString *userName = @"";
NSString *userEmail = @"";
NSString *userNotes = @"";
bool userSubmitted = false;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> dataStreamService] submitCrashReport:crashType
                   errorMsg:errorMsg
                  crashJson:crashJson
                   crashLog:crashLog
                   userName:userName
                  userEmail:userEmail
                  userNotes:userNotes
              userSubmitted:userSubmitted
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String crashType = "unknown";
String errorMsg = "Divide by zero error";
String crashJson = "{\"dialog\":5}";
String crashLog = "funcX(a,b,c)/ncalled by funcY(a,b,c)";
String userName = "";
String userEmail = "";
String userNotes = "";
boolean userSubmitted = false;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getDataStreamService().submitCrashReport(crashType, errorMsg, crashJson, crashLog, userName, userEmail, userNotes, userSubmitted, this);

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
var crashType = "unknown";
var errorMsg = "Divide by zero error";
var crashJson = {
  "dialog": 5
};
var crashLog = "funcX(a,b,c)/ncalled by funcY(a,b,c)";
var userName = "";
var userEmail = "";
var userNotes = "";
var userSubmitted = false;

<%= data.branding.codePrefix %>.dataStream.submitCrashReport(crashType, errorMsg, crashJson, crashLog, userName, userEmail, userNotes, userSubmitted, result =>
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
var crashType = "unknown";
var errorMsg = "Divide by zero error";
var crashJson = {
  "dialog": 5
};
var crashLog = "funcX(a,b,c)/ncalled by funcY(a,b,c)";
var userName = "";
var userEmail = "";
var userNotes = "";
var userSubmitted = false;
var dataStreamProxy = bridge.getDataStreamServiceProxy();

var postResult = dataStreamProxy.submitCrashReport(crashType, errorMsg, crashJson, crashLog, userName, userEmail, userNotes, userSubmitted);
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
	"service": "dataStream",
	"operation": "SEND_CRASH_REPORT",
	"data": {
		"crashType": "unknown",
		"errorMsg": "Divide by zero error",
		"crashJson": {
			"dialog": 5
		},
		"crashLog": "funcX(a,b,c)/ncalled by funcY(a,b,c)",
		"userName": "",
		"userEmail": "",
		"userNotes": "",
		"userSubmitted": false
	}
}
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

## Method Parameters
Parameter | Description
--------- | -----------
crashType | Identifies the crash category. Developer-defined, can be anything. 
errorMsg | Short message describing the crash.
crashJson | Exception data.
crashLog | Client log up until the crash (if available.)
userName | Name provided by the user (if provided.)
userEmail | Email address to respond to (if provided.)
userNotes | Notes provided by the user (if provided.)
userSubmitted | User submitted flag.


