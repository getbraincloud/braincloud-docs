# GetMessagesPage

Given a json context object, returns a page of messages for this user. Note also returns an encoded context object that is used in the follow-up <code>[GetMessagesPageOffset](/api/capi/messaging/getmessagespageoffset)</code> api call.

Some of the more useful fields for context queries are:

| Field        | Description                             |
| ------------ | --------------------------------------- |
| msgbox       | The messagbox the message is in         |
| mbCr         | The date the message was sent / arrived |
| message.from | Who the message is from                 |
| message.to   | Who the message is to                   |

### Context example - search inbox

This context searches for all messages in the "inbox", sorts them by creation (i.e. arrival time, newest first) and returns them using the default pagination.

```json
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

```json
{
    "context": {
        "searchCriteria": {
            "$or": [
                { "message.from.id": "aProfileId" },
                { "message.to": { "$in": ["aProfileId"] } }
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

<PartialServop service_name="messaging" operation_name="GET_MESSAGES_PAGE" />

## Method Parameters

| Parameter | Description                                                                                              |
| --------- | -------------------------------------------------------------------------------------------------------- |
| context   | A context object that controls the searchCriteria, pagination and sorting of the results to be returned. |

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
<TabItem value="dart" label="Dart">
```

```dart
var  context = {
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

ServerResponse result = await <%= data.branding.codePrefix %>.messagingService.getMessagesPage(context:context);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
local context = {
    pagination = {
        rowsPerPage = 10,
        pageNumber = 1
    },
    searchCriteria = {
        msgbox = "inbox",
        read = false
    },
    sortCriteria = {
        mbCr = 1,
        mbUp = -1
    }
}

local callback = function(result)
	if result.statusCode == 200 then
		print("Success")
	else
		print("Failed | " .. tostring(result.status))
	end
end

<%= data.branding.codePrefix %>:getMessagingService():getMessagesPage(context, callback)
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
    "data": {
        "context": "eyJzZWFyY2hDcml0ZXJpYSI6e30sInNvcnRDcml0ZXJpYSI6eyJtYkNyIjoxLCJtYlVwIjotMX0sInBhZ2luYXRpb24iOnsicm93c1BlclBhZ2UiOjEwLCJwYWdlTnVtYmVyIjoxLCJkb0NvdW50IjpmYWxzZSwic2tpcFJlY291bnQiOmZhbHNlfSwib3B0aW9ucyI6bnVsbCwicmVzdWx0Q291bnQiOjJ9",
        "results": {
            "count": 2,
            "page": 1,
            "items": [
                {
                    "mbVer": 1,
                    "mbUp": 1731088457811,
                    "read": false,
                    "msgCr": 1731088457661,
                    "msgVer": 1,
                    "mbCr": 1731088457811,
                    "msgId": "3c0bec30-f384-42a0-a051-06ca3c9d57fa",
                    "msgUp": 1731088457661,
                    "message": {
                        "from": {
                            "id": "5940bea5-6b56-4766-8fb0-bf709b6da4ae",
                            "name": "me"
                        },
                        "sentAt": 1731088457463,
                        "to": ["004df8e8-a746-4162-94fb-8915583f6f6c"],
                        "content": {
                            "subject": "Chat and messaging features are here!",
                            "text": "Check out the new chat and messaging features!"
                        }
                    },
                    "msgbox": "sent"
                },
                {
                    "mbVer": 1,
                    "mbUp": 1731260617490,
                    "read": false,
                    "msgCr": 1731260617419,
                    "msgVer": 1,
                    "mbCr": 1731260617490,
                    "msgId": "582d81bc-2cc6-4773-a4fe-e94edd0952f4",
                    "msgUp": 1731260617419,
                    "message": {
                        "from": {
                            "id": "004df8e8-a746-4162-94fb-8915583f6f6c",
                            "name": "other"
                        },
                        "sentAt": 1731260617404,
                        "to": ["5940bea5-6b56-4766-8fb0-bf709b6da4ae"],
                        "content": {
                            "subject": "send message to me!",
                            "text": "Check out the new chat and messaging features!"
                        }
                    },
                    "msgbox": "inbox"
                }
            ],
            "moreAfter": false,
            "moreBefore": false
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
