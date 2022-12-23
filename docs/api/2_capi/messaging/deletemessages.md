# DeleteMessages
## Overview
Deletes the local copies of messages from the user's mailbox.



### Status Codes
Code | Name | Description                          
----- | ----------------------- | ------------------------------------ 
40601 | RTT_NOT_ENABLED | RTT must be enabled for this feature

<PartialServop service_name="messaging" operation_name="DELETE_MESSAGES" / >

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

<%= data.branding.codePrefix %>.MessagingService.DeleteMessages(msgbox, msgIds, successCallback, failureCallback);
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
<%= data.branding.codePrefix %>->getMessagingService()->deleteMessages(msgbox, msgIds, this);
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

[[<%= data.branding.codePrefix %> messagingService] deleteMessages:msgbox
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

<%= data.branding.codePrefix %>.getMessagingService().deleteMessages(msgbox, msgIds, this);

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

<%= data.branding.codePrefix %>.messaging.deleteMessages(msgbox, msgIds, result =>
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

var postResult = messagingProxy.deleteMessages(msgbox, msgIds);
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
	"operation": "DELETE_MESSAGES",
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
        "actual": 0,
        "requested": 2
    }
}
```
</details>

## Method Parameters
Parameter | Description                          
--------- | ------------------------------------ 
msgbox | The msgbox that we are deleting messages from 
msgIds | An array of ids of the messages to delete 


