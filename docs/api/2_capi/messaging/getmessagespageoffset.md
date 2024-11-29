# GetMessagesPageOffset

Returns the next/prev set of messages. Takes the encoded-context from <code>[GetMessagesPage](/api/capi/messaging/getmessagespage)</code> as a parameter.

<PartialServop service_name="messaging" operation_name="GET_MESSAGES_PAGE_OFFSET" />

## Method Parameters

| Parameter  | Description                                                                                                                         |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| context    | The encoded context string returned from the server from a previous call to GetMessagesPage or GetMessagesPageOffset.               |
| pageOffset | The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point. |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string context = "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0";
int pageOffset = 1;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.MessagingService.GetMessagesPageOffset(context, pageOffset, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *context = "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0";
int pageOffset = 1;
<%= data.branding.codePrefix %>->getMessagingService()->getMessagesPageOffset(context, pageOffset, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *context = @"eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0";
int pageOffset = 1;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> messagingService] getMessagesPageOffset:context
                 pageOffset:pageOffset
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String context = "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0";
int pageOffset = 1;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getMessagingService().getMessagesPageOffset(context, pageOffset, this);

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
var context = "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0";
var pageOffset = 1;

<%= data.branding.codePrefix %>.messaging.getMessagesPageOffset(context, pageOffset, result =>
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
var context = "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0";
var pageOffset = 1;
var messagingProxy = bridge.getMessagingServiceProxy();

var postResult = messagingProxy.getMessagesPageOffset(context, pageOffset);
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
	"operation": "GET_MESSAGES_PAGE_OFFSET",
	"data": {
		"context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0",
		"pageOffset": 1
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
        "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJnYW1lSWQiOiIxMzIyOSJ9LCJzb3J0Q3JpdGVyaWEiOnsibWJDciI6MSwibWJVcCI6LTF9LCJwYWdpbmF0aW9uIjp7InJvd3NQZXJQYWdlIjoxMCwicGFnZU51bWJlciI6MSwiZG9Db3VudCI6ZmFsc2UsInNraXBSZWNvdW50IjpmYWxzZX0sIm9wdGlvbnMiOm51bGwsInJlc3VsdENvdW50IjozfQ",
        "results": {
            "count": 10,
            "page": 2,
            "items": [
                {
                    "mbVer": 1,
                    "mbUp": 1731088159417,
                    "read": false,
                    "msgCr": 1731088159385,
                    "msgVer": 1,
                    "mbCr": 1731088159417,
                    "msgId": "dbaedd3c-17d9-4b04-a0cb-d230d44b8ebc",
                    "msgUp": 1731088159385,
                    "message": {
                        "from": {
                            "id": "43c4f25e-cac5-4523-b124-ad05ccb9e7c3",
                            "name": "test1@team12416.testinator.com"
                        },
                        "sentAt": 1731088159369,
                        "to": ["ba0b372c-3c31-48aa-9577-37684abcfcdd"],
                        "content": {
                            "subject": "Chat and messaging features are here!",
                            "text": "Check out the new chat and messaging features!"
                        }
                    },
                    "msgbox": "sent"
                },
                {
                    "mbVer": 1,
                    "mbUp": 1732813809385,
                    "read": false,
                    "msgCr": 1732813809339,
                    "msgVer": 1,
                    "mbCr": 1732813809385,
                    "msgId": "eaa69580-f95f-401d-9d9f-92fc0895cc4d",
                    "msgUp": 1732813809339,
                    "message": {
                        "from": {
                            "id": "43c4f25e-cac5-4523-b124-ad05ccb9e7c3",
                            "name": "test1@team12416.testinator.com"
                        },
                        "sentAt": 1732813809323,
                        "to": ["43c4f25e-cac5-4523-b124-ad05ccb9e7c3"],
                        "content": {
                            "subject": "Chat and messaging features are here!",
                            "text": "Check out the new chat and messaging features!"
                        }
                    },
                    "msgbox": "sent"
                },
                {
                    "mbVer": 1,
                    "mbUp": 1732813809419,
                    "read": false,
                    "msgCr": 1732813809339,
                    "msgVer": 1,
                    "mbCr": 1732813809419,
                    "msgId": "eaa69580-f95f-401d-9d9f-92fc0895cc4d",
                    "msgUp": 1732813809339,
                    "message": {
                        "from": {
                            "id": "43c4f25e-cac5-4523-b124-ad05ccb9e7c3",
                            "name": "test1@team12416.testinator.com"
                        },
                        "sentAt": 1732813809323,
                        "to": ["43c4f25e-cac5-4523-b124-ad05ccb9e7c3"],
                        "content": {
                            "subject": "Chat and messaging features are here!",
                            "text": "Check out the new chat and messaging features!"
                        }
                    },
                    "msgbox": "inbox"
                }
            ],
            "moreAfter": true,
            "moreBefore": true
        }
    },
    "status": 200
}
```

</details>

<details>
<summary>Common Error Code</summary>

### Status Codes

| Code  | Name                | Description                               |
| ----- | ------------------- | ----------------------------------------- |
| 40601 | FEATURE_NOT_ENABLED | Messaging feature is not enabled for app. |

</details>
