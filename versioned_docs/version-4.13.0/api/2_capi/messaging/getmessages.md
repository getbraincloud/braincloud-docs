# GetMessages
## Overview
Return the content of the specified messages (if found).



<PartialServop service_name="messaging" operation_name="GET_MESSAGES" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string msgbox = "inbox";
string[] msgIds = { "msgId1", "msgId2" };
bool markAsRead = false;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.MessagingService.GetMessages(msgbox, msgIds, markAsRead, successCallback, failureCallback);
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
bool markAsRead = false;
<%= data.branding.codePrefix %>->getMessagingService()->getMessages(msgbox, msgIds, markAsRead, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *msgbox = @"inbox";
NSArray *msgIds = @[ @"msgId1", @"msgId2" ];
bool markAsRead = false;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> messagingService] getMessages:msgbox
                     msgIds:msgIds
                 markAsRead:markAsRead
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
boolean markAsRead = false;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getMessagingService().getMessages(msgbox, msgIds, markAsRead, this);

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
var markAsRead = false;

<%= data.branding.codePrefix %>.messaging.getMessages(msgbox, msgIds, markAsRead, result =>
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
var markAsRead = false;
var messagingProxy = bridge.getMessagingServiceProxy();

var postResult = messagingProxy.getMessages(msgbox, msgIds, markAsRead);
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
	"operation": "GET_MESSAGES",
	"data": {
		"msgbox": "inbox",
		"msgIds": [
			"msgId1",
			"msgId2"
		],
		"markAsRead": false
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
        "requested": 2,
        "actual": 2,
        "items": [
            {
                "msgbox": "inbox",
                "msgId": "0b102b77-5478-4bf4-b212-1b26d03d2dd6",
                "mbVer": 1,
                "mbCr": 1530289175397,
                "mbUp": 1530289175397,
                "read": false,
                "message": {
                    "from": {
                        "id": "c3a455de-27f5-4126-a051-0effb1c75fd3",
                        "name": ""
                    },
                    "to": [
                        "c3a455de-27f5-4126-a051-0effb1c75fd3"
                    ],
                    "sentAt": 1530289175381,
                    "content": {
                        "subject": "Message 1",
                        "text": "Message 1"
                    }
                }
            },
            {
                "msgbox": "inbox",
                "msgId": "5a11e6e3-7bbd-46ef-85ec-797d22eb3486",
                "mbVer": 1,
                "mbCr": 1530289180524,
                "mbUp": 1530289180524,
                "read": false,
                "message": {
                    "from": {
                        "id": "c3a455de-27f5-4126-a051-0effb1c75fd3",
                        "name": ""
                    },
                    "to": [
                        "c3a455de-27f5-4126-a051-0effb1c75fd3"
                    ],
                    "sentAt": 1530289180520,
                    "content": {
                        "subject": "Message 2",
                        "text": "Message 2"
                    }
                }
            }
        ]
    }
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes
| Code | Name | Description |
| ----- | ----------------------- | ----------------------------------- |
| 40601 | FEATURE_NOT_ENABLED | Messaging feature is not enabled for app. |

</details>


## Method Parameters
Parameter | Description |
--------- | ------------------------------------ |
msgbox | The messagebox that the messages reside in |
msgids | An array of message ids |
markAsRead | Whether the messages should be marked as read once retrieved. |


