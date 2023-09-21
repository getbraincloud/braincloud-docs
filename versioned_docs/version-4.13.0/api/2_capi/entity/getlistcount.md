# GetListCount
## Overview
Method gets a count of entities based on the where clause.

Fields available for use in the 'where' clause are:

 - entityType
 - createdAt
 - updatedAt

 Along with all custom data (using `data.`).  For more information on the query syntax see [here](/api/appendix/mongodbwherequeries).

<PartialServop service_name="entity" operation_name="GET_LIST_COUNT" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string whereJson = "{\"entityType\":\"address\"}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.EntityService.GetListCount(whereJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *whereJson = "{\"entityType\":\"address\"}";
<%= data.branding.codePrefix %>->getEntityService()->getListCount(whereJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *whereJson = @"{\"entityType\":\"address\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> entityService] getListCount:whereJson
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String whereJson = "{\"entityType\":\"address\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getEntityService().getListCount(whereJson, this);

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
var whereJson = {
    "entityType": "address"
};

<%= data.branding.codePrefix %>.entity.getListCount(whereJson, result =>
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
var whereJson = {
    "entityType": "address"
};
var entityProxy = bridge.getEntityServiceProxy();

var postResult = entityProxy.getListCount(whereJson);
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
	"operation": "GET_LIST_COUNT",
	"data": {
		"where": {
			"entityType": "address"
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
        "entityListCount": 5
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
whereJson | Mongo style query string


