# GetMessagesPage
## Overview
Given a json context object, returns a page of messages for this user. Note also returns an encoded context object that is used in the follow-up <code>[GetMessagesPageOffset](/api/capi/messaging/getmessagespageoffset)</code> api call.







Some of the more useful fields for context queries are:

| Field | Description |
| ----- | ----------- |
| msgbox | The messagbox the message is in |
| mbCr | The date the message was sent / arrived |
| message.from | Who the message is from |
| message.to | Who the message is to |

### Context example - search inbox

This context searches for all messages in the "inbox", sorts them by creation (i.e. arrival time, newest first) and returns them using the default pagination.

```
{
    "context": {
        "searchCriteria": {
            "msgbox": "inbox"
        },
        "sortCriteria": {
            "mbCr": -1
        }
    }
}
```

### Context example - search by party

This context searches for all messages sent to/from the specified profile, sorts them by creation time, and returns them in batches of 10.

```
{
    "context": {
        "searchCriteria": {
            "$or": [
               { "message.from": "aProfileId" },
               { "message.to": "aProfileId" }
            ]
        },
        "sortCriteria": {
            "mbCr": -1
        },
        "pagination": {
            "rowsPerPage": 10,
            "pageNumber": 1
        }
    }
}
```


### Status Codes
Code | Name | Description
---- | ---- | -----------
| 40601 | FEATURE_NOT_ENABLED | Messaging feature is not enabled for app.

<PartialServop service_name="messaging" operation_name="GET_MESSAGES_PAGE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string context = "{\"pagination\":{\"rowsPerPage\":10,\"pageNumber\":1},\"searchCriteria\":{\"msgbox\":\"inbox\",\"read\":false},\"sortCriteria\":{\"mbCr\":1,\"mbUp\":-1}}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.MessagingService.GetMessagesPage(context, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *context = "{\"pagination\":{\"rowsPerPage\":10,\"pageNumber\":1},\"searchCriteria\":{\"msgbox\":\"inbox\",\"read\":false},\"sortCriteria\":{\"mbCr\":1,\"mbUp\":-1}}";
<%= data.branding.codePrefix %>->getMessagingService()->getMessagesPage(context, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *context = @"{\"pagination\":{\"rowsPerPage\":10,\"pageNumber\":1},\"searchCriteria\":{\"msgbox\":\"inbox\",\"read\":false},\"sortCriteria\":{\"mbCr\":1,\"mbUp\":-1}}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> messagingService] getMessagesPage:context
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String context = "{\"pagination\":{\"rowsPerPage\":10,\"pageNumber\":1},\"searchCriteria\":{\"msgbox\":\"inbox\",\"read\":false},\"sortCriteria\":{\"mbCr\":1,\"mbUp\":-1}}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getMessagingService().getMessagesPage(context, this);

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
var context = {
    "pagination": {
        "rowsPerPage": 10,
        "pageNumber": 1
    },
    "searchCriteria": {
        "msgbox": "inbox",
        "read": false
    },
    "sortCriteria": {
        "mbCr": 1,
        "mbUp": -1
    }
};

<%= data.branding.codePrefix %>.messaging.getMessagesPage(context, result =>
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
var msgProxy = bridge.getMessagingServiceProxy();

var context = {
    "pagination": {
        "rowsPerPage": 10,
        "pageNumber": 1
    },
    "searchCriteria": {
        "msgbox": "inbox",
        "read": false
    },
    "sortCriteria": {
        "mbCr": 1,
        "mbUp": -1
    }
};

var getResult = msgProxy.getMessagesPage( context );
if ( getResult.status == 200 ) {

    if ( getResult.data.results.count > 0 ) {

        var messages = getResult.data.results.items;
        var message = {};

        for (i = 0; i < messages.length; i++ ) {

            message = messages[i];

            // Now do something with it!

        }
    } 
} 
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "messaging",
	"operation": "GET_MESSAGES_PAGE",
	"data": {
		"context": {
			"pagination": {
				"rowsPerPage": 10,
				"pageNumber": 1
			},
			"searchCriteria": {
				"msgbox": "inbox",
				"read": false
			},
			"sortCriteria": {
				"mbCr": 1,
				"mbUp": -1
			}
		}
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
        "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJwcm9maWxlSWQiOiIwMDRhN2QwYy00ZTk2LTQ3NGItOTcyYi03Nzk0ZTBlZWM4ZDUifSwic29ydENyaXRlcmlhIjp7Im1iQ3IiOjEsIm1iVXAiOi0xfSwicGFnaW5hdGlvbiI6eyJyb3dzUGVyUGFnZSI6MTAsInBhZ2VOdW1iZXIiOjF9LCJvcHRpb25zIjpudWxsfQ",
        "results": {
            "count": 2,
            "page": 1,
            "items": [
                {
                    "msgbox": "sent",
                    "msgId": "9bd20345-b274-4d20-912f-fb1c3cb5e458",
                    "mbVer": 1,
                    "mbCr": 1530023195326,
                    "mbUp": 1530023195326,
                    "read": false,
                    "message": {
                        "sentAt": 1530023195324,
                        "to": [
                            "004a7d0c-4e96-474b-972b-7794e0eec8d5"
                        ],
                        "content": {
                            "subject": "Testing",
                            "text": "Test message to me."
                        }
                    },
                    "msVer": 1,
                    "msgCr": 1530023195325,
                    "msgUp": 1530023195325
                },
                {
                    "msgbox": "inbox",
                    "msgId": "9bd20345-b274-4d20-912f-fb1c3cb5e458",
                    "mbVer": 1,
                    "mbCr": 1530023195327,
                    "mbUp": 1530023195327,
                    "read": false,
                    "message": {
                        "sentAt": 1530023195324,
                        "to": [
                            "004a7d0c-4e96-474b-972b-7794e0eec8d5"
                        ],
                        "content": {
                            "subject": "Testing",
                            "text": "Test message to me."
                        }
                    },
                    "msVer": 1,
                    "msgCr": 1530023195325,
                    "msgUp": 1530023195325
                }
            ],
            "moreAfter": false,
            "moreBefore": false
        }
    }
}
```
</details>

## Method Parameters
Parameter | Description                         
--------- | ------------------------------------ 
context | A context object that controls the searchCriteria, pagination and sorting of the results to be returned.


