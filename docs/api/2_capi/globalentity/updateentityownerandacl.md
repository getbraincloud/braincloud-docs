# UpdateEntityOwnerAndAcl
## Overview
Method updates an existing entity's owner and ACL on the server.

This method is affected by versioning. See the [versioning documentation](/api/appendix/version) for more information.

<PartialServop service_name="globalEntity" operation_name="UPDATE_ENTITY_OWNER_AND_ACL" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityId = "a-entity-id";
int version = 2;
string ownerId = "sdjhghfhgsdjkkfjg";
ACL jsonEntityAcl = new ACL(ACL.Access.Read);
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GlobalEntityService.UpdateEntityOwnerAndAcl(entityId, version, entityId, jsonEntityAcl, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityId = "a-entity-id";
int version = 2;
const char *ownerId = "sdjhghfhgsdjkkfjg";
const char *jsonEntityAcl = "{\"other\":1}";

<%= data.branding.codePrefix %>->getGlobalEntityService()->updateEntityOwnerAndAcl(entityId, version, entityId, jsonEntityAcl, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityId = @"a-entity-id";
int version = 2;
NSString *ownerId = @"sdjhghfhgsdjkkfjg";
NSString * jsonEntityAcl = [ACL getAclJson:Read];
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> globalEntityService] updateEntityOwnerAndAcl:entityId
                    version:version
                    ownerId:ownerId
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
String entityId = "a-entity-id";
int version = 2;
String ownerId = "sdjhghfhgsdjkkfjg";
String jsonEntityAcl = "{\"other\":1}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGlobalEntityService().updateEntityOwnerAndAcl(ownerId, entityId, version, jsonEntityAcl, this);

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
var entityId = "a-entity-id";
var version = 2;
var ownerId = "sdjhghfhgsdjkkfjg";
var jsonEntityAcl = {
    "other": 1
};

<%= data.branding.codePrefix %>.globalEntity.updateEntityOwnerAndAcl(entityId, version, ownerId, jsonEntityAcl, result =>
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
var entityId = "a-entity-id";
var version = 2;
var ownerId = "sdjhghfhgsdjkkfjg";
var jsonEntityAcl = {
    "other": 1
};
var globalEntityProxy = bridge.getGlobalEntityServiceProxy();

var postResult = globalEntityProxy.updateEntityOwnerAndAcl(entityId, version, ownerId, jsonEntityAcl);
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
	"operation": "UPDATE_ENTITY_OWNER_AND_ACL",
	"data": {
		"ownerId": "sdjhghfhgsdjkkfjg",
		"entityId": "the-entity-id",
		"version": 2,
		"acl": {
			"other": 1
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
        "gameId": "123456",
        "entityId": "14281c38-abf6-4ca2-8436-b2bdwas8d5a9a",
        "ownerId": "g45egg4gg-gsstgtrg-gfgsdf",
        "entityType": "test",
        "entityIndexedId" : "indexTest",
        "version": 1,
        "data": {
            "testData": 1234
        },
        "acl": {
            "other": 1
        },
        "expiresAt": 1449861422588,
        "timeToLive": 34567,
        "createdAt": 1449861388021,
        "updatedAt": 1449861388021
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityId | The id of the entity to update
version | The version of the entity to update. Use -1 to indicate the newest version
ownerId | The id of the new owner
jsonEntityAcl | The entity's [Access Control List](/api/appendix/acl) as json.
#### Status Codes
Code | Name | Description
---- | ---- | -----------
40344 | ENTITY_VERSION_MISMATCH | The version passed in does not match the version of the entity on the server
40532 | INVALID_OWNER_ID | The ownerId passed does not reference a valid user on the server


