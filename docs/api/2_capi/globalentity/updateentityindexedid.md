# UpdateEntityIndexedId
## Overview
Updates an existing entity's IndexedId on the server.

<PartialServop service_name="globalEntity" operation_name="UPDATE_INDEXED_ID" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityId = "a-entity-id";
int version = 2;
string entityIndexedId = "entityId1";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GlobalEntityService.UpdateEntityIndexedId(entityId, version, entityIndexedId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityId = "a-entity-id";
int version = 2;
const char *entityIndexedId = "entityId1";
<%= data.branding.codePrefix %>->getGlobalEntityService()->updateEntityIndexedId(entityId, version, entityIndexedId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityId = @"a-entity-id";
int version = 2;
NSString *entityIndexedId = @"entityId1";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> globalEntityService] updateEntityIndexedId:entityId
                    version:version
            entityIndexedId:entityIndexedId
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
String entityIndexedId = "entityId1";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGlobalEntityService().updateEntityIndexedId(entityId, version, entityIndexedId, this);

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
var entityIndexedId = "entityId1";

<%= data.branding.codePrefix %>.globalEntity.updateEntityIndexedId(entityId, version, entityIndexedId, result =>
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
var entityIndexedId = "entityId1";
var globalEntityProxy = bridge.getGlobalEntityServiceProxy();

var postResult = globalEntityProxy.updateEntityIndexedId(entityId, version, entityIndexedId);
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
	"operation": "UPDATE_INDEXED_ID",
	"data": {
		"entityId": "the-entity-id",
		"version": 2,
		"entityIndexedId": "entityId1"
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
    "entityId": "218d19d1-cda9-48a7-a918-a796281219f1",
    "ownerId": "77ce8889-20b7-4d01-b248-e0beb747f1b4",
    "entityType": "address",
    "entityIndexedId": "entityId1",
    "version": 4,
    "acl": {
      "other": 1
    },
    "expiresAt": 9223372036854776000,
    "timeToLive": -1,
    "createdAt": 1557939144108,
    "updatedAt": 1557939241957
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityId | The id of the entity to update 
version | The version of the entity to update. Use -1 to indicate the newest version 
entityIndexedId | InxdexedId of the entity to update. 


