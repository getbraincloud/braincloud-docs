# CreateEntityWithIndexedId
## Overview
Method creates a new entity on the server with an indexed ID.

<PartialServop service_name="globalEntity" operation_name="CREATE_WITH_INDEXED_ID" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityType = "address";
string indexedId = "entityId1";
int timeToLive = -1;
ACL jsonEntityAcl = new ACL(ACL.Access.None);
string jsonEntityData = "{\"street\":\"1309 Carling\"}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GlobalEntityService.CreateEntityWithIndexedId(entityType, indexedId, timeToLive, jsonEntityAcl, jsonEntityData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityType = "address";
const char *indexedId = "entityId1";
int timeToLive = -1;
const char *jsonEntityAcl = "{\"other\":1}";
const char *jsonEntityData = "{\"street\":\"1309 Carling\"}";
<%= data.branding.codePrefix %>->getGlobalEntityService()->createEntityWithIndexedId(entityType, indexedId, timeToLive, jsonEntityAcl, jsonEntityData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityType = @"address";
NSString *indexedId = @"entityId1";
int timeToLive = -1;
NSString *jsonEntityAcl = [ACL getAclJson:ReadWrite];
NSString *jsonEntityData = @"{\"street\":\"1309 Carling\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> globalEntityService] createEntityWithIndexedId:entityType
                  indexedId:indexedId
                 timeToLive:timeToLive
              jsonEntityAcl:jsonEntityAcl
             jsonEntityData:jsonEntityData
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String entityType = "address";
String indexedId = "entityId1";
int timeToLive = -1;
String jsonEntityAcl = "{\"other\":1}";
String jsonEntityData = "{\"street\":\"1309 Carling\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGlobalEntityService().createEntityWithIndexedId(entityType, indexedId, timeToLive, jsonEntityAcl, jsonEntityData, this);

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
var entityType = "address";
var indexedId = "entityId1";
var timeToLive = -1;
var jsonEntityAcl = {
    "other": 1
};
var jsonEntityData = {
    "street": "1309 Carling"
};

<%= data.branding.codePrefix %>.globalEntity.createEntityWithIndexedId(entityType, indexedId, timeToLive, jsonEntityAcl, jsonEntityData, result =>
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
var entityType = "address";
var indexedId = "entityId1";
var timeToLive = -1;
var jsonEntityAcl = {
    "other": 1
};
var jsonEntityData = {
    "street": "1309 Carling"
};
var globalEntityProxy = bridge.getGlobalEntityServiceProxy();

var postResult = globalEntityProxy.createEntityWithIndexedId(entityType, indexedId, timeToLive, jsonEntityAcl, jsonEntityData);
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
	"operation": "CREATE_WITH_INDEXED_ID",
	"data": {
		"entityType": "address",
		"entityIndexedId": "entityId1",
		"timeToLive": -1,
		"acl": {
			"other": 1
		},
		"data": {
			"street": "1309 Carling"
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
        "gameId": "123456",
        "entityId": "14281c38-abf6-4ca2-8436-b2bdwas8d5a9a",
        "ownerId": "784cc6c6-4569-4d75-bd10-62dwa8ae0218",
        "entityType": "test",
        "entityIndexedId" : "indexTest",
        "version": 1,
        "acl": {
            "other": 1
        },
        "expiresAt": 1449861422588,
        "timeToLive": 34567,
        "createdAt": 1449861388021,
        "updatedAt": 1449861388021
    },
    "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The entity type as defined by the user
indexedId | A secondary ID that will be indexed
timeToLive | Sets expiry time for entity in milliseconds if > 0
jsonEntityAcl | The entity's [Access Control List](/api/appendix/acl) as object. A null ACL implies default permissions which make the entity readable/writeable by only the user.
jsonEntityData | The entity's data object


