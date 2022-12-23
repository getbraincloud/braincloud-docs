# ReadGroupEntitiesPage
## Overview
Retrieve a page of group entity information based on the specified context. The groupId is required as part of the searchCriteria of the context.

After retrieving a page of entities with this method use [<code>getPageOffset</code>](/api/capi/globalentity/getpageoffset) to retrieve previous or next pages.

See the [Generic Paged Queries](/api/appendix/genericpagedqueries) documentation for creating the context object.

<PartialServop service_name="group" operation_name="READ_GROUP_ENTITIES_PAGE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string context = "{\"pagination\":{\"rowsPerPage\":50,\"pageNumber\":1},\"searchCriteria\":{\"groupId\":\"130745f4-df57-4162-8f90-d89214fc8512\",\"entityType\":\"BLUE\"},\"sortCriteria\":{\"createdAt\":1,\"updatedAt\":-1}}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.Group.ReadGroupEntitiesPage(context, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *context = "{\"pagination\":{\"rowsPerPage\":50,\"pageNumber\":1},\"searchCriteria\":{\"groupId\":\"130745f4-df57-4162-8f90-d89214fc8512\",\"entityType\":\"BLUE\"},\"sortCriteria\":{\"createdAt\":1,\"updatedAt\":-1}}";

<%= data.branding.codePrefix %>->getGroup()->readGroupEntitiesPage(context, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *context = @"{\"pagination\":{\"rowsPerPage\":50,\"pageNumber\":1},\"searchCriteria\":{\"groupId\":\"130745f4-df57-4162-8f90-d89214fc8512\",\"entityType\":\"BLUE\"},\"sortCriteria\":{\"createdAt\":1,\"updatedAt\":-1}}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupService] readGroupEntitiesPage:context
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String context = "{\"pagination\":{\"rowsPerPage\":50,\"pageNumber\":1},\"searchCriteria\":{\"groupId\":\"130745f4-df57-4162-8f90-d89214fc8512\",\"entityType\":\"BLUE\"},\"sortCriteria\":{\"createdAt\":1,\"updatedAt\":-1}}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroup().readGroupEntitiesPage(context, this);

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
        "groupId": "130745f4-df57-4162-8f90-d89214fc8512",
        "entityType": "BLUE"
    },
    "sortCriteria": {
        "createdAt": 1,
        "updatedAt": -1
    }
};

<%= data.branding.codePrefix %>.group.readGroupEntitiesPage(context, result =>
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
var context = {
    "pagination": {
        "rowsPerPage": 50,
        "pageNumber": 1
    },
    "searchCriteria": {
        "groupId": "130745f4-df57-4162-8f90-d89214fc8512",
        "entityType": "BLUE"
    },
    "sortCriteria": {
        "createdAt": 1,
        "updatedAt": -1
    }
};
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.readGroupEntitiesPage(context);
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
	"operation": "READ_GROUP_ENTITIES_PAGE",
	"data": {
		"context": {
			"pagination": {
				"rowsPerPage": 50,
				"pageNumber": 1
			},
			"searchCriteria": {
				"groupId": "130745f4-df57-4162-8f90-d89214fc8512",
				"entityType": "BLUE"
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
    "status": 200,
    "data": {
        "_serverTime": 1637946319239,
        "results": {
            "moreBefore": false,
            "count": 3,
            "items": [
                {
                    "gameId": "20595",
                    "groupId": "fee55a37-5e86-43e8-942e-06bcbe1b701e",
                    "entityId": "91cfece7-debb-4698-ba6b-cd2cb432458d",
                    "ownerId": null,
                    "entityType": "BLUE",
                    "createdAt": 1462812680359,
                    "updatedAt": 1462812680359,
                    "version": 1,
                    "data": {},
                    "acl": {
                        "member": 2,
                        "other": 1
                    }
                }
            ],
            "page": 1,
            "moreAfter": true
        },
        "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJncm91cElkIjoiZmVlNTVhMzct"
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
context | The JSON context for the page request


