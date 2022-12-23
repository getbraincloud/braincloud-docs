# MarkMessagesRead
## Overview
Marks the specified message(s) as read.




### Status Codes
Code | Name | Description
---- | ---- | -----------
40601 | FEATURE_NOT_ENABLED | Messaging feature is not enabled for app.

<PartialServop service_name="messaging" operation_name="MARK_MESSAGES_READ" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string msgbox = "inbox";
string[] msgIds = { "msgId1", "msgId2" };
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.MessagingService.MarkMessagesRead(msgbox, msgIds, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *msgbox = "inbox";
std::vector<std::string> msgIds;
msgIds.push_back("msgId1");
msgIds.push_back("msgId2");
<%= data.branding.codePrefix %>->getMessagingService()->markMessagesRead(msgbox, msgIds, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *msgbox = @"inbox";
NSArray *msgIds = @[ @"msgId1", @"msgId2" ];
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> messagingService] markMessagesRead:msgbox
                     msgIds:msgIds
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String msgbox = "inbox";
String[] msgIds = { "msgId1", "msgId2" };
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getMessagingService().markMessagesRead(msgbox, msgIds, this);

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
var msgbox = "inbox";
var msgIds = [ "msgId1", "msgId2" ];

<%= data.branding.codePrefix %>.messaging.markMessagesRead(msgbox, msgIds, result =>
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
var msgbox = "inbox";
var msgIds = [ "msgId1", "msgId2" ];
var messagingProxy = bridge.getMessagingServiceProxy();

var postResult = messagingProxy.markMessagesRead(msgbox, msgIds);
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
	"service": "messaging",
	"operation": "MARK_MESSAGES_READ",
	"data": {
		"msgbox": "inbox",
		"msgIds": [
			"msgId1",
			"msgId2"
		]
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
        "actual": 1,
        "requested": 1
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | ------------------------------------
msgbox | The box that the messages reside in.
msgIds | An array of msgIds.


