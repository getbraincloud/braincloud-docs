# IncrementGlobalEntityData
## Overview
Partial increment of global entity data field items. Partial set of items incremented as specified.

<PartialServop service_name="globalEntity" operation_name="INCREMENT_GLOBAL_ENTITY_DATA" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityId = "a-entity-id";
string jsonEntityData = "{\"field1\":-1.5,\"field2\":{\"field2-1\":6,\"field2-new\":63.6},\"field3-new\":3}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GlobalEntityService.IncrementGlobalEntityData(entityId, jsonEntityData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityId = "a-entity-id";
const char *jsonEntityData = "{\"field1\":-1.5,\"field2\":{\"field2-1\":6,\"field2-new\":63.6},\"field3-new\":3}";

<%= data.branding.codePrefix %>->getGlobalEntityService()->incrementGlobalEntityData(entityId, jsonEntityData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityId = @"a-entity-id";
NSString *jsonEntityData = @"{\"field1\":-1.5,\"field2\":{\"field2-1\":6,\"field2-new\":63.6},\"field3-new\":3}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> globalEntityService] incrementGlobalEntityData:entityId
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
String entityId = "a-entity-id";
String jsonEntityData = "{\"field1\":-1.5,\"field2\":{\"field2-1\":6,\"field2-new\":63.6},\"field3-new\":3}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGlobalEntityService().incrementGlobalEntityData(entityId, jsonEntityData, this);

public void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonEntityData)
{
    System.out.print(String.format("Success | %s", jsonEntityData.toString()));
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
var jsonEntityData = {
    "field1": -1.5,
    "field2": {
        "field2-1": 6,
        "field2-new": 63.6
    },
    "field3-new": 3
};

<%= data.branding.codePrefix %>.globalEntity.incrementGlobalEntityData(entityId, jsonEntityData, result =>
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
var jsonEntityData = {
    "field1": -1.5,
    "field2": {
        "field2-1": 6,
        "field2-new": 63.6
    },
    "field3-new": 3
};
var globalEntityProxy = bridge.getGlobalEntityServiceProxy();

var postResult = globalEntityProxy.incrementGlobalEntityData(entityId, jsonEntityData);
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
	"operation": "INCREMENT_GLOBAL_ENTITY_DATA",
	"data": {
		"entityId": "the-entity-id",
		"data": {
			"field1": -1.5,
			"field2": {
				"field2-1": 6,
				"field2-new": 63.6
			},
			"field3-new": 3
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
        "ownerId": "784cc6c6-4569-4d75-bd10-62dwa8ae0218",
        "entityType": "test",
        "entityIndexedId" : "indexTest",
        "version": 2,
        "data": {
            "test": 1234
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
jsonEntityData | The entity's data object


