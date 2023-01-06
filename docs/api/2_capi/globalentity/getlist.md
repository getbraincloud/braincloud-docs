# GetList
## Overview
Method gets list of entities from the server base on type and/or where clause.

Fields available for use in the 'where' clause are:

 - entityType
 - entityIndexedId
 - createdAt
 - updatedAt
 - ownerId
 - timeToLive

Along with all custom data (using `data.`).  For more information on the query syntax see [here](/api/appendix/mongodbwherequeries).

<PartialServop service_name="globalEntity" operation_name="GET_LIST" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string where = "{\"entityType\":\"address\"}";
string orderBy = "{\"data.address\":1}";
int maxReturn = 50;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GlobalEntityService.GetList(where, orderBy, maxReturn, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *where = "{\"entityType\":\"address\"}";
const char *orderBy = "{\"data.address\":1}";
int maxReturn = 50;

<%= data.branding.codePrefix %>->getGlobalEntityService()->getList(where, orderBy, maxReturn, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *where = @"{\"entityType\":\"address\"}";
NSString *orderBy = @"{\"data.address\":1}";
int maxReturn = 50;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> globalEntityService] getList:where
                    orderBy:orderBy
                  maxReturn:maxReturn
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String where = "{\"entityType\":\"address\"}";
String orderBy = "{\"data.address\":1}";
int maxReturn = 50;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGlobalEntityService().getList(where, orderBy, maxReturn, this);

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
var where = {
    "entityType": "address"
};
var orderBy = {
    "data.address": 1
};
var maxReturn = 50;

<%= data.branding.codePrefix %>.globalEntity.getList(where, orderBy, maxReturn, result =>
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
var where = {
    "entityType": "address"
};
var orderBy = {
    "data.address": 1
};
var maxReturn = 50;
var globalEntityProxy = bridge.getGlobalEntityServiceProxy();

var postResult = globalEntityProxy.getList(where, orderBy, maxReturn);
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
	"service": "globalEntity",
	"operation": "GET_LIST",
	"data": {
		"where": {
			"entityType": "address"
		},
		"orderBy": {
			"data.address": 1
		},
		"maxReturn": 50
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
        "entityList": [
            {
                "gameId": "123456",
                "entityId": "e919ffc2-c3f7-4cc0-a0f1-b3eb857c4ed0",
                "ownerId": "7f416676-9e9d-422f-85b2-740185ac3139",
                "entityType": "testGlobalEntity",
                "entityIndexedId": null,
                "version": 1,
                "data": {
                    "globalTestName": "Test Name 01"
                },
                "acl": {
                    "other": 0
                },
                "expiresAt": 9223372036854775800,
                "timeToLive": 0,
                "createdAt": 1471010732135,
                "updatedAt": 1471010732135
            }
        ],
        "_serverTime": 1637946319239,
        "entityListCount": 1
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
where | Mongo style query string
orderBy | Specifies the order in which the query returns matching documents. The sort parameter consists of a field followed by an ascending(1)/descending flag(-1). eg. `{ "name" : 1}` sorts by name in ascending order
maxReturn | The maximum number of entities to return


