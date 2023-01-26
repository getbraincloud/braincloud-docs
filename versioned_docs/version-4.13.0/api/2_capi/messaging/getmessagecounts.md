# GetMessageCounts
## Overview
Returns the total # of messages, and # of unread messages, per messagbox, for this user. Note that `unread` for `sent` messagebox will always be 0.



None.

<PartialServop service_name="messaging" operation_name="GET_MESSAGE_COUNTS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.MessagingService.GetMessageCounts(successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->getMessagingService()->getMessageCounts(this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> messagingService] getMessageCounts:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getMessagingService().getMessageCounts(this);

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

<%= data.branding.codePrefix %>.messaging.getMessageCounts(result =>
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
var messagingProxy = bridge.getMessagingServiceProxy();

var postResult = messagingProxy.getMessageCounts();
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
	"operation": "GET_MESSAGE_COUNTS",
	"data": {}
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
        "inbox": {
            "total": 1,
            "unread": 1
        },
        "sent": {
            "total": 1,
            "unread": 0
        }
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

None.


