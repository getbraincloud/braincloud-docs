# UpdateEntity
## Overview
Method updates an entity on the server. This operation results in the entity data being completely replaced by the passed in JSON string.

This method is affected by versioning. See the [versioning documentation](/api/appendix/version) for more information.

<PartialServop service_name="entity" operation_name="UPDATE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityId = "someEntityId";
string entityType = "address";
string jsonEntityData = "{\"street\":\"1309 Carling Avenue, Ottawa, ON\"}";
string jsonEntityAcl = "{\"other\":0}";
int version = -1;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.EntityService.UpdateEntity(entityId, entityType, jsonEntityData, jsonEntityAcl, version, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityId = "someEntityId";
const char *entityType = "address";
const char *jsonEntityData = "{\"street\":\"1309 Carling Avenue, Ottawa, ON\"}";
const char *jsonEntityAcl = "{\"other\":0}";
int version = -1;
<%= data.branding.codePrefix %>->getEntityService()->updateEntity(entityId, entityType, jsonEntityData, jsonEntityAcl, version, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityId = @"someEntityId";
NSString *entityType = @"address";
NSString *jsonEntityData = @"{\"street\":\"1309 Carling Avenue, Ottawa, ON\"}";
NSString *jsonEntityAcl = @"{\"other\":0}";
int version = -1;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> entityService] updateEntity:entityId
                 entityType:entityType
             jsonEntityData:jsonEntityData
              jsonEntityAcl:jsonEntityAcl
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
String entityType = "address";
String jsonEntityData = "{\"street\":\"1309 Carling Avenue, Ottawa, ON\"}";
String jsonEntityAcl = "{\"other\":0}";
int version = -1;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getEntityService().updateEntity(entityId, entityType, jsonEntityData, jsonEntityAcl, version, this);

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
var entityType = "address";
var jsonEntityData = {
    "street": "1309 Carling Avenue, Ottawa, ON"
};
var jsonEntityAcl = {
    "other": 0
};
var version = -1;

<%= data.branding.codePrefix %>.entity.updateEntity(entityId, entityType, jsonEntityData, jsonEntityAcl, version, result =>
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
var entityType = "address";
var jsonEntityData = {
    "street": "1309 Carling Avenue, Ottawa, ON"
};
var jsonEntityAcl = {
    "other": 0
};
var version = -1;
var entityProxy = bridge.getEntityServiceProxy();

var postResult = entityProxy.updateEntity(entityId, entityType, jsonEntityData, jsonEntityAcl, version);
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
	"operation": "UPDATE",
	"data": {
		"entityId": "someEntityId",
		"entityType": "address",
		"data": {
			"street": "1309 Carling Avenue, Ottawa, ON"
		},
		"acl": {
			"other": 0
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

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40332 | UPDATE_FAILED | An update operation failed. Used for entities, global entities, and updates on the user.

</details>


## Method Parameters
Parameter | Description
--------- | -----------
entityId | The id of the entity to update
entityType | The entity type as defined by the user
jsonEntityData | The entity's data object
jsonEntityAcl | The entity's [Access Control List](/api/appendix/acl) as object. A null ACL implies default permissions which make the entity readable/writeable by only the user.
version | The version of the entity to update. Use -1 to indicate the newest version
#
