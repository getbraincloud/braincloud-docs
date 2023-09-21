# CreateEntity
## Overview
Method creates a new entity on the server.

<PartialServop service_name="entity" operation_name="CREATE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityType = "address";
string jsonEntityData = "{\"street\":\"1309 Carling\"}";
string jsonEntityAcl = "{\"other\":0}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.EntityService.CreateEntity(entityType, jsonEntityData, jsonEntityAcl, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityType = "address";
const char *jsonEntityData = "{\"street\":\"1309 Carling\"}";
const char *jsonEntityAcl = "{\"other\":0}";
<%= data.branding.codePrefix %>->getEntityService()->createEntity(entityType, jsonEntityData, jsonEntityAcl, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityType = @"address";
NSString *jsonEntityData = @"{\"street\":\"1309 Carling\"}";
NSString *jsonEntityAcl = @"{\"other\":0}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> entityService] createEntity:entityType
             jsonEntityData:jsonEntityData
              jsonEntityAcl:jsonEntityAcl
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
String jsonEntityData = "{\"street\":\"1309 Carling\"}";
String jsonEntityAcl = "{\"other\":0}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getEntityService().createEntity(entityType, jsonEntityData, jsonEntityAcl, this);

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
var jsonEntityData = {
    "street": "1309 Carling"
};
var jsonEntityAcl = {
    "other": 0
};

<%= data.branding.codePrefix %>.entity.createEntity(entityType, jsonEntityData, jsonEntityAcl, result =>
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
var jsonEntityData = {
    "street": "1309 Carling"
};
var jsonEntityAcl = {
    "other": 0
};
var entityProxy = bridge.getEntityServiceProxy();

var postResult = entityProxy.createEntity(entityType, jsonEntityData, jsonEntityAcl);
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
	"operation": "CREATE",
	"data": {
		"entityType": "address",
		"data": {
			"street": "1309 Carling"
		},
		"acl": {
			"other": 0
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
    "createdAt": 1582645074383,
    "entityType": "address",
    "entityId": "6a3d791b-c6c9-416a-8b00-a95b17ea630f",
    "acl": {
      "other": 0
    },
    "version": 1,
    "updatedAt": 1582645074383
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The entity type as defined by the user
data | The entity's data object
acl | The entity's [Access Control List](/api/appendix/acl) as object. A null ACL implies default permissions which make the entity readable/writeable by only the user.


