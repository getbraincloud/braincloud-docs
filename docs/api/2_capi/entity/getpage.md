# GetPage
## Overview
Method uses a paging system to iterate through user entities.

After retrieving a page of entities with this method use [getPageOffset](/api/capi/entity/getpageoffset) to retrieve previous or next pages.

See the [Generic Paged Queries](/api/appendix/genericpagedqueries) documentation for creating the context object.

Context example:
```
{
    "pagination": {
        "rowsPerPage": 50,
        "pageNumber": 1
    },
    "searchCriteria": {
        "entityType": "address"
    },
    "sortCriteria": {
        "createdAt": 1,
        "updatedAt": -1
    }
}
```

<PartialServop service_name="entity" operation_name="GET_PAGE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string context = "{\"pagination\":{\"rowsPerPage\":50,\"pageNumber\":1},\"searchCriteria\":{\"entityType\":\"address\"},\"sortCriteria\":{\"createdAt\":1,\"updatedAt\":-1}}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.EntityService.GetPage(context, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *context = "{\"pagination\":{\"rowsPerPage\":50,\"pageNumber\":1},\"searchCriteria\":{\"entityType\":\"address\"},\"sortCriteria\":{\"createdAt\":1,\"updatedAt\":-1}}";

<%= data.branding.codePrefix %>->getEntityService()->getPage(context, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *context = @"{\"pagination\":{\"rowsPerPage\":50,\"pageNumber\":1},\"searchCriteria\":{\"entityType\":\"address\"},\"sortCriteria\":{\"createdAt\":1,\"updatedAt\":-1}}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> entityService] getPage:context
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String context = "{\"pagination\":{\"rowsPerPage\":50,\"pageNumber\":1},\"searchCriteria\":{\"entityType\":\"address\"},\"sortCriteria\":{\"createdAt\":1,\"updatedAt\":-1}}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getEntityService().getPage(context, this);

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
        "entityType": "address"
    },
    "sortCriteria": {
        "createdAt": 1,
        "updatedAt": -1
    }
};

<%= data.branding.codePrefix %>.entity.getPage(context, result =>
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
        "entityType": "address"
    },
    "sortCriteria": {
        "createdAt": 1,
        "updatedAt": -1
    }
};
var entityProxy = bridge.getEntityServiceProxy();

var postResult = entityProxy.getPage(context);
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
	"service": "entity",
	"operation": "GET_PAGE",
	"data": {
		"context": {
			"pagination": {
				"rowsPerPage": 50,
				"pageNumber": 1
			},
			"searchCriteria": {
				"entityType": "address"
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
			"count": 200,
			"items": [{
				"entityId": "00edfd8e-5028-45d5-95d4-b1869cf2afaa",
				"entityType": "testEntity",
				"version": 1,
				"data": {
					"testName": "Test Name 01"
				},
				"acl": {
					"other": 2
				},
				"createdAt": 1437505537168,
				"updatedAt": 1437505537168
			}],
			"page": 1,
			"moreAfter": true
		},
		"context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjoiYnVpbGRpbmciLCJnYW
		1lSWQiOiIxMDI4NyIsIiRvciI6W3sib3duZXJJZCI6Ijk5MjM4ZmFiLTkxYTItNDdiYy1
		iMDExLWJjMThhN2IyOWY3NiJ9LHsiYWNsLm90aGVyIjp7IiRuZSI6MH19XX0sInNvcnRD
		cml0ZXJpYSI6eyJjcmVhdGVkQXQiOjEsInVwZGF0ZWRBdCI6LTF9LCJwYWdpbmF0aW9uI
		jp7InJvd3NQZXJQYWdlIjo1MCwicGFnZU51bWJlciI6NH0sIm9wdGlvbnMiOm51bGx9"
	}
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
context | The JSON context for the page request.
#### Status Codes
Code | Name | Description
---- | ---- | -----------
40384 | INVALID_QUERY_CONTEXT | Invalid query context


