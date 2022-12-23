# UpdateSharedEntity
## Overview
Method updates a shared entity owned by another user. This operation results in the entity data being completely replaced by the passed in JSON string.

This method is affected by versioning. See the [versioning documentation](/api/appendix/version) for more information.

<PartialServop service_name="entity" operation_name="UPDATE_SHARED" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityId = "someEntityId";
string targetProfileId = "someProfileId";
string entityType = "address";
string jsonEntityData = "{\"street\":\"1309 Carling Avenue, Ottawa, ON\"}";
int version = -1;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.EntityService.UpdateSharedEntity(entityId, targetProfileId, entityType, jsonEntityData, version, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityId = "someEntityId";
const char *targetProfileId = "someProfileId";
const char *entityType = "address";
const char *jsonEntityData = "{\"street\":\"1309 Carling Avenue, Ottawa, ON\"}";
int version = -1;
<%= data.branding.codePrefix %>->getEntityService()->updateSharedEntity(entityId, targetProfileId, entityType, jsonEntityData, version, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityId = @"someEntityId";
NSString *targetProfileId = @"someProfileId";
NSString *entityType = @"address";
NSString *jsonEntityData = @"{\"street\":\"1309 Carling Avenue, Ottawa, ON\"}";
int version = -1;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> entityService] updateSharedEntity:entityId
            targetProfileId:targetProfileId
                 entityType:entityType
             jsonEntityData:jsonEntityData
                    version:version
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String entityId = "someEntityId";
String targetProfileId = "someProfileId";
String entityType = "address";
String jsonEntityData = "{\"street\":\"1309 Carling Avenue, Ottawa, ON\"}";
int version = -1;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getEntityService().updateSharedEntity(entityId, targetProfileId, entityType, jsonEntityData, version, this);

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
var entityId = "someEntityId";
var targetProfileId = "someProfileId";
var entityType = "address";
var jsonEntityData = {
    "street": "1309 Carling Avenue, Ottawa, ON"
};
var version = -1;

<%= data.branding.codePrefix %>.entity.updateSharedEntity(entityId, targetProfileId, entityType, jsonEntityData, version, result =>
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
var entityId = "someEntityId";
var targetProfileId = "someProfileId";
var entityType = "address";
var jsonEntityData = {
    "street": "1309 Carling Avenue, Ottawa, ON"
};
var version = -1;
var entityProxy = bridge.getEntityServiceProxy();

var postResult = entityProxy.updateSharedEntity(entityId, targetProfileId, entityType, jsonEntityData, version);
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
	"operation": "UPDATE_SHARED",
	"data": {
		"entityId": "someEntityId",
		"targetProfileId": "someProfileId",
		"entityType": "address",
		"data": {
			"street": "1309 Carling Avenue, Ottawa, ON"
		},
		"version": -1
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
		"entityId": "113db68a-48ad-4fc9-9f44-5fd36fc6445f",
		"entityType": "person",
		"version": 1,
		"data": {
			"name": "john",
			"age": 30
		},
		"acl": {
			"other": 0
		},
		"createdAt": 1395943044322,
		"updatedAt": 1395943044322
	}
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityId | The id of the entity to update
targetProfileId | The id of the entity's owner
entityType | The entity type as defined by the user
data | The entity's data object
version | The version of the entity to update. Use -1 to indicate the newest version
#### Status Codes
Code | Name | Description
---- | ---- | -----------
40332 | UPDATE_FAILED | An update operation failed. Used for entities, global entities, and updates on the user.


