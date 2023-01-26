# GetSharedEntitiesListForProfileId
## Overview
Method gets list of shared entities for the specified user based on type and/or where clause.

Fields available for use in the 'where' clause are:

 - entityType
 - createdAt
 - updatedAt

 Along with all custom data (using `data.`).  For more information on the query syntax see [here](/api/appendix/mongodbwherequeries).

<PartialServop service_name="entity" operation_name="READ_SHARED_ENTITIES_LIST" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string targetProfileId = "profile1";
string whereJson = "{\"entityType\":\"address\",\"data.street\":\"1309 Carling\"}";
string orderByJson = "{\"data.street\":1}";
int maxReturn = 50;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.EntityService.GetSharedEntitiesListForProfileId(targetProfileId, whereJson, orderByJson, maxReturn, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *targetProfileId = "profile1";
const char *whereJson = "{\"entityType\":\"address\",\"data.street\":\"1309 Carling\"}";
const char *orderByJson = "{\"data.street\":1}";
int maxReturn = 50;
<%= data.branding.codePrefix %>->getEntityService()->getSharedEntitiesListForProfileId(targetProfileId, whereJson, orderByJson, maxReturn, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *targetProfileId = @"profile1";
NSString *whereJson = @"{\"entityType\":\"address\",\"data.street\":\"1309 Carling\"}";
NSString *orderByJson = @"{\"data.street\":1}";
int maxReturn = 50;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> entityService] getSharedEntitiesListForProfileId:targetProfileId
                  whereJson:whereJson
                orderByJson:orderByJson
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
String targetProfileId = "profile1";
String whereJson = "{\"entityType\":\"address\",\"data.street\":\"1309 Carling\"}";
String orderByJson = "{\"data.street\":1}";
int maxReturn = 50;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getEntityService().getSharedEntitiesListForProfileId(targetProfileId, whereJson, orderByJson, maxReturn, this);

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
var targetProfileId = "profile1";
var whereJson = {
    "entityType": "address",
    "data.street": "1309 Carling"
};
var orderByJson = {
    "data.street": 1
};
var maxReturn = 50;

<%= data.branding.codePrefix %>.entity.getSharedEntitiesListForProfileId(targetProfileId, whereJson, orderByJson, maxReturn, result =>
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
var targetProfileId = "profile1";
var whereJson = {
    "entityType": "address",
    "data.street": "1309 Carling"
};
var orderByJson = {
    "data.street": 1
};
var maxReturn = 50;
var entityProxy = bridge.getEntityServiceProxy();

var postResult = entityProxy.getSharedEntitiesListForProfileId(targetProfileId, whereJson, orderByJson, maxReturn);
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
	"operation": "READ_SHARED_ENTITIES_LIST",
	"data": {
		"targetProfileId": "profile1",
		"where": {
			"entityType": "address",
			"data.street": "1309 Carling"
		},
		"orderBy": {
			"data.street": 1
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
        "entities": [
            {
                "entityId": "544db68a-48ad-4fc9-9f44-5fd36fc6445f",
                "entityType": "publicInfo",
                "version": 1,
                "data": {
                    "name": "john",
                    "age": 30
                },
                "acl": {
                    "other": 1
                },
                "createdAt": 1395943044322,
                "updatedAt": 1395943044322
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
targetProfileId | The profile ID to retrieve shared entities for
whereJson | Mongo style query string
orderByJson | Specifies the order in which the query returns matching documents. The sort parameter consists of a field followed by an ascending(1)/descending flag(-1). eg. `{ "name" : 1}` sorts by name in ascending order
maxReturn | The maximum number of entities to return


