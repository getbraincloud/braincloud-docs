# ListGroupsPage

Retrieve a page of group summary information based on the specified context.

<PartialServop service_name="group" operation_name="LIST_GROUPS_PAGE" />

## Method Parameters

| Parameter | Description                           |
| --------- | ------------------------------------- |
| context   | The JSON context for the page request |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string context = "{\"pagination\":{\"rowsPerPage\":50,\"pageNumber\":1},\"searchCriteria\":{\"groupType\":\"BLUE\"},\"sortCriteria\":{\"createdAt\":1,\"updatedAt\":-1}}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.Group.ListGroupsPage(context, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *context = "{\"pagination\":{\"rowsPerPage\":50,\"pageNumber\":1},\"searchCriteria\":{\"groupType\":\"BLUE\"},\"sortCriteria\":{\"createdAt\":1,\"updatedAt\":-1}}";

<%= data.branding.codePrefix %>->getGroup()->listGroupsPage(context, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *context = @"{\"pagination\":{\"rowsPerPage\":50,\"pageNumber\":1},\"searchCriteria\":{\"groupType\":\"BLUE\"},\"sortCriteria\":{\"createdAt\":1,\"updatedAt\":-1}}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupService] listGroupsPage:context
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String context = "{\"pagination\":{\"rowsPerPage\":50,\"pageNumber\":1},\"searchCriteria\":{\"groupType\":\"BLUE\"},\"sortCriteria\":{\"createdAt\":1,\"updatedAt\":-1}}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroup().listGroupsPage(context, this);

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
        "rowsPerPage": 50,
        "pageNumber": 1
    },
    "searchCriteria": {
        "groupType": "BLUE"
    },
    "sortCriteria": {
        "createdAt": 1,
        "updatedAt": -1
    }
};

<%= data.branding.codePrefix %>.group.listGroupsPage(context, result =>
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
        "rowsPerPage": 50,
        "pageNumber": 1
    },
    "searchCriteria": {
        "groupType": "BLUE"
    },
    "sortCriteria": {
        "createdAt": 1,
        "updatedAt": -1
    }
};

ServerResponse result = await <%= data.branding.codePrefix %>.groupService.listGroupsPage(context:context);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var context = {
    "pagination": {
        "rowsPerPage": 50,
        "pageNumber": 1
    },
    "searchCriteria": {
        "groupType": "BLUE"
    },
    "sortCriteria": {
        "createdAt": 1,
        "updatedAt": -1
    }
};
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.listGroupsPage(context);
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
	"service": "group",
	"operation": "LIST_GROUPS_PAGE",
	"data": {
		"context": {
			"pagination": {
				"rowsPerPage": 50,
				"pageNumber": 1
			},
			"searchCriteria": {
				"groupType": "BLUE"
			},
			"sortCriteria": {
				"createdAt": 1,
				"updatedAt": -1
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
        "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJnYW1lSWQiOiIxMzIyOSJ9LCJzb3J0Q3JpdGVyaWEiOnt9LCJwYWdpbmF0aW9uIjp7InJvd3NQZXJQYWdlIjo1MCwicGFnZU51bWJlciI6MSwiZG9Db3VudCI6dHJ1ZSwic2tpcFJlY291bnQiOmZhbHNlfSwib3B0aW9ucyI6bnVsbCwicmVzdWx0Q291bnQiOjF9",
        "results": {
            "count": 1,
            "page": 1,
            "items": [
                {
                    "groupType": "group11",
                    "groupId": "d373ff92-3327-4176-85ed-3565a09c43fa",
                    "memberCount": 2,
                    "name": "agroup",
                    "invitedPendingMemberCount": 0,
                    "requestingPendingMemberCount": 0,
                    "ownerId": "8bd564a7-3f91-4a98-a4b3-43cd7d266133",
                    "version": 2,
                    "summaryData": {},
                    "isOpenGroup": true
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
